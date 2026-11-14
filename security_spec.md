# Firestore Security Specification — BrainSpark 250

## Data Invariants
1. Every document in `/users/{userId}` belongs strictly to the authenticated user (`request.auth.uid == userId`) and contains no public list access across other users.
2. Every document in `/leaderboard/{userId}` contains strictly non-PII ranking fields (`uid`, `displayName`, `country`, `lang`, `score`, `levelsCleared`, `stars`, `streak`, `isPublic`, `createdAt`, `updatedAt`). Email addresses, phone numbers, and private save arrays are forbidden on `/leaderboard`.
3. Numeric bounds prevent fabricated overflow scores: `score >= 0 && score <= 500000`, `levelsCleared >= 0 && levelsCleared <= 250`, `stars >= 0 && stars <= 750`, `bulbs >= 0 && bulbs <= 9999`.
4. All `createdAt` and `updatedAt` timestamps must match `request.time`. `uid` and `createdAt` are immutable after creation.
5. All IDs match `^[a-zA-Z0-9_\\-]+$` with length `<= 128`. All strings enforce explicit `.size()` bounds.

## Dirty Dozen Adversarial Payloads (Must Return PERMISSION_DENIED)
1. Unauthenticated write to `/leaderboard/user1` -> Denied (`isSignedIn()`).
2. Unverified email write to `/leaderboard/user1` -> Denied (`email_verified == true`).
3. Identity spoofing: User A writing to `/leaderboard/userB` or setting `uid: "userB"` -> Denied (`userId == request.auth.uid` & `data.uid == request.auth.uid`).
4. Shadow/ghost field injection: Adding `isAdmin: true` or `email: "a@b.com"` on `/leaderboard/user1` -> Denied (`keys().hasOnly(...)`).
5. Score overflow poisoning: Setting `score: 999999999` -> Denied (`score <= 500000`).
6. Oversized displayName (1KB string) -> Denied (`displayName.size() <= 40`).
7. Forged timestamp (`createdAt` or `updatedAt` != `request.time`) -> Denied.
8. Mutating `createdAt` or `uid` on update -> Denied (`incoming().uid == existing().uid && incoming().createdAt == existing().createdAt`).
9. Query scraping private `/users` collection -> Denied (`resource.data.uid == request.auth.uid`).
10. Querying non-public leaderboard entries (`isPublic == false`) -> Denied (`resource.data.isPublic == true`).
11. Oversized `solvedIds` array (> 250 entries) -> Denied (`solvedIds.size() <= 250`).
12. Deleting another user's `/leaderboard/{userId}` or `/users/{userId}` -> Denied.

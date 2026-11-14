import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  getDocFromServer,
  getFirestore,
  limit,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
  where,
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { Language } from '../data/puzzles/types';
import { LeaderboardPlayer } from '../game/leaderboard';
import { clampProgressValues, sanitizeNickname } from '../game/scoring';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null,
) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}
void testConnection();

export function subscribeAuth(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

export async function signInWithGoogle() {
  return signInWithPopup(auth, googleProvider);
}

export async function signOutUser() {
  return signOut(auth);
}

export interface CloudSavePayload {
  displayName: string;
  country: string;
  lang: Language;
  score: number;
  bulbs: number;
  currentLevelId: number;
  streak: number;
  practiceUnlocked: boolean;
  solvedIds: number[];
  starsByLevel: Record<string, number>;
}

/**
 * Subscribe to real-time public global leaderboard via Firestore onSnapshot.
 */
export function subscribeGlobalLeaderboard(
  onUpdate: (entries: LeaderboardPlayer[], isLive: boolean) => void,
  onError?: (err: unknown) => void,
) {
  const path = 'leaderboard';
  const q = query(collection(db, path), where('isPublic', '==', true), limit(100));
  return onSnapshot(
    q,
    (snapshot) => {
      const entries: LeaderboardPlayer[] = [];
      snapshot.forEach((docSnap) => {
        const d = docSnap.data();
        if (typeof d.uid === 'string' && typeof d.displayName === 'string') {
          entries.push({
            uid: d.uid,
            displayName: d.displayName,
            country: typeof d.country === 'string' ? d.country : 'GL',
            lang: (['vi', 'en', 'es', 'ja'].includes(d.lang) ? d.lang : 'en') as Language,
            score: typeof d.score === 'number' ? d.score : 0,
            levelsCleared: typeof d.levelsCleared === 'number' ? d.levelsCleared : 0,
            stars: typeof d.stars === 'number' ? d.stars : 0,
            streak: typeof d.streak === 'number' ? d.streak : 0,
          });
        }
      });
      onUpdate(entries, !snapshot.metadata.fromCache);
    },
    (error) => {
      if (onError) onError(error);
      try {
        handleFirestoreError(error, OperationType.LIST, path);
      } catch {
        // Error logged structurally
      }
    },
  );
}

export async function loadUserProgress(uid: string): Promise<Partial<CloudSavePayload> | null> {
  const path = `users/${uid}`;
  try {
    const snap = await getDoc(doc(db, 'users', uid));
    if (!snap.exists()) return null;
    return snap.data() as Partial<CloudSavePayload>;
  } catch (error) {
    handleFirestoreError(error, OperationType.GET, path);
    return null;
  }
}

export async function syncProgressToCloud(uid: string, payload: CloudSavePayload): Promise<void> {
  const cleanName = sanitizeNickname(payload.displayName);
  const totalStars = Object.values(payload.starsByLevel).reduce((s, v) => s + v, 0);
  const clamped = clampProgressValues({
    score: payload.score,
    bulbs: payload.bulbs,
    levelsCleared: payload.solvedIds.length,
    stars: totalStars,
    streak: payload.streak,
    currentLevelId: payload.currentLevelId,
  });

  const userRef = doc(db, 'users', uid);
  const lbRef = doc(db, 'leaderboard', uid);

  const safeSolved = payload.solvedIds
    .filter((id) => Number.isInteger(id) && id >= 1 && id <= 500)
    .slice(0, 500);

  const safeStars: Record<string, number> = {};
  for (const [k, v] of Object.entries(payload.starsByLevel)) {
    const numId = Number(k);
    if (Number.isInteger(numId) && numId >= 1 && numId <= 500 && (v === 1 || v === 2 || v === 3)) {
      safeStars[String(numId)] = v;
    }
  }

  try {
    const existingUser = await getDoc(userRef);
    const existingData = existingUser.exists() ? existingUser.data() : null;
    await setDoc(userRef, {
      uid,
      displayName: cleanName,
      lang: payload.lang,
      score: clamped.score,
      bulbs: clamped.bulbs,
      currentLevelId: clamped.currentLevelId,
      streak: clamped.streak,
      practiceUnlocked: payload.practiceUnlocked,
      solvedIds: safeSolved,
      starsByLevel: safeStars,
      createdAt: existingData?.createdAt ?? serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, `users/${uid}`);
  }

  try {
    const existingLb = await getDoc(lbRef);
    const existingLbData = existingLb.exists() ? existingLb.data() : null;
    await setDoc(lbRef, {
      uid,
      displayName: cleanName,
      country: payload.country.slice(0, 8) || 'GL',
      lang: payload.lang,
      score: clamped.score,
      levelsCleared: clamped.levelsCleared,
      stars: clamped.stars,
      streak: clamped.streak,
      isPublic: true,
      createdAt: existingLbData?.createdAt ?? serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, `leaderboard/${uid}`);
  }
}

import { Language } from '../data/puzzles/types';

export interface LeaderboardPlayer {
  uid: string;
  displayName: string;
  country: string;
  lang: Language;
  score: number;
  levelsCleared: number;
  stars: number;
  streak: number;
  isSelf?: boolean;
  isSeed?: boolean;
  updatedAtMs?: number;
}

export const SEED_GLOBAL_PLAYERS: LeaderboardPlayer[] = [
  { uid: 'seed-minh', displayName: 'Minh Trí', country: 'VN', lang: 'vi', score: 34280, levelsCleared: 218, stars: 612, streak: 19, isSeed: true },
  { uid: 'seed-sora', displayName: 'Sora Takahashi', country: 'JP', lang: 'ja', score: 31850, levelsCleared: 204, stars: 579, streak: 14, isSeed: true },
  { uid: 'seed-elena', displayName: 'Elena Vance', country: 'US', lang: 'en', score: 27940, levelsCleared: 185, stars: 518, streak: 11, isSeed: true },
  { uid: 'seed-mateo', displayName: 'Mateo Ruiz', country: 'ES', lang: 'es', score: 22410, levelsCleared: 152, stars: 430, streak: 9, isSeed: true },
  { uid: 'seed-linh', displayName: 'Khánh Linh', country: 'VN', lang: 'vi', score: 17650, levelsCleared: 124, stars: 348, streak: 8, isSeed: true },
  { uid: 'seed-haruto', displayName: 'Haruto Sato', country: 'JP', lang: 'ja', score: 13200, levelsCleared: 96, stars: 266, streak: 6, isSeed: true },
  { uid: 'seed-claire', displayName: 'Claire Bennett', country: 'UK', lang: 'en', score: 8940, levelsCleared: 68, stars: 192, streak: 5, isSeed: true },
  { uid: 'seed-sofia', displayName: 'Sofía Morales', country: 'MX', lang: 'es', score: 4250, levelsCleared: 36, stars: 98, streak: 4, isSeed: true },
  { uid: 'seed-an', displayName: 'Gia Bảo', country: 'VN', lang: 'vi', score: 1450, levelsCleared: 14, stars: 39, streak: 3, isSeed: true },
];

/**
 * Merges live Firestore entries with global baseline challengers and the local player,
 * returning a deterministic ranked list plus the local player's 1-based rank.
 */
export function buildRankedLeaderboard(params: {
  remoteEntries: LeaderboardPlayer[];
  selfEntry: LeaderboardPlayer;
}): { ranked: LeaderboardPlayer[]; selfRank: number } {
  const map = new Map<string, LeaderboardPlayer>();

  for (const seed of SEED_GLOBAL_PLAYERS) {
    map.set(seed.uid, seed);
  }
  for (const remote of params.remoteEntries) {
    map.set(remote.uid, { ...remote, isSeed: false });
  }
  map.set(params.selfEntry.uid, { ...params.selfEntry, isSelf: true, isSeed: false });

  const ranked = Array.from(map.values()).sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.levelsCleared !== a.levelsCleared) return b.levelsCleared - a.levelsCleared;
    if (b.stars !== a.stars) return b.stars - a.stars;
    return a.displayName.localeCompare(b.displayName);
  });

  const selfRank = ranked.findIndex((p) => p.uid === params.selfEntry.uid) + 1;
  return { ranked, selfRank };
}

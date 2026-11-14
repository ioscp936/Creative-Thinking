import { Difficulty } from '../data/puzzles/types';

export const BASE_POINTS_BY_DIFFICULTY: Record<Difficulty, number> = {
  easy: 100,
  medium: 160,
  hard: 240,
  genius: 350,
};

export interface SolveOutcome {
  stars: 1 | 2 | 3;
  pointsEarned: number;
  bulbBonus: number;
}

/**
 * Pure deterministic scoring & star calculation for solving a puzzle.
 */
export function evaluateSolve(params: {
  difficulty: Difficulty;
  wrongAttempts: number;
  hintsUsed: number;
  streak: number;
  alreadySolved: boolean;
}): SolveOutcome {
  const { difficulty, wrongAttempts, hintsUsed, streak, alreadySolved } = params;

  let stars: 1 | 2 | 3 = 3;
  if (hintsUsed >= 2 || wrongAttempts >= 3) {
    stars = 1;
  } else if (hintsUsed === 1 || wrongAttempts >= 1) {
    stars = 2;
  }

  if (alreadySolved) {
    return {
      stars,
      pointsEarned: 0,
      bulbBonus: 0,
    };
  }

  const base = BASE_POINTS_BY_DIFFICULTY[difficulty];
  const starMultiplier = stars === 3 ? 1.0 : stars === 2 ? 0.8 : 0.6;
  const streakBonus = Math.min(streak, 10) * 15;
  const pointsEarned = Math.round(base * starMultiplier) + streakBonus;
  const bulbBonus = stars === 3 ? 1 : 0;

  return {
    stars,
    pointsEarned,
    bulbBonus,
  };
}

export function sanitizeNickname(raw: string): string {
  const cleaned = raw.trim().replace(/\s+/g, ' ');
  if (!cleaned) return 'Challenger';
  return cleaned.slice(0, 40);
}

export function clampProgressValues(input: {
  score: number;
  bulbs: number;
  levelsCleared: number;
  stars: number;
  streak: number;
  currentLevelId: number;
}) {
  return {
    score: Math.max(0, Math.min(1000000, Math.round(input.score))),
    bulbs: Math.max(0, Math.min(9999, Math.round(input.bulbs))),
    levelsCleared: Math.max(0, Math.min(500, Math.round(input.levelsCleared))),
    stars: Math.max(0, Math.min(1500, Math.round(input.stars))),
    streak: Math.max(0, Math.min(500, Math.round(input.streak))),
    currentLevelId: Math.max(1, Math.min(500, Math.round(input.currentLevelId))),
  };
}

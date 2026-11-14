import { PACK_1_EASY_ALL } from './pack1_easy';
import { PACK_2_MEDIUM_ALL } from './pack2_medium';
import { PACK_3_HARD_ALL } from './pack3_hard';
import { PACK_4_GENIUS_ALL } from './pack4_genius';
import { PACK_5_ORIGINALS } from './pack5_originals';
import { PACK_6_TRICKS_A } from './pack6_tricks_a';
import { PACK_7_TRICKS_B } from './pack7_tricks_b';
import { Difficulty, LocalizedText, Puzzle } from './types';

const DIFFICULTY_ORDER: Difficulty[] = ['easy', 'medium', 'hard', 'genius'];
const CATEGORY_ROTATION: Puzzle['category'][] = [
  'trick',
  'riddle',
  'drag',
  'visual',
  'action',
  'logic',
  'lock',
];

function cleanStaleIndexTitle(title: LocalizedText): LocalizedText {
  const strip = (s: string) => s.replace(/\s*#\d+\b/g, '').trim();
  return {
    vi: strip(title.vi),
    en: strip(title.en),
    es: strip(title.es),
    ja: strip(title.ja),
  };
}

/**
 * Curate, clean, balance, and interleave all 500 puzzles:
 * - Preserves progressive difficulty tiers: Easy -> Medium -> Hard -> Genius
 * - Within each difficulty tier, interleaves novel packs (Pack 5/6/7) with classic packs
 *   and round-robins across all 7 categories so consecutive levels feel fresh and varied.
 * - Assigns sequential IDs 1..500.
 */
function curateAndSortPuzzles(groups: Array<{ noveltyFirst: boolean; items: Puzzle[] }>): Puzzle[] {
  const tagged = groups.flatMap((g, groupIdx) =>
    g.items.map((p, itemIdx) => ({
      puzzle: {
        ...p,
        title: cleanStaleIndexTitle(p.title),
      },
      noveltyFirst: g.noveltyFirst,
      groupIdx,
      itemIdx,
    })),
  );

  const result: Puzzle[] = [];

  for (const diff of DIFFICULTY_ORDER) {
    const tierItems = tagged.filter((entry) => entry.puzzle.difficulty === diff);

    // Group by category, alternating novel-pack items and classic-pack items per category
    const queues = new Map<Puzzle['category'], typeof tierItems>();
    for (const cat of CATEGORY_ROTATION) {
      const catItems = tierItems.filter((e) => e.puzzle.category === cat);
      const novel = catItems.filter((e) => e.noveltyFirst);
      const classic = catItems.filter((e) => !e.noveltyFirst);
      const merged: typeof tierItems = [];
      const maxLen = Math.max(novel.length, classic.length);
      for (let i = 0; i < maxLen; i++) {
        if (i < novel.length) merged.push(novel[i]);
        if (i < classic.length) merged.push(classic[i]);
      }
      queues.set(cat, merged);
    }

    // Round-robin across categories so tricks, riddles, drags, visuals, logic, locks stay varied
    let remaining = tierItems.length;
    while (remaining > 0) {
      for (const cat of CATEGORY_ROTATION) {
        const q = queues.get(cat);
        if (q && q.length > 0) {
          const picked = q.shift()!;
          result.push(picked.puzzle);
          remaining -= 1;
        }
      }
    }
  }

  return result.map((puzzle, index) => ({
    ...puzzle,
    id: index + 1,
  }));
}

export const PUZZLES: Puzzle[] = curateAndSortPuzzles([
  { noveltyFirst: true, items: PACK_6_TRICKS_A },
  { noveltyFirst: true, items: PACK_7_TRICKS_B },
  { noveltyFirst: true, items: PACK_5_ORIGINALS },
  { noveltyFirst: false, items: PACK_1_EASY_ALL },
  { noveltyFirst: false, items: PACK_2_MEDIUM_ALL },
  { noveltyFirst: false, items: PACK_3_HARD_ALL },
  { noveltyFirst: false, items: PACK_4_GENIUS_ALL },
]);

export const TOTAL_PUZZLES = PUZZLES.length;

export function getPuzzleById(id: number): Puzzle | undefined {
  return PUZZLES.find((p) => p.id === id);
}

export function getDifficultyCounts(): Record<Difficulty, number> {
  return PUZZLES.reduce(
    (acc, p) => {
      acc[p.difficulty] += 1;
      return acc;
    },
    { easy: 0, medium: 0, hard: 0, genius: 0 } as Record<Difficulty, number>,
  );
}

import test from 'node:test';
import assert from 'node:assert/strict';
import { PUZZLES, TOTAL_PUZZLES, getDifficultyCounts, getPuzzleById } from '../data/puzzles/index';
import { evaluateSolve, sanitizeNickname, clampProgressValues } from './scoring';
import { buildSmartHintPlan } from './hints';
import { buildRankedLeaderboard } from './leaderboard';

test('all 500 puzzles exist sequentially with complete 4-language translations and 3-tier hints', () => {
  assert.equal(TOTAL_PUZZLES, 500);
  const counts = getDifficultyCounts();
  assert.equal(counts.easy + counts.medium + counts.hard + counts.genius, 500);
  assert.equal(counts.easy, 125);
  assert.equal(counts.medium, 150);
  assert.equal(counts.hard, 130);
  assert.equal(counts.genius, 95);

  const seenIds = new Set<number>();
  for (let i = 1; i <= 500; i++) {
    const p = getPuzzleById(i);
    assert.ok(p, `Missing puzzle #${i}`);
    assert.equal(seenIds.has(p.id), false, `Duplicate puzzle #${p.id}`);
    seenIds.add(p.id);

    for (const lang of ['vi', 'en', 'es', 'ja'] as const) {
      assert.ok(p.title[lang] && p.title[lang].trim().length > 0, `Empty title ${lang} on #${i}`);
      assert.ok(p.prompt[lang] && p.prompt[lang].trim().length > 0, `Empty prompt ${lang} on #${i}`);
      assert.ok(p.explanation[lang] && p.explanation[lang].trim().length > 0, `Empty explanation ${lang} on #${i}`);
      assert.equal(p.hints.length, 3, `Expected 3 hints on #${i}`);
      for (let h = 0; h < 3; h++) {
        assert.ok(p.hints[h][lang] && p.hints[h][lang].trim().length > 0, `Empty hint ${h + 1} ${lang} on #${i}`);
      }
    }
  }
});

test('puzzles are sorted by difficulty tier and interleaved across categories', () => {
  // Levels 1..125 easy, 126..275 medium, 276..405 hard, 406..500 genius
  assert.equal(PUZZLES[0].difficulty, 'easy');
  assert.equal(PUZZLES[124].difficulty, 'easy');
  assert.equal(PUZZLES[125].difficulty, 'medium');
  assert.equal(PUZZLES[274].difficulty, 'medium');
  assert.equal(PUZZLES[275].difficulty, 'hard');
  assert.equal(PUZZLES[404].difficulty, 'hard');
  assert.equal(PUZZLES[405].difficulty, 'genius');
  assert.equal(PUZZLES[499].difficulty, 'genius');

  // First 7 levels rotate across distinct categories
  const firstSevenCats = new Set(PUZZLES.slice(0, 7).map((p) => p.category));
  assert.equal(firstSevenCats.size, 7);
});

test('scoring calculates stars, difficulty weights, streaks, and replay behavior correctly', () => {
  const perfectGenius = evaluateSolve({
    difficulty: 'genius',
    wrongAttempts: 0,
    hintsUsed: 0,
    streak: 4,
    alreadySolved: false,
  });
  assert.equal(perfectGenius.stars, 3);
  assert.equal(perfectGenius.pointsEarned, 350 + 60);
  assert.equal(perfectGenius.bulbBonus, 1);

  const hintedMedium = evaluateSolve({
    difficulty: 'medium',
    wrongAttempts: 1,
    hintsUsed: 1,
    streak: 2,
    alreadySolved: false,
  });
  assert.equal(hintedMedium.stars, 2);
  assert.equal(hintedMedium.pointsEarned, Math.round(160 * 0.8) + 30);
  assert.equal(hintedMedium.bulbBonus, 0);

  const replay = evaluateSolve({
    difficulty: 'hard',
    wrongAttempts: 0,
    hintsUsed: 0,
    streak: 5,
    alreadySolved: true,
  });
  assert.equal(replay.pointsEarned, 0);
  assert.equal(replay.bulbBonus, 0);
});

test('smart hint plan adapts costs and auto-suggestion to difficulty and wrong attempts', () => {
  const easyPuzzle = PUZZLES[0];
  const geniusPuzzle = PUZZLES[499];

  const easyFresh = buildSmartHintPlan({ puzzle: easyPuzzle, lang: 'en', wrongAttempts: 0, elapsedSeconds: 5 });
  assert.deepEqual(easyFresh.tierCost, [0, 1, 2]);
  assert.equal(easyFresh.autoSuggestTier, false);

  const geniusFresh = buildSmartHintPlan({ puzzle: geniusPuzzle, lang: 'vi', wrongAttempts: 0, elapsedSeconds: 5 });
  assert.deepEqual(geniusFresh.tierCost, [1, 2, 3]);
  assert.equal(geniusFresh.autoSuggestTier, false);

  const geniusStruggling = buildSmartHintPlan({ puzzle: geniusPuzzle, lang: 'vi', wrongAttempts: 3, elapsedSeconds: 20 });
  assert.deepEqual(geniusStruggling.tierCost, [0, 1, 2]);
  assert.equal(geniusStruggling.autoSuggestTier, true);
});

test('leaderboard ranks entries deterministically and clamps bounds safely', () => {
  const clamped = clampProgressValues({
    score: 9999999,
    bulbs: -4,
    levelsCleared: 600,
    stars: 2000,
    streak: -1,
    currentLevelId: 0,
  });
  assert.deepEqual(clamped, {
    score: 1000000,
    bulbs: 0,
    levelsCleared: 500,
    stars: 1500,
    streak: 0,
    currentLevelId: 1,
  });
  assert.equal(sanitizeNickname('   '), 'Challenger');

  const { ranked, selfRank } = buildRankedLeaderboard({
    remoteEntries: [
      { uid: 'remote-top', displayName: 'Ace', country: 'US', lang: 'en', score: 150000, levelsCleared: 500, stars: 1500, streak: 80 },
    ],
    selfEntry: { uid: 'me', displayName: 'LocalHero', country: 'VN', lang: 'vi', score: 90000, levelsCleared: 420, stars: 1120, streak: 25 },
  });
  assert.equal(ranked[0].uid, 'remote-top');
  assert.equal(selfRank, 2);
});

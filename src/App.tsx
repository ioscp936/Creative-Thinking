/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { User } from 'firebase/auth';
import {
  ArrowLeft,
  ArrowRight,
  Flame,
  Lightbulb,
  Map as MapIcon,
  Moon,
  Music,
  RotateCcw,
  Sparkles,
  Star,
  Sun,
  Trophy,
  Volume2,
  VolumeX,
  WifiOff,
} from 'lucide-react';
import { soundEngine } from './audio/soundEngine';
import { LeaderboardModal } from './components/LeaderboardModal';
import { LevelMapModal } from './components/LevelMapModal';
import { PuzzleStage } from './components/PuzzleStage';
import { SmartHintDrawer } from './components/SmartHintDrawer';
import { TitleScreen } from './components/TitleScreen';
import { getPuzzleById, PUZZLES, TOTAL_PUZZLES } from './data/puzzles/index';
import { Language } from './data/puzzles/types';
import {
  loadUserProgress,
  signInWithGoogle,
  signOutUser,
  subscribeAuth,
  subscribeGlobalLeaderboard,
  syncProgressToCloud,
} from './firebase/client';
import { buildSmartHintPlan } from './game/hints';
import { buildRankedLeaderboard, LeaderboardPlayer } from './game/leaderboard';
import { evaluateSolve, sanitizeNickname, SolveOutcome } from './game/scoring';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { LANGUAGES, TRANSLATIONS } from './i18n/translations';

const STORAGE_KEY = 'creative_thinking_save_v1';
const LEGACY_STORAGE_KEY = 'brainspark_save_v1';
const THEME_STORAGE_KEY = 'creative_thinking_theme_v1';
const LEGACY_THEME_KEY = 'brainspark_theme_v1';

function loadSavedTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  try {
    const val =
      window.localStorage.getItem(THEME_STORAGE_KEY) ??
      window.localStorage.getItem(LEGACY_THEME_KEY);
    return val === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

interface LocalSaveState {
  localUid: string;
  lang: Language;
  displayName: string;
  score: number;
  bulbs: number;
  currentLevelId: number;
  streak: number;
  practiceUnlocked: boolean;
  solvedIds: number[];
  starsByLevel: Record<string, number>;
}

function generateLocalUid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `guest-${crypto.randomUUID().slice(0, 8)}`;
  }
  return `guest-${Math.random().toString(36).slice(2, 10)}`;
}

function loadLocalSave(): LocalSaveState {
  const defaults: LocalSaveState = {
    localUid: generateLocalUid(),
    lang: 'vi',
    displayName: '',
    score: 0,
    bulbs: 6,
    currentLevelId: 1,
    streak: 0,
    practiceUnlocked: false,
    solvedIds: [],
    starsByLevel: {},
  };

  if (typeof window === 'undefined') return defaults;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      // Migrate displayName & language cleanly from legacy BrainSpark key if present
      const legacyRaw = window.localStorage.getItem(LEGACY_STORAGE_KEY);
      if (legacyRaw) {
        const legacy = JSON.parse(legacyRaw) as Partial<LocalSaveState>;
        const legacyLang: Language =
          legacy.lang && ['vi', 'en', 'es', 'ja'].includes(legacy.lang) ? legacy.lang : 'vi';
        return {
          ...defaults,
          localUid: typeof legacy.localUid === 'string' && legacy.localUid ? legacy.localUid : defaults.localUid,
          lang: legacyLang,
          displayName: typeof legacy.displayName === 'string' ? legacy.displayName : '',
        };
      }
      return defaults;
    }
    const parsed = JSON.parse(raw) as Partial<LocalSaveState>;
    const validLang: Language =
      parsed.lang && ['vi', 'en', 'es', 'ja'].includes(parsed.lang) ? parsed.lang : 'vi';
    const solvedIds = Array.isArray(parsed.solvedIds)
      ? Array.from(
          new Set(
            parsed.solvedIds.filter((id) => Number.isInteger(id) && id >= 1 && id <= TOTAL_PUZZLES),
          ),
        )
      : [];
    const starsByLevel: Record<string, number> = {};
    if (parsed.starsByLevel && typeof parsed.starsByLevel === 'object') {
      for (const [k, v] of Object.entries(parsed.starsByLevel)) {
        const n = Number(k);
        if (Number.isInteger(n) && n >= 1 && n <= TOTAL_PUZZLES && (v === 1 || v === 2 || v === 3)) {
          starsByLevel[String(n)] = v;
        }
      }
    }
    return {
      localUid: typeof parsed.localUid === 'string' && parsed.localUid ? parsed.localUid : defaults.localUid,
      lang: validLang,
      displayName: typeof parsed.displayName === 'string' ? parsed.displayName : '',
      score: typeof parsed.score === 'number' && parsed.score >= 0 ? Math.round(parsed.score) : 0,
      bulbs: typeof parsed.bulbs === 'number' && parsed.bulbs >= 0 ? Math.round(parsed.bulbs) : 6,
      currentLevelId:
        typeof parsed.currentLevelId === 'number' &&
        parsed.currentLevelId >= 1 &&
        parsed.currentLevelId <= TOTAL_PUZZLES
          ? Math.round(parsed.currentLevelId)
          : 1,
      streak: typeof parsed.streak === 'number' && parsed.streak >= 0 ? Math.round(parsed.streak) : 0,
      practiceUnlocked: Boolean(parsed.practiceUnlocked),
      solvedIds,
      starsByLevel,
    };
  } catch {
    return defaults;
  }
}

export default function App() {
  const [save, setSave] = useState<LocalSaveState>(() => loadLocalSave());
  const [theme, setTheme] = useState<'light' | 'dark'>(() => loadSavedTheme());
  const [screen, setScreen] = useState<'title' | 'playing'>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') return 'playing';
    }
    return 'title';
  });

  // Modals & Drawers
  const [hintOpen, setHintOpen] = useState(false);
  const [levelsOpen, setLevelsOpen] = useState(false);
  const [leaderboardOpen, setLeaderboardOpen] = useState(false);

  // Per-level play session state
  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [revealedTiers, setRevealedTiers] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [wrongFeedbackKey, setWrongFeedbackKey] = useState(0);
  const [solveOutcome, setSolveOutcome] = useState<SolveOutcome | null>(null);
  const [replaySeed, setReplaySeed] = useState(0);

  // Audio state
  const [musicOn, setMusicOn] = useState(false);
  const [sfxOn, setSfxOn] = useState(true);

  // Connectivity, Auth, Real-time Leaderboard
  const isOnline = useOnlineStatus();
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [remoteEntries, setRemoteEntries] = useState<LeaderboardPlayer[]>([]);
  const [isLiveFirestore, setIsLiveFirestore] = useState(false);
  const syncedOnSignInRef = useRef<string | null>(null);

  const t = TRANSLATIONS[save.lang];
  const puzzle = useMemo(
    () => getPuzzleById(save.currentLevelId) ?? getPuzzleById(1)!,
    [save.currentLevelId],
  );

  const totalStars = useMemo(
    () => Object.values(save.starsByLevel).reduce((sum, s) => sum + s, 0),
    [save.starsByLevel],
  );

  const currentLangMeta = useMemo(
    () => LANGUAGES.find((l) => l.code === save.lang) ?? LANGUAGES[0],
    [save.lang],
  );

  // Sync body[data-state] for clean state inspection
  useEffect(() => {
    document.body.dataset.state = screen;
  }, [screen]);

  // Sync Tailwind .dark class on root html element & persist theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore storage failures
    }
  }, [theme]);

  // Persist save state locally on every update
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(save));
    } catch {
      // Ignore quota issues in restricted browsers
    }
  }, [save]);

  // Reset per-puzzle session counters on level change or replay
  useEffect(() => {
    setWrongAttempts(0);
    setRevealedTiers(0);
    setElapsedSeconds(0);
    setWrongFeedbackKey(0);
    setSolveOutcome(null);
  }, [save.currentLevelId, replaySeed]);

  // Elapsed timer while actively playing an unsolved level
  useEffect(() => {
    if (screen !== 'playing' || solveOutcome || hintOpen || levelsOpen || leaderboardOpen) {
      return;
    }
    const timer = window.setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, [screen, solveOutcome, hintOpen, levelsOpen, leaderboardOpen]);

  // Subscribe to Firebase Auth & Real-Time Global Leaderboard
  useEffect(() => {
    const unsubAuth = subscribeAuth((user) => {
      setAuthUser(user);
      if (!user) {
        syncedOnSignInRef.current = null;
      }
    });

    const unsubLb = subscribeGlobalLeaderboard(
      (entries, isLive) => {
        setRemoteEntries(entries);
        setIsLiveFirestore(isLive);
      },
      () => {
        setIsLiveFirestore(false);
      },
    );

    return () => {
      unsubAuth();
      unsubLb();
    };
  }, []);

  // Merge cloud progress once upon sign-in
  useEffect(() => {
    if (!authUser || !isOnline) return;
    if (syncedOnSignInRef.current === authUser.uid) return;
    syncedOnSignInRef.current = authUser.uid;

    void (async () => {
      try {
        const cloud = await loadUserProgress(authUser.uid);
        if (!cloud) return;
        setSave((prev) => {
          const mergedSolved = Array.from(
            new Set([
              ...prev.solvedIds,
              ...(Array.isArray(cloud.solvedIds) ? cloud.solvedIds : []),
            ]),
          ).sort((a, b) => a - b);

          const mergedStars: Record<string, number> = { ...prev.starsByLevel };
          if (cloud.starsByLevel) {
            for (const [k, v] of Object.entries(cloud.starsByLevel)) {
              if (typeof v === 'number') {
                mergedStars[k] = Math.max(mergedStars[k] ?? 0, v);
              }
            }
          }

          return {
            ...prev,
            displayName:
              prev.displayName ||
              cloud.displayName ||
              authUser.displayName ||
              '',
            score: Math.max(prev.score, typeof cloud.score === 'number' ? cloud.score : 0),
            bulbs: Math.max(prev.bulbs, typeof cloud.bulbs === 'number' ? cloud.bulbs : 0),
            currentLevelId: Math.max(
              prev.currentLevelId,
              typeof cloud.currentLevelId === 'number' ? cloud.currentLevelId : 1,
            ),
            streak: Math.max(prev.streak, typeof cloud.streak === 'number' ? cloud.streak : 0),
            practiceUnlocked: prev.practiceUnlocked || Boolean(cloud.practiceUnlocked),
            solvedIds: mergedSolved,
            starsByLevel: mergedStars,
          };
        });
      } catch {
        // Offline / permission fallback keeps local state intact
      }
    })();
  }, [authUser, isOnline]);

  // Auto-sync progress to Firestore whenever online & signed in
  useEffect(() => {
    if (!authUser || !isOnline) return;
    const timer = window.setTimeout(() => {
      const effectiveName = sanitizeNickname(
        save.displayName || authUser.displayName || t.guestPlayer,
      );
      void syncProgressToCloud(authUser.uid, {
        displayName: effectiveName,
        country: currentLangMeta.country,
        lang: save.lang,
        score: save.score,
        bulbs: save.bulbs,
        currentLevelId: save.currentLevelId,
        streak: save.streak,
        practiceUnlocked: save.practiceUnlocked,
        solvedIds: save.solvedIds,
        starsByLevel: save.starsByLevel,
      }).catch(() => {});
    }, 600);
    return () => window.clearTimeout(timer);
  }, [authUser, isOnline, save, currentLangMeta.country, t.guestPlayer]);

  // Keyboard shortcuts: Enter/Space to start on Title, Escape to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      const isInput = tag === 'INPUT' || tag === 'TEXTAREA';
      if (e.key === 'Escape') {
        if (hintOpen) setHintOpen(false);
        else if (levelsOpen) setLevelsOpen(false);
        else if (leaderboardOpen) setLeaderboardOpen(false);
        return;
      }
      if (
        screen === 'title' &&
        !levelsOpen &&
        !leaderboardOpen &&
        !isInput &&
        (e.key === 'Enter' || e.key === ' ')
      ) {
        e.preventDefault();
        soundEngine.playTap();
        setScreen('playing');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [screen, hintOpen, levelsOpen, leaderboardOpen]);

  const selfEntry: LeaderboardPlayer = useMemo(
    () => ({
      uid: authUser?.uid ?? save.localUid,
      displayName: sanitizeNickname(
        save.displayName || authUser?.displayName || t.guestPlayer,
      ),
      country: currentLangMeta.country,
      lang: save.lang,
      score: save.score,
      levelsCleared: save.solvedIds.length,
      stars: totalStars,
      streak: save.streak,
      isSelf: true,
    }),
    [authUser, save, t.guestPlayer, currentLangMeta.country, totalStars],
  );

  const { ranked, selfRank } = useMemo(
    () => buildRankedLeaderboard({ remoteEntries, selfEntry }),
    [remoteEntries, selfEntry],
  );

  const smartPlan = useMemo(
    () =>
      buildSmartHintPlan({
        puzzle,
        lang: save.lang,
        wrongAttempts,
        elapsedSeconds,
      }),
    [puzzle, save.lang, wrongAttempts, elapsedSeconds],
  );

  const handleToggleMusic = useCallback(() => {
    const next = soundEngine.toggleMusic();
    setMusicOn(next);
  }, []);

  const handleToggleSfx = useCallback(() => {
    setSfxOn((prev) => {
      const next = !prev;
      soundEngine.setSfxEnabled(next);
      if (next) soundEngine.playTap();
      return next;
    });
  }, []);

  const handleSolvePuzzle = useCallback(() => {
    if (solveOutcome) return;
    soundEngine.playWin();
    const alreadySolved = save.solvedIds.includes(puzzle.id);
    const outcome = evaluateSolve({
      difficulty: puzzle.difficulty,
      wrongAttempts,
      hintsUsed: revealedTiers,
      streak: save.streak,
      alreadySolved,
    });
    setSolveOutcome(outcome);

    setSave((prev) => {
      const prevStars = prev.starsByLevel[String(puzzle.id)] ?? 0;
      const bestStars = Math.max(prevStars, outcome.stars);
      const nextSolved = alreadySolved
        ? prev.solvedIds
        : [...prev.solvedIds, puzzle.id].sort((a, b) => a - b);
      return {
        ...prev,
        score: prev.score + outcome.pointsEarned,
        bulbs: prev.bulbs + outcome.bulbBonus,
        streak: alreadySolved ? prev.streak : prev.streak + 1,
        solvedIds: nextSolved,
        starsByLevel: {
          ...prev.starsByLevel,
          [String(puzzle.id)]: bestStars,
        },
      };
    });
  }, [solveOutcome, save.solvedIds, save.streak, puzzle.id, puzzle.difficulty, wrongAttempts, revealedTiers]);

  const handleWrongAttempt = useCallback(() => {
    soundEngine.playWrong();
    setWrongAttempts((w) => w + 1);
    setWrongFeedbackKey((k) => k + 1);
    setSave((prev) => (prev.streak === 0 ? prev : { ...prev, streak: 0 }));
  }, []);

  const handleUnlockHintTier = useCallback(
    (tierIndex: 0 | 1 | 2, cost: number) => {
      if (revealedTiers > tierIndex || save.bulbs < cost) return;
      soundEngine.playHint();
      setRevealedTiers(tierIndex + 1);
      if (cost > 0) {
        setSave((prev) => ({ ...prev, bulbs: Math.max(0, prev.bulbs - cost) }));
      }
    },
    [revealedTiers, save.bulbs],
  );

  const handleClaimFreeBulbs = useCallback(() => {
    soundEngine.playHint();
    setSave((prev) => ({ ...prev, bulbs: prev.bulbs + 3 }));
  }, []);

  const handleNextLevel = useCallback(() => {
    soundEngine.playTap();
    const nextId = puzzle.id < TOTAL_PUZZLES ? puzzle.id + 1 : 1;
    setSave((prev) => ({ ...prev, currentLevelId: nextId }));
  }, [puzzle.id]);

  const handleReplayLevel = useCallback(() => {
    soundEngine.playTap();
    setReplaySeed((s) => s + 1);
  }, []);

  const handleSelectLevel = useCallback((levelId: number) => {
    soundEngine.playTap();
    setSave((prev) => ({ ...prev, currentLevelId: levelId }));
    setScreen('playing');
  }, []);

  const handleSignIn = useCallback(() => {
    void signInWithGoogle().catch(() => {});
  }, []);

  const handleSignOut = useCallback(() => {
    void signOutUser().catch(() => {});
  }, []);

  const handleUpdateNickname = useCallback((name: string) => {
    soundEngine.playTap();
    setSave((prev) => ({ ...prev, displayName: sanitizeNickname(name) }));
  }, []);

  const handleChangeLang = useCallback((lang: Language) => {
    soundEngine.playTap();
    setSave((prev) => ({ ...prev, lang }));
  }, []);

  const handleToggleTheme = useCallback(() => {
    soundEngine.playTap();
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const handleStartTricksSpotlight = useCallback(() => {
    soundEngine.playTap();
    const solvedSet = new Set(save.solvedIds);
    const nextTrickOrRiddle =
      PUZZLES.find((p) => (p.category === 'trick' || p.category === 'riddle') && !solvedSet.has(p.id)) ??
      PUZZLES[0];
    setSave((prev) => ({
      ...prev,
      currentLevelId: nextTrickOrRiddle.id,
      practiceUnlocked: true,
    }));
    setScreen('playing');
  }, [save.solvedIds]);

  const levelPct = Math.round((puzzle.id / TOTAL_PUZZLES) * 100);

  return (
    <div className="min-h-screen w-full bg-[#F7F6F2] dark:bg-[#0B0E14] text-stone-900 dark:text-slate-100 transition-colors duration-200">
      {screen === 'title' ? (
        <TitleScreen
          t={t}
          lang={save.lang}
          theme={theme}
          currentLevelId={save.currentLevelId}
          solvedCount={save.solvedIds.length}
          totalStars={totalStars}
          totalScore={save.score}
          musicOn={musicOn}
          sfxOn={sfxOn}
          isOnline={isOnline}
          onStart={() => {
            soundEngine.playTap();
            setScreen('playing');
          }}
          onStartTricksSpotlight={handleStartTricksSpotlight}
          onOpenLevels={() => {
            soundEngine.playTap();
            setLevelsOpen(true);
          }}
          onOpenLeaderboard={() => {
            soundEngine.playTap();
            setLeaderboardOpen(true);
          }}
          onChangeLang={handleChangeLang}
          onToggleTheme={handleToggleTheme}
          onToggleMusic={handleToggleMusic}
          onToggleSfx={handleToggleSfx}
        />
      ) : (
        <div className="min-h-screen flex flex-col">
          {/* Compact Top HUD */}
          <header className="sticky top-0 z-30 border-b border-stone-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xs">
            <div className="max-w-4xl mx-auto px-3 sm:px-6 h-14 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playTap();
                    setScreen('title');
                  }}
                  aria-label={t.backToTitle}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 px-2.5 py-1.5 text-xs font-semibold text-stone-700 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-700 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                  <span className="hidden sm:inline">{t.backToTitle}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playTap();
                    setLevelsOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1.5 text-xs font-bold text-stone-900 dark:text-white hover:bg-stone-100 dark:hover:bg-slate-700 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <MapIcon className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  <span className="font-mono-num">
                    {puzzle.id}/{TOTAL_PUZZLES}
                  </span>
                </button>
              </div>

              {/* Center/Right Metrics & Controls */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="hidden md:flex items-center gap-3 mr-1 text-xs font-semibold text-stone-600 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1 font-mono-num text-stone-900 dark:text-white">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" aria-hidden="true" />
                    {totalStars}
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono-num text-stone-900 dark:text-white">
                    <Flame className="w-3.5 h-3.5 text-orange-500" aria-hidden="true" />
                    {save.streak}
                  </span>
                  <span className="font-mono-num text-stone-900 dark:text-white">
                    {save.score.toLocaleString()} pts
                  </span>
                </div>

                {/* Smart Hint Button */}
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playTap();
                    setHintOpen(true);
                  }}
                  className={`inline-flex items-center gap-1.5 rounded-xl border px-2.5 py-1.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    smartPlan.autoSuggestTier && !solveOutcome
                      ? 'border-amber-400 bg-amber-100 dark:bg-amber-950/60 text-amber-950 dark:text-amber-300'
                      : 'border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-950/50'
                  }`}
                >
                  <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" aria-hidden="true" />
                  <span className="font-mono-num">{save.bulbs}</span>
                  <span className="hidden sm:inline">{t.smartHint}</span>
                </button>

                {/* Leaderboard */}
                <button
                  type="button"
                  onClick={() => {
                    soundEngine.playTap();
                    setLeaderboardOpen(true);
                  }}
                  aria-label={t.leaderboardLabel}
                  title={t.leaderboardLabel}
                  className="inline-flex items-center gap-1 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1.5 text-xs font-semibold text-stone-800 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-700 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Trophy className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                  <span className="hidden lg:inline font-mono-num">#{selfRank}</span>
                </button>

                {/* Theme Toggle */}
                <button
                  type="button"
                  onClick={handleToggleTheme}
                  aria-label={t.themeToggle}
                  title={t.themeToggle}
                  className="p-1.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-stone-600 dark:text-amber-300 hover:bg-stone-100 dark:hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                {/* Music & SFX */}
                <button
                  type="button"
                  onClick={handleToggleMusic}
                  aria-label={musicOn ? t.musicOn : t.musicOff}
                  title={musicOn ? t.musicOn : t.musicOff}
                  className={`p-1.5 rounded-xl border transition-colors shrink-0 cursor-pointer ${
                    musicOn
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300'
                      : 'border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-stone-600 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-700'
                  }`}
                >
                  <Music className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleToggleSfx}
                  aria-label={sfxOn ? t.sfxOn : t.sfxOff}
                  title={sfxOn ? t.sfxOn : t.sfxOff}
                  className="p-1.5 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-stone-600 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
                >
                  {sfxOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                </button>

                {/* Compact Language Switcher */}
                <div className="hidden sm:flex items-center gap-0.5 rounded-xl bg-stone-100 dark:bg-slate-800 p-0.5">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => handleChangeLang(l.code)}
                      className={`px-1.5 py-1 rounded-lg text-[11px] font-bold transition-colors cursor-pointer ${
                        save.lang === l.code
                          ? 'bg-white dark:bg-slate-700 text-stone-900 dark:text-white shadow-xs'
                          : 'text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white'
                      }`}
                    >
                      {l.short}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Hairline 500-Level Progress Bar */}
            <div className="h-[2px] w-full bg-stone-100 dark:bg-slate-800">
              <div
                className="h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300"
                style={{ width: `${levelPct}%` }}
              />
            </div>
          </header>

          {/* Subtle Offline Banner only when offline */}
          {!isOnline && (
            <div className="bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-800 px-4 py-2 text-center text-xs font-medium text-amber-900 dark:text-amber-300 flex items-center justify-center gap-2">
              <WifiOff className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span>{t.offlineBanner}</span>
            </div>
          )}

          {/* Main Puzzle Stage */}
          <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 py-5 sm:py-8 flex flex-col justify-center">
            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700/80 shadow-sm p-5 sm:p-7">
              <div className="mb-3 flex items-center justify-between gap-2 text-xs text-stone-500 dark:text-slate-400">
                <span className="font-semibold text-stone-800 dark:text-slate-200">
                  {puzzle.title[save.lang]}
                </span>
                <span className="font-mono-num md:hidden">
                  {save.score.toLocaleString()} pts · {totalStars} ★
                </span>
              </div>

              <PuzzleStage
                key={`${puzzle.id}-${replaySeed}`}
                puzzle={puzzle}
                lang={save.lang}
                t={t}
                solved={Boolean(solveOutcome)}
                onSolve={handleSolvePuzzle}
                onWrong={handleWrongAttempt}
                onTapSfx={() => soundEngine.playTap()}
              />

              {/* Subtle Feedback / Adaptive Auto-Hint Offer */}
              {!solveOutcome && wrongFeedbackKey > 0 && (
                <div className="mt-4 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800/70 px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-medium text-rose-700 dark:text-rose-400">
                    {smartPlan.autoSuggestTier ? t.autoTipOffer : t.wrongTry}
                  </span>
                  {smartPlan.autoSuggestTier && (
                    <button
                      type="button"
                      onClick={() => {
                        soundEngine.playTap();
                        setHintOpen(true);
                      }}
                      className="inline-flex items-center gap-1 rounded-lg bg-amber-500 border-b-2 border-amber-700 px-3 py-1.5 text-xs font-bold text-stone-950 hover:bg-amber-400 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{t.smartHint}</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </main>

          {/* Mobile compact language bar */}
          <footer className="sm:hidden pb-4 px-4 flex justify-center">
            <div className="flex items-center gap-1 rounded-xl bg-stone-200/70 dark:bg-slate-800 p-0.5">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => handleChangeLang(l.code)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                    save.lang === l.code
                      ? 'bg-white dark:bg-slate-700 text-stone-900 dark:text-white shadow-xs'
                      : 'text-stone-600 dark:text-slate-400'
                  }`}
                >
                  {l.short}
                </button>
              ))}
            </div>
          </footer>
        </div>
      )}

      {/* Victory Overlay */}
      {solveOutcome && screen === 'playing' && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/55 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t.solvedTitle}
        >
          <div className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 shadow-2xl p-6 text-center animate-gentle-pop">
            <div className="flex justify-center gap-2 mb-3" aria-label={`${solveOutcome.stars} / 3 ${t.stars}`}>
              {[1, 2, 3].map((s) => (
                <Star
                  key={s}
                  className={`w-8 h-8 ${
                    s <= solveOutcome.stars
                      ? 'fill-amber-400 text-amber-500'
                      : 'text-stone-200 dark:text-slate-700'
                  }`}
                />
              ))}
            </div>

            <h2 className="text-xl font-extrabold text-stone-900 dark:text-white">{t.solvedTitle}</h2>
            <p className="mt-1 text-xs font-mono-num font-semibold text-indigo-600 dark:text-indigo-400">
              +{solveOutcome.pointsEarned} {t.score}
              {solveOutcome.bulbBonus > 0 ? ` · +${solveOutcome.bulbBonus} 💡` : ''}
            </p>

            <p className="mt-4 rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800/70 p-3.5 text-sm text-stone-700 dark:text-slate-200 leading-relaxed text-left">
              {puzzle.explanation[save.lang]}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                onClick={handleReplayLevel}
                className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-stone-300 dark:border-slate-700 border-b-4 border-b-stone-300 dark:border-b-slate-800 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm font-bold text-stone-800 dark:text-slate-100 hover:bg-stone-100 dark:hover:bg-slate-700 active:border-b active:translate-y-[2px] transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" aria-hidden="true" />
                <span>{t.replayLevel}</span>
              </button>
              <button
                type="button"
                onClick={handleNextLevel}
                className="flex-[1.5] inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 border-b-4 border-indigo-800 px-4 py-2.5 text-sm font-bold text-white hover:bg-indigo-500 active:border-b-0 active:translate-y-[3px] transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>{t.nextLevel}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Smart Hint Drawer */}
      {hintOpen && (
        <SmartHintDrawer
          puzzle={puzzle}
          lang={save.lang}
          t={t}
          bulbs={save.bulbs}
          revealedTiers={revealedTiers}
          wrongAttempts={wrongAttempts}
          elapsedSeconds={elapsedSeconds}
          onUnlockTier={handleUnlockHintTier}
          onClaimFreeBulbs={handleClaimFreeBulbs}
          onClose={() => setHintOpen(false)}
        />
      )}

      {/* 500-Level Map Modal */}
      {levelsOpen && (
        <LevelMapModal
          t={t}
          lang={save.lang}
          currentLevelId={save.currentLevelId}
          solvedIds={save.solvedIds}
          starsByLevel={save.starsByLevel}
          practiceUnlocked={save.practiceUnlocked}
          onTogglePractice={() => {
            soundEngine.playTap();
            setSave((prev) => ({ ...prev, practiceUnlocked: !prev.practiceUnlocked }));
          }}
          onSelectLevel={handleSelectLevel}
          onClose={() => setLevelsOpen(false)}
        />
      )}

      {/* Global Real-time Leaderboard Modal */}
      {leaderboardOpen && (
        <LeaderboardModal
          t={t}
          ranked={ranked}
          selfRank={selfRank}
          selfEntry={selfEntry}
          isLiveFirestore={isLiveFirestore}
          isOnline={isOnline}
          signedInEmail={authUser?.email ?? null}
          onSignIn={handleSignIn}
          onSignOut={handleSignOut}
          onUpdateNickname={handleUpdateNickname}
          onClose={() => setLeaderboardOpen(false)}
        />
      )}
    </div>
  );
}

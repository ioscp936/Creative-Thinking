import React, { useMemo, useState } from 'react';
import { Lock, Sparkles, Star, Unlock, X } from 'lucide-react';
import { PUZZLES, TOTAL_PUZZLES } from '../data/puzzles/index';
import { Difficulty, Language } from '../data/puzzles/types';
import { UIStrings } from '../i18n/translations';

interface LevelMapModalProps {
  t: UIStrings;
  lang: Language;
  currentLevelId: number;
  solvedIds: number[];
  starsByLevel: Record<string, number>;
  practiceUnlocked: boolean;
  onTogglePractice: () => void;
  onSelectLevel: (levelId: number) => void;
  onClose: () => void;
}

type ChapterRange = 'all' | '1-100' | '101-200' | '201-300' | '301-400' | '401-500';
type FilterMode = 'all' | 'trick' | 'riddle' | Difficulty;

const CHAPTER_BOUNDS: Record<ChapterRange, [number, number]> = {
  all: [1, 500],
  '1-100': [1, 100],
  '101-200': [101, 200],
  '201-300': [201, 300],
  '301-400': [301, 400],
  '401-500': [401, 500],
};

function getInitialChapter(levelId: number): ChapterRange {
  if (levelId <= 100) return '1-100';
  if (levelId <= 200) return '101-200';
  if (levelId <= 300) return '201-300';
  if (levelId <= 400) return '301-400';
  return '401-500';
}

export const LevelMapModal: React.FC<LevelMapModalProps> = ({
  t,
  lang,
  currentLevelId,
  solvedIds,
  starsByLevel,
  practiceUnlocked,
  onTogglePractice,
  onSelectLevel,
  onClose,
}) => {
  const [chapter, setChapter] = useState<ChapterRange>(() => getInitialChapter(currentLevelId));
  const [filter, setFilter] = useState<FilterMode>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const highestSolved = solvedIds.length > 0 ? Math.max(...solvedIds) : 0;
  const maxUnlocked = Math.min(TOTAL_PUZZLES, highestSolved + 1);
  const solvedSet = useMemo(() => new Set(solvedIds), [solvedIds]);

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const [minId, maxId] = q ? [1, TOTAL_PUZZLES] : CHAPTER_BOUNDS[chapter];
    return PUZZLES.filter((p) => {
      if (p.id < minId || p.id > maxId) return false;
      if (filter === 'trick' || filter === 'riddle') {
        if (p.category !== filter) return false;
      } else if (filter !== 'all' && p.difficulty !== filter) {
        return false;
      }
      if (!q) return true;
      return String(p.id).includes(q) || p.title[lang].toLowerCase().includes(q);
    });
  }, [chapter, filter, searchQuery, lang]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-label={t.levelsLabel}
    >
      <div className="w-full max-w-3xl max-h-[88vh] flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 shadow-2xl overflow-hidden animate-gentle-pop">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-stone-200 dark:border-slate-800 px-6 py-4">
          <div>
            <h2 className="text-xl font-bold text-stone-900 dark:text-white">{t.levelsLabel}</h2>
            <p className="text-xs text-stone-500 dark:text-slate-400 font-mono-num">
              {solvedIds.length} / {TOTAL_PUZZLES} ·{' '}
              {Object.values(starsByLevel).reduce((a, b) => a + b, 0)} ★
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="rounded-xl p-2 text-stone-500 dark:text-slate-400 hover:bg-stone-100 dark:hover:bg-slate-800 hover:text-stone-900 dark:hover:text-white cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Chapters, Filters & Practice Toggle */}
        <div className="border-b border-stone-200 dark:border-slate-800 bg-stone-50 dark:bg-slate-950/60 px-6 py-3 flex flex-col gap-2.5">
          {/* Chapter Range Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {(['1-100', '101-200', '201-300', '301-400', '401-500', 'all'] as const).map((range) => {
              const isSelected = chapter === range && !searchQuery.trim();
              return (
                <button
                  key={range}
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setChapter(range);
                  }}
                  className={`px-2.5 py-1 rounded-lg font-mono-num text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-stone-200/70 dark:bg-slate-800 text-stone-700 dark:text-slate-300 hover:bg-stone-300/70 dark:hover:bg-slate-700'
                  }`}
                >
                  {range === 'all' ? t.chapterAll : `#${range}`}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-200/70 dark:bg-slate-800 rounded-xl">
              {(['all', 'trick', 'riddle', 'easy', 'medium', 'hard', 'genius'] as const).map((tab) => {
                const isSelected = filter === tab;
                const isSpecial = tab === 'trick' || tab === 'riddle';
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setFilter(tab)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? isSpecial
                          ? 'bg-amber-500 text-stone-950 shadow-xs'
                          : 'bg-white dark:bg-slate-700 text-stone-900 dark:text-white shadow-xs'
                        : 'text-stone-600 dark:text-slate-300 hover:text-stone-900 dark:hover:text-white'
                    }`}
                  >
                    {isSpecial && <Sparkles className="w-3 h-3" aria-hidden="true" />}
                    <span>
                      {tab === 'all'
                        ? t.allDifficulties
                        : tab === 'trick'
                          ? t.tricksFilter
                          : tab === 'riddle'
                            ? t.riddlesFilter
                            : t.difficulty[tab]}
                    </span>
                  </button>
                );
              })}
            </div>

            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchLevel}
              aria-label={t.searchLevel}
              className="w-full sm:w-44 rounded-xl border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs text-stone-900 dark:text-white placeholder:text-stone-400 focus:outline-2 focus:outline-indigo-600"
            />
          </div>

          <div className="flex items-center justify-between gap-3 rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2">
            <div>
              <div className="text-xs font-bold text-stone-900 dark:text-white">{t.practiceMode}</div>
              <div className="text-[11px] text-stone-500 dark:text-slate-400">{t.practiceModeDesc}</div>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={practiceUnlocked}
              onClick={onTogglePractice}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                practiceUnlocked
                  ? 'bg-emerald-600 text-white'
                  : 'bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300 hover:bg-stone-200 dark:hover:bg-slate-700'
              }`}
            >
              {practiceUnlocked ? (
                <Unlock className="w-3.5 h-3.5" aria-hidden="true" />
              ) : (
                <Lock className="w-3.5 h-3.5" aria-hidden="true" />
              )}
              <span>{practiceUnlocked ? 'ON' : 'OFF'}</span>
            </button>
          </div>
        </div>

        {/* 500-Level Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2.5">
            {filtered.map((p) => {
              const isSolved = solvedSet.has(p.id);
              const isTrickOrRiddle = p.category === 'trick' || p.category === 'riddle';
              const isUnlocked = practiceUnlocked || p.id <= maxUnlocked || isSolved;
              const stars = starsByLevel[String(p.id)] || 0;
              const isCurrent = p.id === currentLevelId;

              const diffColor =
                p.difficulty === 'easy'
                  ? 'text-emerald-700 dark:text-emerald-400'
                  : p.difficulty === 'medium'
                    ? 'text-indigo-700 dark:text-indigo-400'
                    : p.difficulty === 'hard'
                      ? 'text-amber-700 dark:text-amber-400'
                      : 'text-rose-700 dark:text-rose-400';

              return (
                <button
                  key={p.id}
                  type="button"
                  disabled={!isUnlocked}
                  title={isUnlocked ? `${p.title[lang]} (${t.categoryLabels[p.category]})` : t.lockedLevel}
                  onClick={() => {
                    onSelectLevel(p.id);
                    onClose();
                  }}
                  className={`relative flex flex-col items-center justify-center rounded-xl border p-2.5 transition-colors cursor-pointer disabled:opacity-45 disabled:cursor-not-allowed ${
                    isCurrent
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 ring-2 ring-indigo-500/25'
                      : isSolved
                        ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/60 dark:bg-emerald-950/30 hover:bg-emerald-50 dark:hover:bg-emerald-950/50'
                        : 'border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-stone-50 dark:hover:bg-slate-700/80'
                  }`}
                >
                  {isTrickOrRiddle && (
                    <span
                      className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-amber-500"
                      aria-hidden="true"
                    />
                  )}
                  <span className="font-mono-num text-sm font-bold text-stone-900 dark:text-white">
                    {p.id}
                  </span>
                  <span className={`text-[10px] font-semibold ${diffColor}`}>
                    {t.difficulty[p.difficulty]}
                  </span>
                  <div className="mt-1 flex items-center gap-0.5" aria-hidden="true">
                    {isUnlocked ? (
                      [1, 2, 3].map((s) => (
                        <Star
                          key={s}
                          className={`w-2.5 h-2.5 ${
                            s <= stars
                              ? 'fill-amber-400 text-amber-500'
                              : 'text-stone-300 dark:text-slate-600'
                          }`}
                        />
                      ))
                    ) : (
                      <Lock className="w-3 h-3 text-stone-400 dark:text-slate-500" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

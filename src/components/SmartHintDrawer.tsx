import React from 'react';
import { Lightbulb, Sparkles, X } from 'lucide-react';
import { Language, Puzzle } from '../data/puzzles/types';
import { buildSmartHintPlan } from '../game/hints';
import { UIStrings } from '../i18n/translations';

interface SmartHintDrawerProps {
  puzzle: Puzzle;
  lang: Language;
  t: UIStrings;
  bulbs: number;
  revealedTiers: number; // 0, 1, 2, or 3
  wrongAttempts: number;
  elapsedSeconds: number;
  onUnlockTier: (tierIndex: 0 | 1 | 2, cost: number) => void;
  onClaimFreeBulbs: () => void;
  onClose: () => void;
}

export const SmartHintDrawer: React.FC<SmartHintDrawerProps> = ({
  puzzle,
  lang,
  t,
  bulbs,
  revealedTiers,
  wrongAttempts,
  elapsedSeconds,
  onUnlockTier,
  onClaimFreeBulbs,
  onClose,
}) => {
  const plan = buildSmartHintPlan({
    puzzle,
    lang,
    wrongAttempts,
    elapsedSeconds,
  });

  const nextTierIndex = revealedTiers as 0 | 1 | 2;
  const nextCost = revealedTiers < 3 ? plan.tierCost[nextTierIndex] : 0;
  const canAfford = bulbs >= nextCost;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-label={t.smartHint}
    >
      <div className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 shadow-2xl p-6 animate-gentle-pop">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
              <Lightbulb className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-stone-900 dark:text-white">{t.smartHint}</h2>
              <p className="text-xs text-stone-500 dark:text-slate-400">
                {t.level} #{puzzle.id} · {t.difficulty[puzzle.difficulty]}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="rounded-xl p-2 text-stone-500 dark:text-slate-400 hover:bg-stone-100 dark:hover:bg-slate-800 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Adaptive Smart Analysis */}
        <div className="mt-4 rounded-xl border border-stone-200 dark:border-slate-800 bg-stone-50 dark:bg-slate-950/60 p-3.5">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-700 dark:text-indigo-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{t.smartAnalysis}</span>
          </div>
          <p className="mt-1 text-xs text-stone-600 dark:text-slate-400 leading-relaxed">{plan.mechanicBadge}</p>
          <p className="mt-1 text-xs font-medium text-stone-800 dark:text-slate-200 leading-relaxed">{plan.strategyTip}</p>
        </div>

        {/* Progressive Clue Tiers */}
        <div className="mt-4 space-y-2.5">
          {[0, 1, 2].map((tierIdx) => {
            const isUnlocked = revealedTiers > tierIdx;
            const cost = plan.tierCost[tierIdx];
            return (
              <div
                key={tierIdx}
                className={`rounded-xl border p-3.5 transition-colors ${
                  isUnlocked
                    ? 'border-amber-200 dark:border-amber-800 bg-amber-50/70 dark:bg-amber-950/30'
                    : 'border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-800/50'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-semibold text-stone-500 dark:text-slate-400">
                  <span>
                    {t.hintTier} {tierIdx + 1}/3
                  </span>
                  {!isUnlocked && (
                    <span className="font-mono-num text-amber-700 dark:text-amber-400">
                      {cost === 0 ? t.freeHint : `${cost} 💡`}
                    </span>
                  )}
                </div>
                {isUnlocked ? (
                  <p className="mt-1.5 text-sm font-medium text-stone-900 dark:text-white leading-relaxed">
                    {puzzle.hints[tierIdx][lang]}
                  </p>
                ) : (
                  <p className="mt-1.5 text-xs text-stone-400 dark:text-slate-500 italic">••••••••••••</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Footer */}
        <div className="mt-5 flex flex-col gap-2">
          {revealedTiers < 3 && (
            <button
              type="button"
              disabled={!canAfford}
              onClick={() => onUnlockTier(nextTierIndex, nextCost)}
              className="w-full rounded-xl bg-amber-500 border-b-4 border-amber-700 px-4 py-2.5 text-sm font-bold text-stone-950 hover:bg-amber-400 active:border-b-0 active:translate-y-[3px] disabled:opacity-45 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              {revealedTiers === 2 ? t.revealSolution : t.unlockNextHint} (
              {nextCost === 0 ? t.freeHint : `-${nextCost} 💡`})
            </button>
          )}

          {revealedTiers < 3 && !canAfford && (
            <button
              type="button"
              onClick={onClaimFreeBulbs}
              className="w-full rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/40 px-4 py-2 text-xs font-bold text-amber-900 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-950/60 transition-colors cursor-pointer"
            >
              {t.claimDailyBulbs}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

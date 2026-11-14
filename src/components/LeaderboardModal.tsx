import React, { useState } from 'react';
import { Check, Globe, LogIn, LogOut, Trophy, X } from 'lucide-react';
import { TOTAL_PUZZLES } from '../data/puzzles/index';
import { LeaderboardPlayer } from '../game/leaderboard';
import { UIStrings } from '../i18n/translations';

interface LeaderboardModalProps {
  t: UIStrings;
  ranked: LeaderboardPlayer[];
  selfRank: number;
  selfEntry: LeaderboardPlayer;
  isLiveFirestore: boolean;
  isOnline: boolean;
  signedInEmail: string | null;
  onSignIn: () => void;
  onSignOut: () => void;
  onUpdateNickname: (name: string) => void;
  onClose: () => void;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({
  t,
  ranked,
  selfRank,
  selfEntry,
  isLiveFirestore,
  isOnline,
  signedInEmail,
  onSignIn,
  onSignOut,
  onUpdateNickname,
  onClose,
}) => {
  const [nicknameInput, setNicknameInput] = useState(selfEntry.displayName);
  const [savedToast, setSavedToast] = useState(false);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 backdrop-blur-xs p-4"
      role="dialog"
      aria-modal="true"
      aria-label={t.leaderboardLabel}
    >
      <div className="w-full max-w-2xl max-h-[88vh] flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 shadow-2xl overflow-hidden animate-gentle-pop">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-stone-200 dark:border-slate-800 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <Trophy className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-stone-900 dark:text-white">{t.leaderboardLabel}</h2>
              <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-slate-400">
                <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                <span>
                  {isOnline && isLiveFirestore ? t.realtimeLive : t.offlineReady}
                </span>
                <span aria-hidden="true">·</span>
                <span className="font-mono-num">
                  {t.yourRank}: #{selfRank}
                </span>
              </div>
            </div>
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

        {/* Account & Nickname Controls */}
        <div className="border-b border-stone-200 dark:border-slate-800 bg-stone-50 dark:bg-slate-950/60 px-6 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onUpdateNickname(nicknameInput);
              setSavedToast(true);
              window.setTimeout(() => setSavedToast(false), 1600);
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              maxLength={40}
              value={nicknameInput}
              onChange={(e) => setNicknameInput(e.target.value)}
              aria-label={t.editNickname}
              className="w-40 sm:w-48 rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-medium text-stone-900 dark:text-white focus:outline-2 focus:outline-indigo-600"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-1 rounded-lg bg-stone-900 dark:bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-stone-800 dark:hover:bg-indigo-500 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {savedToast && <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />}
              <span>{t.saveNickname}</span>
            </button>
          </form>

          {signedInEmail ? (
            <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-slate-300">
              <span className="truncate max-w-[160px] font-medium">{signedInEmail}</span>
              <button
                type="button"
                onClick={onSignOut}
                className="inline-flex items-center gap-1 rounded-lg border border-stone-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1.5 text-xs font-semibold text-stone-800 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-700 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{t.signOut}</span>
              </button>
            </div>
          ) : (
            <button
              type="button"
              disabled={!isOnline}
              onClick={onSignIn}
              className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{t.signInGoogle}</span>
            </button>
          )}
        </div>

        {/* Ranking Table */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-200 dark:border-slate-800 text-xs font-semibold text-stone-500 dark:text-slate-400">
                <th className="py-2 pr-3">{t.rankCol}</th>
                <th className="py-2 pr-3">{t.playerCol}</th>
                <th className="py-2 pr-3 text-right">{t.clearedCol}</th>
                <th className="py-2 text-right">{t.scoreCol}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100 dark:divide-slate-800 text-sm">
              {ranked.map((player, index) => {
                const rank = index + 1;
                return (
                  <tr
                    key={player.uid}
                    className={player.isSelf ? 'bg-indigo-50/70 dark:bg-indigo-950/40 font-semibold' : ''}
                  >
                    <td className="py-2.5 pr-3 font-mono-num text-stone-700 dark:text-slate-300">
                      #{rank}
                    </td>
                    <td className="py-2.5 pr-3">
                      <div className="flex items-center gap-2 text-stone-900 dark:text-white">
                        <span>{player.displayName}</span>
                        <span className="text-xs text-stone-400 dark:text-slate-500 font-mono-num">
                          {player.country}
                        </span>
                      </div>
                    </td>
                    <td className="py-2.5 pr-3 text-right font-mono-num text-stone-600 dark:text-slate-400">
                      {player.levelsCleared}/{TOTAL_PUZZLES}
                    </td>
                    <td className="py-2.5 text-right font-mono-num font-bold text-stone-900 dark:text-white">
                      {player.score.toLocaleString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

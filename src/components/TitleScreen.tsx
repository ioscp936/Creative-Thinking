import React, { useState } from 'react';
import { ArrowRight, Globe, Map, Moon, Music, Sparkles, Sun, Trophy, Volume2, VolumeX, WifiOff } from 'lucide-react';
import heroStudioImg from '../assets/images/creative_thinking_hero_1794590161475.jpg';
import { TOTAL_PUZZLES } from '../data/puzzles/index';
import { Language } from '../data/puzzles/types';
import { LANGUAGES, UIStrings } from '../i18n/translations';
import { PWAInstallButton } from './PWAInstallButton';

interface TitleScreenProps {
  t: UIStrings;
  lang: Language;
  theme: 'light' | 'dark';
  currentLevelId: number;
  solvedCount: number;
  totalStars: number;
  totalScore: number;
  musicOn: boolean;
  sfxOn: boolean;
  isOnline: boolean;
  onStart: () => void;
  onStartTricksSpotlight: () => void;
  onOpenLevels: () => void;
  onOpenLeaderboard: () => void;
  onChangeLang: (lang: Language) => void;
  onToggleTheme: () => void;
  onToggleMusic: () => void;
  onToggleSfx: () => void;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  t,
  lang,
  theme,
  currentLevelId,
  solvedCount,
  totalStars,
  totalScore,
  musicOn,
  sfxOn,
  isOnline,
  onStart,
  onStartTricksSpotlight,
  onOpenLevels,
  onOpenLeaderboard,
  onChangeLang,
  onToggleTheme,
  onToggleMusic,
  onToggleSfx,
}) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <main className="min-h-screen w-full flex flex-col justify-between px-4 sm:px-8 py-6 bg-[#F7F6F2] dark:bg-[#0B0E14] text-stone-900 dark:text-slate-100 transition-colors duration-200">
      {/* Compact Top Utility Row */}
      <div className="max-w-5xl w-full mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs font-medium text-stone-500 dark:text-slate-400">
          {!isOnline ? (
            <span className="inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-semibold">
              <WifiOff className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">{t.offlineReady}</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5" title={t.onlineSynced}>
              <Globe className="w-3.5 h-3.5 shrink-0 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              <span className="hidden sm:inline">{t.onlineSynced}</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div
            className="flex items-center gap-0.5 rounded-xl bg-stone-200/80 dark:bg-slate-800 p-0.5"
            role="group"
            aria-label="Language"
          >
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => onChangeLang(l.code)}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  lang === l.code
                    ? 'bg-white dark:bg-slate-700 text-stone-900 dark:text-white shadow-xs'
                    : 'text-stone-600 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {l.short}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={t.themeToggle}
            title={t.themeToggle}
            className="p-2 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-stone-700 dark:text-amber-300 hover:bg-stone-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={onToggleMusic}
            aria-label={musicOn ? t.musicOn : t.musicOff}
            title={musicOn ? t.musicOn : t.musicOff}
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              musicOn
                ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300'
                : 'border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-stone-600 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-700'
            }`}
          >
            <Music className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onToggleSfx}
            aria-label={sfxOn ? t.sfxOn : t.sfxOff}
            title={sfxOn ? t.sfxOn : t.sfxOff}
            className="p-2 rounded-xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-stone-600 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            {sfxOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <PWAInstallButton t={t} />
        </div>
      </div>

      {/* Editorial 2-Column Studio Hero */}
      <section className="max-w-5xl w-full mx-auto my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Custom Tangram Emblem Lockup, Narrative & Tactile Actions */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide">
            <svg viewBox="0 0 36 36" className="w-6 h-6 shrink-0" aria-hidden="true">
              <rect x="2" y="2" width="32" height="32" rx="9" fill="#4F46E5" />
              <polygon points="8,26 18,9 22,26" fill="#FFFFFF" />
              <polygon points="19,10 28,15 22,26" fill="#F59E0B" />
            </svg>
            <span>{t.heroEyebrow}</span>
          </div>

          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 dark:text-white leading-[1.06]">
            {t.appName}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-stone-600 dark:text-slate-300 max-w-xl leading-relaxed">
            {t.tagline}
          </p>

          {/* Unboxed Numeric Progress Strip */}
          <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-stone-500 dark:text-slate-400">
            <span>
              <strong className="font-mono-num text-stone-900 dark:text-white">
                {solvedCount}/{TOTAL_PUZZLES}
              </strong>{' '}
              {t.clearedCol}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              <strong className="font-mono-num text-stone-900 dark:text-white">
                {totalStars}/1500
              </strong>{' '}
              {t.stars}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              <strong className="font-mono-num text-stone-900 dark:text-white">
                {totalScore.toLocaleString()}
              </strong>{' '}
              {t.score}
            </span>
          </div>

          {/* Primary + Secondary CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <button
              type="button"
              data-start="true"
              onClick={onStart}
              className="rounded-xl bg-indigo-600 border-b-4 border-indigo-800 px-8 py-3.5 text-base font-bold text-white shadow-sm hover:bg-indigo-500 active:border-b-0 active:translate-y-[3px] transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              {solvedCount > 0 ? `${t.continuePlay} #${currentLevelId}` : t.startPlay}
            </button>

            <button
              type="button"
              onClick={onOpenLevels}
              className="inline-flex items-center gap-2 rounded-xl border border-stone-300 dark:border-slate-700 border-b-4 border-b-stone-300 dark:border-b-slate-800 bg-white dark:bg-slate-800 px-5 py-3.5 text-sm font-bold text-stone-900 dark:text-slate-100 hover:bg-stone-50 dark:hover:bg-slate-700 active:border-b active:translate-y-[2px] transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Map className="w-4 h-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              <span>{t.levelsLabel}</span>
            </button>

            <button
              type="button"
              onClick={onOpenLeaderboard}
              className="inline-flex items-center gap-2 rounded-xl border border-stone-300 dark:border-slate-700 border-b-4 border-b-stone-300 dark:border-b-slate-800 bg-white dark:bg-slate-800 px-5 py-3.5 text-sm font-bold text-stone-900 dark:text-slate-100 hover:bg-stone-50 dark:hover:bg-slate-700 active:border-b active:translate-y-[2px] transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Trophy className="w-4 h-4 text-amber-500" aria-hidden="true" />
              <span>{t.leaderboardLabel}</span>
            </button>
          </div>
        </div>

        {/* Right Column: Bespoke Studio Artwork Frame + Trick & Riddle Quick-Jump */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <div className="rounded-3xl border border-stone-200 dark:border-slate-700/80 bg-white dark:bg-slate-900 p-3 shadow-sm">
            <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-stone-100 dark:bg-slate-800 relative flex items-center justify-center">
              {!imgFailed ? (
                <img
                  src={heroStudioImg}
                  alt={t.appName}
                  referrerPolicy="no-referrer"
                  onError={() => setImgFailed(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <svg viewBox="0 0 120 120" className="w-28 h-28" aria-hidden="true">
                  <rect x="8" y="8" width="104" height="104" rx="28" fill="#14161F" />
                  <circle cx="60" cy="54" r="32" fill="#4F46E5" fillOpacity="0.28" />
                  <path
                    d="M60 24C44.54 24 32 36.54 32 52C32 62.1 37.36 70.96 45.4 75.88C47.74 77.31 49.5 79.57 50.03 82.26L50.6 85H69.4L69.97 82.26C70.5 79.57 72.26 77.31 74.6 75.88C82.64 70.96 88 62.1 88 52C88 36.54 75.46 24 60 24Z"
                    fill="#F59E0B"
                  />
                  <rect x="51" y="89" width="18" height="8" rx="4" fill="#E2E8F0" />
                  <path d="M61 36L65 49H74L63 61L66 70L55 57H47L61 36Z" fill="#14161F" />
                </svg>
              )}
            </div>

            <button
              type="button"
              onClick={onStartTricksSpotlight}
              className="mt-3 w-full flex items-center justify-between gap-3 rounded-2xl bg-stone-50 dark:bg-slate-800/80 hover:bg-amber-50 dark:hover:bg-amber-950/30 border border-stone-200 dark:border-slate-700 px-4 py-3 text-left transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <div className="text-sm font-bold text-stone-900 dark:text-white truncate">
                    {t.playOriginalsBtn}
                  </div>
                  <div className="text-[11px] text-stone-500 dark:text-slate-400 truncate">
                    {t.playOriginalsSub}
                  </div>
                </div>
              </div>
              <ArrowRight
                className="w-4 h-4 text-stone-500 dark:text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Quiet Bottom Control Hint */}
      <footer className="max-w-5xl w-full mx-auto text-center text-xs text-stone-400 dark:text-slate-500">
        {t.controlsHint}
      </footer>
    </main>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Delete, RotateCcw } from 'lucide-react';
import { Language, LocalizedText, Puzzle } from '../data/puzzles/types';
import { UIStrings } from '../i18n/translations';
import { PropIllustration, VisualDiagram } from './PropIllustration';

interface PuzzleStageProps {
  puzzle: Puzzle;
  lang: Language;
  t: UIStrings;
  solved: boolean;
  onSolve: () => void;
  onWrong: () => void;
  onTapSfx: () => void;
}

const resolveText = (v: LocalizedText | string | undefined, lang: Language): string | undefined => {
  if (!v) return undefined;
  if (typeof v === 'string') return v;
  return v[lang];
};

export const PuzzleStage: React.FC<PuzzleStageProps> = ({
  puzzle,
  lang,
  t,
  solved,
  onSolve,
  onWrong,
  onTapSfx,
}) => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [shakeKey, setShakeKey] = useState(0);

  // Scene & Drag state: positions map id -> {x, y} in percentage (0..100)
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>({});
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const dragOffset = useRef<{ dx: number; dy: number }>({ dx: 0, dy: 0 });
  const movedEnough = useRef(false);

  // Scene tap sequence & patience timer
  const [seqProgress, setSeqProgress] = useState(0);
  const [waitLeft, setWaitLeft] = useState<number | null>(null);

  // Move aside then tap state
  const [coverCleared, setCoverCleared] = useState(false);
  const [coverNudge, setCoverNudge] = useState(0);

  // Balance scale state: selected item ids on right pan
  const [scalePanIds, setScalePanIds] = useState<string[]>([]);

  // Action meter state (hold, multi_tap, switches)
  const [meterValue, setMeterValue] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const [switches, setSwitches] = useState<boolean[]>([]);
  const holdRafRef = useRef<number | null>(null);

  // Visual count / lock dial input
  const [countVal, setCountVal] = useState(0);
  const [dialCode, setDialCode] = useState('');

  // Matrix toggle state
  const [matrixGrid, setMatrixGrid] = useState<boolean[]>([]);

  // Order sort state
  const [sortOrder, setSortOrder] = useState<string[]>([]);
  const [selectedSortIdx, setSelectedSortIdx] = useState<number | null>(null);

  // Reset stage cleanly whenever puzzle.id changes
  const resetPuzzleState = () => {
    const pos: Record<string, { x: number; y: number }> = {};
    if (puzzle.mechanic.type === 'scene_tap') {
      for (const obj of puzzle.mechanic.objects) {
        pos[obj.id] = { x: obj.x, y: obj.y };
      }
      setWaitLeft(puzzle.mechanic.waitSeconds ?? null);
    } else if (puzzle.mechanic.type === 'drag_combine') {
      for (const item of puzzle.mechanic.items) {
        pos[item.id] = { x: item.x, y: item.y };
      }
      setWaitLeft(null);
    } else {
      setWaitLeft(null);
    }
    setPositions(pos);
    setDraggedId(null);
    setSeqProgress(0);
    setCoverCleared(false);
    setCoverNudge(0);
    setScalePanIds([]);
    setMeterValue(0);
    setIsHolding(false);
    setCountVal(0);
    setDialCode('');

    if (puzzle.mechanic.type === 'action_meter' && puzzle.mechanic.mode === 'switches') {
      setSwitches(new Array(puzzle.mechanic.switchCount || 3).fill(false));
    } else {
      setSwitches([]);
    }

    if (puzzle.mechanic.type === 'matrix_toggle') {
      setMatrixGrid([...puzzle.mechanic.initialGrid]);
    } else {
      setMatrixGrid([]);
    }

    if (puzzle.mechanic.type === 'order_sort') {
      setSortOrder(puzzle.mechanic.items.map((it) => it.id));
    } else {
      setSortOrder([]);
    }
    setSelectedSortIdx(null);
  };

  useEffect(() => {
    resetPuzzleState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [puzzle.id]);

  // Patience countdown timer for waitSeconds puzzles
  useEffect(() => {
    if (solved || puzzle.mechanic.type !== 'scene_tap' || !puzzle.mechanic.waitSeconds) return;
    if (waitLeft === null) return;
    if (waitLeft <= 0) {
      onSolve();
      return;
    }
    const timer = window.setTimeout(() => {
      setWaitLeft((prev) => (prev !== null ? Math.max(0, prev - 1) : null));
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [waitLeft, solved, puzzle.mechanic, onSolve]);

  // Hold action RAF timer
  useEffect(() => {
    if (!isHolding || solved || puzzle.mechanic.type !== 'action_meter' || puzzle.mechanic.mode !== 'hold') {
      if (holdRafRef.current) cancelAnimationFrame(holdRafRef.current);
      return;
    }
    let last = performance.now();
    const required = puzzle.mechanic.requiredValue;
    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      setMeterValue((prev) => {
        const next = Math.min(required, prev + dt);
        if (next >= required) {
          setIsHolding(false);
          onSolve();
        }
        return next;
      });
      holdRafRef.current = requestAnimationFrame(step);
    };
    holdRafRef.current = requestAnimationFrame(step);
    return () => {
      if (holdRafRef.current) cancelAnimationFrame(holdRafRef.current);
    };
  }, [isHolding, solved, puzzle.mechanic, onSolve]);

  const triggerWrong = () => {
    setShakeKey((k) => k + 1);
    onWrong();
  };

  // Pointer drag handlers for scene_tap & drag_combine
  const handlePointerDown = (e: React.PointerEvent, id: string, canDrag: boolean) => {
    if (solved) return;
    e.stopPropagation();
    onTapSfx();
    movedEnough.current = false;
    if (!canDrag || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const cur = positions[id] || { x: 50, y: 50 };
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    dragOffset.current = { dx: cur.x - px, dy: cur.y - py };
    setDraggedId(id);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggedId || !stageRef.current || solved) return;
    const rect = stageRef.current.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100 + dragOffset.current.dx;
    const py = ((e.clientY - rect.top) / rect.height) * 100 + dragOffset.current.dy;
    const clampedX = Math.max(8, Math.min(92, px));
    const clampedY = Math.max(12, Math.min(88, py));
    const prev = positions[draggedId];
    if (prev && (Math.abs(prev.x - clampedX) > 2 || Math.abs(prev.y - clampedY) > 2)) {
      movedEnough.current = true;
    }
    setPositions((p) => ({ ...p, [draggedId]: { x: clampedX, y: clampedY } }));
  };

  const handlePointerUp = (id: string) => {
    if (!draggedId || draggedId !== id) return;
    setDraggedId(null);

    if (puzzle.mechanic.type === 'drag_combine') {
      const m = puzzle.mechanic;
      const p1 = positions[id];
      if (!p1) return;

      if (m.mode === 'move_aside_then_tap' && id === m.sourceId && m.targetId) {
        const tgt = positions[m.targetId];
        if (tgt && Math.hypot(p1.x - tgt.x, p1.y - tgt.y) > 20) {
          setCoverCleared(true);
        }
      } else if (m.mode === 'drop_on_target' && id === m.sourceId && m.targetId) {
        const tgt = positions[m.targetId];
        if (tgt && Math.hypot(p1.x - tgt.x, p1.y - tgt.y) < 18) {
          onSolve();
        }
      } else if (m.mode === 'combine_pair' && m.pairIds) {
        const [a, b] = m.pairIds;
        if (id === a || id === b) {
          const otherId = id === a ? b : a;
          const otherPos = positions[otherId];
          if (otherPos && Math.hypot(p1.x - otherPos.x, p1.y - otherPos.y) < 18) {
            onSolve();
          }
        }
      }
    }
  };

  // Render prompt with optional clickable prompt word (Brain Test signature!)
  const renderPrompt = () => {
    const fullText = puzzle.prompt[lang];
    if (puzzle.mechanic.type === 'scene_tap' && puzzle.mechanic.tapPromptWord) {
      const targetWord = puzzle.mechanic.tapPromptWord[lang];
      const idx = fullText.indexOf(targetWord);
      if (idx !== -1) {
        const before = fullText.slice(0, idx);
        const after = fullText.slice(idx + targetWord.length);
        return (
          <h2 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white leading-snug text-center max-w-xl mx-auto">
            {before}
            <button
              type="button"
              onClick={() => {
                if (solved) return;
                onTapSfx();
                onSolve();
              }}
              className="inline font-bold text-stone-900 dark:text-white underline decoration-transparent hover:decoration-stone-400 cursor-pointer focus-visible:outline-2 focus-visible:outline-indigo-600 rounded"
            >
              {targetWord}
            </button>
            {after}
          </h2>
        );
      }
    }
    return (
      <h2 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white leading-snug text-center max-w-xl mx-auto">
        {fullText}
      </h2>
    );
  };

  const renderStageBody = () => {
    const m = puzzle.mechanic;

    if (m.type === 'scene_tap') {
      const totalSeq = m.objects.filter((o) => o.isTarget && o.targetOrder).length;
      const backdropBg =
        m.backdrop === 'night'
          ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950 text-white'
          : m.backdrop === 'park'
            ? 'bg-gradient-to-b from-emerald-50 to-teal-50/80 dark:from-emerald-950/60 dark:to-slate-900'
            : m.backdrop === 'room'
              ? 'bg-gradient-to-b from-amber-50/80 to-stone-100 dark:from-slate-800 dark:to-slate-900'
              : 'bg-gradient-to-b from-sky-50 to-blue-50/70 dark:from-slate-800 dark:to-slate-900';

      const flashObj = m.objects.find((o) => o.shape === 'flashlight');
      const flashPos = flashObj ? positions[flashObj.id] || { x: flashObj.x, y: flashObj.y } : null;

      return (
        <div
          ref={stageRef}
          onPointerMove={handlePointerMove}
          className={`relative w-full h-[290px] sm:h-[320px] rounded-2xl border border-stone-200 dark:border-slate-700 overflow-hidden select-none touch-none studio-dot-grid ${backdropBg}`}
        >
          {/* Patience countdown */}
          {m.waitSeconds && waitLeft !== null && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-stone-200 dark:border-slate-700 px-3.5 py-1.5 text-xs font-semibold text-stone-700 dark:text-slate-200 shadow-xs">
              {t.waitingPatience} <span className="font-mono-num ml-1 text-indigo-600 dark:text-indigo-400">{waitLeft}s</span>
            </div>
          )}

          {/* Sequence progress */}
          {totalSeq > 0 && (
            <div className="absolute top-3 right-3 z-20 rounded-xl bg-white/95 dark:bg-slate-900/95 border border-stone-200 dark:border-slate-700 px-2.5 py-1 text-xs font-mono-num font-bold text-stone-800 dark:text-slate-100">
              {seqProgress}/{totalSeq}
            </div>
          )}

          {m.objects.map((obj, idx) => {
            const pos = positions[obj.id] || { x: obj.x, y: obj.y };
            const isDraggable = !!obj.draggable;
            const label = resolveText(obj.label, lang);
            const isDoneInSeq = obj.targetOrder !== undefined && obj.targetOrder <= seqProgress;
            return (
              <button
                key={obj.id}
                type="button"
                aria-label={label || `${obj.shape}-${obj.id}`}
                onPointerDown={(e) => handlePointerDown(e, obj.id, isDraggable)}
                onPointerUp={() => handlePointerUp(obj.id)}
                onClick={() => {
                  if (solved || movedEnough.current) return;
                  if (isDraggable) return;
                  onTapSfx();

                  if (m.waitSeconds && obj.decoy) {
                    setWaitLeft(m.waitSeconds);
                    triggerWrong();
                    return;
                  }

                  if (obj.decoy || !obj.isTarget) {
                    triggerWrong();
                    return;
                  }

                  if (totalSeq > 0 && obj.targetOrder) {
                    if (obj.targetOrder === seqProgress + 1) {
                      const next = seqProgress + 1;
                      setSeqProgress(next);
                      if (next >= totalSeq) {
                        onSolve();
                      }
                    } else if (obj.targetOrder > seqProgress + 1) {
                      setSeqProgress(0);
                      triggerWrong();
                    }
                    return;
                  }

                  if (obj.isTarget) {
                    onSolve();
                  }
                }}
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: `translate(-50%, -50%) scale(${obj.scale ?? 1})`,
                  zIndex: draggedId === obj.id ? 30 : isDraggable ? 20 : 10 + idx,
                }}
                className={`absolute p-1 rounded-xl transition-opacity focus-visible:outline-2 focus-visible:outline-indigo-500 ${
                  isDraggable ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer hover:scale-105'
                } ${isDoneInSeq ? 'opacity-40' : 'opacity-100'}`}
              >
                <PropIllustration shape={obj.shape} color={obj.color} size={68} label={label} />
              </button>
            );
          })}

          {/* Dark Room overlay with spotlight around flashlight */}
          {m.darkRoom && flashPos && (
            <div
              className="pointer-events-none absolute inset-0 z-15"
              style={{
                background: `radial-gradient(circle 88px at ${flashPos.x}% ${flashPos.y}%, rgba(15,23,42,0.06) 0%, rgba(7,10,18,0.96) 76%)`,
              }}
            />
          )}
        </div>
      );
    }

    if (m.type === 'drag_combine') {
      if (m.mode === 'balance_scale') {
        const rightWeight = scalePanIds.reduce((sum, id) => {
          const found = m.items.find((it) => it.id === id);
          return sum + (found?.weight ?? 0);
        }, 0);
        const targetWeight = m.targetBalance ?? 10;
        const diff = rightWeight - targetWeight;
        const tiltDeg = Math.max(-14, Math.min(14, diff * 1.8));

        return (
          <div className="space-y-4">
            <div className="relative rounded-2xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800/60 p-4 flex flex-col items-center studio-dot-grid">
              <div className="text-xs font-semibold text-stone-500 dark:text-slate-400 mb-2">
                {t.balanceLabel} · <span className="font-mono-num text-stone-900 dark:text-white">{targetWeight} kg</span>
              </div>

              {/* Scale Beam */}
              <div className="w-full max-w-sm h-28 relative flex items-center justify-center">
                <div
                  className="w-64 h-2 bg-stone-800 dark:bg-slate-400 rounded-full relative transition-transform duration-200"
                  style={{ transform: `rotate(${tiltDeg}deg)` }}
                >
                  <div className="absolute -left-2 top-2 w-24 rounded-xl border border-stone-300 dark:border-slate-600 bg-white dark:bg-slate-900 py-2 px-2 text-center shadow-xs">
                    <div className="text-[10px] text-stone-500 dark:text-slate-400">{t.leftPan}</div>
                    <div className="font-mono-num text-sm font-bold text-stone-900 dark:text-white">{targetWeight} kg</div>
                  </div>
                  <div className="absolute -right-2 top-2 w-24 rounded-xl border border-indigo-300 dark:border-indigo-700 bg-indigo-50 dark:bg-indigo-950/70 py-2 px-2 text-center shadow-xs">
                    <div className="text-[10px] text-indigo-700 dark:text-indigo-300">{t.rightPan}</div>
                    <div className="font-mono-num text-sm font-bold text-indigo-900 dark:text-indigo-100">{rightWeight} kg</div>
                  </div>
                </div>
                <div className="w-4 h-12 bg-stone-700 dark:bg-slate-500 rounded-b-md absolute bottom-0" />
              </div>

              {/* Weight items selector */}
              <div className="mt-3 grid grid-cols-4 gap-2 w-full">
                {m.items.map((item) => {
                  const selected = scalePanIds.includes(item.id);
                  const lbl = resolveText(item.label, lang);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        if (solved) return;
                        onTapSfx();
                        setScalePanIds((prev) =>
                          prev.includes(item.id) ? prev.filter((x) => x !== item.id) : [...prev, item.id],
                        );
                      }}
                      className={`flex flex-col items-center justify-center rounded-xl border border-b-4 p-2 transition-all cursor-pointer ${
                        selected
                          ? 'border-indigo-600 border-b-indigo-800 bg-indigo-50 dark:bg-indigo-950/60 ring-2 ring-indigo-500/20'
                          : 'border-stone-200 dark:border-slate-700 border-b-stone-300 dark:border-b-slate-800 bg-white dark:bg-slate-800 hover:bg-stone-50 dark:hover:bg-slate-700'
                      }`}
                    >
                      <PropIllustration shape={item.shape} size={42} label={lbl} />
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => {
                  if (solved) return;
                  onTapSfx();
                  if (rightWeight === targetWeight) {
                    onSolve();
                  } else {
                    triggerWrong();
                  }
                }}
                className="mt-4 rounded-xl bg-indigo-600 border-b-4 border-indigo-800 px-6 py-2.5 text-sm font-bold text-white hover:bg-indigo-500 active:border-b-0 active:translate-y-[3px] transition-all cursor-pointer"
              >
                {t.checkBalance}
              </button>
            </div>
          </div>
        );
      }

      const bgClass =
        m.backdrop === 'park'
          ? 'bg-gradient-to-b from-emerald-50 to-teal-50/80 dark:from-emerald-950/60 dark:to-slate-900'
          : m.backdrop === 'room'
            ? 'bg-gradient-to-b from-amber-50/80 to-stone-100 dark:from-slate-800 dark:to-slate-900'
            : 'bg-gradient-to-b from-sky-50 to-blue-50/70 dark:from-slate-800 dark:to-slate-900';

      return (
        <div className="space-y-2">
          <div
            ref={stageRef}
            onPointerMove={handlePointerMove}
            className={`relative w-full h-[290px] sm:h-[320px] rounded-2xl border border-stone-200 dark:border-slate-700 overflow-hidden select-none touch-none studio-dot-grid ${bgClass}`}
          >
            {m.items.map((item, idx) => {
              const pos = positions[item.id] || { x: item.x, y: item.y };
              const isTargetInMoveAside = m.mode === 'move_aside_then_tap' && item.id === m.targetId;
              const isCoverInMoveAside = m.mode === 'move_aside_then_tap' && item.id === m.sourceId;
              const showUncoveredGlow = isTargetInMoveAside && coverCleared && !solved;

              return (
                <button
                  key={`${item.id}-${isCoverInMoveAside ? coverNudge : 0}`}
                  type="button"
                  aria-label={resolveText(item.label, lang) || item.id}
                  onPointerDown={(e) => handlePointerDown(e, item.id, !isTargetInMoveAside)}
                  onPointerUp={() => handlePointerUp(item.id)}
                  onClick={() => {
                    if (solved) return;
                    if (isCoverInMoveAside && !movedEnough.current) {
                      onTapSfx();
                      setCoverNudge((n) => n + 1);
                      return;
                    }
                    if (isTargetInMoveAside) {
                      onTapSfx();
                      if (coverCleared) {
                        onSolve();
                      } else {
                        triggerWrong();
                      }
                    }
                  }}
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: `translate(-50%, -50%) scale(${item.scale ?? 1})`,
                    zIndex: draggedId === item.id ? 30 : isTargetInMoveAside ? 10 : 15 + idx,
                  }}
                  className={`absolute p-1.5 rounded-full transition-shadow focus-visible:outline-2 focus-visible:outline-indigo-500 ${
                    isTargetInMoveAside ? 'cursor-pointer' : 'cursor-grab active:cursor-grabbing'
                  } ${showUncoveredGlow ? 'ring-4 ring-amber-400/60 bg-amber-100/40' : ''} ${
                    isCoverInMoveAside && coverNudge > 0 ? 'animate-soft-shake' : ''
                  }`}
                >
                  <PropIllustration shape={item.shape} color={item.color} size={70} label={resolveText(item.label, lang)} />
                </button>
              );
            })}
          </div>
          <p className="text-center text-xs text-stone-500 dark:text-slate-400">{t.dragHintTag}</p>
        </div>
      );
    }

    if (m.type === 'matrix_toggle') {
      const selectedCount = matrixGrid.filter(Boolean).length;
      const isLightsOrPattern = m.mode === 'lights_out' || m.mode === 'pattern_match';

      const handleTileClick = (index: number) => {
        if (solved) return;
        onTapSfx();
        const next = [...matrixGrid];
        if (m.mode === 'lights_out') {
          const r = Math.floor(index / 3);
          const c = index % 3;
          const neighbors = [index];
          if (r > 0) neighbors.push(index - 3);
          if (r < 2) neighbors.push(index + 3);
          if (c > 0) neighbors.push(index - 1);
          if (c < 2) neighbors.push(index + 1);
          for (const n of neighbors) next[n] = !next[n];
          setMatrixGrid(next);
          if (m.allOnRequired && next.every(Boolean)) {
            onSolve();
          }
        } else if (m.mode === 'pattern_match') {
          next[index] = !next[index];
          setMatrixGrid(next);
          if (m.targetGrid && next.every((val, i) => val === m.targetGrid![i])) {
            onSolve();
          }
        } else {
          next[index] = !next[index];
          setMatrixGrid(next);
        }
      };

      const checkMagicSum = () => {
        if (solved) return;
        onTapSfx();
        const pickedValues = matrixGrid
          .map((on, i) => (on ? Number(m.tileLabels?.[i] ?? 0) : null))
          .filter((v): v is number => v !== null);
        if (m.requiredCount && pickedValues.length !== m.requiredCount) {
          triggerWrong();
          return;
        }
        if (m.targetSum !== undefined) {
          const sum = pickedValues.reduce((a, b) => a + b, 0);
          if (sum === m.targetSum) onSolve();
          else triggerWrong();
          return;
        }
        if (m.targetProduct !== undefined) {
          const prod = pickedValues.reduce((a, b) => a * b, 1);
          if (prod === m.targetProduct) onSolve();
          else triggerWrong();
        }
      };

      return (
        <div className="rounded-2xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800/70 p-5 sm:p-6 flex flex-col items-center gap-4 studio-dot-grid">
          <div className="text-xs font-medium text-stone-600 dark:text-slate-300 text-center">
            {t.matrixTapTip}
            {!isLightsOrPattern && m.requiredCount && (
              <span className="ml-2 font-mono-num font-bold text-indigo-600 dark:text-indigo-400">
                ({t.matrixSelected}: {selectedCount}/{m.requiredCount})
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2.5 w-full max-w-[270px]">
            {matrixGrid.map((on, idx) => {
              const label = m.tileLabels?.[idx];
              return (
                <button
                  key={idx}
                  type="button"
                  aria-pressed={on}
                  aria-label={label ? `Tile ${label}` : `Cell ${idx + 1}`}
                  onClick={() => handleTileClick(idx)}
                  className={`h-20 rounded-2xl border border-b-4 font-mono-num text-xl font-extrabold transition-all active:border-b active:translate-y-[2px] cursor-pointer flex items-center justify-center ${
                    on
                      ? isLightsOrPattern
                        ? 'border-amber-500 border-b-amber-700 bg-amber-400 text-stone-950 shadow-sm'
                        : 'border-indigo-600 border-b-indigo-800 bg-indigo-600 text-white shadow-sm'
                      : 'border-stone-300 dark:border-slate-600 border-b-stone-400 dark:border-b-slate-700 bg-white dark:bg-slate-900 text-stone-700 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {label ?? (on ? '●' : '○')}
                </button>
              );
            })}
          </div>

          {!isLightsOrPattern && (
            <button
              type="button"
              onClick={checkMagicSum}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 border-b-4 border-indigo-800 px-6 py-2.5 text-sm font-bold text-white hover:bg-indigo-500 active:border-b-0 active:translate-y-[3px] transition-all cursor-pointer"
            >
              <Check className="w-4 h-4" aria-hidden="true" />
              <span>{t.submitAnswer}</span>
            </button>
          )}
        </div>
      );
    }

    if (m.type === 'order_sort') {
      const swapIndices = (i: number, j: number) => {
        if (i < 0 || j < 0 || i >= sortOrder.length || j >= sortOrder.length) return;
        const next = [...sortOrder];
        [next[i], next[j]] = [next[j], next[i]];
        setSortOrder(next);
        setSelectedSortIdx(null);
      };

      return (
        <div className="rounded-2xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800/70 p-4 sm:p-5 flex flex-col items-center gap-4 studio-dot-grid">
          <p className="text-xs font-medium text-stone-600 dark:text-slate-300 text-center">
            {selectedSortIdx !== null ? t.swapTip : t.orderSortTip}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full">
            {sortOrder.map((id, idx) => {
              const item = m.items.find((it) => it.id === id);
              if (!item) return null;
              const isSelected = selectedSortIdx === idx;
              return (
                <div
                  key={id}
                  className={`flex flex-col items-center justify-between rounded-2xl border border-b-4 p-3 transition-all ${
                    isSelected
                      ? 'border-indigo-600 border-b-indigo-800 bg-indigo-50 dark:bg-indigo-950/60 ring-2 ring-indigo-500/30'
                      : 'border-stone-200 dark:border-slate-700 border-b-stone-300 dark:border-b-slate-800 bg-white dark:bg-slate-900'
                  }`}
                >
                  <span className="font-mono-num text-[11px] font-bold text-stone-400 dark:text-slate-500 self-start">
                    #{idx + 1}
                  </span>

                  <button
                    type="button"
                    onClick={() => {
                      if (solved) return;
                      onTapSfx();
                      if (selectedSortIdx === null) setSelectedSortIdx(idx);
                      else if (selectedSortIdx === idx) setSelectedSortIdx(null);
                      else swapIndices(selectedSortIdx, idx);
                    }}
                    className="my-2 flex flex-col items-center gap-2 text-center cursor-pointer w-full"
                  >
                    {item.shape && <PropIllustration shape={item.shape} size={52} />}
                    <span className="text-xs font-bold text-stone-900 dark:text-slate-100 leading-tight">
                      {item.label[lang]}
                    </span>
                  </button>

                  <div className="flex items-center gap-1.5 w-full justify-center pt-1">
                    <button
                      type="button"
                      disabled={idx === 0 || solved}
                      aria-label="Move left"
                      onClick={() => {
                        onTapSfx();
                        swapIndices(idx, idx - 1);
                      }}
                      className="p-1.5 rounded-lg border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-stone-700 dark:text-slate-200 hover:bg-stone-100 disabled:opacity-35 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      disabled={idx === sortOrder.length - 1 || solved}
                      aria-label="Move right"
                      onClick={() => {
                        onTapSfx();
                        swapIndices(idx, idx + 1);
                      }}
                      className="p-1.5 rounded-lg border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800 text-stone-700 dark:text-slate-200 hover:bg-stone-100 disabled:opacity-35 cursor-pointer"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => {
              if (solved) return;
              onTapSfx();
              if (sortOrder.every((id, i) => id === m.correctOrder[i])) {
                onSolve();
              } else {
                triggerWrong();
              }
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 border-b-4 border-indigo-800 px-6 py-2.5 text-sm font-bold text-white hover:bg-indigo-500 active:border-b-0 active:translate-y-[3px] transition-all cursor-pointer"
          >
            <Check className="w-4 h-4" aria-hidden="true" />
            <span>{t.submitAnswer}</span>
          </button>
        </div>
      );
    }

    if (m.type === 'action_meter') {
      if (m.mode === 'switches') {
        const count = m.switchCount ?? 3;
        const targetMask = m.targetMask ?? [];
        const isMatched =
          switches.length === count && switches.every((val, i) => val === Boolean(targetMask[i]));

        return (
          <div className="rounded-2xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800/70 p-6 flex flex-col items-center gap-5 studio-dot-grid">
            <div className="relative">
              <PropIllustration
                shape={m.targetShape}
                color={isMatched || solved ? '#FDE047' : '#CBD5E1'}
                size={84}
              />
              {m.meterLabel && (
                <div className="mt-1 text-center text-xs font-mono-num font-semibold text-stone-500 dark:text-slate-400">
                  {m.meterLabel[lang]}
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {switches.map((on, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    if (solved) return;
                    onTapSfx();
                    const next = [...switches];
                    next[idx] = !next[idx];
                    setSwitches(next);
                    if (next.every((v, i) => v === Boolean(targetMask[i]))) {
                      onSolve();
                    }
                  }}
                  className={`min-w-[68px] rounded-xl border border-b-4 px-3.5 py-3 text-center font-mono-num text-sm font-bold transition-all active:border-b active:translate-y-[2px] cursor-pointer ${
                    on
                      ? 'border-emerald-600 border-b-emerald-800 bg-emerald-600 text-white shadow-sm'
                      : 'border-stone-300 dark:border-slate-600 border-b-stone-400 dark:border-b-slate-700 bg-white dark:bg-slate-900 text-stone-700 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div>#{idx + 1}</div>
                  <div className="text-[11px] opacity-90">{on ? 'ON' : 'OFF'}</div>
                </button>
              ))}
            </div>
          </div>
        );
      }

      const pct = Math.min(100, Math.round((meterValue / m.requiredValue) * 100));
      const isHold = m.mode === 'hold';

      return (
        <div className="rounded-2xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800/70 p-6 flex flex-col items-center gap-4 studio-dot-grid">
          <button
            type="button"
            aria-label={isHold ? t.holdButton : t.tapCount}
            onPointerDown={() => {
              if (solved) return;
              onTapSfx();
              if (isHold) {
                setIsHolding(true);
              } else {
                const next = meterValue + 1;
                setMeterValue(next);
                if (next >= m.requiredValue) {
                  onSolve();
                }
              }
            }}
            onPointerUp={() => isHold && setIsHolding(false)}
            onPointerLeave={() => isHold && setIsHolding(false)}
            onPointerCancel={() => isHold && setIsHolding(false)}
            className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 border-b-4 border-b-stone-300 dark:border-b-slate-800 shadow-xs hover:bg-amber-50/40 dark:hover:bg-slate-800 active:scale-95 transition-transform cursor-pointer select-none"
          >
            <PropIllustration
              shape={solved && m.resultShape ? m.resultShape : m.targetShape}
              size={92}
            />
          </button>

          <div className="w-full max-w-xs">
            <div className="flex items-center justify-between text-xs font-semibold text-stone-600 dark:text-slate-300 mb-1.5">
              <span>{m.meterLabel ? m.meterLabel[lang] : t.tapCount}</span>
              <span className="font-mono-num">
                {isHold ? `${pct}%` : `${Math.round(meterValue)}/${m.requiredValue}`}
              </span>
            </div>
            <div className="h-3 w-full rounded-full bg-stone-200 dark:bg-slate-700 overflow-hidden">
              <div
                className="h-full bg-amber-500 transition-all duration-100"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          <div className="text-xs font-medium text-stone-500 dark:text-slate-400">
            {isHold ? (isHolding ? t.holding : t.holdButton) : `${t.tapCount}: ${Math.round(meterValue)}`}
          </div>
        </div>
      );
    }

    if (m.type === 'visual_count') {
      return (
        <div className="rounded-2xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 flex flex-col items-center gap-4">
          <div className="rounded-xl bg-stone-50 dark:bg-slate-800/80 p-3 border border-stone-200 dark:border-slate-700">
            <VisualDiagram visualKind={m.visualKind} variant={m.variant} />
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Decrease"
              onClick={() => {
                onTapSfx();
                setCountVal((v) => Math.max(m.min ?? 0, v - 1));
              }}
              className="h-11 w-11 rounded-xl border border-stone-300 dark:border-slate-600 border-b-4 border-b-stone-300 dark:border-b-slate-700 bg-stone-50 dark:bg-slate-800 text-lg font-bold text-stone-900 dark:text-white hover:bg-stone-100 dark:hover:bg-slate-700 cursor-pointer"
            >
              −
            </button>
            <input
              type="number"
              aria-label={t.enterCode}
              value={countVal}
              min={m.min ?? 0}
              max={m.max ?? 999}
              onChange={(e) => setCountVal(Number(e.target.value) || 0)}
              className="w-24 h-11 rounded-xl border border-stone-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-center font-mono-num text-xl font-bold text-stone-900 dark:text-white focus:outline-2 focus:outline-indigo-600"
            />
            <button
              type="button"
              aria-label="Increase"
              onClick={() => {
                onTapSfx();
                setCountVal((v) => Math.min(m.max ?? 999, v + 1));
              }}
              className="h-11 w-11 rounded-xl border border-stone-300 dark:border-slate-600 border-b-4 border-b-stone-300 dark:border-b-slate-700 bg-stone-50 dark:bg-slate-800 text-lg font-bold text-stone-900 dark:text-white hover:bg-stone-100 dark:hover:bg-slate-700 cursor-pointer"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              if (solved) return;
              onTapSfx();
              if (countVal === m.correctAnswer) {
                onSolve();
              } else {
                triggerWrong();
              }
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 border-b-4 border-indigo-800 px-6 py-2.5 text-sm font-bold text-white hover:bg-indigo-500 active:border-b-0 active:translate-y-[3px] transition-all cursor-pointer"
          >
            <Check className="w-4 h-4" aria-hidden="true" />
            <span>{t.submitAnswer}</span>
          </button>
        </div>
      );
    }

    if (m.type === 'lock_dial') {
      const maxLen = m.maxLength ?? 6;
      const appendDigit = (d: string) => {
        if (solved || dialCode.length >= maxLen) return;
        onTapSfx();
        setDialCode((prev) => prev + d);
      };
      return (
        <div className="rounded-2xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 flex flex-col items-center gap-4">
          <div className="w-full max-w-sm rounded-xl border border-stone-200 dark:border-slate-700 bg-stone-50 dark:bg-slate-800/80 px-4 py-3 text-center">
            <div className="font-mono-num text-base sm:text-lg font-bold text-stone-900 dark:text-white">
              {m.clueDisplay}
            </div>
            {m.clueSubtext && (
              <div className="mt-1 text-xs text-stone-500 dark:text-slate-400">{m.clueSubtext[lang]}</div>
            )}
          </div>

          <div className="w-full max-w-[260px] rounded-xl border-2 border-stone-800 dark:border-slate-600 bg-stone-900 dark:bg-slate-950 px-4 py-2.5 text-center font-mono-num text-2xl font-bold tracking-widest text-amber-400 min-h-[48px] shadow-inner">
            {dialCode || '—'}
          </div>

          <div className="grid grid-cols-5 gap-2 w-full max-w-[280px]">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((digit) => (
              <button
                key={digit}
                type="button"
                onClick={() => appendDigit(digit)}
                className="h-11 rounded-xl border border-stone-200 dark:border-slate-700 border-b-4 border-b-stone-300 dark:border-b-slate-800 bg-stone-50 dark:bg-slate-800 font-mono-num text-base font-bold text-stone-900 dark:text-white hover:bg-stone-100 dark:hover:bg-slate-700 active:border-b active:translate-y-[2px] transition-all cursor-pointer"
              >
                {digit}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2.5 w-full max-w-[280px]">
            <button
              type="button"
              onClick={() => {
                onTapSfx();
                setDialCode((prev) => prev.slice(0, -1));
              }}
              aria-label={t.clearCode}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl border border-stone-300 dark:border-slate-700 border-b-4 border-b-stone-300 dark:border-b-slate-800 bg-white dark:bg-slate-800 py-2.5 text-xs font-bold text-stone-700 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-700 active:border-b active:translate-y-[2px] cursor-pointer"
            >
              <Delete className="w-4 h-4" aria-hidden="true" />
              <span>{t.clearCode}</span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (solved) return;
                onTapSfx();
                if (dialCode === m.correctCode) {
                  onSolve();
                } else {
                  triggerWrong();
                }
              }}
              className="flex-[1.5] inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-600 border-b-4 border-indigo-800 py-2.5 text-sm font-bold text-white hover:bg-indigo-500 active:border-b-0 active:translate-y-[3px] transition-all cursor-pointer"
            >
              <Check className="w-4 h-4" aria-hidden="true" />
              <span>{t.submitAnswer}</span>
            </button>
          </div>
        </div>
      );
    }

    // lateral_choice
    return (
      <div className="rounded-2xl border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 flex flex-col items-center gap-5">
        {m.illustration && (
          <div className="flex items-center gap-4 rounded-xl bg-stone-50 dark:bg-slate-800/80 border border-stone-200 dark:border-slate-700 px-6 py-3">
            <PropIllustration shape={m.illustration} size={56} />
            {m.secondaryShape && <PropIllustration shape={m.secondaryShape} size={56} />}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          {m.options.map((opt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                if (solved) return;
                onTapSfx();
                if (idx === m.correctIndex) {
                  onSolve();
                } else {
                  triggerWrong();
                }
              }}
              className="min-h-[54px] rounded-xl border border-stone-200 dark:border-slate-700 border-b-4 border-b-stone-300 dark:border-b-slate-800 bg-stone-50 dark:bg-slate-800/80 px-4 py-3 text-left text-sm font-semibold text-stone-900 dark:text-slate-100 hover:border-indigo-500 hover:bg-indigo-50/70 dark:hover:bg-indigo-950/40 active:border-b active:translate-y-[2px] transition-all cursor-pointer"
            >
              <span className="font-mono-num text-xs font-bold text-stone-400 dark:text-slate-500 mr-2">
                {String.fromCharCode(65 + idx)}.
              </span>
              {opt[lang]}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div key={shakeKey} className={shakeKey > 0 ? 'animate-soft-shake space-y-4' : 'space-y-4'}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold text-stone-500 dark:text-slate-400">
          {t.level} <span className="font-mono-num text-stone-900 dark:text-white">#{puzzle.id}</span>
          {' · '}
          {t.difficulty[puzzle.difficulty]}
          {' · '}
          <span
            className={
              puzzle.category === 'trick' || puzzle.category === 'riddle'
                ? 'text-amber-700 dark:text-amber-400'
                : 'text-indigo-600 dark:text-indigo-400'
            }
          >
            {t.categoryLabels[puzzle.category]}
          </span>
        </span>
        <button
          type="button"
          onClick={() => {
            onTapSfx();
            resetPuzzleState();
          }}
          className="inline-flex items-center gap-1 rounded-lg border border-stone-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1 text-xs font-semibold text-stone-700 dark:text-slate-200 hover:bg-stone-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
          <span>{t.resetScene}</span>
        </button>
      </div>

      {renderPrompt()}

      {renderStageBody()}
    </div>
  );
};

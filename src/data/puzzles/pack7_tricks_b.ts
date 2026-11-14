import { SPECS_TRICKS_B1 } from './pack7_tricks_b1';
import { SPECS_TRICKS_B2 } from './pack7_tricks_b2';
import { Puzzle } from './types';

type Quad = [string, string, string, string];
const loc = (q: Quad) => ({ vi: q[0], en: q[1], es: q[2], ja: q[3] });

export const PACK_7_TRICKS_B: Puzzle[] = [...SPECS_TRICKS_B1, ...SPECS_TRICKS_B2].map((s, idx) => ({
  id: 401 + idx,
  difficulty: s.diff,
  category: s.cat,
  title: loc(s.t),
  prompt: loc(s.p),
  mechanic: s.m,
  hints: [loc(s.h1), loc(s.h2), loc(s.h3)],
  explanation: loc(s.e),
}));

export type Language = 'vi' | 'en' | 'es' | 'ja';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'genius';

export type LocalizedText = Record<Language, string>;

export type PropShape =
  | 'apple'
  | 'pear'
  | 'banana'
  | 'sun'
  | 'cloud'
  | 'raincloud'
  | 'moon'
  | 'star'
  | 'cat'
  | 'dog'
  | 'mouse'
  | 'owl'
  | 'egg'
  | 'chick'
  | 'fish'
  | 'frog'
  | 'tree'
  | 'bush'
  | 'rock'
  | 'key'
  | 'chest'
  | 'door'
  | 'balloon'
  | 'fire'
  | 'water'
  | 'ice'
  | 'magnet'
  | 'flashlight'
  | 'clock'
  | 'book'
  | 'box'
  | 'car'
  | 'cake'
  | 'candle'
  | 'coin'
  | 'diamond'
  | 'trophy'
  | 'button_red'
  | 'button_green'
  | 'umbrella'
  | 'glasses'
  | 'bone'
  | 'cheese'
  | 'milk'
  | 'flower'
  | 'leaf'
  | 'hat'
  | 'bell'
  | 'heart'
  | 'bomb'
  | 'bulb'
  | 'rocket'
  | 'planet'
  | 'prism'
  | 'hourglass';

export interface SceneObject {
  id: string;
  shape: PropShape;
  x: number; // 0-100 percentage inside 400x260 viewBox (scaled)
  y: number;
  scale?: number;
  color?: string;
  label?: LocalizedText | string;
  draggable?: boolean;
  isTarget?: boolean;
  targetOrder?: number; // 1-based for sequential tap
  decoy?: boolean;
  hiddenUnder?: string; // id of draggable object covering it
  zIndex?: number;
}

export interface SceneTapMechanic {
  type: 'scene_tap';
  objects: SceneObject[];
  /** If set, tapping this substring inside the prompt solves the puzzle */
  tapPromptWord?: Record<Language, string>;
  /** If set, player must NOT tap any decoy for `waitSeconds` to pass */
  waitSeconds?: number;
  /** Optional dark overlay lifted when a draggable cover or flashlight moves */
  darkRoom?: boolean;
  /** Optional custom backdrop mood */
  backdrop?: 'day' | 'night' | 'room' | 'park';
}

export interface DragItem {
  id: string;
  shape: PropShape;
  x: number;
  y: number;
  scale?: number;
  color?: string;
  label?: LocalizedText | string;
  weight?: number;
}

export interface DragCombineMechanic {
  type: 'drag_combine';
  items: DragItem[];
  /** Either drag sourceId onto targetId, or balance weights */
  mode: 'drop_on_target' | 'combine_pair' | 'move_aside_then_tap' | 'balance_scale';
  sourceId?: string;
  targetId?: string;
  pairIds?: [string, string];
  /** For balance_scale: target weight sum on right pan */
  targetBalance?: number;
  backdrop?: 'day' | 'night' | 'room' | 'park';
}

export interface ActionMeterMechanic {
  type: 'action_meter';
  mode: 'hold' | 'multi_tap' | 'switches';
  targetShape: PropShape;
  resultShape?: PropShape;
  /** Required hold duration in seconds or required tap count */
  requiredValue: number;
  /** For switches mode: number of switches and target boolean mask */
  switchCount?: number;
  targetMask?: boolean[];
  /** Hint clue on the meter */
  meterLabel?: LocalizedText;
}

export interface VisualCountMechanic {
  type: 'visual_count';
  visualKind:
    | 'nested_triangles'
    | 'nested_squares'
    | 'tshirt_holes'
    | 'mirror_clock'
    | 'cube_stack'
    | 'overlapping_circles'
    | 'hidden_animals'
    | 'parking_number'
    | 'match_digits'
    | 'stairs_steps'
    | 'hex_honeycomb'
    | 'chessboard_squares'
    | 'intersecting_lines';
  /** Seed or parameter controlling the exact diagram rendered */
  variant: number;
  correctAnswer: number;
  min?: number;
  max?: number;
  unitLabel?: LocalizedText;
}

export interface LockDialMechanic {
  type: 'lock_dial';
  /** Visual clue items or equation shown on the lock card */
  clueDisplay: string;
  clueSubtext?: LocalizedText;
  correctCode: string;
  maxLength?: number;
}

export interface LateralChoiceMechanic {
  type: 'lateral_choice';
  illustration?: PropShape;
  secondaryShape?: PropShape;
  options: [LocalizedText, LocalizedText, LocalizedText, LocalizedText];
  correctIndex: 0 | 1 | 2 | 3;
}

export interface MatrixToggleMechanic {
  type: 'matrix_toggle';
  mode: 'lights_out' | 'pattern_match' | 'magic_sum';
  gridSize: 3;
  initialGrid: boolean[];
  tileLabels?: string[];
  targetGrid?: boolean[];
  /** For magic_sum mode: exact number of selected tiles and target sum/product check */
  requiredCount?: number;
  targetSum?: number;
  targetProduct?: number;
  allOnRequired?: boolean;
}

export interface OrderSortItem {
  id: string;
  label: LocalizedText;
  shape?: PropShape;
  subLabel?: string;
}

export interface OrderSortMechanic {
  type: 'order_sort';
  items: OrderSortItem[];
  /** Correct item IDs ordered left-to-right / top-to-bottom */
  correctOrder: string[];
}

export type PuzzleMechanic =
  | SceneTapMechanic
  | DragCombineMechanic
  | ActionMeterMechanic
  | VisualCountMechanic
  | LockDialMechanic
  | LateralChoiceMechanic
  | MatrixToggleMechanic
  | OrderSortMechanic;

export interface Puzzle {
  id: number;
  difficulty: Difficulty;
  category: 'trick' | 'drag' | 'logic' | 'visual' | 'action' | 'riddle' | 'lock';
  title: LocalizedText;
  prompt: LocalizedText;
  mechanic: PuzzleMechanic;
  /** 3 progressive smart hints (Tier 1 nudge -> Tier 2 focus -> Tier 3 walkthrough) */
  hints: [LocalizedText, LocalizedText, LocalizedText];
  explanation: LocalizedText;
}

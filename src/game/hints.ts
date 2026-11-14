import { Difficulty, Language, Puzzle } from '../data/puzzles/types';

export interface SmartHintPlan {
  tierCost: [number, number, number];
  autoSuggestTier: boolean;
  strategyTip: string;
  mechanicBadge: string;
}

const STRATEGY_TIPS: Record<Puzzle['category'], Record<Language, string>> = {
  trick: {
    vi: 'Kiểm tra kỹ cả chữ trong câu hỏi và vật thể có thể kéo ẩn bên dưới.',
    en: 'Inspect clickable prompt words and objects hiding behind draggable covers.',
    es: 'Revisa palabras clicables en el enunciado y objetos ocultos bajo cubiertas.',
    ja: '問題文の文字そのものや、動かせる物の裏に隠れた仕掛けを探そう。',
  },
  drag: {
    vi: 'Kéo các vật thể trên sân chơi tương tác với nhau hoặc đặt lên cân.',
    en: 'Drag items across the stage onto targets or combine pairs together.',
    es: 'Arrastra objetos sobre objetivos o combínalos entre sí.',
    ja: 'ステージ上のアイテムをドラッグして組み合わせたり運んだりしよう。',
  },
  logic: {
    vi: 'Tìm quy luật toán học hoặc đảo ngược góc nhìn trước khi nhập mã.',
    en: 'Spot the hidden sequence rule or flip your perspective before entering code.',
    es: 'Busca la regla oculta o cambia de perspectiva antes de ingresar el código.',
    ja: '数列の規則性や逆転の発想を見つけてコードを入力しよう。',
  },
  visual: {
    vi: 'Quan sát các lớp bị che khuất, mặt đối xứng hoặc hình lớn bao ngoài.',
    en: 'Account for hidden layers, mirror symmetry, and outer composite shapes.',
    es: 'Cuenta capas ocultas, simetrías en espejo y figuras compuestas.',
    ja: '重なりや裏側、鏡の左右反転、全体の大きな図形も見落とさないで。',
  },
  action: {
    vi: 'Thử nhấn giữ liên tục, chạm nhiều lần hoặc phối hợp đúng công tắc.',
    en: 'Try steady press-and-hold, rapid multi-taps, or exact switch combinations.',
    es: 'Prueba mantener pulsado, toques rápidos o combinaciones exactas.',
    ja: '長押し・連続タップ・スイッチの正しい組み合わせを試してみよう。',
  },
  riddle: {
    vi: 'Đọc thật kỹ từng chữ để tránh bẫy ngôn từ quen thuộc.',
    en: 'Read every single word literally — classic wording traps hide in plain sight.',
    es: 'Lee cada palabra literalmente para evitar trampas de redacción.',
    ja: '問題文の一言一句を素直に読み返して言葉のワナを見破ろう。',
  },
  lock: {
    vi: 'Giải từng manh mối hàng ngang hoặc tìm phép biến đổi chữ số ẩn sau mật mã.',
    en: 'Decode each row clue systematically or look for a lateral digit transformation.',
    es: 'Descifra cada pista por filas o busca una transformación lateral de dígitos.',
    ja: '各行のヒントを順に照らし合わせるか、数字の並びの裏にある法則を見抜こう。',
  },
};

const DIFFICULTY_ADVICE: Record<Difficulty, Record<Language, string>> = {
  easy: {
    vi: 'Mức Dễ · Gợi ý 1 miễn phí giúp bạn khởi động nhanh.',
    en: 'Easy Tier · Tier 1 nudge is free to keep flow smooth.',
    es: 'Nivel Fácil · La primera pista es gratuita.',
    ja: '初級 · ヒント1は無料で確認できます。',
  },
  medium: {
    vi: 'Mức Trung bình · Gợi ý thích ứng thu hẹp vùng tương tác.',
    en: 'Medium Tier · Adaptive clue narrows the exact interaction zone.',
    es: 'Nivel Medio · La pista enfoca la zona exacta.',
    ja: '中級 · 注目すべきギミックを絞り込みます。',
  },
  hard: {
    vi: 'Mức Khó · Hỗ trợ giảm phí tự động nếu bạn thử sai nhiều lần.',
    en: 'Hard Tier · Auto-discounts clue cost after repeated attempts.',
    es: 'Nivel Difícil · Descuento automático tras varios intentos.',
    ja: '上級 · ミスが続くとヒントが自動で割引されます。',
  },
  genius: {
    vi: 'Mức Thiên tài · Phân tích đa bước chi tiết theo từng tầng.',
    en: 'Genius Tier · Multi-step strategic breakdown across 3 clue layers.',
    es: 'Nivel Genio · Desglose estratégico en 3 niveles.',
    ja: '天才 · 3段階の論理ステップで解き方を導きます。',
  },
};

/**
 * Computes an adaptive smart hint plan tailored to puzzle difficulty, wrong tries, and elapsed seconds.
 */
export function buildSmartHintPlan(params: {
  puzzle: Puzzle;
  lang: Language;
  wrongAttempts: number;
  elapsedSeconds: number;
}): SmartHintPlan {
  const { puzzle, lang, wrongAttempts, elapsedSeconds } = params;

  let baseCost: [number, number, number] = [0, 1, 2];
  if (puzzle.difficulty === 'medium') {
    baseCost = [1, 1, 2];
  } else if (puzzle.difficulty === 'hard') {
    baseCost = [1, 2, 2];
  } else if (puzzle.difficulty === 'genius') {
    baseCost = [1, 2, 3];
  }

  // Adaptive discount when player struggles on Hard/Genius or spends >35s
  if (wrongAttempts >= 3 || elapsedSeconds >= 45) {
    baseCost = [0, Math.max(1, baseCost[1] - 1), Math.max(1, baseCost[2] - 1)];
  }

  const autoThreshold =
    puzzle.difficulty === 'easy'
      ? 3
      : puzzle.difficulty === 'medium'
        ? 2
        : 2;

  const autoSuggestTier = wrongAttempts >= autoThreshold || elapsedSeconds >= 35;

  return {
    tierCost: baseCost,
    autoSuggestTier,
    strategyTip: STRATEGY_TIPS[puzzle.category][lang],
    mechanicBadge: DIFFICULTY_ADVICE[puzzle.difficulty][lang],
  };
}

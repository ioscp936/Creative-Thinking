import { Difficulty, Language, Puzzle } from '../data/puzzles/types';

export const LANGUAGES: { code: Language; label: string; short: string; country: string }[] = [
  { code: 'vi', label: 'Tiếng Việt', short: 'VI', country: 'VN' },
  { code: 'en', label: 'English', short: 'EN', country: 'US' },
  { code: 'es', label: 'Español', short: 'ES', country: 'ES' },
  { code: 'ja', label: '日本語', short: 'JA', country: 'JP' },
];

export interface UIStrings {
  appName: string;
  heroEyebrow: string;
  tagline: string;
  startPlay: string;
  continuePlay: string;
  levelsLabel: string;
  leaderboardLabel: string;
  playOriginalsBtn: string;
  playOriginalsSub: string;
  tricksFilter: string;
  riddlesFilter: string;
  chapterAll: string;
  categoryLabels: Record<Puzzle['category'], string>;
  smartHint: string;
  hintTier: string;
  smartAnalysis: string;
  freeHint: string;
  unlockNextHint: string;
  revealSolution: string;
  noBulbs: string;
  claimDailyBulbs: string;
  score: string;
  stars: string;
  streak: string;
  bulbs: string;
  level: string;
  difficulty: Record<Difficulty, string>;
  allDifficulties: string;
  solvedTitle: string;
  nextLevel: string;
  replayLevel: string;
  wrongTry: string;
  autoTipOffer: string;
  resetScene: string;
  submitAnswer: string;
  enterCode: string;
  clearCode: string;
  tapCount: string;
  holdButton: string;
  holding: string;
  waitingPatience: string;
  musicOn: string;
  musicOff: string;
  sfxOn: string;
  sfxOff: string;
  themeToggle: string;
  offlineReady: string;
  onlineSynced: string;
  offlineBanner: string;
  installApp: string;
  installIos: string;
  iosStep1: string;
  iosStep2: string;
  close: string;
  signInGoogle: string;
  signOut: string;
  guestPlayer: string;
  editNickname: string;
  saveNickname: string;
  realtimeLive: string;
  yourRank: string;
  rankCol: string;
  playerCol: string;
  clearedCol: string;
  scoreCol: string;
  practiceMode: string;
  practiceModeDesc: string;
  lockedLevel: string;
  searchLevel: string;
  backToTitle: string;
  controlsHint: string;
  dragHintTag: string;
  balanceLabel: string;
  leftPan: string;
  rightPan: string;
  checkBalance: string;
  matrixTapTip: string;
  matrixSelected: string;
  orderSortTip: string;
  swapTip: string;
}

export const TRANSLATIONS: Record<Language, UIStrings> = {
  vi: {
    appName: 'Creative Thinking',
    heroEyebrow: '500 Câu Hỏi · Đố Mẹo & Đố Vui · 4 Ngôn Ngữ',
    tagline: '500 câu đố tư duy sáng tạo, câu hỏi mẹo bất ngờ và đố vui mới lạ — sắp xếp xen kẽ từ Dễ đến Thiên tài kèm gợi ý thông minh & xếp hạng toàn cầu.',
    startPlay: 'Bắt đầu chơi',
    continuePlay: 'Tiếp tục màn',
    levelsLabel: 'Bản đồ 500 màn',
    leaderboardLabel: 'Xếp hạng toàn cầu',
    playOriginalsBtn: 'Thử ngay Câu Hỏi Mẹo & Đố Vui',
    playOriginalsSub: '200 câu mới xen kẽ khắp 500 màn',
    tricksFilter: 'Câu hỏi mẹo',
    riddlesFilter: 'Đố vui',
    chapterAll: 'Tất cả 500',
    categoryLabels: {
      trick: 'Câu hỏi mẹo',
      riddle: 'Đố vui',
      drag: 'Tương tác',
      visual: 'Thị giác',
      action: 'Phản xạ',
      logic: 'Logic',
      lock: 'Giải mã',
    },
    smartHint: 'Gợi ý thông minh',
    hintTier: 'Cấp gợi ý',
    smartAnalysis: 'Phân tích thông minh',
    freeHint: 'Miễn phí',
    unlockNextHint: 'Mở gợi ý tiếp theo',
    revealSolution: 'Xem lời giải chi tiết',
    noBulbs: 'Hết bóng đèn? Nhận +3 bóng miễn phí!',
    claimDailyBulbs: 'Nhận +3 bóng đèn',
    score: 'Điểm',
    stars: 'Sao',
    streak: 'Chuỗi',
    bulbs: 'Gợi ý',
    level: 'Màn',
    difficulty: {
      easy: 'Dễ',
      medium: 'Trung bình',
      hard: 'Khó',
      genius: 'Thiên tài',
    },
    allDifficulties: 'Tất cả',
    solvedTitle: 'Tuyệt vời! Đã giải mã',
    nextLevel: 'Màn tiếp theo',
    replayLevel: 'Chơi lại',
    wrongTry: 'Chưa đúng rồi, thử nghĩ khác đi nhé!',
    autoTipOffer: 'Có vẻ câu này hơi hóc búa — mở gợi ý thông minh ngay?',
    resetScene: 'Đặt lại',
    submitAnswer: 'Kiểm tra',
    enterCode: 'Nhập đáp án',
    clearCode: 'Xóa',
    tapCount: 'Số lần chạm',
    holdButton: 'Nhấn & giữ',
    holding: 'Đang nạp...',
    waitingPatience: 'Giữ nguyên, đừng chạm gì...',
    musicOn: 'Nhạc nền: Bật',
    musicOff: 'Nhạc nền: Tắt',
    sfxOn: 'Hiệu ứng: Bật',
    sfxOff: 'Hiệu ứng: Tắt',
    themeToggle: 'Đổi giao diện Sáng / Tối',
    offlineReady: 'Offline sẵn sàng',
    onlineSynced: 'Trực tuyến · Đồng bộ tức thì',
    offlineBanner: 'Đang chơi Offline — Tiến trình được lưu cục bộ & tự đồng bộ khi có mạng.',
    installApp: 'Cài ứng dụng',
    installIos: 'Cài trên iOS',
    iosStep1: '1. Nhấn nút Chia sẻ (Share) ở thanh công cụ Safari.',
    iosStep2: '2. Cuộn xuống và chọn Thêm vào Màn hình chính.',
    close: 'Đóng',
    signInGoogle: 'Đăng nhập Google để lên BXH',
    signOut: 'Đăng xuất',
    guestPlayer: 'Người chơi Offline',
    editNickname: 'Đổi tên hiển thị',
    saveNickname: 'Lưu',
    realtimeLive: 'Thời gian thực',
    yourRank: 'Hạng của bạn',
    rankCol: 'Hạng',
    playerCol: 'Người chơi',
    clearedCol: 'Đã qua',
    scoreCol: 'Điểm',
    practiceMode: 'Mở khóa tự do (Luyện tập)',
    practiceModeDesc: 'Chơi bất kỳ màn nào trong 500 câu hỏi ngay lập tức',
    lockedLevel: 'Hoàn thành màn trước hoặc bật Chế độ luyện tập',
    searchLevel: 'Tìm số màn (1–500)...',
    backToTitle: 'Trang chính',
    controlsHint: 'Chạm · Kéo thả · Ma trận · Sắp xếp · Enter để bắt đầu',
    dragHintTag: 'Mẹo: Bạn có thể kéo các vật thể trên sân chơi!',
    balanceLabel: 'Cân bằng hai đĩa',
    leftPan: 'Đĩa trái',
    rightPan: 'Đĩa phải',
    checkBalance: 'Kiểm tra cân',
    matrixTapTip: 'Chạm ô để bật/tắt trạng thái trên ma trận 3×3',
    matrixSelected: 'Đã chọn',
    orderSortTip: 'Chạm 2 thẻ để đổi vị trí cho nhau hoặc dùng mũi tên ← →',
    swapTip: 'Đang chọn thẻ để hoán đổi — chạm thẻ khác!',
  },
  en: {
    appName: 'Creative Thinking',
    heroEyebrow: '500 Puzzles · Tricks & Riddles · 4 Languages',
    tagline: '500 lateral-thinking puzzles, clever trick questions, and fresh riddles — seamlessly curated from Easy to Genius with smart hints & live global rankings.',
    startPlay: 'Start Playing',
    continuePlay: 'Continue Level',
    levelsLabel: '500 Levels',
    leaderboardLabel: 'Global Ranking',
    playOriginalsBtn: 'Jump to Tricks & Riddles',
    playOriginalsSub: '200 fresh teasers woven across 500 levels',
    tricksFilter: 'Trick Questions',
    riddlesFilter: 'Fun Riddles',
    chapterAll: 'All 500',
    categoryLabels: {
      trick: 'Trick',
      riddle: 'Riddle',
      drag: 'Interactive',
      visual: 'Visual',
      action: 'Reflex',
      logic: 'Logic',
      lock: 'Cipher',
    },
    smartHint: 'Smart Hint',
    hintTier: 'Hint Tier',
    smartAnalysis: 'Adaptive Analysis',
    freeHint: 'Free',
    unlockNextHint: 'Unlock Next Clue',
    revealSolution: 'Reveal Full Walkthrough',
    noBulbs: 'Out of bulbs? Claim +3 free bulbs!',
    claimDailyBulbs: 'Claim +3 Bulbs',
    score: 'Score',
    stars: 'Stars',
    streak: 'Streak',
    bulbs: 'Bulbs',
    level: 'Level',
    difficulty: {
      easy: 'Easy',
      medium: 'Medium',
      hard: 'Hard',
      genius: 'Genius',
    },
    allDifficulties: 'All',
    solvedTitle: 'Brilliant! Solved',
    nextLevel: 'Next Level',
    replayLevel: 'Replay',
    wrongTry: 'Not quite — think outside the box!',
    autoTipOffer: 'Tricky puzzle — want an adaptive Smart Hint?',
    resetScene: 'Reset',
    submitAnswer: 'Check',
    enterCode: 'Enter Answer',
    clearCode: 'Clear',
    tapCount: 'Taps',
    holdButton: 'Press & Hold',
    holding: 'Charging...',
    waitingPatience: 'Stay calm, do not touch anything...',
    musicOn: 'Music: On',
    musicOff: 'Music: Off',
    sfxOn: 'SFX: On',
    sfxOff: 'SFX: Off',
    themeToggle: 'Toggle Light / Dark Theme',
    offlineReady: 'Offline Ready',
    onlineSynced: 'Online · Live Sync',
    offlineBanner: 'Offline Mode — Progress saved locally and syncs automatically online.',
    installApp: 'Install App',
    installIos: 'Install on iOS',
    iosStep1: '1. Tap the Share button in the Safari toolbar.',
    iosStep2: '2. Scroll down and tap Add to Home Screen.',
    close: 'Close',
    signInGoogle: 'Sign in with Google to Sync Rank',
    signOut: 'Sign Out',
    guestPlayer: 'Offline Challenger',
    editNickname: 'Edit nickname',
    saveNickname: 'Save',
    realtimeLive: 'Real-Time Live',
    yourRank: 'Your Rank',
    rankCol: 'Rank',
    playerCol: 'Player',
    clearedCol: 'Cleared',
    scoreCol: 'Score',
    practiceMode: 'Free Practice Unlock',
    practiceModeDesc: 'Jump straight into any of the 500 levels anytime',
    lockedLevel: 'Clear previous level or enable Free Practice',
    searchLevel: 'Jump to level (1–500)...',
    backToTitle: 'Title',
    controlsHint: 'Tap · Drag · Matrix · Sort · Press Enter to Start',
    dragHintTag: 'Tip: Objects on the stage can be dragged!',
    balanceLabel: 'Balance both pans',
    leftPan: 'Left Pan',
    rightPan: 'Right Pan',
    checkBalance: 'Check Scale',
    matrixTapTip: 'Tap tiles to toggle the 3×3 interactive matrix',
    matrixSelected: 'Selected',
    orderSortTip: 'Tap any two cards to swap positions or use ← → arrows',
    swapTip: 'Card selected — tap another card to swap!',
  },
  es: {
    appName: 'Creative Thinking',
    heroEyebrow: '500 Acertijos · Trucos y Adivinanzas · 4 Idiomas',
    tagline: '500 acertijos de pensamiento lateral, preguntas trampa ingeniosas y adivinanzas — ordenados de Fácil a Genio con pistas inteligentes y ranking global.',
    startPlay: 'Empezar a jugar',
    continuePlay: 'Continuar nivel',
    levelsLabel: '500 Niveles',
    leaderboardLabel: 'Ranking Global',
    playOriginalsBtn: 'Ir a Trucos y Adivinanzas',
    playOriginalsSub: '200 retos nuevos mezclados en 500 niveles',
    tricksFilter: 'Preguntas Trampa',
    riddlesFilter: 'Adivinanzas',
    chapterAll: 'Todos 500',
    categoryLabels: {
      trick: 'Trampa',
      riddle: 'Adivinanza',
      drag: 'Interactivo',
      visual: 'Visual',
      action: 'Reflejos',
      logic: 'Lógica',
      lock: 'Código',
    },
    smartHint: 'Pista Inteligente',
    hintTier: 'Nivel de pista',
    smartAnalysis: 'Análisis Adaptativo',
    freeHint: 'Gratis',
    unlockNextHint: 'Siguiente pista',
    revealSolution: 'Ver solución paso a paso',
    noBulbs: '¿Sin bombillas? ¡Reclama +3 gratis!',
    claimDailyBulbs: 'Obtener +3',
    score: 'Puntos',
    stars: 'Estrellas',
    streak: 'Racha',
    bulbs: 'Pistas',
    level: 'Nivel',
    difficulty: {
      easy: 'Fácil',
      medium: 'Medio',
      hard: 'Difícil',
      genius: 'Genio',
    },
    allDifficulties: 'Todos',
    solvedTitle: '¡Genial! Resuelto',
    nextLevel: 'Siguiente nivel',
    replayLevel: 'Repetir',
    wrongTry: '¡Casi! Intenta pensar diferente.',
    autoTipOffer: '¿Nivel complicado? Prueba una Pista Inteligente.',
    resetScene: 'Reiniciar',
    submitAnswer: 'Comprobar',
    enterCode: 'Ingresa respuesta',
    clearCode: 'Borrar',
    tapCount: 'Toques',
    holdButton: 'Mantén pulsado',
    holding: 'Cargando...',
    waitingPatience: 'Espera sin tocar nada...',
    musicOn: 'Música: Sí',
    musicOff: 'Música: No',
    sfxOn: 'Sonidos: Sí',
    sfxOff: 'Sonidos: No',
    themeToggle: 'Cambiar tema Claro / Oscuro',
    offlineReady: 'Offline listo',
    onlineSynced: 'En línea · Sincronizado',
    offlineBanner: 'Modo Offline — Progreso guardado localmente.',
    installApp: 'Instalar App',
    installIos: 'Instalar en iOS',
    iosStep1: '1. Toca Compartir en la barra de Safari.',
    iosStep2: '2. Desplázate y elige Añadir a pantalla de inicio.',
    close: 'Cerrar',
    signInGoogle: 'Conectar con Google',
    signOut: 'Salir',
    guestPlayer: 'Jugador Offline',
    editNickname: 'Cambiar apodo',
    saveNickname: 'Guardar',
    realtimeLive: 'En Tiempo Real',
    yourRank: 'Tu Rango',
    rankCol: 'Rango',
    playerCol: 'Jugador',
    clearedCol: 'Niveles',
    scoreCol: 'Puntos',
    practiceMode: 'Desbloqueo Libre (Práctica)',
    practiceModeDesc: 'Juega cualquier nivel de los 500 al instante',
    lockedLevel: 'Supera el nivel anterior o activa Práctica Libre',
    searchLevel: 'Ir al nivel (1–500)...',
    backToTitle: 'Inicio',
    controlsHint: 'Toca · Arrastra · Matriz · Ordena · Enter para jugar',
    dragHintTag: 'Consejo: ¡Puedes mover los objetos de la escena!',
    balanceLabel: 'Equilibra la balanza',
    leftPan: 'Platillo Izq.',
    rightPan: 'Platillo Der.',
    checkBalance: 'Verificar',
    matrixTapTip: 'Toca las casillas de la matriz 3×3',
    matrixSelected: 'Elegidas',
    orderSortTip: 'Toca dos tarjetas para intercambiarlas o usa ← →',
    swapTip: 'Tarjeta seleccionada — ¡toca otra para cambiar!',
  },
  ja: {
    appName: 'Creative Thinking',
    heroEyebrow: '全500問 · ひっかけ＆なぞなぞ · 4言語対応',
    tagline: '新作のひっかけ問題となぞなぞ200問を含む全500ステージ。初級から天才までバランスよく再編成し、スマートヒント＆世界ランキングに対応。',
    startPlay: 'プレイ開始',
    continuePlay: '続きから',
    levelsLabel: '全500ステージ',
    leaderboardLabel: '世界ランキング',
    playOriginalsBtn: 'ひっかけ＆なぞなぞに挑戦',
    playOriginalsSub: '全500問の中に新作200問を収録',
    tricksFilter: 'ひっかけ',
    riddlesFilter: 'なぞなぞ',
    chapterAll: '全500問',
    categoryLabels: {
      trick: 'ひっかけ',
      riddle: 'なぞなぞ',
      drag: 'ドラッグ',
      visual: '観察',
      action: 'アクション',
      logic: 'ロジック',
      lock: '暗号',
    },
    smartHint: 'スマートヒント',
    hintTier: 'ヒント段階',
    smartAnalysis: '難易度分析',
    freeHint: '無料',
    unlockNextHint: '次のヒントを見る',
    revealSolution: '詳しい解説を見る',
    noBulbs: '電球が足りない？無料で+3個獲得！',
    claimDailyBulbs: '+3個を受け取る',
    score: 'スコア',
    stars: 'スター',
    streak: '連続',
    bulbs: '電球',
    level: 'Lv.',
    difficulty: {
      easy: '初級',
      medium: '中級',
      hard: '上級',
      genius: '天才',
    },
    allDifficulties: 'すべて',
    solvedTitle: 'お見事！クリア',
    nextLevel: '次の問題へ',
    replayLevel: 'もう一度',
    wrongTry: '惜しい！視点を変えて考えてみよう。',
    autoTipOffer: '難問ですね。スマートヒントを使いますか？',
    resetScene: 'リセット',
    submitAnswer: '確認',
    enterCode: '答えを入力',
    clearCode: '消去',
    tapCount: 'タップ数',
    holdButton: '長押しする',
    holding: 'チャージ中...',
    waitingPatience: '触らずにそのまま待とう...',
    musicOn: 'BGM: ON',
    musicOff: 'BGM: OFF',
    sfxOn: '効果音: ON',
    sfxOff: '効果音: OFF',
    themeToggle: 'ライト / ダーク切替',
    offlineReady: 'オフライン対応',
    onlineSynced: 'オンライン・同期中',
    offlineBanner: 'オフラインモード — 進行状況は端末に保存されます。',
    installApp: 'アプリを追加',
    installIos: 'iOSに追加',
    iosStep1: '1. Safariの「共有」ボタンをタップ。',
    iosStep2: '2. 「ホーム画面に追加」を選択。',
    close: '閉じる',
    signInGoogle: 'Googleでログインして順位登録',
    signOut: 'ログアウト',
    guestPlayer: 'オフライン挑戦者',
    editNickname: '名前を変更',
    saveNickname: '保存',
    realtimeLive: 'リアルタイム',
    yourRank: 'あなたの順位',
    rankCol: '順位',
    playerCol: 'プレイヤー',
    clearedCol: 'クリア',
    scoreCol: 'スコア',
    practiceMode: 'フリー練習モード',
    practiceModeDesc: '全500ステージをすぐに自由に遊べます',
    lockedLevel: '前のレベルをクリアするか練習モードを有効にしてください',
    searchLevel: 'ステージ番号 (1–500)...',
    backToTitle: 'タイトル',
    controlsHint: 'タップ · ドラッグ · マトリクス · 並び替え · Enterで開始',
    dragHintTag: 'ヒント：画面上のアイテムはドラッグして動かせます！',
    balanceLabel: '天秤を釣り合わせよう',
    leftPan: '左の皿',
    rightPan: '右の皿',
    checkBalance: '判定する',
    matrixTapTip: '3×3マトリクスのパネルをタップしよう',
    matrixSelected: '選択中',
    orderSortTip: '2枚のカードをタップして入れ替えるか ← → で移動',
    swapTip: '入れ替えるもう1枚のカードをタップ！',
  },
};

import { Puzzle, PuzzleMechanic } from './types';

type Quad = [string, string, string, string];
const loc = (q: Quad) => ({ vi: q[0], en: q[1], es: q[2], ja: q[3] });

interface HardSpec {
  id: number;
  cat: Puzzle['category'];
  t: Quad;
  p: Quad;
  m: PuzzleMechanic;
  h1: Quad;
  h2: Quad;
  h3: Quad;
  e: Quad;
}

const CORE_HARD: HardSpec[] = [
  {
    id: 136, cat: 'lock',
    t: ['Mã khóa trái cây khó', 'Fruit Algebra', 'Álgebra de frutas', 'フルーツ方程式'],
    p: ['🍎 + 🍎 + 🍎 = 30,  🍎 + 🍌 + 🍌 = 18,  🍌 - 🍐 = 2.  Hỏi 🍐 + 🍎 × 🍌 = ?', '🍎+🍎+🍎=30, 🍎+🍌+🍌=18, 🍌-🍐=2. What is 🍐 + 🍎 × 🍌?', '🍎+🍎+🍎=30, 🍎+🍌+🍌=18, 🍌-🍐=2. ¿Cuánto es 🍐 + 🍎 × 🍌?', '🍎+🍎+🍎=30、🍎+🍌+🍌=18、🍌-🍐=2。では 🍐 + 🍎 × 🍌 = ?'],
    m: { type: 'lock_dial', clueDisplay: '🍎=10 · 🍌=4 · 🍐=2 → 🍐+🍎×🍌', correctCode: '42', maxLength: 3 },
    h1: ['Nhớ quy tắc nhân chia trước, cộng trừ sau!', 'Remember order of operations: multiply BEFORE adding!', '¡Multiplica ANTES de sumar!', '足し算より掛け算が先だよ！'],
    h2: ['🍎=10, 🍌=4, 🍐=2. Vậy 2 + (10 × 4) = ?', '2 + (10 × 4) = ?', '2 + (10 × 4) = ?', '2 ＋ (10 × 4) ＝ ?'],
    h3: ['2 + 40 = 42.', '2 + 40 = 42.', '2 + 40 = 42.', '答えは「42」！'],
    e: ['Phải tính 10 × 4 = 40 trước rồi mới cộng 2 = 42!', 'Multiply 10×4=40 first, then add 2 to get 42!', '¡Primero 10×4=40, luego +2 = 42!', '掛け算優先なので 2＋40＝42 になります！'],
  },
  {
    id: 137, cat: 'visual',
    t: ['Đếm hình tròn giao nhau', 'Overlapping Rings', 'Círculos superpuestos', '重なる円のパズル'],
    p: ['Trong biểu đồ giao nhau 3 vòng lớn có bao nhiêu vùng khép kín riêng biệt (không tính nền ngoài)?', 'How many distinct enclosed regions are formed by these 3 overlapping rings?', '¿Cuántas regiones cerradas distintas forman estos 3 círculos?', '3つの円が重なってできる閉じた領域は全部でいくつ？'],
    m: { type: 'visual_count', visualKind: 'overlapping_circles', variant: 1, correctAnswer: 7, min: 1, max: 20 },
    h1: ['Đây là biểu đồ Venn 3 tập hợp giao nhau đôi một.', 'This is a classic 3-circle Venn diagram.', 'Es un diagrama de Venn de 3 círculos.', '3つのベン図の領域を数えてみよう。'],
    h2: ['3 phần riêng + 3 phần giao đôi + 1 phần tâm chung cả 3.', '3 outer petals + 3 pairwise overlaps + 1 center.', '3 exteriores + 3 dobles + 1 central.', '外側の3つ＋2つ重なりが3つ＋真ん中1つ！'],
    h3: ['3 + 3 + 1 = 7 vùng.', '3 + 3 + 1 = 7 regions.', '3 + 3 + 1 = 7 regiones.', '3＋3＋1＝7個です！'],
    e: ['Biểu đồ Venn 3 vòng tạo đúng 7 vùng khép kín!', 'Three intersecting circles always partition into 7 inner regions!', '¡Tres círculos forman 7 regiones internas!', '3つの円が交差すると内部は7つの領域に分かれます！'],
  },
  {
    id: 138, cat: 'trick',
    t: ['Ngược dòng thời gian', 'Reverse Order Trap', 'Orden inverso', '逆順トラップ'],
    p: ['Chạm vào các biểu tượng từ LỚN đến BÉ... khoan, hãy chạm theo thứ tự: TRĂNG → SAO → MẶT TRỜI!', 'Ignore size! Tap in order: MOON → STAR → SUN!', '¡Ignora el tamaño! Toca en orden: LUNA → ESTRELLA → SOL.', '大きさに惑わされないで！月 → 星 → 太陽 の順にタップしよう！'],
    m: {
      type: 'scene_tap', backdrop: 'night',
      objects: [
        { id: 'sun', shape: 'sun', x: 78, y: 50, scale: 1.3, isTarget: true, targetOrder: 3 },
        { id: 'moon', shape: 'moon', x: 22, y: 52, scale: 0.9, isTarget: true, targetOrder: 1 },
        { id: 'star', shape: 'star', x: 50, y: 52, scale: 1.1, isTarget: true, targetOrder: 2 },
        { id: 'cloud', shape: 'cloud', x: 50, y: 52, scale: 1.4, draggable: true },
      ],
    },
    h1: ['Ngôi sao đang bị che khuất ở giữa.', 'The star in the middle is hidden behind a cloud.', 'La estrella central está oculta por una nube.', '真ん中の星が雲に隠れているよ。'],
    h2: ['Kéo đám mây ở giữa ra trước, rồi chạm Trăng -> Sao -> Mặt trời.', 'Move the center cloud aside first, then tap Moon -> Star -> Sun.', 'Mueve la nube y toca Luna -> Estrella -> Sol.', '雲をどかしてから 月→星→太陽 の順に押そう！'],
    h3: ['Trái (Trăng) → Giữa (Sao) → Phải (Mặt trời).', 'Left (Moon) → Middle (Star) → Right (Sun).', 'Izquierda → Centro → Derecha.', '左(月) → 中(星) → 右(太陽)！'],
    e: ['Phải dọn đám mây trước mới chạm đủ chuỗi 3 mục tiêu!', 'Clearing the cloud revealed the hidden middle step!', '¡Mover la nube reveló el paso central!', '雲をどかすのが隠れた手順でした！'],
  },
  {
    id: 139, cat: 'drag',
    t: ['Cân đĩa 3 món', 'Triple Scale Balance', 'Balanza triple', '3つで釣り合う天秤'],
    p: ['Đặt chính xác các vật lên đĩa phải để cân nặng đúng 21 kg!', 'Balance the right pan to weigh exactly 21 kg!', '¡Equilibra el platillo derecho a exactamente 21 kg!', '右の皿の合計がぴったり21kgになるように乗せよう！'],
    m: {
      type: 'drag_combine', mode: 'balance_scale', targetBalance: 21,
      items: [
        { id: 'i1', shape: 'chest', x: 16, y: 74, weight: 9, label: '9kg' },
        { id: 'i2', shape: 'rock', x: 38, y: 74, weight: 7, label: '7kg' },
        { id: 'i3', shape: 'trophy', x: 60, y: 74, weight: 5, label: '5kg' },
        { id: 'i4', shape: 'book', x: 82, y: 74, weight: 4, label: '4kg' },
      ],
    },
    h1: ['2 món thôi chưa đủ đạt 21 kg đâu!', 'No pair of two weights reaches 21 kg — you need three!', 'Necesitas 3 objetos para llegar a 21 kg.', '2つだけでは21kgに届かない！3つ選ぼう！'],
    h2: ['9 + 7 + 5 = ?', 'Try 9 + 7 + 5!', 'Prueba 9 + 7 + 5.', '9 ＋ 7 ＋ 5 を足してみよう！'],
    h3: ['Chọn Rương (9kg), Đá (7kg), Cúp (5kg) rồi kiểm tra.', 'Select Chest (9kg), Rock (7kg), and Trophy (5kg).', 'Elige Cofre (9kg), Roca (7kg) y Trofeo (5kg).', '宝箱(9kg)＋岩(7kg)＋トロフィー(5kg)で判定！'],
    e: ['9 + 7 + 5 = 21 kg chuẩn xác!', '9 + 7 + 5 = 21 kg balanced!', '¡9 + 7 + 5 = 21 kg!', '3つ合わせて21kgです！'],
  },
  {
    id: 140, cat: 'riddle',
    t: ['Con tàu điện', 'Electric Train Smoke', 'Humo del tren', '電車の煙'],
    p: ['Một đoàn tàu ĐIỆN chạy về hướng Bắc với tốc độ 100 km/h, gió thổi về hướng Tây. Khói tàu bay về hướng nào?', 'An ELECTRIC train travels north at 100 km/h while wind blows west. Which way does the smoke blow?', 'Un tren ELÉCTRICO va al norte a 100 km/h con viento al oeste. ¿Hacia dónde va el humo?', '時速100kmで北へ走る「電車」があります。西風が吹いているとき、煙はどっちへ流れる？'],
    m: {
      type: 'lateral_choice', illustration: 'car',
      options: [
        { vi: 'Hướng Nam', en: 'South', es: 'Al sur', ja: '南へ' },
        { vi: 'Hướng Tây Nam', en: 'Southwest', es: 'Al suroeste', ja: '南西へ' },
        { vi: 'Không có khói!', en: 'There is no smoke!', es: '¡No hay humo!', ja: '煙は出ない！' },
        { vi: 'Hướng Đông', en: 'East', es: 'Al este', ja: '東へ' },
      ],
      correctIndex: 2,
    },
    h1: ['Đọc kỹ loại tàu chạy bằng gì.', 'Read carefully what powers the train.', 'Fíjate qué tipo de tren es.', '電車の動力は何かな？'],
    h2: ['Đây là tàu ĐIỆN, không phải tàu hơi nước chạy than!', 'It is an ELECTRIC train — not a steam locomotive!', '¡Es un tren ELÉCTRICO!', '蒸気機関車ではなく「電車」だよ！'],
    h3: ['Chọn "Không có khói!".', 'Choose "There is no smoke!".', 'Elige "¡No hay humo!".', '「煙は出ない！」を選ぼう！'],
    e: ['Tàu điện chạy bằng điện nên chẳng có làn khói nào cả!', 'Electric trains produce zero smoke!', '¡Los trenes eléctricos no echan humo!', '電車は電気で走るので煙は出ません！'],
  },
];

function buildHard136to205(): Puzzle[] {
  const result: Puzzle[] = CORE_HARD.map((s) => ({
    id: s.id, difficulty: 'hard', category: s.cat,
    title: loc(s.t), prompt: loc(s.p), mechanic: s.m,
    hints: [loc(s.h1), loc(s.h2), loc(s.h3)], explanation: loc(s.e),
  }));

  // 65 more distinct Hard levels (141..205)
  const hardLocks: Array<{ t: Quad; p: Quad; clue: string; code: string; h1: Quad; h2: Quad; h3: Quad; e: Quad }> = [
    {
      t: ['Đồng hồ cát 4 phút', 'Word Value Code', 'Código numérico', '文字の暗号'],
      p: ['Nếu A=1, B=2, C=3... thì từ "CAB" ghép thành số mấy?', 'If A=1, B=2, C=3, what 3-digit code does "CAB" form?', 'Si A=1, B=2, C=3, ¿qué código forma "CAB"?', 'A=1, B=2, C=3 のとき、「CAB」を数字にすると？'],
      clue: 'A=1 · B=2 · C=3 → CAB = ?', code: '312',
      h1: ['Thay từng chữ cái bằng số tương ứng.', 'Convert each letter individually.', 'Convierte cada letra.', '1文字ずつ数字に直そう。'],
      h2: ['C=3, A=1, B=2.', 'C=3, A=1, B=2.', 'C=3, A=1, B=2.', 'C=3, A=1, B=2 だよ。'],
      h3: ['Ghép lại: 312.', 'Code: 312.', 'Código: 312.', '答えは「312」！'],
      e: ['C(3)-A(1)-B(2) = 312!', 'C(3)-A(1)-B(2) = 312!', '¡312!', '3・1・2を並べて312です！'],
    },
    {
      t: ['Chữ số ẩn trên đồng hồ', 'Clock Sum Trick', 'Suma del reloj', '時計の文字盤の和'],
      p: ['Tổng tất cả các số từ 1 đến 12 trên mặt đồng hồ bằng bao nhiêu?', 'What is the sum of all numbers 1 through 12 on a clock face?', '¿Cuánto suman los números del 1 al 12 en un reloj?', '時計の文字盤の1から12までの数字を全部足すといくつ？'],
      clue: '1 + 2 + 3 + ... + 12 = ?', code: '78',
      h1: ['Ghép cặp đầu cuối: 1+12, 2+11, 3+10...', 'Pair opposite numbers: (1+12), (2+11)...', 'Empareja extremos: 1+12, 2+11...', '端同士をペアにしよう：1+12、2+11…'],
      h2: ['Có 6 cặp đều có tổng bằng 13!', 'There are 6 pairs each summing to 13!', '¡6 pares que suman 13 cada uno!', '13になるペアが6組できるよ！'],
      h3: ['6 × 13 = 78.', '6 × 13 = 78.', '6 × 13 = 78.', '6×13＝「78」！'],
      e: ['Công thức Gauss: 12 × 13 / 2 = 78!', 'Gauss trick: 6 × 13 = 78!', '¡6 × 13 = 78!', '13×6＝78になります！'],
    },
    {
      t: ['Bắt tay hội nghị', 'Handshake Math', 'Apretones de manos', '握手の回数'],
      p: ['5 người bạn gặp nhau, mỗi người bắt tay với tất cả người còn lại đúng 1 lần. Có tất cả bao nhiêu cái bắt tay?', '5 friends meet and everyone shakes hands with everyone else once. How many total handshakes?', '5 amigos se saludan dándose la mano una vez cada par. ¿Cuántos apretones hay?', '5人の友達が集まり、全員が互いに1回ずつ握手しました。握手は全部で何回？'],
      clue: '5 People · Pairwise Handshakes', code: '10',
      h1: ['Không phải 5 × 4 = 20 đâu vì mỗi cái bắt tay tính 2 người!', 'Not 5×4=20 because each handshake involves 2 people!', 'No es 20 porque cada apretón cuenta dos veces.', 'AとB、BとAは同じ1回の握手だよ！'],
      h2: ['Người 1 bắt 4 cái, người 2 bắt thêm 3, người 3 thêm 2, người 4 thêm 1.', '4 + 3 + 2 + 1 = ?', '4 + 3 + 2 + 1 = ?', '4 ＋ 3 ＋ 2 ＋ 1 ＝ ?'],
      h3: ['Đáp án là 10.', 'Answer: 10.', 'Respuesta: 10.', '答えは「10」回！'],
      e: ['5 × 4 / 2 = 10 cái bắt tay!', '5 × 4 / 2 = 10 handshakes!', '¡10 apretones de manos!', '5×4÷2＝10回です！'],
    },
    {
      t: ['Cắt khúc gỗ', 'Cutting the Log', 'Cortando el tronco', '丸太切り'],
      p: ['Cưa 1 khúc gỗ thành 2 đoạn mất 4 phút. Hỏi cưa thành 5 đoạn mất mấy phút?', 'Cutting a log into 2 pieces takes 4 minutes. How long to cut it into 5 pieces?', 'Cortar un tronco en 2 trozos toma 4 min. ¿Cuánto toma cortarlo en 5 trozos?', '丸太を2つに切るのに4分かかります。5つに切り分けるには何分かかる？'],
      clue: '2 pcs (1 cut) = 4m  |  5 pcs = ?m', code: '16',
      h1: ['Để có 2 đoạn, bạn chỉ cần cưa 1 nhát!', '2 pieces only requires 1 cut!', '¡2 trozos requieren solo 1 corte!', '2つに分けるのに切る回数は「1回」だよ！'],
      h2: ['Để có 5 đoạn cần cưa 4 nhát.', '5 pieces require 4 cuts.', '5 trozos requieren 4 cortes.', '5つに分けるには「4回」切る必要があるよ。'],
      h3: ['4 nhát × 4 phút = 16 phút.', '4 cuts × 4 minutes = 16.', '4 cortes × 4 min = 16.', '4回 × 4分 ＝ 「16」分！'],
      e: ['Số nhát cắt luôn ít hơn số đoạn 1 đơn vị: 4 × 4 = 16 phút!', 'Number of cuts is pieces minus 1: 4 × 4 = 16!', '¡4 cortes × 4 minutos = 16!', '切る回数は4回なので16分かかります！'],
    },
    {
      t: ['Chữ số đối xứng', 'Logic Sequence #4', 'Secuencia lógica', '数列の謎'],
      p: ['Tìm số tiếp theo: 4, 9, 19, 39, 79, ?', 'Find the next number: 4, 9, 19, 39, 79, ?', 'Encuentra el siguiente: 4, 9, 19, 39, 79, ?', '次の数字はなに？：4, 9, 19, 39, 79, ?'],
      clue: '4 · 9 · 19 · 39 · 79 · ?', code: '159',
      h1: ['Nhìn xem mỗi số gấp đôi số trước rồi cộng thêm gì.', 'Double the previous number and adjust.', 'Duplica el número anterior y ajusta.', '前の数を2倍してから何か足してみよう。'],
      h2: ['4×2+1=9, 9×2+1=19, 19×2+1=39, 39×2+1=79.', 'Rule: (previous × 2) + 1.', 'Regla: (anterior × 2) + 1.', '法則：(前の数 × 2) ＋ 1！'],
      h3: ['79 × 2 + 1 = 159.', '79 × 2 + 1 = 159.', '79 × 2 + 1 = 159.', '79×2＋1＝「159」！'],
      e: ['Nhân đôi rồi cộng 1: 79×2+1 = 159!', 'Double plus one yields 159!', '¡El doble más 1 da 159!', '2倍して1を足すと159になります！'],
    },
  ];

  for (let i = 0; i < 65; i++) {
    const id = 141 + i;
    const mod = i % 6;
    const wave = Math.floor(i / 6) + 1;
    if (mod === 0) {
      const hl = hardLocks[wave % hardLocks.length];
      if (wave <= 5) {
        result.push({
          id, difficulty: 'hard', category: 'lock',
          title: loc(hl.t), prompt: loc(hl.p),
          mechanic: { type: 'lock_dial', clueDisplay: hl.clue, correctCode: hl.code, maxLength: 3 },
          hints: [loc(hl.h1), loc(hl.h2), loc(hl.h3)], explanation: loc(hl.e),
        });
      } else {
        const base = wave * 3;
        const ans = base * 2 + 7;
        result.push({
          id, difficulty: 'hard', category: 'lock',
          title: { vi: `Mật mã kép #${id}`, en: `Double Code #${id}`, es: `Código doble #${id}`, ja: `倍々暗号 #${id}` },
          prompt: {
            vi: `Nếu A = ${base} và B = A × 2 + 7, hãy mở khóa bằng giá trị của B!`,
            en: `If A = ${base} and B = A × 2 + 7, unlock the dial with B!`,
            es: `Si A = ${base} y B = A × 2 + 7, ¡abre con B!`,
            ja: `A = ${base}、B = A × 2 + 7 のとき、Bの値を入力しよう！`,
          },
          mechanic: { type: 'lock_dial', clueDisplay: `A=${base} · B=2A+7`, correctCode: String(ans), maxLength: 3 },
          hints: [
            { vi: 'Nhân đôi A trước.', en: 'Double A first.', es: 'Duplica A primero.', ja: 'まずAを2倍しよう。' },
            { vi: `${base} × 2 = ${base * 2}, cộng 7.`, en: `${base} × 2 = ${base * 2}, plus 7.`, es: `${base} × 2 = ${base * 2}, más 7.`, ja: `${base}×2＝${base * 2} に7を足す。` },
            { vi: `Đáp án: ${ans}.`, en: `Answer: ${ans}.`, es: `Respuesta: ${ans}.`, ja: `答えは「${ans}」！` },
          ],
          explanation: { vi: `2×${base} + 7 = ${ans}!`, en: `2×${base} + 7 = ${ans}!`, es: `¡2×${base} + 7 = ${ans}!`, ja: `計算結果は ${ans} です！` },
        });
      }
    } else if (mod === 1) {
      // Dark room + cover + decoy multi-step tap
      result.push({
        id, difficulty: 'hard', category: 'trick',
        title: { vi: `Kho báu bóng đêm #${id}`, en: `Shadow Vault #${id}`, es: `Bóveda oscura #${id}`, ja: `闇の金庫 #${id}` },
        prompt: {
          vi: 'Chiếu đèn tìm viên kim cương rồi tránh bẫy bom để lấy nó!',
          en: 'Light the dark room, move the stone aside, and tap the diamond!',
          es: '¡Ilumina la sala, mueve la piedra y toca el diamante!',
          ja: '部屋を照らし、石をどかしてダイヤをタップしよう！',
        },
        mechanic: {
          type: 'scene_tap', backdrop: 'night', darkRoom: true,
          objects: [
            { id: 'bomb', shape: 'bomb', x: 28, y: 62, scale: 1.1, decoy: true },
            { id: 'diamond', shape: 'diamond', x: 74, y: 60, scale: 1.1, isTarget: true },
            { id: 'rock', shape: 'rock', x: 74, y: 60, scale: 1.38, draggable: true },
            { id: 'flash', shape: 'flashlight', x: 24, y: 30, scale: 1.15, draggable: true },
          ],
        },
        hints: [
          { vi: 'Có tận 2 thứ cần kéo đấy: đèn pin và tảng đá!', en: 'You need to drag BOTH the flashlight and the rock!', es: '¡Debes arrastrar TANTO la linterna como la roca!', ja: '懐中電灯と岩の両方を動かす必要があるよ！' },
          { vi: 'Kéo đèn pin sang góc phải để nhìn rõ, sau đó kéo tảng đá ra.', en: 'Shine the flashlight to the right, then slide the rock off.', es: 'Ilumina a la derecha y aparta la roca.', ja: '懐中電灯で右を照らし、岩をどかそう。' },
          { vi: 'Chạm vào viên kim cương vừa lộ diện.', en: 'Tap the revealed diamond!', es: '¡Toca el diamante descubierto!', ja: '現れたダイヤをタップしよう！' },
        ],
        explanation: { vi: 'Phối hợp 2 bước kéo đã giải mã căn phòng tối!', en: 'Combining light + moving the cover solved the vault!', es: '¡Combinar luz y mover la roca funcionó!', ja: '2段階のドラッグで隠されたダイヤを発見！' },
      });
    } else if (mod === 2) {
      // Visual counting hard variants (triangles / cubes / squares)
      const kinds = [
        { k: 'nested_squares' as const, v: 2, a: 14, tv: 'Lưới 3×3 bí mật', te: 'Hidden 3×3 Grid', pv: 'Có tổng cộng bao nhiêu hình vuông trong lưới 3×3?', pe: 'How many total squares in this 3×3 grid?' },
        { k: 'cube_stack' as const, v: 3, a: 20, tv: 'Tháp 4 tầng lập phương', te: '4-Layer Cube Pyramid', pv: 'Tháp khối 4 tầng (1+3+6+10) có tất cả bao nhiêu khối?', pe: 'How many cubes form this 4-layer pyramid (1+3+6+10)?' },
        { k: 'overlapping_circles' as const, v: 1, a: 7, tv: 'Vùng giao nhau Venn', te: 'Venn Regions', pv: '3 vòng tròn giao nhau tạo thành mấy vùng bên trong?', pe: 'How many enclosed inner regions do 3 overlapping circles make?' },
      ];
      const pick = kinds[wave % kinds.length];
      result.push({
        id, difficulty: 'hard', category: 'visual',
        title: { vi: `${pick.tv} #${id}`, en: `${pick.te}`, es: `${pick.te} #${id}`, ja: `${pick.te} #${id}` },
        prompt: { vi: pick.pv, en: pick.pe, es: pick.pe, ja: pick.pe },
        mechanic: { type: 'visual_count', visualKind: pick.k, variant: pick.v, correctAnswer: pick.a, min: 1, max: 35 },
        hints: [
          { vi: 'Đếm cẩn thận cả những phần ẩn hoặc hình lớn ghép lại.', en: 'Count every hidden support or combined shape carefully.', es: 'Cuenta con cuidado las piezas ocultas o combinadas.', ja: '隠れた部分や組み合わせも丁寧に数えよう。' },
          { vi: `Tổng hợp tất cả các lớp lại gần giá trị ${pick.a}.`, en: `Sum each layer carefully toward ${pick.a}.`, es: `Suma cada capa cuidadosamente.`, ja: '各層を順番に足していこう。' },
          { vi: `Đáp án chính xác là ${pick.a}.`, en: `Answer: ${pick.a}.`, es: `Respuesta: ${pick.a}.`, ja: `答えは「${pick.a}」！` },
        ],
        explanation: { vi: `Tổng cộng có ${pick.a}!`, en: `Total count is ${pick.a}!`, es: `¡El total es ${pick.a}!`, ja: `合計は ${pick.a} です！` },
      });
    } else if (mod === 3) {
      // 4-switch & 5-switch binary logic puzzles
      const masks: boolean[][] = [
        [true, false, true, true],
        [false, true, true, false, true],
        [true, true, false, true, false],
        [false, false, true, true, true],
      ];
      const mask = masks[wave % masks.length];
      const onIndices = mask.map((v, idx) => (v ? idx + 1 : 0)).filter(Boolean).join('+');
      result.push({
        id, difficulty: 'hard', category: 'action',
        title: { vi: `Mạch logic #${id}`, en: `Logic Circuit #${id}`, es: `Circuito lógico #${id}`, ja: `論理回路 #${id}` },
        prompt: {
          vi: `Chỉ số đèn: tổng công tắc bật phải đúng vị trí (${onIndices})!`,
          en: `Power ONLY switch positions (${onIndices}) and keep others OFF!`,
          es: `¡Enciende SOLO los interruptores (${onIndices})!`,
          ja: `スイッチ（${onIndices}）だけをONにして回路を完成させよう！`,
        },
        mechanic: {
          type: 'action_meter', mode: 'switches', targetShape: 'bulb',
          requiredValue: mask.filter(Boolean).length, switchCount: mask.length, targetMask: mask,
          meterLabel: { vi: `Mạch: ${onIndices}`, en: `Mask: ${onIndices}`, es: `Red: ${onIndices}`, ja: `回路: ${onIndices}` },
        },
        hints: [
          { vi: 'Kiểm tra số thứ tự từng công tắc từ trái sang phải.', en: 'Check switch numbers 1..N from left to right.', es: 'Revisa los números de izquierda a derecha.', ja: '左から1番、2番…の順に確認しよう。' },
          { vi: `Bật các vị trí ${onIndices}.`, en: `Turn ON positions ${onIndices}.`, es: `Activa ${onIndices}.`, ja: `${onIndices} をONにしよう。` },
          { vi: `Cấu hình: ${mask.map((x) => (x ? 'ON' : 'OFF')).join(' · ')}.`, en: `Set: ${mask.map((x) => (x ? 'ON' : 'OFF')).join(' · ')}.`, es: `Pon: ${mask.map((x) => (x ? 'ON' : 'OFF')).join(' · ')}.`, ja: `答え：${mask.map((x) => (x ? 'ON' : 'OFF')).join(' · ')}` },
        ],
        explanation: { vi: 'Mạch điện cao cấp đã thông suốt!', en: 'Multi-switch logic circuit unlocked!', es: '¡Circuito lógico desbloqueado!', ja: '論理回路が見事開通しました！' },
      });
    } else if (mod === 4) {
      // Hard balance scale with 3+ weights
      const tgt = 18 + (wave % 6) * 2;
      const wA = 7;
      const wB = 6;
      const wC = tgt - wA - wB;
      result.push({
        id, difficulty: 'hard', category: 'drag',
        title: { vi: `Cân 3 đĩa #${id}`, en: `Precision Scale #${id}`, es: `Balanza exacta #${id}`, ja: `精密天秤 #${id}` },
        prompt: {
          vi: `Phối hợp 3 vật nặng để đĩa phải đạt chuẩn ${tgt} kg!`,
          en: `Combine 3 weights on the right pan to match ${tgt} kg!`,
          es: `¡Combina 3 pesas para lograr ${tgt} kg!`,
          ja: `3つの重りを組み合わせて右の皿をぴったり ${tgt}kg にしよう！`,
        },
        mechanic: {
          type: 'drag_combine', mode: 'balance_scale', targetBalance: tgt,
          items: [
            { id: 'x1', shape: 'chest', x: 16, y: 74, weight: wA, label: `${wA}kg` },
            { id: 'x2', shape: 'trophy', x: 38, y: 74, weight: wB, label: `${wB}kg` },
            { id: 'x3', shape: 'diamond', x: 60, y: 74, weight: wC, label: `${wC}kg` },
            { id: 'x4', shape: 'rock', x: 82, y: 74, weight: wC + 2, label: `${wC + 2}kg` },
          ],
        },
        hints: [
          { vi: `Tìm 3 vật cộng lại bằng ${tgt} kg.`, en: `Pick 3 items summing to ${tgt} kg.`, es: `Elige 3 objetos que sumen ${tgt} kg.`, ja: `合計${tgt}kgになる3つを選ぼう。` },
          { vi: `${wA} + ${wB} + ${wC} = ${tgt}.`, en: `${wA} + ${wB} + ${wC} = ${tgt}.`, es: `${wA} + ${wB} + ${wC} = ${tgt}.`, ja: `${wA}＋${wB}＋${wC}＝${tgt}！` },
          { vi: `Chọn ${wA}kg, ${wB}kg và ${wC}kg rồi Kiểm tra.`, en: `Select ${wA}kg, ${wB}kg, and ${wC}kg and check.`, es: `Selecciona ${wA}kg, ${wB}kg y ${wC}kg.`, ja: `${wA}kg・${wB}kg・${wC}kg を選んで判定！` },
        ],
        explanation: { vi: `${wA} + ${wB} + ${wC} = ${tgt} kg chính xác tuyệt đối!`, en: `${wA} + ${wB} + ${wC} = ${tgt} kg balanced!`, es: `¡${tgt} kg equilibrados!`, ja: `${tgt}kgで完全に釣り合いました！` },
      });
    } else {
      // Lateral hard riddles
      const hardRiddles: Array<{ t: Quad; p: Quad; opts: [Quad, Quad, Quad, Quad]; ci: 0 | 1 | 2 | 3; h1: Quad; h2: Quad; h3: Quad; e: Quad }> = [
        {
          t: ['Bóng đèn ngoài phòng', 'Three Switches Puzzle', 'Tres interruptores', '3つのスイッチ'],
          p: ['Ngoài phòng có 3 công tắc (1,2,3), trong phòng kín có 1 bóng đèn. Bạn chỉ được vào phòng 1 lần. Làm sao biết công tắc nào bật đèn?', '3 switches outside control 1 bulb inside a closed room. You can enter once. How do you identify the right switch?', '3 interruptores fuera, 1 bombilla dentro. Solo entras una vez. ¿Cómo sabes cuál es?', '部屋の外に3つのスイッチ、中に電球が1つ。1回だけ中に入って正解を特定するには？'],
          opts: [
            ['Bật tất cả cùng lúc', 'Turn all on at once', 'Enciende todos', '全部同時につける'],
            ['Bật 1 cái 5 phút rồi tắt, bật cái thứ 2 và vào kiểm tra độ nóng bóng đèn', 'Leave #1 on 5 min then off, flip #2 on, enter & check warmth/light', 'Enciende 1 un rato, apágalo, enciende el 2 y toca la bombilla', '1番を数分点けて消し、2番を点けて入って「光」と「熱」を確かめる'],
            ['Đoán may rủi 33%', 'Guess randomly', 'Adivinar al azar', '勘で当てる'],
            ['Mở cửa sổ nhìn', 'Look through wall', 'Mirar por la pared', '壁を透視する'],
          ],
          ci: 1,
          h1: ['Ngoài ánh sáng, bóng đèn còn tỏa ra thứ gì nữa?', 'Besides light, what else does a glowing bulb produce?', 'Además de luz, ¿qué produce una bombilla?', '電球が光る以外に変化する性質は何？'],
          h2: ['Nhiệt độ (độ nóng)! Sờ tay vào bóng đèn sẽ biết!', 'HEAT! Touching the bulb tells you if it was recently on!', '¡CALOR! Tocarla revela si estuvo encendida.', '「熱さ」！触ればさっきまで点いていたか分かるよ！'],
          h3: ['Chọn phương án dùng ánh sáng + độ nóng của bóng đèn.', 'Choose the option combining light + bulb warmth.', 'Elige la opción de encender 1 y tocar el calor.', '光と熱の両方を利用する選択肢を選ぼう！'],
          e: ['Sáng = công tắc 2, tắt nhưng nóng = công tắc 1, tắt và nguội = công tắc 3!', 'Lit = #2, off & warm = #1, off & cold = #3!', '¡Luz = 2, calor = 1, fría = 3!', '点灯＝2、消灯で温かい＝1、冷たい＝3と1回で特定できます！'],
        },
        {
          t: ['Chạy thi cuối cùng', 'Last Place Overtake', 'Adelantar al último', '最下位を抜く？'],
          p: ['Trong cuộc đua, nếu bạn vượt qua người đứng CUỐI CÙNG, bạn đứng thứ mấy?', 'In a race, if you overtake the person in LAST place, what place are you in?', 'En una carrera, si adelantas al ÚLTIMO, ¿en qué puesto quedas?', 'レースで「ビリ（最下位）」の人を追い抜いたら、あなたは何位？'],
          opts: [
            ['Áp chót', 'Second to last', 'Penúltimo', '下から2番目'],
            ['Đứng cuối', 'Last place', 'Último', '最下位'],
            ['Không thể vượt qua người đứng cuối!', 'Impossible — you cannot overtake last place!', '¡Imposible adelantar al último!', 'ビリの人を追い抜くことはできない！'],
            ['Hạng nhất', 'First place', 'Primero', '1位'],
          ],
          ci: 2,
          h1: ['Nghĩ kỹ xem: ai đang đứng sau người cuối cùng?', 'Wait: who can possibly be behind the LAST person?', '¿Quién puede ir detrás del ÚLTIMO?', '最下位のさらに後ろを走っている人はいるかな？'],
          h2: ['Không có ai ở phía sau người cuối cùng để mà vượt lên cả!', 'Nobody is behind last place!', '¡Nadie va detrás del último!', '最下位の後ろには誰もいないはずだよね！'],
          h3: ['Chọn "Không thể vượt qua người đứng cuối!".', 'Select "Impossible — you cannot overtake last place!".', 'Elige "¡Imposible adelantar al último!".', '「ビリの人を追い抜くことはできない！」を選ぼう！'],
          e: ['Nếu có người đứng sau họ thì họ đâu phải người cuối cùng!', 'If you were behind them, they wouldn’t be in last place!', '¡Si estuvieras detrás, ellos no serían los últimos!', '追い抜ける位置にいるなら、その人はそもそも最下位ではありません！'],
        },
      ];
      const hr = hardRiddles[wave % hardRiddles.length];
      result.push({
        id, difficulty: 'hard', category: 'riddle',
        title: loc(hr.t), prompt: loc(hr.p),
        mechanic: {
          type: 'lateral_choice', illustration: 'bulb',
          options: [loc(hr.opts[0]), loc(hr.opts[1]), loc(hr.opts[2]), loc(hr.opts[3])],
          correctIndex: hr.ci,
        },
        hints: [loc(hr.h1), loc(hr.h2), loc(hr.h3)],
        explanation: loc(hr.e),
      });
    }
  }
  return result;
}

export const PACK_3_HARD_ALL: Puzzle[] = buildHard136to205();

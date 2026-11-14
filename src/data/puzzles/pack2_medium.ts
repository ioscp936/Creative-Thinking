import { Puzzle, PuzzleMechanic } from './types';

type Quad = [string, string, string, string];

interface RawPuzzleSpec {
  id: number;
  cat: Puzzle['category'];
  title: Quad;
  prompt: Quad;
  mech: PuzzleMechanic;
  h1: Quad;
  h2: Quad;
  h3: Quad;
  exp: Quad;
}

const loc = (q: Quad) => ({ vi: q[0], en: q[1], es: q[2], ja: q[3] });

const MEDIUM_SPECS: RawPuzzleSpec[] = [
  {
    id: 61, cat: 'trick',
    title: ['Ô vuông 3x3', '3x3 Grid Squares', 'Cuadrícula 3x3', '3×3の正方形'],
    prompt: ['Lưới 3x3 này chứa tổng cộng bao nhiêu hình vuông?', 'How many total squares are hidden in this 3x3 grid?', '¿Cuántos cuadrados en total hay en esta cuadrícula 3x3?', 'この3×3のマス目の中に正方形は全部でいくつある？'],
    mech: { type: 'visual_count', visualKind: 'nested_squares', variant: 2, correctAnswer: 14, min: 1, max: 30 },
    h1: ['Đếm cả hình vuông 1x1, 2x2 và 3x3.', 'Count 1x1, 2x2, and 3x3 squares.', 'Cuenta los de 1x1, 2x2 y 3x3.', '1×1、2×2、3×3をそれぞれ数えよう。'],
    h2: ['Có 9 ô 1x1, 4 ô 2x2 và 1 ô 3x3.', 'There are 9 (1x1) + 4 (2x2) + 1 (3x3).', 'Hay 9 (1x1) + 4 (2x2) + 1 (3x3).', '9個(1×1)＋4個(2×2)＋1個(3×3)だよ。'],
    h3: ['9 + 4 + 1 = 14.', '9 + 4 + 1 = 14.', '9 + 4 + 1 = 14.', '合計14個です！'],
    exp: ['9 + 4 + 1 = 14 hình vuông tất cả!', '9 + 4 + 1 = 14 total squares!', '¡9 + 4 + 1 = 14 cuadrados!', '1²＋2²＋3²＝14個あります！'],
  },
  {
    id: 62, cat: 'drag',
    title: ['Kết hợp băng và lửa', 'Ice Meets Fire', 'Hielo y fuego', '氷と炎の融合'],
    prompt: ['Không có giọt nước nào cả! Hãy tạo ra nước từ hai nguyên tố trên sân.', 'There is no water here! Combine two elements to create water.', '¡No hay agua! Combina dos elementos para crear agua.', '水がない！2つの要素を組み合わせて水を作ろう。'],
    mech: { type: 'drag_combine', mode: 'combine_pair', backdrop: 'room', items: [{ id: 'ice', shape: 'ice', x: 25, y: 55, scale: 1.2 }, { id: 'fire', shape: 'fire', x: 75, y: 55, scale: 1.2 }, { id: 'rock', shape: 'rock', x: 50, y: 76, scale: 0.9 }], pairIds: ['ice', 'fire'] },
    h1: ['Làm sao để băng tan chảy nhanh?', 'How do you melt solid ice?', '¿Cómo derrites el hielo?', '氷を溶かすには何が必要？'],
    h2: ['Đưa cục băng và ngọn lửa chạm vào nhau.', 'Bring the ice and fire together.', 'Junta el hielo y el fuego.', '氷と炎をくっつけてみよう。'],
    h3: ['Kéo cục băng lên ngọn lửa (hoặc ngược lại).', 'Drag the ice onto the fire (or vice versa).', 'Arrastra el hielo sobre el fuego.', '氷を炎に重ねると水が誕生！'],
    exp: ['Nhiệt làm băng tan chảy thành nước tinh khiết!', 'Heat melts ice directly into water!', '¡El calor derrite el hielo en agua!', '炎の熱で氷が溶けて水になりました！'],
  },
  {
    id: 63, cat: 'lock',
    title: ['Ốc sên leo cột', 'Climbing Snail', 'Caracol escalador', 'カタツムリの挑戦'],
    prompt: ['Ốc sên leo cột cao 10m. Ban ngày leo 3m, ban đêm tụt 2m. Mấy ngày thì chạm đỉnh?', 'A snail climbs a 10m pole: +3m each day, -2m each night. On which day does it reach the top?', 'Un caracol sube un poste de 10m: +3m de día y -2m de noche. ¿Qué día llega arriba?', '高さ10mの柱をカタツムリが登ります。昼に3m登り、夜に2m滑り落ちます。何日目に頂上に着く？'],
    mech: { type: 'lock_dial', clueDisplay: '10m ↑ | +3m ☀️ | -2m 🌙', correctCode: '8', maxLength: 2 },
    h1: ['Không phải 10 ngày đâu nhé!', 'It is NOT 10 days!', '¡No son 10 días!', '10日ではありません！'],
    h2: ['Hết ngày thứ 7 ốc sên ở độ cao 7m. Sang ngày thứ 8 leo thêm 3m là chạm 10m ngay!', 'After 7 full days/nights it is at 7m. On Day 8 morning it climbs +3m to reach 10m!', 'Tras 7 días está a 7m. En el día 8 sube 3m y llega a 10m.', '7日目の終わりに7m地点。8日目の昼に3m登れば10mに到達！'],
    h3: ['Khi đã chạm đỉnh thì không bị tụt xuống nữa! Đáp án là 8.', 'Once at the top, it does not slip down! Answer: 8.', 'Una vez arriba ya no resbala. Respuesta: 8.', '頂上に着けばもう落ちません。答えは「8」！'],
    exp: ['Ngày 8 leo từ 7m lên 10m là hoàn thành trước khi màn đêm buông xuống!', 'On Day 8 it climbs from 7m to 10m and reaches the top!', '¡El día 8 sube de 7m a 10m!', '8日目の昼にゴールするので夜の滑落はありません！'],
  },
  {
    id: 64, cat: 'action',
    title: ['Mạch điện 4 công tắc', '4-Switch Vault', 'Bóveda de 4 interruptores', '4連スイッチ金庫'],
    prompt: ['Bật đúng công tắc 1, 2 và 4 (tắt công tắc 3) để mở đèn báo hiệu!', 'Set switches to ON, ON, OFF, ON to unlock the beacon!', '¡Activa los interruptores 1, 2 y 4 (apaga el 3)!', '1・2・4をON、3をOFFにしてライトを点けよう！'],
    mech: { type: 'action_meter', mode: 'switches', targetShape: 'bulb', requiredValue: 3, switchCount: 4, targetMask: [true, true, false, true], meterLabel: { vi: 'Mã: 1-2-4', en: 'Code: 1-2-4', es: 'Código: 1-2-4', ja: 'コード: 1-2-4' } },
    h1: ['Nhìn mã hướng dẫn nhỏ ở góc thanh trạng thái.', 'Check the meter label clue.', 'Mira la etiqueta del medidor.', 'ゲージ横のコード表示を見てみよう。'],
    h2: ['Bật 1, 2, 4 và tắt 3.', 'Switch 1 ON, 2 ON, 3 OFF, 4 ON.', '1 ON, 2 ON, 3 OFF, 4 ON.', '1・2・4をON、3をOFFにしよう。'],
    h3: ['Trạng thái: [Bật, Bật, Tắt, Bật].', 'Pattern: [ON, ON, OFF, ON].', 'Patrón: [ON, ON, OFF, ON].', '[ON, ON, OFF, ON] に設定しよう！'],
    exp: ['Đèn báo hiệu bật sáng hoàn hảo!', 'Beacon unlocked!', '¡Señal activada!', '見事点灯しました！'],
  },
  {
    id: 65, cat: 'trick',
    title: ['Chạm chữ ĐEN', 'Tap the Word BLACK', 'Toca la palabra NEGRO', '「黒い」文字を探せ'],
    prompt: ['Hãy chạm vào chữ ĐEN (chữ viết), đừng bị màu sắc đánh lừa!', 'Tap the word BLACK in the prompt, ignore the shapes!', 'Toca la palabra NEGRO del texto, ¡ignora las figuras!', '図形は無視して、問題文の中の「黒い」という文字をタップしよう！'],
    mech: {
      type: 'scene_tap',
      tapPromptWord: { vi: 'ĐEN', en: 'BLACK', es: 'NEGRO', ja: '黒い' },
      objects: [
        { id: 'c1', shape: 'button_red', x: 30, y: 55, label: { vi: 'ĐEN', en: 'BLACK', es: 'NEGRO', ja: '黒' }, decoy: true },
        { id: 'c2', shape: 'button_green', x: 70, y: 55, label: { vi: 'TRẮNG', en: 'WHITE', es: 'BLANCO', ja: '白' }, decoy: true },
      ],
    },
    h1: ['Các nút bên dưới đều là bẫy màu.', 'The buttons below are decoys.', 'Los botones de abajo son trampas.', '下のボタンは全部ダミーだよ。'],
    h2: ['Tìm chữ viết ngay trong câu hỏi.', 'Look inside the prompt sentence.', 'Busca dentro de la pregunta.', '問題文の文字を直接見てみよう。'],
    h3: ['Chạm vào từ ĐEN trong phần câu hỏi.', 'Tap BLACK in the prompt.', 'Toca NEGRO en el enunciado.', '問題文の「黒い」をタップしよう！'],
    exp: ['Không bị đánh lừa bởi nút màu nữa nhé!', 'You spotted the prompt word cleanly!', '¡No caíste en la trampa!', '問題文トリックを見破りました！'],
  },
  {
    id: 66, cat: 'visual',
    title: ['Kim tự tháp 3 tầng', '3-Layer Pyramid', 'Pirámide de 3 pisos', '3段ピラミッド'],
    prompt: ['Tháp khối lập phương 3 tầng này có tổng cộng bao nhiêu khối?', 'How many cubes make up this 3-layer corner pyramid?', '¿Cuántos cubos forman esta pirámide de 3 pisos?', 'この3段のブロックの塔には全部で何個の立方体がある？'],
    mech: { type: 'visual_count', visualKind: 'cube_stack', variant: 2, correctAnswer: 10, min: 1, max: 30 },
    h1: ['Đếm từng tầng từ trên xuống dưới.', 'Count layer by layer from top to bottom.', 'Cuenta piso por piso desde arriba.', '上の段から1段ずつ数えてみよう。'],
    h2: ['Tầng 1 (đỉnh): 1 khối. Tầng 2: 3 khối. Tầng 3 (đáy): 6 khối.', 'Top: 1 cube. Middle: 3 cubes. Bottom: 6 cubes.', 'Arriba: 1. Medio: 3. Abajo: 6.', '1段目：1個、2段目：3個、3段目：6個！'],
    h3: ['1 + 3 + 6 = 10 khối.', '1 + 3 + 6 = 10 cubes.', '1 + 3 + 6 = 10 cubos.', '1＋3＋6＝10個！'],
    exp: ['Số tam giác 1 + 3 + 6 = 10 khối lập phương!', '1 + 3 + 6 = 10 cubes in total!', '¡1 + 3 + 6 = 10 cubos!', '合計10個の立方体でできています！'],
  },
  {
    id: 67, cat: 'riddle',
    title: ['Bố của Tý', 'Father’s 3 Sons', 'Los tres hijos', '3兄弟の名前'],
    prompt: ['Mẹ của Tý có 3 người con: Nhất, Nhị, và... người thứ ba tên gì?', 'Tom’s mother has 3 children: April, May, and... who is the third?', 'La madre de Lucas tiene 3 hijos: Abril, Mayo y... ¿cómo se llama el tercero?', 'タロウのお母さんには3人の子どもがいます。イチ、ニ、あと1人の名前は？'],
    mech: {
      type: 'lateral_choice', illustration: 'star',
      options: [
        { vi: 'Tam', en: 'June', es: 'Junio', ja: 'サン' },
        { vi: 'Tý', en: 'Tom', es: 'Lucas', ja: 'タロウ' },
        { vi: 'Tư', en: 'July', es: 'Julio', ja: 'ヨン' },
        { vi: 'Mùa hè', en: 'August', es: 'Agosto', ja: '夏' },
      ],
      correctIndex: 1,
    },
    h1: ['Đừng đếm tiếp Nhất, Nhị, Tam...', 'Do not continue the month/number pattern.', 'No sigas el patrón de los meses.', '順番のパターンに釣られないで！'],
    h2: ['Đọc lại tên ở đầu câu: "Mẹ của..."', 'Look at the first name in the question!', '¡Mira el primer nombre de la frase!', '最初の言葉をもう一度よく読もう！'],
    h3: ['Người thứ ba chính là Tý!', 'The 3rd child is Tom!', '¡El tercero es Lucas!', '3人目は「タロウ」自身です！'],
    exp: ['Tên đứa con thứ ba đã có sẵn từ đầu câu!', 'The third child was named at the very start!', '¡El tercer hijo estaba nombrado al inicio!', '最初から名前が書いてありました！'],
  },
  {
    id: 68, cat: 'drag',
    title: ['Giải cứu cá vàng', 'Save the Goldfish', 'Salva al pez', '金魚を助けよう'],
    prompt: ['Bể cá bị đóng băng rồi! Dùng ánh nắng hoặc lửa làm tan băng nhưng cẩn thận đừng đun sôi cá.', 'The pond froze over! Use warm sunlight to melt the ice safely.', '¡El estanque se congeló! Usa el sol cálido para derretir el hielo.', '池が凍ってしまった！太陽の暖かさで氷を溶かそう。'],
    mech: { type: 'drag_combine', mode: 'drop_on_target', backdrop: 'day', items: [{ id: 'ice', shape: 'ice', x: 72, y: 60, scale: 1.3 }, { id: 'sun', shape: 'sun', x: 25, y: 28, scale: 1.2 }, { id: 'bomb', shape: 'bomb', x: 25, y: 72, scale: 0.9 }], sourceId: 'sun', targetId: 'ice' },
    h1: ['Bom sẽ phá hỏng bể mất!', 'The bomb is dangerous — ignore it.', 'La bomba es peligrosa.', '爆弾は危険だから使わないで。'],
    h2: ['Kéo mặt trời ấm áp ở góc trên bên trái.', 'Drag the warm sun down.', 'Arrastra el sol cálido.', '左上の太陽をドラッグしよう。'],
    h3: ['Đưa mặt trời lại gần khối băng.', 'Drop the sun onto the ice block.', 'Suelta el sol sobre el hielo.', '太陽を氷の上に重ねよう！'],
    exp: ['Ánh nắng dịu nhẹ làm tan băng an toàn!', 'Gentle sunshine melted the ice cleanly!', '¡El sol derritió el hielo sin peligro!', '太陽の暖かさで安全に氷が溶けました！'],
  },
  {
    id: 69, cat: 'lock',
    title: ['Chữ số lặp lại', 'Count the 9s', 'Cuenta los 9', '9は何回？'],
    prompt: ['Từ 1 đến 100 có bao nhiêu lần chữ số 9 xuất hiện?', 'How many times does the digit 9 appear from 1 to 100?', '¿Cuántas veces aparece el dígito 9 del 1 al 100?', '1から100までに数字の「9」は何回登場する？'],
    mech: { type: 'lock_dial', clueDisplay: '9, 19, ..., 90..99', correctCode: '20', maxLength: 2 },
    h1: ['Đếm cả hàng đơn vị và hàng chục nhé.', 'Count both units place and tens place.', 'Cuenta unidades y decenas.', '一の位と十の位の両方を数えよう。'],
    h2: ['Hàng đơn vị có 10 số (9..99). Hàng chục có 10 số (90..99). Lưu ý 99 có 2 chữ số 9!', '10 in units (9..99) + 10 in tens (90..99). 99 counts twice!', '10 en unidades + 10 en decenas (99 cuenta doble).', '一の位に10回、十の位に10回（99は2回カウント！）。'],
    h3: ['10 + 10 = 20 lần.', '10 + 10 = 20 times.', '10 + 10 = 20 veces.', '答えは「20」回！'],
    exp: ['99 đóng góp 2 chữ số 9 nên tổng là 20!', 'Since 99 has two 9s, the total is 20!', '¡Como 99 tiene dos 9, suman 20!', '99に2つ含まれるため全部で20回です！'],
  },
  {
    id: 70, cat: 'drag',
    title: ['Cân đĩa 15kg', '15kg Scale', 'Balanza de 15 kg', '15kgの天秤'],
    prompt: ['Đặt đúng các vật nặng để đĩa phải đạt đúng 15 kg!', 'Place weights on the right pan to equal exactly 15 kg!', '¡Equilibra el platillo derecho exactamente a 15 kg!', '右の皿の合計が15kgになるように乗せよう！'],
    mech: {
      type: 'drag_combine', mode: 'balance_scale', targetBalance: 15,
      items: [
        { id: 'a', shape: 'rock', x: 18, y: 74, weight: 7, label: '7kg' },
        { id: 'b', shape: 'chest', x: 38, y: 74, weight: 8, label: '8kg' },
        { id: 'c', shape: 'book', x: 58, y: 74, weight: 4, label: '4kg' },
        { id: 'd', shape: 'trophy', x: 78, y: 74, weight: 5, label: '5kg' },
      ],
    },
    h1: ['Tìm cặp hoặc bộ vật có tổng bằng 15.', 'Find a combination totaling 15.', 'Busca una combinación que sume 15.', '合計15kgになる組み合わせを探そう。'],
    h2: ['7 kg + 8 kg = 15 kg!', '7 kg + 8 kg = 15 kg!', '¡7 kg + 8 kg = 15 kg!', '7kg ＋ 8kg ＝ 15kg！'],
    h3: ['Đặt Đá (7kg) và Rương (8kg) lên đĩa phải.', 'Place Rock (7kg) and Chest (8kg) on the scale.', 'Coloca Roca (7kg) y Cofre (8kg).', '岩(7kg)と宝箱(8kg)を選んで判定しよう！'],
    exp: ['7 + 8 = 15 kg chuẩn xác!', '7 + 8 = 15 kg perfectly balanced!', '¡7 + 8 = 15 kg exactos!', '7＋8＝15kgで釣り合いました！'],
  },
];

// Generate remaining Medium levels 71..135 (65 more distinct puzzles across visual counts, sequence locks, drags, actions, tricks, and lateral riddles!)
const EXTRA_MEDIUM: RawPuzzleSpec[] = [
  {
    id: 71, cat: 'visual',
    title: ['Tam giác 4 phần', '4-Slice Triangle', 'Triángulo en 4', '4分割の三角形'],
    prompt: ['Hình tam giác lớn được chia thành 4 phần chung đỉnh. Có tổng cộng bao nhiêu tam giác?', 'How many triangles are in a triangle divided into 4 slices from one vertex?', '¿Cuántos triángulos hay en un triángulo dividido en 4 partes?', '頂点から4つに分割された三角形。全部で三角形はいくつ？'],
    mech: { type: 'visual_count', visualKind: 'nested_triangles', variant: 3, correctAnswer: 10, min: 1, max: 30 },
    h1: ['Cộng dồn 4 + 3 + 2 + 1.', 'Sum 4 + 3 + 2 + 1.', 'Suma 4 + 3 + 2 + 1.', '4＋3＋2＋1 を足してみよう。'],
    h2: ['4 đơn + 3 đôi + 2 bộ ba + 1 tổng.', '4 singles + 3 pairs + 2 triples + 1 whole.', '4 simples + 3 pares + 2 tríos + 1 total.', '1枚が4つ、2枚組が3つ、3枚組が2つ、全体が1つ！'],
    h3: ['Đáp án là 10.', 'Answer: 10.', 'Respuesta: 10.', '答えは「10」！'],
    exp: ['1 + 2 + 3 + 4 = 10 hình tam giác!', '1 + 2 + 3 + 4 = 10 triangles!', '¡1 + 2 + 3 + 4 = 10 triángulos!', '合計10個の三角形があります！'],
  },
  {
    id: 72, cat: 'trick',
    title: ['Bắt chuột trong tối', 'Flashlight Hunt', 'Caza con linterna', '暗闇のネズミ探し'],
    prompt: ['Chú chuột trốn đâu mất rồi? Hãy tìm và chạm vào nó!', 'Where did the mouse hide? Find and tap it!', '¿Dónde se escondió el ratón? ¡Encuéntralo y tócalo!', 'ネズミはどこに隠れた？見つけてタップしよう！'],
    mech: {
      type: 'scene_tap', backdrop: 'night', darkRoom: true,
      objects: [
        { id: 'mouse', shape: 'mouse', x: 76, y: 66, scale: 1.05, isTarget: true },
        { id: 'cat', shape: 'cat', x: 30, y: 62, scale: 1.1, decoy: true },
        { id: 'flash', shape: 'flashlight', x: 22, y: 34, scale: 1.15, draggable: true },
      ],
    },
    h1: ['Phòng tối đen, cần có ánh sáng.', 'It is pitch black — bring light!', 'Está muy oscuro — ¡usa luz!', '暗くて見えないので明かりが必要だよ。'],
    h2: ['Kéo đèn pin đi rọi quanh góc phải dưới.', 'Drag the flashlight toward the lower right.', 'Mueve la linterna abajo a la derecha.', '懐中電灯を右下へドラッグして照らそう。'],
    h3: ['Chiếu sáng chú chuột ở góc phải dưới rồi chạm vào nó.', 'Illuminate the mouse in the bottom-right and tap it.', 'Ilumina al ratón a la derecha y tócalo.', '右下のネズミを照らしてからタップしよう！'],
    exp: ['Ánh đèn pin giúp bạn tìm ra chú chuột lanh lợi!', 'The flashlight spotlighted the sneaky mouse!', '¡La linterna reveló al ratón!', '懐中電灯でバッチリ見つかりました！'],
  },
  {
    id: 73, cat: 'action',
    title: ['Đánh bóng cúp vàng', 'Polish the Trophy', 'Pule el trofeo', 'トロフィーを磨こう'],
    prompt: ['Chạm nhanh 8 lần để đánh bóng chiếc cúp rực sáng!', 'Tap the trophy 8 times to polish it to a shine!', '¡Toca el trofeo 8 veces para sacarle brillo!', 'トロフィーを8回タップしてピカピカに磨こう！'],
    mech: { type: 'action_meter', mode: 'multi_tap', targetShape: 'trophy', resultShape: 'diamond', requiredValue: 8, meterLabel: { vi: 'Độ sáng', en: 'Shine', es: 'Brillo', ja: '輝き' } },
    h1: ['Chạm liên tục vào chiếc cúp.', 'Tap the trophy repeatedly.', 'Toca el trofeo varias veces.', 'トロフィーを連続でタップしよう。'],
    h2: ['Cần đủ 8 lần chạm.', 'Keep tapping until 8.', 'Llega hasta 8 toques.', '8回になるまでタップ！'],
    h3: ['Nhấn 8 lần vào chiếc cúp.', 'Tap 8 times total.', 'Pulsa 8 veces.', '合計8回タップでクリア！'],
    exp: ['Sáng bóng như kim cương rồi!', 'Shining bright like a diamond!', '¡Brilla como un diamante!', 'ダイヤのようにピカピカになりました！'],
  },
  {
    id: 74, cat: 'riddle',
    title: ['Cây cầu gãy nhịp', 'Doctors’ Riddle', 'El cirujano', '名医の正体'],
    prompt: ['Hai cha con gặp tai nạn. Người bố không qua khỏi. Bác sĩ phẫu thuật nhìn cậu bé và nói: "Tôi không thể mổ, đây là con trai tôi!" Tại sao?', 'A father and son are in an accident; the father passes away. At the hospital, the surgeon says: "I cannot operate, he is my son!" How?', 'Un padre y su hijo sufren un accidente y el padre muere. El cirujano dice: "¡No puedo operar, es mi hijo!" ¿Por qué?', '父と息子が事故に遭い父は亡くなりました。執刀医は「自分の息子だから手術できない」と言いました。なぜ？'],
    mech: {
      type: 'lateral_choice', illustration: 'heart',
      options: [
        { vi: 'Bác sĩ là mẹ của cậu bé', en: 'The surgeon is the mother', es: 'La cirujana es su madre', ja: '執刀医は母親だから' },
        { vi: 'Cậu bé có phép thuật', en: 'It was magic', es: 'Fue magia', ja: '魔法だったから' },
        { vi: 'Bác sĩ nhìn nhầm người', en: 'Wrong patient', es: 'Paciente equivocado', ja: '人違いだから' },
        { vi: 'Giấc mơ kỳ lạ', en: 'Just a dream', es: 'Fue un sueño', ja: '夢だったから' },
      ],
      correctIndex: 0,
    },
    h1: ['Nghĩ vượt ra khỏi khuôn mẫu giới tính quen thuộc.', 'Think past unconscious assumptions about professions.', 'Rompe el estereotipo sobre quién opera.', '職業に対する固定観念を外してみよう。'],
    h2: ['Cậu bé có bố và còn có một người nữa trong gia đình.', 'Who is the other parent?', '¿Quién es el otro progenitor?', 'もう一人の親は誰かな？'],
    h3: ['Bác sĩ phẫu thuật chính là MẸ của cậu bé!', 'The surgeon is the boy’s MOTHER!', '¡La cirujana es su MADRE!', '執刀医は「母親」でした！'],
    exp: ['Bác sĩ phẫu thuật hoàn toàn có thể là phụ nữ — mẹ của cậu bé!', 'Surgeons can be moms too!', '¡La cirujana era su mamá!', '外科医は女性（お母さん）だったという名問です！'],
  },
  {
    id: 75, cat: 'lock',
    title: ['Dãy số Fibonacci', 'Fibonacci Lock', 'Candado Fibonacci', 'フィボナッチ錠'],
    prompt: ['Tìm số tiếp theo để mở khóa: 1, 1, 2, 3, 5, 8, ?', 'Find the next number in the sequence: 1, 1, 2, 3, 5, 8, ?', 'Encuentra el siguiente número: 1, 1, 2, 3, 5, 8, ?', '次の数字はなに？：1, 1, 2, 3, 5, 8, ?'],
    mech: { type: 'lock_dial', clueDisplay: '1 · 1 · 2 · 3 · 5 · 8 · ?', correctCode: '13', maxLength: 3 },
    h1: ['Mỗi số liên quan tới 2 số đứng ngay trước nó.', 'Each number relates to the previous two.', 'Cada número depende de los dos anteriores.', '前の2つの数字に注目しよう。'],
    h2: ['Cộng hai số đứng trước lại: 1+1=2, 1+2=3, 2+3=5, 3+5=8.', 'Add the two previous numbers: 5 + 8 = ?', 'Suma los dos anteriores: 5 + 8 = ?', '前の2つを足しているよ！5＋8＝？'],
    h3: ['5 + 8 = 13.', '5 + 8 = 13.', '5 + 8 = 13.', '答えは「13」！'],
    exp: ['Dãy Fibonacci kinh điển: 5 + 8 = 13!', 'Classic Fibonacci: 5 + 8 = 13!', '¡Secuencia de Fibonacci: 5 + 8 = 13!', 'フィボナッチ数列より5＋8＝13です！'],
  },
];

// Compact generator for levels 76..135 (60 varied puzzles across all 6 mechanics)
function generateMedium76to135(): Puzzle[] {
  const list: Puzzle[] = [];
  const basePairs: Array<{
    cat: Puzzle['category'];
    t: Quad;
    p: Quad;
    m: PuzzleMechanic;
    h1: Quad;
    h2: Quad;
    h3: Quad;
    e: Quad;
  }> = [
    {
      cat: 'drag',
      t: ['Áo mưa ngày bão', 'Rain Protection', 'Protección de lluvia', '雨の日アイテム'],
      p: ['Đưa chiếc ô cho chú ếch để che mưa? À không, ếch thích mưa — hãy che cho chú MÈO!', 'Who hates rain? Drag the umbrella to the CAT, not the frog!', '¿Quién odia la lluvia? ¡Lleva el paraguas al GATO!', '雨が大嫌いなのはどっち？傘を「猫」に届けてあげよう！'],
      m: { type: 'drag_combine', mode: 'drop_on_target', backdrop: 'day', items: [{ id: 'cat', shape: 'cat', x: 75, y: 65, scale: 1.15 }, { id: 'frog', shape: 'frog', x: 75, y: 30, scale: 1.0 }, { id: 'umb', shape: 'umbrella', x: 25, y: 55, scale: 1.2 }], sourceId: 'umb', targetId: 'cat' },
      h1: ['Ếch thích nước mưa, mèo thì rất sợ ướt!', 'Frogs love rain; cats hate getting wet!', 'Las ranas aman la lluvia; los gatos no.', 'カエルは雨が好き、猫は濡れるのが苦手！'],
      h2: ['Kéo chiếc ô sang chú mèo ở góc phải dưới.', 'Drag the umbrella to the cat at bottom right.', 'Arrastra el paraguas al gato.', '右下の猫へ傘をドラッグしよう。'],
      h3: ['Thả chiếc ô lên chú mèo.', 'Drop the umbrella onto the cat.', 'Suelta el paraguas sobre el gato.', '傘を猫の上にドロップ！'],
      e: ['Chú mèo khô ráo còn chú ếch tha hồ tắm mưa!', 'Cat stays dry while frog enjoys the rain!', '¡El gato seco y la rana feliz!', '猫は濡れずに済みました！'],
    },
    {
      cat: 'visual',
      t: ['Áo 3 lỗ rách', '3-Tear T-Shirt', 'Camiseta de 3 cortes', '3箇所破れた服'],
      p: ['Chiếc áo thun có 3 vết rách xuyên thấu. Tổng cộng có bao nhiêu lỗ?', 'This shirt has 3 through-holes torn in the front. Total holes?', 'Camiseta con 3 agujeros pasantes. ¿Total de agujeros?', '3箇所貫通した破れがあるTシャツ。穴は全部で何個？'],
      m: { type: 'visual_count', visualKind: 'tshirt_holes', variant: 3, correctAnswer: 10, min: 1, max: 25 },
      h1: ['4 lỗ áo mặc định + số lỗ do vết rách.', '4 natural openings + tear holes.', '4 aberturas + cortes.', '首・裾・両袖の4つ＋破れた分。'],
      h2: ['3 vết rách xuyên qua cả trước và sau = 6 lỗ.', '3 through-tears × 2 sides = 6 holes.', '3 cortes × 2 caras = 6.', '3箇所×表裏2面＝6個の穴！'],
      h3: ['4 + 6 = 10 lỗ.', '4 + 6 = 10 holes.', '4 + 6 = 10 agujeros.', '4＋6＝10個！'],
      e: ['4 + 3×2 = 10 cái lỗ!', '4 + 3×2 = 10 holes total!', '¡4 + 3×2 = 10 agujeros!', '表裏貫通なので合計10個です！'],
    },
    {
      cat: 'lock',
      t: ['Biển số đảo ngược', 'Flipped Parking #2', 'Parking invertido #2', '逆さま駐車 #2'],
      p: ['Ô tô đỗ ở chỗ nào trong dãy bãi đỗ ngược này?', 'Which spot number is covered by the car here?', '¿Qué número tapa el coche aquí?', 'この駐車場で車が隠している番号は何番？'],
      m: { type: 'visual_count', visualKind: 'parking_number', variant: 2, correctAnswer: 67, min: 0, max: 99 },
      h1: ['Đảo ngược góc nhìn từ trên xuống dưới.', 'Flip your view 180 degrees.', 'Gira tu vista 180 grados.', '180度ひっくり返して見てみよう。'],
      h2: ['Đọc từ phải sang: 66, [?], 68, 69, 70, 71.', 'Upside down: 66, [?], 68, 69, 70, 71.', 'Al revés: 66, [?], 68, 69, 70, 71.', '逆さまから読むと 66, [?], 68, 69, 70, 71。'],
      h3: ['Đáp án là 67.', 'Answer: 67.', 'Respuesta: 67.', '答えは「67」！'],
      e: ['Xoay 180 độ ra dãy 66–71 nên ô bị che là 67!', 'Rotated 180°, the sequence is 66–71, so it is 67!', '¡Rotado es 66–71, así que es 67!', '逆から見れば66〜71なので67番です！'],
    },
    {
      cat: 'riddle',
      t: ['Bữa sáng bị thiếu', 'Never Eaten for Breakfast', 'Nunca en el desayuno', '朝食に食べられないもの'],
      p: ['Hai thứ gì bạn không bao giờ có thể ăn vào bữa sáng?', 'What two things can you NEVER eat for breakfast?', '¿Qué dos cosas NUNCA puedes comer en el desayuno?', '朝ごはんとして絶対に食べられない2つのものは何？'],
      m: { type: 'lateral_choice', illustration: 'cake', options: [{ vi: 'Bánh mì và sữa', en: 'Bread & milk', es: 'Pan y leche', ja: 'パンと牛乳' }, { vi: 'Bữa trưa và bữa tối', en: 'Lunch & dinner', es: 'Almuerzo y cena', ja: '昼食と夕食' }, { vi: 'Đá và lửa', en: 'Ice & fire', es: 'Hielo y fuego', ja: '氷と火' }, { vi: 'Táo và chuối', en: 'Apple & banana', es: 'Manzana y plátano', ja: 'リンゴとバナナ' }], correctIndex: 1 },
      h1: ['Nghĩ về tên gọi theo thời gian trong ngày.', 'Think about the names of meals by time of day.', 'Piensa en los nombres de las comidas.', '時間帯ごとの食事の名前を考えてみよう。'],
      h2: ['Nếu ăn vào buổi sáng thì nó sẽ thành bữa sáng rồi!', 'If you ate them in the morning, they would be breakfast!', '¡Si los comes por la mañana serían desayuno!', '朝に食べたら朝食になっちゃうものは…？'],
      h3: ['Chọn "Bữa trưa và bữa tối".', 'Choose "Lunch & dinner".', 'Elige "Almuerzo y cena".', '「昼食と夕食」を選ぼう！'],
      e: ['Bữa trưa và bữa tối mà ăn lúc sáng thì không còn là trưa/tối nữa!', 'Lunch and dinner stop being lunch and dinner at breakfast!', '¡Almuerzo y cena!', '昼食と夕食は朝には食べられません！'],
    },
    {
      cat: 'action',
      t: ['Ủ ấm quả trứng băng', 'Melt & Hatch', 'Calienta el huevo frío', '冷たい卵を温めよう'],
      p: ['Quả trứng bị lạnh cóng! Nhấn và giữ đủ lâu để làm ấm nó.', 'The egg is freezing! Hold gently until it warms up.', '¡El huevo está helado! Mantén pulsado hasta calentarlo.', '卵が冷え切っている！長押ししてしっかり温めよう。'],
      m: { type: 'action_meter', mode: 'hold', targetShape: 'egg', resultShape: 'chick', requiredValue: 2.8, meterLabel: { vi: 'Hơi ấm', en: 'Warmth', es: 'Calor', ja: 'ぬくもり' } },
      h1: ['Lần này cần giữ lâu hơn một chút.', 'This egg takes slightly longer to warm.', 'Tarda un poco más en calentarse.', '今回は少し長めに温める必要があるよ。'],
      h2: ['Nhấn giữ gần 3 giây không thả.', 'Hold steadily for nearly 3 seconds.', 'Mantén casi 3 segundos.', '約3秒間ずっと長押ししよう。'],
      h3: ['Giữ cho tới khi thanh nhiệt đầy 100%.', 'Hold until 100%.', 'Mantén hasta el 100%.', 'ゲージが100%になるまで長押し！'],
      e: ['Kiên nhẫn giữ ấm đã cứu sống quả trứng!', 'Steady warmth hatched the cold egg!', '¡Calor constante!', 'じっくり温めて無事孵化しました！'],
    },
  ];

  const wordPuzzleData: Array<{
    cat: Puzzle['category'];
    t: Quad;
    p: Quad;
    clue: string;
    code: string;
    h1: Quad;
    h2: Quad;
    h3: Quad;
    e: Quad;
  }> = [
    {
      cat: 'lock',
      t: ['Hồ hoa súng', 'Water Lily Pond', 'Estanque de nenúfares', 'スイレンの池'],
      p: ['Hoa súng nở gấp đôi mỗi ngày. Ngày 20 phủ kín cả hồ. Ngày nào phủ được một nửa hồ?', 'A lily pad doubles in size daily. On Day 20 it covers the whole pond. On which day was it half full?', 'Un nenúfar duplica su tamaño cada día y llena el estanque el día 20. ¿Qué día cubría la mitad?', '毎日面積が2倍になるスイレンが20日目に池全体を覆いました。池の半分を覆ったのは何日目？'],
      clue: '×2 / day · Day 20 = 100%',
      code: '19',
      h1: ['Không phải ngày 10 đâu nhé!', 'It is definitely NOT Day 10!', '¡No es el día 10!', '10日目ではありません！'],
      h2: ['Vì mỗi ngày tăng gấp đôi nên lùi lại 1 ngày sẽ còn một nửa!', 'If it doubles every day, the day right before full (Day 20) must be half!', 'Si duplica cada día, el día anterior al 20 estaba a la mitad.', '毎日2倍になるなら、満杯（20日目）の前日がちょうど半分！'],
      h3: ['20 - 1 = 19.', '20 - 1 = 19.', '20 - 1 = 19.', '答えは「19」日目！'],
      e: ['Ngày 19 phủ nửa hồ, sang ngày 20 nhân đôi thành kín hồ!', 'Half on Day 19 doubles to full on Day 20!', '¡La mitad el día 19 se duplica el día 20!', '19日目の半分が20日目に2倍になって満杯になります！'],
    },
    {
      cat: 'lock',
      t: ['Tuổi của anh em', 'Age Gap', 'Diferencia de edad', '年齢差のトリック'],
      p: ['Khi tôi 6 tuổi, em tôi bằng nửa tuổi tôi. Nay tôi 70 tuổi, em tôi bao nhiêu tuổi?', 'When I was 6, my sister was half my age. Now I am 70. How old is she?', 'Cuando tenía 6 años, mi hermana tenía la mitad. Ahora tengo 70. ¿Cuántos años tiene?', '私が6歳の時、妹は半分の年齢でした。今私は70歳です。妹は何歳？'],
      clue: '6 → 3  |  70 → ?',
      code: '67',
      h1: ['Tuổi tác không tăng theo tỷ lệ phần trăm đâu!', 'People age by adding years, not multiplying!', '¡Los años se suman, no se multiplican!', '年齢差はずっと変わらないよ！'],
      h2: ['Hiệu số tuổi là 6 - 3 = 3 tuổi.', 'The age difference is 6 - 3 = 3 years.', 'La diferencia es 6 - 3 = 3 años.', '年齢差は 6 − 3 ＝ 3歳差！'],
      h3: ['70 - 3 = 67.', '70 - 3 = 67.', '70 - 3 = 67.', '70 − 3 ＝ 67歳！'],
      e: ['Chênh lệch luôn là 3 tuổi: 70 - 3 = 67!', 'Always 3 years younger: 70 - 3 = 67!', '¡Siempre 3 años menor: 67!', 'ずっと3歳差なので67歳です！'],
    },
    {
      cat: 'lock',
      t: ['Bóng đèn và cây kéo', 'Split in Half', 'Dividir por la mitad', '半分で割る'],
      p: ['Lấy 30 chia cho một nửa (0.5) rồi cộng thêm 10 bằng bao nhiêu?', 'Divide 30 by half (0.5) and add 10. What do you get?', 'Divide 30 entre la mitad (0.5) y suma 10. ¿Qué obtienes?', '30を「半分（0.5）」で割って、10を足すといくつ？'],
      clue: '30 ÷ 0.5 + 10 = ?',
      code: '70',
      h1: ['"Chia cho một nửa" khác với "chia đôi" (chia 2)!', '"Dividing by half" is NOT dividing by 2!', '¡Dividir entre 0.5 no es dividir entre 2!', '「半分（0.5）で割る」は「2で割る」と違うよ！'],
      h2: ['30 ÷ 0.5 = 60.', '30 ÷ 0.5 = 60.', '30 ÷ 0.5 = 60.', '30 ÷ 0.5 ＝ 60！'],
      h3: ['60 + 10 = 70.', '60 + 10 = 70.', '60 + 10 = 70.', '60 ＋ 10 ＝ 70！'],
      e: ['Chia cho 0.5 tức là nhân 2: 30×2 + 10 = 70!', 'Dividing by 0.5 doubles 30 to 60, plus 10 = 70!', '¡Dividir entre 0.5 duplica: 60 + 10 = 70!', '0.5で割ると2倍になるため30×2＋10＝70です！'],
    },
    {
      cat: 'lock',
      t: ['Hộp táo trong hộp', 'Boxes Inside Boxes', 'Cajas dentro de cajas', '入れ子の箱'],
      p: ['Có 1 hộp lớn, bên trong chứa 3 hộp vừa, mỗi hộp vừa chứa 2 hộp nhỏ. Tổng có bao nhiêu hộp?', '1 large box contains 3 medium boxes, and each medium box holds 2 small boxes. Total boxes?', '1 caja grande contiene 3 medianas, y cada mediana 2 pequeñas. ¿Total de cajas?', '大きな箱が1つ。その中に中くらいの箱が3つ。さらに各中箱の中に小さな箱が2つずつ。箱は全部で何個？'],
      clue: '1 Large → 3 Med → 2 Small each',
      code: '10',
      h1: ['Đếm cả hộp lớn ngoài cùng và 3 hộp vừa nhé.', 'Count the outer box and medium boxes too.', 'Cuenta la grande y las medianas también.', '一番外の大きい箱と中箱も忘れずに数えよう。'],
      h2: ['1 lớn + 3 vừa + (3 × 2) nhỏ.', '1 large + 3 medium + 6 small.', '1 grande + 3 medianas + 6 pequeñas.', '大1 ＋ 中3 ＋ 小6。'],
      h3: ['1 + 3 + 6 = 10.', '1 + 3 + 6 = 10.', '1 + 3 + 6 = 10.', '合計10個！'],
      e: ['1 + 3 + 6 = 10 hộp tất cả!', '1 + 3 + 6 = 10 total boxes!', '¡1 + 3 + 6 = 10 cajas!', '1＋3＋6＝10個あります！'],
    },
    {
      cat: 'lock',
      t: ['Gặp nhau trên đường', 'Cats & Mice Time', 'Gatos y ratones', '猫がネズミを捕る時間'],
      p: ['5 con mèo bắt 5 con chuột mất 5 phút. Vậy 100 con mèo bắt 100 con chuột mất mấy phút?', 'If 5 cats catch 5 mice in 5 minutes, how many minutes for 100 cats to catch 100 mice?', 'Si 5 gatos cazan 5 ratones en 5 minutos, ¿cuánto tardan 100 gatos en cazar 100 ratones?', '5匹の猫が5匹のネズミを捕まえるのに5分かかります。100匹の猫が100匹のネズミを捕まえるのには何分かかる？'],
      clue: '5🐱 → 5🐭 (5m)  |  100🐱 → 100🐭 (?)',
      code: '5',
      h1: ['Mỗi con mèo tự lo bắt 1 con chuột của mình!', 'Each cat catches its own 1 mouse in parallel!', '¡Cada gato caza su propio ratón al mismo tiempo!', '100匹が一斉に自分の担当1匹を捕まえるよ！'],
      h2: ['1 mèo bắt 1 chuột mất 5 phút. Vậy 100 mèo làm cùng lúc cũng chỉ mất...', '1 cat takes 5 min for 1 mouse. Doing it simultaneously takes...', '1 gato tarda 5 min. Todos a la vez tardan...', '1匹が1匹捕るのに5分なら、100匹同時でも…'],
      h3: ['Đáp án vẫn là 5 phút!', 'Still 5 minutes!', '¡Siguen siendo 5 minutos!', '答えは「5」分！'],
      e: ['Làm song song nên vẫn chỉ mất 5 phút!', 'Parallel work keeps the time at 5 minutes!', '¡Trabajo paralelo: 5 minutos!', '同時進行なので5分のままです！'],
    },
  ];

  // Expand 60 crisp Medium puzzles (76..135) with varying parameters & unique twists
  for (let i = 0; i < 60; i++) {
    const id = 76 + i;
    const mod = i % 10;
    if (mod < 5) {
      const b = basePairs[mod];
      // Customize each variant cleanly by id so every level 76..135 feels distinct
      if (mod === 0 && i >= 10) {
        const itemsByVariant = [
          { src: 'banana' as const, tgt: 'cat' as const, decoy: 'bone' as const, vi: 'Chuối hay xương?', en: 'Banana or Bone?', es: '¿Plátano o hueso?', ja: 'バナナと骨？', pv: 'Chú cún muốn gặm đồ chơi cứng chứ không ăn chuối!', pe: 'Give the puppy what it loves to chew!', ps: '¡Dale al cachorro su juguete favorito!', pj: 'ワンちゃんの大好物をあげよう！', useSrc: 'bone' as const, useTgt: 'dog' as const },
          { src: 'key' as const, tgt: 'door' as const, decoy: 'rock' as const, vi: 'Mở cánh cửa bí mật', en: 'Open the Secret Door', es: 'Abre la puerta secreta', ja: '秘密の扉を開けよう', pv: 'Dùng chìa khóa mở cánh cửa gỗ!', pe: 'Unlock the wooden door with the hidden key!', ps: '¡Abre la puerta con la llave!', pj: '鍵を使って木の扉を開けよう！', useSrc: 'key' as const, useTgt: 'door' as const },
        ];
        const pick = itemsByVariant[i % 2];
        list.push({
          id, difficulty: 'medium', category: 'drag',
          title: { vi: `${pick.vi} #${id}`, en: `${pick.en}`, es: `${pick.es}`, ja: `${pick.ja}` },
          prompt: { vi: pick.pv, en: pick.pe, es: pick.ps, ja: pick.pj },
          mechanic: {
            type: 'drag_combine', mode: 'drop_on_target', backdrop: 'room',
            items: [
              { id: 't', shape: pick.useTgt, x: 74, y: 60, scale: 1.25 },
              { id: 's', shape: pick.useSrc, x: 24, y: 64, scale: 1.05 },
              { id: 'cover', shape: 'bush', x: 24, y: 64, scale: 1.35 },
              { id: 'd', shape: pick.decoy, x: 48, y: 34, scale: 0.9 },
            ],
            sourceId: 's', targetId: 't',
          },
          hints: [
            { vi: 'Bụi cây bên trái đang che thứ gì đó.', en: 'Something useful is hidden behind the bush.', es: 'Algo útil se esconde tras el arbusto.', ja: '左の茂みの後ろに何か隠れているよ。' },
            { vi: 'Kéo bụi cây ra rồi kéo vật phẩm sang đích.', en: 'Move the bush aside, then drag the item to the target.', es: 'Mueve el arbusto y arrastra el objeto al objetivo.', ja: '茂みをどかしてアイテムを右へドラッグしよう。' },
            { vi: 'Đặt đúng vật phẩm lên mục tiêu bên phải.', en: 'Drop the revealed item onto the right-hand target.', es: 'Suelta el objeto sobre el objetivo derecho.', ja: '見つけたアイテムを右の対象に乗せよう！' },
          ],
          explanation: { vi: 'Bạn đã tìm thấy vật phẩm bị che giấu!', en: 'You uncovered the hidden item!', es: '¡Encontraste el objeto oculto!', ja: '隠されたアイテムを見事使いこなしました！' },
        });
      } else {
        // Unique math/visual variants per level number
        const step = Math.floor(i / 10) + 1;
        if (mod === 1) {
          // Visual mirrors / stairs / cubes variations
          const v = (step % 3) + 1;
          const ansMap = [0, 6, 8, 10];
          list.push({
            id, difficulty: 'medium', category: 'visual',
            title: { vi: `Áo rách nâng cao (${v})`, en: `Torn Shirt (${v} Tears)`, es: `Camiseta (${v} cortes)`, ja: `穴あきシャツ (${v})` },
            prompt: {
              vi: `Chiếc áo có ${v} lỗ rách xuyên thấu trước sau. Tổng có mấy lỗ?`,
              en: `This shirt has ${v} through-tears. How many total holes does it have?`,
              es: `Esta camiseta tiene ${v} cortes pasantes. ¿Cuántos agujeros en total?`,
              ja: `${v}箇所が前後に貫通したTシャツ。全部でいくつの穴がある？`,
            },
            mechanic: { type: 'visual_count', visualKind: 'tshirt_holes', variant: v, correctAnswer: ansMap[v], min: 1, max: 25 },
            hints: [
              { vi: 'Áo luôn có 4 lỗ mặc định.', en: 'A shirt always starts with 4 normal openings.', es: 'La camiseta siempre empieza con 4 aberturas.', ja: 'Tシャツには最初から4つの穴があるよ。' },
              { vi: `Mỗi vết rách tạo 2 lỗ (trước + sau): ${v} × 2 = ${v * 2}.`, en: `Each tear adds 2 holes (front + back): ${v} × 2 = ${v * 2}.`, es: `Cada corte suma 2: ${v} × 2 = ${v * 2}.`, ja: `貫通した穴は表裏で2つずつ：${v}×2＝${v * 2}個！` },
              { vi: `4 + ${v * 2} = ${ansMap[v]}.`, en: `4 + ${v * 2} = ${ansMap[v]}.`, es: `4 + ${v * 2} = ${ansMap[v]}.`, ja: `答えは「${ansMap[v]}」！` },
            ],
            explanation: { vi: `4 lỗ tự nhiên + ${v * 2} lỗ rách = ${ansMap[v]}!`, en: `4 normal + ${v * 2} tear holes = ${ansMap[v]}!`, es: `¡4 normales + ${v * 2} = ${ansMap[v]}!`, ja: `合計${ansMap[v]}個の穴があります！` },
          } as Puzzle);
        } else if (mod === 2) {
          const mirrorHrs = [10, 8, 7, 4, 2, 11];
          const hr = mirrorHrs[step % mirrorHrs.length];
          const realHr = 12 - hr;
          list.push({
            id, difficulty: 'medium', category: 'visual',
            title: { vi: `Gương đồng hồ ${hr}h`, en: `Mirror Clock ${hr}:00`, es: `Espejo ${hr}:00`, ja: `鏡の時計 ${hr}時` },
            prompt: {
              vi: `Trong gương đồng hồ chỉ đúng ${hr}:00. Thực tế là mấy giờ?`,
              en: `A clock in a mirror reads ${hr}:00. What is the actual hour?`,
              es: `En el espejo el reloj marca las ${hr}:00. ¿Qué hora real es?`,
              ja: `鏡に映った時計が${hr}時ちょうどを指しています。本当の時刻は何時？`,
            },
            mechanic: { type: 'visual_count', visualKind: 'mirror_clock', variant: hr, correctAnswer: realHr, min: 1, max: 12 },
            hints: [
              { vi: 'Đối xứng trái phải quanh trục 12–6.', en: 'Flip horizontally across the 12–6 axis.', es: 'Invierte horizontalmente respecto al eje 12–6.', ja: '12時と6時を結ぶ線を軸に左右反転させよう。' },
              { vi: `Dùng công thức 12 - ${hr}.`, en: `Subtract from 12: 12 - ${hr}.`, es: `Resta a 12: 12 - ${hr}.`, ja: `12 − ${hr} を計算してみよう！` },
              { vi: `Đáp án là ${realHr}.`, en: `Answer: ${realHr}.`, es: `Respuesta: ${realHr}.`, ja: `答えは「${realHr}」時！` },
            ],
            explanation: { vi: `12 - ${hr} = ${realHr} giờ!`, en: `12 - ${hr} = ${realHr} o’clock!`, es: `¡12 - ${hr} = ${realHr}:00!`, ja: `12−${hr}＝${realHr}時になります！` },
          });
        } else if (mod === 3) {
          const riddlesPool = [
            {
              t: ['Lá cây và gió', 'Always Coming', 'Siempre viene', '決して来ない明日'] as Quad,
              p: ['Thứ gì luôn luôn đang đến nhưng không bao giờ thực sự tới nơi?', 'What is always on its way, yet never arrives?', '¿Qué siempre está por llegar pero nunca llega?', 'いつも「もうすぐ来る」のに、絶対に今日にはやって来ないものは何？'] as Quad,
              opts: [
                { vi: 'Ngày mai', en: 'Tomorrow', es: 'Mañana', ja: '明日' },
                { vi: 'Chuyến tàu', en: 'A train', es: 'Un tren', ja: '電車' },
                { vi: 'Cơn mưa', en: 'Rain', es: 'La lluvia', ja: '雨' },
                { vi: 'Mùa đông', en: 'Winter', es: 'Invierno', ja: '冬' },
              ],
              ci: 0 as const,
              h1: ['Nghĩ về khái niệm thời gian.', 'Think about time.', 'Piensa en el tiempo.', '時間に関する言葉だよ。'] as Quad,
              h2: ['Khi nó tới nơi, ta lại gọi nó là "Hôm nay"!', 'Once it arrives, we call it "Today"!', 'Cuando llega se llama "Hoy".', 'いざやって来ると「今日」と呼び名が変わるよ！'] as Quad,
              h3: ['Chọn "Ngày mai".', 'Select "Tomorrow".', 'Elige "Mañana".', '「明日」を選ぼう！'] as Quad,
              e: ['Ngày mai không bao giờ là hôm nay!', 'Tomorrow never arrives as tomorrow!', '¡Mañana siempre se vuelve hoy!', '明日は来た瞬間に今日になります！'] as Quad,
            },
            {
              t: ['Cái gì không ướt?', 'Wet Without Water', 'Seco bajo el agua', '濡れないもの'] as Quad,
              p: ['Bạn ném thứ gì xuống biển mà nó không bao giờ bị ướt?', 'Throw a rock or anything? No—what enters water and never gets wet?', '¿Qué entra en el agua y jamás se moja?', '水の中に入れても絶対に濡れないものは何？'] as Quad,
              opts: [
                { vi: 'Cái bóng của bạn', en: 'Your shadow', es: 'Tu sombra', ja: 'あなたの影' },
                { vi: 'Chiếc lá', en: 'A leaf', es: 'Una hoja', ja: '葉っぱ' },
                { vi: 'Miếng bọt biển', en: 'A sponge', es: 'Una esponja', ja: 'スポンジ' },
                { vi: 'Tờ giấy', en: 'Paper', es: 'Papel', ja: '紙' },
              ],
              ci: 0 as const,
              h1: ['Nó không phải là vật chất có thể chạm vào.', 'It has no physical substance.', 'No es materia física.', '手で触れる物体ではないよ。'] as Quad,
              h2: ['Nó đi theo bạn dưới ánh nắng.', 'It follows you in sunlight.', 'Te sigue bajo el sol.', '太陽の下であなたについてくるものだよ。'] as Quad,
              h3: ['Chọn "Cái bóng của bạn".', 'Choose "Your shadow".', 'Elige "Tu sombra".', '「あなたの影」を選ぼう！'] as Quad,
              e: ['Ánh sáng và bóng tối không thể bị làm ướt!', 'A shadow cannot get wet!', '¡Una sombra no puede mojarse!', '影は実体がないので濡れません！'] as Quad,
            },
            {
              t: ['Càng chia sẻ càng nhiều', 'More Shared, More Left', 'Más compartes, más queda', '分けるほど増えるもの'] as Quad,
              p: ['Cái gì nếu bạn giữ riêng thì mất, nhưng càng chia sẻ với mọi người thì lại càng có nhiều?', 'If you have it, you want to share it. If you share it, you do not have it anymore. Wait — what is a SECRET?', 'Si lo tienes quieres compartirlo, pero si lo compartes deja de serlo. ¿Qué es?', '持っていると誰かに話したくなるけれど、話した瞬間に消えてしまうものは何？'] as Quad,
              opts: [
                { vi: 'Bí mật', en: 'A secret', es: 'Un secreto', ja: '秘密' },
                { vi: 'Tiền xu', en: 'Coins', es: 'Monedas', ja: 'コイン' },
                { vi: 'Bánh ngọt', en: 'Cake', es: 'Pastel', ja: 'ケーキ' },
                { vi: 'Chìa khóa', en: 'A key', es: 'Una llave', ja: '鍵' },
              ],
              ci: 0 as const,
              h1: ['Khi người khác biết rồi thì nó không còn như cũ nữa.', 'Once someone else knows it, it changes status.', 'Cuando otro lo sabe, deja de existir como tal.', '他の人が知ってしまうと意味が変わるよ。'] as Quad,
              h2: ['Bạn hay thì thầm điều này với bạn thân.', 'People whisper it.', 'La gente suele susurrarlo.', 'こっそり耳打ちするものだよ。'] as Quad,
              h3: ['Chọn "Bí mật".', 'Choose "A secret".', 'Elige "Un secreto".', '「秘密」を選ぼう！'] as Quad,
              e: ['Bí mật nói ra rồi thì không còn là bí mật nữa!', 'Once shared, a secret is no longer a secret!', '¡Un secreto compartido ya no es secreto!', '秘密は打ち明けた瞬間に秘密ではなくなります！'] as Quad,
            },
          ];
          const r = riddlesPool[step % riddlesPool.length];
          list.push({
            id, difficulty: 'medium', category: 'riddle',
            title: loc(r.t), prompt: loc(r.p),
            mechanic: { type: 'lateral_choice', illustration: 'star', options: r.opts as [Puzzle['hints'][0], Puzzle['hints'][0], Puzzle['hints'][0], Puzzle['hints'][0]], correctIndex: r.ci },
            hints: [loc(r.h1), loc(r.h2), loc(r.h3)],
            explanation: loc(r.e),
          });
        } else {
          // Action switches / hold / multi_tap variations
          const maskVariants: boolean[][] = [
            [false, true, true],
            [true, false, true, false],
            [false, true, false, true],
            [true, true, true, false],
            [false, false, true, true],
            [true, false, false, true],
          ];
          const mask = maskVariants[step % maskVariants.length];
          const codeStr = mask.map((v, idx) => (v ? String(idx + 1) : '')).filter(Boolean).join('-');
          list.push({
            id, difficulty: 'medium', category: 'action',
            title: { vi: `Mạch đèn #${id}`, en: `Circuit Lock #${id}`, es: `Circuito #${id}`, ja: `電気回路 #${id}` },
            prompt: {
              vi: `Kích hoạt đúng tổ hợp công tắc (${codeStr}) để thắp sáng bóng đèn!`,
              en: `Flip ONLY switches (${codeStr}) to power the main bulb!`,
              es: `¡Activa SOLO los interruptores (${codeStr}) para encender la luz!`,
              ja: `スイッチ（${codeStr}）だけをONにして電球を光らせよう！`,
            },
            mechanic: {
              type: 'action_meter', mode: 'switches', targetShape: 'bulb',
              requiredValue: mask.filter(Boolean).length, switchCount: mask.length, targetMask: mask,
              meterLabel: { vi: `Bật: ${codeStr}`, en: `ON: ${codeStr}`, es: `ON: ${codeStr}`, ja: `ON: ${codeStr}` },
            },
            hints: [
              { vi: 'Tắt hết các công tắc không nằm trong danh sách.', en: 'Turn OFF any switch not listed.', es: 'Apaga los que no están en la lista.', ja: '指定されていないスイッチはOFFにしよう。' },
              { vi: `Chỉ bật các công tắc: ${codeStr}.`, en: `Turn ON switches: ${codeStr}.`, es: `Enciende: ${codeStr}.`, ja: `${codeStr} だけをONにしよう。` },
              { vi: `Cấu hình: ${mask.map((x) => (x ? 'ON' : 'OFF')).join(', ')}.`, en: `Pattern: ${mask.map((x) => (x ? 'ON' : 'OFF')).join(', ')}.`, es: `Patrón: ${mask.map((x) => (x ? 'ON' : 'OFF')).join(', ')}.`, ja: `設定：${mask.map((x) => (x ? 'ON' : 'OFF')).join(', ')}！` },
            ],
            explanation: { vi: 'Mạch điện đóng kín hoàn hảo!', en: 'Circuit closed cleanly!', es: '¡Circuito completado!', ja: '正しい回路がつながりました！' },
          });
        }
      }
    } else {
      const wp = wordPuzzleData[mod - 5];
      const mult = Math.floor(i / 10) + 1;
      if (mult > 1 && mod === 5) {
        // Variant lily pond day
        const day = 14 + mult * 2;
        list.push({
          id, difficulty: 'medium', category: 'lock',
          title: { vi: `Ao bèo ngày ${day}`, en: `Lily Pond Day ${day}`, es: `Estanque Día ${day}`, ja: `スイレン ${day}日目` },
          prompt: {
            vi: `Bèo nở gấp đôi mỗi ngày. Ngày ${day} phủ kín mặt ao. Hỏi ngày nào phủ được 1/4 mặt ao?`,
            en: `A lily pad doubles daily and covers the pond on Day ${day}. Which day was it 1/4 full?`,
            es: `El nenúfar se duplica diario y llena el lago el día ${day}. ¿Qué día cubría 1/4?`,
            ja: `毎日面積が2倍になるスイレンが${day}日目に池全体を覆いました。1/4を覆ったのは何日目？`,
          },
          mechanic: { type: 'lock_dial', clueDisplay: `×2 / day · Full = Day ${day} · 1/4 = ?`, correctCode: String(day - 2), maxLength: 2 },
          hints: [
            { vi: 'Lùi lại 1 ngày thì còn 1/2 ao.', en: '1 day before full = 1/2 pond.', es: '1 día antes = 1/2 lago.', ja: '1日前が1/2の面積だよ。' },
            { vi: 'Lùi thêm 1 ngày nữa (tức lùi 2 ngày) sẽ còn 1/4 ao!', en: '2 days before full = 1/4 pond!', es: '¡2 días antes = 1/4 del lago!', ja: 'さらに1日前（2日前）が1/4の面積！' },
            { vi: `${day} - 2 = ${day - 2}.`, en: `${day} - 2 = ${day - 2}.`, es: `${day} - 2 = ${day - 2}.`, ja: `${day}−2＝${day - 2}日目！` },
          ],
          explanation: { vi: `Ngày ${day - 2} được 1/4 -> Ngày ${day - 1} được 1/2 -> Ngày ${day} kín ao!`, en: `1/4 on Day ${day - 2} -> 1/2 on Day ${day - 1} -> Full on Day ${day}!`, es: `¡Día ${day - 2} = 1/4!`, ja: `2日前が1/4になります！` },
        });
      } else if (mult > 1 && mod === 6) {
        const baseAge = 4 + mult * 2;
        const nowAge = 40 + mult * 5;
        const diff = baseAge / 2;
        const ans = nowAge - diff;
        list.push({
          id, difficulty: 'medium', category: 'lock',
          title: { vi: `Tuổi em gái #${id}`, en: `Sibling Age #${id}`, es: `Edad #${id}`, ja: `姉妹の年齢 #${id}` },
          prompt: {
            vi: `Lúc tôi ${baseAge} tuổi, em tôi bằng một nửa tuổi tôi. Giờ tôi ${nowAge} tuổi, em tôi mấy tuổi?`,
            en: `When I was ${baseAge}, my brother was half my age. Now I am ${nowAge}. How old is he?`,
            es: `Cuando yo tenía ${baseAge}, mi hermano tenía la mitad. Ahora tengo ${nowAge}. ¿Su edad?`,
            ja: `私が${baseAge}歳のとき弟は半分でした。今私は${nowAge}歳。弟は何歳？`,
          },
          mechanic: { type: 'lock_dial', clueDisplay: `${baseAge} → ${diff}  |  ${nowAge} → ?`, correctCode: String(ans), maxLength: 2 },
          hints: [
            { vi: 'Khoảng cách tuổi luôn cố định theo thời gian.', en: 'Age gap never changes.', es: 'La diferencia de edad es fija.', ja: '年齢差はずっと同じだよ。' },
            { vi: `Hiệu số tuổi = ${baseAge} - ${diff} = ${diff}.`, en: `Difference = ${baseAge} - ${diff} = ${diff} years.`, es: `Diferencia = ${diff} años.`, ja: `年齢差は${diff}歳差！` },
            { vi: `${nowAge} - ${diff} = ${ans}.`, en: `${nowAge} - ${diff} = ${ans}.`, es: `${nowAge} - ${diff} = ${ans}.`, ja: `${nowAge}−${diff}＝${ans}歳！` },
          ],
          explanation: { vi: `Luôn kém ${diff} tuổi nên đáp án là ${ans}!`, en: `Always ${diff} years younger: ${ans}!`, es: `¡Siempre ${diff} años menor: ${ans}!`, ja: `常に${diff}歳下なので${ans}歳です！` },
        });
      } else if (mult > 1 && mod === 7) {
        // Clever numeric pattern locks
        const patterns = [
          { clue: '1=5, 2=25, 3=125, 4=625, 5=?', code: '1', hv: 'Đọc lại vế đầu tiên: "1 = 5" thì "5 = ..."!', he: 'Look at the first equation: if 1=5, then 5=...', hs: 'Mira el inicio: si 1=5, entonces 5=...', hj: '最初の式「1=5」を逆に読むと…' },
          { clue: '3, 6, 12, 24, ?', code: '48', hv: 'Mỗi số nhân đôi số trước.', he: 'Double the previous number.', hs: 'Duplica el anterior.', hj: '前の数を2倍にしているよ。' },
          { clue: '1, 4, 9, 16, 25, ?', code: '36', hv: 'Đây là dãy số bình phương: 1², 2², 3², 4², 5², 6².', he: 'Square numbers: 1², 2², 3², 4², 5², 6².', hs: 'Cuadrados: 1², 2², 3², 4², 5², 6².', hj: '平方数：1², 2², 3², 4², 5², 6²！' },
          { clue: '100, 90, 81, 73, 66, ?', code: '60', hv: 'Hiệu giảm dần: -10, -9, -8, -7, -6.', he: 'Differences shrink: -10, -9, -8, -7, -6.', hs: 'Restas: -10, -9, -8, -7, -6.', hj: '差が -10, -9, -8, -7, -6 と1ずつ減っているよ。' },
          { clue: '2, 3, 5, 7, 11, ?', code: '13', hv: 'Đây là dãy số nguyên tố liên tiếp.', he: 'Consecutive prime numbers.', hs: 'Números primos consecutivos.', hj: '小さい順の素数だよ！' },
        ];
        const pat = patterns[(mult - 2) % patterns.length];
        list.push({
          id, difficulty: 'medium', category: 'lock',
          title: { vi: `Giải mã quy luật #${id}`, en: `Pattern Vault #${id}`, es: `Patrón #${id}`, ja: `法則ロック #${id}` },
          prompt: { vi: 'Tìm con số còn thiếu để mở khóa két sắt!', en: 'Crack the missing number to unlock the vault!', es: '¡Descubre el número para abrir la caja!', ja: '？に入る数字を解読してロックを開けよう！' },
          mechanic: { type: 'lock_dial', clueDisplay: pat.clue, correctCode: pat.code, maxLength: 3 },
          hints: [
            { vi: 'Quan sát kỹ mối liên hệ giữa các số.', en: 'Look carefully at the rule linking the numbers.', es: 'Observa la relación entre los números.', ja: '数字同士のつながりをよく見てみよう。' },
            { vi: pat.hv, en: pat.he, es: pat.hs, ja: pat.hj },
            { vi: `Nhập ${pat.code}.`, en: `Enter ${pat.code}.`, es: `Ingresa ${pat.code}.`, ja: `答えは「${pat.code}」！` },
          ],
          explanation: { vi: `Đáp án chính xác là ${pat.code}!`, en: `The vault code is ${pat.code}!`, es: `¡El código es ${pat.code}!`, ja: `正解は ${pat.code} です！` },
        });
      } else if (mult > 1 && mod === 8) {
        // Scene tap with cover & decoys
        list.push({
          id, difficulty: 'medium', category: 'trick',
          title: { vi: `Tìm chìa khóa vàng #${id}`, en: `Golden Key Hunt #${id}`, es: `Llave oculta #${id}`, ja: `金の鍵探し #${id}` },
          prompt: { vi: 'Chạm vào chiếc chìa khóa thật — cẩn thận bẫy bom bên dưới!', en: 'Find and tap the real key — watch out for traps!', es: '¡Encuentra y toca la llave real — cuidado con trampas!', ja: '本物の鍵を探してタップしよう。罠に気をつけて！' },
          mechanic: {
            type: 'scene_tap', backdrop: 'park',
            objects: [
              { id: 'bomb1', shape: 'bomb', x: 25, y: 58, scale: 1.15, decoy: true },
              { id: 'rock1', shape: 'rock', x: 25, y: 58, scale: 1.35, draggable: true },
              { id: 'key', shape: 'key', x: 74, y: 56, scale: 1.15, isTarget: true },
              { id: 'cloud1', shape: 'cloud', x: 74, y: 56, scale: 1.4, draggable: true },
            ],
          },
          hints: [
            { vi: 'Chìa khóa nằm sau một vật thể có thể kéo được.', en: 'The key is hidden under one of the covers.', es: 'La llave está bajo una cubierta.', ja: '鍵は動かせるものの下に隠れているよ。' },
            { vi: 'Dưới tảng đá là bom, hãy thử kéo đám mây bên phải!', en: 'A bomb is under the rock — move the right-hand cloud instead!', es: 'Hay una bomba bajo la roca — ¡mueve la nube derecha!', ja: '左の岩の下は爆弾！右の雲を動かしてみよう！' },
            { vi: 'Kéo đám mây bên phải ra rồi chạm vào chìa khóa.', en: 'Drag the cloud aside and tap the key.', es: 'Mueve la nube y toca la llave.', ja: '右の雲をどかして鍵をタップしよう！' },
          ],
          explanation: { vi: 'Tránh được bẫy bom dưới đá và tìm đúng chìa khóa!', en: 'You dodged the rock trap and found the key!', es: '¡Evitaste la trampa y hallaste la llave!', ja: '岩の罠を避けて見事鍵を発見しました！' },
        });
      } else if (mult > 1 && mod === 9) {
        // Balance scales with 3-4 weights
        const target = 12 + mult * 2;
        list.push({
          id, difficulty: 'medium', category: 'drag',
          title: { vi: `Cân bằng ${target} kg`, en: `Balance ${target} kg`, es: `Equilibra ${target} kg`, ja: `天秤 ${target}kg` },
          prompt: {
            vi: `Đặt đồ vật lên đĩa phải sao cho nặng đúng ${target} kg!`,
            en: `Balance the right pan to reach exactly ${target} kg!`,
            es: `¡Equilibra el platillo derecho a exactamente ${target} kg!`,
            ja: `右の皿の重さがぴったり ${target}kg になるように乗せよう！`,
          },
          mechanic: {
            type: 'drag_combine', mode: 'balance_scale', targetBalance: target,
            items: [
              { id: 'w1', shape: 'chest', x: 18, y: 74, weight: target - 5, label: `${target - 5}kg` },
              { id: 'w2', shape: 'diamond', x: 38, y: 74, weight: 5, label: '5kg' },
              { id: 'w3', shape: 'rock', x: 58, y: 74, weight: 6, label: '6kg' },
              { id: 'w4', shape: 'apple', x: 78, y: 74, weight: 3, label: '3kg' },
            ],
          },
          hints: [
            { vi: `Tìm hai món cộng lại bằng ${target}.`, en: `Pick items adding up to ${target} kg.`, es: `Elige objetos que sumen ${target} kg.`, ja: `足して${target}kgになる組み合わせを探そう。` },
            { vi: `${target - 5} kg + 5 kg = ${target} kg.`, en: `${target - 5} kg + 5 kg = ${target} kg.`, es: `${target - 5} kg + 5 kg = ${target} kg.`, ja: `${target - 5}kg ＋ 5kg ＝ ${target}kg！` },
            { vi: `Chọn Rương (${target - 5}kg) và Kim cương (5kg).`, en: `Select Chest (${target - 5}kg) and Diamond (5kg).`, es: `Elige Cofre (${target - 5}kg) y Diamante (5kg).`, ja: `宝箱(${target - 5}kg)とダイヤ(5kg)を選んで判定しよう！` },
          ],
          explanation: { vi: `${target - 5} + 5 = ${target} kg hoàn hảo!`, en: `${target - 5} + 5 = ${target} kg balanced!`, es: `¡${target - 5} + 5 = ${target} kg!`, ja: `${target}kgでぴったり釣り合いました！` },
        });
      } else {
        list.push({
          id, difficulty: wp.cat === 'lock' ? 'medium' : 'medium', category: wp.cat,
          title: loc(wp.t), prompt: loc(wp.p),
          mechanic: { type: 'lock_dial', clueDisplay: wp.clue, correctCode: wp.code, maxLength: 3 },
          hints: [loc(wp.h1), loc(wp.h2), loc(wp.h3)],
          explanation: loc(wp.e),
        });
      }
    }
  }
  return list;
}

export const PACK_2_MEDIUM_ALL: Puzzle[] = [
  ...MEDIUM_SPECS.map((item) => ({
    id: item.id,
    difficulty: 'medium' as const,
    category: item.cat,
    title: loc(item.title),
    prompt: loc(item.prompt),
    mechanic: item.mech,
    hints: [loc(item.h1), loc(item.h2), loc(item.h3)] as [Puzzle['hints'][0], Puzzle['hints'][1], Puzzle['hints'][2]],
    explanation: loc(item.exp),
  })),
  ...EXTRA_MEDIUM.map((item) => ({
    id: item.id,
    difficulty: 'medium' as const,
    category: item.cat,
    title: loc(item.title),
    prompt: loc(item.prompt),
    mechanic: item.mech,
    hints: [loc(item.h1), loc(item.h2), loc(item.h3)] as [Puzzle['hints'][0], Puzzle['hints'][1], Puzzle['hints'][2]],
    explanation: loc(item.exp),
  })),
  ...generateMedium76to135(),
];

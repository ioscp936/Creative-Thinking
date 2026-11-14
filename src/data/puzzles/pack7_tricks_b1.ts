import { Difficulty, Puzzle, PuzzleMechanic } from './types';

type Quad = [string, string, string, string];
const loc = (q: Quad) => ({ vi: q[0], en: q[1], es: q[2], ja: q[3] });

export interface Spec7 {
  diff: Difficulty;
  cat: Puzzle['category'];
  t: Quad;
  p: Quad;
  m: PuzzleMechanic;
  h1: Quad;
  h2: Quad;
  h3: Quad;
  e: Quad;
}

export const SPECS_TRICKS_B1: Spec7[] = [
  // 1 (medium)
  {
    diff: 'medium', cat: 'trick',
    t: ['Từ viết sai chính tả', 'Misspelled Everywhere', 'Mal escrita', 'いつも書き間違えられる言葉'],
    p: ['Trong từ điển, từ nào luôn luôn bị viết là "SAI" (tiếng Anh: "INCORRECTLY") dù người giỏi nhất viết lại đi nữa?', 'Which word in every dictionary is always spelled INCORRECTLY?', '¿Qué palabra del diccionario se escribe siempre "INCORRECTAMENTE"?', '辞書の中で、どんな天才が書いても必ず「まちがい」と書かれている言葉は何？'],
    m: {
      type: 'lateral_choice', illustration: 'book',
      options: [
        { vi: 'Chữ "SAI" (Incorrectly)', en: 'The word "Incorrectly"', es: 'La palabra "Incorrectamente"', ja: '「まちがい」という言葉' },
        { vi: 'Chữ "Khó"', en: '"Difficult"', es: '"Difícil"', ja: '「難しい」' },
        { vi: 'Chữ "Huyền bí"', en: '"Mysterious"', es: '"Misterioso"', ja: '「不思議」' },
        { vi: 'Không có từ nào', en: 'None of them', es: 'Ninguna', ja: 'どれでもない' },
      ],
      correctIndex: 0,
    },
    h1: ['Đọc thật chậm câu chữ: không phải viết lỗi chính tả, mà viết đúng chữ đó!', 'Not a typo — literally spelled as that word!', 'Literalmente se escribe así.', 'スペルミスではなく、その単語そのものの話！'],
    h2: ['Chữ nào mang nghĩa là "không đúng / sai"?', 'Which word literally means "not correctly"?', '¿Qué palabra significa "incorrectamente"?', '「まちがい」という言葉はどう書く？'],
    h3: ['Chọn Chữ "SAI" (Incorrectly).', 'Pick The word "Incorrectly".', 'Elige La palabra "Incorrectamente".', '「まちがい」という言葉を選ぼう！'],
    e: ['Dù viết chuẩn 100%, chữ "SAI" (Incorrectly) vẫn mãi viết thành SAI!', 'Even when spelled right, "Incorrectly" is always spelled incorrectly!', '¡Incluso bien escrita dice "incorrectamente"!', '正しく綴っても「まちがい（Incorrectly）」と書かれる定番ダジャレ問題です！'],
  },
  // 2 (medium)
  {
    diff: 'medium', cat: 'riddle',
    t: ['Người đàn ông và chiếc thang máy', 'Rainy Elevator Trick', 'El ascensor en días de lluvia', '雨が降ると最上階へ行ける理由'],
    p: ['Một người đàn ông sống ở tầng 20. Mỗi sáng anh đi thang máy xuống đất đi làm. Chiều về, hôm nào TRỜI MƯA anh bấm thẳng lên tầng 20, còn hôm NẮNG anh chỉ bấm tầng 10 rồi đi bộ 10 tầng còn lại! Tại sao?', 'A man lives on the 20th floor. Every morning he rides the elevator down. Coming home, if it RAINS he rides straight to 20; on SUNNY days he stops at 10 and walks up! Why?', 'Un hombre vive en el piso 20. Cuando LLUEVE sube directo al 20; si hace SOL baja en el 10 y sube a pie. ¿Por qué?', '20階に住む男は、雨の日はエレベーターで20階まで行けますが、晴れの日は10階で降りて階段を使います。なぜ？'],
    m: {
      type: 'lateral_choice', illustration: 'umbrella',
      options: [
        { vi: 'Anh ấy thấp người, trời mưa mới có ô chọc nút 20!', en: 'He is short and uses his umbrella to press 20!', es: '¡Es bajo y usa el paraguas para pulsar el 20!', ja: '背が低く、雨の日は傘で20階ボタンを押せるから！' },
        { vi: 'Anh ấy thích tập thể dục lúc nắng', en: 'He loves sunny workouts', es: 'Le gusta ejercitarse al sol', ja: '晴れの日は運動したいから' },
        { vi: 'Nút 20 bị kẹt khi khô ráo', en: 'Button 20 jams when dry', es: 'El botón 20 falla en seco', ja: '乾燥すると20のボタンが故障する' },
        { vi: 'Thang máy chạy bằng nước mưa', en: 'Rain-powered elevator', es: 'Funciona con lluvia', ja: '雨水で動くエレベーター' },
      ],
      correctIndex: 0,
    },
    h1: ['Ngày mưa anh ta mang theo vật gì trên tay?', 'What extra item does he carry on rainy days?', '¿Qué lleva en la mano cuando llueve?', '雨の日に手に持っているものといえば？'],
    h2: ['Chiều cao của anh ta chỉ với tới nút số 10 — trừ khi có vật dài nối thêm tay!', 'He can only reach button 10 unless he holds something long!', 'Solo alcanza el 10 sin ayuda.', '普段は10階のボタンまでしか手が届かないんだよ！'],
    h3: ['Anh ấy dùng chiếc ô dài để bấm nút tầng 20!', 'He uses his umbrella to reach button 20!', '¡Usa su paraguas para pulsar el 20!', '雨の日は傘の先で20階を押せる！'],
    e: ['Khi trời mưa, chiếc ô giúp người đàn ông thấp bé với tới nút tầng 20 cao tít!', 'On rainy days, his umbrella extends his reach to button 20!', '¡El paraguas alarga su alcance hasta el botón 20!', '背が低いため普段は10階までしか届かず、雨の日に持参する傘で20階を押していました！'],
  },
  // 3 (medium)
  {
    diff: 'medium', cat: 'drag',
    t: ['Cân thăng bằng 21 kg', 'Balance Scale 21 kg', 'Balanza de 21 kg', '天秤で21kgを作ろう'],
    p: ['Chọn các quả nặng đặt lên đĩa phải để cân bằng chính xác 21 kg!', 'Place weights on the right pan to balance exactly 21 kg!', 'Coloca pesas en el platillo derecho hasta sumar 21 kg exactos.', '右の皿に重りを乗せてちょうど21kgに釣り合わせよう！'],
    m: {
      type: 'drag_combine', mode: 'balance_scale', targetBalance: 21,
      items: [
        { id: 'w1', shape: 'rock', x: 0, y: 0, weight: 12, label: '12kg' },
        { id: 'w2', shape: 'book', x: 0, y: 0, weight: 7, label: '7kg' },
        { id: 'w3', shape: 'cheese', x: 0, y: 0, weight: 5, label: '5kg' },
        { id: 'w4', shape: 'apple', x: 0, y: 0, weight: 4, label: '4kg' },
      ],
    },
    h1: ['Thử lấy quả nặng nhất 12kg cộng thêm 2 món nữa!', 'Start with 12kg and add two smaller weights!', 'Empieza por 12 kg y suma dos más.', '一番重い12kgにもう2つ足してみよう！'],
    h2: ['12 + 5 + 4 = 21!', '12 + 5 + 4 = 21!', '12 + 5 + 4 = 21!', '12 ＋ 5 ＋ 4 ＝ 21！'],
    h3: ['Chọn 12kg, 5kg và 4kg rồi kiểm tra.', 'Select 12kg, 5kg, and 4kg.', 'Elige 12 kg, 5 kg y 4 kg.', '12kg・5kg・4kgを選ぼう！'],
    e: ['12kg + 5kg + 4kg = 21kg cân bằng tuyệt đối!', '12 + 5 + 4 = 21 kg balanced!', '¡12 + 5 + 4 = 21 kg exactos!', '12＋5＋4＝21kgで完璧に釣り合いました！'],
  },
  // 4 (medium)
  {
    diff: 'medium', cat: 'trick',
    t: ['Cánh cửa thoát hiểm không chìa', 'Window vs Door Trick', 'Puerta sin llave', '鍵のない部屋からの脱出'],
    p: ['Cửa khóa trái rồi! Chạm vào ổ khóa thì không ăn thua... khoan đã, chữ "KHÓA" trên câu hỏi cũng có thể tương tác chăng? Không, hãy chạm vào CHÍNH GIỮA cánh cửa để gõ ư? Thử kéo chiếc CHÌA KHÓA ẩn sau cục đá xem, hoặc chạm từ "THOÁT"!', 'The door is locked tight and the key is fake! Tap the hidden word ESCAPE inside the clue above? No — drag the rock aside first... wait: tap ESCAPE? Look closely: the prompt says tap "KHÓA" / "ESCAPE"!', '¡La puerta está cerrada y la llave es falsa! Toca la palabra SALIDA escondida arriba.', 'ドアは施錠され、カギも偽物！上の文にある「脱出」という言葉をタップしよう！'],
    m: {
      type: 'scene_tap', backdrop: 'room',
      tapPromptWord: { vi: 'THOÁT', en: 'ESCAPE', es: 'SALIDA', ja: '脱出' },
      objects: [
        { id: 'door', shape: 'door', x: 50, y: 54, scale: 1.4, decoy: true },
        { id: 'key', shape: 'key', x: 22, y: 65, scale: 1.0, decoy: true },
      ],
    },
    h1: ['Cánh cửa và chiếc chìa khóa trên màn chơi đều là giả!', 'Both the door and key on stage are decoys!', 'Tanto la puerta como la llave son señuelos.', 'ステージのドアもカギも全部ダミー！'],
    h2: ['Tìm từ khóa viết HOA nằm trong đề bài phía trên!', 'Look for the uppercase secret word inside the prompt text!', 'Busca la palabra en mayúsculas en el enunciado.', '問題文の中の特定の言葉を探してタップしよう！'],
    h3: ['Chạm vào từ THOÁT (en: ESCAPE) trong câu hỏi.', 'Tap ESCAPE in the prompt.', 'Toca SALIDA en la pregunta.', '問題文の「脱出」をタップ！'],
    e: ['Đừng tin ổ khóa giả — lối thoát nằm ngay trong câu chữ!', 'The real exit was hidden in the prompt text all along!', '¡La salida estaba en el texto!', '偽の鍵に騙されず問題文のキーワードを見抜きました！'],
  },
  // 5 (medium)
  {
    diff: 'medium', cat: 'riddle',
    t: ['Ngọn nến hai đầu', 'Candle That Runs Without Legs', 'Corre sin pies', '足がないのに走るもの'],
    p: ['Cái gì có răng mà chẳng bao giờ biết nhai, lại giúp bạn chải chuốt mỗi sáng?', 'Wait: what has a neck with NO head, two arms with NO hands, and hugs you every chilly morning?', '¿Qué tiene cuello pero no cabeza, dos brazos sin manos y te abriga cada mañana?', '首はあるのに頭がなく、両腕はあるのに手がない。毎朝あなたを温かく包んでくれるものは？'],
    m: {
      type: 'lateral_choice', illustration: 'hat',
      options: [
        { vi: 'Chiếc áo sơ mi / áo khoác', en: 'A shirt / jacket', es: 'Una camisa / chaqueta', ja: 'シャツ・ジャケット' },
        { vi: 'Con búp bê', en: 'A doll', es: 'Una muñeca', ja: '人形' },
        { vi: 'Cái chai thủy tinh', en: 'A glass bottle', es: 'Una botella', ja: 'ガラス瓶' },
        { vi: 'Cây đàn ghi-ta', en: 'A guitar', es: 'Una guitarra', ja: 'ギター' },
      ],
      correctIndex: 0,
    },
    h1: ['Nó được may bằng vải và bạn mặc lên người hằng ngày.', 'Made of fabric — you wear it every day.', 'Es una prenda de vestir.', '毎日体に着る布製品だよ。'],
    h2: ['Nó có cổ áo và hai tay áo!', 'It has a collar (neck) and two sleeves (arms)!', 'Tiene cuello y dos mangas.', '「襟（首）」と「袖（腕）」がついているよね！'],
    h3: ['Chọn Chiếc áo sơ mi / áo khoác.', 'Pick A shirt / jacket.', 'Elige Una camisa / chaqueta.', '「シャツ・ジャケット」を選ぼう！'],
    e: ['Áo có cổ áo và 2 tay áo nhưng chẳng có đầu hay bàn tay nào!', 'A shirt has a neck and arms without a head or hands!', '¡La camisa tiene cuello y brazos sin cabeza ni manos!', 'シャツには首（襟）と腕（袖）がありますが頭と手はありません！'],
  },
  // 6 (medium)
  {
    diff: 'medium', cat: 'visual',
    t: ['Lưới tam giác 3 ngăn', 'Three-Slice Triangle Count', 'Triángulos en 3 franjas', '3分割の三角形の数'],
    p: ['Đếm thật kỹ: hình tam giác lớn bị chia làm 3 phần bởi hai đường thẳng từ đỉnh. Có TẤT CẢ bao nhiêu hình tam giác?', 'A triangle is split from the apex into 3 slices. How many total triangles exist in this figure?', 'Un triángulo se divide en 3 franjas desde la cima. ¿Cuántos triángulos hay en total?', '頂点から2本の線を引き、3つの区画に分けた三角形があります。三角形は全部でいくつある？'],
    m: { type: 'visual_count', visualKind: 'nested_triangles', variant: 2, correctAnswer: 6, min: 1, max: 15 },
    h1: ['Đừng chỉ đếm 3 tam giác nhỏ đơn lẻ!', 'Do not count only the 3 single slices!', 'No cuentes solo los 3 pequeños.', '小さい3つだけ数えたらダメだよ！'],
    h2: ['3 tam giác đơn + 2 tam giác ghép đôi + 1 tam giác lớn nhất!', '3 singles + 2 doubles + 1 whole triangle!', '3 simples + 2 dobles + 1 grande.', '1個分が3つ ＋ 2個合体が2つ ＋ 全体が1つ！'],
    h3: ['3 + 2 + 1 = 6 hình tam giác.', '3 + 2 + 1 = 6 triangles.', '3 + 2 + 1 = 6 triángulos.', '3 ＋ 2 ＋ 1 ＝ 6個！'],
    e: ['Công thức tam giác chia n phần từ đỉnh: 1 + 2 + 3 = 6 hình!', '1 + 2 + 3 = 6 total triangles!', '¡1 + 2 + 3 = 6 triángulos!', '1＋2＋3＝合計6個の三角形が隠れています！'],
  },
  // 7 (medium)
  {
    diff: 'medium', cat: 'trick',
    t: ['Bữa tiệc của hai người cha', 'Two Fathers, Two Sons Fishing', 'Dos padres y dos hijos', '2人の父と2人の息子'],
    p: ['Hai người cha và hai người con cùng đi câu cá. Mỗi người câu được đúng 1 con cá, nhưng khi đếm trong giỏ chỉ có TỔNG CỘNG 3 con cá! Làm sao kỳ vậy?', 'Two fathers and two sons go fishing. Each catches exactly ONE fish, yet they return with only THREE fish total! Who are they?', 'Dos padres y dos hijos van a pescar. Cada uno pesca 1 pez, pero en total solo llevan 3 peces. ¿Cuántas personas eran?', '2人の父親と2人の息子が釣りに行き、全員が1匹ずつ魚を釣ったのに、合計は3匹だけでした。全部で何人いた？'],
    m: { type: 'lock_dial', clueDisplay: '2 Fathers + 2 Sons = ? people', correctCode: '3', maxLength: 2 },
    h1: ['Một người vừa là con, vừa đồng thời là cha!', 'One person can be BOTH a father and a son!', '¡Una misma persona puede ser padre e hijo a la vez!', '1人の人間が「息子」であり「父親」でもある場合があるよ！'],
    h2: ['Ông nội + Bố + Con trai!', 'Grandfather + Father + Son!', 'Abuelo + Padre + Hijo.', 'おじいちゃん ＋ お父さん ＋ 男の子！'],
    h3: ['Chỉ có 3 người tất cả → nhập số 3.', 'Only 3 people total → enter 3.', 'Solo eran 3 personas → ingresa 3.', '人数はたったの「3」人！'],
    e: ['3 thế hệ (Ông nội – Bố – Con): gồm 2 người cha (Ông, Bố) và 2 người con (Bố, Con)!', 'Three generations = 3 people total: 2 fathers and 2 sons!', '¡Abuelo, padre e hijo suman 3 personas!', '祖父・父・子の3人なら「父が2人・子が2人」かつ合計3人になります！'],
  },
  // 8 (medium)
  {
    diff: 'medium', cat: 'action',
    t: ['Nạp năng lượng tên lửa', 'Rocket Boost Hold', 'Carga el cohete', 'ロケット発射長押し'],
    p: ['Tên lửa sắp cất cánh! Nhấn và GIỮ nút kích hoạt đúng 3 giây để nạp đầy bình nhiên liệu!', 'Press and HOLD the rocket booster for 3 full seconds to launch into orbit!', 'Mantén PULSADO el propulsor 3 segundos completos para despegar.', '発射ボタンを3秒間長押ししてロケットに燃料を満タンにしよう！'],
    m: {
      type: 'action_meter', mode: 'hold', targetShape: 'rocket', resultShape: 'star', requiredValue: 3,
      meterLabel: { vi: 'Nhiên liệu đẩy', en: 'Thruster Fuel', es: 'Combustible', ja: '燃料チャージ' },
    },
    h1: ['Đừng chạm nhả liên tục — phải nhấn giữ nguyên!', 'Do not tap rapidly — hold down continuously!', 'No toques rápido, mantén pulsado.', '連打ではなく指を押し続けよう！'],
    h2: ['Giữ trong 3 giây cho đến khi thanh đo đầy 100%.', 'Keep holding for 3 seconds until 100%.', 'Sostén 3 segundos hasta llegar al 100%.', '100%になるまで3秒間そのままキープ！'],
    h3: ['Nhấn giữ biểu tượng tên lửa đủ 3 giây.', 'Hold the rocket icon for 3 seconds.', 'Mantén pulsado el cohete 3 segundos.', 'ロケットを3秒長押ししよう。'],
    e: ['Nhiên liệu đã đầy — tên lửa phóng vút lên quỹ đạo!', 'Booster charged at 100% — liftoff!', '¡Despegue exitoso!', '燃料100%でロケットが無事発射しました！'],
  },
  // 9 (medium)
  {
    diff: 'medium', cat: 'riddle',
    t: ['Cây cầu của bóng tối', 'What Disappears When Named?', 'Desaparece al nombrarlo', '名前を呼ぶと消えるもの'],
    p: ['Thứ gì mỏng manh đến mức chỉ cần bạn cất tiếng GỌI TÊN nó là nó lập tức biến mất?', 'What is so fragile that merely speaking its name breaks it instantly?', '¿Qué es tan frágil que con solo decir su nombre se rompe?', 'とても壊れやすく、その名前を声に出して呼んだ瞬間に消えてしまうものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'bell',
      options: [
        { vi: 'Sự im lặng', en: 'Silence', es: 'El silencio', ja: '静寂（無音）' },
        { vi: 'Cái ly pha lê', en: 'A crystal glass', es: 'Una copa de cristal', ja: 'クリスタルグラス' },
        { vi: 'Tơ nhện', en: 'A spider web', es: 'Una telaraña', ja: 'クモの巣' },
        { vi: 'Bong bóng xà phòng', en: 'A soap bubble', es: 'Una pompa de jabón', ja: 'シャボン玉' },
      ],
      correctIndex: 0,
    },
    h1: ['Không phải đồ vật vỡ — đó là trạng thái âm thanh!', 'Not a physical object — think of sound!', 'No es un objeto físico, ¡es sonido!', '物ではなく「音」に関する状態だよ！'],
    h2: ['Khi cả phòng yên ắng không một tiếng động, chỉ cần bạn nói bất kỳ từ nào lên thì sao?', 'When a room is completely quiet and you speak out loud, what vanishes?', 'Si hablas en un cuarto tranquilo, ¿qué desaparece?', 'シーンと静まり返った場所で声を出したら何が壊れる？'],
    h3: ['Chọn Sự im lặng.', 'Pick Silence.', 'Elige El silencio.', '「静寂（無音）」を選ぼう！'],
    e: ['Chỉ cần mở miệng gọi tên "Sự im lặng" là không gian hết im lặng ngay!', 'Speaking "Silence" out loud breaks the silence immediately!', '¡Al pronunciar "silencio" rompes el silencio!', '「静寂」と口にした瞬間、音が鳴って静寂は破られてしまいます！'],
  },
  // 10 (medium)
  {
    diff: 'medium', cat: 'logic',
    t: ['Sắp xếp kích cỡ hành tinh', 'Scale Order Ladder', 'Escala de tamaño', '小さい順に並べよう'],
    p: ['Sắp xếp 4 vật thể sau theo kích thước thực tế ngoài đời từ NHỎ NHẤT đến LỚN NHẤT!', 'Sort these 4 real-world objects from SMALLEST to LARGEST!', 'Ordena estos 4 objetos de MENOR a MAYOR tamaño real.', '次の4つを現実世界のサイズで「小さい順」に並べよう！'],
    m: {
      type: 'order_sort',
      items: [
        { id: 'planet', shape: 'planet', label: { vi: 'Sao Thổ', en: 'Saturn', es: 'Saturno', ja: '土星' } },
        { id: 'coin', shape: 'coin', label: { vi: 'Đồng xu', en: 'Coin', es: 'Moneda', ja: 'コイン' } },
        { id: 'car', shape: 'car', label: { vi: 'Ô tô', en: 'Car', es: 'Coche', ja: '自動車' } },
        { id: 'book', shape: 'book', label: { vi: 'Quyển sách', en: 'Book', es: 'Libro', ja: '本' } },
      ],
      correctOrder: ['coin', 'book', 'car', 'planet'],
    },
    h1: ['Vật nhỏ nhất bỏ vừa túi quần.', 'Smallest fits in your pocket.', 'El más pequeño cabe en el bolsillo.', '一番小さいのはポケットに入るもの！'],
    h2: ['Đồng xu < Quyển sách < Ô tô < Sao Thổ.', 'Coin < Book < Car < Saturn.', 'Moneda < Libro < Coche < Saturno.', 'コイン ＜ 本 ＜ 自動車 ＜ 土星。'],
    h3: ['Xếp thứ tự: Đồng xu → Sách → Ô tô → Sao Thổ.', 'Order: Coin → Book → Car → Saturn.', 'Orden: Moneda → Libro → Coche → Saturno.', 'コイン → 本 → 自動車 → 土星 の順！'],
    e: ['Từ đồng xu nhỏ xíu tới hành tinh Sao Thổ khổng lồ!', 'From pocket coin all the way up to ringed Saturn!', '¡De la moneda al gigante Saturno!', 'ポケットサイズのコインから巨大な土星までバッチリ並びました！'],
  },
  // 11 (medium)
  {
    diff: 'medium', cat: 'trick',
    t: ['Chữ cái biến mất', 'Disappearing Letter Trick', 'Letra desaparecida', '消えたアルファベット'],
    p: ['Mật mã cửa kho báu là số lượng chữ cái "E" trong bảng chữ cái tiếng Anh (A đến Z) — khoan! Ý mình là trong cả BẢNG CHỮ CÁI A-Z có bao nhiêu chữ E?', 'How many letter "E"s appear in the standard English alphabet (A through Z)?', '¿Cuántas letras "E" hay en el alfabeto español completo?', '英語のアルファベット（AからZまで）の中に「E」の文字はいくつある？'],
    m: { type: 'lock_dial', clueDisplay: 'A B C D E F ... Z → Count "E" = ?', correctCode: '1', maxLength: 2 },
    h1: ['Đừng đếm chữ E trong câu văn dài — chỉ đếm trong bảng chữ cái chuẩn thôi!', 'Not inside a sentence — only inside the 26-letter alphabet!', 'Solo en las letras del abecedario.', '文章の中ではなく、A〜Zの26文字の中だけ数えよう！'],
    h2: ['A, B, C, D, [E], F, G... Z — mỗi chữ cái chỉ xuất hiện đúng 1 lần!', 'Each letter appears exactly once in the alphabet!', 'Cada letra aparece solo una vez.', '各アルファベットは1回ずつしか登場しないよね！'],
    h3: ['Chỉ có đúng 1 chữ E.', 'Just 1 letter E.', 'Solo 1 letra E.', '答えは「1」！'],
    e: ['Trong bảng chữ cái A-Z mỗi ký tự chỉ có duy nhất 1 bản thôi!', 'There is only one "E" in the alphabet!', '¡Solo hay una "E" en el abecedario!', 'アルファベット表には「E」は当然1つしかありません！'],
  },
  // 12 (medium)
  {
    diff: 'medium', cat: 'drag',
    t: ['Làm tan băng tìm chìa khóa', 'Melt the Ice Block', 'Derrite el hielo', '氷を溶かしてカギを出そう'],
    p: ['Chiếc chìa khóa bị đóng băng cứng ngắc rồi! Làm thế nào để lấy nó ra nhanh nhất?', 'The golden key is frozen inside solid ice! Free it right away!', '¡La llave está congelada! Libérala rápidamente.', 'カギが氷の中に閉じ込められた！どうやって取り出す？'],
    m: {
      type: 'drag_combine', mode: 'drop_on_target', backdrop: 'room',
      items: [
        { id: 'ice', shape: 'ice', x: 68, y: 55, scale: 1.3 },
        { id: 'fire', shape: 'fire', x: 24, y: 36, scale: 1.2 },
        { id: 'water', shape: 'water', x: 24, y: 72, scale: 1.1 },
        { id: 'umbrella', shape: 'umbrella', x: 50, y: 24, scale: 1.0 },
      ],
      sourceId: 'fire', targetId: 'ice',
    },
    h1: ['Nước lạnh hay chiếc ô không làm tan băng được đâu.', 'Cold water or an umbrella will not melt ice.', 'El agua fría no derrite el hielo.', '冷たい水や傘では氷は溶けないよ。'],
    h2: ['Dùng ngọn lửa nóng rực để làm tan tảng băng!', 'Use the warm fire to melt the frozen block!', 'Usa el fuego para derretir el hielo.', '熱い炎を氷に近づけて溶かそう！'],
    h3: ['Kéo ngọn lửa đặt lên tảng băng.', 'Drag the fire onto the ice.', 'Arrastra el fuego sobre el hielo.', '炎を氷の上へドラッグ！'],
    e: ['Ngọn lửa làm tan chảy tảng băng trong nháy mắt!', 'Heat from the fire melted the ice right open!', '¡El fuego derritió el hielo al instante!', '炎の熱で氷が溶けてカギが取り出せました！'],
  },
  // 13 (medium)
  {
    diff: 'medium', cat: 'riddle',
    t: ['Người không bao giờ già ở tuổi 29', 'Born Once Every Four Years', 'Cumpleaños cada 4 años', '4年に1回しか年を取らない？'],
    p: ['Bác sĩ Nam năm nay tròn 48 tuổi nhưng mới chỉ tổ chức đúng 12 lần sinh nhật đúng ngày! Sinh nhật bác sĩ rơi vào ngày nào trong tháng?', 'Uncle Leo is 48 years old, yet he has only celebrated 12 real birthdays on his exact birth date! Which day of the month was he born on?', 'Leo tiene 48 años, pero solo ha celebrado 12 cumpleaños en su fecha exacta. ¿Qué día del mes nació?', 'レオさんは今年48歳ですが、誕生日の日付が来たのはまだ12回しかありません。彼は月の何日に生まれた？'],
    m: { type: 'lock_dial', clueDisplay: '48 yrs ÷ 12 birthdays → Feb ?th', correctCode: '29', maxLength: 2 },
    h1: ['Ngày đặc biệt này chỉ xuất hiện vào năm nhuận (4 năm 1 lần)!', 'This rare calendar day only exists in leap years!', '¡Este día solo existe en años bisiestos!', '4年に1度の「うるう年」にしか来ない日付といえば？'],
    h2: ['Tháng Hai của năm nhuận có thêm 1 ngày ở cuối tháng.', 'Leap-year February has one extra day at the end.', 'Febrero bisiesto tiene un día extra.', 'うるう年の2月の最後の日！'],
    h3: ['Ngày 29 (tháng 2) → nhập 29.', 'February 29th → enter 29.', '29 de febrero → ingresa 29.', '答えは「29」日！'],
    e: ['Sinh ngày 29/2 năm nhuận nên 4 năm mới có đúng 1 ngày sinh nhật trên lịch!', 'Born on February 29 (leap day), so his date appears once every 4 years!', '¡Nació el 29 de febrero!', '2月29日生まれなので、4年に1度しか正確な誕生日が巡ってきません！'],
  },
  // 14 (medium)
  {
    diff: 'medium', cat: 'logic',
    t: ['Chạm 2 ô đối xứng ngang', 'Two-Tap Row Lights-Out', 'Dos toques horizontales', '2回で全点灯チャレンジ'],
    p: ['Chạm ĐÚNG 2 ô để toàn bộ bảng Lights-Out 3×3 bật sáng!', 'Tap exactly TWO tiles to light up all 9 tiles on this Lights-Out board!', '¡Toca exactamente DOS casillas para encender las 9!', 'ちょうど2回タップして全9マスを点灯させよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'lights_out',
      gridSize: 3,
      // Tap 1 (0,1,2,4) and 7 (4,6,7,8) => flips {0,1,2,6,7,8}
      initialGrid: [false, false, false, true, true, true, false, false, false],
      allOnRequired: true,
    },
    h1: ['Hàng giữa đã sáng hết rồi; hàng trên và hàng dưới đang tắt toàn bộ.', 'The middle row is ON; top and bottom rows are completely OFF.', 'La fila central está encendida; arriba y abajo apagadas.', '真ん中の行は全点灯、上の行と下の行が消えているよ。'],
    h2: ['Chạm ô giữa hàng trên (lật cả hàng trên + tâm) rồi chạm ô giữa hàng dưới (lật hàng dưới + sửa lại tâm)!', 'Tap top-center and bottom-center — the center tile flips twice and stays ON!', 'Toca arriba-centro y abajo-centro.', '「上の中央」と「下の中央」を1回ずつ押すと真ん中は2回反転して元通り！'],
    h3: ['Chạm ô (hàng 1, cột 2) và ô (hàng 3, cột 2).', 'Tap top-center and bottom-center tiles.', 'Toca el centro superior y el centro inferior.', '上段真ん中と下段真ん中をタップ！'],
    e: ['Hai ô giữa trên-dưới phối hợp lật sáng hàng trên và hàng dưới hoàn hảo!', 'Top-center and bottom-center canceled out at the middle while lighting both edges!', '¡Centro superior e inferior encendieron ambas filas!', '上下の中央2つをタップすることで、真ん中を保ったまま上下2行を点灯できました！'],
  },
  // 15 (medium)
  {
    diff: 'medium', cat: 'trick',
    t: ['Ai nhìn thấy mọi thứ trừ bản thân?', 'Sees All But Itself', 'Todo lo ve menos a sí', '自分以外は全部見えるもの'],
    p: ['Thứ gì phản chiếu rõ nét gương mặt của tất cả mọi người, nhưng bản thân nó lại không thể tự nhìn thấy mình?', 'What shows every single face in crystal clarity, yet has no eyes to see itself?', '¿Qué muestra cada rostro con claridad pero no puede verse a sí mismo?', 'みんなの顔をハッキリ映し出すのに、自分自身の顔は見ることができないものは？'],
    m: {
      type: 'lateral_choice', illustration: 'diamond',
      options: [
        { vi: 'Chiếc gương soi', en: 'A mirror', es: 'Un espejo', ja: '鏡' },
        { vi: 'Đôi mắt kính', en: 'Eyeglasses', es: 'Unas gafas', ja: 'メガネ' },
        { vi: 'Mặt trời', en: 'The Sun', es: 'El Sol', ja: '太陽' },
        { vi: 'Tờ báo', en: 'A newspaper', es: 'Un periódico', ja: '新聞' },
      ],
      correctIndex: 0,
    },
    h1: ['Bạn đứng trước nó mỗi sáng để chải tóc.', 'You stand in front of it every morning.', 'Te miras en él cada mañana.', '毎朝身だしなみを整えるときに見るものだよ。'],
    h2: ['Nó phản xạ ánh sáng như tấm kính bạc.', 'It reflects every face placed before it.', 'Refleja todo rostro que tiene delante.', '目の前に立った人の顔をそのまま映し出す！'],
    h3: ['Chọn Chiếc gương soi.', 'Pick A mirror.', 'Elige Un espejo.', '「鏡」を選ぼう！'],
    e: ['Chiếc gương soi thấy vạn vật nhưng chẳng bao giờ tự soi thấy chính mình!', 'A mirror reflects everything else, never itself!', '¡El espejo todo lo refleja menos a sí mismo!', '鏡は他のすべてを映しますが、自分自身を見ることはできません！'],
  },
  // 16 (medium)
  {
    diff: 'medium', cat: 'riddle',
    t: ['Chú gà trống trên mái nhọn', 'Rooster Egg Roll Trick', 'Gallo en el tejado', '屋根の上のニワトリの卵'],
    p: ['Một chú gà trống đậu ngay trên đỉnh mái nhà chữ A dốc 45°. Nếu chú gà đẻ một quả trứng, hỏi quả trứng lăn về bên trái hay bên phải?', 'A proud rooster sits squarely on the pointed ridge of a steep barn roof. If it lays an egg, will the egg roll down the LEFT or RIGHT slope?', 'Un gallo está en la cima de un tejado inclinado. Si pone un huevo, ¿rodará a la IZQUIERDA o a la DERECHA?', '傾斜のある屋根のてっぺんにオンドリが1羽座っています。もし卵を産んだら、右と左のどちらに転がり落ちる？'],
    m: {
      type: 'lateral_choice', illustration: 'egg',
      options: [
        { vi: 'Gà TRỐNG đâu có đẻ trứng!', en: 'Roosters do NOT lay eggs!', es: '¡Los gallos NO ponen huevos!', ja: 'オンドリは卵を産まない！' },
        { vi: 'Lăn sang bên trái theo hướng gió', en: 'Rolls left with the wind', es: 'Rueda a la izquierda', ja: '風向きで左に転がる' },
        { vi: 'Lăn sang bên phải theo trọng lực', en: 'Rolls right by gravity', es: 'Rueda a la derecha', ja: '右に転がる' },
        { vi: 'Đứng yên ngay đỉnh mái', en: 'Balances on top', es: 'Se queda quieto arriba', ja: 'てっぺんに止まる' },
      ],
      correctIndex: 0,
    },
    h1: ['Đừng xét góc nghiêng mái nhà hay hướng gió!', 'Do not calculate roof slope or wind!', 'No calcules la pendiente del tejado.', '屋根の角度も風向きも関係ないよ！'],
    h2: ['Con vật trên mái là gà MÁI hay gà TRỐNG?', 'Is a rooster male or female?', '¿El gallo es macho o hembra?', '屋根にいるのは「メンドリ」ではなく「オンドリ」！'],
    h3: ['Gà trống không đẻ trứng được!', 'Roosters cannot lay eggs!', '¡Los gallos no ponen huevos!', 'オンドリは卵を産めない！'],
    e: ['Chỉ gà mái mới đẻ trứng — gà trống đậu trên mái thì chẳng có quả trứng nào lăn xuống cả!', 'Roosters are male — no egg will ever be laid!', '¡Solo las gallinas ponen huevos!', 'オスのニワトリ（オンドリ）はそもそも卵を産みません！'],
  },
  // 17 (medium)
  {
    diff: 'medium', cat: 'visual',
    t: ['Bậc thang lên tháp', 'Hidden Staircase Blocks', 'Bloques bajo la escalera', '階段の段数クイズ'],
    p: ['Đếm xem cầu thang trong hình có chính xác bao nhiêu bậc bước lên từ đáy tới đỉnh?', 'Count carefully: how many distinct steps make up this staircase?', 'Cuenta con cuidado: ¿cuántos escalones tiene esta escalera?', 'この階段のイラストには、下から上まで全部で何段のステップがある？'],
    m: { type: 'visual_count', visualKind: 'stairs_steps', variant: 6, correctAnswer: 6, min: 2, max: 12 },
    h1: ['Đếm từng mặt phẳng nằm ngang để đặt chân lên!', 'Count every horizontal flat tread you step on!', 'Cuenta cada superficie plana horizontal.', '足を乗せる平らな面を1段ずつ下から数えよう！'],
    h2: ['1, 2, 3, 4, 5... thêm bậc cao nhất nữa!', '1, 2, 3, 4, 5... plus the top step!', 'Cinco abajo más el último arriba.', '1、2、3、4、5… 一番上も含めて！'],
    h3: ['Có đúng 6 bậc thang.', 'There are 6 steps.', 'Hay 6 escalones.', '全部で「6」段！'],
    e: ['Đếm đủ từng mặt bậc từ chân lên đỉnh ta có đúng 6 bậc thang!', 'Counting every horizontal step from bottom to top gives 6!', '¡Son exactamente 6 escalones!', '一番下から最上段まで数えるとちょうど6段です！'],
  },
  // 18 (medium)
  {
    diff: 'medium', cat: 'trick',
    t: ['Bí mật chữ cái tiếng Việt', 'Vowel Trap Code', 'Código de vocales', 'アルファベット数列'],
    p: ['Khám phá quy luật dãy chữ cái đầu: M, H, B, B, N, S, B, [?]. Chữ cái tiếp theo đứng thứ mấy trong tiếng Việt? (Gợi ý: đếm số 1, 2, 3... bằng chữ cái đầu, hoặc tìm số thứ tự của nó!)', 'Find the next number in this sneaky word sequence: O(1), T(2), T(3), F(4), F(5), S(6), S(7), E(?) — wait: what NUMBER does E stand for?', 'Completa la secuencia secreta: U(1), D(2), T(3), C(4), C(5), S(6), S(7), O(?) — ¿qué número es O?', '暗号数列を解け：O(1), T(2), T(3), F(4), F(5), S(6), S(7), E(？) — ？に入る数字は何？'],
    m: { type: 'lock_dial', clueDisplay: '1, 2, 3, 4, 5, 6, 7, ?', correctCode: '8', maxLength: 2 },
    h1: ['Một(M), Hai(H), Ba(B), Bốn(B), Năm(N), Sáu(S), Bảy(B)... hoặc One, Two, Three...!', 'Read each letter as a number name: One, Two, Three, Four...', 'Uno, Dos, Tres, Cuatro, Cinco...', 'One, Two, Three, Four… 数字の英語の頭文字だよ！'],
    h2: ['Sau Bảy (7) / Seven (7) là Tám (8) / Eight (8)!', 'After Seven comes Eight!', 'Después del siete viene el ocho.', '7（Seven）の次は 8（Eight）！'],
    h3: ['Đáp án là số 8.', 'The answer is 8.', 'La respuesta es 8.', '答えは「8」！'],
    e: ['Dãy chữ cái đại diện cho các số đếm liên tiếp 1 đến 8!', 'The letters represent 1 through 8 — next is 8!', '¡Representan los números del 1 al 8!', '1から順に数えて8番目の「8」が正解です！'],
  },
  // 19 (medium)
  {
    diff: 'medium', cat: 'drag',
    t: ['Gặp nhau giữa bầu trời', 'Ignite the Cold Lamp', 'Enciende la lámpara', '電球を光らせよう'],
    p: ['Bóng đèn trên sân khấu tắt tối om rồi! Ghép 2 vật phù hợp lại với nhau để thắp sáng căn phòng!', 'The stage bulb is completely out! Combine the right pair of objects to light up the idea!', '¡La bombilla está apagada! Combina los objetos correctos para encenderla.', '電球が消えているよ！正しい2つを組み合わせて光を灯そう！'],
    m: {
      type: 'drag_combine', mode: 'combine_pair', backdrop: 'night',
      pairIds: ['bulb', 'sun'],
      items: [
        { id: 'bulb', shape: 'bulb', x: 70, y: 54, scale: 1.2 },
        { id: 'sun', shape: 'sun', x: 26, y: 34, scale: 1.15 },
        { id: 'ice', shape: 'ice', x: 26, y: 72, scale: 1.0 },
        { id: 'rock', shape: 'rock', x: 50, y: 74, scale: 1.0 },
      ],
    },
    h1: ['Đá tảng hay băng giá không thể tạo ra ánh sáng.', 'Ice and rock carry zero light energy.', 'Ni el hielo ni la roca dan luz.', '氷や岩からは光は生まれないよ。'],
    h2: ['Kéo Mặt Trời rực sáng ghép vào chiếc bóng đèn!', 'Combine the glowing Sun with the Bulb!', 'Une el Sol brillante con la bombilla.', '太陽を電球に重ねてエネルギーを与えよう！'],
    h3: ['Kéo Mặt Trời thả lên Bóng đèn.', 'Drag the Sun onto the Bulb.', 'Arrastra el Sol sobre la bombilla.', '太陽を電球にドラッグ！'],
    e: ['Năng lượng mặt trời đã thắp sáng bóng đèn rực rỡ!', 'Solar power lit the bulb brightly!', '¡La energía solar encendió la bombilla!', '太陽のエネルギーで見事電球が点灯しました！'],
  },
  // 20 (hard)
  {
    diff: 'hard', cat: 'trick',
    t: ['Cây cầu qua đảo 5 phút', 'Rope Bridge Torch Dilemma', 'Puente y antorcha', '5分間しか渡れない橋？'],
    p: ['Một con tàu thủy chở hàng nặng đang neo ở cảng. Tối nay anh bảo vệ muốn mang 1 chiếc hộp qua cây cầu hẹp chỉ chịu được 1 người, nhưng anh ta có 2 quả bóng vàng mỗi quả nặng 50kg còn anh nặng 60kg — khoan: làm sao anh mang hết qua được trong 1 lượt? Không, anh ta có 3 quả táo mỗi quả 50g — anh ta chỉ việc TUNG HỨNG từng quả qua ư? Chọn cách thông minh nhất cho 3 quả cầu sắt nặng 2kg qua cầu chịu tối đa 62kg (anh nặng 60kg)!', 'A 60 kg courier must carry THREE 2 kg gold bars across a fragile bridge that snaps at anything over 62 kg. How can he cross in ONE trip without leaving any bar behind?', 'Un mensajero de 60 kg debe cruzar un puente que aguanta máximo 62 kg llevando TRES lingotes de 2 kg (66 kg total) en UN solo viaje. ¿Cómo?', '体重60kgの配達員が、最大耐荷重62kgの橋を「2kgの金の延べ棒3本（合計66kg）」を持って1回で渡りきらなければなりません。どうすれば渡れる？'],
    m: {
      type: 'lateral_choice', illustration: 'coin',
      options: [
        { vi: 'Anh ta tung hứng 3 thỏi vàng (luôn có 1 thỏi trên không trung)!', en: 'Wait—actually juggling adds downward impulse! Wait: drop 1? No: toss 1 bar ahead across? Or classic riddle answer: juggle so 2 kg is in the air!', es: '¡Hace malabares para que siempre haya un lingote en el aire!', ja: 'ジャグリングをして常に1本を空中に浮かせる（なぞなぞの定番答え）！' },
        { vi: 'Cắt bớt 1 cánh tay', en: 'Cut off an arm', es: 'Cortarse un brazo', ja: '片腕を切る' },
        { vi: 'Chạy thật nhanh gấp 10 lần', en: 'Sprint 10x faster', es: 'Correr 10 veces más rápido', ja: '10倍の速さで走る' },
        { vi: 'Ném cả 3 thỏi xuống sông', en: 'Throw all 3 into the river', es: 'Tirar los 3 al río', ja: '3本とも川に捨てる' },
      ],
      correctIndex: 0,
    },
    h1: ['Đây là câu đố kinh điển về "làm sao giảm bớt 2 kg đang đè lên mặt cầu cùng lúc".', 'Classic brain teaser: keep only 2 bars in your hands at any instant!', 'Acertijo clásico: ¡lleva solo dos en las manos cada instante!', '有名ななぞなぞ：手の中には常に2本までしか持たない方法！'],
    h2: ['Nếu tung hứng 3 món luân phiên thì luôn có ít nhất 1 thỏi đang bay trên không!', 'Juggling keeps one bar airborne at any snapshot in time!', 'Al hacer malabares siempre hay uno en el aire.', 'ジャグリングなら常に1本が宙に浮いているよね！'],
    h3: ['Chọn phương án tung hứng 3 thỏi vàng!', 'Pick juggling the 3 bars!', 'Elige hacer malabares.', '「ジャグリングをする」を選ぼう！'],
    e: ['Dù ngoài đời lực đẩy khi ném sẽ tăng trọng lực tức thời, trong thế giới câu đố mẹo thì "tung hứng" là đáp án huyền thoại!', 'In classic riddle lore, juggling keeps one bar off your hands—though physics notes catching force breaks the bridge in real life!', '¡En los acertijos clásicos, los malabares son la respuesta famosa!', '現実の物理では投げる反動でアウトですが、なぞなぞの世界では「ジャグリング」が伝説の正解です！'],
  },
  // 21 (hard)
  {
    diff: 'hard', cat: 'riddle',
    t: ['Tòa nhà 100 cửa sổ', 'All-South Polar House', 'Casa mirando al sur', '4面すべて南向きの家'],
    p: ['Một ngôi nhà hình vuông kỳ lạ: cả 4 bức tường đều có cửa sổ hướng thẳng về phía NAM! Bỗng có một con gấu to lớn đi ngang qua. Con gấu đó có màu gì?', 'A square house is built so all four walls face straight SOUTH. A giant bear strolls past the window. What color is the bear?', 'Una casa cuadrada tiene todas sus 4 paredes mirando al SUR. Pasa un oso enorme. ¿De qué color es el oso?', '4つの壁すべてが「真南」を向いている不思議な四角い家があります。窓の外を巨大なクマが通り過ぎました。そのクマは何色？'],
    m: {
      type: 'lateral_choice', illustration: 'planet',
      options: [
        { vi: 'Màu TRẮNG (nhà dựng ở Bắc Cực)', en: 'White (the house is at the North Pole)', es: 'Blanco (la casa está en el Polo Norte)', ja: '白（北極点に建っているからホッキョクグマ）' },
        { vi: 'Màu Nâu rừng nhiệt đới', en: 'Tropical brown', es: 'Marrón tropical', ja: '茶色' },
        { vi: 'Màu Đen đêm tối', en: 'Pitch black', es: 'Negro', ja: '黒' },
        { vi: 'Màu Vàng cam', en: 'Orange', es: 'Naranja', ja: 'オレンジ' },
      ],
      correctIndex: 0,
    },
    h1: ['Trên Trái Đất chỉ có duy nhất 1 điểm mà đi hướng nào cũng là hướng Nam!', 'There is only ONE spot on Earth where every single direction points South!', 'Solo hay un punto en la Tierra donde todo apunta al Sur.', '地球上でどの方向を向いても「南」になる場所は1ヶ所だけ！'],
    h2: ['Chính là Cực Bắc địa lý (North Pole)!', 'The geographic North Pole!', '¡El Polo Norte!', '北極点のど真ん中だよ！'],
    h3: ['Loài gấu duy nhất ở Bắc Cực là gấu trắng (Polar Bear)!', 'Only white polar bears live at the North Pole!', '¡Solo viven osos polares blancos!', '北極に住むクマといえばシロクマ（白色）！'],
    e: ['Ở đúng điểm Bắc Cực, mọi hướng đều chỉ về Nam — nên chú gấu đi ngang chắc chắn là gấu trắng Bắc Cực!', 'At the North Pole every wall faces South, so the bear must be a white polar bear!', '¡En el Polo Norte todos los muros miran al Sur: es un oso blanco!', '北極点では全方向が南になり、そこにいるクマはホッキョクグマ（白）しかいません！'],
  },
  // 22 (hard)
  {
    diff: 'hard', cat: 'logic',
    t: ['Ma trận đường chéo Lights-Out', 'Diagonal Trio Lights-Out', 'Diagonal Lights-Out', '対角線3タップ全点灯'],
    p: ['Chạm đúng 3 ô trên ĐƯỜNG CHÉO CHÍNH để thắp sáng toàn bộ ma trận 3×3!', 'Tap the 3 diagonal tiles (top-left to bottom-right) to turn ALL 9 tiles ON!', '¡Toca las 3 casillas de la diagonal principal para encender las 9!', '対角線上の3マスをタップして全9マスを点灯させよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'lights_out',
      gridSize: 3,
      // Tap 0, 4, 8 => toggles ONLY {0, 4, 8}!
      initialGrid: [false, true, true, true, false, true, true, true, false],
      allOnRequired: true,
    },
    h1: ['Nhìn xem 3 ô đang tắt tạo thành hình gì?', 'Notice which 3 tiles are currently OFF?', '¿Qué forma dibujan las 3 casillas apagadas?', '消えている3マスがどんな形に並んでいるか見てみよう！'],
    h2: ['Khi bấm cả 3 ô đường chéo, các ô xung quanh bị đảo 2 lần nên giữ nguyên, chỉ 3 ô đường chéo bật sáng!', 'Tapping all 3 diagonal tiles flips neighbors twice (canceling out) and lights the diagonal!', 'Los vecinos se invierten dos veces y quedan iguales.', '対角線上の3つを押すと周りのマスは偶数回反転して元のまま、対角線だけが光るよ！'],
    h3: ['Chạm (1,1), (2,2) và (3,3).', 'Tap top-left, center, and bottom-right tiles.', 'Toca las 3 de la diagonal principal.', '左上・真ん中・右下の3つをタップ！'],
    e: ['Phép đối xứng cực đẹp: chạm 3 ô đường chéo tự triệt tiêu mọi ô phụ!', 'Diagonal XOR symmetry flips only the main diagonal!', '¡La diagonal principal cancela todos los bordes!', '隣り合う影響がすべて打ち消し合い、対角線の3マスだけが反転しました！'],
  },
  // 23 (hard)
  {
    diff: 'hard', cat: 'trick',
    t: ['Đồng hồ 6 tiếng chuông', 'Clock Strikes Six vs Twelve', 'Campanadas del reloj', '時計の鐘が12回鳴る時間'],
    p: ['Một chiếc đồng hồ quả lắc mất đúng 5 giây để đánh 6 tiếng chuông vào lúc 6 giờ. Hỏi vào lúc 12 giờ, nó mất bao nhiêu giây để đánh xong 12 tiếng chuông?', 'A grandfather clock takes 5 seconds to strike 6 o’clock (6 chimes). How many seconds does it take to strike 12 o’clock (12 chimes)?', 'Un reloj tarda 5 segundos en dar las 6 (6 campanadas). ¿Cuántos segundos tarda en dar las 12 (12 campanadas)?', '6時のときに6回の鐘を鳴らすのに5秒かかる時計があります。では12時のときに12回の鐘を鳴らし終えるまで何秒かかる？'],
    m: { type: 'lock_dial', clueDisplay: '6 chimes = 5s → 12 chimes = ? s', correctCode: '11', maxLength: 2 },
    h1: ['Không phải 10 giây đâu nhé — đó là bẫy tỉ lệ thuận!', 'It is NOT 10 seconds — do not simply double 5!', '¡Cuidado, no son 10 segundos!', '5秒 × 2 ＝ 10秒… とすると引っかかるよ！'],
    h2: ['6 tiếng chuông chỉ có 5 khoảng nghỉ giữa các tiếng (1 giây mỗi khoảng)!', '6 chimes have only 5 gaps between them = 1 second per gap!', 'Entre 6 campanadas hay solo 5 intervalos de 1 segundo.', '6回鳴る間の「間隔」は5つ（1つ1秒）！'],
    h3: ['12 tiếng chuông có 11 khoảng nghỉ → 11 giây!', '12 chimes have 11 gaps → 11 seconds!', '12 campanadas tienen 11 intervalos → 11 segundos.', '12回鳴る間の間隔は11個 ＝ 「11」秒！'],
    e: ['Tiếng chuông đầu tiên vang lên ở giây 0! Nên 12 tiếng chuông chỉ có 11 khoảng 1 giây = 11 giây!', 'The first chime rings at t = 0! So 12 chimes span 11 intervals = 11 seconds!', '¡La primera suena en t=0, así que hay 11 intervalos = 11s!', '1回目が0秒目に鳴るため、12回目までは11個の間隔＝11秒かかります！'],
  },
  // 24 (hard)
  {
    diff: 'hard', cat: 'riddle',
    t: ['Cơn bão nửa đêm', 'Midnight Rain Forecast', 'Lluvia a medianoche', '真夜中の雨と72時間後'],
    p: ['Nếu lúc 12 giờ ĐÊM nay trời đang mưa rào tầm tã, liệu sau đúng 72 tiếng nữa trời có thể NẮNG CHÓI CHANG được không?', 'If it is pouring rain at midnight tonight, can there possibly be bright sunshine 72 hours later?', 'Si llueve fuerte a medianoche hoy, ¿puede hacer un sol radiante exactamente 72 horas después?', '今日の深夜0時に激しい雨が降っているとします。では72時間後に太陽がサンサンと輝くことはある？'],
    m: {
      type: 'lateral_choice', illustration: 'sun',
      options: [
        { vi: 'Không! 72 giờ sau vẫn là 12 giờ ĐÊM!', en: 'No — 72 hours later is still midnight!', es: '¡No! 72 horas después sigue siendo medianoche.', ja: 'ありえない！72時間後も真夜中（0時）だから！' },
        { vi: 'Có thể, nếu bão tan nhanh', en: 'Yes, if the storm clears', es: 'Sí, si escampa', ja: '雨が止めばありえる' },
        { vi: 'Tùy theo mùa hạ hay đông', en: 'Depends on the season', es: 'Depende de la estación', ja: '季節による' },
        { vi: 'Có thể, nếu độ ẩm thấp', en: 'Yes, with low humidity', es: 'Sí, con baja humedad', ja: '湿度が低ければありえる' },
      ],
      correctIndex: 0,
    },
    h1: ['72 tiếng bằng đúng mấy ngày tròn?', 'How many full 24-hour days is 72 hours?', '¿Cuántos días completos son 72 horas?', '72時間はちょうど何日間？'],
    h2: ['72 ÷ 24 = 3 ngày tròn — tức là đúng 12 giờ đêm ba ngày sau!', '72 ÷ 24 = 3 exact days — still midnight in the pitch dark!', '72 horas son 3 días exactos: ¡volverá a ser medianoche!', '72÷24＝3日後！つまり時刻はまた深夜0時だよ！'],
    h3: ['12 giờ đêm thì làm gì có mặt trời nắng chói chang!', 'There is no sunshine at midnight (unless polar summer, not normal riddle)!', '¡A medianoche no hay sol!', '真夜中に太陽が出るわけがない！'],
    e: ['Sau đúng 72 giờ nữa vẫn là nửa đêm tối thui nên không thể có nắng chói chang!', '72 hours after midnight is still midnight — no sunshine in the dark!', '¡72 horas después seguirá siendo medianoche!', '72時間後＝3日後の深夜0時なので、晴れても太陽は出ていません！'],
  },
  // 25 (hard)
  {
    diff: 'hard', cat: 'visual',
    t: ['Bàn cờ 4×4 có bao nhiêu ô vuông?', 'Total Squares in 4×4 Grid', 'Cuadrados en 4×4', '4×4マスにある正方形の総数'],
    p: ['Đếm cả hình vuông lớn nhỏ ghép lại: bàn cờ 4×4 này chứa tất cả bao nhiêu hình vuông?', 'Count EVERY square of any size (1×1 up to 4×4) inside this 4×4 grid!', 'Cuenta TODOS los cuadrados de cualquier tamaño en esta cuadrícula 4×4.', 'この4×4の盤面には、大小合わせて全部でいくつの正方形が隠れている？'],
    m: { type: 'visual_count', visualKind: 'chessboard_squares', variant: 4, correctAnswer: 30, min: 10, max: 50 },
    h1: ['Đừng chỉ đếm 16 ô nhỏ! Hãy cộng cả hình vuông 2×2, 3×3 và 4×4.', 'Add 1×1, 2×2, 3×3, and 4×4 squares together!', 'Suma los de 1×1, 2×2, 3×3 y 4×4.', '1×1、2×2、3×3、4×4 の正方形を全部足そう！'],
    h2: ['16 (1×1) + 9 (2×2) + 4 (3×3) + 1 (4×4).', '16 + 9 + 4 + 1 = ?', '16 + 9 + 4 + 1 = ?', '16 ＋ 9 ＋ 4 ＋ 1 ＝ ？'],
    h3: ['4² + 3² + 2² + 1² = 30 hình vuông.', 'Total = 30 squares.', 'Total = 30 cuadrados.', '答えは「30」個！'],
    e: ['Tổng bình phương 1² + 2² + 3² + 4² = 1 + 4 + 9 + 16 = 30 hình vuông!', '1² + 2² + 3² + 4² = 30 total squares!', '¡16 + 9 + 4 + 1 = 30 cuadrados!', '1＋4＋9＋16＝合計30個の正方形が存在します！'],
  },
  // 26 (hard)
  {
    diff: 'hard', cat: 'trick',
    t: ['Sợi dây 60 giây', 'Two Burning Ropes (45 min)', 'Dos cuerdas de 45 min', '60分の導火線で45分を測る'],
    p: ['Bạn có 2 sợi dây cháy không đều nhau nhưng mỗi sợi cháy hết đúng 60 phút. Làm sao đo ĐÚNG 45 phút mà không có đồng hồ?', 'You have two uneven ropes that each burn completely in 60 minutes. How do you measure EXACTLY 45 minutes?', 'Tienes dos cuerdas que arden de forma irregular en 60 minutos cada una. ¿Cómo mides exactamente 45 minutos?', '燃える速さがバラバラだが、1本燃え切るのにちょうど60分かかるロープが2本あります。これで正確に「45分」を測る方法は？'],
    m: {
      type: 'lateral_choice', illustration: 'fire',
      options: [
        { vi: 'Đốt 2 đầu dây 1 + 1 đầu dây 2; khi dây 1 tắt đốt đầu kia dây 2!', en: 'Light BOTH ends of Rope 1 + ONE end of Rope 2; when Rope 1 finishes (30m), light Rope 2’s other end!', es: 'Enciende ambos extremos de la cuerda 1 y uno de la 2; al apagarse la 1, enciende el otro extremo de la 2.', ja: '1本目の両端と2本目の片端に同時点火！1本目が燃え尽きたら（30分）2本目の反対側にも点火！' },
        { vi: 'Gấp đôi sợi dây rồi cắt bằng kéo', en: 'Fold rope in half and cut', es: 'Doblar por la mitad y cortar', ja: '半分に折って切る（速度が不均一なので不可）' },
        { vi: 'Đếm nhẩm 2700 giây', en: 'Count 2,700 seconds aloud', es: 'Contar 2700 segundos', ja: '声に出して2700秒数える' },
        { vi: 'Không thể đo được', en: 'Mathematically impossible', es: 'Imposible', ja: '測定不可能' },
      ],
      correctIndex: 0,
    },
    h1: ['Đốt 2 đầu cùng lúc sẽ rút ngắn thời gian cháy của 1 sợi xuống một nửa (30 phút) bất kể cháy không đều!', 'Burning a rope from BOTH ends always takes exactly 30 minutes!', 'Quemar por ambos extremos siempre tarda 30 min exactos.', '両端から火をつければ、燃え方が不均一でも必ず半分の30分で燃え尽きるよ！'],
    h2: ['Sau 30 phút (dây 1 hết), dây 2 còn lại đúng 30 phút nếu đốt 1 đầu — vậy nếu lúc đó châm thêm đầu kia của dây 2 thì sao?', 'After 30 min, Rope 2 has 30 min left — lighting its other end cuts that remaining 30 min to 15 min!', 'Cuando la 1 acaba (30m), enciende el otro extremo de la 2 para que tarde 15m.', '残り30分になった時点で反対側にも火をつければ、残りは15分で燃え尽きる！'],
    h3: ['30 + 15 = 45 phút! Chọn đáp án đầu tiên.', '30 + 15 = 45 minutes! Pick the first option.', '30 + 15 = 45 min. Elige la primera opción.', '30分＋15分＝45分！最初の選択肢を選ぼう！'],
    e: ['Kinh điển của Google Interview: đốt 2 đầu dây A + 1 đầu dây B (30p) rồi đốt đầu còn lại của B (+15p) = 45p!', 'Classic brainteaser: Rope A burns from both ends (30m), then Rope B’s remaining half burns from both ends (+15m) = 45m!', '¡30 + 15 = 45 minutos exactos!', '両端同時着火で時間を半分にするテクニックを2回組み合わせる超名作パズルです！'],
  },
  // 27 (hard)
  {
    diff: 'hard', cat: 'logic',
    t: ['Ma trận tổng ma thuật 20', 'Prime Four-Tile Sum 20', 'Suma exacta 20', '合計20の3マス選択'],
    p: ['Chọn chính xác 3 ô số có TỔNG đúng bằng 20 trên bảng ma trận!', 'Pick exactly 3 number tiles whose SUM equals 20!', '¡Elige exactamente 3 casillas cuya SUMA sea 20!', 'ちょうど3枚の数字パネルを選んで「合計が20」になるようにしよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'magic_sum',
      gridSize: 3,
      initialGrid: [false, false, false, false, false, false, false, false, false],
      tileLabels: ['1', '3', '4', '5', '6', '7', '8', '9', '10'],
      requiredCount: 3,
      targetSum: 20,
    },
    h1: ['Thử lấy số lớn nhất là 10 trước!', 'Try starting with the largest tile: 10!', 'Prueba empezando por el 10.', '一番大きい「10」から考えてみよう！'],
    h2: ['10 + 6 + 4 = 20 (hoặc 9 + 7 + 4 = 20, 8 + 7 + 5 = 20)!', 'Many pairs work with 10, 9, or 8 — e.g. 10 + 6 + 4 = 20!', 'Por ejemplo 10 + 6 + 4 = 20.', '例えば 10 ＋ 6 ＋ 4 ＝ 20 だよ！'],
    h3: ['Chọn 10, 6, 4 (hoặc bất kỳ bộ 3 ô nào cộng đúng 20) rồi nhấn Kiểm tra.', 'Select 10, 6, and 4, then press Check.', 'Elige 10, 6 y 4 y comprueba.', '「10」「6」「4」を選んで確認を押そう！'],
    e: ['Có nhiều bộ 3 ô đạt tổng 20 như 10 + 6 + 4 = 20!', 'Exact sum 20 achieved!', '¡Suma exacta de 20 conseguida!', '合計20の組み合わせを見事に作り出しました！'],
  },
  // 28 (hard)
  {
    diff: 'hard', cat: 'riddle',
    t: ['Cây nến 10 giờ & Gió bão', 'Blackout Candle Trick', 'Velas en el apagón', '停電と10本のロウソク'],
    p: ['Có 10 cây nến đang cháy sáng trong phòng thì gió thổi tắt mất 3 cây. Sau đó bạn đóng kín cửa sổ lại để không cây nào tắt thêm. Hỏi đến sáng hôm sau còn lại bao nhiêu cây nến (cả sáp)?', '10 candles are burning in a room when a gust blows out 3. You close the window so no more blow out. How many candles remain the next morning?', 'Hay 10 velas encendidas y el viento apaga 3. Cierras la ventana y ninguna más se apaga. ¿Cuántas velas quedan a la mañana siguiente?', '部屋で10本のロウソクが燃えていて、風で3本が消えました。窓を閉めたのでそれ以上は消えませんでした。翌朝、残っているロウソクは何本？'],
    m: { type: 'lock_dial', clueDisplay: '7 burned away · 3 blew out → ? left', correctCode: '3', maxLength: 2 },
    h1: ['7 cây nến kia VẪN TIẾP TỤC CHÁY suốt cả đêm dài!', 'The other 7 candles KEPT BURNING all night long!', '¡Las otras 7 siguieron ardiendo toda la noche!', '消えなかった7本は一晩中ずっと燃え続けたよ！'],
    h2: ['7 cây cháy suốt đêm sẽ chảy hết sạch thành không!', 'All 7 lit candles burn completely away by morning!', 'Las 7 encendidas se consumen por completo.', '火がついていた7本は朝までに全部溶けてなくなっちゃう！'],
    h3: ['Chỉ còn nguyên vẹn 3 cây bị gió thổi tắt lúc đầu!', 'Only the 3 blown-out candles remain!', '¡Solo quedan las 3 que se apagaron!', '消えて残った「3」本だけがそのまま残る！'],
    e: ['7 cây đang cháy đã tàn rụi hết trong đêm — chỉ còn lại 3 cây bị thổi tắt từ đầu!', 'The 7 lit candles burned down completely, leaving only the 3 blown-out ones!', '¡Las 7 encendidas se consumieron; solo quedaron 3!', '燃えていた7本は朝までに燃え尽きるため、残るのは最初に消えた3本だけです！'],
  },
  // 29 (hard)
  {
    diff: 'hard', cat: 'drag',
    t: ['Giải cứu viên ngọc dưới nam châm', 'Lift the Iron Coin With Magnet', 'Imán y moneda', '磁石で鍵を引き出そう'],
    p: ['Chiếc chìa khóa sắt rơi tọt xuống hố sâu rồi! Dùng món đồ trên bàn để hút lấy nó!', 'The iron key fell into a deep crack! Use the right tool to pull it out!', '¡La llave cayó en una grieta! Usa la herramienta adecuada para sacarla.', '鉄のカギが深い穴に落ちちゃった！道具を使って引き上げよう！'],
    m: {
      type: 'drag_combine', mode: 'drop_on_target', backdrop: 'park',
      items: [
        { id: 'key', shape: 'key', x: 74, y: 66, scale: 1.1 },
        { id: 'magnet', shape: 'magnet', x: 24, y: 34, scale: 1.2 },
        { id: 'leaf', shape: 'leaf', x: 24, y: 72, scale: 1.0 },
        { id: 'cheese', shape: 'cheese', x: 50, y: 26, scale: 1.0 },
      ],
      sourceId: 'magnet', targetId: 'key',
    },
    h1: ['Lá cây hay phô mai không thể nhấc kim loại.', 'Leaves and cheese cannot lift metal.', 'Ni la hoja ni el queso atraen metal.', '葉っぱやチーズでは鉄を引き上げられないよ。'],
    h2: ['Kéo cục nam châm chữ U lại gần chiếc chìa khóa!', 'Drag the horseshoe magnet near the key!', 'Acerca el imán de herradura a la llave.', 'U字型の磁石をカギに近づけよう！'],
    h3: ['Thả nam châm lên chiếc chìa khóa.', 'Drop the magnet onto the key.', 'Suelta el imán sobre la llave.', '磁石をカギにドラッグ！'],
    e: ['Từ trường nam châm hút phăng chiếc chìa khóa sắt lên ngay lập tức!', 'Magnetic attraction lifted the key effortlessly!', '¡El imán atrajo la llave al instante!', '磁石の力で鉄のカギをあっという間に引き上げました！'],
  },
  // 30 (hard)
  {
    diff: 'hard', cat: 'trick',
    t: ['Ngôi nhà không có cầu thang', 'One-Story Pink House Trap', 'Casa rosa de una planta', '平屋建ての家の階段は何色？'],
    p: ['Trong ngôi nhà MỘT TẦNG màu hồng rực: tường hồng, thảm hồng, tivi hồng, ghế sofa hồng, rèm cửa hồng. Hỏi cầu thang lên gác trong nhà màu gì?', 'Inside a ONE-STORY pink house: pink walls, pink sofa, pink carpet, pink fridge, pink bed. What color are the stairs?', 'En una casa rosa de UNA SOLA PLANTA todo es rosa: paredes, sofá, alfombra, techo. ¿De qué color son las escaleras?', '壁もソファもカーペットも天井もすべてピンク色の「平屋建て（1階建て）」の家があります。さて、この家の階段は何色？'],
    m: {
      type: 'lateral_choice', illustration: 'door',
      options: [
        { vi: 'Nhà MỘT TẦNG làm gì có cầu thang!', en: 'There are NO stairs in a one-story house!', es: '¡No hay escaleras en una casa de una planta!', ja: '1階建て（平屋）なので階段はない！' },
        { vi: 'Màu hồng cánh sen', en: 'Bright pink', es: 'Rosa brillante', ja: 'ピンク色' },
        { vi: 'Màu trắng kem', en: 'Cream white', es: 'Blanco crema', ja: '白' },
        { vi: 'Màu gỗ sồi', en: 'Oak brown', es: 'Marrón roble', ja: '茶色' },
      ],
      correctIndex: 0,
    },
    h1: ['Đừng để hàng loạt chữ "màu hồng" thôi miên bạn!', 'Do not get hypnotized by the word "pink"!', '¡No te hipnotices con la palabra "rosa"!', '「ピンク」の連呼に惑わされないで！'],
    h2: ['Chú ý ngay câu đầu: "ngôi nhà MỘT TẦNG"!', 'Re-read the very first clue: "ONE-STORY house"!', 'Fíjate en "UNA SOLA PLANTA".', '最初の「1階建て（平屋）」に注目！'],
    h3: ['Nhà 1 tầng thì không hề có cầu thang!', 'A one-story house has zero stairs!', '¡Una casa de un piso no tiene escaleras!', '1階建てに階段は存在しない！'],
    e: ['Bẫy lặp từ kinh điển: nhà chỉ có 1 tầng trệt nên chẳng có cái cầu thang nào cả!', 'Classic repetition trap: a one-story house has no stairs at all!', '¡Al tener un solo piso no existen escaleras!', '平屋建てなのでそもそも階段自体がありません！'],
  },
  // 31 (hard)
  {
    diff: 'hard', cat: 'visual',
    t: ['Khối lập phương 4 tầng', '4-Layer Isometric Cube Stack', 'Pirámide de cubos 4 capas', '4段積み木ブロックの数'],
    p: ['Đếm cả những khối bị che khuất bên dưới: tháp lập phương tam giác 4 tầng này gồm tổng cộng bao nhiêu khối?', 'Including all hidden support cubes underneath, how many total unit cubes build this 4-layer pyramid?', 'Incluyendo los cubos ocultos debajo, ¿cuántos cubos forman esta pirámide de 4 pisos?', '下に隠れている見えないブロックもすべて含めて、この4段のブロックの塔は合計何個のブロックでできている？'],
    m: { type: 'visual_count', visualKind: 'cube_stack', variant: 3, correctAnswer: 20, min: 5, max: 35 },
    h1: ['Tính từng tầng từ đỉnh xuống đáy theo dãy số tam giác!', 'Count layer by layer from top down using triangular numbers!', 'Cuenta piso por piso desde arriba.', '上から順番に各段の個数を数えて足そう！'],
    h2: ['Tầng đỉnh: 1, tầng 2: 3, tầng 3: 6, tầng đáy: 10.', 'Top: 1, Layer 2: 3, Layer 3: 6, Bottom: 10.', '1 + 3 + 6 + 10 = ?', '1段目:1個、2段目:3個、3段目:6個、4段目:10個！'],
    h3: ['1 + 3 + 6 + 10 = 20 khối.', '1 + 3 + 6 + 10 = 20 cubes.', '1 + 3 + 6 + 10 = 20 cubos.', '1＋3＋6＋10 ＝ 「20」個！'],
    e: ['Tổng các số tam giác 1 + 3 + 6 + 10 = 20 khối lập phương!', '1 + 3 + 6 + 10 = 20 tetrahedral cubes!', '¡Total = 20 cubos!', '1＋3＋6＋10＝合計20個のブロックが使われています！'],
  },
  // 32 (hard)
  {
    diff: 'hard', cat: 'riddle',
    t: ['Đôi tất trong bóng tối', 'Blind Sock Draw Guarantee', 'Calcetines a oscuras', '暗闇で同じ色の靴下を揃える'],
    p: ['Trong ngăn kéo tối thui có 10 chiếc tất đen và 10 chiếc tất trắng trộn lẫn. Bạn phải lấy ra ÍT NHẤT bao nhiêu chiếc tất (không nhìn) để CHẮC CHẮN 100% có ít nhất 1 đôi cùng màu?', 'A dark drawer holds 10 black socks and 10 white socks mixed together. What is the MINIMUM number of socks you must grab blindly to GUARANTEE at least one matching pair?', 'En un cajón oscuro hay 10 calcetines negros y 10 blancos mezclados. ¿Cuántos debes sacar a ciegas como MÍNIMO para asegurar un par igual?', '真っ暗な引き出しに黒の靴下10本と白の靴下10本が混ざっています。同じ色のペアを1組「確実に」作るには最低何本取り出せばいい？'],
    m: { type: 'lock_dial', clueDisplay: '10 Black + 10 White → Min to guarantee pair = ?', correctCode: '3', maxLength: 2 },
    h1: ['Nguyên lý Chuồng bồ câu (Pigeonhole Principle) — chỉ có 2 màu tất!', 'Pigeonhole Principle — there are only 2 possible colors!', 'Principio del palomar: ¡solo hay 2 colores!', '靴下の色は黒と白の2種類しかないよ（鳩の巣原理）！'],
    h2: ['Xui nhất là 2 chiếc đầu khác màu (1 đen + 1 trắng). Đến chiếc thứ 3 thì sao?', 'Worst case: first 2 differ (1 black, 1 white). What must the 3rd be?', 'El tercero tiene que coincidir con uno de los dos.', '最悪でも1本目と2本目が白・黒なら、3本目は必ずどちらかと同じになるよね！'],
    h3: ['Chỉ cần lấy đúng 3 chiếc → nhập 3.', 'Just 3 socks → enter 3.', 'Solo 3 calcetines → ingresa 3.', '最低「3」本取り出せば確実にペア完成！'],
    e: ['Chỉ có 2 màu nên lấy 3 chiếc chắc chắn có 2 chiếc trùng màu (đừng nhầm thành 11 nhé)!', 'With 2 colors, drawing 3 socks guarantees a matching pair!', '¡Con 2 colores, sacar 3 garantiza pareja!', '2色しかないので3本引けば必ず同じ色が2本揃います（11本ではありません！）！'],
  },
  // 33 (hard)
  {
    diff: 'hard', cat: 'logic',
    t: ['Khung viền 3 chạm Lights-Out', 'Three-Corner Lights-Out', 'Tres esquinas Lights-Out', '3タップで9マス全点灯'],
    p: ['Chạm ĐÚNG 3 ô trên ma trận Lights-Out để thắp sáng cả 9 ô!', 'Tap just THREE tiles to turn ALL 9 tiles ON in this Lights-Out matrix!', '¡Toca exactamente TRES casillas para iluminar todo el tablero!', 'ちょうど3マスだけタップして全9マスを点灯させよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'lights_out',
      gridSize: 3,
      // Tap 0 (0,1,3), 2 (1,2,5), 7 (4,6,7,8) => flips {0,2,3,4,5,6,7,8} (tile 1 untouched)
      initialGrid: [false, true, false, false, false, false, false, false, false],
      allOnRequired: true,
    },
    h1: ['Chỉ có duy nhất ô trên-giữa (1,2) đang sáng — đừng làm mất nó!', 'Only top-center is ON — notice it lies between top-left and top-right!', 'Solo la casilla superior central está encendida.', '上段の真ん中だけが最初から点いているよ！'],
    h2: ['Chạm cả 2 góc trên (0 và 2): ô trên-giữa đảo 2 lần nên vẫn sáng! Sau đó chạm ô dưới-giữa.', 'Tap top-left and top-right (top-center flips twice!), then bottom-center!', 'Toca las dos esquinas superiores y luego el centro inferior.', '左上と右上の両方を押すと上段真ん中は2回反転してそのまま！あとは下段真ん中！'],
    h3: ['Chạm ô (1,1), (1,3) và (3,2).', 'Tap top-left, top-right, and bottom-center tiles.', 'Toca superior izq., superior der. y centro inferior.', '左上・右上・下中央の3つをタップ！'],
    e: ['Hai góc trên bù trừ nhau giữ sáng tâm trên, ô dưới-giữa dọn sạch phần còn lại!', 'Top corners + bottom center lit all 9 tiles cleanly!', '¡Las dos esquinas superiores más el centro inferior bastaron!', '左上・右上で真ん中を維持しつつ、下中央で残りを一気に点灯させました！'],
  },
  // 34 (hard)
  {
    diff: 'hard', cat: 'trick',
    t: ['Mật mã bóng đèn tắt', 'Three Switches Outside Room', 'Tres interruptores', '部屋の外の3つのスイッチ'],
    p: ['Ngoài hành lang có 3 công tắc bật/tắt 1 bóng đèn duy nhất trong phòng kín (không nhìn xuyên cửa). Bạn chỉ được vào phòng ĐÚNG 1 LẦN. Làm sao biết chắc công tắc nào nối với bóng đèn?', 'Three switches outside control one bulb inside a closed room. You may flip switches freely, then enter the room ONCE. How can you know with 100% certainty which switch controls the bulb?', 'Tres interruptores fuera controlan una bombilla dentro de un cuarto cerrado. Solo puedes entrar UNA vez. ¿Cómo sabes cuál la enciende?', '密室の外に3つのスイッチがあり、1つだけが中の電球に繋がっています。部屋に入れるのは1回だけ。どのスイッチが電球か100%見抜く方法は？'],
    m: {
      type: 'lateral_choice', illustration: 'bulb',
      options: [
        { vi: 'Bật A 5 phút rồi tắt, bật B rồi vào: sáng=B, tắt mà ẤM=A, tắt NGUỘI=C!', en: 'Flip A on 5 min then off, flip B on, enter: lit=B, off+WARM=A, off+COLD=C!', es: 'Enciende A 5 min y apágalo, enciende B y entra: luz=B, apagada+TIBIA=A, FRÍA=C.', ja: 'Aを5分点けて消し、Bを点けて入室：点灯=B、消灯だが暖かい=A、冷たい=C！' },
        { vi: 'Bật cả 3 cùng lúc xem bóng nổ không', en: 'Flip all 3 and watch for sparks', es: 'Encender los 3 juntos', ja: '3つ同時に点けて爆発させる' },
        { vi: 'Khoan lỗ nhìn trộm qua cửa', en: 'Drill a hole in the door', es: 'Taladrar la puerta', ja: 'ドアに穴を開ける' },
        { vi: 'Đoán đại xác suất 33%', en: 'Guess randomly (33%)', es: 'Adivinar al azar', ja: '勘で当てる' },
      ],
      correctIndex: 0,
    },
    h1: ['Bóng đèn dây tóc ngoài ánh sáng còn tỏa ra đại lượng vật lý nào?', 'Besides visible light, what else does a glowing bulb produce?', 'Además de luz, ¿qué produce una bombilla encendida?', '電球が光っているときに発生する「光以外」のものは？'],
    h2: ['NHIỆT ĐỘ! Bật công tắc 1 một lúc cho bóng nóng lên, rồi tắt đi và bật công tắc 2 trước khi mở cửa.', 'HEAT! Leave Switch 1 on briefly to warm the glass, turn it off, flip Switch 2 on, then inspect!', '¡CALOR! Deja el 1 encendido unos minutos, apágalo y enciende el 2.', '「熱」だよ！1つ目を少し点けて温めてから消し、2つ目を点けて部屋に入ろう！'],
    h3: ['Chọn phương án dùng ánh sáng + nhiệt độ ấm/nguội!', 'Pick the light + warmth/cold option!', 'Elige la opción de luz y calor.', '光と温度（暖かい・冷たい）で見分ける選択肢を選ぼう！'],
    e: ['Dùng cả thị giác lẫn xúc giác (độ ấm của bóng đèn) phân biệt rạch ròi 3 trạng thái trong 1 lần vào!', 'Combining light and lingering heat distinguishes all 3 switches in a single visit!', '¡Luz y calor distinguen los 3 interruptores en una visita!', '明かりと「余熱（触った温度）」の2つの情報を組み合わせる名作論理パズルです！'],
  },
  // 35 (hard)
  {
    diff: 'hard', cat: 'riddle',
    t: ['Chữ cái biến dạng thời gian', 'Order of Human Life Stages', 'Etapas de la vida', '人生の順番並べ'],
    p: ['Câu đố của Nhân Sư Sphinx: Sắp xếp 4 trạng thái theo đúng vòng đời con người từ bình minh đến hoàng hôn!', 'Sphinx’s Classic Riddle: Sort the 4 stages of human life in chronological order!', 'Acertijo de la Esfinge: ¡ordena cronológicamente las etapas del día humano!', 'スフィンクスの謎かけ：人の一生の4つの段階を正しい順番に並べよう！'],
    m: {
      type: 'order_sort',
      items: [
        { id: 'three', shape: 'hourglass', label: { vi: 'Ba chân (Tuổi già chống gậy)', en: '3 Legs (Evening Cane)', es: '3 Pies (Bastón)', ja: '3本足（杖をつく晩年）' } },
        { id: 'four', shape: 'cat', label: { vi: 'Bốn chân (Bò lúc sơ sinh)', en: '4 Legs (Morning Crawl)', es: '4 Pies (Gateo bebé)', ja: '4本足（ハイハイの赤ん坊）' } },
        { id: 'two', shape: 'trophy', label: { vi: 'Hai chân (Đi đứng trưởng thành)', en: '2 Legs (Noon Stride)', es: '2 Pies (Adulto)', ja: '2本足（二足歩行の大人）' } },
        { id: 'rest', shape: 'moon', label: { vi: 'Giấc ngủ thiên thu (Đêm)', en: 'Deep Rest (Night)', es: 'Descanso (Noche)', ja: '安らぎ（夜）' } },
      ],
      correctOrder: ['four', 'two', 'three', 'rest'],
    },
    h1: ['Buổi sáng cuộc đời: em bé bò bằng cả tay lẫn chân (4 chân).', 'Morning of life: crawling baby uses 4 limbs.', 'Mañana: el bebé gatea en 4.', '人生の朝：赤ちゃんは4本足（手足）でハイハイ！'],
    h2: ['Buổi trưa: trưởng thành đi 2 chân; buổi chiều: tuổi già chống thêm 1 cây gậy (3 chân)!', 'Noon: adult walks on 2; Evening: elder adds a cane (3)!', 'Mediodía 2 pies; tarde con bastón 3 pies.', '昼は2本足、夕方は杖をついて3本足！'],
    h3: ['4 chân → 2 chân → 3 chân → Giấc ngủ.', '4 Legs → 2 Legs → 3 Legs → Deep Rest.', '4 Pies → 2 Pies → 3 Pies → Descanso.', '4本足 → 2本足 → 3本足 → 安らぎ！'],
    e: ['Huyền thoại Nhân Sư Sphinx: Con người bò 4 chân, đi 2 chân, chống gậy 3 chân rồi an nghỉ!', 'The immortal Sphinx riddle: crawl (4), walk (2), cane (3), rest!', '¡El eterno enigma de la Esfinge!', 'スフィンクス伝説の謎かけ「朝は4本、昼は2本、夕は3本」を見事クリア！'],
  },
  // 36 (hard)
  {
    diff: 'hard', cat: 'action',
    t: ['Công tắc nhị phân 13 (1101)', 'Binary 13 Switches', 'Interruptores binario 13', '2進数「13」のスイッチ'],
    p: ['4 công tắc từ trái sang phải có giá trị: [8] [4] [2] [1]. Hãy bật đúng tổ hợp để tổng giá trị bằng đúng 13!', 'The 4 switches from left to right hold binary weights [8] [4] [2] [1]. Toggle switches to total EXACTLY 13!', 'Los 4 interruptores valen [8] [4] [2] [1]. ¡Actívalos para sumar exactamente 13!', '左から [8] [4] [2] [1] の重みを持つ4つのスイッチを操作して、合計をちょうど「13」にしよう！'],
    m: {
      type: 'action_meter', mode: 'switches', targetShape: 'bulb', switchCount: 4,
      targetMask: [true, true, false, true],
      requiredValue: 13,
      meterLabel: { vi: 'Mã nhị phân [8][4][2][1] = 13', en: 'Binary [8][4][2][1] = 13', es: 'Binario [8][4][2][1] = 13', ja: '2進数 [8][4][2][1] = 13' },
    },
    h1: ['Cần bật các nút nào để cộng lại bằng 13?', 'Which weights from 8, 4, 2, 1 sum to 13?', '¿Qué pesos de 8, 4, 2, 1 suman 13?', '8, 4, 2, 1 のうちどれを足せば13になる？'],
    h2: ['8 + 4 + 1 = 13 (nút [2] tắt)!', '8 + 4 + 1 = 13 (keep [2] OFF)!', '8 + 4 + 1 = 13 (deja el 2 apagado).', '8 ＋ 4 ＋ 1 ＝ 13（[2]だけOFF）！'],
    h3: ['Bật: BẬT · BẬT · TẮT · BẬT (1-1-0-1).', 'Set switches: ON · ON · OFF · ON.', 'Pon: ON · ON · OFF · ON.', '左から ON・ON・OFF・ON にしよう！'],
    e: ['1101 trong hệ nhị phân chính xác là 8 + 4 + 0 + 1 = 13!', 'Binary 1101 = 8 + 4 + 1 = 13!', '¡1101 en binario es 13!', '2進数の1101＝8＋4＋1＝13 がバッチリ点灯しました！'],
  },
  // 37 (hard)
  {
    diff: 'hard', cat: 'trick',
    t: ['Chén trà bị ướt đáy', 'Dry Bottom Coin Trick', 'Moneda seca en el agua', '水を触らずにコインを取る'],
    p: ['Có một đồng xu nằm dưới đáy cốc nước đầy. Bạn muốn lấy đồng xu ra bằng tay không, nhưng KHÔNG ĐƯỢC LÀM ƯỚT NGÓN TAY (và không đổ nước đi)! Khoan — thử chạm từ "KHÔNG" hay làm nóng nước? Không, trong câu đố chữ: chỉ cần dùng chiếc BÓNG BAY? Hãy chạm vào từ "ĐẦY" hay dùng ĐÈN PIN? Thử chạm vào từ "KHÔNG" trong câu hỏi xem!', 'A gold coin lies under water? Wait — read carefully: touch the word DRY? No, touch the hidden word "HAND" / "NƯỚC" / "ƯỚT"? Look at the options — actually tap the coin? No, it is under water! Tap the word "KHÔNG" (en: "NOT") to reverse the wet rule!', '¡Una moneda está bajo el agua! No puedes mojarte ni vaciar el vaso... ¡Toca la palabra NO arriba para anular la regla!', '水底のコイン！手を濡らさず水も捨てずに取るには…問題文の「濡らさず（NO）」をタップしてルールを逆転させよう！'],
    m: {
      type: 'scene_tap', backdrop: 'room',
      tapPromptWord: { vi: 'KHÔNG', en: 'NOT', es: 'NO', ja: '濡らさず' },
      objects: [
        { id: 'coin', shape: 'coin', x: 50, y: 65, scale: 1.15, decoy: true },
        { id: 'water', shape: 'water', x: 50, y: 50, scale: 1.5, decoy: true },
      ],
    },
    h1: ['Chạm vào đồng xu dưới nước sẽ làm ướt tay ngay!', 'Tapping the submerged coin gets your finger wet!', 'Tocar la moneda bajo el agua te moja.', '水中のコインをそのまま触ると濡れてアウト！'],
    h2: ['Chạm vào từ khóa phủ định ngay trong đề bài phía trên!', 'Tap the uppercase negative word inside the question!', 'Toca la palabra de negación en el enunciado.', '上の問題文の中のキーワードをタップしてみよう！'],
    h3: ['Chạm vào chữ KHÔNG (en: NOT) ở câu hỏi.', 'Tap NOT in the prompt.', 'Toca NO en la pregunta.', '問題文の「濡らさず」をタップ！'],
    e: ['Phá vỡ giới hạn ngay từ câu chữ là tinh túy của Brain Test!', 'Changing the rules directly in the text is classic lateral thinking!', '¡Romper la regla en el propio texto es puro ingenio!', '問題文のルールそのものをタップで突破する痛快なトリックです！'],
  },
  // 38 (hard)
  {
    diff: 'hard', cat: 'riddle',
    t: ['Nửa quả táo giống gì?', 'What Looks Like Half an Apple?', '¿A qué se parece media manzana?', '半分に切ったリンゴにそっくりなもの'],
    p: ['Cái gì trên đời giống hệt MỘT NỬA QUẢ TÁO nhất?', 'What looks most like HALF an apple?', '¿Qué se parece más a MEDIA manzana?', '「半分に切ったリンゴ」に一番そっくりなものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'apple',
      options: [
        { vi: 'Nửa quả táo còn lại!', en: 'The OTHER half of the apple!', es: '¡La OTRA mitad de la manzana!', ja: 'もう片方の半分のリンゴ！' },
        { vi: 'Quả lê xanh', en: 'A green pear', es: 'Una pera verde', ja: '青い洋梨' },
        { vi: 'Vầng trăng khuyết', en: 'A crescent moon', es: 'La luna creciente', ja: '三日月' },
        { vi: 'Trái tim đỏ', en: 'A red heart', es: 'Un corazón rojo', ja: '赤いハート' },
      ],
      correctIndex: 0,
    },
    h1: ['Đừng nghĩ xa xôi tới mặt trăng hay trái cây khác!', 'Stop searching for pears or moons!', 'Deja de pensar en lunas o peras.', '月や他のフルーツを探さなくていいよ！'],
    h2: ['Khi bạn bổ đôi 1 quả táo, ta thu được 2 mảnh đối xứng nhau...', 'When you slice one apple in half, the two halves are...', 'Al partir una manzana en dos mitades...', '1個のリンゴを真っ二つに切ったらできるもう1つは…'],
    h3: ['Chính là nửa quả táo còn lại!', 'The other half of the apple!', '¡La otra mitad!', '「もう片方の半分のリンゴ！」！'],
    e: ['Không có gì giống nửa quả táo bằng chính nửa còn lại của nó!', 'Nothing mirrors half an apple better than the other half!', '¡Nada se parece más a media manzana que su otra mitad!', '同じリンゴのもう半分ほどそっくりなものはありません！'],
  },
  // 39 (hard)
  {
    diff: 'hard', cat: 'visual',
    t: ['Bắt giao điểm 5 đường thẳng', 'Max Intersections of 5 Lines', 'Cruces de 5 rectas', '5本の直線の交点の数'],
    p: ['Quan sát 5 đường thẳng cắt nhau đôi một trên hình: có TẤT CẢ bao nhiêu giao điểm tạo thành?', 'Five straight lines cross each other cleanly inside this frame. How many total intersection points exist?', 'Cinco rectas se cruzan entre sí en el cuadro. ¿Cuántos puntos de intersección hay en total?', '互いに交わる5本の直線があります。交点（線が交わる点）は全部でいくつある？'],
    m: { type: 'visual_count', visualKind: 'intersecting_lines', variant: 5, correctAnswer: 10, min: 4, max: 18 },
    h1: ['Mỗi cặp gồm 2 đường thẳng bất kỳ cắt nhau tại 1 điểm!', 'Every pair of lines intersects at 1 unique point!', 'Cada par de rectas se cruza en 1 punto.', 'どの2本の直線を選んでも1ヶ所で交わっているよ！'],
    h2: ['Tổ hợp C(5, 2) = 5 × 4 ÷ 2!', 'Combinations C(5, 2) = 5 × 4 ÷ 2!', 'Combinaciones 5 × 4 ÷ 2.', '5 × 4 ÷ 2 の組み合わせを計算しよう！'],
    h3: ['5 × 4 ÷ 2 = 10 giao điểm.', 'Total = 10 intersections.', 'Total = 10 intersecciones.', '答えは「10」個！'],
    e: ['5 đường thẳng cắt nhau từng đôi một tạo thành C(5, 2) = 10 giao điểm!', '5 lines in general position produce C(5, 2) = 10 intersections!', '¡5 líneas producen 10 cruces!', '5本のうち2本を選ぶ組み合わせ 5×4÷2＝10個の交点ができます！'],
  },
  // 40 (hard)
  {
    diff: 'hard', cat: 'trick',
    t: ['Ánh sáng phòng tối & Con cá', 'Blind Goldfish vs Mirror', 'Peces de colores', '10匹の金魚と猫'],
    p: ['Trong bể có 10 con cá vàng. Đêm qua: 2 con bị chết đuối, 4 con bơi đi chỗ khác, 3 con bị chết vì già. Hỏi sáng nay trong bể còn MẤY con cá vàng?', 'There are 10 goldfish in a sealed tank. Overnight, 2 drown, 4 swim away, and 3 die of old age? Wait: classic version: 2 drown, 4 swim away, 3 die! How many goldfish remain in the tank? Watch carefully: fish cannot drown or swim out of a tank, only the 3 dead bodies—Wait: dead fish are STILL in the tank, so 10? Wait: classic answer is 10 or 7? Let us make the prompt crystal-clear: 2 drown, 4 swim away (inside tank!), 0 removed! How many are still in the tank?', 'En una pecera cerrada hay 10 peces. Se ahogan 2, se van nadando 4 (dentro) y ninguno sale. ¿Cuántos peces siguen dentro de la pecera?', 'フタ付きの狭い水槽に金魚が10匹います。2匹が溺れ、4匹がどこかへ泳いでいき、3匹が死んでしまいました（取り出していません）。今、水槽の中に金魚は何匹いる？'],
    m: { type: 'lock_dial', clueDisplay: 'Closed Tank (10 fish): drown? swim out? → ? inside', correctCode: '10', maxLength: 2 },
    h1: ['Cá sống dưới nước làm sao bị "chết đuối" được!', 'Fish cannot drown underwater!', '¡Los peces no se ahogan en el agua!', '魚が水の中で「溺れる」わけがないよね！'],
    h2: ['Bể đóng kín thì 4 con bơi loanh quanh vẫn ở trong bể; 3 con chết (chưa vớt ra) cũng vẫn nằm trong bể!', 'In a sealed tank, swimming fish stay inside, and none were removed!', 'En una pecera cerrada ninguno ha salido.', 'フタ付きの水槽だから誰も外へ逃げられないし、取り出してもいない！'],
    h3: ['Tất cả 10 con vẫn ở trong bể → nhập 10.', 'All 10 remain inside → enter 10.', 'Siguen los 10 dentro → ingresa 10.', '「10」匹全員まだ水槽の中にいる！'],
    e: ['Cá không thể chết đuối, bể kín không thể bơi mất — và chưa ai vớt con nào ra nên vẫn còn đủ 10!', 'Fish cannot drown, sealed tanks hold swimmers in, and dead fish remain inside = 10!', '¡Siguen los 10 peces dentro de la pecera!', '魚は溺れず、密閉水槽から泳ぎ去ることもできず、取り出してもいないので10匹すべて中にいます！'],
  },
  // 41 (hard)
  {
    diff: 'hard', cat: 'drag',
    t: ['Lớp ngụy trang hộp bí mật', 'Double Decoy Treasure', 'Tesoro doblemente oculto', '二重の罠に隠されたダイヤ'],
    p: ['Viên kim cương đã bị giấu rất kỹ! Đừng bị chiếc rương vàng đánh lừa nhé!', 'The diamond is cleverly hidden! Do not trust the shiny chest!', '¡El diamante está bien escondido! No confíes en el cofre brillante.', 'ダイヤモンドが隠された！豪華な宝箱に騙されず見つけ出そう！'],
    m: {
      type: 'drag_combine', mode: 'move_aside_then_tap', backdrop: 'night',
      items: [
        { id: 'diamond', shape: 'diamond', x: 24, y: 66, scale: 1.05 },
        { id: 'bush', shape: 'bush', x: 24, y: 66, scale: 1.55 },
        { id: 'chest', shape: 'chest', x: 74, y: 58, scale: 1.35 },
      ],
      sourceId: 'bush', targetId: 'diamond',
    },
    h1: ['Chiếc rương bên phải rỗng không!', 'The chest on the right is an empty decoy!', 'El cofre de la derecha está vacío.', '右の宝箱は空っぽの罠だよ！'],
    h2: ['Kéo bụi cây rậm rạp ở góc dưới bên trái sang chỗ khác.', 'Drag the leafy bush on the bottom-left aside.', 'Mueve el arbusto de abajo a la izquierda.', '左下の茂みを横にドラッグしてどかしてみよう。'],
    h3: ['Chạm vào viên kim cương lấp lánh bên dưới bụi cây.', 'Tap the hidden diamond.', 'Toca el diamante descubierto.', '出てきたダイヤをタップ！'],
    e: ['Kho báu thật luôn được ngụy trang ở nơi bình dị nhất!', 'Hidden right behind the humble bush!', '¡Estaba oculto tras el arbusto!', '豪華な宝箱ではなく、地味な茂みの後ろに隠されていました！'],
  },
  // 42 (hard)
  {
    diff: 'hard', cat: 'riddle',
    t: ['Cây cầu gánh 1 quả táo', 'Double-Half Fraction Trap', 'Trampa de fracción', '「半分で割る」の計算ミス'],
    p: ['Lấy 50 chia cho 1/2, rồi cộng thêm 20. Kết quả cuối cùng bằng bao nhiêu?', 'Divide 50 by half (1/2), then add 20. What do you get?', 'Divide 50 entre la mitad (1/2) y suma 20. ¿Cuánto da?', '50を「2分の1（0.5）」で割って、20を足すといくつになる？'],
    m: { type: 'lock_dial', clueDisplay: '50 ÷ (1/2) + 20 = ?', correctCode: '120', maxLength: 3 },
    h1: ['KHÔNG PHẢI chia 2 (25 + 20 = 45) đâu nhé!', 'Do NOT divide by 2 (25 + 20 = 45)!', '¡NO dividas entre 2!', '「÷ 2」ではなく「÷ 0.5（÷ 1/2）」だよ！'],
    h2: ['Chia cho 1/2 tức là NHÂN ĐÔI: 50 ÷ 0.5 = 100!', 'Dividing by 1/2 equals multiplying by 2: 50 ÷ 0.5 = 100!', 'Dividir entre 1/2 es multiplicar por 2 = 100.', '1/2で割る ＝ 2倍する！つまり 50 ÷ 0.5 ＝ 100！'],
    h3: ['100 + 20 = 120.', '100 + 20 = 120.', '100 + 20 = 120.', '100 ＋ 20 ＝ 「120」！'],
    e: ['50 ÷ 0.5 = 100, cộng 20 thành 120 — bẫy đọc lướt cực nhiều người mắc!', '50 ÷ (1/2) = 100, plus 20 = 120!', '¡50 ÷ 0.5 + 20 = 120!', '「半分で割る」と「2で割る」を取り違えやすい計算トリックです！'],
  },
  // 43 (hard)
  {
    diff: 'hard', cat: 'trick',
    t: ['Đố vui chữ cái: Quả gì không ăn', 'What Ends Everything?', '¿Qué termina todo?', 'すべての「終わり」にあるもの'],
    p: ['Trong tiếng Anh, thứ gì luôn nằm ở cuối "TIME" (thời gian) và mở đầu "ETERNITY" (vĩnh cửu) — chính là một chữ cái đơn?', 'What is at the end of TIME, the start of ETERNITY, and twice in EVERYWEEK?', '¿Qué está al final del TIEMPO (TIME) y al inicio de la ETERNIDAD (ETERNITY)?', '「TIME」の最後、「ETERNITY」の最初、そして「EVERY」の最初にある共通の文字は？'],
    m: {
      type: 'lateral_choice', illustration: 'hourglass',
      options: [
        { vi: 'Chữ cái E', en: 'The letter E', es: 'La letra E', ja: '「E」の文字' },
        { vi: 'Kim giây đồng hồ', en: 'A second hand', es: 'El segundero', ja: '秒針' },
        { vi: 'Cái chết', en: 'Death', es: 'La muerte', ja: '死' },
        { vi: 'Vụ nổ Big Bang', en: 'The Big Bang', es: 'El Big Bang', ja: 'ビッグバン' },
      ],
      correctIndex: 0,
    },
    h1: ['Nhìn chữ cái cuối của TIM[E] và chữ đầu của [E]TERNITY!', 'Look at the last letter of TIM[E] and first letter of [E]TERNITY!', 'Mira la última letra de TIME y la primera de ETERNITY.', 'TIM[E] の最後と [E]TERNITY の最初の文字を見よう！'],
    h2: ['Cả hai đều là chữ cái đứng thứ 5 trong bảng chữ cái!', 'Both point to the 5th letter of the alphabet!', 'Es la quinta letra del abecedario.', 'アルファベットの5番目の文字だよ！'],
    h3: ['Chọn Chữ cái E.', 'Pick The letter E.', 'Elige La letra E.', '「Eの文字」を選ぼう！'],
    e: ['Chữ E kết thúc "timE", mở đầu "Eternity" và xuất hiện hai lần trong "EvEry"!', 'The letter E ends timE and begins Eternity!', '¡La letra E está al final de timE y al inicio de Eternity!', 'TIM"E"と"E"TERNITYの綴りをそのまま見る文字クイズです！'],
  },
  // 44 (hard)
  {
    diff: 'hard', cat: 'logic',
    t: ['Ma trận 3 bước góc khuyết', 'Three-Step Corner Sync', 'Sincronía 3 pasos', '3タップ・エッジ全点灯'],
    p: ['Chạm đúng 3 ô trên ma trận Lights-Out để thắp sáng tất cả 9 ô!', 'Tap exactly THREE tiles to light up all 9 tiles on this Lights-Out grid!', '¡Toca exactamente TRES casillas para iluminar todo!', '3回だけタップして全9マスを点灯させよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'lights_out',
      gridSize: 3,
      // Tap 1 (0,1,2,4) + 3 (0,3,4,6) + 8 (5,7,8) => flips {1,2,3,5,6,7,8} (0 and 4 unchanged!)
      initialGrid: [true, false, false, false, true, false, false, false, false],
      allOnRequired: true,
    },
    h1: ['Chỉ có ô góc trên-trái (1,1) và ô tâm (2,2) đang bật sáng!', 'Only top-left and center are currently ON!', 'Solo arriba-izquierda y el centro están encendidos.', '左上と真ん中の2つだけが最初から光っているよ！'],
    h2: ['Chạm (1,2) và (2,1) để đảo ngược cặp trên-giữa & giữa-trái (góc trên-trái + tâm bị đảo 2 lần giữ nguyên!), rồi chạm góc dưới-phải!', 'Tap top-center and mid-left (canceling top-left & center!), then bottom-right!', 'Toca arriba-centro, medio-izquierda y abajo-derecha.', '上中央・左中央を押すと左上と真ん中は2回反転してそのまま！最後に右下！'],
    h3: ['Chạm ô (1,2), (2,1) và (3,3).', 'Tap top-center, mid-left, and bottom-right.', 'Toca arriba-centro, izq.-centro y abajo-derecha.', '上中央・左中央・右下の3マスをタップ！'],
    e: ['Tổ hợp 3 chạm bù trừ siêu thông minh: không hề tắt 2 ô vốn sáng!', 'Clean 3-tap cancellation kept the two lit tiles intact!', '¡Tres toques perfectos!', '光っていた2マスを消さずに全9マスを輝かせる見事な3手でした！'],
  },
  // 45 (hard)
  {
    diff: 'hard', cat: 'riddle',
    t: ['Câu hỏi về chiếc xe buýt 4 bánh', 'Spare Tire Count Trick', 'Ruedas del viaje', '長距離ドライブで使われたタイヤの数'],
    p: ['Một chiếc ô tô đi đường dài 1.000 km. Cả 4 bánh chính và 1 bánh dự phòng được luân phiên sử dụng sao cho quãng đường lăn của CẢ 5 BÁNH đều BẰNG NHAU. Hỏi mỗi bánh xe đã chạy bao nhiêu km?', 'A car drives 1,000 km using its 4 main tires and 1 spare tire equally in rotation so ALL 5 tires roll the exact same distance. How many km does each tire travel?', 'Un coche recorre 1.000 km rotando sus 4 ruedas y 1 de repuesto por igual para que las 5 recorran lo mismo. ¿Cuántos km recorre cada rueda?', '1,000kmを走る車があり、4本のメインタイヤと1本のスペアタイヤを均等にローテーションして「全5本が同じ距離」だけ走りました。1本あたりの走行距離は何km？'],
    m: { type: 'lock_dial', clueDisplay: '(1,000 km × 4 wheels) ÷ 5 tires = ? km', correctCode: '800', maxLength: 4 },
    h1: ['Tại bất kỳ thời điểm nào trên đường, luôn có đúng 4 bánh đang chạm đất!', 'At every instant on the road, exactly 4 tires are touching asphalt!', 'En todo momento hay 4 ruedas rodando.', '走行中は常に4本のタイヤが地面に接地しているよ！'],
    h2: ['Tổng quãng đường cả 4 vị trí bánh phải gánh là 1.000 × 4 = 4.000 km-bánh.', 'Total tire-distance required = 1,000 × 4 = 4,000 tire-km.', 'Distancia total de rueda = 4.000 km.', '合計タイヤ距離 ＝ 1,000km × 4本 ＝ 4,000km分！'],
    h3: ['Chia đều cho 5 chiếc lốp: 4.000 ÷ 5 = 800 km.', 'Divide across 5 tires: 4,000 ÷ 5 = 800 km.', '4.000 ÷ 5 = 800 km.', '5本で割ると 4,000 ÷ 5 ＝ 「800」km！'],
    e: ['Tổng 4.000 km-bánh chia đều cho 5 lốp xe = mỗi lốp chạy 800 km!', '4,000 total tire-km split equally among 5 tires = 800 km each!', '¡4.000 ÷ 5 = 800 km cada rueda!', '延べ4,000kmの走行距離を5本のタイヤで均等分担するため、各800kmです！'],
  },
  // 46 (hard)
  {
    diff: 'hard', cat: 'trick',
    t: ['Thứ luôn đi xuống khi đi lên', 'What Goes Up Never Comes Down?', 'Sube y nunca baja', '一度上がると絶対下がらない？'],
    p: ['Cái gì trên máy bay dù bay lên hay hạ xuống đều giống... không, thứ gì có mặt ở cả CỰC BẮC lẫn CỰC NAM nhưng không có ở xích đạo, giúp con tàu định hướng?', 'Wait: what has a face with 13 hearts, yet zero other organs inside?', '¿Qué tiene 13 corazones pero ningún otro órgano?', '13個のハート（心臓）を持っているのに、他の臓器が1つもないものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'heart',
      options: [
        { vi: 'Bộ bài Tây (13 lá Cơ)!', en: 'A deck of playing cards!', es: '¡Una baraja de cartas!', ja: 'トランプのカード（ハートのA〜K）！' },
        { vi: 'Con bạch tuộc khổng lồ', en: 'A giant octopus', es: 'Un pulpo gigante', ja: 'ダイオウイカ' },
        { vi: 'Cây cổ thụ nghìn năm', en: 'An ancient oak tree', es: 'Un roble antiguo', ja: '樹齢千年の木' },
        { vi: 'Rô-bốt trí tuệ nhân tạo', en: 'An AI robot', es: 'Un robot', ja: 'AIロボット' },
      ],
      correctIndex: 0,
    },
    h1: ['Nghĩ về 13 quân từ Át (A) đến Già (K)!', 'Think of Ace through King (13 ranks)!', '¡Piensa del As al Rey (13 cartas)!', 'AからKまでの13枚を思い浮かべよう！'],
    h2: ['Nước Cơ (♥) có 13 lá, Rô (♦) có 13 lá, Chuồn (♣) 13, Bích (♠) 13!', 'One entire suit of Hearts has 13 cards!', 'El palo de corazones tiene 13 cartas.', 'ハート（♥）のカードがA〜Kの13枚！'],
    h3: ['Chọn Bộ bài Tây!', 'Pick A deck of playing cards!', 'Elige ¡Una baraja de cartas!', '「トランプのカード」を選ぼう！'],
    e: ['Bộ bài Tây 52 lá sở hữu đúng 13 lá Cơ (Heart) mà chẳng có lá phổi hay dạ dày nào!', 'A standard deck holds 13 Hearts and zero lungs or stomachs!', '¡Una baraja tiene 13 corazones!', 'トランプにはハートのA〜Kまで13枚のハートがありますが、他の臓器はありません！'],
  },
  // 47 (hard)
  {
    diff: 'hard', cat: 'action',
    t: ['Siêu nạp 25 xung ánh sáng', '25 Pulse Capacitor', '25 pulsos rápidos', '25連打でコア起動'],
    p: ['Lõi năng lượng cần cú hích cực đại! Chạm thật nhanh 25 lần vào viên pha lê!', 'The prism core needs a massive kick! Tap the prism 25 times fast!', '¡Toca el prisma 25 veces rápido para activar el núcleo!', 'プリズムを25回素早く連打してコアを起動しよう！'],
    m: {
      type: 'action_meter', mode: 'multi_tap', targetShape: 'prism', resultShape: 'trophy', requiredValue: 25,
      meterLabel: { vi: 'Xung pha lê', en: 'Prism Surge', es: 'Pulso de prisma', ja: 'プリズム出力' },
    },
    h1: ['Chạm liên tục vào biểu tượng lăng kính ở giữa.', 'Tap the prism repeatedly.', 'Toca el prisma repetidamente.', '真ん中のプリズムを連打しよう。'],
    h2: ['Đạt 25 lần chạm sẽ mở khóa cúp vàng.', 'Reaching 25 taps unlocks the trophy.', '25 toques completan la barra.', '25回で満タンになるよ！'],
    h3: ['Chạm đủ 25 lần.', 'Tap 25 times.', '25 toques.', '25回タップ！'],
    e: ['25 xung năng lượng khai phóng chiếc cúp lấp lánh!', '25 rapid surges unlocked the trophy!', '¡25 pulsos completados!', '25連打で見事コアを起動しました！'],
  },
  // 48 (hard)
  {
    diff: 'hard', cat: 'riddle',
    t: ['Căn phòng chỉ có 1 người sống', 'Murder Mystery: Round House', 'Misterio en la casa redonda', '丸い家の嘘つき容疑者'],
    p: ['Một tỷ phú bị mất trộm ngay trong ngôi nhà hình TRÒN vào chủ nhật. Cảnh sát hỏi 3 người: Đầu bếp bảo "Tôi đang nấu súp"; Quản gia bảo "Tôi đang lau thư viện"; Cô hầu phòng bảo "Tôi đang quét các GÓC TƯỜNG"! Ai là kẻ nói dối?', 'A gem is stolen in a completely ROUND mansion. Chef says "I was cooking soup." Butler says "I was dusting the library." Maid says "I was sweeping the CORNERS!" Who is lying?', 'Roban en una mansión REDONDA. Chef: "Cocinaba". Mayordomo: "Limpiaba libros". Criada: "Barría las ESQUINAS". ¿Quién miente?', '完全に「円形」の屋敷で宝石が盗まれました。料理人「スープを作っていた」、執事「書庫を片付けていた」、メイド「部屋の隅（角）を掃いていた」。嘘をついているのは誰？'],
    m: {
      type: 'lateral_choice', illustration: 'diamond',
      options: [
        { vi: 'Cô hầu phòng (Nhà TRÒN làm gì có góc!)', en: 'The Maid (a ROUND house has NO corners!)', es: 'La Criada (¡una casa redonda no tiene esquinas!)', ja: 'メイド（丸い家には「角」がない！）' },
        { vi: 'Đầu bếp (Chủ nhật không nấu)', en: 'The Chef', es: 'El Chef', ja: '料理人' },
        { vi: 'Quản gia (Thư viện đóng cửa)', en: 'The Butler', es: 'El Mayordomo', ja: '執事' },
        { vi: 'Chủ nhà tự trộm', en: 'The Owner', es: 'El dueño', ja: '主人' },
      ],
      correctIndex: 0,
    },
    h1: ['Hình học của ngôi nhà là manh mối then chốt!', 'The geometry of the house is the smoking gun!', 'La geometría de la casa es la clave.', '屋敷の形（円形）に注目して！'],
    h2: ['Hình tròn có bao nhiêu góc cạnh?', 'How many corners does a circle have?', '¿Cuántas esquinas tiene un círculo?', '丸い部屋に「角（かど）」っていくつある？'],
    h3: ['Nhà tròn không hề có góc tường — Cô hầu phòng nói dối!', 'A round house has zero corners — the Maid lied!', '¡No hay esquinas en una casa redonda: fue la criada!', '円形の部屋に角はないので、メイドが嘘つき！'],
    e: ['Một ngôi nhà hình tròn hoàn hảo làm gì có góc nào để quét — lời khai của cô hầu phòng sụp đổ ngay!', 'Zero corners exist in a round house — instant confession!', '¡Imposible barrer esquinas en una casa circular!', '丸い部屋には角が存在しないため、隅を掃いていたという証言は真っ赤な嘘でした！'],
  },
  // 49 (hard)
  {
    diff: 'hard', cat: 'visual',
    t: ['Giao thoa 3 vòng tròn Venn', '3-Circle Venn Regions', 'Regiones de 3 círculos', '3つの円の分割領域数'],
    p: ['3 vòng tròn giao nhau như hình vẽ chia phần BÊN TRONG của chúng thành bao nhiêu vùng tách biệt (không tính vùng trắng bên ngoài)?', 'How many distinct interior regions are formed inside these 3 overlapping circles (excluding the outer background)?', '¿Cuántas regiones interiores distintas forman estos 3 círculos superpuestos (sin contar el fondo exterior)?', '重なり合う3つの円の内側には（外側の白い背景を除いて）いくつの独立したエリアがある？'],
    m: { type: 'visual_count', visualKind: 'overlapping_circles', variant: 1, correctAnswer: 7, min: 3, max: 12 },
    h1: ['Đếm 3 phần đơn + 3 phần giao đôi + 1 phần giao ba ở chính giữa!', 'Count 3 outer petals + 3 two-way overlaps + 1 center!', '3 partes simples + 3 dobles + 1 central.', '単独エリア3つ ＋ 2つ重なり3つ ＋ 3つ重なり1つ！'],
    h2: ['3 + 3 + 1 = ?', '3 + 3 + 1 = ?', '3 + 3 + 1 = ?', '3 ＋ 3 ＋ 1 ＝ ？'],
    h3: ['Có đúng 7 vùng bên trong.', 'There are 7 interior regions.', 'Hay 7 regiones interiores.', '答えは「7」個！'],
    e: ['Biểu đồ Venn 3 vòng kinh điển có 3 + 3 + 1 = 7 vùng bên trong!', 'A 3-circle Venn diagram creates 3 + 3 + 1 = 7 interior regions!', '¡Un diagrama de Venn de 3 círculos tiene 7 regiones!', 'ベン図の定番構造：単独3＋2重3＋3重1＝合計7エリアです！'],
  },
  // 50 (hard)
  {
    diff: 'hard', cat: 'trick',
    t: ['Chai mật ong & Nửa lọ', 'Half-Full Jar Weight', 'Peso del frasco medio lleno', '半分食べたジャムの瓶の重さ'],
    p: ['Một hũ thủy tinh ĐẦY mật ong nặng tổng cộng 500 gram. Khi ăn hết đúng MỘT NỬA lượng mật ong, cân lại cả hũ lẫn mật ong còn lại nặng 300 gram. Hỏi chiếc hũ thủy tinh RỖNG nặng bao nhiêu gram?', 'A jar completely FULL of honey weighs 500 g. When exactly HALF of the honey is eaten, the jar + remaining honey weighs 300 g. How much does the EMPTY jar weigh?', 'Un frasco LLENO de miel pesa 500 g. Al comer la MITAD de la miel, pesa 300 g. ¿Cuánto pesa el frasco VACÍO?', 'ハチミツがいっぱい入った瓶の重さは500g。ハチミツをちょうど半分食べたら、瓶ごと300gになりました。空の瓶だけの重さは何g？'],
    m: { type: 'lock_dial', clueDisplay: 'Full(500g) − HalfHoney(200g) − HalfHoney(200g) = ?', correctCode: '100', maxLength: 3 },
    h1: ['Không phải 250g hay 150g đâu — chiếc hũ thủy tinh không hề bị ăn bớt!', 'The glass jar weight stays constant — only half the honey left!', 'El peso del frasco de vidrio no cambia.', '瓶そのものの重さは減っていないよ！減ったのはハチミツ半分だけ！'],
    h2: ['500g − 300g = 200g chính là trọng lượng của MỘT NỬA lượng mật ong!', '500 g − 300 g = 200 g is the weight of HALF the honey!', '500 − 300 = 200 g pesa la mitad de la miel.', '500g − 300g ＝ 200g がハチミツ半分の重さ！'],
    h3: ['Cả lượng mật ong = 400g → Chiếc hũ rỗng = 500 − 400 = 100g!', 'Full honey = 400 g → Empty jar = 500 − 400 = 100 g!', 'Miel total = 400 g → Frasco = 100 g.', 'ハチミツ全体で400g → 空の瓶は 500 − 400 ＝ 「100」g！'],
    e: ['Nửa lọ mật ong nặng 200g → cả lọ mật ong nặng 400g → hũ thủy tinh rỗng nặng 100g!', 'Half honey = 200 g, all honey = 400 g, empty jar = 100 g!', '¡Mitad miel = 200 g → miel = 400 g → frasco = 100 g!', 'ハチミツ半分が200gなので全体は400g、よって空瓶は500−400＝100gです！'],
  },
];

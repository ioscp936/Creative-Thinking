import { Spec7 } from './pack7_tricks_b1';

export const SPECS_TRICKS_B2: Spec7[] = [
  // 51 (hard)
  {
    diff: 'hard', cat: 'trick',
    t: ['Chàng hiệp sĩ & Con ngựa ngày thứ Sáu', 'Friday Horse Paradox', 'El caballo llamado Viernes', '金曜日に来て金曜日に帰る謎'],
    p: ['Một chàng cao bồi cưỡi ngựa vào thị trấn vào ngày THỨ SÁU, ở lại đúng 3 đêm rồi phóng ngựa đi cũng vào ngày THỨ SÁU! Làm thế nào kỳ vậy?', 'A cowboy rode into town on FRIDAY, stayed exactly 3 nights, and rode back out on FRIDAY! How is that possible?', 'Un vaquero llegó al pueblo el VIERNES, se quedó 3 noches y se fue también el VIERNES. ¿Cómo es posible?', 'カウボーイが「金曜日」に町へやって来て、3泊したあと「金曜日」に町を去りました。どうやって？'],
    m: {
      type: 'lateral_choice', illustration: 'star',
      options: [
        { vi: 'Con ngựa của anh ta tên là "Thứ Sáu"!', en: 'His horse’s name was Friday!', es: '¡Su caballo se llamaba Viernes!', ja: '彼の愛馬の名前が「フライデー（金曜日）」だったから！' },
        { vi: 'Anh ta đi máy bay phản lực', en: 'Jet-lagged time zones', es: 'Cambio de huso horario', ja: '時差ボケだった' },
        { vi: 'Lịch thị trấn bị in sai', en: 'Town calendar glitch', es: 'Calendario roto', ja: '町のカレンダーが壊れていた' },
        { vi: 'Ở lại 1 năm trừ 3 ngày', en: 'Stayed a year', es: 'Se quedó un año', ja: '1年間滞在した' },
      ],
      correctIndex: 0,
    },
    h1: ['Không phải du hành thời gian hay múi giờ đâu!', 'No time travel or date-line trickery!', 'No es viaje en el tiempo.', 'タイムトラベルや時差のトリックではないよ！'],
    h2: ['Anh ta cưỡi CÁI GÌ vào thị trấn?', 'WHAT did he ride into town on?', '¿Sobre QUÉ montaba al entrar?', '彼は何に乗って町に入ったんだっけ？'],
    h3: ['Con ngựa tên là "Thứ Sáu" (Friday)!', 'His horse was named Friday!', '¡Su caballo se llamaba Viernes!', '馬の名前が「金曜日（フライデー）」だった！'],
    e: ['Câu đố kinh điển mọi thời đại: anh chàng cưỡi chú ngựa mang tên "Thứ Sáu"!', 'One of the all-time classic riddles: his horse was named Friday!', '¡Acertijo inmortal: el caballo se llamaba Viernes!', '曜日ではなく「金曜日という名の馬」に乗ってきた、世界一有名なひっかけ問題です！'],
  },
  // 52 (hard)
  {
    diff: 'hard', cat: 'riddle',
    t: ['100 người bắt tay 1 lần', 'Round-Robin Handshakes (8 Players)', 'Saludo en torneo', '8人全員の総当たり握手'],
    p: ['Có 8 kỳ thủ cờ vua tham gia giải đấu vòng tròn — mỗi người đều bắt tay đúng 1 lần với TẤT CẢ những người còn lại. Tổng cộng có bao nhiêu cái bắt tay?', 'Eight chess players greet each other before a tournament; every player shakes hands ONCE with every other player. How many handshakes occur in total?', 'Ocho ajedrecistas se saludan dándose la mano UNA vez cada pareja. ¿Cuántos apretones hay en total?', 'チェス大会の8人の選手が、他の全員と1回ずつ握手をします。握手の回数は全部で何回？'],
    m: { type: 'lock_dial', clueDisplay: '8 players · C(8,2) = ?', correctCode: '28', maxLength: 2 },
    h1: ['Mỗi người trong 8 người bắt tay với 7 người khác — nhưng đừng đếm trùng A-B và B-A!', '8 × 7 counts every pair twice — divide by 2!', '8 × 7 cuenta cada pareja doble: divide entre 2.', '1人あたり7人と握手するけど、AとB・BとAの重複を ÷2 しよう！'],
    h2: ['(8 × 7) ÷ 2 = 56 ÷ 2.', '(8 × 7) ÷ 2 = 56 ÷ 2.', '56 ÷ 2 = ?', '56 ÷ 2 ＝ ？'],
    h3: ['Tổng cộng có 28 cái bắt tay.', 'Total = 28 handshakes.', 'Total = 28 apretones.', '答えは「28」回！'],
    e: ['Công thức tổ hợp cặp C(8, 2) = 8 × 7 / 2 = 28 cái bắt tay!', 'C(8, 2) = 28 unique handshakes!', '¡C(8, 2) = 28 saludos únicos!', '8×7÷2＝合計28回の握手が行われました！'],
  },
  // 53 (hard)
  {
    diff: 'hard', cat: 'drag',
    t: ['Dập tắt đám cháy hóa chất nhẹ', 'Extinguish With Ice', 'Apaga el fuego con hielo', '炎を氷で鎮火しよう'],
    p: ['Ngọn lửa đang bùng cháy giữa phòng! Đừng dùng gió thổi bùng thêm — hãy dập tắt nó ngay!', 'A flame flared up on stage! Put it out safely!', '¡Una llama arde en escena! Apágala de forma segura.', 'ステージで火が燃え上がった！安全に消火しよう！'],
    m: {
      type: 'drag_combine', mode: 'drop_on_target', backdrop: 'room',
      items: [
        { id: 'fire', shape: 'fire', x: 70, y: 56, scale: 1.25 },
        { id: 'water', shape: 'water', x: 24, y: 36, scale: 1.15 },
        { id: 'bomb', shape: 'bomb', x: 24, y: 72, scale: 1.05 },
        { id: 'leaf', shape: 'leaf', x: 50, y: 24, scale: 1.0 },
      ],
      sourceId: 'water', targetId: 'fire',
    },
    h1: ['Lá khô và bom chỉ khiến ngọn lửa nổ bùng lên!', 'Dry leaves and a bomb will make things worse!', 'Hojas secas y bomba empeoran el fuego.', '枯れ葉や爆弾は火事を大きくするだけ！'],
    h2: ['Dùng giọt nước mát lành ở góc trên bên trái.', 'Use the water droplet on the top-left.', 'Usa el agua de arriba a la izquierda.', '左上の水を使おう。'],
    h3: ['Kéo nước thả vào ngọn lửa.', 'Drag water onto the fire.', 'Arrastra el agua sobre el fuego.', '水を炎にドラッグ！'],
    e: ['Nước đã dập tắt đám cháy an toàn tuyệt đối!', 'Water extinguished the fire safely!', '¡El agua apagó el fuego!', '水で無事に鎮火できました！'],
  },
  // 54 (hard)
  {
    diff: 'hard', cat: 'trick',
    t: ['Chữ cái bị che khuất', 'Hidden 9s Between 1 & 100', 'Nueves del 1 al 100', '1から100までに「7」は何個？'],
    p: ['Nếu bạn viết hết tất cả các số nguyên từ 1 đến 100 ra giấy, bạn phải viết CHỮ SỐ 7 bao nhiêu lần?', 'If you write every integer from 1 to 100, how many times will you write the digit 7?', 'Si escribes todos los números del 1 al 100, ¿cuántas veces escribes el dígito 7?', '1から100までの整数をすべて書き出したとき、「7」という数字は全部で何回書くことになる？'],
    m: { type: 'lock_dial', clueDisplay: 'Digits 1..100 → Count of "7" = ?', correctCode: '20', maxLength: 2 },
    h1: ['Đừng quên hàng chục 70, 71, 72... và số 77 có tới HAI chữ số 7!', 'Remember the 70s row (70–79) AND that 77 has TWO 7s!', 'No olvides los setenta (70–79) ni los dos 7 del 77.', '70番台（70〜79）と、「77」には7が2回あることを忘れずに！'],
    h2: ['Hàng đơn vị có 10 số (7, 17, 27... 97); hàng chục có 10 số (70, 71... 79).', '10 times in the units place + 10 times in the tens place!', '10 en unidades + 10 en decenas.', '一の位に10回 ＋ 十の位に10回！'],
    h3: ['10 + 10 = 20 lần.', '10 + 10 = 20 times.', '10 + 10 = 20 veces.', '10 ＋ 10 ＝ 「20」回！'],
    e: ['Có 10 lần ở hàng đơn vị và 10 lần ở hàng chục → Tổng cộng đúng 20 chữ số 7!', '10 in units + 10 in tens = 20 occurrences of digit 7!', '¡10 unidades + 10 decenas = 20 sietes!', '一の位に10個、十の位に10個で合計20回書きます！'],
  },
  // 55 (hard)
  {
    diff: 'hard', cat: 'riddle',
    t: ['Hành trình người đưa thư', 'Four-Animal River Crossing', 'Cruce del río', 'オオカミ・ヤギ・キャベツの川渡し'],
    p: ['Bác nông dân phải chở 1 con Sói, 1 con Dê và 1 bắp Cải qua sông bằng chiếc thuyền nhỏ (mỗi lần chỉ chở được bác + tối đa 1 món). Không có bác trông: Sói sẽ ăn Dê; Dê sẽ ăn Cải. Lần ĐẦU TIÊN bác phải chở món nào qua sông trước?', 'A farmer must ferry a Wolf, a Goat, and a Cabbage across a river in a boat holding only him + ONE item. Left alone, Wolf eats Goat, and Goat eats Cabbage. Which item MUST he take across FIRST?', 'Un granjero cruza un Lobo, una Cabra y una Col (solo 1 por viaje). Lobo come Cabra; Cabra come Col. ¿Qué debe cruzar PRIMERO?', '農夫がオオカミ・ヤギ・キャベツを1つずつ小舟で対岸へ運びます。農夫がいないとオオカミはヤギを、ヤギはキャベツを食べます。最初に渡すべきはどれ？'],
    m: {
      type: 'lateral_choice', illustration: 'leaf',
      options: [
        { vi: 'Chở con DÊ sang trước', en: 'Take the GOAT first', es: 'Llevar la CABRA primero', ja: '最初に「ヤギ」を運ぶ' },
        { vi: 'Chở con Sói sang trước', en: 'Take the Wolf first', es: 'Llevar el Lobo primero', ja: '最初にオオカミ' },
        { vi: 'Chở bắp Cải sang trước', en: 'Take the Cabbage first', es: 'Llevar la Col primero', ja: '最初にキャベツ' },
        { vi: 'Đi thuyền không qua trước', en: 'Cross empty first', es: 'Cruzar vacío primero', ja: '空で渡る' },
      ],
      correctIndex: 0,
    },
    h1: ['Nếu chở Sói đi trước thì ở lại là Dê và Cải — Dê xơi tái Cải ngay!', 'If you leave Goat + Cabbage alone, Goat eats Cabbage!', 'Si dejas Cabra y Col juntas, adiós Col.', 'ヤギとキャベツを残すとヤギがキャベツを食べちゃう！'],
    h2: ['Nếu chở Cải đi trước thì Sói ăn thịt Dê!', 'If you leave Wolf + Goat alone, Wolf eats Goat!', 'Si dejas Lobo y Cabra, adiós Cabra.', 'オオカミとヤギを残してもダメ！'],
    h3: ['Bắt buộc chở con DÊ đi trước để Sói ở lại với Cải (Sói không ăn Cải!).', 'Take the GOAT first — Wolf leaves Cabbage alone!', '¡Lleva la CABRA primero (el lobo no come col)!', 'オオカミはキャベツを食べないので、最初に「ヤギ」を連れて行くのが正解！'],
    e: ['Sói không ăn rau cải! Đưa Dê qua trước (rồi lượt sau chở Sói qua và đón Dê về) là lời giải kinh điển!', 'Take Goat first because Wolves do not eat Cabbage!', '¡El lobo no come col, así que la Cabra va primero!', 'オオカミとキャベツなら一緒に残しても無傷なので、最初にヤギを運ぶのが唯一の突破口です！'],
  },
  // 56 (hard)
  {
    diff: 'hard', cat: 'logic',
    t: ['Ma trận tổng ma thuật 24', 'Sum 24 Diagonal Trio', 'Suma diagonal 24', '合計24の3マス選択'],
    p: ['Chọn chính xác 3 ô trên ma trận 3×3 sao cho TỔNG của chúng bằng đúng 24!', 'Select exactly 3 number tiles whose SUM equals 24!', '¡Elige exactamente 3 casillas cuya SUMA sea 24!', 'ちょうど3枚の数字パネルを選んで「合計が24」になるようにしよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'magic_sum',
      gridSize: 3,
      initialGrid: [false, false, false, false, false, false, false, false, false],
      tileLabels: ['2', '4', '5', '6', '7', '8', '9', '10', '11'],
      requiredCount: 3,
      targetSum: 24,
    },
    h1: ['Vì tổng cần đạt 24 khá lớn, hãy ưu tiên 3 số lớn nhất!', 'Since 24 is large, try combining the biggest tiles!', 'Prueba combinando los números más grandes.', '24は大きいので、大きい数字から選んでみよう！'],
    h2: ['11 + 9 + 4 = 24, hoặc 10 + 9 + 5 = 24, hoặc 11 + 8 + 5 = 24!', '10 + 9 + 5 = 24 (or 11 + 8 + 5 = 24)!', 'Por ejemplo 10 + 9 + 5 = 24.', '10 ＋ 9 ＋ 5 ＝ 24 などが使えるよ！'],
    h3: ['Chọn 10, 9 và 5 rồi bấm Kiểm tra.', 'Pick 10, 9, and 5, then Check.', 'Elige 10, 9 y 5 y comprueba.', '「10」「9」「5」を選んで確認！'],
    e: ['10 + 9 + 5 = 24 chính xác tuyệt đối!', 'Exact target sum 24 reached!', '¡Suma exacta 24!', '見事合計24の組み合わせを導き出しました！'],
  },
  // 57 (hard)
  {
    diff: 'hard', cat: 'visual',
    t: ['Tổ ong 3 vòng 19 ô', '3-Ring Honeycomb Count', 'Panal de 3 anillos', '3層のハチの巣の六角形'],
    p: ['Mở rộng thêm 1 vòng ngoài nữa! Tổ ong đối xứng 3 vòng này có tổng cộng bao nhiêu hình lục giác?', 'One extra ring! How many total hexagons form this full 3-ring honeycomb?', 'Un anillo más: ¿cuántos hexágonos completos hay en este panal de 3 anillos?', 'さらに外側に1周増えました！この3層構造のハチの巣には全部でいくつの六角形がある？'],
    m: { type: 'visual_count', visualKind: 'hex_honeycomb', variant: 1, correctAnswer: 19, min: 7, max: 30 },
    h1: ['Đếm từng vòng: vòng tâm (1), vòng giữa (6)... còn vòng ngoài cùng màu vàng nhạt có mấy ô?', 'Count ring by ring: center (1) + middle (6) + outer ring (?).', 'Cuenta anillo por anillo: 1 + 6 + anillo exterior.', '内側から輪ごとに数えよう：中心(1) ＋ 2周目(6) ＋ 外側(？)。'],
    h2: ['Vòng ngoài cùng có 12 ô lục giác!', 'The outer ring holds 12 hexagons!', 'El anillo exterior tiene 12 hexágonos.', '一番外側の輪には12個の六角形があるよ！'],
    h3: ['1 + 6 + 12 = 19 hình lục giác.', '1 + 6 + 12 = 19 hexagons.', '1 + 6 + 12 = 19 hexágonos.', '1 ＋ 6 ＋ 12 ＝ 「19」個！'],
    e: ['Chuỗi số lục giác tâm (Centered Hexagonal Number): 1 + 6 + 12 = 19!', '1 + 6 + 12 = 19 centered hexagonal cells!', '¡1 + 6 + 12 = 19 celdas!', '中心(1)＋第1リング(6)＋第2リング(12)＝合計19個です！'],
  },
  // 58 (hard)
  {
    diff: 'hard', cat: 'trick',
    t: ['Câu đố đồng xu 2 mặt', 'Two Coins Equal 30 Cents', 'Dos monedas suman 30', '合計30セントの2枚のコイン'],
    p: ['Bạn có 2 đồng xu Mỹ tổng giá trị đúng 30 xu (cents). Biết rằng MỘT trong hai đồng xu đó KHÔNG PHẢI đồng 5 xu (nickel). Hỏi 2 đồng đó mệnh giá nào? Nhập giá trị đồng xu LỚN HƠN!', 'Two US coins total 30 cents. ONE of them is NOT a nickel (5¢). What is the value (in cents) of the LARGER coin?', 'Dos monedas suman 30 centavos. UNA de ellas NO es de 5 centavos. ¿Cuánto vale la moneda MAYOR?', '2枚のコインの合計は30セント。「そのうち1枚は5セント硬貨ではない」とき、大きい方のコインは何セント？'],
    m: { type: 'lock_dial', clueDisplay: 'A + B = 30¢ · One is NOT 5¢ → Larger = ?¢', correctCode: '25', maxLength: 2 },
    h1: ['Đọc kỹ: "MỘT trong hai đồng không phải 5 xu" — đồng KIA vẫn có thể là 5 xu mà!', '"ONE of them is not a nickel" — the OTHER one IS a nickel!', '¡"Una no es de 5", pero la OTRA sí lo es!', '「片方は5セントではない」＝「もう片方は5セント」ってこと！'],
    h2: ['30¢ − 5¢ = 25¢ (quarter)!', '30¢ − 5¢ = 25¢ (a quarter)!', '30 − 5 = 25 centavos.', '30 − 5 ＝ 25セント！'],
    h3: ['Đồng lớn hơn là 25 xu → nhập 25.', 'The larger coin is 25¢ → enter 25.', 'La mayor vale 25 → ingresa 25.', '大きい方は「25」セント！'],
    e: ['Một đồng 25 xu (không phải 5 xu) và đồng còn lại là 5 xu → 25 + 5 = 30 xu!', 'A 25¢ quarter (not a nickel) + a 5¢ nickel = 30¢!', '¡Una de 25 y la otra de 5 suman 30!', '25セント（5セントではない）と5セントのペアで合計30セントになります！'],
  },
  // 59 (hard)
  {
    diff: 'hard', cat: 'riddle',
    t: ['Cuộc đua 30m của Ếch & Thỏ', 'Dead Snail Distance Trap', 'Caracol en carrera', 'カタツムリの奇妙なゴール'],
    p: ['An và Bình thi chạy 100m. Lần 1 An thắng Bình đúng 10m (khi An cán đích 100m, Bình ở vạch 90m). Lần 2 An chấp Bình xuất phát trước 10m — hoặc lùi vạch xuất phát của An ra sau 10m (phải chạy 110m). Ai về đích trước nếu cả hai chạy cùng tốc độ như lần 1?', 'Alice beats Bob by 10 m in a 100 m race. In a rematch, Alice starts 10 m BEHIND the starting line (running 110 m vs Bob’s 100 m) at the exact same speeds. Who wins?', 'Alicia gana a Beto por 10 m en 100 m. En la revancha Alicia sale 10 m ATRÁS (corre 110 m). Con la misma velocidad, ¿quién gana?', '100m走でアリスはボブに10m差で勝ちました。再戦ではアリスがスタートラインの「10m後ろ（計110m）」から同時に走ります。同じ速さなら誰が勝つ？'],
    m: {
      type: 'lateral_choice', illustration: 'trophy',
      options: [
        { vi: 'An vẫn thắng! (Họ ngang nhau ở mét 90/100, 10m cuối An nhanh hơn)', en: 'Alice STILL wins! (They tie at Bob’s 90m mark; Alice runs the last 10m faster!)', es: '¡Alicia GANA igual! (Empatan a los 90 m de Beto y Alicia remata más rápido)', ja: 'アリスが勝つ！（90m地点で並び、最後の10mはアリスの方が速いから！）' },
        { vi: 'Hòa nhau ngay tại vạch đích', en: 'Exact photo-finish tie', es: 'Empate exacto en meta', ja: 'ちょうど同着になる' },
        { vi: 'Bình thắng dễ dàng', en: 'Bob wins easily', es: 'Gana Beto fácil', ja: 'ボブの勝ち' },
        { vi: 'Không xác định được', en: 'Impossible to tell', es: 'Imposible saberlo', ja: '判定不能' },
      ],
      correctIndex: 0,
    },
    h1: ['Khi An chạy được 100m (tức ở vạch 90m của đường đua), Bình cũng vừa chạy đúng 90m!', 'In the time Alice runs 100 m (reaching Bob’s 90 m mark), Bob reaches 90 m!', 'Cuando Alicia recorre 100 m (marca de 90 m), Beto va en 90 m.', 'アリスが100m走った瞬間（スタートから90m地点）、ボブも90m地点に並んでいるよ！'],
    h2: ['Cả hai cùng còn đúng 10m cuối cùng tới đích! Ai chạy nhanh hơn?', 'Both now have 10 m left side-by-side — who is faster?', '¡A ambos les quedan 10 m a la par!', '残り10mを同時にスタート！足が速いのはどっち？'],
    h3: ['An chạy nhanh hơn nên An vượt lên thắng ngay 10m cuối!', 'Alice is faster, so Alice wins the final 10 m!', '¡Alicia es más rápida y gana!', 'アリスの方がスピードが速いのでアリスが勝つ！'],
    e: ['Ở vạch 90m hai người ngang nhau (An đã chạy 100m, Bình chạy 90m), và 10m cuối An chạy nhanh hơn nên An thắng!', 'They tie at the 90 m mark (100 m vs 90 m covered), and Alice wins the final 10 m!', '¡Empatan en el metro 90 y Alicia gana los últimos 10 m!', '90m地点で横並びになり、ラスト10mの勝負で速いアリスが再び勝ちます！'],
  },
  // 60 (hard)
  {
    diff: 'hard', cat: 'action',
    t: ['Giữ thăng bằng lõi nguyên tử', '4.5-Second Zen Focus Hold', 'Mantén 4.5 segundos', '4.5秒間の精密チャージ'],
    p: ['Lò phản ứng cần độ tập trung cao! Nhấn và GIỮ đồng hồ cát trong đúng 4.5 giây (không nhả tay sớm)!', 'Hold the hourglass steady for 4.5 full seconds without letting go!', 'Mantén PULSADO el reloj de arena 4.5 segundos seguidos.', '砂時計を4.5秒間じっと長押しし続けよう！'],
    m: {
      type: 'action_meter', mode: 'hold', targetShape: 'hourglass', resultShape: 'diamond', requiredValue: 4.5,
      meterLabel: { vi: 'Độ ổn định thời gian', en: 'Chrono Sync', es: 'Sincronía temporal', ja: '時間シンクロ' },
    },
    h1: ['Giữ chặt đồng hồ cát — đừng thả tay ra giữa chừng.', 'Press and hold continuously on the hourglass.', 'Mantén pulsado sin soltar.', '離さずにずっと押し続けよう。'],
    h2: ['Thanh tiến trình đầy 100% sau 4.5 giây.', 'It hits 100% at 4.5 seconds.', 'Llega al 100% a los 4.5 segundos.', '4.5秒で100%に到達するよ。'],
    h3: ['Giữ đủ 4.5 giây.', 'Hold for 4.5 seconds.', 'Sostén 4.5 segundos.', '4.5秒長押し！'],
    e: ['Độ tập trung tuyệt đỉnh: đồng bộ thời gian 4.5 giây hoàn hảo!', '4.5-second chrono sync locked in!', '¡Sincronía de 4.5s completada!', '見事な集中力で4.5秒シンクロ完了！'],
  },
  // 61 (hard)
  {
    diff: 'hard', cat: 'logic',
    t: ['Thứ tự tốc độ thiên nhiên', 'Nature Speed Ranking', 'Velocidad en la naturaleza', '自然界の速さランキング'],
    p: ['Sắp xếp 4 hiện tượng/sinh vật sau từ CHẬM NHẤT đến NHANH NHẤT!', 'Sort these 4 from SLOWEST to FASTEST!', 'Ordena estos 4 de MÁS LENTO a MÁS RÁPIDO.', '次の4つをスピードが「遅い順」に並べ替えよう！'],
    m: {
      type: 'order_sort',
      items: [
        { id: 'light', shape: 'sun', label: { vi: 'Ánh sáng', en: 'Speed of Light', es: 'Velocidad de la luz', ja: '光の速さ' } },
        { id: 'rocket', shape: 'rocket', label: { vi: 'Tên lửa vũ trụ', en: 'Space Rocket', es: 'Cohete espacial', ja: '宇宙ロケット' } },
        { id: 'car', shape: 'car', label: { vi: 'Ô tô đường phố', en: 'City Car', es: 'Coche urbano', ja: '自動車' } },
        { id: 'frog', shape: 'frog', label: { vi: 'Ếch nhảy', en: 'Hopping Frog', es: 'Rana saltando', ja: 'カエル' } },
      ],
      correctOrder: ['frog', 'car', 'rocket', 'light'],
    },
    h1: ['Chú ếch di chuyển chậm nhất; ánh sáng nhanh nhất vũ trụ.', 'Frog is slowest; light is fastest in the universe.', 'La rana es la más lenta; la luz la más rápida.', 'カエルが一番遅く、光が宇宙最速！'],
    h2: ['Ếch < Ô tô < Tên lửa < Ánh sáng.', 'Frog < City Car < Space Rocket < Light.', 'Rana < Coche < Cohete < Luz.', 'カエル ＜ 車 ＜ ロケット ＜ 光。'],
    h3: ['Thứ tự: Ếch → Ô tô → Tên lửa → Ánh sáng.', 'Order: Frog → Car → Rocket → Light.', 'Orden: Rana → Coche → Cohete → Luz.', 'カエル → 自動車 → ロケット → 光！'],
    e: ['Từ bước nhảy của ếch đến vận tốc 300.000 km/s của ánh sáng!', 'From hopping frog up to 300,000 km/s light!', '¡De la rana hasta la velocidad de la luz!', 'カエルの跳躍から光速まで完璧に並びました！'],
  },
  // 62 (hard)
  {
    diff: 'hard', cat: 'trick',
    t: ['Câu hỏi lừa: Ai nặng hơn?', 'Heavy Month Trick', 'Mes pesado', '一番長い10月は？'],
    p: ['Tháng nào trong năm có 28 ngày?', 'Wait: in a normal year, some months have 30 days and some have 31. How many months have AT LEAST 28 days?', 'Algunos meses tienen 30 días y otros 31. ¿Cuántos meses tienen AL MENOS 28 días?', '1年で30日の月や31日の月がありますが、「28日以上」ある月は全部で何か月？'],
    m: { type: 'lock_dial', clueDisplay: 'Months with ≥ 28 days = ?', correctCode: '12', maxLength: 2 },
    h1: ['Cả tháng Hai (28 hoặc 29 ngày) lẫn các tháng 30, 31 ngày đều có >= 28 ngày!', 'Every single month has at least 28 days!', '¡Todos los meses tienen al menos 28 días!', '2月も含めて、すべての月が28日以上あるよ！'],
    h2: ['Một năm có bao nhiêu tháng?', 'How many months are in a year?', '¿Cuántos meses tiene un año?', '1年は全部で何か月？'],
    h3: ['Cả 12 tháng đều có >= 28 ngày!', 'All 12 months!', '¡Los 12 meses!', '12か月すべて！答えは「12」！'],
    e: ['Tháng nào trong 12 tháng chẳng có ít nhất 28 ngày!', 'All 12 months have 28 or more days!', '¡Todos los 12 meses tienen 28 o más días!', '2月が28日（うるう年29日）、他の月は30か31日なので、12か月すべて該当します！'],
  },
  // 63 (genius)
  {
    diff: 'genius', cat: 'logic',
    t: ['Thử thách Monty Hall (3 Cửa)', 'Monty Hall Probability', 'Paradoja de Monty Hall', 'モンティ・ホール問題の真実'],
    p: ['Có 3 cánh cửa: 1 cửa có siêu xe, 2 cửa là con dê. Bạn chọn Cửa #1. Người dẫn mở Cửa #3 (biết chắc sau #3 là con dê) và hỏi: "Bạn có ĐỔI sang Cửa #2 không?" Nếu ĐỔI, xác suất thắng siêu xe là bao nhiêu?', 'Monty Hall Show: 3 doors (1 Car, 2 Goats). You pick Door #1. Host knowingly opens Goat Door #3 and asks: "Switch to Door #2?" If you SWITCH, what is your probability of winning the car?', '3 puertas (1 Coche, 2 Cabras). Eliges la #1. El presentador abre la #3 (Cabra) y te ofrece cambiar a la #2. ¿Cuál es la probabilidad de ganar si CAMBIAS?', '3つのドア（当たり1、ハズレ2）から#1を選択。司会者がハズレの#3を開け、「#2に変更しますか？」と尋ねました。変更した場合の勝率は？'],
    m: {
      type: 'lateral_choice', illustration: 'door',
      options: [
        { vi: '2/3 (~66.7%) — ĐỔI gấp đôi cơ hội thắng!', en: '2/3 (~66.7%) — Switching DOUBLES your odds!', es: '2/3 (~66,7%) — ¡Cambiar DUPLICA tus opciones!', ja: '2/3（約66.7%）— 変えると勝率が2倍になる！' },
        { vi: '1/2 (50%) — Hai cửa còn lại như nhau', en: '1/2 (50%) — Equal chance', es: '1/2 (50%) — Igual probabilidad', ja: '1/2（50%）— 同じ確率' },
        { vi: '1/3 (~33.3%) — Không thay đổi gì', en: '1/3 (~33.3%) — Unchanged', es: '1/3 (~33,3%) — Igual', ja: '1/3（約33.3%）— 変わらない' },
        { vi: '0% — Đều là bẫy', en: '0% — Always a goat', es: '0% — Siempre cabra', ja: '0% — 必ずハズレ' },
      ],
      correctIndex: 0,
    },
    h1: ['Ban đầu Cửa #1 có 1/3 cơ hội trúng; hai cửa còn lại (#2 + #3) gộp chung nắm tới 2/3 cơ hội!', 'Your first pick held 1/3; the other two doors together held 2/3!', 'Tu puerta tenía 1/3; las otras dos juntas 2/3.', '最初に選んだ#1が当たりの確率は1/3、残りの2つ（#2と#3）に当たりがある確率は合計2/3！'],
    h2: ['Người dẫn buộc phải mở cửa dê trong nhóm 2/3 đó — dồn toàn bộ xác suất 2/3 sang Cửa #2!', 'The host filters out the goat from that 2/3 group, concentrating all 2/3 onto Door #2!', 'Al descartar la #3, todo ese 2/3 pasa a la #2.', '司会者が#3（ハズレ）を消してくれたおかげで、2/3の確率が丸ごと#2に集約された！'],
    h3: ['Chọn 2/3 (~66.7%)!', 'Pick 2/3 (~66.7%)!', 'Elige 2/3 (~66,7%)!', '「2/3（約66.7%）」を選ぼう！'],
    e: ['Nghịch lý Monty Hall nổi tiếng: luôn ĐỔI cửa sẽ thắng 2/3 số lần!', 'Marilyn vos Savant was right: switching wins 2/3 of the time!', '¡Cambiar gana 2 de cada 3 veces!', '司会者が答えを知って開けるため、ドアを変えた方が確率が1/3から2/3へ倍増します！'],
  },
  // 64 (genius)
  {
    diff: 'genius', cat: 'trick',
    t: ['Ảo thuật 100 đồng xu trong tối', '100 Coins in Total Darkness', '100 monedas a oscuras', '真っ暗闇の100枚のコイン'],
    p: ['Trên bàn trong phòng tối om có 100 đồng xu: đúng 10 đồng đang ngửa (Heads), 90 đồng đang sấp (Tails) — sờ tay không phân biệt được. Bạn phải chia thành 2 nhóm sao cho số đồng NGỬA ở hai nhóm BẰNG NHAU! Bạn tách ra một nhóm gồm BAO NHIÊU đồng rồi lật ngược tất cả đồng trong nhóm đó?', 'In pitch darkness, 100 coins lie on a table: 10 are Heads, 90 are Tails (indistinguishable by touch). To split them into two piles with EQUAL Heads, how many coins do you take into a second pile and flip all of them?', 'A oscuras hay 100 monedas: 10 caras y 90 cruces (no se distinguen al tacto). ¿Cuántas monedas apartas en un segundo grupo para voltearlas todas y lograr igual número de caras en ambos grupos?', '真っ暗な部屋に100枚のコインがあり、うち10枚が表、90枚が裏です（触っても区別不能）。2つの山に分けて「表の枚数を同じ」にするには、何枚を別にして全部ひっくり返せばいい？'],
    m: { type: 'lock_dial', clueDisplay: '100 coins (10 Heads) → Take ? coins & flip all', correctCode: '10', maxLength: 3 },
    h1: ['Giả sử bạn tách ra ngẫu nhiên k đồng, trong đó lỡ có x đồng Ngửa (vậy nhóm lớn còn 10 − x đồng Ngửa).', 'Suppose you take k coins and accidentally get x Heads (leaving 10 − x Heads in the big pile).', 'Si apartas k monedas con x caras, quedan 10 − x caras en el grande.', 'k枚を別にして、その中にたまたま表がx枚あったとすると、元の山には表が(10−x)枚残るよね。'],
    h2: ['Khi LẬT NGƯỢC toàn bộ nhóm nhỏ k đồng, x đồng Ngửa thành Sấp, còn (k − x) đồng Sấp biến thành NGỬA! Ta muốn (k − x) = (10 − x)!', 'Flipping all k coins turns (k − x) Tails into HEADS! Set k − x = 10 − x!', 'Al voltear las k monedas obtienes k − x caras. ¡Queremos k − x = 10 − x!', 'k枚を全部裏返すと表の数は(k−x)枚になる！つまり k − x ＝ 10 − x になれば完璧！'],
    h3: ['Suy ra k = 10 đồng xu!', 'Therefore k = 10 coins!', 'Por lo tanto k = 10 monedas.', 'よって k ＝ 「10」枚！'],
    e: ['Tách đúng 10 đồng bất kỳ rồi lật úp cả 10 đồng: nếu trong đó có x ngửa thì nay thành 10−x ngửa — luôn bằng y hệt nhóm 90 đồng còn lại!', 'Pick any 10 coins and flip all 10: if you had x Heads, flipping gives 10−x Heads, matching the 10−x left behind!', '¡Aparta 10 monedas cualesquiera y voltéalas todas: siempre igualan!', '任意の10枚を分けて全部ひっくり返せば、表がx枚→裏返して(10−x)枚になり、残りの山(10−x)枚と必ず一致します！'],
  },
  // 65 (genius)
  {
    diff: 'genius', cat: 'logic',
    t: ['Tích số Fibonacci ẩn 720', 'Factorial Product 720', 'Producto 720', '積が720になる3つの数'],
    p: ['Chọn chính xác 3 ô số trên lưới sao cho TÍCH (phép nhân) của chúng bằng đúng 720!', 'Select exactly 3 tiles whose PRODUCT equals 720!', '¡Elige exactamente 3 casillas cuyo PRODUCTO sea 720!', 'ちょうど3枚選んで「掛け算の積が720」になるようにしよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'magic_sum',
      gridSize: 3,
      initialGrid: [false, false, false, false, false, false, false, false, false],
      tileLabels: ['3', '4', '5', '6', '7', '8', '9', '10', '12'],
      requiredCount: 3,
      targetProduct: 720,
    },
    h1: ['720 = 6! = 6 × 5 × 4 × 3 × 2 = 8 × 9 × 10!', 'Notice 720 = 8 × 9 × 10 (or 12 × 10 × 6)!', '720 = 8 × 9 × 10 o 12 × 10 × 6.', '720 ＝ 8 × 9 × 10 や 12 × 10 × 6 だよ！'],
    h2: ['Kiểm tra lại: 8 × 9 = 72, nhân thêm 10 = 720!', '8 × 9 = 72; × 10 = 720!', '8 × 9 × 10 = 720.', '8 × 9 ＝ 72、それに10を掛けると720！'],
    h3: ['Chọn 8, 9, 10 (hoặc 12, 10, 6) rồi bấm Kiểm tra.', 'Select 8, 9, and 10 (or 12, 10, 6), then Check.', 'Elige 8, 9 y 10 y comprueba.', '「8」「9」「10」を選んで確認を押そう！'],
    e: ['8 × 9 × 10 = 720 (và 12 × 10 × 6 = 720) — siêu gọn!', '8 × 9 × 10 = 720!', '¡8 × 9 × 10 = 720!', '8×9×10＝720 がピタリと一致しました！'],
  },
  // 66 (genius)
  {
    diff: 'genius', cat: 'riddle',
    t: ['Hai cánh cửa Thiên Đường & Địa Ngục', 'Two Guards: Truth & Liar', 'El guardián mentiroso y el veraz', '正直者と嘘つきの2つの扉'],
    p: ['Bạn đứng trước 2 cánh cửa (1 cửa Tự Do, 1 cửa Bẫy). Có 2 người gác: một kẻ LUÔN NÓI THẬT, một kẻ LUÔN NÓI DỐI (không biết ai là ai). Bạn chỉ được hỏi 1 người ĐÚNG 1 CÂU hỏi gì để biết chắc chắn đâu là cửa Tự Do?', 'Two doors (Freedom vs Trap) and two guards: one ALWAYS tells the truth, one ALWAYS lies. You may ask ONE guard ONE question to guarantee picking Freedom. What do you ask?', 'Dos puertas y dos guardias: uno siempre dice la VERDAD y otro siempre MIENTE. Solo puedes hacer UNA pregunta a uno. ¿Qué preguntas?', '2つの扉と2人の門番（1人は正直者、1人は嘘つき）。どちらか1人に1回だけ質問して、確実に正解の扉を選ぶ質問は？'],
    m: {
      type: 'lateral_choice', illustration: 'door',
      options: [
        { vi: '"Nếu tôi hỏi người KIA cửa nào là Tự Do, anh ta sẽ chỉ cửa nào?" → Chọn cửa NGƯỢC LẠI!', en: '"Which door would the OTHER guard say leads to Freedom?" → Pick the OPPOSITE door!', es: '"¿Qué puerta diría el OTRO guardia que es la de Libertad?" → ¡Elige la OPUESTA!', ja: '「もう1人の門番ならどちらの扉が正解と答える？」と聞き、逆の扉を選ぶ！' },
        { vi: '"Anh có phải là kẻ nói dối không?"', en: '"Are you the liar?"', es: '"¿Eres el mentiroso?"', ja: '「あなたは嘘つきですか？」' },
        { vi: '"Cửa bên trái có phải cửa Tự Do không?"', en: '"Is the left door Freedom?"', es: '"¿La izquierda es Libertad?"', ja: '「左の扉は正解ですか？」' },
        { vi: '"1 + 1 bằng mấy?"', en: '"What is 1 + 1?"', es: '"¿Cuánto es 1 + 1?"', ja: '「1+1は何？」' },
      ],
      correctIndex: 0,
    },
    h1: ['Phép nhân dấu âm × dương = luôn ra ÂM (dù hỏi ai câu trả lời cũng luôn chỉ vào cửa Bẫy)!', 'Double negation logic: Truth(Liar) = Lie, and Lie(Truth) = Lie!', 'Verdad(Mentira) = Mentira y Mentira(Verdad) = Mentira.', '「正直者が嘘つきの答えをそのまま言う＝嘘」＆「嘘つきが正直者の答えを逆に言う＝嘘」！'],
    h2: ['Hãy hỏi lồng câu trả lời của người gác CÒN LẠI!', 'Nest the OTHER guard inside your question!', 'Pregunta por la respuesta del OTRO guardia.', '「もう1人の門番ならどう答えるか？」を質問しよう！'],
    h3: ['Cả hai chắc chắn đều chỉ cửa Bẫy — nên chọn cửa NGƯỢC LẠI!', 'Both guards will point to the Trap — choose the opposite door!', 'Ambos señalarán la trampa: ¡elige la otra!', 'どちらに聞いても必ずハズレを指すので、その逆の扉を選べば100%正解！'],
    e: ['Kinh điển logic học: kết hợp Truth-teller và Liar trong 1 câu hỏi biến cả 2 thành chỉ điểm cửa sai để ta chọn ngược lại!', 'Nesting the other guard guarantees both point to the Trap door so you pick the opposite!', '¡Una doble negación infalible!', '二重否定の性質を利用することで、正直者・嘘つきのどちらに聞いても確実に正解を逆算できます！'],
  },
  // 67 (genius)
  {
    diff: 'genius', cat: 'trick',
    t: ['100 tù nhân & 100 chiếc hộp', '4-Minute & 7-Minute Sandglasses', 'Relojes de arena 4 y 7 min', '4分と7分の砂時計で9分'],
    p: ['Bạn chỉ có 1 đồng hồ cát 4 phút và 1 đồng hồ cát 7 phút. Nếu bắt đầu đếm từ T = 0, làm sao đo ĐÚNG 9 phút nhanh nhất có thể (chỉ mất đúng 9 phút tổng cộng)? Bắt đầu bằng cách lật CẢ HAI cùng lúc; ở phút thứ 4 bạn lật cái nào, ở phút thứ 7 lật cái nào, và ở phút thứ 8 lật cái nào?', 'You have a 4-min sandglass and a 7-min sandglass. Flip BOTH at t = 0. At t = 4 flip 4-min; at t = 7 flip 7-min. At t = 8 (when 4-min runs out), how many minutes remain in the 7-min sandglass if you flip 7-min AGAIN at t = 8? Wait: calculate the exact total time when it finishes: 8 + ? = 9!', 'Giras el de 4 y 7 min en t=0. En t=4 giras el de 4; en t=7 giras el de 7. En t=8 vuelve a girar el de 7 (que solo llevaba 1 min cayendo). ¿Cuánto tiempo falta desde t=8 para llegar a 9 min?', '4分と7分の砂時計をt=0で同時にスタート！t=4で4分計を、t=7で7分計をひっくり返します。t=8（4分計が2回目終了）の瞬間に7分計をもう一度ひっくり返すと、落ち切るのはあと何分後？'],
    m: { type: 'lock_dial', clueDisplay: 't=8 (7-min ran 1m) → flip 7-min → runs out in ? min', correctCode: '1', maxLength: 2 },
    h1: ['Ở phút t = 7, đồng hồ 7 phút vừa được lật lại hoàn toàn mới.', 'At t = 7, the 7-min sandglass starts fresh.', 'En t=7 empieza de cero el de 7 min.', 't=7に7分計をひっくり返した直後だよ。'],
    h2: ['Đến phút t = 8 (chỉ 1 phút sau t = 7), bên dưới đồng hồ 7 phút mới chảy xuống được đúng 1 phút cát!', 'By t = 8, exactly 1 minute of sand has fallen into the bottom bulb of the 7-min glass!', 'En t=8 ha caído exactamente 1 minuto de arena en el de 7.', 't=8の時点で、7分計の下にはちょうど「1分ぶん」の砂が落ちている！'],
    h3: ['Lật ngược lại ở t = 8 thì 1 phút cát đó chảy hết đúng ở t = 9 → mất thêm 1 phút!', 'Flipping at t = 8 takes 1 minute to empty (total 9 min)!', 'Al girarlo en t=8 tarda 1 minuto en vaciarse.', 't=8でひっくり返せばその1分ぶんが落ち切って合計9分！あと「1」分！'],
    e: ['Phút t=8 chỉ có 1 phút cát trong bình chứa nên lật ngược phát là hết ngay tại phút thứ 9!', 'Flipping the 1-minute portion at t = 8 finishes right at 9 minutes!', '¡1 minuto exacto para completar 9 minutos!', 't=8の時点で落ちていた1分分の砂を逆さにして落とすことで、ぴったり9分を測り切れます！'],
  },
  // 68 (genius)
  {
    diff: 'genius', cat: 'visual',
    t: ['Thử thách đồng hồ gương 2:45', 'Mirror Clock Symmetric Hour', 'Reloj espejo simétrico', '鏡時計の対称トリック'],
    p: ['Kim giờ màu đỏ chỉ ngay mốc 10 giờ (nhìn qua gương phẳng). Hỏi ngoài đời thật đồng hồ đang chỉ mấy giờ?', 'Viewed in a flat mirror, the red hour hand points straight at 10 o’clock. What real hour does the actual clock show?', 'Visto en un espejo, la aguja roja apunta a las 10. ¿Qué hora real marca el reloj?', '鏡に映った時計の赤い時針が「10時」を指しています。実際の時計は何時を指している？'],
    m: { type: 'visual_count', visualKind: 'mirror_clock', variant: 10, correctAnswer: 2, min: 1, max: 12 },
    h1: ['Trục đối xứng gương là đường thẳng đứng 12–6!', 'Mirror reflection flips horizontally across the 12–6 axis!', 'El espejo invierte respecto al eje vertical 12–6.', '鏡の対称軸は12時と6時を結ぶ縦の線だよ！'],
    h2: ['Lấy 12 trừ đi số giờ nhìn thấy trong gương: 12 − 10 = ?', '12 − 10 = ?', '12 − 10 = ?', '12 − 10 ＝ ？'],
    h3: ['Giờ thật là 2 giờ.', 'Real hour is 2.', 'Son las 2 en punto.', '答えは「2」時！'],
    e: ['10 giờ soi gương đối xứng ngang thành 2 giờ ngoài đời thật!', '10 o’clock mirrored across 12–6 becomes 2 o’clock!', '¡Las 10 en el espejo son las 2 reales!', '10時は鏡で左右反転すると実際の2時になります！'],
  },
  // 69 (genius)
  {
    diff: 'genius', cat: 'trick',
    t: ['5 tên cướp biển chia 100 đồng vàng', '5 Pirates & 100 Gold Coins', '5 piratas y 100 monedas', '海賊5人の100枚金貨ゲーム'],
    p: ['Lý thuyết trò chơi kinh điển: 5 tên cướp biển (hạng 5 mạnh nhất → hạng 1 yếu nhất) chia 100 đồng vàng. Hạng 5 đề xuất cách chia; nếu ít nhất NỬA số cướp (tính cả mình, tức 3/5) đồng ý thì chia thế, không thì Hạng 5 bị ném xuống biển rồi Hạng 4 chia tiếp. Để TỐI ĐA hóa vàng mà vẫn sống sót, Hạng 5 tự giữ cho mình BAO NHIÊU đồng?', 'Game Theory Classic: 5 rational pirates (#5 Captain down to #1) split 100 gold coins. Captain #5 proposes a split; if ≥50% (3 of 5, including #5) vote YES, it passes; else #5 walks the plank and #4 proposes. What is the MAX gold #5 keeps safely?', 'Teoría de juegos: 5 piratas (#5 al #1) reparten 100 monedas. Si ≥50% (3 votos, incluyéndose) aprueban, pasa; si no, #5 muere y propone #4. ¿Cuál es el MÁXIMO de monedas que conserva #5?', 'ゲーム理論の名問：5人の海賊（序列5〜1）が金貨100枚を分配します。過半数（提案者含む半分以上）の賛成で可決、否決なら提案者は追放。最も有利な序列5の船長は自分用に最大何枚確保できる？'],
    m: { type: 'lock_dial', clueDisplay: '5 Pirates (100 gold) · Backward Induction → #5 gets ?', correctCode: '98', maxLength: 3 },
    h1: ['Suy luận ngược từ 2 tên cuối (#2 và #1)! Với 2 tên, #2 tự chia 100-0 (50% = 1/2 là đủ thắng!).', 'Use backward induction! With 2 pirates (#2, #1), #2 takes [100, 0] and wins with 50%!', 'Inducción hacia atrás: con 2 piratas, #2 se queda 100 y #1 recibe 0.', '後ろから逆算しよう！残り2人(#2,#1)なら#2が100枚総取りで過半数(1/2)可決！'],
    h2: ['Với 3 tên (#3,#2,#1): #3 chỉ cần cho #1 đúng 1 đồng (vì #1 sẽ có 0 nếu #3 chết!) → [99,0,1]. Với 4 tên: #4 cho #2 đúng 1 đồng → [99,0,1,0].', 'With 3 pirates: #3 offers [99, 0, 1]. With 4 pirates: #4 offers [99, 0, 1, 0] (needs 2 votes)!', 'Con 3: [99,0,1]. Con 4: [99,0,1,0].', '3人なら[99,0,1]、4人なら[99,0,1,0]で可決されるよ！'],
    h3: ['Với 5 tên (#5 cần 3 phiếu): #5 cho mình + #3 (1 đồng) + #1 (1 đồng) → [98, 0, 1, 0, 1] → #5 giữ 98 đồng!', 'With 5 pirates (#5 needs 3 votes): #5 bribes #3 (1 coin) and #1 (1 coin) → [98, 0, 1, 0, 1]!', 'Con 5 piratas, #5 soborna a #3 y #1 con 1 moneda cada uno → ¡se queda 98!', '5人の時は#3と#1に1枚ずつ渡せば3票獲得！自分の取り分は「98」枚！'],
    e: ['Kinh điển lý thuyết trò chơi: [98, 0, 1, 0, 1] giúp cướp biển trưởng #5 giữ tới 98/100 đồng vàng!', 'Backward induction reveals #5 keeps 98 gold coins with [98, 0, 1, 0, 1]!', '¡Inducción hacia atrás: [98, 0, 1, 0, 1] da 98 al capitán!', '後ろ向き帰納法により[98, 0, 1, 0, 1]で船長はなんと98枚も独り占めできます！'],
  },
  // 70 (genius)
  {
    diff: 'genius', cat: 'action',
    t: ['Mã nhị phân 11 (1011)', 'Binary 11 Switch Lock', 'Interruptores binario 11', '2進数「11」のスイッチ'],
    p: ['4 công tắc theo trọng số [8] [4] [2] [1]. Hãy bật đúng trạng thái để mã nhị phân bằng 11!', 'Toggle the [8] [4] [2] [1] switches to represent binary 11!', 'Configura los interruptores [8] [4] [2] [1] para sumar exactamente 11.', '[8] [4] [2] [1] のスイッチを操作して合計ちょうど「11」にしよう！'],
    m: {
      type: 'action_meter', mode: 'switches', targetShape: 'diamond', switchCount: 4,
      targetMask: [true, false, true, true],
      requiredValue: 11,
      meterLabel: { vi: 'Nhị phân [8][4][2][1] = 11', en: 'Binary [8][4][2][1] = 11', es: 'Binario [8][4][2][1] = 11', ja: '2進数 [8][4][2][1] = 11' },
    },
    h1: ['8 + 2 + 1 = 11!', '8 + 2 + 1 = 11!', '8 + 2 + 1 = 11!', '8 ＋ 2 ＋ 1 ＝ 11！'],
    h2: ['Công tắc [4] phải TẮT.', 'Keep switch [4] OFF.', 'Mantén el [4] apagado.', '[4]のスイッチだけOFF！'],
    h3: ['Bật: BẬT · TẮT · BẬT · BẬT (1-0-1-1).', 'Set: ON · OFF · ON · ON.', 'Pon: ON · OFF · ON · ON.', '左から ON・OFF・ON・ON にしよう！'],
    e: ['1011 nhị phân = 8 + 0 + 2 + 1 = 11!', 'Binary 1011 = 11!', '¡Binario 1011 = 11!', '2進数1011＝11を見事にセットしました！'],
  },
  // 71 (genius)
  {
    diff: 'genius', cat: 'riddle',
    t: ['Con sên & sợi dây cao su giãn nở', 'Ant on a Stretching Rubber Band', 'Hormiga en banda elástica', '伸びるゴム紐を歩くアリ'],
    p: ['Một con kiến bò đều 1 cm/giây trên sợi dây cao su dài 1 mét (100 cm). Sau MỖI giây, sợi dây bị kéo giãn đều thêm 1 mét nữa (kéo cả con kiến theo tỉ lệ!). Con kiến có bao giờ bò tới được đầu bên kia không?', 'An ant walks at 1 cm/sec along a 1 m rubber band. After every second, the entire band stretches uniformly by +1 m (carrying the ant proportionally). Will the ant EVER reach the far end?', 'Una hormiga camina a 1 cm/s por una goma de 1 m que cada segundo se estira +1 m de forma uniforme. ¿Llegará alguna vez al otro extremo?', '長さ1mのゴム紐の上をアリが秒速1cmで歩いています。1秒ごとにゴム紐全体が＋1mずつ均等に伸びます（アリも割合を保って移動）。アリはいつかゴールにたどり着ける？'],
    m: {
      type: 'lateral_choice', illustration: 'hourglass',
      options: [
        { vi: 'CÓ! Vì tỉ lệ % hoàn thành cộng chuỗi phân kỳ 1/n → tiến tới ∞!', en: 'YES! Because its fractional progress sums the harmonic series Σ(1/n) → diverges past 100%!', es: '¡SÍ! Porque su porcentaje avanza como la serie armónica Σ(1/n) que diverge y supera el 100%.', ja: 'はい！進んだ割合が調和級数 Σ(1/n) として発散し、いつか必ず100%に到達する！' },
        { vi: 'Không bao giờ vì dây dài ra nhanh gấp 100 lần kiến', en: 'Never — stretching beats the ant', es: 'Nunca — la goma crece más rápido', ja: '絶対に無理 — 伸びる方が速いから' },
        { vi: 'Kiến bị đẩy lùi về 0', en: 'Pushed back to start', es: 'Retrocede al inicio', ja: 'スタートに押し戻される' },
        { vi: 'Chỉ tới được đúng 50%', en: 'Asymptotes at 50%', es: 'Se detiene en el 50%', ja: '50%で止まる' },
      ],
      correctIndex: 0,
    },
    h1: ['Đừng nhìn khoảng cách bằng cm — hãy tính TỈ LỆ PHẦN TRĂM quãng đường đã đi!', 'Do not track cm — track the FRACTION of the total band completed!', 'No midas en cm; ¡mide la FRACCIÓN del total!', 'cmではなく「全体の何分の1を進んだか（割合）」で考えよう！'],
    h2: ['Giây 1 đi được 1/100; giây 2 đi thêm 1/200; giây 3 thêm 1/300... Tỉ lệ đã đi KHÔNG BAO GIỜ bị giảm khi dây giãn đều!', 'Sec 1 adds 1/100; Sec 2 adds 1/200; Sec 3 adds 1/300... Uniform stretching preserves percentage!', 'Cada segundo suma 1/(100n) — ¡la serie armónica supera 1!', '1/100 ＋ 1/200 ＋ 1/300 ＋ … 割合はずっと保たれ、調和級数は無限に大きくなる！'],
    h3: ['Chuỗi điều hòa Σ(1/n) phân kỳ tới vô cực nên chắc chắn vượt 100%!', 'The harmonic series diverges — YES, the ant reaches the end!', '¡Sí llega al extremo!', '調和級数は無限大に発散するため「必ず到達する」！'],
    e: ['Nghịch lý Con kiến trên dây cao su nổi tiếng: chuỗi điều hòa 1/100(1 + 1/2 + 1/3 + ...) phân kỳ nên con kiến CHẮC CHẮN tới đích!', 'Ant on a Rubber Rope paradox: harmonic series diverges, guaranteeing arrival!', '¡La serie armónica garantiza que la hormiga siempre llega!', '「ゴム紐の上のアリ」の有名な数学パラドックス：調和級数の発散により必ずゴールします！'],
  },
  // 72 (genius)
  {
    diff: 'genius', cat: 'trick',
    t: ['Đố vui cân não: Lửa dưới đáy đại dương', 'What Wettened When Drying?', 'Se moja mientras seca', '乾かすほど濡れるもの'],
    p: ['Thứ gì trên đời càng làm KHÔ những thứ khác thì bản thân nó lại càng ƯỚT ĐẪM?', 'What gets wetter and wetter the more it dries?', '¿Qué se moja cada vez más cuanto más seca?', '他のものを乾かせば乾かすほど、自分自身がびしょ濡れになっていくものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'water',
      options: [
        { vi: 'Chiếc khăn tắm / khăn lau', en: 'A towel', es: 'Una toalla', ja: 'タオル' },
        { vi: 'Ánh nắng mặt trời', en: 'Sunlight', es: 'El sol', ja: '太陽の光' },
        { vi: 'Máy sấy tóc', en: 'A hairdryer', es: 'Un secador', ja: 'ドライヤー' },
        { vi: 'Cơn gió mùa hạ', en: 'Summer breeze', es: 'Brisa de verano', ja: '夏の風' },
      ],
      correctIndex: 0,
    },
    h1: ['Bạn dùng nó ngay sau khi tắm xong!', 'You grab it right after stepping out of the shower!', 'Lo usas justo al salir de la ducha.', 'お風呂上がりに必ず使うものだよ！'],
    h2: ['Nó thấm toàn bộ nước từ cơ thể hay bát đĩa sang chính mình.', 'It absorbs all the water it wipes off.', 'Absorbe toda el agua que quita.', '拭き取った水分を全部自分が吸い込んでいく！'],
    h3: ['Chọn Chiếc khăn tắm / khăn lau.', 'Pick A towel.', 'Elige Una toalla.', '「タオル」を選ぼう！'],
    e: ['Chiếc khăn càng lau khô cho bạn thì chính nó càng thấm đẫm nước!', 'A towel gets wetter the more it dries you off!', '¡La toalla se moja más cuanto más seca!', 'タオルは相手を乾かすほど水を吸って自分が濡れていきます！'],
  },
  // 73 (genius)
  {
    diff: 'genius', cat: 'logic',
    t: ['Bảng vuông ma trận góc tối', 'Inverted Cross Lights-Out', 'Cruz invertida Lights-Out', '逆十字の3タップ全点灯'],
    p: ['Thử thách Lights-Out bậc thầy: chạm ĐÚNG 3 ô trên bảng 3×3 để toàn bộ 9 ô bật sáng!', 'Genius Lights-Out: tap just THREE tiles to turn ALL 9 tiles ON!', 'Lights-Out Genio: ¡toca solo TRES casillas para encender todo!', '達人レベル：ちょうど3回タップして全9マスを点灯させよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'lights_out',
      gridSize: 3,
      // Tap 0 (0,1,3) + 2 (1,2,5) + 4 (1,3,4,5,7)
      // XOR of {0,1,3} ^ {1,2,5} ^ {1,3,4,5,7}:
      // 0:1, 1:3->1, 2:1, 3:2->0, 4:1, 5:2->0, 6:0, 7:1, 8:0
      // Flips {0, 1, 2, 4, 7} (T-shape!) => initialGrid has {0,1,2,4,7} false, {3,5,6,8} true!
      initialGrid: [false, false, false, true, false, true, true, false, true],
      allOnRequired: true,
    },
    h1: ['Những ô đang tắt tạo thành hình chữ T (hàng trên + cột giữa)!', 'The OFF tiles form a T-shape (top row + center column)!', 'Las casillas apagadas forman una T.', '消えているマスが「T」の形になっているよ！'],
    h2: ['Thử chạm 2 góc trên (1,1), (1,3) cùng với ô trung tâm (2,2)!', 'Tap the two top corners (top-left, top-right) AND the exact center!', 'Toca las dos esquinas superiores y el centro.', '「左上」「右上」と「真ん中」の3つを押すとどうなる？'],
    h3: ['Chạm ô (1,1), (1,3) và (2,2).', 'Tap top-left, top-right, and center.', 'Toca superior izq., superior der. y centro.', '左上・右上・真ん中をタップ！'],
    e: ['Cú chạm 3 điểm tam giác cân (0, 2, 4) xóa sạch chữ T tối!', 'Triangle tap (0, 2, 4) lit the entire T-shape!', '¡Triángulo (0, 2, 4) perfecto!', '上の両角と中央の3点タップで美しいT字を一気に点灯させました！'],
  },
  // 74 (genius)
  {
    diff: 'genius', cat: 'riddle',
    t: ['Tốc độ trung bình cả quãng đường', 'Average Speed Paradox', 'Paradoja de velocidad media', '往復の平均時速の罠'],
    p: ['Bạn lái xe lên dốc dài 60 km với vận tốc đều 30 km/h. Để tốc độ trung bình của CẢ chuyến đi lên dốc + xuống dốc đạt đúng 60 km/h, khi xuống dốc 60 km bạn phải chạy với vận tốc bao nhiêu km/h?', 'You drive 60 km uphill at 30 km/h. To achieve an overall average speed of 60 km/h across the entire 120 km round trip, how fast must you drive 60 km downhill?', 'Subes 60 km a 30 km/h. Para promediar 60 km/h en los 120 km totales (ida y vuelta), ¿a qué velocidad debes bajar?', '上り坂60kmを時速30kmで走りました。往復120km全体の平均時速を「時速60km」にするには、下り坂60kmを時速何kmで走る必要がある？'],
    m: {
      type: 'lateral_choice', illustration: 'car',
      options: [
        { vi: 'BẤT KHẢ THI! (Đã dùng hết sạch 2 giờ khi mới đi nửa đường!)', en: 'IMPOSSIBLE! You already spent the entire 2-hour budget going uphill!', es: '¡IMPOSIBLE! Ya gastaste las 2 horas subiendo.', ja: '不可能！（すでに2時間使い切っており、残りの持ち時間が0時間だから！）' },
        { vi: '90 km/h', en: '90 km/h', es: '90 km/h', ja: '時速90km' },
        { vi: '120 km/h', en: '120 km/h', es: '120 km/h', ja: '時速120km' },
        { vi: '75 km/h', en: '75 km/h', es: '75 km/h', ja: '時速75km' },
      ],
      correctIndex: 0,
    },
    h1: ['Không phải (30 + 90) ÷ 2 = 60 đâu! Hãy tính TỔNG THỜI GIAN.', 'It is NOT 90 km/h! Calculate the total TIME budget!', '¡NO es 90 km/h! Calcula el TIEMPO.', '「(30+90)÷2＝60」ではないよ！かかった「時間」を計算して！'],
    h2: ['Để đạt trung bình 60 km/h cho cả 120 km, tổng thời gian cho phép chỉ là 120 ÷ 60 = 2 giờ. Mà lúc lên dốc 60 km với 30 km/h bạn đã mất sạch 2 giờ rồi!', '120 km at 60 km/h allows 2 hours total — yet uphill took 60 ÷ 30 = 2 full hours already!', '120 km a 60 km/h son 2 horas máximo, y ya tardaste 2 horas en subir.', '往復120kmを平均時速60kmで走るには全行程で2時間しか使えないのに、上り坂だけで既に2時間経ってる！'],
    h3: ['Bạn cần đi xuống trong 0 giây (vận tốc vô cực) → BẤT KHẢ THI!', 'You would need 0 seconds downhill — IMPOSSIBLE!', 'Necesitarías 0 segundos: ¡IMPOSIBLE!', '下りを0秒（無限大の速さ）で走る必要があるため「不可能」！'],
    e: ['Nghịch lý trung bình điều hòa: 2 giờ quỹ thời gian đã cạn sạch ngay khi lên tới đỉnh dốc!', 'Harmonic mean trap: your entire 2-hour time allowance ran out at the summit!', '¡El tiempo de 2 horas se agotó al llegar arriba!', '往復の持ち時間2時間を往路だけで使い切ってしまったため、どんな超高速でも平均60km/hには届きません！'],
  },
  // 75 (genius)
  {
    diff: 'genius', cat: 'trick',
    t: ['100% thiên tài: Giấu quả bom', 'Defuse Without Scissors', 'Desactiva sin cortar', '画面を傾ける？いや文字を見よ'],
    p: ['Quả bom hẹn giờ sắp phát nổ! Đừng chạm vào quả bom, đừng bấm nút đỏ — hãy giữ bình tĩnh và KHÔNG CHẠM GÌ TRONG 5 GIÂY để ngòi nổ tự nguội!', 'Time bomb ticking! Touch NOTHING at all for 5 seconds so the fuse cools down safely!', '¡Bomba activa! NO toques NADA durante 5 segundos para que se enfríe la mecha.', '時限爆弾が作動中！導火線が冷えるまで「5秒間」何も触らずにじっと待とう！'],
    m: {
      type: 'scene_tap', backdrop: 'night',
      waitSeconds: 5,
      objects: [
        { id: 'bomb', shape: 'bomb', x: 50, y: 50, scale: 1.4, decoy: true },
        { id: 'btn_r', shape: 'button_red', x: 25, y: 65, scale: 1.15, decoy: true, label: { vi: 'CẮT DÂY', en: 'CUT WIRE', es: 'CORTAR', ja: '切断' } },
        { id: 'btn_g', shape: 'button_green', x: 75, y: 65, scale: 1.15, decoy: true, label: { vi: 'XẢ NƯỚC', en: 'WATER', es: 'AGUA', ja: '水' } },
      ],
    },
    h1: ['Mọi nút bấm và quả bom đều là bẫy khiến nổ ngay lập tức!', 'Touching any button or the bomb triggers an instant failure!', 'Tocar cualquier botón hace que falle.', 'ボタンも爆弾も触ると即爆発する罠だよ！'],
    h2: ['Bỏ tay khỏi màn hình và chờ đủ 5 giây.', 'Hands off! Wait patiently for 5 seconds.', 'Suelta todo y espera 5 segundos.', '画面から手を離して5秒カウントしよう。'],
    h3: ['Không chạm gì hết trong 5 giây.', 'Do not tap anything for 5 seconds.', 'No toques nada por 5 segundos.', '5秒間一切タッチしない！'],
    e: ['Sự điềm tĩnh tuyệt đối đã vô hiệu hóa quả bom thành công!', 'Total patience defused the ticking bomb!', '¡La calma desactivó la bomba!', '完璧な落ち着きで何も触れず爆弾を無力化しました！'],
  },
  // 76 (genius)
  {
    diff: 'genius', cat: 'lock',
    t: ['Dãy số 1-11-21-1211-?', 'Look-and-Say Sequence #2', 'Secuencia Mira y Di #2', '見て言う数列（1211の次）'],
    p: ['Giải mã dãy số thiên tài Conway: 1, 11, 21, 1211, 111221, [?]. Nhập số hạng tiếp theo (7 chữ số)!', 'Conway’s Look-and-Say sequence: 1, 11, 21, 1211, 111221, [?]. Enter the next 6-digit? Wait: count carefully: three 1s (31), two 2s (22), one 1 (11) = 312211 (6 digits)!', 'Secuencia Mira y Di: 1, 11, 21, 1211, 111221, [?]. Ingresa el siguiente número (6 dígitos).', 'コンウェイの「見て言う数列」：1, 11, 21, 1211, 111221, [？]。次の6桁の数字は？'],
    m: { type: 'lock_dial', clueDisplay: '111221 → read aloud → ?', correctCode: '312211', maxLength: 6 },
    h1: ['Đọc to từng nhóm chữ số giống nhau từ trái sang phải của "111221"!', 'Read "111221" aloud in runs of identical digits!', 'Lee "111221" en voz alta agrupando dígitos iguales.', '「111221」を左から同じ数字の塊ごとに読み上げてみよう！'],
    h2: ['"Ba số 1" (31), "Hai số 2" (22), "Một số 1" (11).', '"Three 1s" (31), "Two 2s" (22), "One 1" (11).', '"Tres unos" (31), "Dos doses" (22), "Un uno" (11).', '「3個の1（31）」「2個の2（22）」「1個の1（11）」！'],
    h3: ['Ghép lại thành: 312211.', 'Put together: 312211.', 'Junto es: 312211.', '繋げると「312211」！'],
    e: ['111221 được đọc là "ba số 1, hai số 2, một số 1" → 312211!', 'Reading 111221 aloud produces 312211!', '¡Al leer 111221 en voz alta sale 312211!', '1が3つ(31)、2が2つ(22)、1が1つ(11)で「312211」になります！'],
  },
  // 77 (genius)
  {
    diff: 'genius', cat: 'riddle',
    t: ['100 người trên đảo mắt xanh', 'Blue-Eyed Islanders Puzzle', 'Los isleños de ojos azules', '青い目の島民のロジック'],
    p: ['Trên đảo có 10 người mắt xanh và 90 người mắt nâu (họ KHÔNG được nói chuyện hay soi gương — chỉ thấy màu mắt người khác; ai biết chắc mình mắt xanh phải rời đảo lúc nửa đêm). Một ngày có khách du lịch nói trước tất cả mọi người: "Ít nhất 1 người trong số các bạn có mắt xanh!" Hỏi sau BAO NHIÊU ĐÊM thì cả 10 người mắt xanh cùng rời đảo?', 'An island has 10 blue-eyed and 90 brown-eyed logic masters (no mirrors, no talking; if you deduce your own eyes are blue, you leave at midnight). A visitor announces aloud: "At least one of you has blue eyes!" After how many nights do all 10 blue-eyed islanders leave?', 'En una isla hay 10 personas de ojos azules y 90 marrones (sin espejos). Un viajero dice en público: "¡Al menos uno tiene ojos azules!". ¿En qué noche se marchan los 10 de ojos azules?', '青い目が10人、茶色い目が90人の島。鏡も会話も禁止で、自分が青い目と確信した夜に島を出ます。旅人が「この中に少なくとも1人は青い目の人がいる」と公言しました。何日目の夜に10人全員が島を出る？'],
    m: { type: 'lock_dial', clueDisplay: '10 Blue Eyes · Common Knowledge → Night #?', correctCode: '10', maxLength: 2 },
    h1: ['Thử quy nạp với k = 1: nếu chỉ có 1 người mắt xanh, anh ta thấy 99 mắt nâu → biết ngay đêm #1!', 'Try k = 1: seeing 0 blue eyes means leaving on Night #1! Try k = 2: waiting after Night #1 means leaving Night #2!', 'Inducción: si k=1 sale noche 1; si k=2 salen noche 2...', '人数を減らして帰納法で考えよう！1人なら1日目、2人なら2日目の夜に出る！'],
    h2: ['Nếu có k người mắt xanh, mỗi người chỉ thấy (k − 1) người mắt xanh khác nên chờ đến đêm thứ (k − 1) không thấy ai đi...', 'With k blue-eyed people, each sees (k−1) others; when nobody leaves on Night k−1, all k deduce they have blue eyes on Night k!', 'Con k personas, salen todos en la noche k.', 'k人いるとき、それぞれ(k−1)人の青い目を見ているから、k−1日目に誰も去らなければk日目の夜に全員気づく！'],
    h3: ['Với 10 người mắt xanh → cùng rời đảo vào Đêm thứ 10.', 'With 10 blue-eyed islanders → Night 10.', 'Con 10 personas → Noche 10.', '10人いるので答えは「10」日目の夜！'],
    e: ['Nghịch lý Kiến thức chung (Common Knowledge): quy nạp toán học chứng minh cả k người đều rời đảo cùng lúc vào đêm thứ k = 10!', 'Common Knowledge induction proves all 10 depart together on Night 10!', '¡La inducción del conocimiento común resuelve la noche 10!', '「共有知識」が生まれることで帰納法が起動し、10日目の夜に10人全員が同時に島を去ります！'],
  },
  // 78 (genius)
  {
    diff: 'genius', cat: 'drag',
    t: ['Giải cứu tàu con thoi 18 kg', 'Rocket Payload Balance 18 kg', 'Carga espacial de 18 kg', 'ロケット積載量18kg'],
    p: ['Cân đĩa tải trọng cho tên lửa vũ trụ! Chọn các thiết bị để đạt chính xác 18 kg trên đĩa phải!', 'Balance the orbital payload scale to exactly 18 kg!', 'Equilibra la carga espacial a exactamente 18 kg.', '宇宙船の荷物をちょうど18kgに釣り合わせよう！'],
    m: {
      type: 'drag_combine', mode: 'balance_scale', targetBalance: 18,
      items: [
        { id: 'w1', shape: 'planet', x: 0, y: 0, weight: 11, label: '11kg' },
        { id: 'w2', shape: 'prism', x: 0, y: 0, weight: 7, label: '7kg' },
        { id: 'w3', shape: 'bulb', x: 0, y: 0, weight: 5, label: '5kg' },
        { id: 'w4', shape: 'coin', x: 0, y: 0, weight: 4, label: '4kg' },
      ],
    },
    h1: ['11 + 7 = ?', '11 + 7 = ?', '11 + 7 = ?', '11 ＋ 7 ＝ ？'],
    h2: ['Chỉ cần đúng 2 món: 11kg và 7kg!', 'Just two items: 11kg and 7kg!', 'Solo dos objetos: 11 kg y 7 kg.', '11kgと7kgの2つだけでOK！'],
    h3: ['Chọn 11kg và 7kg rồi nhấn Kiểm tra.', 'Select 11kg and 7kg, then Check.', 'Elige 11 kg y 7 kg y comprueba.', '11kg・7kgを選んで確認！'],
    e: ['11kg + 7kg = 18kg sẵn sàng phóng lên quỹ đạo!', '11 + 7 = 18 kg — launch ready!', '¡18 kg exactos!', '11kg＋7kg＝18kgで完璧にバランスが取れました！'],
  },
  // 79 (genius)
  {
    diff: 'genius', cat: 'trick',
    t: ['Cây cầu cân nặng 24 quả bi', 'Eight Coins & Fake Heavy Coin', '8 monedas y la falsa pesada', '8枚のコインから天秤2回で偽物を探す'],
    p: ['Có 8 đồng xu vàng giống hệt nhau nhưng có ĐÚNG 1 đồng giả NẶNG HƠN. Chỉ với một chiếc cân thăng bằng 2 đĩa (không có quả cân), bạn cần ÍT NHẤT bao nhiêu lần cân để CHẮC CHẮN tìm ra đồng xu giả?', 'You have 8 identical gold coins, ONE of which is counterfeit and HEAVIER. Using a two-pan balance scale, what is the MINIMUM number of weighings needed to GUARANTEE finding the fake coin?', 'Tienes 8 monedas iguales y 1 falsa más PESADA. Con una balanza de dos platillos, ¿cuántas pesadas MÍNIMAS garantizan hallar la falsa?', '見た目が同じ8枚の金貨のうち、1枚だけ「重い偽物」があります。天秤を使って確実に偽物を見つけ出すには、最低何回の計量が必要？'],
    m: { type: 'lock_dial', clueDisplay: '8 coins (1 heavy) · Scale 3-way split → ? weighings', correctCode: '2', maxLength: 2 },
    h1: ['Mỗi lần cân cho 3 kết quả: Nghiêng trái, Nghiêng phải, hoặc Bằng nhau (nhiều hơn 2 nhánh)!', 'Each weighing has THREE outcomes: Left heavier, Right heavier, or Equal (3^n)!', 'Cada pesada da 3 resultados (izquierda, derecha o igual).', '天秤1回で「左が重い・右が重い・釣り合う」の3通りの情報が得られるよ（3の累乗）！'],
    h2: ['Lần 1 đặt 3 đồng lên trái và 3 đồng lên phải (chừa 2 đồng ngoài)! Nếu bằng nhau → cân 2 đồng ngoài (1 lần nữa). Nếu 1 bên nặng hơn → lấy 3 đồng đó cân 1 vs 1 (chừa 1)!', 'Weigh 3 vs 3 first! Equal → weigh remaining 2 (1 more). Heavy side → weigh 1 vs 1 from that trio!', 'Pesa 3 contra 3 primero; luego 1 contra 1.', '1回目に「3枚 vs 3枚」で量り、2回目に疑わしいグループから「1枚 vs 1枚」を量れば確定！'],
    h3: ['3² = 9 >= 8 → chỉ cần đúng 2 lần cân!', '3² = 9 >= 8 → only 2 weighings needed!', 'Solo 2 pesadas necesarias.', '3²＝9≧8 なので、たった「2」回で見つかる！'],
    e: ['Chiến lược chia 3 (3 vs 3, để 2 ngoài) cho phép định vị chính xác 1 đồng nặng trong tối đa 9 đồng chỉ sau ĐÚNG 2 lần cân!', 'Ternary splitting (3 vs 3) pinpoints 1 heavy coin among up to 9 in just 2 weighings!', '¡Dividir en tercios halla la falsa en solo 2 pesadas!', '3グループに分ける戦略により、8枚（最大9枚まで）からわずか2回の計量で偽物を特定できます！'],
  },
  // 80 (genius)
  {
    diff: 'genius', cat: 'riddle',
    t: ['Cơn bão chữ: 13 là gì?', 'The Missing Dollar Riddle', 'El dólar perdido', '消えた1ドルのパラドックス'],
    p: ['3 người góp mỗi người $10 ($30) thuê phòng khách sạn. Chủ giảm giá còn $25 và đưa $5 cho bồi bàn trả lại. Bồi bàn giữ riêng $2, trả mỗi khách $1. Tính ra mỗi khách trả $9 (9×3=$27) + bồi bàn giữ $2 = $29! Vậy $1 kia biến đi đâu mất rồi?', '3 guests pay $10 each ($30) for a room. The clerk refunds $5 via the bellhop, who pockets $2 and returns $1 each. Each paid $9 ($27 total) + $2 pocketed = $29! Where did the missing $1 go?', '3 amigos pagan 10€ (30€). Les devuelven 5€, el botones se queda 2€ y les da 1€ a cada uno. Pagaron 9€×3=27€ + 2€ del botones = 29€. ¿Dónde falta 1€?', '3人が10ドルずつ（計30ドル）支払い、割引で5ドル返金されました。ボーイが2ドルくすねて各人に1ドル返すと、実質負担9×3＝27ドル＋ボーイの2ドル＝29ドル！消えた1ドルはどこへ？'],
    m: {
      type: 'lateral_choice', illustration: 'coin',
      options: [
        { vi: 'Phép tính CỘNG SAI CHIỀU ($27 đã BAO GỒM $2 của bồi bàn: $25 + $2 = $27)!', en: 'False addition! The $27 paid ALREADY INCLUDES the bellhop’s $2 ($25 room + $2 tip)!', es: '¡Suma falsa! Los 27€ pagados YA INCLUYEN los 2€ del botones (25 + 2 = 27).', ja: '足し算の方向が逆！支払った27ドルの中にボーイの2ドルは「既に含まれている（25＋2＝27）」！' },
        { vi: 'Thuế khách sạn giữ mất $1', en: 'Hotel tax took $1', es: 'Impuestos del hotel', ja: 'ホテル税で消えた' },
        { vi: 'Làm tròn số thập phân sai', en: 'Rounding error', es: 'Error de redondeo', ja: '四捨五入のミス' },
        { vi: 'Chủ khách sạn giấu thêm $1', en: 'Clerk hid $1', es: 'El dueño escondió 1€', ja: '支配人が隠した' },
      ],
      correctIndex: 0,
    },
    h1: ['Tiền không hề biến mất — hãy kiểm tra phép cộng cuối cùng: $27 + $2!', 'No money vanished — inspect the bogus final sum "$27 + $2"!', 'No desapareció dinero: ¡el truco está en sumar 27 + 2!', 'お金は1ドルも消えていないよ！「27＋2」という足し算自体がおかしい！'],
    h2: ['3 người chi $27: $25 vào túi chủ khách sạn + $2 vào túi bồi bàn ($25 + $2 = $27). Phải cộng $3 tiền thừa được trả lại ($27 + $3 = $30) chứ không phải cộng $2!', 'The $27 spent went to $25 (hotel) + $2 (bellhop). You add the $3 refunded ($27 + $3 = $30), NOT the $2!', '25 + 2 = 27, y más 3 devueltos = 30.', '27ドル＝宿代25ドル＋ボーイ2ドル！元の30ドルに戻すなら返金された3ドル（27＋3＝30）を足すべき！'],
    h3: ['Chọn phương án chỉ ra phép cộng sai chiều!', 'Pick False addition — $27 already includes the $2!', 'Elige ¡Suma falsa! 27 ya incluye los 2.', '「足し算のトリック」を指摘する選択肢を選ぼう！'],
    e: ['Cú lừa kế toán nổi tiếng nhất thế giới: $2 đã nằm TRONG $27 ($25 + $2), nên cộng thêm $2 lần nữa là hoàn toàn vô nghĩa!', 'Famous accounting illusion: the $2 is already inside the $27 ($25 + $2), while $27 + $3 refunded = $30!', '¡Ilusión contable: los 2€ ya están dentro de los 27€!', 'くすねた2ドルを27ドルから引くのではなく足して錯覚させた世界一有名な会計トリックです！'],
  },
  // 81 (genius)
  {
    diff: 'genius', cat: 'logic',
    t: ['Ma trận mẫu chữ X ngược', 'Pattern Match: Hollow Frame', 'Patrón: Marco hueco', 'パターン一致：外枠を光らせよう'],
    p: ['Thắp sáng ĐÚNG 8 ô viền xung quanh và giữ ô chính giữa TẮT để khớp với khung trống!', 'Match the hollow 3×3 frame pattern: turn all 8 border tiles ON and leave ONLY the center OFF!', 'Enciende los 8 bordes y deja solo el centro apagado para igualar el marco.', '外周の8マスすべてをON、ど真ん中の1マスだけをOFFにしてフレーム模様を完成させよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'pattern_match',
      gridSize: 3,
      initialGrid: [false, true, false, false, true, false, false, true, false],
      targetGrid: [true, true, true, true, false, true, true, true, true],
    },
    h1: ['Ở chế độ Pattern Match, mỗi lần chạm chỉ đổi trạng thái ĐÚNG ô đó!', 'In Pattern Match mode, tapping flips ONLY the tapped tile itself!', 'Aquí cada toque cambia solo esa casilla.', 'パターン一致モードでは、タップしたマス自身だけが反転するよ！'],
    h2: ['Bật các ô viền còn tắt và tắt ô chính giữa đi.', 'Turn the OFF border tiles ON, and turn the center tile OFF.', 'Enciende los bordes apagados y apaga el centro.', '消えている外枠を点けて、点いている真ん中を消そう。'],
    h3: ['Mục tiêu: viền sáng, tâm tắt [T,T,T, T,F,T, T,T,T].', 'Target: 8 border ON, center OFF.', 'Objetivo: 8 bordes ON, centro OFF.', '外枠すべて黄色、真ん中だけグレーに！'],
    e: ['Khung viền vuông rỗng tâm hoàn hảo!', 'Hollow border frame matched cleanly!', '¡Marco hueco completado!', '外周8マス点灯・中央消灯の美しいフレームが完成しました！'],
  },
  // 82 (genius)
  {
    diff: 'genius', cat: 'trick',
    t: ['Chạm vào mặt trăng giả', 'Hidden Night Moon Trick', 'Luna oculta', '雲の裏の月のトリック'],
    p: ['Đám mây đen đang che khuất Mặt Trăng hay Mặt Trăng đang nấp ở đâu? Hãy thắp sáng Mặt Trăng lên bằng cách loại bỏ hết mây đen — khoan, có tới 2 đám mây, cái nào giấu Trăng?', 'Find the real Moon hiding behind the storm clouds!', '¡Encuentra la Luna real escondida tras las nubes de tormenta!', '嵐の雲の後ろに隠れた本物の月を見つけ出そう！'],
    m: {
      type: 'drag_combine', mode: 'move_aside_then_tap', backdrop: 'night',
      items: [
        { id: 'moon', shape: 'moon', x: 74, y: 34, scale: 1.15 },
        { id: 'rain', shape: 'raincloud', x: 74, y: 34, scale: 1.6 },
        { id: 'cloud', shape: 'cloud', x: 26, y: 40, scale: 1.5 },
        { id: 'star', shape: 'star', x: 30, y: 74, scale: 0.9 },
      ],
      sourceId: 'rain', targetId: 'moon',
    },
    h1: ['Đám mây mưa sẫm màu ở góc trên bên phải trông rất khả nghi.', 'Check behind the dark raincloud at the top-right.', 'Mira detrás de la nube de lluvia arriba a la derecha.', '右上の黒い雨雲が怪しいよ！'],
    h2: ['Kéo đám mây mưa sang chỗ khác.', 'Drag the raincloud aside.', 'Mueve la nube de lluvia a un lado.', '雨雲をドラッグしてどかそう。'],
    h3: ['Chạm vào vầng trăng vàng hiện ra bên dưới.', 'Tap the crescent moon uncovered underneath.', 'Toca la luna descubierta.', '出てきた月をタップ！'],
    e: ['Ánh trăng lại tỏa sáng rực rỡ sau cơn mưa!', 'The bright moon shines once more!', '¡La luna brilla de nuevo!', '雨雲をどかして輝く月を見つけ出しました！'],
  },
  // 83 (genius)
  {
    diff: 'genius', cat: 'riddle',
    t: ['Đồng hồ cát & Giờ kỳ diệu', 'Hands Overlap in 12 Hours', 'Agujas superpuestas', '12時間で時計の針が重なる回数'],
    p: ['Trong vòng 12 tiếng đồng hồ liên tục (từ 12:00 trưa đến ngay trước 12:00 đêm, tính cả mốc 12:00 ban đầu), kim giờ và kim phút của đồng hồ kim CHỒNG KHÍT lên nhau đúng bao nhiêu lần?', 'In a 12-hour span (from 12:00 noon up to, not including, 12:00 midnight), how many times do a clock’s hour and minute hands overlap completely?', 'En 12 horas (desde las 12:00 hasta justo antes de la medianoche), ¿cuántas veces se superponen las agujas?', '12時間のうちに（正午12:00を含み、深夜0:00の直前まで）、時計の長針と短針はぴったり何回重なる？'],
    m: { type: 'lock_dial', clueDisplay: '12 hours · Hour & Minute overlaps = ?', correctCode: '11', maxLength: 2 },
    h1: ['Không phải 12 lần đâu nhé! Giữa 11 giờ và 12 giờ hai kim KHÔNG gặp nhau lần nào trước mốc 12:00!', 'It is NOT 12 times! Between 11:00 and 11:59 they never overlap!', '¡No son 12! Entre las 11:00 y 11:59 no se cruzan.', '12回じゃないよ！11時〜11時59分の間には1回も重ならないんだ！'],
    h2: ['Kim phút quay 12 vòng, kim giờ quay 1 vòng → số vòng vượt mặt tương đối = 12 − 1 = ?', 'Minute hand makes 12 turns while hour hand makes 1 turn → relative laps = 12 − 1!', '12 vueltas menos 1 vuelta = ?', '長針12周 − 短針1周 ＝ 相対的に何周追いつく？'],
    h3: ['12 − 1 = 11 lần.', '12 − 1 = 11 overlaps.', '11 veces.', '12 − 1 ＝ 「11」回！'],
    e: ['Vận tốc góc tương đối cho thấy cứ 12 tiếng hai kim chỉ gặp nhau đúng 11 lần (mỗi lần cách nhau ~65.45 phút)!', '12 − 1 = 11 exact overlaps in 12 hours!', '¡Se superponen exactamente 11 veces cada 12 horas!', '12周から1周を引いた「11回」だけ重なります（11時台が抜けるため）！'],
  },
  // 84 (genius)
  {
    diff: 'genius', cat: 'trick',
    t: ['Đảo ngược góc nhìn con số', 'Rotate 180° Number Check', 'Número invertido 180°', '逆さにしても同じ計算式？'],
    p: ['Mật mã đặc biệt gồm 4 chữ số: khi bạn xoay ngược tờ giấy 180 độ, con số đọc được VẪN GIỮ NGUYÊN KHÔNG ĐỔI (không dùng 0 ở đầu). Giữa các số sau: 1001, 6969, 8118, 9696 — thực ra số nhỏ nhất có 4 chữ số có tính chất đó (dùng 1,6,8,9,0) là số nào?', 'A 4-digit code looks IDENTICAL when turned upside-down 180° (using calculator digits 0,1,6,8,9; no leading zero). What is the SMALLEST such 4-digit strobogrammatic number?', 'Un código de 4 cifras se lee IDÉNTICO al girarlo 180° (usando 0,1,6,8,9, sin cero inicial). ¿Cuál es el MENOR número de este tipo?', '180度ひっくり返しても全く同じ数字に読める4桁の数字（0,1,6,8,9使用、先頭0不可）の中で「最小の数」はいくつ？'],
    m: { type: 'lock_dial', clueDisplay: 'Smallest 4-digit 180°-symmetric # = ?', correctCode: '1001', maxLength: 4 },
    h1: ['Để nhỏ nhất, chữ số đầu tiên (không thể là 0) phải là chữ số nhỏ nhất có thể xoay ngược được.', 'To minimize, pick the smallest valid non-zero leading digit.', 'Para que sea el menor, empieza por el dígito mínimo válido.', '先頭の数字（0以外）を一番小さくするには「1」を使おう！'],
    h2: ['Số 1 xoay ngược vẫn là 1 → chữ số cuối cũng phải là 1! Hai chữ số giữa cho nhỏ nhất đều là 0.', '1 flipped is 1, so last digit is 1; middle digits can both be 0!', '1 al inicio y 1 al final; ceros en el centro.', '1は逆さでも1！真ん中2つを最小の0にすれば…'],
    h3: ['1001 xoay ngược 180° vẫn là 1001!', '1001 upside-down is still 1001!', '1001 girado 180° sigue siendo 1001.', '「1001」なら最小かつ180度回転しても1001！'],
    e: ['1001 là số đối xứng xoay 180° (strobogrammatic) nhỏ nhất có 4 chữ số!', '1001 is the smallest 4-digit strobogrammatic number!', '¡1001 es el menor número estrobogramático de 4 cifras!', '1001は4桁の中で最小の点対称数字（逆さにしても同じ数）です！'],
  },
  // 85 (genius)
  {
    diff: 'genius', cat: 'logic',
    t: ['Thứ tự tốc độ tăng trưởng hàm số', 'Asymptotic Growth Order', 'Crecimiento matemático', '計算量の増加スピード順'],
    p: ['Thử thách Khoa học máy tính! Sắp xếp 4 hàm tăng trưởng sau theo độ lớn khi n rất lớn (n = 1.000.000) từ NHỎ NHẤT đến LỚN NHẤT!', 'CS Genius Challenge: Sort these 4 growth rates for huge n from SMALLEST to LARGEST!', 'Reto de complejidad: ¡ordena estas 4 funciones para n gigante de MENOR a MAYOR!', '情報科学クイズ：nがとても大きいとき、値の増加が「遅い（小さい）順」に並べよう！'],
    m: {
      type: 'order_sort',
      items: [
        { id: 'exp', shape: 'rocket', label: { vi: '2ⁿ (Hàm mũ)', en: '2ⁿ (Exponential)', es: '2ⁿ (Exponencial)', ja: '2ⁿ（指数）' } },
        { id: 'log', shape: 'leaf', label: { vi: 'log₂(n) (Logarit)', en: 'log₂(n) (Logarithmic)', es: 'log₂(n) (Logarítmica)', ja: 'log₂(n)（対数）' } },
        { id: 'quad', shape: 'box', label: { vi: 'n² (Bình phương)', en: 'n² (Quadratic)', es: 'n² (Cuadrática)', ja: 'n²（2乗）' } },
        { id: 'lin', shape: 'car', label: { vi: 'n (Tuyến tính)', en: 'n (Linear)', es: 'n (Lineal)', ja: 'n（線形）' } },
      ],
      correctOrder: ['log', 'lin', 'quad', 'exp'],
    },
    h1: ['Với n = 1.000: log₂(n) ≈ 10, n = 1.000.', 'At n = 1,000: log₂(n) ≈ 10, n = 1,000.', 'Con n = 1.000: log₂(n) ≈ 10.', 'n=1000なら log₂(n) は約10、n は 1000！'],
    h2: ['n² = 1.000.000, còn 2ⁿ lớn gấp tỷ tỷ lần số nguyên tử trong vũ trụ!', 'n² = 1,000,000 while 2ⁿ explodes astronomically!', 'n² = 1.000.000 y 2ⁿ es gigantesco.', 'n²は100万、2ⁿは宇宙の原子の数より遥かに巨大！'],
    h3: ['log₂(n) → n → n² → 2ⁿ.', 'log₂(n) → n → n² → 2ⁿ.', 'log₂(n) → n → n² → 2ⁿ.', 'log₂(n) → n → n² → 2ⁿ の順！'],
    e: ['Thứ tự Big-O chuẩn xác: O(log n) < O(n) < O(n²) < O(2ⁿ)!', 'Classic Big-O hierarchy mastered!', '¡Jerarquía Big-O perfecta!', '計算量の基本階層 O(log n) < O(n) < O(n²) < O(2ⁿ) を完全制覇しました！'],
  },
  // 86 (genius)
  {
    diff: 'genius', cat: 'riddle',
    t: ['100% logic: Chiếc mũ trắng đen', 'Three Wise Men Hat Deduction', 'Sombreros de los sabios', '3人の賢者の帽子の色当て'],
    p: ['3 nhà thông thái xếp hàng dọc nhìn về trước (C đứng sau thấy A & B; B đứng giữa chỉ thấy A; A đứng đầu không thấy ai). Chủ cho biết trong túi có 3 mũ TRẮNG và 2 mũ ĐEN rồi đội lên đầu mỗi người 1 mũ. Hỏi: C nói "Tôi KHÔNG biết màu mũ mình". B nghe vậy cũng nói "Tôi cũng KHÔNG biết". Ngay lập tức A mỉm cười: "Tôi BIẾT CHẮC mũ tôi màu gì rồi!" Mũ của A màu gì?', '3 logicians stand in a line (C sees A & B; B sees A; A sees none). There are 3 WHITE hats and 2 BLACK hats total. C says "I don’t know my hat color." B hears C and says "I don’t know either." A immediately says "Now I KNOW my color!" What color is A’s hat?', '3 sabios en fila (C ve a A y B; B ve a A). Hay 3 sombreros BLANCOS y 2 NEGROS. C dice "No lo sé". B dice "Tampoco lo sé". A dice "¡Ya sé el mío!". ¿De qué color es el de A?', '縦1列に並ぶ3人の賢者（CはA・Bが見え、BはAだけ見え、Aは誰も見えない）。帽子は白3・黒2の計5つ。C「わからない」、B「私もわからない」。するとAが即答「自分の帽子の色がわかった！」。Aの帽子は何色？'],
    m: {
      type: 'lateral_choice', illustration: 'hat',
      options: [
        { vi: 'Màu TRẮNG!', en: 'WHITE!', es: '¡BLANCO!', ja: '白（WHITE）！' },
        { vi: 'Màu ĐEN!', en: 'BLACK!', es: '¡NEGRO!', ja: '黒（BLACK）！' },
        { vi: 'Không thể suy ra được', en: 'Impossible to deduce', es: 'Indeterminado', ja: '推理不可能' },
        { vi: 'Sọc trắng đen', en: 'Striped', es: 'A rayas', ja: 'しま模様' },
      ],
      correctIndex: 0,
    },
    h1: ['Tại sao C không biết? Vì A & B KHÔNG thể cùng đội mũ ĐEN (nếu cả 2 đều đen thì C thấy hết 2 mũ đen và biết ngay mình Trắng!).', 'Why didn’t C know? Because A & B are NOT both BLACK!', 'Si A y B tuvieran negro, C sabría que lleva blanco.', 'Cがわからなかった＝「AとBの少なくとも1人は白」だと全員にわかった！'],
    h2: ['B biết ít nhất 1 trong hai (A hoặc B) phải là TRẮNG! Nếu A đội mũ ĐEN thì B nhìn thấy ngay và khẳng định mình TRẮNG — nhưng B cũng KHÔNG biết!', 'So B knows at least one of {A, B} is WHITE. If A were BLACK, B would know he is WHITE — yet B did NOT know!', 'Si A fuera negro, B habría sabido que es blanco; como B no lo supo, A debe ser BLANCO.', 'もしAが黒なら、Bは即座に自分が白だとわかるはず！なのにBも「わからない」と言った！'],
    h3: ['Suy ra A CHẮC CHẮN đội mũ TRẮNG!', 'Therefore A MUST be wearing WHITE!', '¡Así que A lleva BLANCO!', 'つまりAの帽子は100%「白」！'],
    e: ['Suy luận phản chứng 2 tầng kinh điển: sự im lặng của C và B chứng minh 100% chiếc mũ của A màu TRẮNG!', 'Two-step epistemic logic proves A’s hat is WHITE!', '¡Lógica epistémica perfecta: el sombrero de A es BLANCO!', '他者の発言から可能性を2段階で消去する伝説の論理パズル：Aは確実に「白」です！'],
  },
  // 87 (genius)
  {
    diff: 'genius', cat: 'trick',
    t: ['Phá luật: Đừng tin mũi tên', 'Tap the Word HIDDEN', 'Toca la palabra OCULTO', '隠れたキーワードを探せ'],
    p: ['Cả nút Đỏ, nút Xanh lẫn Mũi Tên trên sân khấu đều là ảo giác! Chỉ duy nhất từ ĐẶC BIỆT nằm trong đề bài này mới mở khóa được cánh cửa!', 'Every button and shape below is an illusion! Tap the word SPECIAL right inside this sentence to unlock the gate!', '¡Todos los objetos de abajo son ilusiones! Toca la palabra ESPECIAL dentro de esta frase.', '下のボタンや図形はすべて幻！この問題文の中にある「特別」という言葉をタップして扉を開けよう！'],
    m: {
      type: 'scene_tap', backdrop: 'night',
      tapPromptWord: { vi: 'ĐẶC BIỆT', en: 'SPECIAL', es: 'ESPECIAL', ja: '特別' },
      objects: [
        { id: 'b1', shape: 'button_red', x: 26, y: 54, scale: 1.25, decoy: true },
        { id: 'b2', shape: 'button_green', x: 50, y: 54, scale: 1.25, decoy: true },
        { id: 'door', shape: 'door', x: 75, y: 54, scale: 1.25, decoy: true },
      ],
    },
    h1: ['Đừng bấm vào nút đỏ, nút xanh hay cánh cửa ở dưới.', 'Ignore the red button, green button, and door.', 'Ignora los botones y la puerta.', '下のボタンやドアは全部ワナだよ。'],
    h2: ['Tìm chữ viết hoa ngay trong phần văn bản đề bài.', 'Look for the uppercase word inside the prompt.', 'Busca la palabra en mayúsculas arriba.', '問題文の文字そのものをタップしよう！'],
    h3: ['Chạm vào chữ ĐẶC BIỆT (en: SPECIAL) trên đề bài.', 'Tap SPECIAL in the prompt.', 'Toca ESPECIAL en la pregunta.', '問題文の「特別」をタップ！'],
    e: ['Bạn đã phá giải ảo giác bằng sự tinh mắt tuyệt vời!', 'You saw right through every illusion!', '¡Superaste todas las ilusiones!', 'すべての幻影を見破り、テキストの仕掛けで突破しました！'],
  },
  // 88 (genius)
  {
    diff: 'genius', cat: 'visual',
    t: ['10 dòng chữ cái: Ô vuông lưới 3×3', 'Total Squares in 3×3 Grid', 'Cuadrados en 3×3', '3×3マスに隠れた正方形'],
    p: ['Ôn lại nhanh với độ chính xác tuyệt đối: hình lưới 3×3 này chứa tất cả bao nhiêu hình vuông (mọi kích cỡ)?', 'Count every square of every size inside this 3×3 grid!', 'Cuenta todos los cuadrados de cualquier tamaño en esta cuadrícula 3×3.', 'この3×3のマス目の中には大小合わせていくつの正方形がある？'],
    m: { type: 'visual_count', visualKind: 'chessboard_squares', variant: 3, correctAnswer: 14, min: 5, max: 25 },
    h1: ['9 ô 1×1 + 4 ô 2×2 + 1 ô 3×3!', '9 (1×1) + 4 (2×2) + 1 (3×3)!', '9 + 4 + 1 = ?', '9（1×1）＋ 4（2×2）＋ 1（3×3）！'],
    h2: ['9 + 4 + 1 = ?', '9 + 4 + 1 = ?', '9 + 4 + 1 = ?', '9 ＋ 4 ＋ 1 ＝ ？'],
    h3: ['Đáp án là 14.', 'Answer is 14.', 'Respuesta: 14.', '答えは「14」！'],
    e: ['1² + 2² + 3² = 1 + 4 + 9 = 14 hình vuông!', '1 + 4 + 9 = 14 squares!', '¡1 + 4 + 9 = 14 cuadrados!', '1＋4＋9＝14個の正方形が存在します！'],
  },
  // 89 (genius)
  {
    diff: 'genius', cat: 'lock',
    t: ['Nghịch lý ngày sinh nhật 23', 'Birthday Paradox Magic Number', 'Paradoja del cumpleaños', '誕生日のパラドックス'],
    p: ['Cần ÍT NHẤT bao nhiêu người trong một căn phòng để xác suất có ít nhất 2 người trùng ngày sinh nhật vượt quá 50%?', 'What is the MINIMUM number of people needed in a room so there is a >50% chance that at least two share a birthday?', '¿Cuántas personas como MÍNIMO hacen falta en un cuarto para que haya >50% de probabilidad de que dos cumplan años el mismo día?', '部屋に最低何人集まれば、「同じ誕生日のペアがいる確率」が50%を超える？（誕生日のパラドックス）'],
    m: { type: 'lock_dial', clueDisplay: 'P(shared birthday) > 50% → Min people = ?', correctCode: '23', maxLength: 3 },
    h1: ['Ít hơn rất nhiều so với 183 (một nửa của 365)!', 'Far fewer than 183 (half of 365)!', '¡Mucho menos que 183!', '365の半分の183人よりずっと少ないよ！'],
    h2: ['Với 23 người, có tới C(23,2) = 253 cặp so sánh với nhau! (364/365 × 363/365 × ... < 0.5).', 'With 23 people there are 253 unique pairs!', 'Con 23 personas hay 253 parejas posibles.', '23人いると2人組のペアが253通りもできるんだ！'],
    h3: ['Con số kỳ diệu của xác suất là 23.', 'The magic threshold is 23.', 'El número mágico es 23.', '確率のマジックナンバーは「23」人！'],
    e: ['Nghịch lý Ngày sinh nhật: chỉ cần 23 người đã cho xác suất 50.73% có ít nhất 1 cặp trùng sinh nhật!', 'Only 23 people give a 50.73% chance of a shared birthday!', '¡Con solo 23 personas supera el 50%!', 'わずか23人でペア数253通りとなり、同じ誕生日の組が出る確率は50.7%に達します！'],
  },
  // 90 (genius)
  {
    diff: 'genius', cat: 'action',
    t: ['Giải mã công tắc nhị phân 14 (1110)', 'Binary 14 Switch Matrix', 'Interruptores binario 14', '2進数「14」のスイッチ'],
    p: ['Bật đúng tổ hợp từ 4 công tắc [8] [4] [2] [1] để tạo thành số 14!', 'Flip the [8] [4] [2] [1] switches to build decimal 14!', 'Ajusta los interruptores [8] [4] [2] [1] para sumar 14.', '[8] [4] [2] [1] のスイッチを操作して合計ちょうど「14」にしよう！'],
    m: {
      type: 'action_meter', mode: 'switches', targetShape: 'trophy', switchCount: 4,
      targetMask: [true, true, true, false],
      requiredValue: 14,
      meterLabel: { vi: 'Nhị phân [8][4][2][1] = 14', en: 'Binary [8][4][2][1] = 14', es: 'Binario [8][4][2][1] = 14', ja: '2進数 [8][4][2][1] = 14' },
    },
    h1: ['8 + 4 + 2 = 14!', '8 + 4 + 2 = 14!', '8 + 4 + 2 = 14!', '8 ＋ 4 ＋ 2 ＝ 14！'],
    h2: ['Chỉ tắt duy nhất công tắc cuối cùng [1].', 'Leave only the last switch [1] OFF.', 'Deja apagado solo el último [1].', '一番右の[1]だけOFFにしよう！'],
    h3: ['Bật: BẬT · BẬT · BẬT · TẮT (1-1-1-0).', 'Set: ON · ON · ON · OFF.', 'Pon: ON · ON · ON · OFF.', '左から ON・ON・ON・OFF！'],
    e: ['1110 nhị phân = 8 + 4 + 2 = 14!', 'Binary 1110 = 14!', '¡Binario 1110 = 14!', '2進数1110＝14が正確にセットされました！'],
  },
  // 91 (genius)
  {
    diff: 'genius', cat: 'riddle',
    t: ['100 tù nhân & Chiếc hộp số', 'Josephus Last Survivor (8)', 'El último superviviente (8)', 'ヨセフスの問題（8人）'],
    p: ['8 người (đánh số 1 đến 8) đứng thành vòng tròn. Bắt đầu từ #1, cứ đếm cách 1 người rồi loại người thứ 2 (#2 bị loại, #4 bị loại, #6 bị loại, #8 bị loại...). Tiếp tục quay vòng cho tới khi chỉ còn 1 người duy nhất. Ai là người sống sót cuối cùng?', '8 players numbered 1 to 8 stand in a circle. Starting with 1 safe, every second person is eliminated (#2, #4, #6, #8, then #3...). Who is the FINAL survivor?', '8 jugadores (1 al 8) en círculo. Se elimina a uno de cada dos (#2, #4, #6, #8, luego #3...). ¿Quién sobrevive al final?', '1番から8番までの8人が円になり、1番を残して2番目ごとに順番に脱落していきます（2, 4, 6, 8, 次は3…）。最後に1人だけ残るのは何番？'],
    m: { type: 'lock_dial', clueDisplay: 'Circle 1..8 (skip 2nd) → Last Survivor = #?', correctCode: '1', maxLength: 2 },
    h1: ['Lần lượt loại: Vòng 1 loại 2, 4, 6, 8 → còn [1, 3, 5, 7].', 'Round 1 eliminates 2, 4, 6, 8 → remaining [1, 3, 5, 7].', 'Ronda 1 elimina pares → quedan 1, 3, 5, 7.', '1周目で偶数(2,4,6,8)が全員脱落 → 残り [1, 3, 5, 7]！'],
    h2: ['Vòng 2: giữ 1 loại 3, giữ 5 loại 7 → còn [1, 5]. Vòng 3: giữ 1 loại 5!', 'Round 2: keep 1, drop 3, keep 5, drop 7 → [1, 5]. Round 3: keep 1, drop 5!', 'Ronda 2 elimina 3 y 7 → quedan 1 y 5; luego cae el 5.', '2周目で3と7が脱落 → [1, 5]になり、最後は5が脱落！'],
    h3: ['Vì 8 là lũy thừa đúng của 2 (2³), người bắt đầu #1 LUÔN thắng!', 'Because 8 is an exact power of 2, Player #1 always survives!', 'Como 8 es potencia de 2, ¡siempre gana el 1!', '8は2の累乗(2³)なので、常に「1」番が生き残る！'],
    e: ['Bài toán Josephus nổi tiếng: bất cứ khi nào n = 2^k, vị trí #1 luôn luôn bất khả chiến bại!', 'Classic Josephus Theorem: whenever N is a power of 2, #1 always survives!', '¡Teorema de Josefo: con potencias de 2 siempre gana el #1!', 'ヨセフスの問題：人数が2の累乗(2,4,8,16...)のときは必ず「1番」が最後の勝者になります！'],
  },
  // 92 (genius)
  {
    diff: 'genius', cat: 'trick',
    t: ['Hành tinh có ngày dài hơn năm', 'Day Longer Than a Year', 'Día más largo que su año', '1日が1年より長い星'],
    p: ['Hành tinh nào trong Hệ Mặt Trời tự quay quanh trục CHẬM ĐẾN MỨC một NGÀY (chu kỳ tự quay) còn DÀI HƠN một NĂM (chu kỳ quay quanh Mặt Trời) của chính nó?', 'Which planet in our Solar System spins so slowly that its sidereal DAY is actually LONGER than its YEAR?', '¿Qué planeta del Sistema Solar gira tan lento que su DÍA dura más que su AÑO?', '太陽系の中で、自転があまりに遅いため「1日」の長さが「1年（公転周期）」より長い惑星はどれ？'],
    m: {
      type: 'lateral_choice', illustration: 'planet',
      options: [
        { vi: 'Sao Kim (Venus — ngày 243 ngày Trái Đất, năm 225 ngày)', en: 'Venus (243 Earth-day spin vs 225-day orbit)', es: 'Venus (243 días de giro vs 225 de órbita)', ja: '金星（自転243日・公転225日）' },
        { vi: 'Sao Thổ (Saturn)', en: 'Saturn', es: 'Saturno', ja: '土星' },
        { vi: 'Sao Hỏa (Mars)', en: 'Mars', es: 'Marte', ja: '火星' },
        { vi: 'Sao Mộc (Jupiter)', en: 'Jupiter', es: 'Júpiter', ja: '木星' },
      ],
      correctIndex: 0,
    },
    h1: ['Đó là hành tinh nóng nhất Hệ Mặt Trời (và quay ngược chiều)!', 'It is the hottest planet in our Solar System — and spins backward!', 'Es el planeta más caliente y gira al revés.', '太陽系で最も高温で、しかも他の惑星と逆向きに自転している星だよ！'],
    h2: ['Hành tinh thứ 2 tính từ Mặt Trời (giữa Sao Thủy và Trái Đất).', 'The 2nd planet from the Sun.', 'El segundo planeta desde el Sol.', '太陽から2番目の惑星！'],
    h3: ['Chọn Sao Kim (Venus).', 'Pick Venus.', 'Elige Venus.', '「金星」を選ぼう！'],
    e: ['Sao Kim mất 243 ngày Trái Đất để tự quay 1 vòng nhưng chỉ mất 225 ngày để quay quanh Mặt Trời!', 'Venus takes 243 Earth days to rotate once, versus 225 days to orbit the Sun!', '¡Venus tarda 243 días en girar y solo 225 en orbitar!', '金星は公転（225日）よりも自転（243日）のほうが時間がかかる不思議な惑星です！'],
  },
  // 93 (genius)
  {
    diff: 'genius', cat: 'logic',
    t: ['Ma trận phép nhân 504', 'Triple Product 504', 'Producto triple 504', '積が504になる3枚のパネル'],
    p: ['Chọn đúng 3 ô số để TÍCH của 3 số đó bằng chính xác 504!', 'Select 3 tiles whose PRODUCT equals exactly 504!', '¡Elige 3 casillas cuyo PRODUCTO sea 504!', 'ちょうど3枚のパネルを選んで「掛け算の積が504」にしよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'magic_sum',
      gridSize: 3,
      initialGrid: [false, false, false, false, false, false, false, false, false],
      tileLabels: ['2', '3', '4', '5', '6', '7', '8', '9', '11'],
      requiredCount: 3,
      targetProduct: 504,
    },
    h1: ['Phân tích 504: chia hết cho 9 và 8 và 7!', 'Factor 504: notice 504 = 7 × 72!', 'Factoriza 504 = 7 × 72.', '504 ＝ 7 × 72 に分解してみよう！'],
    h2: ['72 = 8 × 9 → vậy 504 = 7 × 8 × 9!', '72 = 8 × 9 → so 504 = 7 × 8 × 9!', '7 × 8 × 9 = 504!', '72 ＝ 8 × 9 だから、504 ＝ 7 × 8 × 9！'],
    h3: ['Chọn 7, 8, 9 rồi nhấn Kiểm tra.', 'Pick 7, 8, and 9, then Check.', 'Elige 7, 8 y 9 y comprueba.', '「7」「8」「9」を選んで確認！'],
    e: ['7 × 8 × 9 = 504 — bộ ba số liên tiếp hoàn hảo!', '7 × 8 × 9 = 504!', '¡7 × 8 × 9 = 504!', '連続する3数 7×8×9＝504 が完璧に揃いました！'],
  },
  // 94 (genius)
  {
    diff: 'genius', cat: 'riddle',
    t: ['Bài toán con ốc sên 30m', 'Deep 30m Well Snail', 'Caracol en pozo de 30m', '30mの井戸を登るカタツムリ'],
    p: ['Một chú ốc sên rơi xuống giếng sâu 30 mét. Ban ngày nó bò lên 3 mét, ban đêm trượt xuống 2 mét. Hỏi sang ngày thứ BAO NHIÊU thì chú ốc sên leo lên tới miệng giếng?', 'A snail is at the bottom of a 30 m well. Each day it climbs up 3 m, and each night it slips back 2 m. On which DAY does it reach the top edge (30 m)?', 'Un caracol está en un pozo de 30 m. De día sube 3 m y de noche resbala 2 m. ¿En qué DÍA llega al borde?', '深さ30mの井戸の底にカタツムリがいます。昼に3m登り、夜に2m滑り落ちます。何日目に30mの縁へ到達する？'],
    m: { type: 'lock_dial', clueDisplay: '30m well (+3m day, -2m night) → Day #?', correctCode: '28', maxLength: 2 },
    h1: ['Không phải 30 ngày! Khi lên tới đỉnh 30m vào ban ngày, chú ốc sên thoát ra ngoài luôn và KHÔNG trượt xuống nữa!', 'Not 30 days! Once it reaches 30 m in daytime, it escapes without slipping!', '¡No son 30 días! Al llegar arriba de día ya escapa.', '30日目ではないよ！昼のうちに30mへ到達したら外へ出て夜に滑らないんだ！'],
    h2: ['Sau 27 ngày đêm, nó đang ở độ cao 27 mét (mỗi ngày đêm lãi ròng 1m).', 'After 27 full day-nights, it sits at 27 m!', 'Tras 27 días está a 27 m.', '27日目の夜が終わった時点で、高さ27mにいるよ！'],
    h3: ['Sang ngày thứ 28, leo thêm +3m → 27 + 3 = 30m! Đáp án: 28.', 'On Day 28 it climbs +3 m → 27 + 3 = 30 m! Answer: 28.', 'El día 28 sube 3 m y llega a 30 m.', '28日目の昼に＋3m登って27＋3＝30mで脱出！「28」日目！'],
    e: ['27 ngày đêm leo được 27m, ngày thứ 28 vọt thêm 3m chạm đỉnh thoát khỏi giếng!', 'At 27 m after Day 27, climbing +3 m on Day 28 reaches 30 m!', '¡El día 28 alcanza los 30 metros!', '27日間で27mに達し、28日目の昼に＋3m登ってついに脱出します！'],
  },
  // 95 (genius)
  {
    diff: 'genius', cat: 'trick',
    t: ['Tách 12 đồng xu giả không biết nặng nhẹ', 'Chessboard Dominos Corner Cut', 'Tablero de ajedrez mutilado', '角を2つ切ったチェス盤のドミノ敷き詰め'],
    p: ['Một bàn cờ vua 8×8 (64 ô) bị cắt bỏ ĐÚNG 2 ô ở 2 góc ĐỐI DIỆN chéo nhau (còn 62 ô). Bạn có 31 quân domino kích thước 2×1. Có thể xếp phủ kín 62 ô còn lại không?', 'An 8×8 chessboard has TWO diagonally OPPOSITE corner squares cut off (leaving 62 squares). Can 31 dominos (2×1 each) cover all 62 remaining squares?', 'Un tablero 8×8 pierde DOS esquinas opuestas (quedan 62 casillas). ¿Pueden 31 fichas de dominó (2×1) cubrir las 62 casillas?', '8×8のチェス盤から「対角線上にある2つの角」を切り落としました（残り62マス）。2×1のドミノ31枚で残り62マスを隙間なく埋め尽くせる？'],
    m: {
      type: 'lateral_choice', illustration: 'box',
      options: [
        { vi: 'KHÔNG THỂ! Vì 2 góc đối diện CÙNG MÀU (còn 32 ô một màu, 30 ô màu kia)!', en: 'IMPOSSIBLE! Opposite corners share the SAME color (leaving 32 of one color & 30 of the other)!', es: '¡IMPOSIBLE! Las esquinas opuestas son del MISMO color (quedan 32 y 30).', ja: '不可能！対角の角は「同じ色」なので、白と黒のマス数が32対30になり2×1では絶対に埋まらない！' },
        { vi: 'Có thể, xếp hình xoắn ốc', en: 'Yes, using a spiral tiling', es: 'Sí, en espiral', ja: '渦巻き状に並べれば可能' },
        { vi: 'Có thể, xoay chéo quân domino', en: 'Yes, placing dominos diagonally', es: 'Sí, en diagonal', ja: '斜めに置けば可能' },
        { vi: 'Tùy màu sắc bàn cờ', en: 'Depends on square size', es: 'Depende del color', ja: 'マスのサイズ次第' },
      ],
      correctIndex: 0,
    },
    h1: ['Hãy dùng màu đen/trắng của bàn cờ vua làm bất biến (invariant)!', 'Use the checkerboard black/white coloring as an invariant!', '¡Usa los colores blanco y negro del tablero!', 'チェス盤の白・黒の塗り分け（不変量）に注目しよう！'],
    h2: ['Mỗi quân domino 2×1 luôn phủ ĐÚNG 1 ô trắng + 1 ô đen (31 domino cần 31 trắng + 31 đen). Nhưng 2 góc chéo đối diện nhau có CÙNG màu!', 'Every 2×1 domino covers 1 white + 1 black square! Yet diagonally opposite corners are the SAME color!', 'Cada dominó cubre 1 blanca y 1 negra, pero las esquinas opuestas son del mismo color.', '1枚のドミノは必ず白1＋黒1を覆うのに、対角の角は2つとも同じ色だよ！'],
    h3: ['Còn 32 ô màu này và 30 ô màu kia → KHÔNG THỂ xếp kín được!', '32 vs 30 squares → mathematically IMPOSSIBLE!', '32 contra 30 → ¡IMPOSIBLE!', '白黒の数が32と30に偏るので絶対に不可能！'],
    e: ['Chứng minh bất biến đẹp nhất toán học: 31 domino phải phủ 31 đen + 31 trắng, không thể phủ 32 đen + 30 trắng!', 'Classic invariant proof: 31 dominos require 31 black + 31 white, impossible for 32 + 30!', '¡Prueba clásica de invariante: 31 dominós requieren 31+31!', '数学で最も美しい不変量の証明：31枚のドミノには白黒31個ずつ必要ですが、32個と30個になるため不可能です！'],
  },
  // 96 (genius)
  {
    diff: 'genius', cat: 'action',
    t: ['Kích hoạt lõi thiên hà 30 xung', '30-Tap Quantum Burst', '30 toques cuánticos', '30連打・クォンタム解放'],
    p: ['Thử thách tốc độ cuối cùng! Chạm thật nhanh 30 lần vào tên lửa để bứt phá vận tốc ánh sáng!', 'Ultimate speed surge! Tap the rocket 30 times to break warp speed!', '¡Toca el cohete 30 veces rápido para alcanzar velocidad warp!', 'ロケットを30回高速連打してワープ速度を突破しよう！'],
    m: {
      type: 'action_meter', mode: 'multi_tap', targetShape: 'rocket', resultShape: 'planet', requiredValue: 30,
      meterLabel: { vi: 'Động cơ Warp', en: 'Warp Drive', es: 'Motor Warp', ja: 'ワープエンジン' },
    },
    h1: ['Chạm liên tục vào tên lửa cho tới khi đầy 30/30.', 'Tap the rocket rapidly up to 30.', 'Toca el cohete hasta 30.', 'ロケットを30回連打！'],
    h2: ['Mỗi cú chạm tăng thanh năng lượng thêm 1 nấc.', 'Each tap advances the warp gauge.', 'Cada toque llena el medidor.', '1タップごとにゲージが貯まるよ。'],
    h3: ['Chạm đủ 30 lần.', 'Tap 30 times.', '30 toques.', '30回タップ！'],
    e: ['Động cơ Warp kích hoạt — bứt phá thiên hà!', 'Warp speed engaged — full cosmic leap!', '¡Velocidad warp activada!', 'ワープエンジン始動！銀河へ飛び立ちました！'],
  },
  // 97 (genius)
  {
    diff: 'genius', cat: 'riddle',
    t: ['Cây cầu dây 4 người ban đêm', 'Four Travelers Bridge (17 min)', 'Cuatro viajeros y el puente (17m)', '4人・懐中電灯の橋渡り最短17分'],
    p: ['4 người qua cầu ban đêm chỉ có 1 đèn pin (tối đa 2 người đi cùng lúc, tốc độ tính theo người chậm hơn). Thời gian từng người là: 1 phút, 2 phút, 5 phút, 10 phút. Tổng thời gian NGẮN NHẤT để cả 4 qua cầu là bao nhiêu phút?', '4 travelers cross a bridge at night with 1 flashlight (max 2 cross together, at the slower person’s pace). Individual speeds: 1, 2, 5, and 10 minutes. What is the MINIMUM total minutes for all 4 to cross?', '4 personas cruzan un puente de noche con 1 linterna (máx 2 a la vez, al ritmo del más lento). Tiempos: 1, 2, 5 y 10 min. ¿Cuál es el MÍNIMO total de minutos?', '懐中電灯が1つ、橋は同時に2人まで。歩く速さはそれぞれ1分、2分、5分、10分（遅い方に合わせる）。4人全員が渡り切る「最短時間」は何分？'],
    m: { type: 'lock_dial', clueDisplay: 'Speeds [1, 2, 5, 10] · 1 Torch → Min minutes = ?', correctCode: '17', maxLength: 2 },
    h1: ['Không phải 19 phút (lấy 1 dẫn từng người: 10+1+5+1+2 = 19)! Có cách ghép 5 và 10 đi CHUNG!', 'Not 19 min! Pair 5 and 10 together so they only pay the 10-min cost ONCE!', '¡No son 19! Haz que 5 y 10 crucen juntos.', '19分ではないよ！一番遅い「5分と10分」を一緒に渡らせればロスが1回で済む！'],
    h2: ['Bước 1: 1+2 qua (2p). Bước 2: 1 về (1p). Bước 3: 5+10 qua (10p). Bước 4: 2 về (2p). Bước 5: 1+2 qua (2p)!', '1&2 cross (2m), 1 returns (1m), 5&10 cross (10m), 2 returns (2m), 1&2 cross (2m)!', '1+2 (2m), vuelve 1 (1m), 5+10 (10m), vuelve 2 (2m), 1+2 (2m).', '1と2が渡る(2)→1が戻る(1)→5と10が渡る(10)→2が戻る(2)→1と2が渡る(2)！'],
    h3: ['2 + 1 + 10 + 2 + 2 = 17 phút!', '2 + 1 + 10 + 2 + 2 = 17 minutes!', '2 + 1 + 10 + 2 + 2 = 17 minutos.', '2 ＋ 1 ＋ 10 ＋ 2 ＋ 2 ＝ 「17」分！'],
    e: ['Ghép 2 người chậm nhất (5 & 10) đi cùng nhau rút kỷ lục xuống còn đúng 17 phút!', 'Pairing the slowest two (5 & 10) achieves the famous 17-minute optimum!', '¡Emparejar al 5 y al 10 logra el óptimo de 17 minutos!', '遅い2人(5分と10分)を一緒に渡らせ、帰りは1分と2分が担当する最短「17分」ルートです！'],
  },
  // 98 (genius)
  {
    diff: 'genius', cat: 'trick',
    t: ['Từ khóa vạn năng', 'The Invisible 500th Spark', 'La chispa número 500', '500問への黄金の鍵'],
    p: ['Một bức thư bí mật viết bằng mực tàng hình: "Đừng tin đồng xu vàng hay chiếc cúp — hãy chạm trực tiếp vào chữ TÀNG HÌNH ngay trên dòng chữ này để hoàn thành thử thách!"', 'Invisible ink message: "Ignore the coins and trophies below — tap the word INVISIBLE right inside this message to complete the challenge!"', 'Mensaje invisible: "¡Ignora las monedas y trofeos: toca la palabra INVISIBLE en este mensaje para ganar!"', 'あぶり出しの秘密の手紙：「下のコインやトロフィーは無視して、この文の中にある『透明』という言葉を直接タップせよ！」'],
    m: {
      type: 'scene_tap', backdrop: 'day',
      tapPromptWord: { vi: 'TÀNG HÌNH', en: 'INVISIBLE', es: 'INVISIBLE', ja: '透明' },
      objects: [
        { id: 'c', shape: 'coin', x: 30, y: 55, scale: 1.25, decoy: true },
        { id: 't', shape: 'trophy', x: 70, y: 55, scale: 1.25, decoy: true },
      ],
    },
    h1: ['Đồng xu và chiếc cúp đều là vật cản đánh lạc hướng.', 'Both the coin and trophy are decoys.', 'Moneda y trofeo son trampas.', 'コインとトロフィーはどっちもダミー！'],
    h2: ['Tìm từ viết HOA ngay trong phần nội dung câu đố.', 'Tap the uppercase keyword in the prompt.', 'Toca la palabra en mayúsculas arriba.', '問題文の文字を直接タップしよう！'],
    h3: ['Chạm vào từ TÀNG HÌNH (en: INVISIBLE).', 'Tap INVISIBLE in the prompt.', 'Toca INVISIBLE en el texto.', '問題文の「透明」をタップ！'],
    e: ['Mực tàng hình hiện nguyên hình ngay khi bạn chạm đúng vào câu chữ!', 'Invisible ink revealed by tapping the exact hidden word!', '¡Tinta invisible revelada al instante!', '文字の仕掛けを見事に解読してクリアしました！'],
  },
  // 99 (genius)
  {
    diff: 'genius', cat: 'logic',
    t: ['Tổng ma thuật siêu cấp 23', 'Prime Trio Sum 23', 'Trío primo suma 23', '素数合計23の組み合わせ'],
    p: ['Chọn đúng 3 ô số sao cho TỔNG của 3 ô đó bằng chính xác 23!', 'Select exactly 3 number tiles whose SUM equals 23!', '¡Elige exactamente 3 casillas cuya SUMA sea 23!', 'ちょうど3枚の数字パネルを選んで「合計が23」になるようにしよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'magic_sum',
      gridSize: 3,
      initialGrid: [false, false, false, false, false, false, false, false, false],
      tileLabels: ['1', '2', '4', '6', '7', '8', '9', '10', '12'],
      requiredCount: 3,
      targetSum: 23,
    },
    h1: ['Thử bắt đầu với ô lớn nhất 12 hoặc 10.', 'Try starting with 12 or 10.', 'Empieza probando 12 o 10.', '一番大きい「12」や「10」を使ってみよう！'],
    h2: ['12 + 9 + 2 = 23 (hoặc 12 + 7 + 4 = 23, hoặc 10 + 9 + 4 = 23)!', '12 + 9 + 2 = 23 (or 12 + 7 + 4 = 23)!', 'Por ejemplo 12 + 9 + 2 = 23.', '12 ＋ 9 ＋ 2 ＝ 23 などが使えるよ！'],
    h3: ['Chọn 12, 9, 2 rồi bấm Kiểm tra.', 'Pick 12, 9, and 2, then Check.', 'Elige 12, 9 y 2 y comprueba.', '「12」「9」「2」を選んで確認！'],
    e: ['12 + 9 + 2 = 23 — tính nhẩm chính xác tuyệt đối!', '12 + 9 + 2 = 23!', '¡12 + 9 + 2 = 23 exactos!', '12＋9＋2＝23 がピタリと一致しました！'],
  },
  // 100 (genius)
  {
    diff: 'genius', cat: 'riddle',
    t: ['Đỉnh cao Creative Thinking #500', 'Creative Thinking Crown Finale', 'Gran Final Creative Thinking', 'Creative Thinking 500問目の王冠'],
    p: ['Câu hỏi khép lại bộ sưu tập 500 màn Creative Thinking: Thứ gì bạn càng CHO ĐI NHIỀU cho bạn bè khắp thế giới, thì bản thân bạn lại càng SỞ HỮU NHIỀU HƠN?', 'Grand Finale Riddle: What grows LARGER and RICHER the more of it you GIVE AWAY to others?', 'Pregunta Final: ¿Qué se vuelve más GRANDE y RICO cuanto más lo REPARTES con los demás?', '500問目を飾る最後の謎かけ：世界中の人に「分け与えるほど」、あなた自身の手元にもどんどん増え続けるものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'trophy',
      options: [
        { vi: 'Tri thức, Nụ cười & Ý tưởng Sáng tạo!', en: 'Knowledge, Smiles & Creative Ideas!', es: '¡Conocimiento, Sonrisas e Ideas Creativas!', ja: '知識・笑顔・クリエイティブなひらめき！' },
        { vi: 'Một chiếc bánh sinh nhật', en: 'A birthday cake', es: 'Un pastel', ja: '誕生日ケーキ' },
        { vi: '100 đồng tiền vàng', en: '100 gold coins', es: '100 monedas de oro', ja: '100枚の金貨' },
        { vi: 'Dung lượng pin điện thoại', en: 'Phone battery charge', es: 'Batería del teléfono', ja: 'スマホのバッテリー' },
      ],
      correctIndex: 0,
    },
    h1: ['Tiền bạc và bánh ngọt cho đi thì hết — thứ gì không hề vơi đi khi chia sẻ?', 'Coins and cake shrink when shared — what multiplies instead?', 'El dinero se gasta, ¿qué se multiplica al compartirse?', 'お金やケーキは分けると減るけど、分かち合うほど倍増するものとは？'],
    h2: ['Khi bạn chia sẻ kiến thức và niềm vui sáng tạo cho một người khác, cả hai người cùng có!', 'Sharing knowledge and creative spark leaves BOTH people richer!', 'Al compartir conocimiento e ideas, ambos ganan.', '知識やアイデアを教えても自分は失わず、2人とも豊かになるよね！'],
    h3: ['Chọn Tri thức, Nụ cười & Ý tưởng Sáng tạo!', 'Pick Knowledge, Smiles & Creative Ideas!', 'Elige ¡Conocimiento, Sonrisas e Ideas Creativas!', '「知識・笑顔・クリエイティブなひらめき！」を選ぼう！'],
    e: ['Chúc mừng bạn đã chinh phục Creative Thinking! Tri thức và tư duy sáng tạo càng sẻ chia lại càng tỏa sáng rực rỡ!', 'Congratulations on conquering Creative Thinking! Shared knowledge and creativity grow endlessly!', '¡Felicidades por conquistar Creative Thinking!', 'Creative Thinking全500問への挑戦おめでとうございます！分かち合うほど輝きを増す創造力をこれからも楽しもう！'],
  },
];

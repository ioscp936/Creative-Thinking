import { Difficulty, Puzzle, PuzzleMechanic } from './types';

type Quad = [string, string, string, string];
const loc = (q: Quad) => ({ vi: q[0], en: q[1], es: q[2], ja: q[3] });

interface Spec500 {
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

const SPECS_TRICKS_A: Spec500[] = [
  // 1
  {
    diff: 'easy', cat: 'trick',
    t: ['Bữa ăn không thể', 'Impossible Meal', 'Comida imposible', '絶対に食べられない食事'],
    p: ['Thứ gì bạn không bao giờ có thể ăn vào bữa sáng?', 'What can you never eat for breakfast?', '¿Qué no puedes comer nunca en el desayuno?', '朝ごはんに絶対に食べられないものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'cake',
      options: [
        { vi: 'Bánh mì nóng', en: 'Hot toast', es: 'Tostada caliente', ja: '焼き立てのパン' },
        { vi: 'Bữa trưa và bữa tối', en: 'Lunch and dinner', es: 'Almuerzo y cena', ja: '昼ごはんと晩ごはん' },
        { vi: 'Trứng ốp la', en: 'Fried eggs', es: 'Huevos fritos', ja: '目玉焼き' },
        { vi: 'Bánh ngọt sô-cô-la', en: 'Chocolate cake', es: 'Pastel de chocolate', ja: 'チョコケーキ' },
      ],
      correctIndex: 1,
    },
    h1: ['Nghĩ theo đúng nghĩa đen của thời gian dùng bữa.', 'Think literally about meal names.', 'Piensa literalmente en los nombres de las comidas.', '「食事の名前」をそのまま文字通り考えよう。'],
    h2: ['Nếu ăn vào buổi sáng thì nó không còn là bữa trưa hay bữa tối nữa!', 'Once eaten in the morning, it is no longer lunch or dinner!', 'Si lo comes por la mañana ya no es cena.', '朝に食べたらそれはもう朝ごはんになるよね！'],
    h3: ['Chọn "Bữa trưa và bữa tối".', 'Pick "Lunch and dinner".', 'Elige "Almuerzo y cena".', '「昼ごはんと晩ごはん」を選ぼう。'],
    e: ['Bữa trưa và bữa tối mà ăn lúc sáng thì thành bữa sáng mất rồi!', 'You can never eat lunch or dinner for breakfast!', '¡Nunca puedes desayunar almuerzo o cena!', '朝に食べたら朝食になってしまうので、昼食と夕食は絶対に朝食として食べられません！'],
  },
  // 2
  {
    diff: 'easy', cat: 'riddle',
    t: ['Vua không ngai', 'The Crownless King', 'Rey sin corona', '王冠なき王'],
    p: ['Cái gì có thành phố nhưng không có nhà, có núi nhưng không có cây, có nước nhưng không có cá?', 'What has cities, but no houses; mountains, but no trees; and water, but no fish?', '¿Qué tiene ciudades sin casas, montañas sin árboles y agua sin peces?', '都市はあるのに家がなく、山はあるのに木がなく、水はあるのに魚がいないものは？'],
    m: {
      type: 'lateral_choice', illustration: 'book',
      options: [
        { vi: 'Sa mạc Sahara', en: 'The Sahara Desert', es: 'El desierto', ja: '砂漠' },
        { vi: 'Tấm bản đồ', en: 'A map', es: 'Un mapa', ja: '地図' },
        { vi: 'Giấc mơ ban trưa', en: 'A daydream', es: 'Un sueño', ja: '白昼夢' },
        { vi: 'Hành tinh Sao Hỏa', en: 'Planet Mars', es: 'Planeta Marte', ja: '火星' },
      ],
      correctIndex: 1,
    },
    h1: ['Vật này thường được trải lên bàn hoặc mở trên điện thoại khi đi du lịch.', 'Travelers open this to find their way.', 'Lo usas cuando viajas para orientarte.', '旅行のときに道を探すのに使うものだよ。'],
    h2: ['Nó chỉ biểu diễn địa danh bằng ký hiệu và nét vẽ.', 'It shows places flat on paper.', 'Representa lugares en papel.', '紙や画面に描かれた平面の案内図！'],
    h3: ['Đáp án là Tấm bản đồ.', 'The answer is A map.', 'La respuesta es Un mapa.', '答えは「地図」！'],
    e: ['Bản đồ có tên thành phố, dãy núi và đại dương nhưng chẳng có người hay cá thật!', 'A map displays cities, mountains, and oceans on paper without living things!', '¡Un mapa dibuja todo eso sin vida real!', '地図には都市も山も海も描かれていますが、本物の家も木も魚もいません！'],
  },
  // 3
  {
    diff: 'easy', cat: 'trick',
    t: ['Đố chữ: Quả gì không ăn?', 'Uneditable Fruit?', '¿Fruta o qué?', '食べられない果実？'],
    p: ['Trong tiếng Việt: "Bỏ đầu thì thành cái dùng để quét, giữ nguyên thì để xem giờ" là chữ gì? Hãy chạm vào vật thật tương ứng!', 'Tap the object that has hands and a face, yet never waves or smiles!', 'Toca el objeto que tiene manecillas y esfera, pero nunca saluda.', '針と顔があるのに、手を振ることも笑うこともないものはどれ？'],
    m: {
      type: 'scene_tap',
      objects: [
        { id: 'c1', shape: 'cat', x: 24, y: 55, scale: 1.1, decoy: true },
        { id: 'c2', shape: 'clock', x: 52, y: 52, scale: 1.25, isTarget: true },
        { id: 'c3', shape: 'owl', x: 78, y: 55, scale: 1.1, decoy: true },
      ],
    },
    h1: ['Thứ dùng để xem giờ mỗi ngày.', 'It tells you the time.', 'Sirve para ver la hora.', '時間を教えてくれるものだよ。'],
    h2: ['Nó có mặt số và kim chỉ giờ.', 'It has a face and two hands.', 'Tiene esfera y agujas.', '文字盤（顔）と針（手）がついているよ。'],
    h3: ['Chạm vào chiếc đồng hồ!', 'Tap the clock!', '¡Toca el reloj!', '時計をタップしよう！'],
    e: ['Đồng hồ có mặt và kim (tay) nhưng không bao giờ vẫy chào!', 'A clock has a face and hands without a body!', '¡El reloj tiene cara y manecillas!', '時計には顔（文字盤）と手（針）がありますが、絶対に挨拶しません！'],
  },
  // 4
  {
    diff: 'easy', cat: 'drag',
    t: ['Đánh thức chú mèo lười', 'Wake the Sleepy Cat', 'Despierta al gato', '眠いネコを起こそう'],
    p: ['Chú mèo đang ngủ say bên đống đá. Hãy dụ chú mèo tỉnh dậy bằng món khoái khẩu nhất!', 'The cat refuses to wake up! Tempt it awake with its favorite treat!', '¡El gato no se despierta! Usa su comida favorita.', 'ネコが起きない！一番好きなエサで起こしてあげよう！'],
    m: {
      type: 'drag_combine', mode: 'drop_on_target', backdrop: 'room',
      items: [
        { id: 'cat', shape: 'cat', x: 72, y: 56, scale: 1.25 },
        { id: 'fish', shape: 'fish', x: 24, y: 34, scale: 1.1 },
        { id: 'bone', shape: 'bone', x: 24, y: 70, scale: 1.05 },
        { id: 'bell', shape: 'bell', x: 50, y: 26, scale: 0.95 },
      ],
      sourceId: 'fish', targetId: 'cat',
    },
    h1: ['Xương dành cho cún, còn mèo thích gì?', 'Dogs love bones — what do cats love?', 'A los perros les gustan los huesos; ¿y a los gatos?', '骨は犬の好物。ネコの好物は？'],
    h2: ['Kéo con cá tươi lại gần chú mèo.', 'Drag the fresh fish to the cat.', 'Arrastra el pescado hacia el gato.', 'お魚をネコの方へドラッグしよう。'],
    h3: ['Thả con cá lên chú mèo.', 'Drop the fish right onto the cat.', 'Suelta el pescado sobre el gato.', '魚をネコに重ねれば目覚めるよ！'],
    e: ['Ngửi thấy mùi cá thơm, mèo tỉnh dậy ngay lập tức!', 'One whiff of fresh fish woke the kitty right up!', '¡El olor a pescado despertó al gato!', '魚のおいしそうな匂いで一発で目が覚めました！'],
  },
  // 5
  {
    diff: 'easy', cat: 'trick',
    t: ['Phá vỡ trong im lặng', 'Broken by a Whisper', 'Roto por un susurro', 'ささやきで壊れるもの'],
    p: ['Thứ gì mong manh đến mức chỉ cần nhắc đến tên nó thôi là nó lập tức tan biến?', 'What is so fragile that merely saying its name breaks it?', '¿Qué es tan frágil que con solo decir su nombre se rompe?', 'その名前を口に出しただけで壊れてしまう、とても壊れやすいものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'hourglass',
      options: [
        { vi: 'Thủy tinh pha lê', en: 'Crystal glass', es: 'Cristal fino', ja: 'クリスタルガラス' },
        { vi: 'Sự im lặng', en: 'Silence', es: 'El silencio', ja: '沈黙' },
        { vi: 'Bong bóng xà phòng', en: 'A soap bubble', es: 'Una pompa de jabón', ja: 'シャボン玉' },
        { vi: 'Trái tim băng', en: 'A frozen heart', es: 'Un corazón helado', ja: '氷の心' },
      ],
      correctIndex: 1,
    },
    h1: ['Không phải đồ vật hữu hình đâu!', 'It is not a physical object!', '¡No es un objeto físico!', '目に見えるモノではありません！'],
    h2: ['Khi bạn nói thành tiếng một từ, âm thanh phát ra phá vỡ điều gì?', 'Speaking out loud immediately destroys...', 'Al hablar en voz alta rompes...', '声に出して話すと何が破られる？'],
    h3: ['Đáp án là Sự im lặng.', 'The answer is Silence.', 'La respuesta es El silencio.', '答えは「沈黙」！'],
    e: ['Chỉ cần cất tiếng gọi "Im lặng!", sự im lặng đã biến mất rồi!', 'Say "silence" out loud and the silence is instantly broken!', '¡Al decir "silencio" rompes el silencio!', '「沈黙」と声に出した瞬間に、その静けさは破られてしまいます！'],
  },
  // 6
  {
    diff: 'easy', cat: 'riddle',
    t: ['Đi quanh chẳng rời chỗ', 'Travels the World in a Corner', 'Viaja sin moverse', '隅にいながら世界中を旅する'],
    p: ['Thứ gì nằm yên ở một góc nhỏ trên phong bì nhưng có thể đi vòng quanh khắp thế giới?', 'What stays in the corner yet travels all around the world?', '¿Qué se queda en un rincón y aun así da la vuelta al mundo?', '隅っこにずっと留まっているのに、世界中を旅することができるものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'planet',
      options: [
        { vi: 'Con tem thư', en: 'A postage stamp', es: 'Un sello postal', ja: '切手' },
        { vi: 'Chiếc la bàn', en: 'A compass', es: 'Una brújula', ja: '羅針盤' },
        { vi: 'Cái vali', en: 'A suitcase', es: 'Una maleta', ja: 'スーツケース' },
        { vi: 'Mạng nhện', en: 'A spider web', es: 'Una telaraña', ja: 'クモの巣' },
      ],
      correctIndex: 0,
    },
    h1: ['Vật nhỏ dán trên góc phải lá thư giấy.', 'Stuck on the top-right corner of an envelope.', 'Va pegado en la esquina de un sobre.', '封筒の右上に貼られる小さな紙だよ。'],
    h2: ['Bưu điện dùng nó để gửi thư xuyên quốc gia.', 'Post offices need it to mail letters abroad.', 'Necesario para enviar cartas lejos.', '手紙を世界中に届けるために貼るもの！'],
    h3: ['Chọn Con tem thư.', 'Pick A postage stamp.', 'Elige Un sello postal.', '「切手」を選ぼう！'],
    e: ['Con tem luôn dán ở góc phong bì và theo lá thư đi khắp năm châu!', 'A stamp stays in the envelope corner while flying worldwide!', '¡El sello va en la esquina de la carta por todo el mundo!', '切手は封筒の隅に貼られたまま、世界中を旅します！'],
  },
  // 7
  {
    diff: 'easy', cat: 'trick',
    t: ['10 chú chim trên cành', 'Ten Birds on a Branch', 'Diez pájaros', '枝の上の10羽の鳥'],
    p: ['Có 10 con chim đậu trên cành. Bác thợ săn bắn "Đoàng!" trúng 1 con rơi xuống. Hỏi trên cành còn lại mấy con?', '10 birds sit on a branch. A hunter fires a loud shot and hits 1 bird. How many remain on the branch?', 'Hay 10 pájaros en una rama. Un cazador dispara y acierta a 1. ¿Cuántos quedan en la rama?', '枝に10羽の鳥が止まっています。猟師が銃を撃ち、1羽に当たりました。枝に残った鳥は何羽？'],
    m: { type: 'lock_dial', clueDisplay: '10 🐦 − 💥 1 = ?', correctCode: '0', maxLength: 2 },
    h1: ['Không phải 10 - 1 = 9 đâu nhé!', 'It is NOT 10 - 1 = 9!', '¡No es 10 - 1 = 9!', '10 − 1 ＝ 9 ではありません！'],
    h2: ['Tiếng súng "Đoàng!" rất to — 9 con còn lại sẽ làm gì?', 'A gunshot is loud! What do the other 9 birds do?', 'El disparo suena muy fuerte; ¿qué hacen los otros 9?', '銃声が響いたら、残りの9羽はどうする？'],
    h3: ['Tất cả bay mất hết! Đáp án là 0.', 'They all fly away! Answer: 0.', '¡Todos salen volando! Respuesta: 0.', '驚いてみんな飛んでいくので「0」羽！'],
    e: ['1 con rơi xuống, 9 con còn lại giật mình bay hết nên trên cành còn 0 con!', 'One fell and the other nine flew away at the gunshot — zero left!', '¡El ruido espantó a todos los demás!', '1羽は落ち、残りの9羽は銃声に驚いて飛び去ったので枝には0羽です！'],
  },
  // 8
  {
    diff: 'easy', cat: 'visual',
    t: ['Lỗ áo bị rách (4 lỗ)', 'Four-Hole T-Shirt', 'Camiseta con 4 agujeros', '穴あきTシャツ（4ヶ所）'],
    p: ['Chiếc áo thun này có 4 vết rách xuyên cả mặt trước lẫn mặt sau. Nếu đếm hết mọi lỗ hở trên áo (kể cả cổ, tay áo và gấu áo), có tổng cộng bao nhiêu lỗ?', 'This shirt has 4 holes torn straight through front and back. Including neck, sleeves, and waist, how many total holes?', 'Esta camiseta tiene 4 agujeros que atraviesan ambos lados. Contando cuello, mangas y bajo, ¿cuántos agujeros hay?', '前後を貫通する4つの穴があるTシャツ。首・袖・裾の穴も合わせると穴は全部でいくつ？'],
    m: { type: 'visual_count', visualKind: 'tshirt_holes', variant: 4, correctAnswer: 12, min: 1, max: 24 },
    h1: ['Mỗi vết rách xuyên thấu tạo ra 2 lỗ (1 trước + 1 sau).', 'Each through-tear makes 2 holes (front + back).', 'Cada agujero pasante crea 2 aberturas.', '貫通する傷は表と裏で2つの穴になるよ。'],
    h2: ['4 vết rách × 2 = 8 lỗ, cộng thêm 4 lỗ sẵn có (cổ, 2 tay, thân dưới).', '4 × 2 = 8 tear holes, plus 4 regular openings (neck, 2 sleeves, hem).', '8 de los cortes + 4 naturales (cuello, mangas, cintura).', '8個の貫通穴 ＋ 元々の4個（首・両袖・裾）！'],
    h3: ['8 + 4 = 12 lỗ.', '8 + 4 = 12 holes.', '8 + 4 = 12 agujeros.', '8 ＋ 4 ＝ 12個！'],
    e: ['4 vết rách xuyên 2 lớp vải (8 lỗ) + 4 lỗ tự nhiên của áo = 12 lỗ!', '4 through-tears (8 holes) + 4 shirt openings = 12 holes!', '¡8 agujeros de rasgones + 4 de la prenda = 12!', '表裏で8個の穴＋Tシャツ本来の4つの穴＝合計12個！'],
  },
  // 9
  {
    diff: 'easy', cat: 'trick',
    t: ['Chạm đúng hình vuông ẩn', 'Tap the Word SQUARE', 'Toca la palabra CUADRADO', '文字「四角」をタップ'],
    p: ['Đừng bấm mấy hình tròn hay tam giác! Chạm vào chữ VUÔNG ngay trong câu hỏi này!', 'Forget the shapes below — tap the word SQUARE right inside this sentence!', 'Olvida las figuras de abajo: ¡toca la palabra CUADRADO en esta frase!', '下の図形は罠！問題文の中の「四角」という言葉をタップしよう！'],
    m: {
      type: 'scene_tap',
      tapPromptWord: { vi: 'VUÔNG', en: 'SQUARE', es: 'CUADRADO', ja: '四角' },
      objects: [
        { id: 's1', shape: 'prism', x: 26, y: 54, scale: 1.2, decoy: true },
        { id: 's2', shape: 'box', x: 52, y: 54, scale: 1.2, decoy: true },
        { id: 's3', shape: 'planet', x: 76, y: 54, scale: 1.2, decoy: true },
      ],
    },
    h1: ['Chiếc hộp bên dưới chỉ là hình mồi nhử.', 'The box icon below is a decoy.', 'La caja de abajo es un señuelo.', '下の箱はフェイクだよ。'],
    h2: ['Đọc kỹ dòng chữ câu hỏi phía trên.', 'Look closely at the text prompt above.', 'Lee el texto de la pregunta arriba.', '上の問題文のテキストをよく見て！'],
    h3: ['Chạm vào từ VUÔNG trong câu hỏi.', 'Tap SQUARE in the prompt.', 'Toca CUADRADO en el texto.', '問題文の「四角」をタップ！'],
    e: ['Bạn đã không bị chiếc hộp đánh lừa!', 'You skipped the decoy box and tapped the word!', '¡Ignoraste la caja trampa!', 'ダミーの箱に騙されず見抜きました！'],
  },
  // 10
  {
    diff: 'easy', cat: 'drag',
    t: ['Chú gà khát nước', 'Thirsty Little Chick', 'Pollito sediento', '喉が渇いたヒヨコ'],
    p: ['Chú gà con đang khát khô cổ giữa nắng trưa! Hãy giúp chú gà uống nước mát ngay!', 'The little chick is thirsty under the hot sun! Bring it cool water!', '¡El pollito tiene sed! Dale agua fresca ahora.', '太陽の下でヒヨコが喉を乾かしているよ！水を飲ませてあげよう！'],
    m: {
      type: 'drag_combine', mode: 'drop_on_target', backdrop: 'park',
      items: [
        { id: 'chick', shape: 'chick', x: 74, y: 58, scale: 1.25 },
        { id: 'water', shape: 'water', x: 24, y: 58, scale: 1.15 },
        { id: 'sun', shape: 'sun', x: 50, y: 24, scale: 1.1 },
      ],
      sourceId: 'water', targetId: 'chick',
    },
    h1: ['Mặt trời làm chú gà nóng thêm thôi.', 'The sun only makes it warmer.', 'El sol solo da más calor.', '太陽はもっと暑くなるだけだよ。'],
    h2: ['Kéo giọt nước mát lại gần chú gà con.', 'Drag the water over to the chick.', 'Arrastra el agua hasta el pollito.', '水をヒヨコまでドラッグしよう。'],
    h3: ['Thả giọt nước lên chú gà con.', 'Drop the water onto the chick.', 'Suelta el agua sobre el pollito.', '水をヒヨコに重ねよう！'],
    e: ['Chú gà con uống nước mát và vui tươi trở lại!', 'The chick got refreshed right away!', '¡El pollito calmó su sed!', 'お水を飲んでヒヨコも元気いっぱいになりました！'],
  },
  // 11
  {
    diff: 'easy', cat: 'riddle',
    t: ['Chàng trai cao nhất', 'The Tallest Man', 'El hombre más alto', '一番背が高い男'],
    p: ['Bốn người đứng so chiều cao: Nam cao hơn Bình, Cường thấp hơn Bình, Dũng cao hơn Nam. Ai là người thấp nhất?', 'Four friends compare heights: Sam is taller than Ben, Carl is shorter than Ben, and Dan is taller than Sam. Who is the shortest?', 'Cuatro amigos miden su altura: Sam es más alto que Ben, Carl es más bajo que Ben y Dan es más alto que Sam. ¿Quién es el más bajo?', '4人の背比べ：サムはベンより高く、カールはベンより低く、ダンはサムより高い。一番背が低いのは誰？'],
    m: {
      type: 'lateral_choice', illustration: 'star',
      options: [
        { vi: 'Nam', en: 'Sam', es: 'Sam', ja: 'サム' },
        { vi: 'Bình', en: 'Ben', es: 'Ben', ja: 'ベン' },
        { vi: 'Cường', en: 'Carl', es: 'Carl', ja: 'カール' },
        { vi: 'Dũng', en: 'Dan', es: 'Dan', ja: 'ダン' },
      ],
      correctIndex: 2,
    },
    h1: ['Xếp thứ tự từ cao đến thấp: Dũng > Nam > Bình...', 'Order from tallest to shortest: Dan > Sam > Ben...', 'Ordena de mayor a menor: Dan > Sam > Ben...', '高い順に並べると ダン ＞ サム ＞ ベン…'],
    h2: ['Cường lại thấp hơn cả Bình.', 'And Carl is even shorter than Ben.', 'Y Carl es más bajo que Ben.', 'カールはベンよりも低いよ。'],
    h3: ['Người thấp nhất là Cường.', 'Carl is the shortest.', 'El más bajo es Carl.', '一番低いのは「カール」！'],
    e: ['Thứ tự đầy đủ: Dũng > Nam > Bình > Cường!', 'Full order: Dan > Sam > Ben > Carl!', 'Orden: Dan > Sam > Ben > Carl.', '背の順は ダン ＞ サム ＞ ベン ＞ カール です！'],
  },
  // 12
  {
    diff: 'easy', cat: 'trick',
    t: ['Mật khẩu chỉ 1 chữ số', 'Five Minus Two?', '¿Cinco menos dos?', '5から2を引いたら？'],
    p: ['Một bức tường có 5 viên gạch, bạn lấy đi 2 viên gạch. Hỏi BẠN có bao nhiêu viên gạch?', 'There are 5 bricks on a wall and you take away 2 bricks. How many bricks do YOU have?', 'Hay 5 ladrillos en un muro y te llevas 2. ¿Cuántos ladrillos tienes TÚ?', '壁にレンガが5個あり、あなたが2個持ち去りました。あなたが持っているレンガは何個？'],
    m: { type: 'lock_dial', clueDisplay: '5 🧱 → take 2 → YOU have ?', correctCode: '2', maxLength: 2 },
    h1: ['Đề bài KHÔNG hỏi trên tường còn lại mấy viên!', 'It does NOT ask how many remain on the wall!', '¡NO pregunta cuántos quedan en el muro!', '壁に何個残ったかは聞いていないよ！'],
    h2: ['Bạn vừa lấy đi đúng 2 viên gạch về tay mình.', 'You literally just picked up 2 bricks.', 'Tú acabas de tomar 2 ladrillos.', 'あなたが取ったのは2個のレンガだよね。'],
    h3: ['Số gạch bạn có là 2.', 'You have 2 bricks.', 'Tienes 2 ladrillos.', '持っているのは「2」個！'],
    e: ['Cú lừa kinh điển: Bạn lấy 2 viên thì bạn có 2 viên!', 'Classic twist: If you take 2 bricks, you have 2 bricks!', '¡Si tomas 2 ladrillos, tienes 2!', '引っ掛け問題！2個取ったのだからあなたが持っているのは2個です！'],
  },
  // 13
  {
    diff: 'easy', cat: 'logic',
    t: ['Sắp xếp kích thước hành tinh', 'Ball to Planet Scale', 'Del balón al planeta', '小さいものから順に並べよう'],
    p: ['Sắp xếp 4 vật thể sau từ NHỎ NHẤT đến LỚN NHẤT theo kích thước ngoài đời thực!', 'Sort these 4 objects from SMALLEST to LARGEST in real life!', '¡Ordena estos 4 objetos de MENOR a MAYOR tamaño real!', '次の4つを現実の大きさで「小さい順」に並べ替えよう！'],
    m: {
      type: 'order_sort',
      items: [
        { id: 'planet', shape: 'planet', label: { vi: 'Hành tinh', en: 'Planet', es: 'Planeta', ja: '惑星' } },
        { id: 'apple', shape: 'apple', label: { vi: 'Quả táo', en: 'Apple', es: 'Manzana', ja: 'りんご' } },
        { id: 'rocket', shape: 'rocket', label: { vi: 'Tên lửa', en: 'Rocket', es: 'Cohete', ja: 'ロケット' } },
        { id: 'coin', shape: 'coin', label: { vi: 'Đồng xu', en: 'Coin', es: 'Moneda', ja: 'コイン' } },
      ],
      correctOrder: ['coin', 'apple', 'rocket', 'planet'],
    },
    h1: ['Đồng xu nằm gọn trong lòng bàn tay, nhỏ hơn quả táo.', 'A coin is smaller than an apple.', 'Una moneda es más pequeña que una manzana.', 'コインはりんごより小さいよ。'],
    h2: ['Tên lửa to hơn quả táo, còn hành tinh thì khổng lồ nhất.', 'A rocket towers over an apple, and a planet is biggest.', 'El cohete supera a la manzana y el planeta es el mayor.', 'ロケットは大きく、惑星が最大！'],
    h3: ['Thứ tự: Đồng xu → Quả táo → Tên lửa → Hành tinh.', 'Order: Coin → Apple → Rocket → Planet.', 'Orden: Moneda → Manzana → Cohete → Planeta.', 'コイン → りんご → ロケット → 惑星！'],
    e: ['Thứ tự tăng dần hoàn hảo: Đồng xu < Táo < Tên lửa < Hành tinh!', 'Coin < Apple < Rocket < Planet!', '¡Moneda < Manzana < Cohete < Planeta!', 'コイン ＜ りんご ＜ ロケット ＜ 惑星の順で正解！'],
  },
  // 14
  {
    diff: 'easy', cat: 'riddle',
    t: ['Chạy mãi không biết mệt', 'Runs Without Legs', 'Corre sin piernas', '足がないのに走り続ける'],
    p: ['Thứ gì luôn chạy xuôi dòng mà không bao giờ biết đi bộ, có miệng nhưng chẳng bao giờ nói năng?', 'What always runs and never walks, has a mouth yet never talks, and has a bed yet never sleeps?', '¿Qué corre y nunca camina, tiene boca pero no habla y tiene lecho pero no duerme?', '歩くことはなくいつも走り続け、口はあるのに話さず、寝床はあるのに眠らないものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'water',
      options: [
        { vi: 'Dòng sông', en: 'A river', es: 'Un río', ja: '川' },
        { vi: 'Cơn gió', en: 'The wind', es: 'El viento', ja: '風' },
        { vi: 'Đoàn tàu', en: 'A train', es: 'Un tren', ja: '電車' },
        { vi: 'Chiếc xe đạp', en: 'A bicycle', es: 'Una bicicleta', ja: '自転車' },
      ],
      correctIndex: 0,
    },
    h1: ['Nó chảy từ thượng nguồn ra cửa biển.', 'It flows toward the sea.', 'Fluye hacia el mar.', '山から海へと流れていくよ。'],
    h2: ['Nó có lòng sông (bed) và cửa sông (mouth).', 'It has a river mouth and a riverbed.', 'Tiene desembocadura y cauce.', '川床（ベッド）と河口（口）を持っているよ！'],
    h3: ['Đáp án là Dòng sông.', 'Pick A river.', 'Elige Un río.', '答えは「川」！'],
    e: ['Dòng sông chảy mãi (runs), có cửa sông (mouth) và lòng sông (bed)!', 'A river has a mouth and a bed and runs endlessly!', '¡Un río corre siempre con cauce y desembocadura!', '川は流れ続け（走り）、河口（口）と川床（ベッド）を持ちます！'],
  },
  // 15
  {
    diff: 'easy', cat: 'action',
    t: ['Thổi phồng khinh khí cầu', 'Inflate the Balloon', 'Infla el globo', '風船を大きく膨らませよう'],
    p: ['Bơm hơi liên tục bằng cách chạm nhanh 12 lần vào quả bóng bay để nó cất cánh!', 'Tap the balloon 12 times quickly to pump it up for liftoff!', '¡Toca el globo 12 veces rápido para inflarlo!', '風船を12回素早くタップして膨らませよう！'],
    m: {
      type: 'action_meter', mode: 'multi_tap', targetShape: 'balloon', resultShape: 'rocket', requiredValue: 12,
      meterLabel: { vi: 'Áp suất hơi', en: 'Air Pressure', es: 'Presión de aire', ja: '空気圧' },
    },
    h1: ['Chạm liên tiếp vào hình quả bóng ở giữa.', 'Keep tapping the balloon icon.', 'Toca repetidamente el globo.', '真ん中の風船を連打しよう！'],
    h2: ['Đạt đủ 12 lần chạm là thanh nạp đầy 100%.', 'Reach 12 taps to fill the meter.', 'Llega a 12 toques para llenarlo.', '12回タップするとゲージが満タンになるよ。'],
    h3: ['Nhấn đủ 12 lần.', 'Tap 12 times.', 'Pulsa 12 veces.', '合計12回タップ！'],
    e: ['Bóng bay căng tròn bay vút lên trời xanh!', 'Fully inflated and ready for liftoff!', '¡Inflado al 100%!', 'パンパンに膨らんで空へ飛び立ちました！'],
  },
  // 16
  {
    diff: 'easy', cat: 'trick',
    t: ['Kho báu dưới đá tảng', 'Under the Heavy Boulder', 'Bajo la roca', '岩の下のお宝'],
    p: ['Chìa khóa vàng bị giấu mất rồi! Hãy dọn chướng ngại vật để lấy chiếc chìa khóa.', 'The golden key is hidden! Clear the obstacle to claim it.', '¡La llave dorada está escondida! Quita el obstáculo para encontrarla.', '黄金の鍵が隠された！障害物をどけて鍵を手に入れよう！'],
    m: {
      type: 'drag_combine', mode: 'move_aside_then_tap', backdrop: 'park',
      items: [
        { id: 'key', shape: 'key', x: 50, y: 55, scale: 1.05 },
        { id: 'rock', shape: 'rock', x: 50, y: 55, scale: 1.65 },
        { id: 'bush', shape: 'bush', x: 22, y: 65, scale: 1.1 },
      ],
      sourceId: 'rock', targetId: 'key',
    },
    h1: ['Bụi cây bên trái chẳng giấu gì đâu.', 'The bush on the left hides nothing.', 'El arbusto no oculta nada.', '左の茂みの下には何もないよ。'],
    h2: ['Kéo tảng đá lớn ở giữa sang một bên.', 'Drag the big center boulder aside.', 'Mueve la gran roca del centro a un lado.', '真ん中の大きな岩を横に動かそう。'],
    h3: ['Sau khi lộ chìa khóa vàng, hãy chạm vào nó.', 'Tap the golden key once uncovered.', 'Toca la llave dorada al descubrirla.', '現れた黄金の鍵をタップしよう！'],
    e: ['Tảng đá nặng vừa lăn ra, chìa khóa vàng liền tỏa sáng!', 'Rolling the boulder revealed the golden key!', '¡La llave estaba justo debajo de la roca!', '大きな岩をどけたら下に鍵が隠れていました！'],
  },
  // 17
  {
    diff: 'easy', cat: 'riddle',
    t: ['Thứ luôn đi lên', 'Always Goes Up', 'Siempre sube', '絶対に下がらないもの'],
    p: ['Thứ gì trên đời luôn chỉ tăng lên chứ không bao giờ giảm xuống được?', 'What goes up and can never, ever come back down?', '¿Qué siempre sube y nunca puede bajar?', '上がることはあっても、絶対に下がることのないものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'hourglass',
      options: [
        { vi: 'Giá vàng thế giới', en: 'Gold prices', es: 'El precio del oro', ja: '金の価格' },
        { vi: 'Tuổi tác của bạn', en: 'Your age', es: 'Tu edad', ja: 'あなたの年齢' },
        { vi: 'Khinh khí cầu', en: 'A hot air balloon', es: 'Un globo aerostático', ja: '熱気球' },
        { vi: 'Nhiệt độ ngoài trời', en: 'Outside temperature', es: 'La temperatura', ja: '外気温' },
      ],
      correctIndex: 1,
    },
    h1: ['Mỗi năm vào dịp sinh nhật, con số này tăng thêm 1.', 'It increases by 1 on every birthday.', 'Sube 1 cada cumpleaños.', '毎年誕生日に1つ増えるものだよ。'],
    h2: ['Không ai có thể trẻ lại theo năm tháng!', 'Nobody can reverse time on their birthdays!', '¡Nadie puede rejuvenecer cronológicamente!', '時間は巻き戻せないよね！'],
    h3: ['Chọn Tuổi tác của bạn.', 'Pick Your age.', 'Elige Tu edad.', '「あなたの年齢」を選ぼう！'],
    e: ['Tuổi tác chỉ tăng thêm theo từng năm, không bao giờ đi xuống!', 'Your age only ever goes up!', '¡La edad nunca baja!', '年齢は増える一方で、二度と減ることはありません！'],
  },
  // 18
  {
    diff: 'easy', cat: 'trick',
    t: ['Chạm hết 4 mùa', 'Touch the Four Seasons', 'Las cuatro estaciones', '四季を順番にタップ'],
    p: ['Chạm theo đúng thứ tự: Bông hoa (Xuân) → Mặt trời (Hạ) → Chiếc lá (Thu) → Bông băng (Đông)!', 'Tap in seasonal order: Flower (Spring) → Sun (Summer) → Leaf (Autumn) → Ice (Winter)!', 'Toca en orden: Flor (Primavera) → Sol (Verano) → Hoja (Otoño) → Hielo (Invierno)!', '季節の順にタップしよう：花（春）→ 太陽（夏）→ 葉（秋）→ 氷（冬）！'],
    m: {
      type: 'scene_tap', backdrop: 'park',
      objects: [
        { id: 'winter', shape: 'ice', x: 76, y: 34, scale: 1.15, isTarget: true, targetOrder: 4 },
        { id: 'summer', shape: 'sun', x: 74, y: 68, scale: 1.15, isTarget: true, targetOrder: 2 },
        { id: 'spring', shape: 'flower', x: 24, y: 68, scale: 1.15, isTarget: true, targetOrder: 1 },
        { id: 'autumn', shape: 'leaf', x: 26, y: 34, scale: 1.15, isTarget: true, targetOrder: 3 },
      ],
    },
    h1: ['Bắt đầu từ mùa Xuân (Bông hoa).', 'Start with Spring (Flower).', 'Empieza por la Flor.', '最初は春の「花」から！'],
    h2: ['Sau Hoa là Mặt trời, rồi Chiếc lá.', 'Next is Sun, then Leaf.', 'Luego Sol, luego Hoja.', '花 → 太陽 → 葉 の順に進もう。'],
    h3: ['Cuối cùng chạm Bông băng (Đông).', 'Finish by tapping Ice (Winter).', 'Termina tocando el Hielo.', '最後に冬の「氷」をタップ！'],
    e: ['Xuân - Hạ - Thu - Đông hoàn hảo!', 'Spring, Summer, Autumn, Winter in harmony!', '¡Las 4 estaciones en orden!', '春夏秋冬のサイクルが綺麗に揃いました！'],
  },
  // 19
  {
    diff: 'easy', cat: 'lock',
    t: ['Đôi đũa thần kỳ', 'How Many Chopsticks?', '¿Cuántos palillos?', 'お箸は全部で何本？'],
    p: ['Trên bàn có 5 đôi đũa. Hỏi có tổng cộng bao nhiêu chiếc đũa?', 'There are 5 pairs of chopsticks on the table. How many single chopsticks in total?', 'Hay 5 pares de palillos en la mesa. ¿Cuántos palillos sueltos hay?', 'テーブルの上に箸が5膳（5ペア）あります。箸は全部で何本ある？'],
    m: { type: 'lock_dial', clueDisplay: '5 pairs × 2 = ?', correctCode: '10', maxLength: 2 },
    h1: ['1 đôi gồm 2 chiếc đũa.', 'Each pair has 2 chopsticks.', 'Cada par tiene 2 palillos.', '1ペア＝2本だよ。'],
    h2: ['5 × 2 = ?', '5 × 2 = ?', '5 × 2 = ?', '5 × 2 ＝ ?'],
    h3: ['Đáp án là 10.', 'Answer: 10.', 'Respuesta: 10.', '答えは「10」本！'],
    e: ['5 đôi đũa = 10 chiếc đũa!', '5 pairs = 10 individual chopsticks!', '¡5 pares son 10 palillos!', '5ペア×2本＝合計10本のお箸です！'],
  },
  // 20
  {
    diff: 'easy', cat: 'riddle',
    t: ['Ngọt ngào nhưng không ăn', 'Sweet Without Sugar', 'Dulce sin azúcar', '砂糖なしでも甘いもの'],
    p: ['Con gì càng nhỏ càng ngọt, không chân không tay nhưng đi khắp thế gian qua lời nói?', 'What has keys that open no locks, space without a room, and lets you enter yet stay inside?', '¿Qué tiene teclas pero no abre puertas, espacio sin habitación y te deja entrar sin moverte?', '鍵（キー）があるのにドアを開けられず、スペースがあるのに部屋がなく、エンターがあっても中に入れないものは？'],
    m: {
      type: 'lateral_choice', illustration: 'book',
      options: [
        { vi: 'Chiếc đàn guitar', en: 'A guitar', es: 'Una guitarra', ja: 'ギター' },
        { vi: 'Bàn phím máy tính', en: 'A keyboard', es: 'Un teclado', ja: 'キーボード' },
        { vi: 'Tổ ong rừng', en: 'A beehive', es: 'Una colmena', ja: 'ハチの巣' },
        { vi: 'Chiếc tủ sắt', en: 'An iron safe', es: 'Una caja fuerte', ja: '金庫' },
      ],
      correctIndex: 1,
    },
    h1: ['Bạn đang nhìn vào thiết bị gắn liền với nó ngay lúc này!', 'You use one to type messages!', '¡Lo usas para escribir!', '文字を打つときに使うアレだよ！'],
    h2: ['Nó có phím Space (khoảng trống), Enter (đi vào) và các phím ký tự (Keys).', 'It has Space, Enter, and letter Keys!', 'Tiene barra espaciadora, Enter y teclas.', 'Spaceキー、Enterキー、文字キーがあるよね！'],
    h3: ['Chọn Bàn phím máy tính.', 'Pick A keyboard.', 'Elige Un teclado.', '「キーボード」を選ぼう！'],
    e: ['Bàn phím có Space, Enter và hàng chục "Keys" nhưng chẳng mở được ổ khóa nào!', 'A keyboard has Keys, Space, and Enter!', '¡El teclado tiene teclas, espacio y Enter!', 'キーボードにはキー、スペース、エンターがありますがドアは開きません！'],
  },
  // 21
  {
    diff: 'easy', cat: 'logic',
    t: ['Ma trận 1 chạm góc trên', 'One-Tap Northwest', 'Un toque noroeste', '左上ワンタップ'],
    p: ['Chạm đúng 1 ô trên lưới Lights-Out để bật sáng toàn bộ 9 ô!', 'Tap just ONE tile on this Lights-Out grid to turn ALL 9 tiles ON!', '¡Toca solo UNA casilla para encender las 9 luces!', '1回だけタップして9マス全部を点灯させよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'lights_out',
      gridSize: 3,
      // Target all true, XOR tapping index 0 (0,1,3) => [false, false, true, false, true, true, true, true, true]
      initialGrid: [false, false, true, false, true, true, true, true, true],
      allOnRequired: true,
    },
    h1: ['Chạm 1 ô sẽ đảo trạng thái ô đó và 4 ô kề cạnh (chữ thập).', 'Tapping a tile flips itself and its orthogonal neighbors.', 'Al tocar una casilla cambias sus vecinas ortogonales.', 'タップしたマスと上下左右が反転するよ。'],
    h2: ['Để ý góc trên bên trái: ô (1,1), (1,2) và (2,1) đều đang tắt!', 'Look at the top-left corner: 3 adjacent tiles are OFF!', 'Mira la esquina superior izquierda: ¡hay 3 apagadas!', '左上の角とその隣2マスだけが消えているよ！'],
    h3: ['Chạm đúng ô góc trên bên trái (hàng 1, cột 1).', 'Tap the top-left corner tile.', 'Toca la esquina superior izquierda.', '一番左上のマスをタップしよう！'],
    e: ['Chạm góc trên trái làm sáng cùng lúc chính nó và 2 ô kề cạnh!', 'One corner tap lit all three missing tiles at once!', '¡Un solo toque iluminó todo el tablero!', '左上の角を1回タップするだけで全マスが点灯しました！'],
  },
  // 22
  {
    diff: 'easy', cat: 'drag',
    t: ['Chế biến bắp rang bơ', 'Sweet Apple Pie? No, Caramel!', 'Magia con fuego', '熱々の焼きりんごを作ろう'],
    p: ['Bạn đang thèm món táo nướng thơm lừng! Hãy nướng quả táo đỏ ngay trên sân!', 'You crave warm baked apples! Roast the apple using heat!', '¡Quieres manzana asada! Caliéntala con fuego.', '甘い焼きりんごが食べたい！炎でりんごを焼こう！'],
    m: {
      type: 'drag_combine', mode: 'combine_pair', backdrop: 'room',
      items: [
        { id: 'apple', shape: 'apple', x: 26, y: 55, scale: 1.2 },
        { id: 'fire', shape: 'fire', x: 74, y: 55, scale: 1.2 },
        { id: 'ice', shape: 'ice', x: 50, y: 28, scale: 0.95 },
      ],
      pairIds: ['apple', 'fire'],
    },
    h1: ['Băng sẽ làm táo đông cứng mất.', 'Ice will freeze the apple instead.', 'El hielo congelaría la manzana.', '氷だと凍ってしまうよ。'],
    h2: ['Kéo quả táo lại gần ngọn lửa (hoặc kéo lửa sang táo).', 'Bring the apple and fire together.', 'Junta la manzana con el fuego.', 'りんごと炎をくっつけよう。'],
    h3: ['Thả táo lên ngọn lửa.', 'Drop the apple onto the fire.', 'Suelta la manzana sobre el fuego.', 'りんごを炎の上に重ねよう！'],
    e: ['Món táo nướng thơm lừng đã sẵn sàng!', 'Warm baked apple served fresh!', '¡Manzana asada deliciosa!', '香ばしい焼きりんごが完成しました！'],
  },
  // 23
  {
    diff: 'easy', cat: 'trick',
    t: ['Con đường chẳng có xe', 'A Street Without Cars', 'Una calle sin coches', '車が一台も通らない道'],
    p: ['Cây cối có lá, con đường có tên... vậy cái gì có răng rất nhiều nhưng không bao giờ cắn được ai?', 'What has many teeth, yet can never bite anyone?', '¿Qué tiene muchos dientes, pero nunca puede morder?', 'たくさんの歯があるのに、絶対に噛むことができないものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'hat',
      options: [
        { vi: 'Con cá mập', en: 'A shark', es: 'Un tiburón', ja: 'サメ' },
        { vi: 'Chiếc lược chải đầu', en: 'A comb', es: 'Un peine', ja: 'くし（ヘアコーム）' },
        { vi: 'Con sư tử', en: 'A lion', es: 'Un león', ja: 'ライオン' },
        { vi: 'Cái kìm sắt', en: 'Iron pliers', es: 'Alicates', ja: 'ペンチ' },
      ],
      correctIndex: 1,
    },
    h1: ['Món đồ cá nhân đặt cạnh gương mỗi sáng.', 'Found beside your mirror every morning.', 'Está junto al espejo cada mañana.', '毎朝鏡の前で使うものだよ。'],
    h2: ['Bạn dùng nó để chải tóc gọn gàng.', 'You run it through your hair.', 'Lo pasas por el pelo.', '髪をとかすのに使う道具！'],
    h3: ['Chọn Chiếc lược chải đầu.', 'Pick A comb.', 'Elige Un peine.', '「くし」を選ぼう！'],
    e: ['Chiếc lược có hàng chục "răng lược" mà chẳng bao giờ cắn ai!', 'A comb has dozens of teeth and only untangles hair!', '¡El peine tiene muchos dientes para peinar!', 'くしにはたくさんの歯がありますが、髪を整えるだけで噛みません！'],
  },
  // 24
  {
    diff: 'easy', cat: 'visual',
    t: ['Đếm hình tam giác lồng', 'Nested Triangles Check', 'Triángulos anidados', '重なり合う三角形'],
    p: ['Đếm thật kỹ xem có bao nhiêu hình tam giác trong sơ đồ này!', 'Count carefully: how many total triangles appear in this diagram?', 'Cuenta con cuidado: ¿cuántos triángulos hay en total?', 'この図の中に三角形は全部でいくつ隠れている？'],
    m: { type: 'visual_count', visualKind: 'nested_triangles', variant: 1, correctAnswer: 5, min: 1, max: 20 },
    h1: ['Đừng quên tam giác lớn bao ngoài cùng!', 'Do not forget the large outer triangle!', '¡No olvides el triángulo grande exterior!', '一番外側の大きな三角形も1つと数えるよ！'],
    h2: ['Bên trong có 4 tam giác nhỏ ghép lại.', 'Inside are 4 small triangles.', 'Dentro hay 4 triángulos pequeños.', '中には小さな三角形が4つ！'],
    h3: ['4 + 1 = 5 tam giác.', '4 + 1 = 5 triangles.', '4 + 1 = 5 triángulos.', '4 ＋ 1 ＝ 5個！'],
    e: ['4 tam giác nhỏ + 1 tam giác lớn = 5 tam giác!', '4 small + 1 large = 5 triangles!', '¡4 pequeños + 1 grande = 5!', '小さい4つ＋大きい1つ＝合計5個です！'],
  },
  // 25
  {
    diff: 'easy', cat: 'trick',
    t: ['Chạm nút màu khác biệt', 'Spot the Odd Switch', 'El diferente', '仲間はずれを探せ'],
    p: ['Có 4 viên kẹo táo trên màn hình — hãy chạm vào viên kẹo KHÁC BIỆT nhất!', 'Four apples sit on screen — tap the ONE that is truly different!', 'Hay cuatro objetos — ¡toca el que es diferente!', '4つのりんごがあるよ。1つだけ違うものを見つけてタップしよう！'],
    m: {
      type: 'scene_tap', backdrop: 'day',
      objects: [
        { id: 'a1', shape: 'apple', x: 22, y: 52, color: '#EF4444', decoy: true },
        { id: 'a2', shape: 'apple', x: 42, y: 52, color: '#EF4444', decoy: true },
        { id: 'a3', shape: 'pear', x: 62, y: 52, color: '#22C55E', isTarget: true },
        { id: 'a4', shape: 'apple', x: 82, y: 52, color: '#EF4444', decoy: true },
      ],
    },
    h1: ['Nhìn kỹ hình dáng và màu sắc của cả 4 trái cây.', 'Check shape and color closely.', 'Observa la forma y el color.', '色と形をよく見比べてみよう。'],
    h2: ['Ba quả kia là táo đỏ, còn một quả là lê xanh!', 'Three are red apples, one is a green pear!', 'Tres son manzanas rojas y una es una pera verde.', '3つは赤いりんご、1つだけ緑の洋梨だよ！'],
    h3: ['Chạm vào quả lê xanh ở vị trí thứ 3.', 'Tap the green pear.', 'Toca la pera verde.', '緑の洋梨をタップしよう！'],
    e: ['Quả lê xanh nổi bật giữa ba quả táo đỏ!', 'The green pear stood right out!', '¡Era una pera verde!', '洋梨だけ種類も色も違いました！'],
  },
  // 26
  {
    diff: 'easy', cat: 'riddle',
    t: ['Bóng dáng trung thành', 'Loyal Daytime Follower', 'Compañero fiel', '決して離れない相棒'],
    p: ['Cái gì chỉ xuất hiện khi có ánh sáng, đi theo bạn từng bước chân nhưng hoàn toàn biến mất trong đêm tối mịt mù?', 'What follows you everywhere in sunlight yet vanishes completely in pitch darkness?', '¿Qué te sigue a todos lados bajo la luz pero desaparece en la oscuridad total?', '光があるとどこまでもついてくるのに、真っ暗闇になると完全に消えてしまうものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'sun',
      options: [
        { vi: 'Cái bóng của bạn', en: 'Your shadow', es: 'Tu sombra', ja: 'あなたの影' },
        { vi: 'Chú chó cưng', en: 'Your pet dog', es: 'Tu perro', ja: '飼い犬' },
        { vi: 'Đôi giày thể thao', en: 'Your sneakers', es: 'Tus zapatos', ja: 'スニーカー' },
        { vi: 'Chiếc đồng hồ đeo tay', en: 'Your wristwatch', es: 'Tu reloj', ja: '腕時計' },
      ],
      correctIndex: 0,
    },
    h1: ['Nó in hình xuống mặt đất khi trời nắng.', 'It stretches across the ground on sunny days.', 'Se proyecta en el suelo cuando hay sol.', '晴れた日に地面に伸びるものだよ。'],
    h2: ['Không có nguồn sáng thì nó không tồn tại.', 'Without light, it cannot exist.', 'Sin luz no existe.', '光がなければ現れないよ。'],
    h3: ['Chọn Cái bóng của bạn.', 'Pick Your shadow.', 'Elige Tu sombra.', '「あなたの影」を選ぼう！'],
    e: ['Cái bóng luôn đồng hành dưới ánh sáng và biến mất khi đèn tắt!', 'Your shadow appears only where light shines!', '¡Tu sombra solo vive con la luz!', '影は光があるときだけあなたの横に寄り添います！'],
  },
  // 27
  {
    diff: 'easy', cat: 'lock',
    t: ['Chuyến xe bus kỳ lạ', 'Empty Bus Count', 'El autobús vacío', '空っぽのバス？'],
    p: ['Một chiếc xe bus đón 8 khách ở bến 1, xuống 3 khách ở bến 2, đón thêm 4 khách ở bến 3. Hỏi tài xế bao nhiêu tuổi?', 'A bus picks up 8 riders at Stop 1, drops 3 at Stop 2, and adds 4 at Stop 3. How many passengers are on the bus now?', 'Un autobús sube 8 personas en la parada 1, baja 3 en la 2 y sube 4 en la 3. ¿Cuántos pasajeros hay ahora?', 'バス停1で8人乗り、バス停2で3人降り、バス停3で4人乗りました。今乗っている乗客は何人？'],
    m: { type: 'lock_dial', clueDisplay: '+8 − 3 + 4 = ?', correctCode: '9', maxLength: 2 },
    h1: ['Lần này là câu hỏi tính số hành khách bình thường thôi nhé — đừng tự làm khó mình!', 'No age trick here — just count the riders!', '¡Sin trampa de edad! Cuenta los pasajeros.', '今回は年齢トリックじゃないよ！素直に乗客数を計算しよう！'],
    h2: ['8 - 3 + 4 = ?', '8 - 3 + 4 = ?', '8 - 3 + 4 = ?', '8 − 3 ＋ 4 ＝ ?'],
    h3: ['8 - 3 = 5, 5 + 4 = 9.', '8 - 3 = 5, 5 + 4 = 9.', '8 - 3 = 5, 5 + 4 = 9.', '答えは「9」人！'],
    e: ['Đôi khi đề bài lại thử xem bạn có bị "ám ảnh" bởi câu đố mẹo trước đó không — đáp án chính xác là 9!', 'Sometimes the trick is expecting a trick when simple math is right: 9!', '¡A veces el truco es esperar un truco! Son 9.', '「また引っ掛けだろう」という先入観の裏をかきました。素直に計算して9人です！'],
  },
  // 28
  {
    diff: 'easy', cat: 'action',
    t: ['Giữ nhiệt ngọn nến', 'Warm Flame Charge', 'Carga de llama', '炎のパワーをチャージ'],
    p: ['Nhấn và giữ nút ngọn lửa suốt 3 giây để thắp sáng căn phòng tối!', 'Press and HOLD the flame for 3 seconds to warm up the room!', '¡Mantén pulsada la llama 3 segundos para iluminar la sala!', '炎を3秒間長押しして部屋を暖めよう！'],
    m: {
      type: 'action_meter', mode: 'hold', targetShape: 'candle', resultShape: 'sun', requiredValue: 3,
      meterLabel: { vi: 'Nhiệt độ phòng', en: 'Room Warmth', es: 'Calor', ja: '部屋の暖かさ' },
    },
    h1: ['Đừng bấm nhả liên tục, hãy giữ ngón tay/chuột xuống.', 'Do not tap rapidly — hold down continuously.', 'No sueltes el botón; mantenlo pulsado.', '連打ではなく押しっぱなしにしよう！'],
    h2: ['Giữ yên khoảng 3 giây đến khi thanh đầy 100%.', 'Hold steady for 3 seconds until 100%.', 'Mantén 3 segundos hasta el 100%.', '3秒間キープして100%にしよう。'],
    h3: ['Giữ nút nến trong 3 giây.', 'Hold the candle button for 3s.', 'Mantén la vela 3s.', 'ロウソクを3秒長押し！'],
    e: ['Ánh sáng ấm áp lan tỏa khắp căn phòng!', 'Warmth radiates across the entire room!', '¡Luz y calor al 100%!', '部屋中がポカポカと明るくなりました！'],
  },
  // 29
  {
    diff: 'easy', cat: 'riddle',
    t: ['Thứ cắt ra vẫn dài thêm', 'Longer When Cut?', 'Más largo al cortar', '切ると逆に長くなる？'],
    p: ['Cái gì càng cắt bớt đi thì lại càng dài ra?', 'What gets longer the more you cut away from it?', '¿Qué se hace más largo cuanto más le quitas?', '削れば削るほど長くなっていく不思議なものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'hourglass',
      options: [
        { vi: 'Cái hố / cái rãnh', en: 'A ditch / trench', es: 'Una zanja / agujero', ja: '地面の溝・穴' },
        { vi: 'Sợi dây thừng', en: 'A rope', es: 'Una cuerda', ja: 'ロープ' },
        { vi: 'Cây bút chì', en: 'A pencil', es: 'Un lápiz', ja: '鉛筆' },
        { vi: 'Mái tóc', en: 'Hair', es: 'El cabello', ja: '髪の毛' },
      ],
      correctIndex: 0,
    },
    h1: ['Thử nghĩ đến việc đào đất làm mương nước.', 'Think of digging into the ground.', 'Piensa en cavar la tierra.', '地面を掘る作業を想像してみよう。'],
    h2: ['Càng đào cắt bỏ đất đá, con rãnh càng dài và sâu thêm!', 'The more dirt you cut away, the longer the trench grows!', '¡Cuanta más tierra quitas, más larga es la zanja!', '土を取り除くほど溝はどんどん伸びていくよね！'],
    h3: ['Chọn Cái hố / cái rãnh.', 'Pick A ditch / trench.', 'Elige Una zanja / agujero.', '「地面の溝・穴」を選ぼう！'],
    e: ['Càng đào bớt đất thì cái hố hoặc con rãnh càng lớn và dài ra!', 'Removing earth makes a ditch longer and deeper!', '¡Quitar tierra alarga la zanja!', '土を掘り出すほど穴や溝は長く大きくなります！'],
  },
  // 30
  {
    diff: 'easy', cat: 'trick',
    t: ['Chữ cái đầu tiên', 'First in Eternity', 'Primero en el espacio', '最初に来るもの'],
    p: ['Cái gì xuất hiện ở đầu "Thế giới", cuối "Bầu trời", và có tận 2 lần trong "Tương lai"?', 'What appears once in a "minute", twice in a "moment", and never in a "thousand years"?', '¿Qué aparece una vez en "minuto", dos en "momento" y ninguna en "siglo"?', '「ひまわり」に1回、「もも」に2回あるのに、「りんご」には1回もないものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'book',
      options: [
        { vi: 'Chữ cái M (en: M / vi: Ơ-I / ja: も)', en: 'The letter M', es: 'La letra M', ja: '「も」の文字' },
        { vi: 'Kim đồng hồ', en: 'A clock hand', es: 'Una aguja', ja: '時計の針' },
        { vi: 'Tia chớp', en: 'Lightning', es: 'Un relámpago', ja: '稲妻' },
        { vi: 'Khoảng thời gian', en: 'A second', es: 'Un segundo', ja: '1秒' },
      ],
      correctIndex: 0,
    },
    h1: ['Đừng nghĩ về thời gian — hãy nhìn mặt chữ của các từ!', 'Forget time — look at the spelling of each word!', '¡Mira las letras de las palabras!', '時間の意味ではなく「文字そのもの」を見てみよう！'],
    h2: ['"Minute" có 1 chữ M, "moment" có 2 chữ M, còn "thousand years" không có chữ M nào (hay trong tiếng Nhật là も).', 'Minute has 1 M, moMent has 2 Ms, thousand years has 0 Ms.', 'Minuto tiene una M, moMento tiene dos M.', '文字が何回使われているか数えてみて！'],
    h3: ['Chọn đáp án đầu tiên về mặt chữ!', 'Pick The letter M!', 'Elige La letra M!', '最初の選択肢を選ぼう！'],
    e: ['Đó là câu đố chơi chữ kinh điển về chính tả ký tự!', 'A classic letter-spelling riddle across languages!', '¡Un clásico juego de letras!', '言葉の意味ではなく文字を数える定番の文字トリックです！'],
  },
  // 31
  {
    diff: 'easy', cat: 'drag',
    t: ['Bảo vệ cây non', 'Shield the Little Flower', 'Protege la flor', '小さな花を守ろう'],
    p: ['Trời sắp đổ mưa đá rồi! Hãy che chở cho bông hoa mỏng manh bên dưới ngay!', 'Hailstorm incoming! Shield the delicate flower right away!', '¡Se acerca una tormenta! Protege la flor ahora.', '激しい雨が降りそう！小さな花を守ってあげよう！'],
    m: {
      type: 'drag_combine', mode: 'drop_on_target', backdrop: 'park',
      items: [
        { id: 'flower', shape: 'flower', x: 52, y: 70, scale: 1.2 },
        { id: 'umbrella', shape: 'umbrella', x: 22, y: 34, scale: 1.2 },
        { id: 'rock', shape: 'rock', x: 80, y: 70, scale: 1.0 },
      ],
      sourceId: 'umbrella', targetId: 'flower',
    },
    h1: ['Tảng đá sẽ đè bẹp bông hoa mất!', 'The heavy rock would crush the flower!', 'La roca aplastaría la flor.', '岩を乗せたら花が潰れちゃうよ！'],
    h2: ['Dùng chiếc ô đang ở góc trên bên trái.', 'Use the umbrella on the top left.', 'Usa el paraguas de arriba.', '左上の傘を使おう。'],
    h3: ['Kéo chiếc ô che lên bông hoa.', 'Drag the umbrella onto the flower.', 'Arrastra el paraguas sobre la flor.', '傘を花の上へドラッグ！'],
    e: ['Chiếc ô che chắn hoàn hảo cho bông hoa nhỏ!', 'The umbrella sheltered the little flower safely!', '¡La flor quedó protegida bajo el paraguas!', '傘でしっかり花を守ることができました！'],
  },
  // 32
  {
    diff: 'easy', cat: 'trick',
    t: ['Thứ luôn ở trước mắt', 'Always Ahead of You', 'Siempre frente a ti', 'いつも目の前にあるもの'],
    p: ['Thứ gì luôn ở ngay phía trước bạn, thuộc về ngày mai, nhưng bạn chẳng bao giờ chạm tay hay nhìn thấy được?', 'What is always in front of you, yet can never be touched or seen?', '¿Qué está siempre frente a ti pero jamás puedes verlo ni tocarlo?', 'いつもあなたの目の前にあるのに、絶対に見ることも触ることもできないものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'hourglass',
      options: [
        { vi: 'Tương lai', en: 'The future', es: 'El futuro', ja: '未来' },
        { vi: 'Chiếc kính cận', en: 'Eyeglasses', es: 'Las gafas', ja: 'メガネ' },
        { vi: 'Mũi của bạn', en: 'Your nose', es: 'Tu nariz', ja: '自分の鼻' },
        { vi: 'Màn hình điện thoại', en: 'A phone screen', es: 'Pantalla del móvil', ja: 'スマホ画面' },
      ],
      correctIndex: 0,
    },
    h1: ['Nghĩ về dòng chảy thời gian phía trước!', 'Think along the timeline ahead of you!', 'Piensa en la línea del tiempo.', 'これからやってくる「時間」について考えよう！'],
    h2: ['Ngày mai chưa tới — ta luôn hướng về phía trước nhưng không thể chạm vào.', 'Tomorrow is always ahead of you, invisible until it arrives!', 'Siempre va por delante pero nunca se toca.', 'まだ来ていない時間帯のこと！'],
    h3: ['Chọn Tương lai.', 'Pick The future.', 'Elige El futuro.', '「未来」を選ぼう！'],
    e: ['Tương lai luôn ở phía trước nhưng chẳng ai có thể nhìn thấy hay sờ vào được!', 'The future is always ahead of you, yet invisible and untouchable!', '¡El futuro siempre está delante de ti sin poder verse!', '未来は常に目の前にありますが、見たり触ったりすることはできません！'],
  },
  // 33
  {
    diff: 'easy', cat: 'trick',
    t: ['Kho báu chìm trong bóng tối', 'Dark Attic Treasure', 'Tesoro en la oscuridad', '暗闇の屋根裏部屋'],
    p: ['Căn phòng tối om chẳng thấy gì cả! Dùng đèn pin soi sáng để tìm viên kim cương!', 'The room is pitch black! Sweep the flashlight to find the diamond!', '¡Está muy oscuro! Usa la linterna para encontrar el diamante.', '部屋が真っ暗！懐中電灯で照らしてダイヤモンドを見つけよう！'],
    m: {
      type: 'scene_tap', darkRoom: true, backdrop: 'night',
      objects: [
        { id: 'flash', shape: 'flashlight', x: 25, y: 28, scale: 1.15, draggable: true },
        { id: 'bomb', shape: 'bomb', x: 32, y: 72, scale: 1.1, decoy: true },
        { id: 'gem', shape: 'diamond', x: 76, y: 68, scale: 1.15, isTarget: true },
      ],
    },
    h1: ['Giữ và kéo chiếc đèn pin di chuyển khắp màn hình.', 'Drag the flashlight across the dark stage.', 'Arrastra la linterna por la pantalla.', '懐中電灯をドラッグして部屋中を照らそう。'],
    h2: ['Soi xuống góc dưới bên phải.', 'Aim the beam toward the bottom-right corner.', 'Ilumina la esquina inferior derecha.', '右下の隅を照らしてみよう！'],
    h3: ['Chạm vào viên kim cương khi ánh đèn chiếu trúng nó.', 'Tap the diamond once lit up.', 'Toca el diamante iluminado.', '光に照らされたダイヤをタップ！'],
    e: ['Ánh đèn pin đã giúp bạn tránh quả bom và tìm ra kim cương!', 'Your flashlight beam spotted the diamond safely!', '¡Encontraste el diamante evitando la bomba!', '懐中電灯で爆弾を避けてダイヤモンドを発見しました！'],
  },
  // 34
  {
    diff: 'easy', cat: 'riddle',
    t: ['Lỗ hổng chứa đầy nước', 'Full of Holes Yet Holds Water', 'Lleno de agujeros', '穴だらけなのに水を溜める'],
    p: ['Vật gì trên người đầy lỗ thủng nhưng lại giữ nước cực tốt?', 'What is full of holes yet can still hold water?', '¿Qué está lleno de agujeros y aun así retiene agua?', '穴だらけなのに、水をしっかり溜め込むことができるものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'water',
      options: [
        { vi: 'Miếng bọt biển', en: 'A sponge', es: 'Una esponja', ja: 'スポンジ' },
        { vi: 'Cái rổ nhựa', en: 'A plastic basket', es: 'Una cesta', ja: 'プラスチックのかご' },
        { vi: 'Lưới đánh cá', en: 'A fishing net', es: 'Una red', ja: '魚網' },
        { vi: 'Ống hút', en: 'A drinking straw', es: 'Una pajita', ja: 'ストロー' },
      ],
      correctIndex: 0,
    },
    h1: ['Bạn thường dùng nó để rửa bát hoặc lau bàn.', 'Used for washing dishes.', 'Se usa para lavar los platos.', '食器洗いのときなどに使うよ。'],
    h2: ['Nó hút nước vào hàng ngàn lỗ xốp nhỏ bên trong.', 'Thousands of tiny pores soak up water.', 'Sus poros absorben el agua.', '無数の小さな穴が水を吸い込むよ！'],
    h3: ['Chọn Miếng bọt biển.', 'Pick A sponge.', 'Elige Una esponja.', '「スポンジ」を選ぼう！'],
    e: ['Miếng bọt biển chứa đầy lỗ xốp nhỏ giúp giữ nước gấp nhiều lần trọng lượng!', 'A sponge is full of pores designed to soak up and hold water!', '¡La esponja absorbe agua en sus agujeros!', 'スポンジは穴だらけだからこそ水をたっぷり吸い込めます！'],
  },
  // 35
  {
    diff: 'easy', cat: 'logic',
    t: ['Ma trận 1 chạm góc dưới phải', 'Southeast Flick', 'Toque sureste', '右下ワンタップ'],
    p: ['Chạm đúng 1 ô duy nhất để cả 9 ô trên bảng đều sáng vàng!', 'Tap just ONE tile to light up all 9 tiles!', '¡Toca solo UNA casilla para iluminar las 9!', '1マスだけタップして全9マスを光らせよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'lights_out',
      gridSize: 3,
      // XOR tapping index 8 (5,7,8) => [true,true,true, true,true,false, true,false,false]
      initialGrid: [true, true, true, true, true, false, true, false, false],
      allOnRequired: true,
    },
    h1: ['Chỉ có 3 ô ở góc dưới bên phải đang tắt.', 'Only 3 tiles near the bottom-right corner are OFF.', 'Solo faltan 3 casillas abajo a la derecha.', '右下隅の3マスだけが消えているよ。'],
    h2: ['Khi chạm ô góc dưới phải, chính nó cùng 2 ô kề bên sẽ bật sáng.', 'Tapping the bottom-right tile flips all 3 at once.', 'Tocar la esquina inferior derecha enciende las 3.', '一番右下のマスを押せば3つ同時に反転するよ！'],
    h3: ['Chạm ô góc dưới bên phải (hàng 3, cột 3).', 'Tap the bottom-right corner tile.', 'Toca la esquina inferior derecha.', '一番右下のマスをタップ！'],
    e: ['Gọn gàng chỉ với đúng 1 cú chạm góc dưới phải!', 'Solved cleanly in a single tap!', '¡Resuelto con un solo toque!', '右下を1回タップするだけで全点灯しました！'],
  },
  // 36
  {
    diff: 'easy', cat: 'trick',
    t: ['Nút bấm đánh lạc hướng', 'Reverse Button Trap', 'Trampa de botones', 'ボタンの引っ掛け'],
    p: ['ĐỪNG chạm vào chữ "KHÔNG" màu xanh hay đỏ bên dưới — hãy chạm vào chữ ĐỪNG trên câu hỏi!', 'DO NOT tap the buttons below — tap the word NOT inside the question!', 'NO pulses los botones de abajo: ¡toca la palabra NO en la pregunta!', '下のボタンは押すな！問題文の「押すな」をタップしよう！'],
    m: {
      type: 'scene_tap',
      tapPromptWord: { vi: 'ĐỪNG', en: 'NOT', es: 'NO', ja: '押すな' },
      objects: [
        { id: 'b1', shape: 'button_red', x: 34, y: 56, scale: 1.3, decoy: true, label: { vi: 'BẤM TÔI', en: 'PRESS ME', es: 'PÚLSAME', ja: '押して' } },
        { id: 'b2', shape: 'button_green', x: 66, y: 56, scale: 1.3, decoy: true, label: { vi: 'KHÔNG', en: 'SKIP', es: 'SALTAR', ja: 'スキップ' } },
      ],
    },
    h1: ['Cả hai nút tròn ở dưới đều là bẫy!', 'Both round buttons below are traps!', '¡Los dos botones de abajo son trampas!', '下のボタンは2つとも罠だよ！'],
    h2: ['Hãy tìm đúng chữ cái in hoa ngay trong phần đề bài.', 'Tap the bold uppercase word inside the prompt text.', 'Toca la palabra en mayúsculas en el enunciado.', '問題文の文字を直接タップしてみて！'],
    h3: ['Chạm vào từ ĐỪNG trong câu hỏi.', 'Tap NOT in the prompt.', 'Toca NO en la pregunta.', '問題文の「押すな」をタップ！'],
    e: ['Bạn đã đọc kỹ hướng dẫn thay vì vội bấm nút!', 'Reading the prompt carefully always pays off!', '¡Leer bien siempre gana!', 'ボタンに釣られず問題文を見事に攻略しました！'],
  },
  // 37
  {
    diff: 'easy', cat: 'riddle',
    t: ['Kẻ trộm không dấu chân', 'Thief With No Footprints', 'Ladrón sin huellas', '足跡を残さない泥棒'],
    p: ['Thứ gì có thể đập vỡ một chiếc tàu lớn, nhưng chẳng bao giờ bị cảnh sát bắt giữ vì không có hình hài?', 'What can smash a mighty ship yet vanishes like air when you try to catch it in your hands?', '¿Qué puede hundir un gran barco pero no puedes atraparlo con las manos?', '巨大な船を沈める力があるのに、手で掴もうとしても掴めないものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'cloud',
      options: [
        { vi: 'Cơn bão tố (gió lớn)', en: 'A fierce storm wind', es: 'Un vendaval', ja: '猛烈な嵐（風）' },
        { vi: 'Con cá voi xanh', en: 'A blue whale', es: 'Una ballena azul', ja: 'シロナガスクジラ' },
        { vi: 'Tảng băng trôi', en: 'An iceberg', es: 'Un iceberg', ja: '氷山' },
        { vi: 'Mỏ neo sắt', en: 'An iron anchor', es: 'Un ancla', ja: '鉄のイカリ' },
      ],
      correctIndex: 0,
    },
    h1: ['Cả cá voi, tảng băng và mỏ neo đều sờ nắm được.', 'Whales, icebergs, and anchors are all solid objects.', 'Los otros tres son sólidos.', '他の3つはすべて固い物体だよね。'],
    h2: ['Thứ vô hình nhưng sức mạnh thiên nhiên lại cực lớn.', 'Invisible air moving at tremendous force.', 'Aire invisible con gran fuerza.', '目に見えないけれど凄まじいエネルギーを持つ自然現象！'],
    h3: ['Chọn Cơn bão tố (gió lớn).', 'Pick A fierce storm wind.', 'Elige Un vendaval.', '「猛烈な嵐（風）」を選ぼう！'],
    e: ['Gió bão vô hình nhưng có thể đánh chìm cả đoàn thuyền!', 'Storm winds are invisible yet powerful enough to capsize ships!', '¡El viento es invisible pero muy poderoso!', '風は目に見えず掴めませんが、大船を動かす力があります！'],
  },
  // 38
  {
    diff: 'easy', cat: 'lock',
    t: ['Cộng nhẩm dễ như ăn kẹo', 'Quick Ten-Second Sum', 'Suma rápida', '暗算トリック'],
    p: ['Tính nhẩm thật nhanh: Lấy 1000 cộng 40, cộng tiếp 1000, cộng 30, cộng 1000, cộng 20, cộng 1000, cộng 10. Tổng bằng bao nhiêu?', 'Add quickly in your head: 1000 + 40 + 1000 + 30 + 1000 + 20 + 1000 + 10 = ?', 'Suma mentalmente: 1000 + 40 + 1000 + 30 + 1000 + 20 + 1000 + 10 = ?', '暗算してみよう：1000＋40＋1000＋30＋1000＋20＋1000＋10 ＝ ？'],
    m: { type: 'lock_dial', clueDisplay: '4000 + (40+30+20+10) = ?', correctCode: '4100', maxLength: 4 },
    h1: ['Đừng trả lời vội là 5000 nhé — đó là bẫy kinh điển!', 'Do NOT answer 5000 — that is the classic brain trap!', '¡Cuidado! NO es 5000.', '5000と答えてしまいがちな超有名な引っかけ問題だよ！'],
    h2: ['40 + 30 + 20 + 10 = 100 (chứ không phải 1000!).', '40 + 30 + 20 + 10 = 100 (not 1000!).', '40 + 30 + 20 + 10 = 100.', '40＋30＋20＋10＝100（1000ではない！）。'],
    h3: ['4000 + 100 = 4100.', '4000 + 100 = 4100.', '4000 + 100 = 4100.', '答えは「4100」！'],
    e: ['Hơn 80% người tính nhẩm đọc 4090 rồi nhảy vọt thành 5000, nhưng đáp án đúng là 4100!', '4000 + 100 = 4100, not 5000!', '¡4000 + 100 = 4100!', '4090に10を足してつい5000と言ってしまいますが、正解は4100です！'],
  },
  // 39
  {
    diff: 'easy', cat: 'drag',
    t: ['Cân đĩa 14 kg', 'Balance 14 kg', 'Equilibra 14 kg', '14kgで釣り合わせよう'],
    p: ['Đặt các vật phẩm lên đĩa phải để cân bằng chính xác 14 kg!', 'Select items for the right pan to balance exactly 14 kg!', '¡Elige objetos para equilibrar exactamente 14 kg!', '右のお皿に荷物を乗せて、ちょうど14kgで釣り合わせよう！'],
    m: {
      type: 'drag_combine', mode: 'balance_scale', targetBalance: 14,
      items: [
        { id: 'w1', shape: 'rock', x: 0, y: 0, weight: 8, label: '8kg' },
        { id: 'w2', shape: 'book', x: 0, y: 0, weight: 5, label: '5kg' },
        { id: 'w3', shape: 'cheese', x: 0, y: 0, weight: 6, label: '6kg' },
        { id: 'w4', shape: 'apple', x: 0, y: 0, weight: 3, label: '3kg' },
      ],
    },
    h1: ['Thử cộng 2 món có tổng bằng 14.', 'Find two weights that sum to 14.', 'Busca dos pesos que sumen 14.', '合計が14になる2つの組み合わせを探そう。'],
    h2: ['8 + 6 = 14!', '8 + 6 = 14!', '8 + 6 = 14!', '8kg ＋ 6kg ＝ 14kg！'],
    h3: ['Chọn 8kg và 6kg rồi bấm Kiểm tra cân.', 'Select 8kg and 6kg, then press Check Scale.', 'Elige 8kg y 6kg y comprueba.', '8kgと6kgを選んで判定しよう！'],
    e: ['8kg + 6kg = 14kg cân bằng tuyệt đối!', '8kg + 6kg = 14kg perfectly balanced!', '¡8 + 6 = 14 kg exactos!', '8kg＋6kg＝14kgでピタリと釣り合いました！'],
  },
  // 40
  {
    diff: 'easy', cat: 'riddle',
    t: ['Câu hỏi luôn trả lời Có', 'Always Answered Yes?', 'Siempre dice que sí', '「はい」としか答えられない質問'],
    p: ['Câu hỏi nào mà không một người nào đang tỉnh táo có thể trả lời một cách trung thực là "Không"?', 'What question can you never honestly answer "No" to while awake?', '¿A qué pregunta nunca puedes responder honestamente "No"?', 'どんなに正直な人でも「いいえ」とは絶対に答えられない質問は何？'],
    m: {
      type: 'lateral_choice', illustration: 'moon',
      options: [
        { vi: 'Bạn có đang ngủ không?', en: 'Are you asleep?', es: '¿Estás dormido?', ja: 'あなたは今寝ていますか？' },
        { vi: 'Bạn thích ăn kem không?', en: 'Do you like ice cream?', es: '¿Te gusta el helado?', ja: 'アイスは好きですか？' },
        { vi: 'Hôm nay trời mưa không?', en: 'Is it raining today?', es: '¿Llueve hoy?', ja: '今日は雨ですか？' },
        { vi: 'Bạn biết bơi không?', en: 'Can you swim?', es: '¿Sabes nadar?', ja: '泳げますか？' },
      ],
      correctIndex: 0,
    },
    h1: ['Khi bạn trả lời được câu hỏi, tức là bạn đang tỉnh hay đang ngủ?', 'If you hear and answer, are you awake or asleep?', 'Si puedes responder, ¿estás despierto?', '質問に答えられる時点で、起きていることになるよね？'],
    h2: ['Nếu hỏi "Bạn đang ngủ à?" thì... ơ khoan, đọc ngược lại: câu hỏi nào KHÔNG BAO GIỜ trả lời trung thực là "CÓ" chứ!', 'Wait — if you say "Yes" to "Are you asleep?", you are awake! Or wait: if someone asks "Are you awake?", you can never honestly say "No"!', 'Si te preguntan "¿Estás despierto?" nunca puedes decir honestamente "No".', '「起きていますか？」に対して正直に「いいえ」は言えないよね！'],
    h3: ['Chọn phương án về giấc ngủ (giải thích chi tiết bên dưới!).', 'Pick the sleep question!', 'Elige la pregunta sobre dormir.', '眠りに関する選択肢を選ぼう！'],
    e: ['Cả hai chiều đều thú vị: Nếu đang tỉnh, bạn không thể nói "Có" khi hỏi "Bạn đang ngủ à?" — và không thể nói "Không" khi hỏi "Bạn còn sống/đang nghe tôi nói không?"!', 'You can never honestly say "Yes" to "Are you asleep?" while awake — classic sleep paradox!', '¡La paradoja clásica de estar despierto o dormido!', '眠りと覚醒のパラドックス！返事をした時点で起きている証拠になります！'],
  },
  // 41
  {
    diff: 'easy', cat: 'trick',
    t: ['Khám phá hành tinh kẹo', 'Sweetest Planet?', 'El planeta más dulce', '甘いお菓子の惑星'],
    p: ['Chú phi hành gia nhí muốn tìm thứ gì đó CÓ THỂ ĂN ĐƯỢC ngoài vũ trụ này!', 'The tiny astronaut wants something EDIBLE floating in space!', '¡El astronauta busca algo COMESTIBLE en el espacio!', '宇宙空間に浮かぶ「食べられるもの」を見つけてタップしよう！'],
    m: {
      type: 'scene_tap', backdrop: 'night',
      objects: [
        { id: 'r1', shape: 'rocket', x: 24, y: 38, scale: 1.1, decoy: true },
        { id: 'p1', shape: 'planet', x: 74, y: 38, scale: 1.2, decoy: true },
        { id: 'c1', shape: 'cheese', x: 52, y: 66, scale: 1.15, isTarget: true },
        { id: 's1', shape: 'star', x: 22, y: 74, scale: 1.0, decoy: true },
      ],
    },
    h1: ['Tên lửa, hành tinh và ngôi sao đều làm từ kim loại, đá hoặc khí nóng.', 'Rockets, planets, and stars are not food.', 'Cohetes y planetas no se comen.', 'ロケットや惑星、星は食べられないよ。'],
    h2: ['Mọi người hay đùa Mặt Trăng làm từ phô mai đấy!', 'Look at the wedge of yellow cheese!', '¡Mira el trozo de queso amarillo!', '黄色いチーズが浮いているよ！'],
    h3: ['Chạm vào miếng phô mai!', 'Tap the cheese!', '¡Toca el queso!', 'チーズをタップしよう！'],
    e: ['Miếng phô mai vàng ươm là món duy nhất ăn được!', 'Cheese is indeed edible!', '¡El queso sí se come!', '食べられそうなのはチーズだけでした！'],
  },
  // 42
  {
    diff: 'easy', cat: 'logic',
    t: ['Chuỗi tiến hóa của chú chim', 'Egg to Sky Order', 'Del huevo al cielo', '成長の順番に並べよう'],
    p: ['Sắp xếp theo trình tự thời gian hợp lý: từ lúc mới hình thành đến khi bay vào không gian!', 'Sort chronologically from beginning to cosmic flight!', '¡Ordena cronológicamente desde el inicio hasta el vuelo espacial!', '最初から宇宙へ飛び立つまで、時間の流れ順に並べよう！'],
    m: {
      type: 'order_sort',
      items: [
        { id: 'rocket', shape: 'rocket', label: { vi: 'Tên lửa vũ trụ', en: 'Space Rocket', es: 'Cohete espacial', ja: '宇宙ロケット' } },
        { id: 'chick', shape: 'chick', label: { vi: 'Gà con nở', en: 'Hatched Chick', es: 'Pollito', ja: 'ヒヨコ誕生' } },
        { id: 'egg', shape: 'egg', label: { vi: 'Quả trứng', en: 'Egg', es: 'Huevo', ja: 'タマゴ' } },
        { id: 'balloon', shape: 'balloon', label: { vi: 'Bóng bay lên trời', en: 'Flying Balloon', es: 'Globo volador', ja: '空飛ぶ風船' } },
      ],
      correctOrder: ['egg', 'chick', 'balloon', 'rocket'],
    },
    h1: ['Mọi sự sống bắt đầu từ quả trứng, rồi nở ra gà con.', 'Start with Egg, then Hatched Chick.', 'Empieza con Huevo, luego Pollito.', '最初は「タマゴ」から「ヒヨコ誕生」へ！'],
    h2: ['Bóng bay chỉ bay tầng thấp, còn tên lửa vươn ra ngoài vũ trụ.', 'Balloon flies in air; Rocket reaches deep space.', 'El globo vuela bajo; el cohete va al espacio.', '風船は空、ロケットは宇宙！'],
    h3: ['Thứ tự: Trứng → Gà con → Bóng bay → Tên lửa.', 'Order: Egg → Chick → Balloon → Rocket.', 'Orden: Huevo → Pollito → Globo → Cohete.', 'タマゴ → ヒヨコ → 風船 → ロケット！'],
    e: ['Từ quả trứng nhỏ bé đến tên lửa chinh phục bầu trời!', 'From a tiny egg to a spacefaring rocket!', '¡Del huevo al cohete espacial!', '小さなタマゴから大宇宙のロケットまで完璧な順序です！'],
  },
  // 43
  {
    diff: 'easy', cat: 'riddle',
    t: ['Bí mật ngọn đèn dầu', 'One Match First', 'Un solo fósforo', '最初に火をつけるのは？'],
    p: ['Bạn bước vào căn phòng lạnh lẽo chỉ có 1 que diêm duy nhất, trước mặt có 1 cây nến, 1 bếp củi và 1 đèn dầu. Bạn thắp cái nào ĐẦU TIÊN?', 'You enter a cold room with a single match, facing a candle, a wood stove, and an oil lamp. What do you light FIRST?', 'Entras a una sala fría con un solo fósforo, frente a una vela, una estufa y una lámpara de aceite. ¿Qué enciendes PRIMERO?', '寒い部屋にマッチが1本だけあります。目の前にはロウソク、薪ストーブ、石油ランプ。最初に火をつけるのはどれ？'],
    m: {
      type: 'lateral_choice', illustration: 'fire',
      options: [
        { vi: 'Que diêm', en: 'The match', es: 'El fósforo', ja: 'マッチ' },
        { vi: 'Cây nến', en: 'The candle', es: 'La vela', ja: 'ロウソク' },
        { vi: 'Bếp củi', en: 'The wood stove', es: 'La estufa', ja: '薪ストーブ' },
        { vi: 'Đèn dầu', en: 'The oil lamp', es: 'La lámpara de aceite', ja: '石油ランプ' },
      ],
      correctIndex: 0,
    },
    h1: ['Không có lửa sẵn trong tay thì sao đốt nến hay bếp được?', 'You need an open flame before lighting anything else!', 'Necesitas fuego antes de encender la vela o estufa.', '他のものに火をつける前にまず火種が必要だよね！'],
    h2: ['Bạn đang cầm trên tay vật gì?', 'What are you holding right now?', '¿Qué tienes en la mano?', '手に持っているのは何？'],
    h3: ['Phải quẹt que diêm đầu tiên!', 'You must light The match first!', '¡Primero enciendes El fósforo!', 'まず「マッチ」に火をつけないと！'],
    e: ['Dĩ nhiên phải quẹt que diêm đầu tiên mới thắp được những thứ khác!', 'Obviously you have to light the match before anything else!', '¡Sin encender el fósforo no puedes encender nada más!', '最初にマッチを擦って火をつけなければ、他のどれも点けられません！'],
  },
  // 44
  {
    diff: 'easy', cat: 'visual',
    t: ['Bật tắt chữ X hoàn chỉnh', 'Draw an X Pattern', 'Dibuja una X', 'Xの形を作ろう'],
    p: ['Chạm các ô trên ma trận 3×3 để tạo thành chữ X (hai đường chéo sáng, 4 ô cạnh tắt)!', 'Toggle the tiles to light up an X shape (both diagonals ON, edges OFF)!', '¡Toca las casillas para formar una X iluminada!', 'パネルをタップして光る「X」の文字を作ろう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'pattern_match',
      gridSize: 3,
      initialGrid: [true, false, false, false, false, false, false, false, true],
      targetGrid: [true, false, true, false, true, false, true, false, true],
    },
    h1: ['Chữ X gồm 5 ô: 4 góc và ô chính giữa.', 'An X uses the 4 corners plus the center tile.', 'Una X usa las 4 esquinas y el centro.', 'Xの形は4つの角と真ん中の合計5マス！'],
    h2: ['Hiện đã sáng 2 góc, bạn cần bật thêm 2 góc còn lại và ô giữa.', 'Two corners are already lit — turn on the center and the other two corners.', 'Faltan dos esquinas y el centro.', '残り2つの角と中央のマスを点けよう！'],
    h3: ['Chạm các ô (1,3), (2,2) và (3,1).', 'Tap top-right, center, and bottom-left.', 'Toca arriba-derecha, centro y abajo-izquierda.', '右上・中央・左下の3ヶ所をタップ！'],
    e: ['Chữ X sáng rực chính xác tuyệt đối!', 'Crisp X pattern completed!', '¡Patrón en X perfecto!', '綺麗なX字が光りました！'],
  },
  // 45
  {
    diff: 'easy', cat: 'trick',
    t: ['Phép chia đánh lừa', 'Divide by Half Trick', 'Dividir por la mitad', '半分で割るトリック'],
    p: ['Lấy 30 chia cho 1/2 (một nửa) rồi cộng thêm 10. Kết quả bằng bao nhiêu?', 'Divide 30 by half (0.5) and add 10. What is the result?', 'Divide 30 por la mitad (0,5) y suma 10. ¿Cuánto da?', '30を「半分（0.5）」で割って、10を足すといくつになる？'],
    m: { type: 'lock_dial', clueDisplay: '30 ÷ 0.5 + 10 = ?', correctCode: '70', maxLength: 3 },
    h1: ['Chia cho một nửa (0.5) KHÔNG giống chia cho 2 nhé!', 'Dividing by half (0.5) is NOT dividing by 2!', '¡Dividir por 0,5 no es dividir por 2!', '「半分（0.5）で割る」は「2で割る」と違うよ！'],
    h2: ['30 ÷ 0.5 = 30 × 2 = 60.', '30 ÷ 0.5 = 30 × 2 = 60.', '30 ÷ 0,5 = 60.', '30 ÷ 0.5 ＝ 60！'],
    h3: ['60 + 10 = 70.', '60 + 10 = 70.', '60 + 10 = 70.', '60 ＋ 10 ＝ 70！'],
    e: ['Chia cho 1/2 chính là nhân với 2: 30 ÷ 0.5 = 60, cộng 10 = 70!', 'Dividing by 0.5 doubles the number: 60 + 10 = 70!', '¡Dividir por la mitad es multiplicar por 2: 70!', '0.5で割ると2倍の60になり、10を足して70が正解です！'],
  },
  // 46
  {
    diff: 'easy', cat: 'riddle',
    t: ['Từ viết sai chính tả', 'Always Spelled Wrong', 'Mal escrita', '常に間違って書かれる言葉'],
    p: ['Từ tiếng Anh nào trong mọi cuốn từ điển chuẩn đều luôn bị viết "SAI"?', 'Which English word is ALWAYS spelled incorrectly in every dictionary?', '¿Qué palabra en inglés siempre se escribe "INCORRECTAMENTE" en el diccionario?', '英語の辞書でいつでも「間違って（INCORRECTLY）」と書かれている単語は何？'],
    m: {
      type: 'lateral_choice', illustration: 'book',
      options: [
        { vi: 'Từ "Incorrectly"', en: 'Incorrectly', es: 'Incorrectly', ja: 'Incorrectly' },
        { vi: 'Từ "Dictionary"', en: 'Dictionary', es: 'Dictionary', ja: 'Dictionary' },
        { vi: 'Từ "Rhythm"', en: 'Rhythm', es: 'Rhythm', ja: 'Rhythm' },
        { vi: 'Từ "Tomorrow"', en: 'Tomorrow', es: 'Tomorrow', ja: 'Tomorrow' },
      ],
      correctIndex: 0,
    },
    h1: ['Đây là câu đố chơi chữ tiếng Anh siêu nổi tiếng!', 'Think literally about the word "incorrectly"!', 'Piensa literalmente en la palabra.', '言葉の意味そのものをそのまま捉えてみて！'],
    h2: ['Từ "Incorrectly" có nghĩa là "một cách sai" — nên chữ viết của nó đúng là I-N-C-O-R-R-E-C-T-L-Y!', '"Incorrectly" literally spells out "incorrectly"!', '"Incorrectly" significa literalmente "incorrectamente".', '「間違って」という意味の単語そのものだよ！'],
    h3: ['Chọn từ "Incorrectly".', 'Pick Incorrectly.', 'Elige Incorrectly.', '「Incorrectly」を選ぼう！'],
    e: ['Mọi từ điển đều in từ "Incorrectly" đúng y như chữ... "Incorrectly"!', 'Every dictionary spells "incorrectly" as I-N-C-O-R-R-E-C-T-L-Y!', '¡Siempre está escrita así en el diccionario!', '辞書にはいつも「incorrectly（間違って）」とそのまま載っています！'],
  },
  // 47
  {
    diff: 'easy', cat: 'drag',
    t: ['Gửi thư cho người tuyết', 'Warm Cocoa Delivery', 'Entrega caliente', '溶けないうちに届けよう'],
    p: ['Ôi! Cục đá lạnh sắp làm tắt ngọn nến mất! Hãy tách chúng ra hoặc dập lửa bằng nước? Đừng, chỉ cần gạt tảng băng ra xa thôi!', 'Keep the ice cube from melting into a puddle by dragging it safely to the cold corner, away from the fire!', '¡Salva el hielo antes de que se derrita! Apártalo del fuego.', '氷が炎で溶けちゃう！氷を炎から遠くへ逃がしてあげよう！'],
    m: {
      type: 'drag_combine', mode: 'move_aside_then_tap', backdrop: 'room',
      items: [
        { id: 'ice', shape: 'ice', x: 52, y: 54, scale: 1.25 },
        { id: 'fire', shape: 'fire', x: 52, y: 54, scale: 1.15 },
      ],
      sourceId: 'fire', targetId: 'ice',
    },
    h1: ['Ngọn lửa đang nằm chồng ngay lên tảng băng!', 'The fire is right on top of the ice!', '¡El fuego está justo encima del hielo!', '炎が氷に重なっているよ！'],
    h2: ['Kéo ngọn lửa ra xa khỏi tảng băng.', 'Drag the fire far away from the ice.', 'Arrastra el fuego lejos del hielo.', '炎を氷から離れた場所へドラッグしよう。'],
    h3: ['Sau khi gạt lửa ra, chạm vào tảng băng để bảo vệ nó.', 'Tap the ice once safe!', 'Toca el hielo cuando esté a salvo.', '安全な氷をタップすればクリア！'],
    e: ['Tảng băng đã thoát khỏi sức nóng an toàn!', 'The ice cube stayed crisp and frozen!', '¡El hielo se salvó del calor!', '炎を遠ざけて氷を守り切りました！'],
  },
  // 48
  {
    diff: 'easy', cat: 'trick',
    t: ['Chiếc đồng hồ đứng kim', 'Stopped Clock Accuracy', 'El reloj parado', '止まった時計の不思議'],
    p: ['Một chiếc đồng hồ chết kim hoàn toàn (đứng im) thì một ngày chỉ đúng giờ mấy lần?', 'How many times in a single 24-hour day is a completely broken (stopped) analog clock right?', '¿Cuántas veces al día da la hora exacta un reloj analógico totalmente parado?', '完全に止まって動かないアナログ時計は、1日（24時間）に何回正確な時刻を指す？'],
    m: { type: 'lock_dial', clueDisplay: '🕒 (stopped) in 24h = ? times right', correctCode: '2', maxLength: 2 },
    h1: ['Đừng nghĩ là 0 lần nhé!', 'It is NOT 0 times!', '¡No son 0 veces!', '0回ではありません！'],
    h2: ['Nếu kim chỉ 3:00 thì vào 3 giờ sáng và 3 giờ chiều nó có chỉ đúng giờ không?', 'If stuck at 3:00, it is exact at 3 AM and 3 PM!', 'Si marca las 3:00, acierta a las 3 AM y 3 PM.', '3時で止まっているなら午前3時と午後3時はピタリ一致！'],
    h3: ['Đúng 2 lần mỗi ngày!', 'Exactly 2 times a day!', '¡Exactamente 2 veces al día!', '1日「2」回正しい時刻になる！'],
    e: ['Đồng hồ đứng kim đúng giờ 2 lần/ngày (còn đồng hồ chạy chậm 1 phút/ngày thì vài năm mới đúng 1 lần)!', 'A stopped clock is right twice a day!', '¡Un reloj parado da la hora exacta 2 veces al día!', '止まった時計は午前・午後の1日2回、正確な時刻と一致します！'],
  },
  // 49
  {
    diff: 'easy', cat: 'riddle',
    t: ['Không phải chị nhưng giống em', 'Who Is in the Photo?', '¿Quién es en la foto?', '写真の人物は誰？'],
    p: ['Một người đàn ông chỉ vào bức ảnh và nói: "Anh chị em ruột tôi chẳng có ai, nhưng cha của người trong ảnh lại là con trai của cha tôi." Người trong ảnh là ai?', 'A man looks at a portrait and says: "Brothers and sisters I have none, but this man’s father is my father’s son." Who is in the portrait?', 'Un hombre mira una foto: "No tengo hermanos ni hermanas, pero el padre de este hombre es el hijo de mi padre." ¿Quién está en la foto?', '男が写真を見て言った。「私に兄弟姉妹はいないが、この男の父親は私の父の息子だ。」写真の人物は誰？'],
    m: {
      type: 'lateral_choice', illustration: 'glasses',
      options: [
        { vi: 'Chính ông ta', en: 'Himself', es: 'Él mismo', ja: '彼自身' },
        { vi: 'Con trai của ông ta', en: 'His son', es: 'Su hijo', ja: '彼の息子' },
        { vi: 'Cha của ông ta', en: 'His father', es: 'Su padre', ja: '彼の父' },
        { vi: 'Chú bác của ông ta', en: 'His uncle', es: 'Su tío', ja: '彼のおじ' },
      ],
      correctIndex: 1,
    },
    h1: ['Ông ấy KHÔNG có anh chị em ruột — vậy "con trai của cha tôi" chỉ có thể là ai?', 'He has no siblings — so "my father’s son" must be...', 'No tiene hermanos, así que "el hijo de mi padre" es...', '兄弟がいないなら「私の父の息子」は彼自身だよね！'],
    h2: ['Thay cụm "con trai của cha tôi" = "CHÍNH TÔI": "Cha của người trong ảnh là chính tôi".', 'Substitute "my father’s son" with "ME": "This man’s father is ME."', 'Sustituye: "El padre de este hombre soy YO."', '「この男の父親は私」＝写真の人物は…'],
    h3: ['Người trong ảnh là Con trai của ông ta!', 'The portrait shows His son!', '¡La foto es de Su hijo!', '「彼の息子」が正解！'],
    e: ['"Con trai của cha tôi" = chính tôi → Tôi là cha của người trong ảnh → Ảnh chụp con trai tôi!', '"My father’s son" = myself → I am the portrait’s father → It is my son!', '¡El retrato es de su hijo!', '「私の父の息子」＝自分自身なので、写真の男の父が自分＝写真は自分の息子です！'],
  },
  // 50
  {
    diff: 'easy', cat: 'action',
    t: ['Mở khóa 4 góc ma trận', 'Four Corners Light', 'Cuatro esquinas', '4つの角を点灯させよう'],
    p: ['Chạm các ô để BẬT SÁNG đúng 4 góc (tắt 5 ô chữ thập ở giữa)!', 'Light up ONLY the 4 corner tiles (leave the inner cross OFF)!', '¡Enciende SOLO las 4 esquinas!', '4つの角だけを光らせよう（真ん中の十字はOFF）！'],
    m: {
      type: 'matrix_toggle',
      mode: 'pattern_match',
      gridSize: 3,
      initialGrid: [false, true, false, false, true, false, false, true, false],
      targetGrid: [true, false, true, false, false, false, true, false, true],
    },
    h1: ['Chạm để tắt cột giữa đang sáng, và bật 4 ô góc.', 'Turn off the middle column and turn on the 4 corners.', 'Apaga la columna central y enciende las 4 esquinas.', '光っている縦の中央列を消して、4つの角を点けよう。'],
    h2: ['Chạm từng ô theo ý muốn — chế độ này chỉ đổi đúng ô bạn chạm.', 'Each tap flips only that single tile here.', 'Cada toque cambia solo esa casilla.', 'このモードはタップしたマスだけ切り替わるよ。'],
    h3: ['Kết quả: Sáng ở 4 góc [1, 3, 7, 9].', 'Result: Only corners lit.', 'Solo las 4 esquinas encendidas.', '四隅の4マスだけをONにしよう！'],
    e: ['Bốn góc sáng rực cân đối hoàn hảo!', 'Four symmetrical corners lit cleanly!', '¡Cuatro esquinas iluminadas!', '4つの角が美しく点灯しました！'],
  },
  // 51
  {
    diff: 'easy', cat: 'trick',
    t: ['Thứ tháng 2 có ít nhất', 'Shortest Month Check', 'El mes más corto', '一番日数が少ない月'],
    p: ['Một năm có 12 tháng, có 7 tháng có 31 ngày. Hỏi có bao nhiêu tháng có... 28 ngày?', '7 months have 31 days. How many months of the year have 28 days?', '7 meses tienen 31 días. ¿Cuántos meses del año tienen 28 días?', '1年に31日まである月は7つあります。では「28日」がある月はいくつ？'],
    m: { type: 'lock_dial', clueDisplay: 'Months with ≥ 28 days = ?', correctCode: '12', maxLength: 2 },
    h1: ['Đừng trả lời 1 tháng (tháng Hai) nhé — đọc kỹ câu hỏi!', 'Do NOT say 1 — read the question carefully!', '¡NO es 1! Lee bien.', '1ヶ月（2月）ではないよ！よく読んでみて！'],
    h2: ['Tháng 1 có 28 ngày không? Có (thậm chí có tới 31 ngày)! Tháng 3, 4, 5... đều có ngày 28 cả!', 'Every single month has at least 28 days inside it!', '¡Todos los meses tienen al menos 28 días!', '1月も3月も12月も、どの月にも28日は含まれているよね！'],
    h3: ['Cả 12 tháng đều có 28 ngày!', 'All 12 months!', '¡Los 12 meses!', '全部の「12」ヶ月！'],
    e: ['Tất cả 12 tháng trong năm đều có ít nhất 28 ngày!', 'Every single one of the 12 months has 28 days!', '¡Los 12 meses tienen 28 días!', 'どの月にも1日〜28日は存在するので、12ヶ月すべてが正解です！'],
  },
  // 52
  {
    diff: 'easy', cat: 'riddle',
    t: ['Bác nông dân mất cừu', 'Farmer’s Sheep Left', 'Ovejas restantes', '残った羊は何匹？'],
    p: ['Một bác nông dân có 17 con cừu. Tất cả đều chạy mất TRỪ 9 con. Hỏi bác còn lại bao nhiêu con cừu?', 'A farmer had 17 sheep. All but 9 ran away. How many sheep does the farmer have left?', 'Un granjero tenía 17 ovejas. Todas menos 9 huyeron. ¿Cuántas le quedan?', '羊飼いが17匹の羊を飼っていました。9匹を除いてすべて逃げ出してしまいました。手元に残ったのは何匹？'],
    m: { type: 'lock_dial', clueDisplay: '17 sheep — "all but 9" ran = ?', correctCode: '9', maxLength: 2 },
    h1: ['Không phải 17 - 9 = 8 đâu nhé!', 'It is NOT 17 - 9 = 8!', '¡No es 17 - 9 = 8!', '17 − 9 ＝ 8 ではないよ！'],
    h2: ['"Tất cả trừ 9 con" nghĩa là 8 con chạy mất, giữ lại đúng 9 con!', '"All but 9" means 9 stayed behind!', '"Todas menos 9" significa que 9 se quedaron.', '「9匹を除いて逃げた」＝9匹は逃げずに残った！'],
    h3: ['Đáp án là 9.', 'Answer: 9.', 'Respuesta: 9.', '答えは「9」匹！'],
    e: ['"Trừ 9 con" nghĩa là 9 con không chạy — bác còn đúng 9 con cừu!', '"All but 9 ran away" leaves exactly 9 sheep!', '¡Le quedaron exactamente 9 ovejas!', '「9匹を除いて」なので、逃げなかった9匹がそのまま残っています！'],
  },
  // 53
  {
    diff: 'easy', cat: 'drag',
    t: ['Giúp chú chuột qua bẫy', 'Sweet Cheese Reward', 'Queso para el ratón', 'ネズミにチーズをあげよう'],
    p: ['Chú chuột nhỏ đang đói bụng! Hãy đưa miếng phô mai thơm ngon đến cho chú chuột (cẩn thận kẻo chạm mèo)!', 'The little mouse is hungry! Slide the cheese directly to the mouse!', '¡El ratón tiene hambre! Llévale el queso.', 'お腹を空かせたネズミにチーズを届けてあげよう！'],
    m: {
      type: 'drag_combine', mode: 'drop_on_target', backdrop: 'room',
      items: [
        { id: 'mouse', shape: 'mouse', x: 76, y: 66, scale: 1.15 },
        { id: 'cheese', shape: 'cheese', x: 24, y: 34, scale: 1.15 },
        { id: 'cat', shape: 'cat', x: 50, y: 42, scale: 1.05 },
      ],
      sourceId: 'cheese', targetId: 'mouse',
    },
    h1: ['Chú mèo đang ngủ ở giữa đấy!', 'Watch out — the cat sits in the center.', 'El gato está en el centro.', '真ん中にネコがいるよ。'],
    h2: ['Kéo miếng phô mai xuống phía chú chuột ở góc dưới phải.', 'Drag the cheese to the mouse on the bottom right.', 'Arrastra el queso hacia el ratón.', 'チーズを右下のネズミまで運ぼう。'],
    h3: ['Thả phô mai ngay trên chú chuột.', 'Drop the cheese onto the mouse.', 'Suelta el queso sobre el ratón.', 'ネズミの上にチーズを置こう！'],
    e: ['Chú chuột thưởng thức miếng phô mai ngon lành!', 'The mouse happily munched the cheese!', '¡El ratón disfrutó el queso!', '無事にチーズを食べられました！'],
  },
  // 54
  {
    diff: 'easy', cat: 'trick',
    t: ['Cơn mưa không ướt đầu', 'Dry in the Pouring Rain', 'Seco bajo la lluvia', '土砂降りでも濡れない髪'],
    p: ['Một anh chàng đi bộ suốt 30 phút dưới trời mưa tầm tã không mang ô, không đội mũ, chẳng mặc áo mưa... nhưng tóc trên đầu anh ta không ướt một sợi nào! Tại sao?', 'A man walks in pouring rain for 30 minutes with no umbrella, hat, or hood—yet not a single hair on his head gets wet! How?', 'Un hombre camina 30 min bajo lluvia intensa sin paraguas ni gorra, y ni un pelo se le moja. ¿Por qué?', '傘も帽子もレインコートもなしで30分豪雨の中を歩いたのに、髪の毛が1本も濡れなかった男。なぜ？'],
    m: {
      type: 'lateral_choice', illustration: 'raincloud',
      options: [
        { vi: 'Anh ấy bị hói trọc đầu', en: 'He was bald', es: 'Era calvo', ja: '彼はスキンヘッド（禿げていた）だったから' },
        { vi: 'Anh ấy chạy nhanh hơn hạt mưa', en: 'He outran the rain', es: 'Corrió más rápido', ja: '雨より速く走った' },
        { vi: 'Trời mưa nhưng không có nước', en: 'Dry rain', es: 'Lluvia seca', ja: '乾いた雨だった' },
        { vi: 'Anh ấy đi trong hầm xe', en: 'Inside a tunnel', es: 'En un túnel', ja: 'トンネルの中だった' },
      ],
      correctIndex: 0,
    },
    h1: ['Anh ấy hoàn toàn đi ngoài trời mưa ướt sũng người đấy nhé!', 'His clothes still got soaked outside!', 'Su ropa sí se mojó bajo la lluvia.', '服はびしょ濡れになったよ！でも「髪の毛」だけは…？'],
    h2: ['Muốn tóc không ướt khi dầm mưa thì... trên đầu làm gì có tóc!', 'What if he has zero hair on his head?', '¿Y si no tiene ni un pelo?', 'そもそも頭に毛が1本もなかったとしたら？'],
    h3: ['Chọn Anh ấy bị hói trọc đầu.', 'Pick He was bald.', 'Elige Era calvo.', '「スキンヘッドだった」を選ぼう！'],
    e: ['Không có sợi tóc nào trên đầu thì dĩ nhiên chẳng có sợi nào bị ướt cả!', 'You cannot wet hair that does not exist — he is bald!', '¡Al ser calvo no tenía pelo que mojar!', '髪の毛が1本もなければ、1本も濡れるはずがありません！'],
  },
  // 55
  {
    diff: 'easy', cat: 'riddle',
    t: ['Bốn chân nhưng chẳng bước', 'Four Legs Never Walk', 'Cuatro patas sin caminar', '4本脚でも歩けない'],
    p: ['Cái gì có 4 chân vững chãi quanh năm nhưng suốt đời chẳng bao giờ tự bước đi được một bước?', 'What has four sturdy legs yet can never walk a single step?', '¿Qué tiene cuatro patas pero nunca camina?', '立派な4本の脚があるのに、一生一歩も歩けないものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'box',
      options: [
        { vi: 'Cái bàn / cái ghế', en: 'A table or chair', es: 'Una mesa o silla', ja: 'テーブルや椅子' },
        { vi: 'Chú chó ngủ gật', en: 'A sleepy dog', es: 'Un perro dormido', ja: '眠い犬' },
        { vi: 'Con ếch xanh', en: 'A green frog', es: 'Una rana verde', ja: 'カエル' },
        { vi: 'Con mèo lười', en: 'A lazy cat', es: 'Un gato perezoso', ja: '怠け者のネコ' },
      ],
      correctIndex: 0,
    },
    h1: ['Đồ nội thất quen thuộc trong mọi ngôi nhà.', 'Everyday household furniture.', 'Mueble común en cualquier casa.', 'どの家にもある家具だよ。'],
    h2: ['Nó đứng bằng 4 chân gỗ hoặc sắt.', 'It stands on 4 wooden or metal legs.', 'Se apoya en 4 patas.', '4本の脚で立っている家具といえば？'],
    h3: ['Chọn Cái bàn / cái ghế.', 'Pick A table or chair.', 'Elige Una mesa o silla.', '「テーブルや椅子」を選ぼう！'],
    e: ['Cái bàn, cái ghế có 4 chân nhưng chỉ đứng yên một chỗ!', 'Tables and chairs stand on four legs without ever walking!', '¡Las mesas y sillas tienen 4 patas y no caminan!', '机や椅子は4本脚ですが自分で歩くことはありません！'],
  },
  // 56
  {
    diff: 'easy', cat: 'visual',
    t: ['Đếm mèo nấp sau bụi', 'Hidden Cats Check', 'Gatos escondidos', '隠れたネコを数えよう'],
    p: ['Nhìn thật kỹ bức tranh khu vườn — có tất cả bao nhiêu chú mèo đang trốn?', 'Look closely into the garden — how many cats are hiding in total?', 'Mira bien el jardín: ¿cuántos gatos se esconden en total?', '庭の絵をよく見て！全部で何匹のネコが隠れている？'],
    m: { type: 'visual_count', visualKind: 'hidden_animals', variant: 1, correctAnswer: 5, min: 1, max: 15 },
    h1: ['Soi cả những đôi tai nhọn ló ra sau tán lá!', 'Look for pointy cat ears peeking out!', 'Busca orejas puntiagudas detrás de las hojas.', '葉っぱの裏から覗いている耳や尻尾を探そう！'],
    h2: ['Có 3 chú mèo đứng rõ và 2 chú lấp ló.', 'Count all visible and peeking cats carefully.', 'Cuenta los visibles y los escondidos.', '見えているネコと隠れているネコを全部数えよう！'],
    h3: ['Đáp án là 5 chú mèo.', 'There are 5 cats.', 'Hay 5 gatos.', '合計「5」匹！'],
    e: ['Tổng cộng 5 chú mèo lén trốn trong bức ảnh!', '5 sneaky cats hiding across the garden!', '¡5 gatos escondidos!', '合計5匹のネコが隠れていました！'],
  },
  // 57
  {
    diff: 'medium', cat: 'trick',
    t: ['Nhìn lại chính mình', 'Always Backwards', 'Siempre al revés', 'いつも逆さまに映るもの'],
    p: ['Khi bạn giơ tay phải trước thứ này, nó lại giơ tay trái; bạn cười nó cười theo, bạn đi nó lập tức biến mất. Đó là gì?', 'Raise your right hand and it raises its left; smile and it smiles back; step away and it vanishes. What is it?', 'Si levantas tu mano derecha, levanta su izquierda; si te vas, desaparece. ¿Qué es?', '右手を挙げると向こうは左手を挙げ、笑うと笑い返し、離れるといなくなるものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'prism',
      options: [
        { vi: 'Hình ảnh trong gương', en: 'Your reflection in a mirror', es: 'Tu reflejo en el espejo', ja: '鏡の中の姿' },
        { vi: 'Người anh em sinh đôi', en: 'An identical twin', es: 'Un gemelo', ja: '双子のきょうだい' },
        { vi: 'Bức tượng sáp', en: 'A wax statue', es: 'Una estatua de cera', ja: 'ロウ人形' },
        { vi: 'Bức tranh sơn dầu', en: 'An oil painting', es: 'Un cuadro', ja: '油絵' },
      ],
      correctIndex: 0,
    },
    h1: ['Đồ vật treo trong phòng tắm hoặc bàn trang điểm.', 'Hanging in every bathroom.', 'Colgado en el baño.', '洗面所や部屋に掛けてあるものだよ。'],
    h2: ['Nó đảo ngược hướng trái - phải.', 'It flips left and right visually.', 'Invierte izquierda y derecha.', '左右が反転して映るよね！'],
    h3: ['Chọn Hình ảnh trong gương.', 'Pick Your reflection in a mirror.', 'Elige Tu reflejo en el espejo.', '「鏡の中の姿」を選ぼう！'],
    e: ['Chiếc gương phản chiếu hình ảnh ngược trái-phải của chính bạn!', 'A mirror reflection flips left and right instantly!', '¡El espejo refleja tu imagen invertida!', '鏡の中の自分は左右反転して同じ動きをします！'],
  },
  // 58
  {
    diff: 'medium', cat: 'logic',
    t: ['Chuỗi giá trị tiền xu', 'Binary Pair 19', 'Par binario 19', '2枚で19を作ろう'],
    p: ['Chọn đúng 2 ô sao cho tổng của chúng bằng đúng 19!', 'Select exactly 2 tiles whose sum equals 19!', '¡Selecciona exactamente 2 casillas que sumen 19!', 'ちょうど2枚のパネルを選んで合計「19」を作ろう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'magic_sum',
      gridSize: 3,
      initialGrid: [false, false, false, false, false, false, false, false, false],
      tileLabels: ['3', '7', '14', '5', '12', '8', '2', '10', '16'],
      requiredCount: 2,
      targetSum: 19,
    },
    h1: ['Cần chọn đúng 2 số (7 + 12 = 19 hoặc 3 + 16 = 19!).', 'Find 2 numbers summing to 19!', 'Busca 2 números que sumen 19.', '足して19になる2つの数字を探そう！'],
    h2: ['Thử kiểm tra cặp 3 + 16 hoặc 7 + 12.', 'Try 3 + 16 or 7 + 12!', 'Prueba 3 + 16 o 7 + 12.', '「3」と「16」、または「7」と「12」！'],
    h3: ['Bấm chọn 2 ô đó rồi nhấn Kiểm tra.', 'Pick one pair and press Check.', 'Elige un par y pulsa Comprobar.', '2つ選んで「確認」ボタンを押そう！'],
    e: ['Tổng đạt đúng 19 với 2 ô đã chọn!', 'Exact target sum 19 achieved!', '¡Suma exacta de 19!', '見事合計19になりました！'],
  },
  // 59
  {
    diff: 'medium', cat: 'riddle',
    t: ['Chạy vòng quanh nhưng đứng yên', 'Chasing Its Own Hands', 'Persiguiendo sus manos', '追いかけっこする兄弟'],
    p: ['Hai anh em nhà nọ cùng chạy trên một đường tròn, thằng nhỏ chạy nhanh gấp 12 lần thằng lớn nhưng suốt đời chẳng bao giờ rời khỏi nhà. Họ là ai?', 'One tiny brother races 12 times faster than his big brother around the same circular track, yet neither leaves home. Who are they?', 'Un hermano pequeño corre 12 veces más rápido que su hermano mayor en un círculo sin salir jamás. ¿Quiénes son?', '丸いトラックを兄の12倍の速さで弟が走り続けるのに、外に出ることは一度もない兄弟は誰？'],
    m: {
      type: 'lateral_choice', illustration: 'clock',
      options: [
        { vi: 'Kim phút và kim giờ', en: 'Minute and hour hands', es: 'El minutero y la aguja horaria', ja: '時計の長針と短針' },
        { vi: 'Hai bánh xe đạp', en: 'Two bicycle wheels', es: 'Dos ruedas', ja: '自転車の前後輪' },
        { vi: 'Trái Đất và Mặt Trăng', en: 'Earth and Moon', es: 'La Tierra y la Luna', ja: '地球と月' },
        { vi: 'Hai vận động viên marathon', en: 'Two marathon runners', es: 'Dos corredores', ja: '2人のマラソン選手' },
      ],
      correctIndex: 0,
    },
    h1: ['Tỷ lệ tốc độ chính xác là 12 : 1!', 'The speed ratio is exactly 12 : 1!', '¡La proporción es exactamente 12 : 1!', '速さの比がちょうど「12対1」だよ！'],
    h2: ['Trong 1 giờ, kim phút quay đủ 1 vòng (12 nấc), còn kim giờ chỉ đi được 1 nấc!', 'In 1 hour, the minute hand travels 12 ticks while the hour hand moves 1 tick!', 'En 1 hora el minutero recorre 12 marcas y el horario 1.', '1時間で長針は1周（12目盛り）、短針は1目盛り進むよね！'],
    h3: ['Chọn Kim phút và kim giờ.', 'Pick Minute and hour hands.', 'Elige El minutero y la aguja horaria.', '「時計の長針と短針」を選ぼう！'],
    e: ['Kim phút chạy nhanh gấp đúng 12 lần kim giờ trên mặt đồng hồ tròn!', 'The minute hand moves 12x faster than the hour hand around the clock dial!', '¡El minutero es 12 veces más rápido!', '長針は短針のぴったり12倍のスピードで文字盤を回っています！'],
  },
  // 60
  {
    diff: 'medium', cat: 'trick',
    t: ['10 cây nến trong gió', 'Ten Candles in Wind', 'Diez velas al viento', '風の中の10本のロウソク'],
    p: ['Có 10 cây nến đang cháy trên bàn. Gió thổi tắt mất 2 cây. Sau đó gió lại thổi tắt thêm 1 cây nữa. Chủ nhà vội đóng cửa sổ lại. Hỏi đến sáng hôm sau còn lại mấy cây nến?', 'Ten candles burn on a table. Wind blows out 2, then blows out 1 more. You close the window so no more go out. By next morning, how many candles remain?', 'Diez velas arden. El viento apaga 2, luego 1 más. Cierras la ventana. A la mañana siguiente, ¿cuántas velas quedan?', '10本のロウソクが燃えています。風で2本消え、さらに1本消えました。窓を閉めたのでもう消えません。翌朝残っているロウソクは何本？'],
    m: { type: 'lock_dial', clueDisplay: '10 🕯️ → 3 blown out → morning left ?', correctCode: '3', maxLength: 2 },
    h1: ['Đừng lấy 10 - 3 = 7 nhé — nghĩ xem điều gì xảy ra với những cây nến ĐANG CHÁY suốt đêm!', 'Do NOT compute 10 - 3 = 7! Think about what happens to burning candles overnight!', '¡No es 7! ¿Qué pasa con las velas que siguieron ardiendo?', '7本じゃないよ！燃え続けたロウソクは翌朝どうなっている？'],
    h2: ['7 cây nến không tắt sẽ cháy hết sạch sành sanh qua đêm!', 'The 7 lit candles will burn all the way down to nothing!', 'Las 7 encendidas se consumen por completo.', '消えなかった7本は朝までに燃え尽きて無くなるよ！'],
    h3: ['Chỉ còn 3 cây bị gió thổi tắt từ đầu thôi!', 'Only the 3 blown-out candles remain!', '¡Solo quedan las 3 que se apagaron!', '途中で消えた「3」本だけが残る！'],
    e: ['7 cây cháy tiếp đến sáng thì tan hết, chỉ còn đúng 3 cây bị gió thổi tắt còn nguyên sáp!', 'The 7 burning ones melted away completely, leaving the 3 blown-out candles!', '¡Las 3 apagadas son las únicas que sobrevivieron!', '燃え続けた7本は朝には溶けて無くなるので、途中で消えた3本だけが残ります！'],
  },
  // 61
  {
    diff: 'medium', cat: 'drag',
    t: ['Làm lạnh ly nước ấm', 'Chill the Drink', 'Enfría la bebida', '炎を凍らせて消そう？'],
    p: ['Quả bom hẹn giờ sắp nóng quá mức phát nổ rồi! Hãy hạ nhiệt nó trước khi muộn!', 'The bomb is overheating! Cool it down quickly before it blows!', '¡La bomba se sobrecalienta! Enfríala rápido.', '爆弾が過熱している！冷やして爆発を止めよう！'],
    m: {
      type: 'drag_combine', mode: 'drop_on_target', backdrop: 'room',
      items: [
        { id: 'bomb', shape: 'bomb', x: 70, y: 55, scale: 1.25 },
        { id: 'ice', shape: 'ice', x: 24, y: 34, scale: 1.15 },
        { id: 'fire', shape: 'fire', x: 24, y: 72, scale: 1.05 },
      ],
      sourceId: 'ice', targetId: 'bomb',
    },
    h1: ['Lửa sẽ làm bom nổ ngay lập tức!', 'Fire makes it blow up!', 'El fuego la haría estallar.', '炎を近づけたら即爆発だよ！'],
    h2: ['Dùng khối băng lạnh ở góc trên bên trái.', 'Grab the ice block on the top left.', 'Usa el bloque de hielo.', '左上の氷を使おう。'],
    h3: ['Kéo cục băng thả lên quả bom.', 'Drop the ice right onto the bomb.', 'Suelta el hielo sobre la bomba.', '氷を爆弾に重ねて冷やそう！'],
    e: ['Nhiệt độ hạ xuống an toàn — giải cứu thành công!', 'Cooled down safely in the nick of time!', '¡Enfriada justo a tiempo!', '氷でバッチリ冷却して爆発を防ぎました！'],
  },
  // 62
  {
    diff: 'medium', cat: 'riddle',
    t: ['Từ vựng đảo ngược', 'Stressed Is Desserts', 'Palabra al revés', '逆から読むとご馳走に？'],
    p: ['Trong tiếng Anh, khi bị "STRESSED" (căng thẳng), chỉ cần đọc ngược lại từ đó thì sẽ biến thành món gì rất ngọt ngào?', 'Spell "STRESSED" backwards and what sweet treat do you get?', 'Si lees "STRESSED" al revés en inglés, ¿qué comida dulce obtienes?', '英語でストレスを意味する「STRESSED」を後ろから逆さに読むと、どんな甘い食べ物になる？'],
    m: {
      type: 'lateral_choice', illustration: 'cake',
      options: [
        { vi: 'Món tráng miệng (DESSERTS)', en: 'Desserts', es: 'Desserts (postres)', ja: 'Desserts（デザート）' },
        { vi: 'Bánh quy bơ (BISCUITS)', en: 'Biscuits', es: 'Biscuits', ja: 'Biscuits（ビスケット）' },
        { vi: 'Kẹo dẻo (CANDIES)', en: 'Candies', es: 'Candies', ja: 'Candies（キャンディ）' },
        { vi: 'Mật ong (HONEY)', en: 'Honey', es: 'Honey', ja: 'Honey（はちみつ）' },
      ],
      correctIndex: 0,
    },
    h1: ['Đánh vần ngược từng chữ cái của S-T-R-E-S-S-E-D.', 'Reverse the letters: D-E-S-S-E-R-T-S.', 'Invierte las letras: D-E-S-S-E-R-T-S.', 'D・E・S・S・E・R・T・S と並べてみよう！'],
    h2: ['Chính là từ DESSERTS!', 'It spells DESSERTS!', '¡Se lee DESSERTS!', 'そのまま「DESSERTS」になるよ！'],
    h3: ['Chọn Món tráng miệng (DESSERTS).', 'Pick Desserts.', 'Elige Desserts.', '「Desserts（デザート）」を選ぼう！'],
    e: ['STRESSED đọc ngược thành DESSERTS — căng thẳng quá thì đi ăn tráng miệng nhé!', 'STRESSED backwards is literally DESSERTS!', '¡STRESSED al revés es DESSERTS!', 'STRESSEDを逆さから読むと見事にDESSERTS（デザート）になります！'],
  },
  // 63
  {
    diff: 'medium', cat: 'logic',
    t: ['Sắp xếp độ dài ngày trong tuần', 'Speed of Light Scale', 'Velocidad en acción', '遅いものから速いものへ'],
    p: ['Sắp xếp 4 đối tượng từ CHẬM NHẤT đến NHANH NHẤT!', 'Order these 4 travelers from SLOWEST to FASTEST!', '¡Ordena estos 4 de MÁS LENTO a MÁS RÁPIDO!', '次の4つを移動速度が「遅い順」に並べよう！'],
    m: {
      type: 'order_sort',
      items: [
        { id: 'rocket', shape: 'rocket', label: { vi: 'Tên lửa vũ trụ', en: 'Space Rocket', es: 'Cohete', ja: '宇宙ロケット' } },
        { id: 'car', shape: 'car', label: { vi: 'Ô tô thể thao', en: 'Sports Car', es: 'Coche deportivo', ja: 'スポーツカー' } },
        { id: 'chick', shape: 'chick', label: { vi: 'Gà con chạy bộ', en: 'Walking Chick', es: 'Pollito', ja: '歩くヒヨコ' } },
        { id: 'flashlight', shape: 'flashlight', label: { vi: 'Tia sáng đèn pin', en: 'Beam of Light', es: 'Rayo de luz', ja: '光のビーム' } },
      ],
      correctOrder: ['chick', 'car', 'rocket', 'flashlight'],
    },
    h1: ['Gà con đi bộ là chậm nhất.', 'The walking chick is slowest.', 'El pollito es el más lento.', '歩くヒヨコが一番遅いよ。'],
    h2: ['Ánh sáng nhanh nhất vũ trụ (~300,000 km/s), vượt xa cả tên lửa!', 'Light travels ~300,000 km/s — far faster than any rocket!', 'La luz supera por mucho a cualquier cohete.', '光は秒速約30万kmでロケットより圧倒的に速い！'],
    h3: ['Thứ tự: Gà con → Ô tô → Tên lửa → Tia sáng.', 'Order: Chick → Car → Rocket → Light.', 'Orden: Pollito → Coche → Cohete → Luz.', 'ヒヨコ → 車 → ロケット → 光のビーム！'],
    e: ['Không vật thể nào vượt qua tốc độ ánh sáng ở vị trí #4!', 'Nothing beats the speed of light in spot #4!', '¡Nada supera la velocidad de la luz!', '宇宙最速の光が4番目に来るのがポイントです！'],
  },
  // 64
  {
    diff: 'medium', cat: 'trick',
    t: ['Trứng rơi không vỡ', 'Unbreakable Egg Drop', 'Huevo irrompible', '落としても割れない卵'],
    p: ['Bạn thả một quả trứng sống từ độ cao 3 mét xuống nền bê tông cứng... nhưng quả trứng rơi suốt 2 mét đầu tiên mà VẪN KHÔNG VỠ! Tại sao?', 'You drop a raw egg 3 meters onto hard concrete, and after falling the first 2 meters the egg STILL has not cracked! How?', 'Sueltas un huevo crudo desde 3 metros sobre cemento, y tras caer 2 metros NO se rompe. ¿Por qué?', '生の卵を3mの高さから硬いコンクリートへ落としました。最初の2mを落ちても卵はまだ割れていません。なぜ？'],
    m: {
      type: 'lateral_choice', illustration: 'egg',
      options: [
        { vi: 'Vì nó mới rơi 2m, chưa chạm đất 3m!', en: 'Because it had not hit the ground yet!', es: '¡Porque aún no había llegado al suelo!', ja: 'まだ2mしか落ちておらず地面に着いていないから' },
        { vi: 'Bê tông rất mềm', en: 'Soft concrete', es: 'Cemento blando', ja: '柔らかいコンクリートだった' },
        { vi: 'Trứng luộc chín sẵn', en: 'Hard-boiled egg', es: 'Huevo cocido', ja: 'ゆで卵だった' },
        { vi: 'Trứng đà điểu thép', en: 'Steel egg', es: 'Huevo de acero', ja: '鉄の卵だった' },
      ],
      correctIndex: 0,
    },
    h1: ['Đọc lại từng chữ trong câu hỏi: "thả từ độ cao 3m... rơi suốt 2m đầu tiên".', 'Check the distances: dropped from 3m, after falling 2m...', 'Lee las distancias: altura 3m, tras caer 2m...', '高さ3mから落として、まだ「2m」しか落ちていないよ！'],
    h2: ['Còn 1 mét nữa mới chạm mặt bê tông!', 'It still has 1 meter of air left before hitting concrete!', '¡Todavía le falta 1 metro para chocar!', 'あと1m落ちないと地面に届かない！'],
    h3: ['Chọn Vì nó chưa chạm đất!', 'Pick Because it had not hit the ground yet!', 'Elige ¡Porque aún no había llegado al suelo!', '「まだ地面に着いていないから」を選ぼう！'],
    e: ['Ở mét thứ 2 quả trứng vẫn đang bay giữa không trung thì sao mà vỡ được!', 'Two meters down a 3-meter drop, the egg is still mid-air!', '¡A los 2 metros sigue volando en el aire!', '高さ3mから落として2m地点では、まだ空中にいるので割れるわけがありません！'],
  },
  // 65
  {
    diff: 'medium', cat: 'visual',
    t: ['Số giao điểm 3 đường thẳng', 'Three Intersecting Lines', 'Tres rectas cruzadas', '3本の直線の交点'],
    p: ['Có bao nhiêu giao điểm tạo thành bởi 3 đường thẳng cắt nhau đôi một như hình?', 'How many intersection dots are formed by these 3 crossing lines?', '¿Cuántos puntos de cruce forman estas 3 rectas?', '3本の直線が交わってできている交点は全部でいくつ？'],
    m: { type: 'visual_count', visualKind: 'intersecting_lines', variant: 0, correctAnswer: 3, min: 0, max: 15 },
    h1: ['Mỗi cặp 2 đường thẳng cắt nhau tại 1 điểm.', 'Each pair of lines crosses at 1 point.', 'Cada par se cruza en 1 punto.', '2本の直線につき1つの交点ができるよ。'],
    h2: ['Với 3 đường thẳng: 3 × 2 ÷ 2 = 3 điểm.', 'For 3 lines: 3 × 2 ÷ 2 = 3 intersections.', '3 × 2 ÷ 2 = 3 cruces.', '3×2÷2＝3個の交点！'],
    h3: ['Đếm trực tiếp 3 chấm tròn trên hình: đáp án 3.', 'Count the 3 glowing intersection dots: 3.', 'Cuenta los 3 puntos: 3.', '図の中の赤い点を数えて「3」！'],
    e: ['3 đường thẳng đôi một cắt nhau tạo đúng 3 giao điểm!', 'Three mutually crossing lines create exactly 3 intersections!', '¡3 rectas crean 3 puntos de corte!', '3本の直線がそれぞれ交わると3つの交点が生まれます！'],
  },
  // 66
  {
    diff: 'medium', cat: 'logic',
    t: ['Lưới Lights-Out dấu cộng', 'Plus-Sign Lights-Out', 'Luz en cruz', '十字フリップに挑戦'],
    p: ['Thử thách Lights-Out mới: chỉ cần chạm ĐÚNG 1 ô duy nhất để toàn bộ ma trận sáng rực!', 'Tap ONE single tile to turn the entire 3×3 grid ON!', '¡Toca UNA sola casilla para encender toda la matriz!', '1回だけタップして全9マスを点灯させよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'lights_out',
      gridSize: 3,
      // Tap index 1 (0,1,2,4) => [false, false, false, true, false, true, true, true, true]
      initialGrid: [false, false, false, true, false, true, true, true, true],
      allOnRequired: true,
    },
    h1: ['4 ô đang tắt hợp thành hình chữ T (cả hàng trên + ô giữa).', 'Notice the 4 OFF tiles form a T-shape at the top!', 'Las 4 casillas apagadas forman una T arriba.', '消えている4マスが上辺＋中央のT字になっているよ！'],
    h2: ['Ô nào có 3 hàng xóm nằm đúng ở hàng trên và chính giữa?', 'Which tile has neighbors at top-left, top-right, and center?', '¿Qué casilla conecta esos 4 puntos?', '左右の角と中央に隣接しているマスはどこ？'],
    h3: ['Chạm ô chính giữa hàng trên (hàng 1, cột 2).', 'Tap the top-center tile.', 'Toca la casilla superior central.', '上段の真ん中のマスをタップ！'],
    e: ['Cú chạm đỉnh giữa lật cả 4 ô tắt thành sáng rực cùng lúc!', 'Top-center tap flipped all 4 missing tiles ON at once!', '¡Un toque arriba al centro iluminó las 4!', '上段中央を1回タップしてT字の4マスを全部点けました！'],
  },
  // 67
  {
    diff: 'medium', cat: 'riddle',
    t: ['Thứ ném đi khi cần', 'Thrown Out When Needed', 'Lo tiras para usarlo', '使うときに投げ捨てるもの'],
    p: ['Vật gì khi bạn cần dùng đến thì ném nó đi thật xa, còn khi không cần nữa thì lại kéo nó về?', 'What do you throw away when you want to use it, and pull back in when you are done using it?', '¿Qué tiras lejos cuando lo necesitas usar y recoges cuando ya no lo necesitas?', '使いたいときには遠くへ投げ捨てて、使い終わったら手元に引き戻すものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'magnet',
      options: [
        { vi: 'Mỏ neo tàu thủy', en: 'A ship anchor', es: 'Un ancla de barco', ja: '船のイカリ（アンカー）' },
        { vi: 'Chiếc đĩa bay đồ chơi', en: 'A frisbee', es: 'Un frisbee', ja: 'フリスビー' },
        { vi: 'Cái boomerang', en: 'A boomerang', es: 'Un bumerán', ja: 'ブーメラン' },
        { vi: 'Quả bóng rổ', en: 'A basketball', es: 'Una pelota', ja: 'バスケットボール' },
      ],
      correctIndex: 0,
    },
    h1: ['Vật nặng bằng sắt gắn trên con tàu lớn.', 'A heavy iron tool aboard ships.', 'Herramienta pesada en los barcos.', '大きな船に積まれている重い鉄の道具だよ。'],
    h2: ['Khi muốn đậu tàu lại (cần dùng), thủy thủ thả nó xuống đáy biển!', 'Sailors drop it into the sea to park the ship!', 'Los marineros la lanzan al mar para fondear.', '船を停泊させたいときに海へ落とすよね！'],
    h3: ['Chọn Mỏ neo tàu thủy.', 'Pick A ship anchor.', 'Elige Un ancla de barco.', '「船のイカリ」を選ぼう！'],
    e: ['Thả mỏ neo xuống nước khi cần neo đậu, và kéo neo lên khi nhổ neo ra khơi!', 'You drop anchor to use it and haul it back up to sail away!', '¡Lanzas el ancla para fondear y la subes al zarpar!', '停泊するときに海へ投げ入れ、出航するときに引き上げます！'],
  },
  // 68
  {
    diff: 'medium', cat: 'trick',
    t: ['Vị vua trong phòng tối', 'The Blind Spot Trick', 'Sin mirar', '100本のロウソク？'],
    p: ['Một con quạ bay từ Bắc xuống Nam mất 1 giờ, bay từ Nam lên Bắc hết... 60 phút. Nhưng khi cất cánh từ một đỉnh cực, chỉ cần bay về hướng Nam 10km, hướng Đông 10km rồi hướng Bắc 10km lại quay về ĐÚNG điểm xuất phát! Đỉnh cực đó là cực nào?', 'A polar explorer walks 10km South, 10km East, and 10km North—returning to the exact starting point and spotting a bear. What color is the bear?', 'Un explorador camina 10km al Sur, 10km al Este y 10km al Norte y vuelve al punto inicial donde ve un oso. ¿De qué color es el oso?', '南へ10km、東へ10km、北へ10km歩いたら元の場所に戻り、目の前にクマがいました。そのクマは何色？'],
    m: {
      type: 'lateral_choice', illustration: 'ice',
      options: [
        { vi: 'Màu trắng (Gấu Bắc Cực)', en: 'White (Polar bear)', es: 'Blanco (Oso polar)', ja: '白色（ホッキョクグマ）' },
        { vi: 'Màu nâu (Gấu xám)', en: 'Brown (Grizzly)', es: 'Marrón', ja: '茶色（ヒグマ）' },
        { vi: 'Màu đen (Gấu trúc)', en: 'Black', es: 'Negro', ja: '黒色' },
        { vi: 'Không xác định được', en: 'Impossible to tell', es: 'Imposible saber', ja: '特定できない' },
      ],
      correctIndex: 0,
    },
    h1: ['Chỗ nào trên Trái Đất đi Nam-Đông-Bắc một hình tam giác lại về đúng chỗ cũ?', 'Where on Earth does South-East-North form a closed triangle?', '¿Dónde en la Tierra Sur-Este-Norte vuelve al inicio?', '地球上で「南→東→北」と進んで元の地点に戻れる場所は1ヶ所だけ！'],
    h2: ['Chỉ có Cực Bắc địa lý mới bắt đầu đi về hướng Nam được (ở Cực Nam không thể đi tiếp về Nam, vả lại Nam Cực không có gấu!).', 'Only the North Pole starts South—and there are no bears at the South Pole!', 'Solo en el Polo Norte (y no hay osos en el Polo Sur).', '北極点しかあり得ないよね（南極にはクマがいない）！'],
    h3: ['Gấu ở Bắc Cực có màu trắng!', 'North Pole bears are White!', '¡En el Polo Norte el oso es Blanco!', '北極のクマなので「白色」！'],
    e: ['Điểm xuất phát là Bắc Cực nên chú gấu bắt gặp chắc chắn là Gấu Bắc Cực màu trắng!', 'Starting at the North Pole means it is a white polar bear!', '¡Al estar en el Polo Norte es un oso polar blanco!', '出発地点が北極点なので、出会うクマは白いホッキョクグマです！'],
  },
  // 69
  {
    diff: 'medium', cat: 'lock',
    t: ['Khoảng cách cây xanh', 'Trees Along a Road', 'Árboles en fila', '並木道の間隔トリック'],
    p: ['Người ta trồng 10 cây xanh thẳng hàng dọc theo con đường, mỗi cây cách đều nhau 5 mét. Hỏi khoảng cách từ cây thứ 1 đến cây thứ 10 là bao nhiêu mét?', '10 trees are planted in a straight line, 5 meters apart from each neighbor. What is the distance from the 1st tree to the 10th tree?', 'Se plantan 10 árboles en línea recta separados 5 metros entre sí. ¿Distancia del primero al décimo?', '一直線の道に5m間隔で10本の木が並んでいます。1本目から10本目までの距離は何m？'],
    m: { type: 'lock_dial', clueDisplay: '10 🌳 (5m gaps) → distance = ? m', correctCode: '45', maxLength: 2 },
    h1: ['Cẩn thận kẻo nhân nhầm 10 × 5 = 50 nhé!', 'Careful — it is NOT 10 × 5 = 50!', '¡Cuidado! No es 10 × 5 = 50.', '10 × 5 ＝ 50 の罠に注意！'],
    h2: ['Giữa 10 cây chỉ có bao nhiêu khoảng trống thôi?', 'How many gaps exist between 10 trees?', '¿Cuántos huecos hay entre 10 árboles?', '10本の木の間には「何個の隙間」がある？'],
    h3: ['9 khoảng × 5m = 45m.', '9 gaps × 5m = 45m.', '9 huecos × 5m = 45m.', '9区間 × 5m ＝ 45m！'],
    e: ['10 cây tạo thành 9 khoảng cách (lỗi hàng rào kinh điển): 9 × 5 = 45 mét!', 'Classic fencepost problem: 9 gaps × 5m = 45m!', '¡9 espacios de 5m = 45m!', '有名な植木算！間は9ヶ所なので 9×5＝45m が正解です！'],
  },
  // 70
  {
    diff: 'medium', cat: 'drag',
    t: ['Giải mã rương khóa băng', 'Thaw & Unlock Chest', 'Descongela el cofre', '氷の宝箱を開けよう'],
    p: ['Chiếc rương báu bị đóng băng cứng ngắc! Dùng ánh mặt trời làm tan băng trước rồi mới kéo? Không, ghép ngay Mặt trời vào Rương báu!', 'The treasure chest is frozen solid! Melt the frost off using warm sunshine!', '¡El cofre está congelado! Derrite el hielo con el sol.', '宝箱が凍っている！太陽で氷を溶かそう！'],
    m: {
      type: 'drag_combine', mode: 'drop_on_target', backdrop: 'park',
      items: [
        { id: 'chest', shape: 'chest', x: 74, y: 60, scale: 1.25 },
        { id: 'sun', shape: 'sun', x: 24, y: 30, scale: 1.15 },
        { id: 'key', shape: 'key', x: 24, y: 72, scale: 1.05 },
      ],
      sourceId: 'sun', targetId: 'chest',
    },
    h1: ['Ổ khóa bị băng bịt kín nên chìa khóa chưa tra vào được.', 'The keyhole is iced over right now.', 'La cerradura está congelada.', '鍵穴が凍って鍵が入らないよ。'],
    h2: ['Hãy làm ấm chiếc rương bằng mặt trời trước.', 'Warm the chest with the sun first.', 'Calienta el cofre con el sol.', 'まずは太陽で宝箱を温めよう。'],
    h3: ['Kéo mặt trời thả lên chiếc rương.', 'Drop the sun onto the chest.', 'Suelta el sol sobre el cofre.', '太陽を宝箱に重ねよう！'],
    e: ['Nắng ấm làm tan lớp băng phủ ngoài rương báu!', 'Warm sunshine melted the frost right off!', '¡El sol derritió el hielo del cofre!', '太陽の熱で氷が溶けて宝箱が開きました！'],
  },
  // 71
  {
    diff: 'medium', cat: 'trick',
    t: ['Tên gọi hai chữ', 'The Heavy Reverse', 'Al revés no pesa', '前は重く、後ろはそうでもない'],
    p: ['Thứ gì đọc xuôi thì rất nặng nề, nhưng khi đọc ngược lại thì... chẳng nặng chút nào ("TON" → "NOT")?', 'Forward I am heavy; backwards I am not. What English word am I?', 'Hacia adelante peso mucho (TON), pero al revés no (NOT). ¿Qué palabra es?', '前から読むととても重い単位（TON）なのに、後ろから読むと否定（NOT）になる英単語は何？'],
    m: {
      type: 'lateral_choice', illustration: 'rock',
      options: [
        { vi: 'Chữ TON (1 tấn → NOT)', en: 'The word TON', es: 'La palabra TON', ja: 'TON（トン）' },
        { vi: 'Chữ STAR (ngôi sao)', en: 'The word STAR', es: 'La palabra STAR', ja: 'STAR' },
        { vi: 'Chữ IRON (sắt)', en: 'The word IRON', es: 'La palabra IRON', ja: 'IRON' },
        { vi: 'Chữ GOLD (vàng)', en: 'The word GOLD', es: 'La palabra GOLD', ja: 'GOLD' },
      ],
      correctIndex: 0,
    },
    h1: ['Một đơn vị đo khối lượng lớn bằng 1.000 kg.', 'A unit of weight equal to 1,000 kg.', 'Unidad de peso de 1.000 kg.', '1,000kgを表す重さの単位だよ。'],
    h2: ['T-O-N viết ngược lại thành N-O-T.', 'T-O-N spelled backwards is N-O-T.', 'T-O-N al revés es N-O-T.', 'T・O・N を逆さから読むと N・O・T！'],
    h3: ['Chọn Chữ TON.', 'Pick The word TON.', 'Elige La palabra TON.', '「TON」を選ぼう！'],
    e: ['TON (1 tấn) siêu nặng, đọc ngược là NOT (không)!', 'Forward: TON (heavy). Backwards: NOT!', '¡TON al revés es NOT!', 'TON（1トン）を逆から読めばNOT（〜ない）になる見事な言葉遊び！'],
  },
  // 72
  {
    diff: 'medium', cat: 'visual',
    t: ['Bàn cờ mini 3×3 + ô mở rộng', 'Count 4×4 Chess Squares', 'Cuadrados en 4×4', '4×4マスの中の正方形'],
    p: ['Trên bàn cờ vuông 4×4 ô (16 ô nhỏ), có TỔNG CỘNG bao nhiêu hình vuông mọi kích cỡ?', 'On a 4×4 square grid, how many total squares of ALL sizes exist?', 'En una cuadrícula de 4×4, ¿cuántos cuadrados de TODOS los tamaños hay?', '4×4のマス目の中に、あらゆるサイズの正方形は全部でいくつある？'],
    m: { type: 'visual_count', visualKind: 'chessboard_squares', variant: 0, correctAnswer: 30, min: 1, max: 60 },
    h1: ['Đừng chỉ đếm 16 ô nhỏ — hãy tính cả hình 2×2, 3×3 và 4×4!', 'Count 1×1, 2×2, 3×3, AND 4×4 squares!', 'Suma los de 1×1, 2×2, 3×3 y 4×4.', '1×1、2×2、3×3、4×4を全部足すよ！'],
    h2: ['Số lượng: 16 (1×1) + 9 (2×2) + 4 (3×3) + 1 (4×4).', 'Count: 16 + 9 + 4 + 1.', '16 + 9 + 4 + 1.', '4² ＋ 3² ＋ 2² ＋ 1² ＝ 16＋9＋4＋1！'],
    h3: ['Tổng bằng 30 hình vuông.', 'Total = 30 squares.', 'Total = 30 cuadrados.', '合計「30」個！'],
    e: ['16 + 9 + 4 + 1 = 30 hình vuông tất cả!', '4² + 3² + 2² + 1² = 30 total squares!', '¡16 + 9 + 4 + 1 = 30 cuadrados!', '16＋9＋4＋1＝30個の正方形が隠れています！'],
  },
  // 73
  {
    diff: 'medium', cat: 'riddle',
    t: ['Bất khả xâm phạm của bác sĩ', 'Who Is the Surgeon?', '¿Quién es el cirujano?', '外科医の正体'],
    p: ['Hai bố con bị tai nạn giao thông. Người bố không qua khỏi, cậu con trai được đưa vào phòng mổ. Bác sĩ phẫu thuật trưởng bước vào nhìn cậu bé và thốt lên: "Tôi không thể mổ cho thằng bé này — nó là con trai tôi!" Sao kỳ vậy?', 'A father and son are in a car crash. The father passes away, and the boy is rushed to surgery. The surgeon looks at him and says: "I cannot operate on this boy—he is my son!" How?', 'Un padre y su hijo sufren un accidente. El padre fallece y llevan al hijo a cirugía. El cirujano dice: "No puedo operar, ¡es mi hijo!" ¿Cómo es posible?', '父と子が交通事故に遭い、父は亡くなり、息子は手術室へ。執刀医は少年を見て叫んだ。「この子は私の息子だ、手術できない！」一体どういうこと？'],
    m: {
      type: 'lateral_choice', illustration: 'heart',
      options: [
        { vi: 'Bác sĩ là mẹ ruột của cậu bé', en: 'The surgeon is his mother', es: 'El cirujano es su madre', ja: '外科医は少年の母親だった' },
        { vi: 'Cậu bé có người anh sinh đôi', en: 'He is a twin', es: 'Tiene un gemelo', ja: '双子だった' },
        { vi: 'Bác sĩ nhận nhầm người', en: 'Mistaken identity', es: 'Error de identidad', ja: '人違いだった' },
        { vi: 'Bóng ma trong bệnh viện', en: 'A hospital ghost', es: 'Un fantasma', ja: '幽霊だった' },
      ],
      correctIndex: 0,
    },
    h1: ['Phá vỡ định kiến giới tính nghề nghiệp!', 'Challenge unconscious assumptions about who can be a surgeon!', 'Rompe los estereotipos de género.', '「外科医＝男性」という思い込みを捨てよう！'],
    h2: ['Bố cậu bé đã mất, vậy phụ huynh còn lại là ai?', 'If his father is gone, who else is his parent?', 'Si su padre falleció, ¿quién es su otro progenitor?', 'お父さんが亡くなったなら、もう1人の親は？'],
    h3: ['Bác sĩ phẫu thuật chính là Mẹ của cậu bé!', 'The surgeon is His mother!', '¡La cirujana es Su madre!', '外科医は「少年の母親」でした！'],
    e: ['Bác sĩ phẫu thuật trưởng chính là mẹ của cậu bé — một câu đố nổi tiếng về định kiến tư duy!', 'The surgeon is the boy’s mother!', '¡La cirujana es su madre!', 'とても有名な固定観念を問う名作クイズ。外科医は母親でした！'],
  },
  // 74
  {
    diff: 'medium', cat: 'action',
    t: ['Gõ chuông đúng nhịp', 'Five-Switch Symphony', 'Cinco interruptores', '5つのスイッチ回路'],
    p: ['Kích hoạt đúng tổ hợp nhị phân của số 21 (16 + 4 + 1) trên 5 công tắc!', 'Set the 5 binary switches to represent 21 (16 + 4 + 1)!', '¡Activa los interruptores binarios para formar 21 (16 + 4 + 1)!', '5つの2進数スイッチで「21」（16＋4＋1）を作ろう！'],
    m: {
      type: 'action_meter', mode: 'switches', targetShape: 'bell', requiredValue: 3, switchCount: 5,
      targetMask: [true, false, true, false, true],
      meterLabel: { vi: '16 - 8 - 4 - 2 - 1', en: '16 - 8 - 4 - 2 - 1', es: '16 - 8 - 4 - 2 - 1', ja: '16 - 8 - 4 - 2 - 1' },
    },
    h1: ['Các công tắc lần lượt có giá trị: 16, 8, 4, 2, 1.', 'Weights from left to right: 16, 8, 4, 2, 1.', 'Valores: 16, 8, 4, 2, 1.', '左から 16, 8, 4, 2, 1 の重みだよ。'],
    h2: ['21 = 16 + 4 + 1 → Bật công tắc #1, #3 và #5!', '21 = 16 + 4 + 1 → Switches #1, #3, #5 ON!', '16 + 4 + 1 = 21 → Enciende #1, #3 y #5.', '#1（16）、#3（4）、#5（1）をONにしよう！'],
    h3: ['Trạng thái: [ON, OFF, ON, OFF, ON].', 'Pattern: [ON, OFF, ON, OFF, ON].', 'Patrón: [ON, OFF, ON, OFF, ON].', '[ON, OFF, ON, OFF, ON]！'],
    e: ['16 + 4 + 1 = 21 (nhị phân 10101) chuẩn xác!', '10101 in binary equals 21!', '¡10101 en binario es 21!', '2進数 10101 ＝ 21 が見事完成しました！'],
  },
  // 75
  {
    diff: 'medium', cat: 'trick',
    t: ['Người không biết ướt', 'Cannot Be Burned or Drowned', 'Inmune al fuego', '火も水も恐れないもの'],
    p: ['Thứ gì không thể cháy trong lửa, cũng không thể chìm chết đuối dưới nước sâu?', 'What cannot be burned by fire and cannot be drowned by water?', '¿Qué no puede quemarse con fuego ni ahogarse en el agua?', '炎で燃やすことも、水に沈めて溺れさせることもできないものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'ice',
      options: [
        { vi: 'Tảng băng đá (nước đóng băng)', en: 'Ice', es: 'El hielo', ja: '氷' },
        { vi: 'Tờ giấy trắng', en: 'Paper', es: 'Papel', ja: '紙' },
        { vi: 'Cành cây khô', en: 'Dry wood', es: 'Madera seca', ja: '枯れ木' },
        { vi: 'Chiếc lông vũ', en: 'A feather', es: 'Una pluma', ja: '羽根' },
      ],
      correctIndex: 0,
    },
    h1: ['Khi gặp lửa nó chỉ đổi trạng thái thôi chứ không cháy thành tro.', 'Heat only changes its state of matter.', 'El calor solo cambia su estado.', '燃えて灰になることはなく、形が変わるだけだよ。'],
    h2: ['Nó bản chất chính là nước ở thể rắn!', 'It is literally frozen water!', '¡Es agua congelada!', '正体は水が凍ったもの！'],
    h3: ['Chọn Tảng băng đá.', 'Pick Ice.', 'Elige El hielo.', '「氷」を選ぼう！'],
    e: ['Băng gặp lửa thì tan thành nước, xuống nước cũng hòa làm nước — chẳng bao giờ cháy hay chết đuối!', 'Ice melts into water in fire and floats/melts in water!', '¡El hielo simplemente se vuelve agua!', '氷は火では水になり、水では溶けるだけで、燃えも溺れもしません！'],
  },
  // 76
  {
    diff: 'medium', cat: 'lock',
    t: ['Đố vui chữ số La Mã', 'Roman Numeral Trick', 'Números romanos', 'ローマ数字のトリック'],
    p: ['Nếu viết số 9 bằng chữ số La Mã (IX), chỉ cần thêm 1 nét chữ S ở phía trước thì biến thành số mấy?', 'Take the Roman numeral IX (9). Add one letter "S" in front of it to turn it into which number?', 'Toma el número romano IX (9) y pon una letra "S" delante para convertirlo en...', 'ローマ数字の「IX（9）」の前にアルファベットの「S」を1文字足すと、いくつになる？'],
    m: { type: 'lock_dial', clueDisplay: 'S + IX = ?', correctCode: '6', maxLength: 2 },
    h1: ['Hãy đọc từ tiếng Anh ghép được: S + I + X!', 'Read the English word formed: S + I + X!', 'Lee la palabra en inglés: S + I + X.', 'S ＋ IX ＝ SIX！'],
    h2: ['S-I-X trong tiếng Anh nghĩa là số mấy?', 'What number is SIX?', '¿Qué número es SIX?', 'SIXは日本語で数字のいくつ？'],
    h3: ['Đáp án là 6.', 'Answer: 6.', 'Respuesta: 6.', '答えは「6」！'],
    e: ['S + IX = SIX = 6! Màn kết hợp giữa La Mã và tiếng Anh cực hay!', 'S + IX spells SIX = 6!', '¡S + IX forma SIX = 6!', 'IXの前にSをつけると英語の「SIX（6）」になる鮮やかトリック！'],
  },
  // 77
  {
    diff: 'medium', cat: 'drag',
    t: ['Cân đối 21 kg', 'Exact Scale 21 kg', 'Balanza 21 kg', '21kgの絶妙バランス'],
    p: ['Chọn các quả cân đặt lên đĩa phải để đạt đúng 21 kg!', 'Pick weights for the right pan to reach exactly 21 kg!', '¡Elige pesas que sumen exactamente 21 kg!', '右のお皿でちょうど21kgになるように選ぼう！'],
    m: {
      type: 'drag_combine', mode: 'balance_scale', targetBalance: 21,
      items: [
        { id: 'w1', shape: 'chest', x: 0, y: 0, weight: 11, label: '11kg' },
        { id: 'w2', shape: 'rock', x: 0, y: 0, weight: 7, label: '7kg' },
        { id: 'w3', shape: 'book', x: 0, y: 0, weight: 4, label: '4kg' },
        { id: 'w4', shape: 'cake', x: 0, y: 0, weight: 3, label: '3kg' },
      ],
    },
    h1: ['Cần tổng cộng 21 kg từ các số 11, 7, 4, 3.', 'Combine numbers from 11, 7, 4, 3 to get 21.', 'Suma 21 usando 11, 7, 4, 3.', '11, 7, 4, 3 を組み合わせて21にしよう。'],
    h2: ['11 + 7 + 3 = 21!', '11 + 7 + 3 = 21!', '11 + 7 + 3 = 21!', '11 ＋ 7 ＋ 3 ＝ 21！'],
    h3: ['Chọn 11kg, 7kg và 3kg.', 'Select 11kg, 7kg, and 3kg.', 'Elige 11kg, 7kg y 3kg.', '11kg・7kg・3kg を選ぼう！'],
    e: ['11 + 7 + 3 = 21 kg cân bằng hoàn hảo!', '11 + 7 + 3 = 21 kg!', '¡11 + 7 + 3 = 21 kg!', '11＋7＋3＝21kg でピタリと合いました！'],
  },
  // 78
  {
    diff: 'medium', cat: 'riddle',
    t: ['Không tay không chân mở mọi cửa', 'Keys That Play No Song', 'Llave sin dientes', '音を出さない鍵'],
    p: ['Cái gì có tới hàng chục cái đầu ngón tay và hàng trăm đốt xương, nhưng chẳng có lấy một giọt máu hay nhịp tim nào?', 'What has a neck with no head, two arms with no hands, and hugs you tightly every winter?', '¿Qué tiene cuello sin cabeza, dos brazos sin manos y te abriga todo el invierno?', '首はあるのに頭がなく、両腕はあるのに手がなく、冬にあなたを温かく抱きしめてくれるものは何？'],
    m: {
      type: 'lateral_choice', illustration: 'hat',
      options: [
        { vi: 'Chiếc áo khoác / áo len', en: 'A sweater or coat', es: 'Un abrigo o suéter', ja: 'セーター・コート' },
        { vi: 'Cây đàn vĩ cầm', en: 'A violin', es: 'Un violín', ja: 'バイオリン' },
        { vi: 'Cái chai thủy tinh', en: 'A glass bottle', es: 'Una botella', ja: 'ガラス瓶' },
        { vi: 'Ngọn đèn bàn', en: 'A desk lamp', es: 'Una lámpara', ja: '卓上ランプ' },
      ],
      correctIndex: 0,
    },
    h1: ['Món đồ bạn mặc lên người mỗi khi trời rét.', 'Something you wear in cold weather.', 'Algo que te pones cuando hace frío.', '寒いときに身に着けるものだよ。'],
    h2: ['Nó có cổ áo và hai tay áo, nhưng chẳng có đầu hay bàn tay!', 'It has a collar (neck) and two sleeves (arms)!', '¡Tiene cuello y dos mangas!', '襟（首）と袖（腕）があるよね！'],
    h3: ['Chọn Chiếc áo khoác / áo len.', 'Pick A sweater or coat.', 'Elige Un abrigo o suéter.', '「セーター・コート」を選ぼう！'],
    e: ['Chiếc áo có cổ áo, tay áo để ôm giữ ấm cho bạn suốt mùa đông!', 'A coat has a neck and arms to keep you warm!', '¡El abrigo tiene cuello y mangas!', '服には首元と両袖がありますが、頭も手もありません！'],
  },
  // 79
  {
    diff: 'medium', cat: 'trick',
    t: ['Cái hộp nằm dưới', 'Bottom Box Secret', 'La caja oculta', '下敷きの真珠'],
    p: ['Tìm viên ngọc sáng! Gợi ý: đôi khi cái nhìn đầu tiên đánh lừa bạn — hãy dọn hộp giấy ra!', 'Find the shining gem! Hint: check behind the cardboard box!', '¡Busca la gema brillante! Mira detrás de la caja.', '光る宝石を見つけよう！箱の裏を調べてみて！'],
    m: {
      type: 'drag_combine', mode: 'move_aside_then_tap', backdrop: 'room',
      items: [
        { id: 'gem', shape: 'diamond', x: 30, y: 60, scale: 1.05 },
        { id: 'box', shape: 'box', x: 30, y: 60, scale: 1.55 },
        { id: 'chest', shape: 'chest', x: 75, y: 60, scale: 1.3 },
      ],
      sourceId: 'box', targetId: 'gem',
    },
    h1: ['Chiếc rương báu to bên phải chỉ là đồ giả trang trí thôi!', 'The chest on the right is empty!', 'El cofre de la derecha está vacío.', '右の豪華な宝箱はダミーだよ！'],
    h2: ['Kéo chiếc hộp giấy đơn giản ở bên trái sang một bên.', 'Drag the plain box on the left aside.', 'Mueve la caja de la izquierda a un lado.', '左の段ボール箱を横にどかしてみよう。'],
    h3: ['Chạm vào viên kim cương lấp lánh bên dưới.', 'Tap the diamond revealed underneath.', 'Toca el diamante descubierto.', '下から出てきた宝石をタップ！'],
    e: ['Đừng để chiếc rương sang trọng đánh lừa — kho báu nằm dưới hộp giấy!', 'Never judge a treasure by its chest — it hid under the plain box!', '¡El diamante estaba debajo de la caja simple!', '豪華な宝箱ではなく地味な箱の下に隠れていました！'],
  },
  // 80
  {
    diff: 'medium', cat: 'visual',
    t: ['Đồng hồ trong gương 4:30', 'Mirror Clock 4:30', 'Reloj en el espejo 4:30', '鏡の時計 4時30分'],
    p: ['Nhìn qua gương phẳng, kim đồng hồ chỉ 7:30. Hỏi giờ thật sự ngoài đời là mấy giờ (nhập phần GIỜ tròn hoặc HHMM — chỉ phần GIỜ 4)? Kiểm tra mặt đồng hồ gương!', 'In a mirror, an analog clock reads 7:30. What is the real HOUR shown (4 or 5)? Watch closely!', 'En el espejo el reloj marca 7:30. ¿Qué hora real es (solo la hora)?', '鏡に映った時計が7時30分を指しています。実際の時計は何時台（数字1桁）？'],
    m: { type: 'visual_count', visualKind: 'mirror_clock', variant: 4, correctAnswer: 4, min: 1, max: 12 },
    h1: ['Lấy 11 giờ 60 phút trừ đi 7 giờ 30 phút!', 'Subtract 7:30 from 11:60 (12:00)!', 'Resta 7:30 de 11:60 (12:00).', '11時60分（12時）から 7時30分 を引いてみよう！'],
    h2: ['11:60 − 7:30 = 4:30!', '11:60 − 7:30 = 4:30!', '11:60 − 7:30 = 4:30!', '11:60 − 7:30 ＝ 4:30！'],
    h3: ['Giờ thật là 4 giờ 30 → nhập số 4.', 'Real hour is 4 (:30) → enter 4.', 'La hora real es 4 → ingresa 4.', '実際の「時」は4時30分の「4」！'],
    e: ['Gương phản chiếu đối xứng qua trục 12-6 nên 7:30 ↔ 4:30!', 'Mirror symmetry across 12-6 flips 7:30 into 4:30!', '¡Simetría de espejo: 7:30 equivale a 4:30!', '鏡映しは12時と6時を軸に反転するため、7:30は実際の4:30になります！'],
  },
  // 81
  {
    diff: 'medium', cat: 'trick',
    t: ['Khói tàu điện tốc độ cao', 'Electric Train Smoke', 'Humo del tren eléctrico', '電車の煙の向き'],
    p: ['Một đoàn tàu ĐIỆN chạy thẳng về hướng Bắc với vận tốc 100 km/h, gió thổi từ Đông sang Tây 40 km/h. Hỏi khói tàu bay về hướng nào?', 'An ELECTRIC train speeds North at 100 km/h while wind blows West at 40 km/h. Which way does the smoke blow?', 'Un tren ELÉCTRICO va hacia el norte a 100 km/h y el viento sopla hacia el oeste a 40 km/h. ¿Hacia dónde va el humo?', '時速100kmで北へ走る「電気電車」があります。東から西へ風速40kmの風が吹いています。さて、煙はどの方角へ流れる？'],
    m: {
      type: 'lateral_choice', illustration: 'rocket',
      options: [
        { vi: 'Tàu điện KHÔNG CÓ khói!', en: 'Electric trains have NO smoke!', es: '¡Los trenes eléctricos no echan humo!', ja: '電車なので煙は出ない！' },
        { vi: 'Hướng Tây Nam', en: 'Southwest', es: 'Suroeste', ja: '南西' },
        { vi: 'Hướng Đông Bắc', en: 'Northeast', es: 'Noreste', ja: '北東' },
        { vi: 'Hướng Chính Nam', en: 'Due South', es: 'Directo al sur', ja: '真南' },
      ],
      correctIndex: 0,
    },
    h1: ['Đừng vội tính vectơ gió và vận tốc tàu!', 'Do NOT calculate wind vectors yet!', '¡No calcules vectores de viento todavía!', '風向きとスピードを計算しなくていいよ！'],
    h2: ['Chú ý loại phương tiện: tàu ĐIỆN!', 'Notice the word ELECTRIC!', 'Fíjate en la palabra ELÉCTRICO.', '「電気電車」という部分に注目！'],
    h3: ['Tàu điện không đốt than nên không có khói!', 'Electric trains produce zero smoke!', '¡Un tren eléctrico no produce humo!', '電車は煙を出さない！'],
    e: ['Bẫy kinh điển: tàu chạy bằng điện làm gì có ống khói!', 'Classic trick: electric trains do not emit smoke at all!', '¡Trampa clásica: el tren eléctrico no tiene humo!', '電車なのでそもそも煙は一切出ません！'],
  },
  // 82
  {
    diff: 'medium', cat: 'riddle',
    t: ['Đồng xu giả cổ đại', 'The 45 BC Coin', 'La moneda del 45 a.C.', '紀元前45年のコイン'],
    p: ['Một người khoe đào được đồng xu cổ khắc dòng chữ "45 BC" (45 Trước Công Nguyên). Vì sao khẳng định ngay 100% đó là đồ giả?', 'A dealer tries to sell an ancient coin stamped "45 BC". How do you know instantly it is fake?', 'Un vendedor ofrece una moneda grabada con "45 a.C.". ¿Cómo sabes al instante que es falsa?', '骨董商が「紀元前45年（45 BC）」と刻印された古代コインを売っています。なぜ一目で偽物とわかる？'],
    m: {
      type: 'lateral_choice', illustration: 'coin',
      options: [
        { vi: 'Người năm 45 TCN sao biết trước mốc Công Nguyên!', en: 'People in 45 BC did not count years as "BC"!', es: '¡Nadie en el 45 a.C. sabía qué era "a.C."!', ja: '紀元前45年の人が「紀元前」を知っているはずがない！' },
        { vi: 'Thời xưa chưa có vàng', en: 'Gold did not exist then', es: 'No existía el oro', ja: '昔は金が存在しなかった' },
        { vi: 'Đồng xu phải hình vuông', en: 'Ancient coins were square', es: 'Eran cuadradas', ja: '昔のコインは四角だった' },
        { vi: 'Số 45 quá lớn', en: '45 was not invented', es: 'No existía el 45', ja: '45という数字がなかった' },
      ],
      correctIndex: 0,
    },
    h1: ['Nghĩ xem chữ "BC" (Trước Công Nguyên) nghĩa là gì.', 'Think about what "BC" (Before Christ) means.', 'Piensa qué significa "antes de Cristo".', '「紀元前（BC）」の意味を考えよう。'],
    h2: ['Sao người sống trước Công Nguyên lại biết đếm ngược 45 năm trước sự kiện tương lai?', 'How could minters count backward toward an event 45 years in their future?', '¿Cómo iban a contar hacia atrás antes de que ocurriera?', '未来の出来事から逆算して年号を刻めるわけがないよね！'],
    h3: ['Chọn đáp án đầu tiên về mốc Công Nguyên!', 'Pick People in 45 BC did not count years as "BC"!', 'Elige ¡Nadie en el 45 a.C. sabía qué era "a.C."!', '最初の選択肢を選ぼう！'],
    e: ['Thuật ngữ "BC" chỉ có hàng thế kỷ sau — đồng xu cổ thật không thể tự khắc "45 BC"!', 'Nobody in 45 BC could stamp a label counting down to a future era!', '¡El término "a.C." se inventó siglos después!', '紀元前という呼び方は後世のものなので、当時「45 BC」と刻むことは不可能です！'],
  },
  // 83
  {
    diff: 'medium', cat: 'logic',
    t: ['Ma trận 2 chạm đối xứng', 'Two-Tap Symmetry', 'Simetría en dos toques', '2タップで全点灯'],
    p: ['Chạm ĐÚNG 2 ô trên ma trận Lights-Out để thắp sáng toàn bộ 9 ô!', 'Tap just TWO tiles to turn ALL 9 tiles ON!', '¡Toca solo DOS casillas para encender las 9!', '2回だけタップして全9マスを点灯させよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'lights_out',
      gridSize: 3,
      // Tap 0 (0,1,3) AND 8 (5,7,8) => all except 2,4,6 => [false, false, true, false, true, false, true, false, false]
      initialGrid: [false, false, true, false, true, false, true, false, false],
      allOnRequired: true,
    },
    h1: ['Để ý hai góc đối xứng (trên-trái và dưới-phải)!', 'Look at the two opposite corners: top-left and bottom-right!', 'Mira las esquinas opuestas: arriba-izquierda y abajo-derecha.', '対角線上の2つの角（左上と右下）に注目！'],
    h2: ['Chạm góc trên-trái sẽ sửa 3 ô quanh góc đó; chạm góc dưới-phải sửa 3 ô còn lại!', 'Top-left fixes its corner trio; bottom-right fixes the remaining trio!', 'Cada esquina corrige sus 3 casillas.', '左上と右下の角がそれぞれ3マスずつを覆っているよ！'],
    h3: ['Chạm ô (1,1) và ô (3,3).', 'Tap top-left and bottom-right tiles.', 'Toca arriba-izquierda y abajo-derecha.', '「左上」と「右下」をタップしよう！'],
    e: ['Hai góc đối diện phối hợp thắp sáng cả 9 ô chỉ trong 2 chạm!', 'Two opposite corners lit the entire grid!', '¡Dos esquinas opuestas bastaron!', '対角の2角をタップするだけで全9マスが点灯しました！'],
  },
  // 84
  {
    diff: 'medium', cat: 'riddle',
    t: ['Chiếc cầu chỉ có chữ', 'Bridge of Stories', 'Puente de palabras', '水のない場所にかかる橋'],
    p: ['Một con sông rộng mênh mông chảy xiết, không có cầu, không có thuyền. Hai người đứng bên bờ đối diện nhau cùng muốn sang sông bằng cách nào vẫn sang được?', 'Two men stand on opposite banks of a wide river with no bridge and no boat. Both want to cross, and both succeed easily! How?', 'Dos hombres en orillas opuestas de un río sin puente ni barca logran cruzar fácilmente. ¿Cómo?', '橋も船もない大きな川の向かい合う岸に2人の男が立っています。2人とも対岸に渡りたいと思い、見事に渡りきりました。どうやって？'],
    m: {
      type: 'lateral_choice', illustration: 'water',
      options: [
        { vi: 'Mỗi người ở một bờ riêng nên cả hai đã ở "bờ bên kia" của nhau rồi... đợi đã: hay sông đóng băng!', en: 'Wait—they were on opposite sides, or a hidden boat? No: each crossed to the other’s bank, wait: the river was frozen!', es: '¡El río estaba helado y caminaron sobre el hielo!', ja: '川が凍っていたから氷の上を歩いて渡った！' },
        { vi: 'Họ gọi trực thăng cứu hộ', en: 'They called a helicopter', es: 'Llamaron a un helicóptero', ja: 'ヘリコプターを呼んだ' },
        { vi: 'Họ bơi ngược lên nguồn cạn', en: 'They walked 100 km', es: 'Caminaron 100 km', ja: '100km歩いた' },
        { vi: 'Không thể qua được', en: 'Impossible', es: 'Imposible', ja: '不可能' },
      ],
      correctIndex: 0,
    },
    h1: ['Mùa đông ở vùng lạnh thì mặt nước sông biến thành gì?', 'In freezing winter, water turns into...', 'En invierno el agua se convierte en...', '真冬になると川の水はどうなる？'],
    h2: ['Mặt sông đóng băng dày đặc để đi bộ qua được!', 'Solid ice lets both walk straight across!', '¡Se congela y pueden cruzar caminando!', '分厚い氷が張って歩いて渡れるようになるよ！'],
    h3: ['Chọn Sông đóng băng!', 'Pick Frozen river!', 'Elige ¡El río estaba helado!', '最初の選択肢を選ぼう！'],
    e: ['Khi dòng sông đóng băng cứng, cả hai chỉ việc đi bộ qua mặt băng thôi!', 'When the river freezes solid, walking across is a breeze!', '¡El río congelado sirve de puente natural!', '川が凍っていれば、橋も船もなしで普通に歩いて渡れます！'],
  },
  // 85
  {
    diff: 'medium', cat: 'trick',
    t: ['Từ điển trước chữ cái', 'Dictionary Order', 'Orden del diccionario', '辞書の順番の謎'],
    p: ['Ở nơi nào trên thế giới mà "Hôm nay" lại đến TRƯỚC "Hôm qua", và "Thành công" lại đứng TRƯỚC "Cố gắng" (theo tiếng Anh: Today before Yesterday / Success before Work)?', 'Where does TODAY come before YESTERDAY, and SUCCESS always comes before WORK?', '¿Dónde viene "Hoy" (Today) antes que "Ayer" (Yesterday) y "Éxito" (Success) antes que "Trabajo" (Work)?', '「成功（Success）」が「努力（Work）」より先に来て、「今日（Today）」が「昨日（Yesterday）」より先に来る場所はどこ？'],
    m: {
      type: 'lateral_choice', illustration: 'book',
      options: [
        { vi: 'Trong cuốn từ điển', en: 'In a dictionary', es: 'En un diccionario', ja: '辞書の中' },
        { vi: 'Trên hành tinh Sao Kim', en: 'On Venus', es: 'En Venus', ja: '金星' },
        { vi: 'Trong máy du hành thời gian', en: 'A time machine', es: 'Una máquina del tiempo', ja: 'タイムマシン' },
        { vi: 'Ở tương lai năm 3000', en: 'The year 3000', es: 'El año 3000', ja: '西暦3000年' },
      ],
      correctIndex: 0,
    },
    h1: ['Xếp theo bảng chữ cái A-B-C: chữ S đứng trước chữ W, chữ T đứng trước chữ Y!', 'Check alphabetical order: S before W, T before Y!', 'Orden alfabético: S antes de W, T antes de Y.', 'アルファベット順に注目！SはWより前、TはYより前！'],
    h2: ['Cuốn sách nào sắp xếp mọi từ ngữ theo thứ tự A-B-C?', 'Which book lists words alphabetically?', '¿Qué libro ordena palabras alfabéticamente?', '言葉をAからZ順に並べている本といえば？'],
    h3: ['Chọn Trong cuốn từ điển.', 'Pick In a dictionary.', 'Elige En un diccionario.', '「辞書の中」を選ぼう！'],
    e: ['Chỉ trong cuốn từ điển (theo thứ tự bảng chữ cái), chữ S (Success) mới đứng trước chữ W (Work)!', 'In a dictionary, S precedes W and T precedes Y alphabetically!', '¡Solo en el diccionario por orden alfabético!', 'アルファベット順の辞書の中だけでの話でした！'],
  },
  // 86
  {
    diff: 'medium', cat: 'drag',
    t: ['Tìm quả trứng vàng', 'Golden Egg Under Cloud', 'Huevo bajo las nubes', '雲の下のタマゴ'],
    p: ['Chú gà mẹ lạc mất quả trứng rồi! Tìm quả trứng đang ẩn giấu sau đám mây nhé!', 'Mother hen lost her egg! Clear away the clouds to find it!', '¡Se perdió el huevo! Aparta las nubes para encontrarlo.', 'タマゴがどこかへ消えちゃった！雲をどかして探そう！'],
    m: {
      type: 'drag_combine', mode: 'move_aside_then_tap', backdrop: 'day',
      items: [
        { id: 'egg', shape: 'egg', x: 70, y: 40, scale: 1.1 },
        { id: 'cloud1', shape: 'cloud', x: 70, y: 40, scale: 1.55 },
        { id: 'cloud2', shape: 'raincloud', x: 28, y: 40, scale: 1.35 },
      ],
      sourceId: 'cloud1', targetId: 'egg',
    },
    h1: ['Đám mây bên phải che kín cả một vùng bầu trời.', 'Look closely at the fluffy cloud on the right.', 'Mira la nube blanca de la derecha.', '右側の白い雲が怪しいよ！'],
    h2: ['Kéo đám mây trắng bên phải sang chỗ khác.', 'Drag the white cloud aside.', 'Arrastra la nube blanca a un lado.', '白い雲をドラッグしてどかしてみよう。'],
    h3: ['Chạm vào quả trứng khi thấy nó hiện ra.', 'Tap the egg once uncovered.', 'Toca el huevo al descubrirlo.', '出てきたタマゴをタップしよう！'],
    e: ['Quả trứng nằm ngoan ngoãn ngay sau đám mây trắng!', 'Safe and sound behind the fluffy cloud!', '¡Estaba detrás de la nube blanca!', 'ふわふわの雲の後ろにしっかり隠れていました！'],
  },
  // 87
  {
    diff: 'medium', cat: 'lock',
    t: ['Mã số 3 ô tròn', 'Count Circles in Digits', 'Círculos en los números', '数字の「丸」の数'],
    p: ['Quy luật ẩn: 8809 = 6, 7111 = 0, 6666 = 4, 9313 = 1. Vậy 6880 = ?', 'Hidden rule: 8809 = 6, 7111 = 0, 6666 = 4, 9313 = 1. What is 6880 = ?', 'Regla oculta: 8809 = 6, 7111 = 0, 6666 = 4, 9313 = 1. ¿Cuánto es 6880?', '法則を見つけよう：8809=6、7111=0、6666=4、9313=1。では 6880 ＝ ？'],
    m: { type: 'lock_dial', clueDisplay: '8809→6 · 6666→4 · 6880→?', correctCode: '6', maxLength: 2 },
    h1: ['Đừng làm phép cộng hay nhân! Đếm số vòng tròn khép kín trong các chữ số!', 'Count the closed loops (circles) inside each digit!', 'Cuenta los círculos cerrados dentro de los dígitos.', '計算ではなく、数字の中にある「閉じた丸（輪）」の数を数えよう！'],
    h2: ['Số 6 có 1 vòng, số 8 có 2 vòng, số 0 có 1 vòng.', '6 has 1 loop, 8 has 2 loops, 0 has 1 loop.', 'El 6 tiene 1, el 8 tiene 2, el 0 tiene 1.', '6は1個、8は2個、0は1個の輪があるよ！'],
    h3: ['6(1) + 8(2) + 8(2) + 0(1) = 6.', '1 + 2 + 2 + 1 = 6.', '1 + 2 + 2 + 1 = 6.', '1 ＋ 2 ＋ 2 ＋ 1 ＝ 6！'],
    e: ['Đếm số vòng tròn khép kín: 6 (1) + 8 (2) + 8 (2) + 0 (1) = 6!', 'Counting closed loops in 6880 gives 1 + 2 + 2 + 1 = 6!', '¡Total de bucles cerrados = 6!', '幼児でもすぐ解けると言われる「丸の数」クイズ：1+2+2+1=6 です！'],
  },
  // 88
  {
    diff: 'medium', cat: 'riddle',
    t: ['Ba người dưới 1 chiếc ô', 'Three Under One Umbrella', 'Tres bajo un paraguas', '1本の傘の下に3人'],
    p: ['Có 3 người trưởng thành cùng đi bộ dưới 1 chiếc ô nhỏ xíu, thế mà không một ai bị ướt chút nào. Sao kỳ lạ vậy?', 'Three full-grown adults walk together under a single tiny umbrella, yet nobody gets wet! How is that possible?', 'Tres adultos caminan bajo un paraguas diminuto y ninguno se moja. ¿Cómo es posible?', 'とても小さな1本の傘の下に大人3人が入って歩いているのに、誰一人として全く濡れませんでした。なぜ？'],
    m: {
      type: 'lateral_choice', illustration: 'umbrella',
      options: [
        { vi: 'Trời lúc đó không hề mưa!', en: 'It was not raining!', es: '¡No estaba lloviendo!', ja: '雨が降っていなかったから！' },
        { vi: 'Chiếc ô có phép thuật', en: 'A magic umbrella', es: 'Paraguas mágico', ja: '魔法の傘だった' },
        { vi: 'Họ đứng xếp chồng lên nhau', en: 'Standing on shoulders', es: 'Uno sobre otro', ja: '肩車していた' },
        { vi: 'Họ mặc áo giáp không thấm', en: 'Waterproof armor', es: 'Armadura impermeable', ja: '防水スーツを着ていた' },
      ],
      correctIndex: 0,
    },
    h1: ['Đọc lại đề bài xem có chữ nào nói trời đang mưa không?', 'Did the puzzle ever say it was raining?', '¿Acaso el texto decía que llovía?', '問題文に「雨が降っていた」と書いてあったかな？'],
    h2: ['Người ta vẫn có thể che ô đi dạo lúc trời nắng ráo mà!', 'People sometimes carry umbrellas for shade on sunny days!', '¡Se puede llevar paraguas para el sol!', '日傘として晴れの日に差していたのかも！'],
    h3: ['Chọn Trời lúc đó không hề mưa!', 'Pick It was not raining!', 'Elige ¡No estaba lloviendo!', '「雨が降っていなかったから！」を選ぼう！'],
    e: ['Đơn giản vì lúc đó trời nắng ráo, không hề có giọt mưa nào!', 'It simply was not raining at all!', '¡No caía ni una gota de lluvia!', 'そもそも雨が降っていなければ濡れるわけがありません！'],
  },
  // 89
  {
    diff: 'medium', cat: 'logic',
    t: ['Thứ tự từ bé đến lớn: Thời gian', 'Time Unit Ladder', 'Unidades de tiempo', '時間の単位を短い順に'],
    p: ['Sắp xếp 4 mốc thời gian từ NGẮN NHẤT đến DÀI NHẤT!', 'Sort these four spans of time from SHORTEST to LONGEST!', '¡Ordena estas medidas de tiempo de MENOR a MAYOR!', '次の4つの時間表現を「短い順」に並べ替えよう！'],
    m: {
      type: 'order_sort',
      items: [
        { id: 'century', shape: 'planet', label: { vi: '1 Thế kỷ', en: '1 Century', es: '1 Siglo', ja: '1世紀' } },
        { id: 'week', shape: 'book', label: { vi: '168 Giờ', en: '168 Hours', es: '168 Horas', ja: '168時間' } },
        { id: 'day', shape: 'sun', label: { vi: '1,440 Phút', en: '1,440 Minutes', es: '1,440 Minutos', ja: '1,440分' } },
        { id: 'month', shape: 'moon', label: { vi: '1 Tháng Hai', en: '1 February', es: '1 Febrero', ja: '2月（1ヶ月）' } },
      ],
      correctOrder: ['day', 'week', 'month', 'century'],
    },
    h1: ['1,440 phút = 24 giờ = 1 ngày!', '1,440 minutes = 1 day!', '1.440 minutos = 1 día.', '1,440分 ＝ 24時間（1日）！'],
    h2: ['168 giờ = 7 ngày = 1 tuần!', '168 hours = 7 days = 1 week!', '168 horas = 1 semana.', '168時間 ＝ 7日間（1週間）！'],
    h3: ['Thứ tự: 1,440 Phút (1 ngày) → 168 Giờ (1 tuần) → 1 Tháng Hai → 1 Thế kỷ.', 'Order: 1,440 Min → 168 Hr → 1 Feb → 1 Century.', 'Orden: 1.440 Min → 168 H → Febrero → Siglo.', '1,440分 → 168時間 → 2月 → 1世紀！'],
    e: ['1 ngày (1,440 phút) < 1 tuần (168 giờ) < 1 tháng Hai (28 ngày) < 1 thế kỷ (100 năm)!', '1 day < 1 week < February < 1 century!', '¡Día < Semana < Febrero < Siglo!', '単位を揃えると 1日 ＜ 1週間 ＜ 2月 ＜ 1世紀 とスッキリ並びます！'],
  },
  // 90
  {
    diff: 'medium', cat: 'trick',
    t: ['Chai thủy tinh kỳ diệu', 'Coin Inside Corked Bottle', 'Moneda en la botella', 'コルク栓を動かさずにコインを？'],
    p: ['Có một đồng xu nằm trong chiếc chai thủy tinh được nút chặt bằng nút bần. Làm sao lấy được đồng xu ra ngoài mà KHÔNG làm vỡ chai và KHÔNG rút nút bần ra?', 'A coin sits inside a glass bottle sealed tightly with a cork. How can you get the coin out without breaking the glass or pulling out the cork?', 'Una moneda está en una botella tapada con un corcho. ¿Cómo sacarla sin romper la botella ni sacar el corcho?', 'コルク栓でしっかり蓋をしたガラス瓶の中にコインが入っています。瓶を割らず、コルクを引き抜かずにコインを取り出す方法は？'],
    m: {
      type: 'lateral_choice', illustration: 'coin',
      options: [
        { vi: 'Đẩy nút bần lọt vào bên trong chai', en: 'Push the cork into the bottle', es: 'Empujar el corcho hacia adentro', ja: 'コルクを瓶の中に押し込む' },
        { vi: 'Lắc mạnh cho xu tự xuyên kính', en: 'Shake until it phases through', es: 'Agitar hasta que atraviese', ja: '激しく振って通り抜けさせる' },
        { vi: 'Nung chảy đồng xu thành nước', en: 'Melt the coin', es: 'Fundir la moneda', ja: 'コインを溶かす' },
        { vi: 'Không có cách nào cả', en: 'Impossible', es: 'Imposible', ja: '不可能' },
      ],
      correctIndex: 0,
    },
    h1: ['Đề cấm "rút nút bần ra" chứ đâu cấm làm gì khác với nút bần?', 'You cannot pull the cork OUT — what other direction can it move?', 'No puedes sacar el corcho, pero ¿en qué otra dirección cabe?', '「引き抜く」のがダメなら、逆の方向に動かせば？'],
    h2: ['Nút bần mềm hơn thủy tinh, ấn mạnh xuống là nó rơi tọt vào lòng chai!', 'Just push the cork INWARD into the bottle!', '¡Empuja el corcho hacia adentro!', 'コルクを瓶の中へ押し込めば口が空くよね！'],
    h3: ['Chọn Đẩy nút bần lọt vào bên trong chai.', 'Pick Push the cork into the bottle.', 'Elige Empujar el corcho hacia adentro.', '「コルクを瓶の中に押し込む」を選ぼう！'],
    e: ['Chỉ cần ấn nút bần rơi vào trong chai là dốc ngược đồng xu ra ngay được!', 'Push the cork inside, then tip the coin right out!', '¡Al empujar el corcho adentro, la moneda sale fácil!', '引き抜くのが禁止なら「押し込む」ことで見事口が開きます！'],
  },
  // 91
  {
    diff: 'medium', cat: 'action',
    t: ['Bắt quả bom trước khi nổ', 'Tap 18 Quick Sparks', '18 chispas rápidas', '18連打でエネルギー充填'],
    p: ['Đoạn dây dẫn đang thiếu năng lượng! Chạm nhanh 18 lần vào viên kim cương để kích hoạt cầu ánh sáng!', 'Tap the diamond 18 times to supercharge the light bridge!', '¡Toca el diamante 18 veces para cargar el puente de luz!', 'ダイヤモンドを18回素早くタップして光の橋を架けよう！'],
    m: {
      type: 'action_meter', mode: 'multi_tap', targetShape: 'diamond', resultShape: 'star', requiredValue: 18,
      meterLabel: { vi: 'Năng lượng ánh sáng', en: 'Prism Charge', es: 'Carga de luz', ja: '光のチャージ' },
    },
    h1: ['Chạm liên tiếp thật nhanh vào biểu tượng kim cương.', 'Tap the diamond rapidly 18 times.', 'Toca el diamante 18 veces.', 'ダイヤを連打してメーターをいっぱいにしよう！'],
    h2: ['Thanh tiến trình sẽ đầy 100% ở lần chạm thứ 18.', 'It reaches 100% at tap #18.', 'Llega al 100% en el toque 18.', '18回目で100%になるよ。'],
    h3: ['Chạm đủ 18 lần.', 'Tap 18 times.', '18 toques.', '18回タップ！'],
    e: ['Năng lượng lấp lánh đã khai thông cây cầu ánh sáng!', 'Prism supercharged at 100%!', '¡Puente de luz activado!', '見事満タンになって光の橋が開通しました！'],
  },
  // 92
  {
    diff: 'medium', cat: 'riddle',
    t: ['Chú chó qua sông không ướt', 'Dry Dog Crosses River', 'Perro seco en el río', '濡れずに川を渡った犬'],
    p: ['Một con chó đang đứng bên này sông thì chủ gọi từ bờ bên kia. Con chó chạy ngay qua sông sang với chủ mà không hề bơi, không dùng cầu, không đi đò — và lông chẳng ướt tẹo nào! Vì sao?', 'A dog stands on one side of a river, and its owner calls from the opposite bank. The dog runs right across without getting wet, using no bridge or boat! Why?', 'Un perro cruza un río hacia su dueño sin nadar, sin puente ni barca, y no se moja ni un pelo. ¿Por qué?', '犬が川の反対側にいる飼い主に呼ばれて、橋も船も使わず泳ぎもせず渡りきりました。もちろん毛も濡れていません。なぜ？'],
    m: {
      type: 'lateral_choice', illustration: 'dog',
      options: [
        { vi: 'Con sông lúc đó đã cạn khô nước', en: 'The river was completely dry', es: 'El río estaba seco', ja: '川が干上がって水が無かったから' },
        { vi: 'Chú chó biết bay lượn', en: 'The dog can fly', es: 'El perro vuela', ja: '犬が空を飛んだから' },
        { vi: 'Chú chó đi tàu ngầm', en: 'A mini submarine', es: 'En submarino', ja: '潜水艦に乗った' },
        { vi: 'Nó chạy trên lá sen', en: 'On lily pads', es: 'Sobre nenúfares', ja: 'ハスの葉の上を走った' },
      ],
      correctIndex: 0,
    },
    h1: ['Không phải câu chuyện viễn tưởng đâu — nghĩ đến thời tiết mùa khô!', 'Real-world explanation — think of a drought season!', 'Explicación real: ¡piensa en la sequía!', 'SFじゃないよ！乾季の川を想像してみて！'],
    h2: ['Nếu lòng sông không có một giọt nước nào thì sao?', 'What if there is no water in the riverbed at all?', '¿Y si no había nada de agua en el cauce?', 'もし川に一滴も水が流れていなかったら？'],
    h3: ['Chọn Con sông lúc đó đã cạn khô nước.', 'Pick The river was completely dry.', 'Elige El río estaba seco.', '「川が干上がって水が無かったから」を選ぼう！'],
    e: ['Dòng sông cạn khô vào mùa hạn thì chú chó cứ chạy băng qua lòng sông thôi!', 'A dry riverbed lets the dog sprint straight across!', '¡Al estar seco el río cruzó corriendo!', '水がない枯れ川なら、犬がそのまま走って渡っても全く濡れません！'],
  },
  // 93
  {
    diff: 'medium', cat: 'visual',
    t: ['Tổ ong lục giác', 'Honeycomb Hexagons', 'Panal hexagonal', 'ハチの巣の六角形'],
    p: ['Đếm xem cụm tổ ong này có tất cả bao nhiêu hình lục giác đều hoàn chỉnh?', 'How many complete hexagon cells make up this honeycomb cluster?', '¿Cuántos hexágonos completos forman este panal?', 'このハチの巣のイラストには全部でいくつの六角形がある？'],
    m: { type: 'visual_count', visualKind: 'hex_honeycomb', variant: 2, correctAnswer: 7, min: 1, max: 20 },
    h1: ['Đếm từ ô trung tâm trước, rồi đếm vòng xung quanh nó.', 'Start from the center cell and count the surrounding ring.', 'Empieza por el centro y cuenta el anillo exterior.', '真ん中の1個と、その周りを囲む六角形を数えよう！'],
    h2: ['1 ô ở chính giữa + 6 ô bao quanh.', '1 center cell + 6 outer cells.', '1 central + 6 alrededor.', '真ん中1個 ＋ 周りに6個！'],
    h3: ['1 + 6 = 7 hình lục giác.', '1 + 6 = 7 hexagons.', '1 + 6 = 7 hexágonos.', '答えは「7」個！'],
    e: ['Cấu trúc tổ ong đối xứng hoàn hảo gồm 1 ô tâm + 6 ô xung quanh = 7!', '1 center + 6 surrounding = 7 honeycomb cells!', '¡1 + 6 = 7 hexágonos!', '真ん中1＋周囲6＝合計7個の六角形で構成されています！'],
  },
  // 94
  {
    diff: 'medium', cat: 'trick',
    t: ['Cơn ác mộng đồng hồ', 'Missing Hour Trick', 'La hora que falta', '24時間じゃなくなる日'],
    p: ['Bạn hẹn 3 viên thuốc uống cách nhau mỗi 30 phút. Hỏi từ lúc uống viên thứ nhất đến lúc uống viên cuối cùng hết tổng cộng bao nhiêu phút?', 'A doctor gives you 3 pills and tells you to take one every 30 minutes. How many minutes will the 3 pills last from the first to the last?', 'Un médico te da 3 pastillas para tomar una cada 30 minutos. ¿Cuántos minutos pasan de la primera a la última?', '医者から「30分おきに1錠ずつ飲んでください」と3錠の薬をもらいました。1錠目を飲んでから3錠目を飲み終えるまで何分かかる？'],
    m: { type: 'lock_dial', clueDisplay: '💊 1st → 30m → 💊 2nd → 30m → 💊 3rd = ?', correctCode: '60', maxLength: 3 },
    h1: ['Không phải 3 × 30 = 90 phút đâu!', 'It is NOT 3 × 30 = 90 minutes!', '¡No son 90 minutos!', '3 × 30 ＝ 90分 ではないよ！'],
    h2: ['Bạn uống viên thứ 1 ngay tại phút 0! Sau 30 phút uống viên 2; sau 30 phút nữa uống viên 3.', 'Take Pill 1 at minute 0, Pill 2 at 30 min, Pill 3 at 60 min!', 'Pastilla 1 en min 0, la 2 en min 30 y la 3 en min 60.', '0分に1錠目、30分に2錠目、そして3錠目は…'],
    h3: ['Tổng thời gian là 60 phút.', 'Total duration: 60 minutes.', 'Total: 60 minutos.', '答えは「60」分！'],
    e: ['3 viên chỉ có 2 khoảng nghỉ 30 phút → Tổng đúng 60 phút (1 tiếng)!', '3 pills only have 2 intervals of 30 minutes = 60 minutes!', '¡Solo hay 2 intervalos de 30 min = 60 min!', '1錠目を飲んだ時点がスタートなので、間は2回＝60分で飲み終わります！'],
  },
  // 95
  {
    diff: 'medium', cat: 'logic',
    t: ['Tích số nguyên tố 105', 'Prime Product 105', 'Producto 105', '積105の組み合わせ'],
    p: ['Chọn đúng 3 ô số sao cho TÍCH (phép nhân) của 3 số đó bằng đúng 105!', 'Pick exactly 3 tiles whose PRODUCT equals 105!', '¡Elige exactamente 3 casillas cuyo PRODUCTO sea 105!', 'ちょうど3枚のパネルを選んで「掛け算」の答えを「105」にしよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'magic_sum',
      gridSize: 3,
      initialGrid: [false, false, false, false, false, false, false, false, false],
      tileLabels: ['2', '3', '4', '5', '6', '7', '8', '9', '11'],
      requiredCount: 3,
      targetProduct: 105,
    },
    h1: ['Phân tích 105 thành thừa số nguyên tố!', 'Factor 105 into primes!', 'Factoriza 105 en primos.', '105を素因数分解してみよう！'],
    h2: ['105 chia hết cho 5: 105 = 5 × 21 = 3 × 5 × 7.', '105 = 5 × 21 = 3 × 5 × 7.', '105 = 3 × 5 × 7.', '105 ＝ 3 × 5 × 7 だよ！'],
    h3: ['Chọn 3 ô: 3, 5, 7 rồi nhấn Kiểm tra.', 'Pick tiles 3, 5, and 7, then Check.', 'Elige 3, 5 y 7 y comprueba.', '「3」「5」「7」の3つを選んで確認！'],
    e: ['3 × 5 × 7 = 105 — phân tích thừa số nguyên tố siêu gọn!', '3 × 5 × 7 = 105!', '¡3 × 5 × 7 = 105!', '3×5×7＝105 がピタリと一致しました！'],
  },
  // 96
  {
    diff: 'hard', cat: 'trick',
    t: ['Chạm chữ ĐÔI BẠN? Không — chữ GIỮA!', 'The Secret Word Inside', 'Palabra escondida', '文章トリック上級'],
    p: ['Hãy bấm vào ngôi sao sáng — KHOAN ĐÃ, nhìn kỹ xem: câu hỏi bảo "Đừng tin mấy ngôi sao, hãy chạm vào CHÍNH GIỮA của dấu chấm hỏi" hay bấm chữ "CHỮ"? Bấm từ "GIẤU" nhé!', 'All stars on stage are cursed! Break the spell by tapping the word SPELL inside the prompt!', '¡Las estrellas están malditas! Rompe el hechizo tocando la palabra HECHIZO arriba.', '下の星はすべて偽物！問題文の中にある「呪文」という言葉をタップしよう！'],
    m: {
      type: 'scene_tap', backdrop: 'night',
      tapPromptWord: { vi: 'GIẤU', en: 'SPELL', es: 'HECHIZO', ja: '呪文' },
      objects: [
        { id: 's1', shape: 'star', x: 25, y: 45, scale: 1.2, decoy: true },
        { id: 's2', shape: 'star', x: 50, y: 60, scale: 1.35, decoy: true },
        { id: 's3', shape: 'star', x: 75, y: 45, scale: 1.2, decoy: true },
      ],
    },
    h1: ['Cả ba ngôi sao trên bầu trời đêm đều là bẫy.', 'All three stars below are decoys.', 'Las tres estrellas son trampas.', '夜空の星は3つともダミーだよ。'],
    h2: ['Chạm vào từ khóa in hoa ngay trong phần đề bài!', 'Tap the uppercase word in the question sentence!', 'Toca la palabra en mayúsculas en la pregunta.', '問題文の文字を直接タップしよう！'],
    h3: ['Chạm vào chữ GIẤU (en: SPELL) ở cuối câu hỏi.', 'Tap SPELL in the prompt.', 'Toca HECHIZO en la pregunta.', '問題文の「呪文」をタップ！'],
    e: ['Đừng để những ngôi sao lấp lánh làm bạn mất tập trung!', 'You ignored the shiny stars and solved the word spell!', '¡Ignoraste las estrellas trampa!', '輝く星に惑わされず問題文を見抜きました！'],
  },
  // 97
  {
    diff: 'hard', cat: 'riddle',
    t: ['Cây cầu gánh 2 tấn', 'The 2-Ton Bridge Mystery', 'Puente de 2 toneladas', '重さ2トン制限の橋'],
    p: ['Một cây cầu chịu tải tối đa đúng 2000 kg. Chiếc xe tải nặng đúng 2000 kg đang chạy qua giữa cầu thì một chú chim sẻ nặng 30 gram đậu lên nóc xe... nhưng cầu VẪN KHÔNG SẬP! Tại sao?', 'A bridge holds max 2,000 kg. A 2,000 kg truck crosses the center when a 30g bird lands on the cab—yet the bridge does NOT collapse! How?', 'Un puente soporta máximo 2.000 kg. Un camión de 2.000 kg va por el centro y se posa un pájaro de 30g, pero el puente NO cae. ¿Por qué?', '最大耐荷重2,000kgの橋を、ちょうど2,000kgのトラックが渡っています。橋の中央で30gの小鳥が車の上に止まったのに橋は落ちませんでした。なぜ？'],
    m: {
      type: 'lateral_choice', illustration: 'car',
      options: [
        { vi: 'Xe đã đốt hết hơn 30g nhiên liệu từ đầu cầu!', en: 'The truck burned over 30g of fuel crossing!', es: '¡El camión quemó más de 30g de combustible!', ja: 'トラックが走る間に30g以上の燃料を消費したから！' },
        { vi: 'Con chim bay lơ lửng không trọng lượng', en: 'Zero-gravity bird', es: 'Pájaro sin peso', ja: '無重力の鳥だった' },
        { vi: 'Cây cầu tự tăng độ cứng', en: 'Bridge grew stronger', es: 'El puente se endureció', ja: '橋が頑丈になった' },
        { vi: 'Biển báo ghi sai số', en: 'Wrong weight sign', es: 'Señal errónea', ja: '標識のミス' },
      ],
      correctIndex: 0,
    },
    h1: ['Chiếc xe tải đang chạy bằng động cơ đốt trong!', 'What powers a truck as it drives from the start of the bridge to the middle?', '¿Qué consume el camión mientras avanza por el puente?', 'トラックが橋の端から中央まで走ってくる間に消費したものは？'],
    h2: ['Mỗi mét xe chạy lại đốt cháy xăng/dầu và thải ra khí — làm trọng lượng xe nhẹ đi vài trăm gram!', 'Burning fuel reduces the truck’s total mass as it drives!', 'Al quemar gasolina, el camión pierde peso en ruta.', 'ガソリンや軽油を燃やして進んだ分、車体は軽くなっているよ！'],
    h3: ['Chọn Xe đã đốt hết hơn 30g nhiên liệu!', 'Pick The truck burned over 30g of fuel crossing!', 'Elige ¡El camión quemó más de 30g de combustible!', '「燃料を消費して軽くなった」を選ぼう！'],
    e: ['Khi chạy tới giữa cầu, chiếc xe tải đã tiêu hao lượng nhiên liệu nặng hơn nhiều so với 30g của chú chim!', 'Fuel burned during the drive made the truck lighter than 2,000 kg!', '¡El consumo de combustible compensó con creces los 30g del ave!', '走りながら燃料を消費して30g以上軽くなっていたため、橋の限界を超えませんでした！'],
  },
  // 98
  {
    diff: 'hard', cat: 'logic',
    t: ['Ma trận dấu nhân X Lights-Out', 'Reverse X Lights-Out', 'X inversa Lights-Out', 'X字から全点灯へ'],
    p: ['Từ trạng thái bàn cờ này, chạm ĐÚNG 1 ô duy nhất để toàn bộ 9 ô sáng đèn!', 'Tap just ONE tile in this Lights-Out puzzle to light all 9 tiles!', '¡Toca UNA sola casilla para encender las 9 luces!', '1回だけタップして全9マスを点灯させよう！'],
    m: {
      type: 'matrix_toggle',
      mode: 'lights_out',
      gridSize: 3,
      // Tap center (1,3,4,5,7) => [true, false, true, false, false, false, true, false, true]
      initialGrid: [true, false, true, false, false, false, true, false, true],
      allOnRequired: true,
    },
    h1: ['4 góc đã sáng rồi, chỉ thiếu đúng hình dấu cộng ở giữa!', 'All 4 corners are ON — only the center cross is OFF!', 'Solo falta la cruz central.', '四隅は点いていて、真ん中の十字（＋）だけが消えているよ！'],
    h2: ['Ô nào khi chạm sẽ đảo trạng thái chính nó cùng 4 ô kề bên thành dấu cộng?', 'Which single tile flips the entire center plus-sign?', '¿Qué casilla central invierte toda la cruz?', '十字の真ん中を押せば一気に全部反転するよね！'],
    h3: ['Chạm ô chính giữa (hàng 2, cột 2).', 'Tap the center tile.', 'Toca la casilla central.', 'ど真ん中のマスをタップ！'],
    e: ['1 cú chạm ngay tâm biến dấu cộng tối thành ma trận sáng toàn phần!', 'One tap at the center lit the entire cross!', '¡Un toque en el centro iluminó la cruz!', '中央を1回タップして十字の5マスを一斉点灯させました！'],
  },
  // 99
  {
    diff: 'hard', cat: 'lock',
    t: ['Hành khách chuyến tàu kỳ lạ', 'Train Passenger Riddle', 'Pasajeros del tren', '電車の乗客数クイズ'],
    p: ['Một đoàn tàu rời ga với 48 hành khách. Ga 1: xuống 12, lên 9. Ga 2: xuống 7, lên 15. Ga 3: xuống 18, lên 4. Hỏi đoàn tàu đã đi qua mấy nhà ga tính cả ga xuất phát?', 'A train leaves the station with 48 riders. Stop 1: -12, +9. Stop 2: -7, +15. Stop 3: -18, +4. How many stations has the train stopped at / passed in total (counting departure)?', 'Un tren sale con 48 personas. Parada 1: -12, +9. Parada 2: -7, +15. Parada 3: -18, +4. ¿Cuántas estaciones ha tocado en total (contando la salida)?', '48人を乗せて出発した電車。駅1で12人降りて9人乗り、駅2で7人降りて15人乗り、駅3で18人降りて4人乗った。出発駅も含めて全部でいくつの駅に止まった？'],
    m: { type: 'lock_dial', clueDisplay: 'Dep + Stop 1 + Stop 2 + Stop 3 = ? stations', correctCode: '4', maxLength: 2 },
    h1: ['Đọc kỹ câu hỏi cuối cùng: KHÔNG hề hỏi còn bao nhiêu hành khách!', 'Read the final question carefully — it does NOT ask for passenger count!', '¡NO pregunta cuántos pasajeros quedan!', '最後の質問をよく読んで！乗客の数ではなく「駅の数」を聞いているよ！'],
    h2: ['Đếm số ga: Ga xuất phát + Ga 1 + Ga 2 + Ga 3.', 'Count: Departure station + Stop 1 + Stop 2 + Stop 3.', 'Estación de salida + Parada 1 + Parada 2 + Parada 3.', '出発駅 ＋ 駅1 ＋ 駅2 ＋ 駅3！'],
    h3: ['Tổng cộng 4 nhà ga.', '4 stations in total.', '4 estaciones en total.', '全部で「4」駅！'],
    e: ['Con số hành khách chỉ để đánh lạc hướng — tàu đi qua 4 ga (tính cả ga xuất phát)!', 'Passenger arithmetic was pure distraction — 4 stations total!', '¡Los números eran distracción: solo fueron 4 estaciones!', '人数の計算は完全なフェイク！止まった駅の数は出発駅を含めて4つです！'],
  },
  // 100
  {
    diff: 'hard', cat: 'trick',
    t: ['Thang tàu và thủy triều', 'Rising Tide & Ship Ladder', 'Marea y escalera del barco', '満ち潮と船のハシゴ'],
    p: ['Thang dây treo bên mạn tàu có 8 bậc cách nhau 25 cm. Lúc thủy triều xuống, có 2 bậc ngập dưới nước. Nếu nước biển dâng lên 75 cm, hỏi lúc này có mấy bậc ngập nước?', 'A rope ladder hangs down a ship’s side with rungs 25 cm apart; 2 rungs sit underwater. If the tide rises 75 cm, how many rungs are submerged now?', 'Una escalera cuelga de un barco con peldaños cada 25 cm y 2 bajo el agua. Si la marea sube 75 cm, ¿cuántos quedan sumergidos?', '船の横に25cm間隔のハシゴが垂れていて、今は2段が水に浸かっています。潮が75cm満ちたら何段が水に浸かる？'],
    m: { type: 'lock_dial', clueDisplay: '🌊 +75cm · Ship Floats! → ? rungs', correctCode: '2', maxLength: 2 },
    h1: ['Đừng vội lấy 75 chia 25 rồi cộng vào 2 nhé!', 'Do NOT divide 75 by 25 and add it!', '¡No dividas 75 entre 25!', '75 ÷ 25 ＝ 3段増える…と考えたら罠だよ！'],
    h2: ['Chiếc tàu nổi trên mặt biển — khi nước dâng 75 cm thì con tàu cũng nổi lên theo!', 'A floating ship rises WITH the tide, carrying its ladder up too!', 'El barco flota y sube junto con la marea.', '船は浮いているから潮と一緒に上がるよね！'],
    h3: ['Vẫn chỉ có đúng 2 bậc ngập nước!', 'Still just 2 rungs underwater!', '¡Siguen siendo 2 peldaños!', 'ずっと変わらず「2」段！'],
    e: ['Nước dâng bao nhiêu thì con tàu nổi lên bấy nhiêu — số bậc ngập nước mãi là 2!', 'Because the ship floats, the rising tide lifts the ladder right along with it!', '¡Como el barco flota, los peldaños sumergidos no cambian!', '船自体が潮と一緒に浮き上がるため、水に浸かる段数は2段のまま変わりません！'],
  },
];

export const PACK_6_TRICKS_A: Puzzle[] = SPECS_TRICKS_A.map((s, idx) => ({
  id: 301 + idx,
  difficulty: s.diff,
  category: s.cat,
  title: loc(s.t),
  prompt: loc(s.p),
  mechanic: s.m,
  hints: [loc(s.h1), loc(s.h2), loc(s.h3)],
  explanation: loc(s.e),
}));

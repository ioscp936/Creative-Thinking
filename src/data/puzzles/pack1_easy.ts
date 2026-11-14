import { Puzzle } from './types';

export const PACK_1_EASY: Puzzle[] = [
  {
    id: 1,
    difficulty: 'easy',
    category: 'drag',
    title: { vi: 'Đánh thức mặt trời', en: 'Wake the Sun', es: 'Despierta al sol', ja: '太陽を起こそう' },
    prompt: {
      vi: 'Trời tối quá! Hãy giúp mặt trời tỏa sáng trở lại.',
      en: 'It is too gloomy! Help the sun shine brightly again.',
      es: '¡Está muy nublado! Ayuda al sol a brillar de nuevo.',
      ja: '曇っていて暗いよ！太陽をまた輝かせてあげよう。',
    },
    mechanic: {
      type: 'drag_combine',
      mode: 'move_aside_then_tap',
      backdrop: 'day',
      items: [
        { id: 'sun', shape: 'sun', x: 50, y: 45, scale: 1.35 },
        { id: 'cloud1', shape: 'raincloud', x: 50, y: 45, scale: 1.55 },
        { id: 'flower1', shape: 'flower', x: 24, y: 78, scale: 0.9 },
        { id: 'flower2', shape: 'flower', x: 76, y: 78, scale: 0.9 },
      ],
      sourceId: 'cloud1',
      targetId: 'sun',
    },
    hints: [
      { vi: 'Mặt trời đang bị che khuất phía sau.', en: 'Something is hiding right in front of the sun.', es: 'Algo está tapando justo delante del sol.', ja: '太陽の前に何かが重なって隠れているよ。' },
      { vi: 'Kéo đám mây xám ra chỗ khác rồi chạm vào mặt trời.', en: 'Drag the dark cloud away, then tap the sun.', es: 'Arrastra la nube oscura lejos y luego toca el sol.', ja: '灰色の雲をどかしてから、太陽をタップしよう。' },
      { vi: 'Kéo đám mây sang một bên để lộ mặt trời, sau đó chạm vào mặt trời để hoàn thành.', en: 'Drag the raincloud off the sun to reveal it, then tap the sun.', es: 'Mueve la nube de lluvia a un lado y toca el sol descubierto.', ja: '雨雲を横にドラッグして太陽を出し、太陽をタップするとクリア！' },
    ],
    explanation: {
      vi: 'Đám mây che mất ánh nắng — kéo mây ra để mặt trời lộ diện!',
      en: 'The raincloud was blocking the sunlight — moving it aside reveals the sun!',
      es: 'La nube bloqueaba la luz — ¡al moverla el sol vuelve a brillar!',
      ja: '雲が光を遮っていただけ。雲を動かせば太陽が現れます！',
    },
  },
  {
    id: 2,
    difficulty: 'easy',
    category: 'trick',
    title: { vi: 'Bẫy màu chữ', en: 'Color Word Trap', es: 'Trampa de color', ja: '文字色のワナ' },
    prompt: {
      vi: 'Hãy chạm vào từ MÀU ĐỎ ngay bây giờ!',
      en: 'Tap the RED word right now!',
      es: '¡Toca la palabra ROJO ahora mismo!',
      ja: '今すぐ「赤い」文字をタップしよう！',
    },
    mechanic: {
      type: 'scene_tap',
      tapPromptWord: { vi: 'MÀU ĐỎ', en: 'RED', es: 'ROJO', ja: '赤い' },
      objects: [
        { id: 'b1', shape: 'button_red', x: 24, y: 55, label: { vi: 'XANH LÁ', en: 'GREEN', es: 'VERDE', ja: 'みどり' }, decoy: true },
        { id: 'b2', shape: 'button_green', x: 50, y: 55, label: { vi: 'VÀNG', en: 'YELLOW', es: 'AMARILLO', ja: 'きいろ' }, decoy: true },
        { id: 'b3', shape: 'apple', x: 76, y: 55, label: { vi: 'TÁO', en: 'APPLE', es: 'MANZANA', ja: 'りんご' }, decoy: true },
      ],
    },
    hints: [
      { vi: 'Đừng chỉ nhìn vào các nút bên dưới.', en: 'Do not look only at the buttons below.', es: 'No mires solo los botones de abajo.', ja: '下のボタンだけを見ないで。' },
      { vi: 'Câu hỏi nói chạm vào TỪ, không phải nút bấm.', en: 'It asks for the WORD itself — check the question text!', es: 'Pide la PALABRA misma — ¡revisa el texto de la pregunta!', ja: '問題文そのものの中にある言葉を調べてみよう！' },
      { vi: 'Chạm trực tiếp vào chữ "MÀU ĐỎ" ngay trong câu hỏi phía trên.', en: 'Tap the word "RED" directly inside the question prompt.', es: 'Toca la palabra "ROJO" directamente dentro del enunciado.', ja: '問題文の中の「赤い」という言葉を直接タップしよう！' },
    ],
    explanation: {
      vi: 'Mẹo kinh điển của Brain Test: từ khóa cần chạm nằm ngay trong câu hỏi!',
      en: 'Classic lateral trick: the target word was sitting inside the prompt itself!',
      es: 'Clásico truco lateral: ¡la palabra estaba en el propio enunciado!',
      ja: '問題文自体に仕掛けがある定番のひっかけ問題でした！',
    },
  },
  {
    id: 3,
    difficulty: 'easy',
    category: 'visual',
    title: { vi: 'Chiếc áo rách', en: 'The Torn Shirt', es: 'La camiseta rota', ja: '穴あきTシャツ' },
    prompt: {
      vi: 'Chiếc áo thun này có tổng cộng bao nhiêu cái lỗ?',
      en: 'How many total holes does this T-shirt have?',
      es: '¿Cuántos agujeros en total tiene esta camiseta?',
      ja: 'このTシャツには全部でいくつの穴がある？',
    },
    mechanic: {
      type: 'visual_count',
      visualKind: 'tshirt_holes',
      variant: 2,
      correctAnswer: 8,
      min: 0,
      max: 20,
    },
    hints: [
      { vi: 'Áo thun bình thường đã có sẵn vài lỗ rồi nhé.', en: 'Even a brand-new T-shirt already has several openings.', es: 'Incluso una camiseta nueva ya tiene varias aberturas.', ja: '新品のTシャツでも最初からいくつかの穴が空いているよ。' },
      { vi: 'Đếm cổ áo, gấu áo, 2 tay áo — và vết rách xuyên qua cả mặt trước lẫn mặt sau!', en: 'Count neck, bottom, 2 sleeves — and each tear goes through front AND back!', es: 'Cuenta cuello, base, 2 mangas — ¡y cada corte atraviesa frente y espalda!', ja: '首・裾・両袖の4つに加え、破れた穴は前と後ろの両面を貫通しているよ！' },
      { vi: '4 lỗ tự nhiên (cổ, đáy, 2 tay) + 2 vết rách x 2 mặt (trước & sau) = 8 lỗ.', en: '4 normal openings + 2 front tears + 2 matching back tears = 8 holes.', es: '4 aberturas normales + 2 agujeros delante + 2 detrás = 8 agujeros.', ja: '4つの通常の穴＋前の2つ＋後ろの2つ＝合計8個！' },
    ],
    explanation: {
      vi: 'Vết rách xuyên thấu cả mặt trước và sau áo, cộng thêm 4 lỗ mặc định là 8!',
      en: 'You can see straight through the shirt, so every tear creates 2 holes, plus 4 normal openings = 8.',
      es: 'Al ver el fondo a través de la tela, cada rasgón son 2 agujeros más 4 normales = 8.',
      ja: '向こう側が透けているため、破れ1箇所につき表裏で2つの穴ができます。',
    },
  },
  {
    id: 4,
    difficulty: 'easy',
    category: 'drag',
    title: { vi: 'Bữa tối của mèo con', en: 'Hungry Kitty', es: 'Gatito hambriento', ja: 'お腹ぺこぺこの猫' },
    prompt: {
      vi: 'Mèo con đang đói bụng. Hãy cho mèo ăn món khoái khẩu!',
      en: 'The kitty is hungry. Feed it its favorite meal!',
      es: 'El gatito tiene hambre. ¡Dale su comida favorita!',
      ja: '子猫がお腹をすかせているよ。大好物を食べさせてあげよう！',
    },
    mechanic: {
      type: 'drag_combine',
      mode: 'drop_on_target',
      backdrop: 'room',
      items: [
        { id: 'cat', shape: 'cat', x: 25, y: 58, scale: 1.25 },
        { id: 'bone', shape: 'bone', x: 72, y: 34, scale: 0.95 },
        { id: 'cheese', shape: 'cheese', x: 80, y: 66, scale: 0.95 },
        { id: 'fish', shape: 'fish', x: 52, y: 74, scale: 1.0 },
        { id: 'box', shape: 'box', x: 52, y: 74, scale: 1.3 },
      ],
      sourceId: 'fish',
      targetId: 'cat',
    },
    hints: [
      { vi: 'Mèo thích ăn cá hơn xương hay phô mai.', en: 'Cats love fish, not bones or cheese.', es: 'Los gatos prefieren pescado antes que hueso o queso.', ja: '猫の好物は骨やチーズではなく魚だよ。' },
      { vi: 'Có một chiếc hộp đang đậy kín ở giữa phòng.', en: 'Check inside the cardboard box in the room.', es: 'Mira qué hay escondido bajo la caja.', ja: '部屋の真ん中の箱を動かしてみよう。' },
      { vi: 'Kéo chiếc hộp ra để lộ con cá, rồi kéo con cá đến chỗ chú mèo.', en: 'Move the box aside to reveal the fish, then drag the fish to the cat.', es: 'Aparta la caja para ver el pescado y arrástralo hasta el gato.', ja: '箱をどかして魚を見つけ、魚を猫のところへドラッグしよう！' },
    ],
    explanation: {
      vi: 'Con cá được giấu dưới chiếc hộp!',
      en: 'The fresh fish was hiding right under the box!',
      es: '¡El pescado estaba escondido debajo de la caja!',
      ja: 'お魚は箱の下に隠れていました！',
    },
  },
  {
    id: 5,
    difficulty: 'easy',
    category: 'action',
    title: { vi: 'Đừng chạm vào nút đỏ', en: 'Do Not Press', es: 'No lo pulses', ja: '絶対に押すな' },
    prompt: {
      vi: 'TUYỆT ĐỐI KHÔNG nhấn vào nút màu đỏ! Hãy kiên nhẫn.',
      en: 'DO NOT tap the big red button! Just be patient.',
      es: '¡NO pulses el botón rojo! Ten paciencia.',
      ja: '赤いボタンは絶対に押さないで！じっと待とう。',
    },
    mechanic: {
      type: 'scene_tap',
      waitSeconds: 4,
      objects: [
        { id: 'trap', shape: 'button_red', x: 50, y: 52, scale: 1.5, decoy: true, label: { vi: 'BẤM ĐI!', en: 'PRESS ME!', es: '¡PÚLSAME!', ja: '押して！' } },
      ],
    },
    hints: [
      { vi: 'Đôi khi không làm gì cả lại là đáp án thông minh nhất.', en: 'Sometimes doing nothing is the smartest move.', es: 'A veces no hacer nada es la mejor jugada.', ja: '何もしないことが正解になる時もあるよ。' },
      { vi: 'Cố gắng đừng chạm vào màn hình trong vài giây.', en: 'Keep your hands off the button for 4 seconds.', es: 'No toques la pantalla durante 4 segundos.', ja: '4秒間だけボタンに触らずに待ってみよう。' },
      { vi: 'Chỉ cần chờ đồng hồ đếm ngược 4 giây kết thúc là bạn thắng.', en: 'Wait calmly for 4 seconds without pressing the red button.', es: 'Espera 4 segundos sin pulsar el botón rojo.', ja: '何も押さずに4秒待つだけでクリアになります！' },
    ],
    explanation: {
      vi: 'Sự kiên nhẫn chiến thắng sự tò mò!',
      en: 'Patience beats temptation!',
      es: '¡La paciencia vence a la tentación!',
      ja: '誘惑に負けず待てばクリア！',
    },
  },
  {
    id: 6,
    difficulty: 'easy',
    category: 'visual',
    title: { vi: 'Bãi đỗ xe bí ẩn', en: 'Parking Spot Puzzle', es: 'Plaza de aparcamiento', ja: '駐車場の番号' },
    prompt: {
      vi: 'Chiếc ô tô đang đỗ ở ô số mấy?',
      en: 'What parking spot number is the car parked in?',
      es: '¿En qué número de plaza está aparcado el coche?',
      ja: '車が停まっている駐車スペースの番号は何番？',
    },
    mechanic: {
      type: 'visual_count',
      visualKind: 'parking_number',
      variant: 1,
      correctAnswer: 87,
      min: 0,
      max: 99,
    },
    hints: [
      { vi: 'Nhìn dãy số từ một góc độ khác xem sao.', en: 'Try looking at the numbers from a different angle.', es: 'Mira los números desde otro ángulo.', ja: '数字を別の角度から見てみよう。' },
      { vi: 'Xoay ngược đầu lại! Các con số đang bị lộn ngược.', en: 'Turn your perspective upside down!', es: '¡Pon los números boca abajo!', ja: '上下逆さまにして読んでみよう！' },
      { vi: 'Đọc ngược từ phải sang trái: 86, [87], 88, 89, 90, 91. Đáp án là 87.', en: 'Upside down it reads 86, [87], 88, 89, 90, 91. Answer: 87.', es: 'Al revés dice 86, [87], 88, 89, 90, 91. Respuesta: 87.', ja: '逆さまに見ると86, [87], 88, 89, 90, 91。答えは87！' },
    ],
    explanation: {
      vi: 'Khi nhìn ngược lại, dãy số liên tiếp là 86, 87, 88, 89, 90, 91!',
      en: 'Viewed upside down, the sequence is simply 86, 87, 88, 89, 90, 91!',
      es: 'Visto al revés, la secuencia es 86, 87, 88, 89, 90, 91.',
      ja: '逆さから見れば86〜91の連続した数字でした！',
    },
  },
  {
    id: 7,
    difficulty: 'easy',
    category: 'action',
    title: { vi: 'Ấp nở quả trứng', en: 'Warm the Egg', es: 'Incuba el huevo', ja: 'タマゴを温めよう' },
    prompt: {
      vi: 'Quả trứng cần hơi ấm để nở. Hãy giúp chú gà con ra đời!',
      en: 'This egg needs gentle warmth to hatch. Help the chick out!',
      es: 'El huevo necesita calor para nacer. ¡Ayuda al pollito!',
      ja: 'タマゴが孵るには温かさが必要。ひよこを誕生させよう！',
    },
    mechanic: {
      type: 'action_meter',
      mode: 'hold',
      targetShape: 'egg',
      resultShape: 'chick',
      requiredValue: 2.2,
      meterLabel: { vi: 'Nhiệt độ ấm áp', en: 'Warmth Meter', es: 'Calor', ja: 'ぬくもり' },
    },
    hints: [
      { vi: 'Chạm nhẹ một cái chưa đủ làm trứng ấm lên đâu.', en: 'A quick single tap is not enough to warm an egg.', es: 'Un solo toque rápido no calienta el huevo.', ja: '1回タップしただけでは温まらないよ。' },
      { vi: 'Hãy nhấn và GIỮ ngón tay/chuột lên quả trứng.', en: 'Press and HOLD on the egg steadily.', es: 'Mantén PULSADO sobre el huevo.', ja: 'タマゴを長押しして温めてみよう。' },
      { vi: 'Nhấn giữ nút hoặc quả trứng khoảng 2 giây cho đến khi thanh ấm đầy 100%.', en: 'Press and hold for ~2 seconds until the warmth bar fills up.', es: 'Mantén pulsado unos 2 segundos hasta llenar la barra.', ja: 'ゲージがいっぱいになるまで約2秒長押ししよう！' },
    ],
    explanation: {
      vi: 'Giữ ấm liên tục giúp trứng nở thành chú gà con đáng yêu!',
      en: 'Steady warmth hatched the little chick safely!',
      es: '¡El calor constante ayudó a nacer al pollito!',
      ja: 'じっと温めることでかわいいひよこが孵りました！',
    },
  },
  {
    id: 8,
    difficulty: 'easy',
    category: 'riddle',
    title: { vi: 'Sắt hay lông vũ?', en: 'Iron vs Feathers', es: 'Hierro o plumas', ja: '鉄と羽毛' },
    prompt: {
      vi: 'Vật nào nặng hơn: 1 kg sắt hay 1 kg lông vũ?',
      en: 'Which is heavier: 1 kg of iron or 1 kg of feathers?',
      es: '¿Qué pesa más: 1 kg de hierro o 1 kg de plumas?',
      ja: '1kgの鉄と1kgの羽毛、重いのはどっち？',
    },
    mechanic: {
      type: 'lateral_choice',
      illustration: 'rock',
      secondaryShape: 'cloud',
      options: [
        { vi: '1 kg sắt nặng hơn', en: '1 kg of iron', es: '1 kg de hierro', ja: '1kgの鉄' },
        { vi: '1 kg lông vũ nặng hơn', en: '1 kg of feathers', es: '1 kg de plumas', ja: '1kgの羽毛' },
        { vi: 'Cả hai nặng bằng nhau', en: 'They weigh the same', es: 'Pesan lo mismo', ja: 'どちらも同じ重さ' },
        { vi: 'Tùy thuộc vào thời tiết', en: 'Depends on weather', es: 'Depende del clima', ja: '天気による' },
      ],
      correctIndex: 2,
    },
    hints: [
      { vi: 'Đọc kỹ số đo cân nặng trong câu hỏi.', en: 'Read the weight measurement carefully.', es: 'Lee bien la medida de peso.', ja: '重さの単位を落ち着いて読んでみよう。' },
      { vi: 'Cả hai đều có khối lượng là 1 kg!', en: 'Both explicitly weigh 1 kilogram!', es: '¡Ambos pesan exactamente 1 kilogramo!', ja: 'どちらも「1kg」と書いてあるよ！' },
      { vi: 'Chọn "Cả hai nặng bằng nhau".', en: 'Select "They weigh the same".', es: 'Elige "Pesan lo mismo".', ja: '「どちらも同じ重さ」を選ぼう！' },
    ],
    explanation: {
      vi: '1 kg sắt và 1 kg lông vũ đều nặng đúng 1 kg!',
      en: '1 kg is always 1 kg regardless of the material!',
      es: '1 kg siempre pesa 1 kg sin importar el material.',
      ja: '材質が違っても、1kgは同じ1kgです！',
    },
  },
  {
    id: 9,
    difficulty: 'easy',
    category: 'trick',
    title: { vi: 'Thứ tự kích thước', en: 'Smallest to Largest', es: 'De menor a mayor', ja: '小さい順にタップ' },
    prompt: {
      vi: 'Chạm các sinh vật theo thứ tự kích thước thực tế từ NHỎ đến LỚN!',
      en: 'Tap the animals in real-life size order from SMALLEST to LARGEST!',
      es: '¡Toca los animales por su tamaño real de MENOR a MAYOR!',
      ja: '実際の大きさで「小さい順」に動物をタップしよう！',
    },
    mechanic: {
      type: 'scene_tap',
      objects: [
        { id: 'mouse', shape: 'mouse', x: 25, y: 58, scale: 1.45, isTarget: true, targetOrder: 1 },
        { id: 'cat', shape: 'cat', x: 52, y: 52, scale: 0.78, isTarget: true, targetOrder: 2 },
        { id: 'dog', shape: 'dog', x: 78, y: 55, scale: 1.1, isTarget: true, targetOrder: 3 },
      ],
    },
    hints: [
      { vi: 'Đừng bị đánh lừa bởi kích thước hình vẽ trên màn hình.', en: 'Do not be fooled by how big they are drawn on screen.', es: 'No te dejes engañar por el tamaño del dibujo.', ja: '画面に描かれている絵の大きさに騙されないで！' },
      { vi: 'Ngoài đời thật: Chuột -> Mèo -> Chó.', en: 'In real life: Mouse -> Cat -> Dog.', es: 'En la vida real: Ratón -> Gato -> Perro.', ja: '現実のサイズでは：ネズミ → 猫 → 犬。' },
      { vi: 'Chạm lần lượt: Chuột (trái), Mèo (giữa), Chó (phải).', en: 'Tap Mouse first, then Cat, then Dog.', es: 'Toca primero el Ratón, luego el Gato y después el Perro.', ja: 'ネズミ → 猫 → 犬 の順にタップしよう！' },
    ],
    explanation: {
      vi: 'Hình vẽ chuột được phóng to để đánh lừa mắt, nhưng ngoài đời chuột nhỏ nhất!',
      en: 'The mouse was drawn huge as a visual trick, but in reality it is the smallest!',
      es: 'El ratón parecía gigante en el dibujo, ¡pero en realidad es el más pequeño!',
      ja: '絵の大きさは罠！実際のサイズはネズミが一番小さいですね。',
    },
  },
  {
    id: 10,
    difficulty: 'easy',
    category: 'drag',
    title: { vi: 'Kho báu bí mật', en: 'Hidden Treasure', es: 'Tesoro escondido', ja: '隠された宝箱' },
    prompt: {
      vi: 'Hãy mở chiếc rương kho báu bị khóa!',
      en: 'Unlock the treasure chest!',
      es: '¡Abre el cofre del tesoro cerrado!',
      ja: '鍵のかかった宝箱を開けよう！',
    },
    mechanic: {
      type: 'drag_combine',
      mode: 'drop_on_target',
      backdrop: 'park',
      items: [
        { id: 'chest', shape: 'chest', x: 72, y: 62, scale: 1.3 },
        { id: 'key', shape: 'key', x: 24, y: 72, scale: 0.95 },
        { id: 'bush', shape: 'bush', x: 24, y: 70, scale: 1.45 },
        { id: 'rock', shape: 'rock', x: 48, y: 74, scale: 1.0 },
      ],
      sourceId: 'key',
      targetId: 'chest',
    },
    hints: [
      { vi: 'Bạn cần tìm chiếc chìa khóa được giấu gần đó.', en: 'There must be a key hidden somewhere nearby.', es: 'Debe haber una llave escondida cerca.', ja: '近くに鍵が隠されているはずだよ。' },
      { vi: 'Thử kéo bụi cây hoặc tảng đá sang bên xem.', en: 'Try dragging the bush aside to look underneath.', es: 'Intenta mover el arbusto hacia un lado.', ja: '茂みを横に動かして下を見てみよう。' },
      { vi: 'Kéo bụi cây bên trái ra để thấy chìa khóa, rồi kéo chìa khóa vào rương.', en: 'Move the bush off the key, then drag the key onto the chest.', es: 'Mueve el arbusto, toma la llave y arrástrala al cofre.', ja: '茂みをどかして鍵を見つけ、宝箱までドラッグしよう！' },
    ],
    explanation: {
      vi: 'Chìa khóa nằm gọn sau bụi cây!',
      en: 'The golden key was tucked neatly behind the bush!',
      es: '¡La llave dorada estaba escondida tras el arbusto!',
      ja: '金の鍵は茂みの後ろに隠れていました！',
    },
  },
];

// Generate remaining 50 distinct Easy puzzles (11..60) with genuine handcrafted riddles, visual counts, lock dials, drags, and action meters!
const EXTRA_EASY: Puzzle[] = [
  {
    id: 11,
    difficulty: 'easy',
    category: 'riddle',
    title: { vi: 'Tháng nào có 28 ngày?', en: '28 Days', es: '28 Días', ja: '28日ある月' },
    prompt: {
      vi: 'Một năm có bao nhiêu tháng có 28 ngày?',
      en: 'How many months in a year have 28 days?',
      es: '¿Cuántos meses del año tienen 28 días?',
      ja: '1年のうち、28日がある月はいくつ？',
    },
    mechanic: {
      type: 'lateral_choice',
      illustration: 'clock',
      options: [
        { vi: 'Chỉ 1 tháng (Tháng 2)', en: 'Only 1 (February)', es: 'Solo 1 (Febrero)', ja: '1つだけ（2月）' },
        { vi: '6 tháng', en: '6 months', es: '6 meses', ja: '6つ' },
        { vi: 'Tất cả 12 tháng', en: 'All 12 months', es: 'Los 12 meses', ja: '12ヶ月すべて' },
        { vi: 'Không tháng nào', en: 'None', es: 'Ninguno', ja: '0個' },
      ],
      correctIndex: 2,
    },
    hints: [
      { vi: 'Câu hỏi không nói "chỉ có" 28 ngày.', en: 'It did not say "ONLY" 28 days.', es: 'No dice "SOLO" 28 días.', ja: '「28日だけ」とは言っていないよ。' },
      { vi: 'Tháng có 30 hay 31 ngày thì cũng đều có ngày thứ 28!', en: 'Every month with 30 or 31 days also has a 28th day.', es: 'Todos los meses de 30 o 31 días también tienen día 28.', ja: '30日や31日まである月にも当然28日は存在するよ！' },
      { vi: 'Chọn "Tất cả 12 tháng".', en: 'Choose "All 12 months".', es: 'Elige "Los 12 meses".', ja: '「12ヶ月すべて」を選ぼう！' },
    ],
    explanation: {
      vi: 'Tất cả 12 tháng trong năm đều có ít nhất 28 ngày!',
      en: 'Every single one of the 12 months has at least 28 days!',
      es: '¡Todos los 12 meses tienen al menos 28 días!',
      ja: 'すべての月に28日があります！',
    },
  },
  {
    id: 12,
    difficulty: 'easy',
    category: 'drag',
    title: { vi: 'Dập tắt ngọn lửa', en: 'Put Out the Fire', es: 'Apaga el fuego', ja: '火事を消そう' },
    prompt: {
      vi: 'Ngọn lửa đang cháy lan! Hãy dập tắt nó ngay.',
      en: 'A campfire is burning too big! Put it out safely.',
      es: '¡El fuego crece demasiado! Apágalo ahora.',
      ja: '火が燃え広がっている！今すぐ消火しよう。',
    },
    mechanic: {
      type: 'drag_combine',
      mode: 'drop_on_target',
      backdrop: 'park',
      items: [
        { id: 'fire', shape: 'fire', x: 70, y: 62, scale: 1.35 },
        { id: 'raincloud', shape: 'raincloud', x: 25, y: 30, scale: 1.2 },
        { id: 'leaf', shape: 'leaf', x: 30, y: 74, scale: 0.9 },
        { id: 'candle', shape: 'candle', x: 50, y: 75, scale: 0.9 },
      ],
      sourceId: 'raincloud',
      targetId: 'fire',
    },
    hints: [
      { vi: 'Thứ gì trên trời có thể tạo ra nước?', en: 'What in the sky carries water?', es: '¿Qué en el cielo lleva agua?', ja: '空にあって水を生み出せるものは何？' },
      { vi: 'Đám mây mưa ở góc trên bên trái!', en: 'Look at the raincloud in the upper left.', es: 'Mira la nube de lluvia arriba a la izquierda.', ja: '左上の雨雲を使おう！' },
      { vi: 'Kéo đám mây mưa đặt ngay lên trên ngọn lửa.', en: 'Drag the raincloud directly over the fire.', es: 'Arrastra la nube de lluvia justo encima del fuego.', ja: '雨雲を炎の真上にドラッグしよう！' },
    ],
    explanation: {
      vi: 'Cơn mưa từ đám mây đã dập tắt ngọn lửa nhanh chóng!',
      en: 'Rain from the cloud extinguished the fire immediately!',
      es: '¡La lluvia de la nube apagó el fuego al instante!',
      ja: '雨雲の雨で火を安全に消火できました！',
    },
  },
  {
    id: 13,
    difficulty: 'easy',
    category: 'action',
    title: { vi: 'Đập vỏ dừa cứng', en: 'Crack the Coconut', es: 'Rompe el coco', ja: '硬い殻を割ろう' },
    prompt: {
      vi: 'Quả trứng khủng long này vỏ siêu dày. Chạm liên tục để làm nứt nó!',
      en: 'This giant dino egg has a tough shell. Tap repeatedly to crack it!',
      es: 'Este huevo gigante es muy duro. ¡Toca varias veces para abrirlo!',
      ja: 'この大きな卵の殻はとても硬い！連打してヒビを入れよう。',
    },
    mechanic: {
      type: 'action_meter',
      mode: 'multi_tap',
      targetShape: 'egg',
      resultShape: 'chick',
      requiredValue: 6,
      meterLabel: { vi: 'Độ nứt vỏ', en: 'Shell Crack', es: 'Grieta', ja: 'ひび割れ' },
    },
    hints: [
      { vi: 'Một lần chạm chưa đủ mạnh đâu.', en: 'One tap will barely scratch it.', es: 'Un solo toque no basta.', ja: '1回タップしただけでは割れないよ。' },
      { vi: 'Hãy chạm liên tiếp nhiều lần vào quả trứng!', en: 'Tap the egg quickly 6 times in a row!', es: '¡Toca el huevo 6 veces seguidas!', ja: '卵を連続で6回タップしてみよう！' },
      { vi: 'Nhấn nhanh 6 lần vào quả trứng ở giữa màn hình.', en: 'Tap the center egg 6 times to hatch it.', es: 'Pulsa 6 veces sobre el huevo central.', ja: '中央の卵を6回タップすれば孵ります！' },
    ],
    explanation: {
      vi: 'Kiên trì gõ 6 lần đã giúp chú chim non chui ra!',
      en: 'Six crisp taps cracked open the tough shell!',
      es: '¡Seis toques firmes lograron abrir la cáscara!',
      ja: '6回の連続タップで頑丈な殻が割れました！',
    },
  },
  {
    id: 14,
    difficulty: 'easy',
    category: 'visual',
    title: { vi: 'Đếm hình tam giác', en: 'Triangle Count', es: 'Cuenta los triángulos', ja: '三角形の数' },
    prompt: {
      vi: 'Có tất cả bao nhiêu hình tam giác trong hình vẽ này?',
      en: 'How many triangles in total can you spot in this shape?',
      es: '¿Cuántos triángulos en total hay en esta figura?',
      ja: 'この図形の中に三角形は全部でいくつある？',
    },
    mechanic: {
      type: 'visual_count',
      visualKind: 'nested_triangles',
      variant: 1,
      correctAnswer: 3,
      min: 0,
      max: 15,
    },
    hints: [
      { vi: 'Đừng quên đếm cả hình lớn bao bên ngoài nhé!', en: 'Do not forget to count the big outer triangle too!', es: '¡No olvides contar el triángulo grande exterior!', ja: '外側の大きな三角形も忘れずに数えよう！' },
      { vi: 'Có 2 tam giác nhỏ cạnh nhau và 1 tam giác lớn ghép từ cả hai.', en: '2 small triangles side-by-side + 1 big combined triangle.', es: '2 triángulos pequeños + 1 grande combinado.', ja: '小さな三角形が2つと、合わせた大きな三角形が1つ。' },
      { vi: 'Tổng cộng có 3 hình tam giác.', en: 'The total is 3 triangles.', es: 'El total es 3 triángulos.', ja: '合計3つです！' },
    ],
    explanation: {
      vi: '2 tam giác nhỏ hợp thành 1 tam giác lớn: 2 + 1 = 3.',
      en: 'Two small halves combine into one large outer triangle: 2 + 1 = 3.',
      es: 'Dos mitades pequeñas forman un triángulo grande: 2 + 1 = 3.',
      ja: '小さな2つ＋全体の大きな1つ＝3個です！',
    },
  },
  {
    id: 15,
    difficulty: 'easy',
    category: 'trick',
    title: { vi: 'Tìm quả táo thật', en: 'Spot the Real Apple', es: 'Encuentra la manzana', ja: '本物のリンゴは？' },
    prompt: {
      vi: 'Chú ý kỹ: đâu là quả TÁO màu xanh?',
      en: 'Look closely: tap the GREEN apple!',
      es: 'Fíjate bien: ¡toca la manzana VERDE!',
      ja: 'よく見て！緑色の「リンゴ」をタップしよう。',
    },
    mechanic: {
      type: 'scene_tap',
      objects: [
        { id: 'pear', shape: 'pear', x: 25, y: 55, scale: 1.2, color: '#22C55E', decoy: true },
        { id: 'apple_red', shape: 'apple', x: 50, y: 55, scale: 1.2, color: '#EF4444', decoy: true },
        { id: 'apple_green', shape: 'apple', x: 75, y: 55, scale: 1.2, color: '#22C55E', isTarget: true },
      ],
    },
    hints: [
      { vi: 'Quả bên trái màu xanh, nhưng nó có phải quả táo không?', en: 'The left fruit is green, but is it really an apple?', es: 'La fruta izquierda es verde, pero ¿es manzana?', ja: '左の果物は緑だけど、本当にリンゴかな？' },
      { vi: 'Quả bên trái là quả LÊ, ở giữa là táo ĐỎ.', en: 'Left is a green pear; middle is a red apple.', es: 'La izquierda es una pera verde; la del centro es roja.', ja: '左は洋梨、真ん中は赤いリンゴだよ。' },
      { vi: 'Chạm vào quả táo màu xanh nằm bên phải!', en: 'Tap the green apple on the right!', es: '¡Toca la manzana verde de la derecha!', ja: '右にある緑のリンゴをタップしよう！' },
    ],
    explanation: {
      vi: 'Mắt thường dễ nhầm quả lê xanh ở bên trái thành táo xanh!',
      en: 'Many players quickly tap the green pear on the left by mistake!',
      es: 'Muchos tocan por error la pera verde de la izquierda.',
      ja: '左の緑の洋梨に引っかからないように注意！',
    },
  },
  {
    id: 16,
    difficulty: 'easy',
    category: 'lock',
    title: { vi: 'Vị trí về đích', en: 'Race Finish', es: 'Meta de carrera', ja: 'レースの順位' },
    prompt: {
      vi: 'Trong một cuộc chạy đua, bạn vượt qua người đang đứng hạng 2. Bây giờ bạn hạng mấy?',
      en: 'In a race, you overtake the runner in 2nd place. What place are you in now?',
      es: 'En una carrera adelantas al que va en 2.º lugar. ¿En qué puesto estás ahora?',
      ja: 'マラソンで2位の人を追い抜きました。今あなたは何位？',
    },
    mechanic: {
      type: 'lock_dial',
      clueDisplay: '1st  ←  2nd  ←  You',
      clueSubtext: { vi: 'Nhập số thứ hạng (1 chữ số)', en: 'Enter your rank number', es: 'Ingresa el número de puesto', ja: '順位の数字を入力' },
      correctCode: '2',
      maxLength: 2,
    },
    hints: [
      { vi: 'Không phải hạng 1 đâu nhé!', en: 'Wait — you did not pass the person in 1st place!', es: '¡No adelantaste al que iba primero!', ja: '1位の人を追い抜いたわけではないよ！' },
      { vi: 'Bạn vừa chiếm đúng vị trí của người hạng 2.', en: 'You simply took the 2nd place spot from them.', es: 'Simplemente ocupaste su segundo puesto.', ja: '2位の人の位置に入れ替わっただけ。' },
      { vi: 'Nhập số 2 rồi nhấn Kiểm tra.', en: 'Enter 2 and submit.', es: 'Ingresa 2 y comprueba.', ja: '「2」を入力して確認しよう！' },
    ],
    explanation: {
      vi: 'Vượt qua người hạng 2 nghĩa là bạn thế chỗ họ ở hạng 2!',
      en: 'Passing 2nd place puts you in 2nd place — 1st place is still ahead!',
      es: 'Si adelantas al 2.º, ahora tú eres el 2.º.',
      ja: '2位を抜いたので、あなたが新しい2位です！',
    },
  },
  {
    id: 17,
    difficulty: 'easy',
    category: 'drag',
    title: { vi: 'Bát phô mai cho chuột', en: 'Cheese for Mouse', es: 'Queso para el ratón', ja: 'ネズミにチーズを' },
    prompt: {
      vi: 'Chú chuột nhắt đang tìm bữa sáng. Hãy đưa phô mai cho nó!',
      en: 'The little mouse wants breakfast. Bring the cheese to it!',
      es: 'El ratoncito busca desayuno. ¡Llévale el queso!',
      ja: '小さなネズミが朝ごはんを探しているよ。チーズをあげよう！',
    },
    mechanic: {
      type: 'drag_combine',
      mode: 'drop_on_target',
      backdrop: 'room',
      items: [
        { id: 'mouse', shape: 'mouse', x: 75, y: 65, scale: 1.15 },
        { id: 'cheese', shape: 'cheese', x: 25, y: 65, scale: 1.1 },
        { id: 'cat', shape: 'cat', x: 50, y: 32, scale: 1.0 },
      ],
      sourceId: 'cheese',
      targetId: 'mouse',
    },
    hints: [
      { vi: 'Đừng chạm vào con mèo đang ngủ ở trên.', en: 'Leave the cat alone at the top.', es: 'Deja tranquilo al gato de arriba.', ja: '上の猫には触らなくていいよ。' },
      { vi: 'Kéo miếng phô mai ở bên trái sang bên phải.', en: 'Drag the yellow cheese wedge on the left.', es: 'Arrastra el queso amarillo de la izquierda.', ja: '左のチーズを右へ動かそう。' },
      { vi: 'Thả miếng phô mai ngay lên người chú chuột.', en: 'Drop the cheese right onto the mouse.', es: 'Suelta el queso sobre el ratón.', ja: 'チーズをネズミの上にドロップしよう！' },
    ],
    explanation: {
      vi: 'Món khoái khẩu đã đến tay chú chuột an toàn!',
      en: 'Cheese delivered safely past the cat!',
      es: '¡Queso entregado sin despertar al gato!',
      ja: '猫に見つからずチーズを届けられました！',
    },
  },
  {
    id: 18,
    difficulty: 'easy',
    category: 'riddle',
    title: { vi: 'Bốn cô con gái', en: 'Mary’s Sisters', es: 'Las hijas de papá', ja: 'メアリーの姉妹' },
    prompt: {
      vi: 'Bố của Mary có 5 cô con gái: Nana, Nene, Nini, Nono. Cô thứ 5 tên gì?',
      en: 'Mary’s father has 5 daughters: Nana, Nene, Nini, Nono. What is the 5th daughter’s name?',
      es: 'El padre de María tiene 5 hijas: Nana, Nene, Nini, Nono. ¿Cómo se llama la quinta?',
      ja: 'メアリーのお父さんには5人の娘がいる。ナナ、ネネ、ニニ、ノノ、あと1人の名前は？',
    },
    mechanic: {
      type: 'lateral_choice',
      illustration: 'flower',
      options: [
        { vi: 'Nunu', en: 'Nunu', es: 'Nunu', ja: 'ヌヌ' },
        { vi: 'Nana Jr.', en: 'Nana Jr.', es: 'Nana Jr.', ja: 'ナナJr' },
        { vi: 'Mary', en: 'Mary', es: 'María', ja: 'メアリー' },
        { vi: 'Nene', en: 'Nene', es: 'Nene', ja: 'ネネ' },
      ],
      correctIndex: 2,
    },
    hints: [
      { vi: 'Không phải quy luật nguyên âm a-e-i-o-u đâu.', en: 'Do not fall for the vowel pattern trap.', es: 'No caigas en la trampa de las vocales.', ja: '「ナ・ネ・ニ・ノ…」のリズムに騙されないで！' },
      { vi: 'Đọc lại 3 chữ đầu tiên của câu hỏi!', en: 'Re-read the very first words of the question!', es: '¡Vuelve a leer las primeras palabras!', ja: '問題文の最初の単語を読み返してみよう！' },
      { vi: 'Đó là bố của MARY, nên cô thứ 5 tên Mary!', en: 'It is MARY’s father — so the 5th daughter is Mary!', es: 'Es el padre de MARÍA, ¡así que es María!', ja: '「メアリーのお父さん」なので、5人目はメアリーです！' },
    ],
    explanation: {
      vi: 'Đầu câu đã nhắc ngay tên Mary rồi!',
      en: 'Her name was given in the very first word of the riddle!',
      es: '¡Su nombre estaba en el principio de la pregunta!',
      ja: '問題文の最初にちゃんと答えが書いてありましたね！',
    },
  },
  {
    id: 19,
    difficulty: 'easy',
    category: 'action',
    title: { vi: 'Bật đèn phòng tối', en: 'Turn On the Lights', es: 'Enciende las luces', ja: '電気をつけよう' },
    prompt: {
      vi: 'Bật cả hai công tắc để thắp sáng căn phòng!',
      en: 'Flip the switches so the bulb lights up!',
      es: '¡Activa los interruptores correctos para encender la luz!',
      ja: 'スイッチを正しく切り替えて電球を光らせよう！',
    },
    mechanic: {
      type: 'action_meter',
      mode: 'switches',
      targetShape: 'bulb',
      requiredValue: 2,
      switchCount: 3,
      targetMask: [true, false, true],
      meterLabel: { vi: 'Mạch điện: 1 + 3', en: 'Circuit: 1 & 3', es: 'Circuito: 1 y 3', ja: '回路: 1と3' },
    },
    hints: [
      { vi: 'Không phải công tắc nào cũng cần bật đâu.', en: 'Not every switch needs to be ON.', es: 'No hace falta encender todos los interruptores.', ja: '全部オンにする必要はないよ。' },
      { vi: 'Thử bật công tắc 1 và 3, tắt công tắc 2.', en: 'Try switching 1 ON, 2 OFF, 3 ON.', es: 'Prueba 1 ON, 2 OFF, 3 ON.', ja: '1と3をオンにして、2をオフにしてみよう。' },
      { vi: 'Đặt trạng thái [Bật, Tắt, Bật] theo gợi ý mạch điện.', en: 'Set switches to [ON, OFF, ON].', es: 'Deja los interruptores en [ON, OFF, ON].', ja: 'スイッチを [ON, OFF, ON] にすれば点灯します！' },
    ],
    explanation: {
      vi: 'Mạch nối tiếp giữa công tắc 1 và 3 làm bóng đèn sáng rực!',
      en: 'Switches 1 and 3 complete the circuit cleanly!',
      es: '¡Los interruptores 1 y 3 completan el circuito!',
      ja: '1と3のスイッチで回路がつながりました！',
    },
  },
  {
    id: 20,
    difficulty: 'easy',
    category: 'trick',
    title: { vi: 'Trăng tròn hay khuyết?', en: 'Find the Star', es: 'Busca la estrella', ja: '星を見つけよう' },
    prompt: {
      vi: 'Hãy chạm vào ngôi sao sáng nhất trên bầu trời đêm.',
      en: 'Tap the brightest star in the night sky.',
      es: 'Toca la estrella más brillante del cielo nocturno.',
      ja: '夜空で一番明るい星をタップしよう。',
    },
    mechanic: {
      type: 'scene_tap',
      backdrop: 'night',
      objects: [
        { id: 'moon', shape: 'moon', x: 75, y: 28, scale: 1.25, decoy: true },
        { id: 'cloud_night', shape: 'cloud', x: 35, y: 42, scale: 1.4, draggable: true },
        { id: 'star_big', shape: 'star', x: 35, y: 42, scale: 1.35, isTarget: true },
        { id: 'star_small', shape: 'star', x: 60, y: 58, scale: 0.65, decoy: true },
      ],
    },
    hints: [
      { vi: 'Ngôi sao nhỏ ở dưới trông hơi mờ nhạt.', en: 'The visible tiny star looks rather dim.', es: 'La estrellita visible brilla muy poco.', ja: '見えている小さい星はあまり明るくないよ。' },
      { vi: 'Có thứ gì đó đang nấp sau đám mây ở phía trên bên trái.', en: 'Check behind the cloud on the upper left.', es: 'Mira detrás de la nube de arriba a la izquierda.', ja: '左上の雲の裏に何か隠れているかも！' },
      { vi: 'Kéo đám mây ra rồi chạm vào ngôi sao lớn phía sau.', en: 'Drag the cloud away and tap the giant star hidden behind it.', es: 'Mueve la nube y toca la estrella grande que escondía.', ja: '雲を横にどかして、後ろの大きな星をタップしよう！' },
    ],
    explanation: {
      vi: 'Ngôi sao sáng nhất đang trốn sau đám mây đêm!',
      en: 'The brightest star was simply hiding behind a passing cloud!',
      es: '¡La estrella más brillante se ocultaba tras la nube!',
      ja: '一番明るい星は雲の後ろに隠れていました！',
    },
  },
];

// Build levels 21..60 systematically with handcrafted lateral puzzles across all 6 mechanics
const EASY_BATCH_2: Puzzle[] = [
  {
    id: 21,
    difficulty: 'easy',
    category: 'drag',
    title: { vi: 'Khúc xương cho cún', en: 'Bone for Puppy', es: 'Hueso para el perro', ja: 'ワンちゃんに骨を' },
    prompt: { vi: 'Chú cún đang vẫy đuôi chờ quà. Hãy đưa xương cho cún!', en: 'The puppy is waiting happily. Give it the bone!', es: 'El perrito espera feliz. ¡Dale el hueso!', ja: '子犬が待っているよ。骨をあげよう！' },
    mechanic: { type: 'drag_combine', mode: 'drop_on_target', backdrop: 'park', items: [{ id: 'dog', shape: 'dog', x: 75, y: 60, scale: 1.25 }, { id: 'bone', shape: 'bone', x: 24, y: 64, scale: 1.05 }, { id: 'apple', shape: 'apple', x: 46, y: 35, scale: 0.9 }], sourceId: 'bone', targetId: 'dog' },
    hints: [
      { vi: 'Chó thích gặm xương chứ không thích táo.', en: 'Puppies prefer bones over apples.', es: 'Los perros prefieren huesos a manzanas.', ja: '犬はりんごより骨が大好きだよ。' },
      { vi: 'Kéo khúc xương sang bên phải.', en: 'Drag the bone across the park.', es: 'Arrastra el hueso hacia la derecha.', ja: '骨を右へドラッグしよう。' },
      { vi: 'Thả khúc xương vào chú chó.', en: 'Drop the bone onto the dog.', es: 'Suelta el hueso sobre el perro.', ja: '骨を子犬の上に落とそう！' },
    ],
    explanation: { vi: 'Chú cún đã có khúc xương ngon lành!', en: 'Happy puppy with its favorite bone!', es: '¡Perrito feliz con su hueso!', ja: '子犬が大喜びです！' },
  },
  {
    id: 22,
    difficulty: 'easy',
    category: 'visual',
    title: { vi: 'Ô vuông ẩn giấu', en: 'Count the Squares', es: 'Cuenta los cuadrados', ja: '正方形はいくつ？' },
    prompt: { vi: 'Trong lưới 2x2 này có tất cả bao nhiêu hình vuông?', en: 'How many total squares are in this 2x2 grid?', es: '¿Cuántos cuadrados en total hay en esta cuadrícula 2x2?', ja: 'この2×2のマス目の中に正方形は全部でいくつ？' },
    mechanic: { type: 'visual_count', visualKind: 'nested_squares', variant: 1, correctAnswer: 5, min: 0, max: 20 },
    hints: [
      { vi: 'Đừng chỉ đếm 4 ô vuông nhỏ nhé!', en: 'Do not stop at the 4 small squares!', es: '¡No te detengas en los 4 cuadrados pequeños!', ja: '小さい4個だけで終わらないで！' },
      { vi: 'Cả khung viền lớn bên ngoài cũng là 1 hình vuông.', en: 'The whole outer 2x2 frame is also a square.', es: 'El marco grande exterior también es un cuadrado.', ja: '外側の大きな枠自体も1つの正方形だよ。' },
      { vi: '4 ô nhỏ + 1 ô lớn = 5 hình vuông.', en: '4 small + 1 large = 5 squares.', es: '4 pequeños + 1 grande = 5 cuadrados.', ja: '小さい4つ＋大きい1つ＝5個です！' },
    ],
    explanation: { vi: 'Luôn nhớ tính cả hình lớn nhất bao ngoài: 4 + 1 = 5.', en: '4 unit squares plus 1 outer 2x2 square makes 5!', es: '4 cuadrados pequeños más 1 grande suman 5.', ja: '小さい4つと全体の1つで合計5個！' },
  },
  {
    id: 23,
    difficulty: 'easy',
    category: 'riddle',
    title: { vi: 'Con gà mái trên mái nhà', en: 'Rooster on the Roof', es: 'El gallo en el tejado', ja: '屋根の上のオンドリ' },
    prompt: { vi: 'Một con gà trống đẻ trứng ngay trên đỉnh mái nhà dốc. Trứng lăn về phía nào?', en: 'A rooster lays an egg right on top of a slanted roof. Which way does it roll?', es: 'Un gallo pone un huevo en lo alto de un tejado inclinado. ¿Hacia qué lado rueda?', ja: '斜めの屋根のてっぺんでオンドリが卵を産みました。どっちに転がる？' },
    mechanic: {
      type: 'lateral_choice',
      illustration: 'egg',
      options: [
        { vi: 'Lăn sang trái', en: 'Rolls left', es: 'A la izquierda', ja: '左に転がる' },
        { vi: 'Lăn sang phải', en: 'Rolls right', es: 'A la derecha', ja: '右に転がる' },
        { vi: 'Gà trống không đẻ trứng!', en: 'Roosters do not lay eggs!', es: '¡Los gallos no ponen huevos!', ja: 'オンドリは卵を産まない！' },
        { vi: 'Đứng yên trên đỉnh', en: 'Stays balanced on top', es: 'Se queda en la cima', ja: 'てっぺんに止まる' },
      ],
      correctIndex: 2,
    },
    hints: [
      { vi: 'Đọc kỹ xem con vật nào được nhắc đến.', en: 'Check the exact animal mentioned in the prompt.', es: 'Revisa qué animal se menciona exactamente.', ja: '問題文の「動物」をよく読んでみよう。' },
      { vi: 'Là gà TRỐNG, không phải gà mái!', en: 'It says ROOSTER, not hen!', es: '¡Dice GALLO, no gallina!', ja: 'メンドリじゃなくて「オンドリ」だよ！' },
      { vi: 'Chọn "Gà trống không đẻ trứng!".', en: 'Select "Roosters do not lay eggs!".', es: 'Elige "¡Los gallos no ponen huevos!".', ja: '「オンドリは卵を産まない！」を選ぼう。' },
    ],
    explanation: { vi: 'Gà trống không thể đẻ trứng nên không có quả trứng nào lăn cả!', en: 'Roosters cannot lay eggs!', es: '¡Los gallos no ponen huevos!', ja: 'オンドリは卵を産みません！' },
  },
  {
    id: 24,
    difficulty: 'easy',
    category: 'lock',
    title: { vi: 'Mật mã đếm ngược', en: 'Simple Sequence', es: 'Secuencia simple', ja: '数字の法則' },
    prompt: { vi: 'Điền số còn thiếu vào chỗ trống: 2, 4, 6, 8, ?', en: 'Fill in the missing number: 2, 4, 6, 8, ?', es: 'Completa el número faltante: 2, 4, 6, 8, ?', ja: '？に入る数字はなに？：2, 4, 6, 8, ?' },
    mechanic: { type: 'lock_dial', clueDisplay: '2 · 4 · 6 · 8 · ?', correctCode: '10', maxLength: 3 },
    hints: [
      { vi: 'Đây là dãy số chẵn tăng dần.', en: 'Look at the gap between adjacent numbers.', es: 'Mira la diferencia entre cada número.', ja: '隣り合う数字の差を見てみよう。' },
      { vi: 'Mỗi bước tăng thêm 2 đơn vị.', en: 'Each step adds +2.', es: 'Cada paso suma +2.', ja: '毎回2ずつ増えているよ。' },
      { vi: '8 + 2 = 10.', en: '8 + 2 = 10.', es: '8 + 2 = 10.', ja: '8 + 2 = 10！' },
    ],
    explanation: { vi: 'Cộng 2 ở mỗi bước cho ra 10.', en: 'Adding 2 each step gives 10.', es: 'Sumando 2 cada vez obtenemos 10.', ja: '2ずつ増えるので次は10です。' },
  },
  {
    id: 25,
    difficulty: 'easy',
    category: 'trick',
    title: { vi: 'Chạm đúng ngôi sao', en: 'Tap the Word Star', es: 'Toca la palabra Estrella', ja: '「星」の文字を探せ' },
    prompt: { vi: 'Hãy chạm vào từ NGÔI SAO (chữ viết), không phải hình vẽ!', en: 'Tap the word STAR (text), not the shapes!', es: 'Toca la palabra ESTRELLA, ¡no los dibujos!', ja: '絵ではなく「星」という文字をタップしよう！' },
    mechanic: {
      type: 'scene_tap',
      tapPromptWord: { vi: 'NGÔI SAO', en: 'STAR', es: 'ESTRELLA', ja: '星' },
      objects: [
        { id: 's1', shape: 'star', x: 30, y: 55, scale: 1.3, decoy: true },
        { id: 's2', shape: 'star', x: 70, y: 55, scale: 1.3, color: '#EC4899', decoy: true },
      ],
    },
    hints: [
      { vi: 'Cả hai hình ngôi sao đều là bẫy.', en: 'Both drawn stars are decoys.', es: 'Las dos estrellas dibujadas son trampas.', ja: '下の2つの星の絵はどちらもダミーだよ。' },
      { vi: 'Nhìn lên câu hỏi phía trên.', en: 'Look up at the question text.', es: 'Mira el texto de la pregunta arriba.', ja: '上の問題文を見てみよう。' },
      { vi: 'Chạm vào chữ "NGÔI SAO" ngay trong câu hỏi.', en: 'Tap the word "STAR" inside the prompt.', es: 'Toca "ESTRELLA" dentro del texto.', ja: '問題文の中の「星」の文字をタップしよう！' },
    ],
    explanation: { vi: 'Chữ "NGÔI SAO" trong đề bài mới là mục tiêu thật!', en: 'The word STAR inside the question text was the real target!', es: '¡La palabra ESTRELLA en el enunciado era el objetivo!', ja: '文字としての「星」が正解でした！' },
  },
];

// Programmatically build rich, unique, fully localized Easy puzzles 26..60 using diverse Brain Test templates
const EASY_SPECS: Array<Omit<Puzzle, 'difficulty'>> = [
  {
    id: 26,
    category: 'drag',
    title: { vi: 'Làm mát cốc trà nóng', en: 'Cool the Tea', es: 'Enfría el té', ja: '熱いお茶を冷まそう' },
    prompt: { vi: 'Ngọn lửa đang làm nóng quá mức! Dùng cục băng để làm nguội nó.', en: 'Too hot! Drag the ice cube onto the fire to cool it down.', es: '¡Demasiado calor! Arrastra el hielo sobre el fuego.', ja: '熱すぎる！氷を火の上にドラッグして冷まそう。' },
    mechanic: { type: 'drag_combine', mode: 'drop_on_target', backdrop: 'room', items: [{ id: 'fire', shape: 'fire', x: 70, y: 60, scale: 1.3 }, { id: 'ice', shape: 'ice', x: 28, y: 60, scale: 1.15 }, { id: 'candle', shape: 'candle', x: 48, y: 74, scale: 0.9 }], sourceId: 'ice', targetId: 'fire' },
    hints: [
      { vi: 'Băng có thể hạ nhiệt độ nhanh.', en: 'Ice melts heat away.', es: 'El hielo calma el calor.', ja: '氷で熱を冷ませるよ。' },
      { vi: 'Kéo khối băng xanh sang phải.', en: 'Drag the blue ice cube.', es: 'Arrastra el cubo de hielo azul.', ja: '青い氷を右へ動かそう。' },
      { vi: 'Thả cục băng lên ngọn lửa.', en: 'Drop the ice cube right onto the fire.', es: 'Suelta el hielo sobre el fuego.', ja: '氷を火の上にドロップしよう！' },
    ],
    explanation: { vi: 'Băng tan thành nước và dập tắt sức nóng!', en: 'Ice melts and cools the fire completely!', es: '¡El hielo derrite y apaga el calor!', ja: '氷が溶けて熱を冷ましました！' },
  },
  {
    id: 27,
    category: 'action',
    title: { vi: 'Bơm bóng bay vừa đủ', en: 'Inflate Gently', es: 'Infla con cuidado', ja: '風船をふくらませよう' },
    prompt: { vi: 'Nhấn giữ nút để thổi căng quả bóng bay!', en: 'Press and hold to inflate the balloon!', es: '¡Mantén pulsado para inflar el globo!', ja: '長押しして風船を膨らませよう！' },
    mechanic: { type: 'action_meter', mode: 'hold', targetShape: 'balloon', resultShape: 'star', requiredValue: 1.8, meterLabel: { vi: 'Áp suất khí', en: 'Air Pressure', es: 'Aire', ja: '空気圧' } },
    hints: [
      { vi: 'Một cú chạm nhanh không đủ hơi.', en: 'A quick tap will not inflate it.', es: 'Un toque rápido no lo inflará.', ja: '1回押すだけでは膨らまないよ。' },
      { vi: 'Nhấn giữ liên tục gần 2 giây.', en: 'Hold down steadily for ~2 seconds.', es: 'Mantén pulsado casi 2 segundos.', ja: '約2秒間ずっと長押ししよう。' },
      { vi: 'Giữ cho đến khi thanh áp suất đầy 100%.', en: 'Hold until the pressure bar hits 100%.', es: 'Mantén hasta que la barra llegue al 100%.', ja: 'ゲージが100%になるまで長押し！' },
    ],
    explanation: { vi: 'Quả bóng bay đã căng tròn hoàn hảo!', en: 'Inflated to perfection!', es: '¡Inflado a la perfección!', ja: 'きれいに膨らみました！' },
  },
  {
    id: 28,
    category: 'riddle',
    title: { vi: 'Cái gì càng lau càng ướt?', en: 'Gets Wetter as It Dries', es: 'Se moja al secar', ja: '乾かすほど濡れるもの' },
    prompt: { vi: 'Thứ gì càng làm khô người khác thì bản thân nó càng ướt?', en: 'What gets wetter the more it dries?', es: '¿Qué se moja más cuanto más seca?', ja: '何かを乾かせば乾かすほど、自分が濡れていくものは何？' },
    mechanic: {
      type: 'lateral_choice',
      illustration: 'water',
      options: [
        { vi: 'Cái ô', en: 'An umbrella', es: 'Un paraguas', ja: '傘' },
        { vi: 'Cái khăn tắm', en: 'A towel', es: 'Una toalla', ja: 'タオル' },
        { vi: 'Ánh nắng', en: 'Sunshine', es: 'La luz del sol', ja: '太陽の光' },
        { vi: 'Cái cốc', en: 'A cup', es: 'Una taza', ja: 'コップ' },
      ],
      correctIndex: 1,
    },
    hints: [
      { vi: 'Bạn dùng nó mỗi khi tắm xong.', en: 'You use it right after a shower.', es: 'Lo usas después de ducharte.', ja: 'お風呂上がりに毎日使うものだよ。' },
      { vi: 'Nó hút nước từ cơ thể bạn.', en: 'It absorbs water while drying you.', es: 'Absorbe el agua mientras te seca.', ja: '体を拭いて乾かすと水分を吸い取るよ。' },
      { vi: 'Đáp án là "Cái khăn tắm".', en: 'The answer is "A towel".', es: 'La respuesta es "Una toalla".', ja: '答えは「タオル」！' },
    ],
    explanation: { vi: 'Khăn tắm lau khô người bạn nhưng chính nó lại thấm nước và ướt!', en: 'A towel dries you off by absorbing the water itself!', es: '¡La toalla absorbe el agua al secarte!', ja: 'タオルは水分を吸い取って乾かすので自分が濡れます！' },
  },
  {
    id: 29,
    category: 'trick',
    title: { vi: 'Cẩn thận quả bom!', en: 'Avoid the Bomb', es: 'Evita la bomba', ja: '爆弾に注意！' },
    prompt: { vi: 'Tìm viên kim cương ẩn giấu — đừng chạm nhầm bom!', en: 'Find the hidden diamond — do not touch the bomb!', es: 'Encuentra el diamante oculto — ¡no toques la bomba!', ja: '隠れたダイヤを見つけよう。爆弾には触らないで！' },
    mechanic: {
      type: 'scene_tap',
      objects: [
        { id: 'bomb', shape: 'bomb', x: 32, y: 58, scale: 1.25, decoy: true },
        { id: 'rock_cover', shape: 'rock', x: 68, y: 58, scale: 1.35, draggable: true },
        { id: 'diamond', shape: 'diamond', x: 68, y: 58, scale: 1.15, isTarget: true },
      ],
    },
    hints: [
      { vi: 'Viên kim cương chưa lộ mặt ngay đâu.', en: 'The diamond is hidden behind an obstacle.', es: 'El diamante está escondido detrás de algo.', ja: 'ダイヤは何かの後ろに隠れているよ。' },
      { vi: 'Hãy kéo tảng đá bên phải sang một bên.', en: 'Drag the grey rock on the right aside.', es: 'Mueve la roca gris de la derecha.', ja: '右の岩を横にずらしてみよう。' },
      { vi: 'Kéo tảng đá ra rồi chạm vào viên kim cương.', en: 'Move the rock and tap the diamond underneath.', es: 'Aparta la roca y toca el diamante.', ja: '岩をどかしてダイヤをタップしよう！' },
    ],
    explanation: { vi: 'Viên kim cương lấp lánh nằm ngay dưới tảng đá!', en: 'The sparkling diamond was tucked under the rock!', es: '¡El diamante brillaba bajo la roca!', ja: '岩の下にダイヤが隠れていました！' },
  },
  {
    id: 30,
    category: 'lock',
    title: { vi: 'Số chân mèo', en: 'Count the Paws', es: 'Cuenta las patas', ja: '全部で何本？' },
    prompt: { vi: '3 chú mèo và 2 chú vịt đứng cùng nhau. Tổng cộng có bao nhiêu chân?', en: '3 cats and 2 ducks stand together. How many legs in total?', es: '3 gatos y 2 patos están juntos. ¿Cuántas patas hay en total?', ja: '猫3匹とアヒル2羽がいます。足は全部で何本？' },
    mechanic: { type: 'lock_dial', clueDisplay: '3 × 🐱 + 2 × 🦆', correctCode: '16', maxLength: 2 },
    hints: [
      { vi: 'Mỗi con mèo có 4 chân, mỗi con vịt có 2 chân.', en: 'Cats have 4 legs; ducks have 2 legs.', es: 'Gatos tienen 4 patas; patos tienen 2.', ja: '猫は4本、アヒルは2本だよ。' },
      { vi: '(3 × 4) + (2 × 2) = 12 + 4.', en: '3×4 = 12, and 2×2 = 4.', es: '3×4 = 12 y 2×2 = 4.', ja: '3×4＝12 と 2×2＝4 を足してみよう。' },
      { vi: 'Đáp án là 16.', en: 'Answer: 16.', es: 'Respuesta: 16.', ja: '答えは16！' },
    ],
    explanation: { vi: '12 chân mèo + 4 chân vịt = 16 chân.', en: '12 cat legs + 4 duck legs = 16 total legs.', es: '12 patas de gato + 4 de pato = 16 patas.', ja: '12＋4＝16本です！' },
  },
];

// Clean deterministic generator for remaining Easy levels 31..60 with distinct riddles, visual counts, drags, and locks
const MORE_EASY_DATA: Array<{
  id: number;
  cat: Puzzle['category'];
  title: [string, string, string, string];
  prompt: [string, string, string, string];
  mech: Puzzle['mechanic'];
  h1: [string, string, string, string];
  h2: [string, string, string, string];
  h3: [string, string, string, string];
  exp: [string, string, string, string];
}> = [
  {
    id: 31, cat: 'drag',
    title: ['Tưới hoa nở rộ', 'Water the Flower', 'Riega la flor', '花に水をあげよう'],
    prompt: ['Bông hoa đang héo vì khát! Hãy tưới nước cho nó.', 'The flower is thirsty! Bring water to it.', '¡La flor tiene sed! Dale agua.', 'お花が喉が渇いているよ！お水をあげよう。'],
    mech: { type: 'drag_combine', mode: 'drop_on_target', backdrop: 'day', items: [{ id: 'flower', shape: 'flower', x: 72, y: 65, scale: 1.25 }, { id: 'water', shape: 'water', x: 26, y: 60, scale: 1.15 }, { id: 'sun', shape: 'sun', x: 78, y: 22, scale: 0.9 }], sourceId: 'water', targetId: 'flower' },
    h1: ['Hoa cần nước chứ không phải thêm nắng.', 'Flowers drink water, not more sun.', 'Las flores beben agua.', '太陽ではなく水が必要だよ。'],
    h2: ['Kéo giọt nước màu xanh ở bên trái.', 'Drag the blue water drop on the left.', 'Arrastra la gota azul.', '左の青い水滴をドラッグしよう。'],
    h3: ['Thả giọt nước lên bông hoa.', 'Drop the water directly onto the flower.', 'Suelta el agua sobre la flor.', '水滴を花の上に落とそう！'],
    exp: ['Tưới nước đúng lúc giúp hoa tươi tắn!', 'Fresh water revived the flower!', '¡El agua fresca revivió la flor!', 'お水のおかげで花が元気に！'],
  },
  {
    id: 32, cat: 'visual',
    title: ['Áo 1 lỗ rách', 'One Tear Shirt', 'Camiseta con 1 corte', '1箇所破れた服'],
    prompt: ['Áo thun này có 1 vết rách xuyên thấu ở giữa. Tổng cộng có mấy lỗ?', 'This shirt has 1 through-hole in the front. How many total holes?', 'Esta camiseta tiene 1 agujero pasante. ¿Cuántos en total?', '1箇所貫通した穴があるTシャツ。穴は全部でいくつ？'],
    mech: { type: 'visual_count', visualKind: 'tshirt_holes', variant: 1, correctAnswer: 6, min: 0, max: 16 },
    h1: ['Tính cả 4 lỗ bình thường của chiếc áo.', 'Include the 4 normal shirt openings.', 'Incluye las 4 aberturas normales.', '首・裾・両袖の4つも数えてね。'],
    h2: ['1 vết rách xuyên qua cả mặt trước và mặt sau = 2 lỗ.', '1 through-tear makes 2 holes (front + back).', '1 corte pasante hace 2 agujeros.', '貫通しているので前と後ろで2つ分！'],
    h3: ['4 + 2 = 6 lỗ.', '4 + 2 = 6 holes.', '4 + 2 = 6 agujeros.', '4＋2＝6個です！'],
    exp: ['Cổ + gấu + 2 tay + trước + sau = 6 lỗ!', 'Neck + waist + 2 sleeves + front + back = 6!', '¡Cuello + base + 2 mangas + frente + espalda = 6!', '合計6つの穴があります！'],
  },
  {
    id: 33, cat: 'riddle',
    title: ['Cái gì có răng mà không cắn?', 'Teeth Without Biting', 'Dientes sin morder', '噛めない歯'],
    prompt: ['Thứ gì có rất nhiều răng nhưng chẳng bao giờ biết cắn?', 'What has many teeth, yet cannot bite?', '¿Qué tiene muchos dientes pero nunca muerde?', '歯がたくさんあるのに絶対に噛めないものは何？'],
    mech: { type: 'lateral_choice', illustration: 'star', options: [{ vi: 'Cá mập', en: 'A shark', es: 'Un tiburón', ja: 'サメ' }, { vi: 'Cái lược', en: 'A comb', es: 'Un peine', ja: 'くし（櫛）' }, { vi: 'Con chó', en: 'A dog', es: 'Un perro', ja: '犬' }, { vi: 'Bàn ăn', en: 'A table', es: 'Una mesa', ja: 'テーブル' }], correctIndex: 1 },
    h1: ['Đó là một đồ vật dùng để chải chuốt hàng ngày.', 'It is an everyday grooming tool.', 'Es un objeto de aseo diario.', '毎日身だしなみに使う道具だよ。'],
    h2: ['Bạn dùng nó cho mái tóc của mình.', 'You use it on your hair.', 'Lo usas en tu cabello.', '髪の毛を整えるときに使うよ。'],
    h3: ['Chọn "Cái lược".', 'Choose "A comb".', 'Elige "Un peine".', '「くし（櫛）」を選ぼう！'],
    exp: ['Răng lược giúp chải tóc chứ không cắn ai cả!', 'A comb has teeth for your hair!', '¡Los dientes del peine son para el cabello!', 'くしの歯は髪をとかすためのものです！'],
  },
  {
    id: 34, cat: 'lock',
    title: ['Đồng hồ sau 3 giờ', 'Clock Plus 3 Hours', 'Reloj más 3 horas', '3時間後の時刻'],
    prompt: ['Bây giờ là 9 giờ sáng. 5 tiếng nữa là mấy giờ chiều? (Nhập số)', 'It is 9 AM now. What hour PM will it be in 5 hours? (Number)', 'Son las 9 AM. ¿Qué hora PM será en 5 horas? (Número)', '今午前9時です。5時間後は午後何時？（数字）'],
    mech: { type: 'lock_dial', clueDisplay: '09:00 + 5h = ? PM', correctCode: '2', maxLength: 2 },
    h1: ['9 + 5 = 14 giờ (hệ 24 giờ).', '9 + 5 = 14 in 24-hour time.', '9 + 5 = 14 en formato 24h.', '9＋5＝14時だよ。'],
    h2: ['14 giờ tương ứng với mấy giờ chiều?', 'What is 14:00 in 12-hour PM format?', '¿Qué hora es las 14:00 en formato PM?', '14時は午後何時かな？'],
    h3: ['14 - 12 = 2 giờ chiều. Nhập 2.', '14 - 12 = 2 PM. Enter 2.', '14 - 12 = 2 PM. Ingresa 2.', '14−12＝2。答えは「2」！'],
    exp: ['9 giờ sáng cộng 5 giờ là 2 giờ chiều!', 'Five hours past 9 AM is 2 PM!', '¡5 horas después de las 9 AM son las 2 PM!', '午前9時の5時間後は午後2時です！'],
  },
  {
    id: 35, cat: 'action',
    title: ['Gõ cửa 5 lần', 'Knock Five Times', 'Llama cinco veces', '5回ノックしよう'],
    prompt: ['Gõ nhẹ vào cửa đúng 5 lần để bạn ra mở!', 'Knock gently on the door 5 times to wake your friend!', '¡Toca la puerta 5 veces para que abran!', 'ドアを5回ノックして友達に開けてもらおう！'],
    mech: { type: 'action_meter', mode: 'multi_tap', targetShape: 'door', resultShape: 'trophy', requiredValue: 5, meterLabel: { vi: 'Số tiếng gõ', en: 'Knocks', es: 'Toques', ja: 'ノック回数' } },
    h1: ['Chạm vào cánh cửa nhiều lần.', 'Tap the wooden door multiple times.', 'Toca la puerta varias veces.', 'ドアを何回もタップしよう。'],
    h2: ['Cần đủ 5 lần chạm.', 'Keep tapping until you hit 5.', 'Sigue tocando hasta llegar a 5.', '5回になるまでタップし続けよう。'],
    h3: ['Nhấn nút/cửa 5 lần liên tiếp.', 'Tap 5 times total.', 'Pulsa 5 veces en total.', '合計5回タップしよう！'],
    exp: ['Cộc cộc cộc cộc cộc — cửa mở rồi!', 'Knock knock — welcome inside!', '¡Puerta abierta!', '5回のノックで扉が開きました！'],
  },
];

// Helper to normalize tuples cleanly into typed Puzzle objects
function buildEasyExtra(): Puzzle[] {
  const toLoc = (t: [string, string, string, string] | Record<number, string>): { vi: string; en: string; es: string; ja: string } => {
    if (Array.isArray(t)) return { vi: t[0], en: t[1], es: t[2], ja: t[3] };
    return { vi: t[0], en: t[1], es: t[2], ja: t[3] };
  };

  const fromSpecs = MORE_EASY_DATA.map((item) => ({
    id: item.id,
    difficulty: 'easy' as const,
    category: item.cat,
    title: toLoc(item.title),
    prompt: toLoc(item.prompt),
    mechanic: item.mech,
    hints: [toLoc(item.h1), toLoc(item.h2), toLoc(item.h3)] as [Puzzle['hints'][0], Puzzle['hints'][1], Puzzle['hints'][2]],
    explanation: toLoc(item.exp),
  }));

  // Levels 36..60: 25 more distinct Easy brain teasers!
  const batch36to60: Puzzle[] = [
    {
      id: 36, difficulty: 'easy', category: 'trick',
      title: { vi: 'Nến nào cháy lâu hơn?', en: 'Candle Survival', es: 'Vela encendida', ja: '最後まで残るロウソク' },
      prompt: { vi: 'Có 4 cây nến đang cháy. Gió thổi tắt 1 cây. Sáng hôm sau còn lại mấy cây nến?', en: '4 candles are lit. Wind blows out 1. How many candles remain the next morning?', es: 'Hay 4 velas encendidas. El viento apaga 1. ¿Cuántas quedan a la mañana siguiente?', ja: '4本のロウソクに火が灯っています。風で1本消えました。翌朝残っているのは何本？' },
      mechanic: { type: 'lock_dial', clueDisplay: '🕯️ 🕯️ 🕯️ 💨🕯️', correctCode: '1', maxLength: 2 },
      hints: [
        { vi: '3 cây vẫn cháy suốt đêm thì sao?', en: 'What happens to the 3 candles that stayed lit all night?', es: '¿Qué pasa con las 3 velas que siguieron ardiendo toda la noche?', ja: '火が点いたままの3本は一晩経つとどうなる？' },
        { vi: 'Chúng cháy hết sạch sáp rồi! Chỉ cây bị tắt mới còn nguyên.', en: 'The lit ones melt away completely; only the blown-out one survives!', es: '¡Las encendidas se consumen; solo queda la apagada!', ja: '燃え続けて溶けてなくなる！消えた1本だけが残るよ。' },
        { vi: 'Đáp án là 1.', en: 'Answer: 1.', es: 'Respuesta: 1.', ja: '答えは「1」！' },
      ],
      explanation: { vi: '3 cây cháy suốt đêm sẽ tan hết, chỉ còn lại 1 cây bị thổi tắt!', en: 'The 3 burning candles melted away overnight, leaving just 1!', es: 'Las 3 velas encendidas se derritieron, ¡solo queda 1!', ja: '火のついた3本は燃え尽き、消えた1本だけが残ります！' },
    },
    {
      id: 37, difficulty: 'easy', category: 'drag',
      title: { vi: 'Cân bằng trái cây', en: 'Fruit Scale', es: 'Balanza de frutas', ja: '果物の天秤' },
      prompt: { vi: 'Đặt trái cây lên đĩa phải để cân bằng 10 kg với đĩa trái!', en: 'Place fruits on the right pan to balance 10 kg!', es: '¡Coloca frutas en el platillo derecho para equilibrar 10 kg!', ja: '左の皿の10kgと釣り合うように右の皿に果物を乗せよう！' },
      mechanic: {
        type: 'drag_combine', mode: 'balance_scale', targetBalance: 10,
        items: [
          { id: 'f1', shape: 'apple', x: 20, y: 74, weight: 4, label: '4kg' },
          { id: 'f2', shape: 'banana', x: 40, y: 74, weight: 3, label: '3kg' },
          { id: 'f3', shape: 'pear', x: 60, y: 74, weight: 6, label: '6kg' },
          { id: 'f4', shape: 'cake', x: 80, y: 74, weight: 5, label: '5kg' },
        ],
      },
      hints: [
        { vi: 'Tìm hai món có tổng khối lượng bằng 10 kg.', en: 'Find two items whose weights add up to 10 kg.', es: 'Busca dos frutas que sumen 10 kg.', ja: '合計が10kgになる組み合わせを探そう。' },
        { vi: '4 kg + 6 kg = 10 kg!', en: '4 kg + 6 kg = 10 kg!', es: '¡4 kg + 6 kg = 10 kg!', ja: '4kg と 6kg で 10kg になるよ！' },
        { vi: 'Chọn Táo (4kg) và Lê (6kg) đặt lên đĩa phải rồi Kiểm tra.', en: 'Place Apple (4kg) and Pear (6kg) onto the scale and check.', es: 'Pon la Manzana (4kg) y la Pera (6kg) en la balanza.', ja: 'リンゴ(4kg)と洋梨(6kg)を右の皿に乗せて判定しよう！' },
      ],
      explanation: { vi: '4 + 6 = 10 kg giúp cán cân thăng bằng hoàn hảo!', en: '4 + 6 = 10 kg balances the scale evenly!', es: '¡4 + 6 = 10 kg equilibra la balanza!', ja: '4kg＋6kg＝10kgで完璧に釣り合いました！' },
    },
    {
      id: 38, difficulty: 'easy', category: 'trick',
      title: { vi: 'Bướm đêm tìm trăng', en: 'Night Owl', es: 'Búho nocturno', ja: '夜のフクロウ' },
      prompt: { vi: 'Chạm vào chú cú đang mở mắt ban đêm!', en: 'Tap the owl hidden in the dark!', es: '¡Toca el búho escondido en la oscuridad!', ja: '暗闇に隠れているフクロウをタップしよう！' },
      mechanic: {
        type: 'scene_tap', backdrop: 'night', darkRoom: true,
        objects: [
          { id: 'owl', shape: 'owl', x: 65, y: 55, scale: 1.25, isTarget: true },
          { id: 'lamp', shape: 'flashlight', x: 25, y: 55, scale: 1.15, draggable: true },
        ],
      },
      hints: [
        { vi: 'Phòng tối quá không nhìn thấy chú cú đâu cả.', en: 'It is too dark to spot the owl clearly.', es: 'Está demasiado oscuro para ver al búho.', ja: '暗すぎてフクロウが見えないよ。' },
        { vi: 'Chiếc đèn pin bên trái có thể kéo đi được đấy!', en: 'Drag the flashlight around to illuminate the dark!', es: '¡Arrastra la linterna para iluminar la escena!', ja: '左の懐中電灯をドラッグして辺りを照らしてみよう！' },
        { vi: 'Kéo đèn pin sang phải để chiếu sáng chú cú, rồi chạm vào chú cú.', en: 'Move the flashlight over to the right, then tap the owl.', es: 'Ilumina la derecha con la linterna y toca al búho.', ja: '懐中電灯を右へ動かしてフクロウを照らし、タップしよう！' },
      ],
      explanation: { vi: 'Chiếu đèn pin giúp bạn phát hiện chú cú ngay lập tức!', en: 'Shining the flashlight revealed the owl right away!', es: '¡La linterna reveló al búho al instante!', ja: '懐中電灯で照らせばすぐに見つかります！' },
    },
    {
      id: 39, difficulty: 'easy', category: 'riddle',
      title: { vi: 'Cửa hàng 7 cây nến', en: 'Two Apples', es: 'Dos manzanas', ja: '取ったら何個？' },
      prompt: { vi: 'Trên đĩa có 3 quả táo. Bạn lấy đi 2 quả. Vậy BẠN có bao nhiêu quả táo?', en: 'There are 3 apples on a plate. You take 2 apples. How many apples do YOU have?', es: 'Hay 3 manzanas en un plato. Coges 2. ¿Cuántas manzanas tienes TÚ?', ja: 'お皿にリンゴが3個あります。あなたが2個取りました。あなたが持っているのは何個？' },
      mechanic: { type: 'lock_dial', clueDisplay: '🍎 🍎 🍎  →  ✋', correctCode: '2', maxLength: 2 },
      hints: [
        { vi: 'Đọc kỹ câu hỏi: "BẠN" có bao nhiêu quả?', en: 'Read carefully: how many do YOU have?', es: 'Lee bien: ¿cuántas tienes TÚ?', ja: '「あなたが」持っている数だよ！' },
        { vi: 'Bạn vừa cầm lấy 2 quả trên tay đó!', en: 'You literally just picked up 2!', es: '¡Acabas de coger 2 con tus manos!', ja: '自分で2個取ったのだから…' },
        { vi: 'Đáp án là 2.', en: 'Answer: 2.', es: 'Respuesta: 2.', ja: '答えは「2」！' },
      ],
      explanation: { vi: 'Còn 1 quả trên đĩa, nhưng bạn đang cầm 2 quả bạn vừa lấy!', en: '1 stays on the plate, and YOU hold the 2 you took!', es: 'Queda 1 en el plato, ¡y tú tienes las 2 que cogiste!', ja: 'お皿には1個残りますが、あなたが持っているのは取った2個です！' },
    },
    {
      id: 40, difficulty: 'easy', category: 'visual',
      title: { vi: 'Đoán số tiếp theo', en: 'Triangle Layers', es: 'Capas de triángulos', ja: '重なる三角形' },
    prompt: { vi: 'Có tất cả bao nhiêu hình tam giác trong hình chia 3 phần này?', en: 'How many total triangles are in this 3-section triangle?', es: '¿Cuántos triángulos hay en esta figura dividida en 3?', ja: '3つに区切られたこの三角形の中に、三角形は全部でいくつある？' },
      mechanic: { type: 'visual_count', visualKind: 'nested_triangles', variant: 2, correctAnswer: 6, min: 0, max: 20 },
      hints: [
        { vi: 'Đếm từng tam giác đơn lẻ, rồi tam giác ghép đôi, rồi tam giác lớn.', en: 'Count single pieces, pairs, and the full triangle.', es: 'Cuenta simples, pares y el triángulo completo.', ja: '1枚・2枚合わせ・3枚全部を順に数えよう。' },
        { vi: '3 mảnh đơn + 2 cặp ghép đôi + 1 hình lớn = ?', en: '3 singles + 2 pairs + 1 full = ?', es: '3 simples + 2 pares + 1 grande = ?', ja: '小さいのが3つ＋2枚組が2つ＋全体が1つ！' },
        { vi: '3 + 2 + 1 = 6.', en: '3 + 2 + 1 = 6.', es: '3 + 2 + 1 = 6.', ja: '3＋2＋1＝6個です！' },
      ],
      explanation: { vi: 'Công thức tam giác chia 3 góc chung đỉnh: 3 + 2 + 1 = 6!', en: 'With 3 adjacent slices from one apex: 3 + 2 + 1 = 6!', es: 'Con 3 secciones desde el vértice: 3 + 2 + 1 = 6.', ja: '1＋2＋3＝6個の三角形があります！' },
    },
  ];

  // Fill 41..60 cleanly with rich variety across all 6 mechanics
  const specs41to60: Puzzle[] = [
    {
      id: 41, difficulty: 'easy', category: 'riddle',
      title: { vi: 'Chữ cái giữa', en: 'Middle Letter', es: 'Letra central', ja: '真ん中の文字' },
      prompt: { vi: 'Chữ cái nào luôn đứng ở chính giữa chữ "VIỆT NAM" hay từ "PARIS" đều có?', en: 'Which month in English is spelled the shortest? Wait — look at the letters: what is in the middle of "APRIL"?', es: '¿Qué letra está exactamente en el centro de "ABRIL"?', ja: '「TOMATO」のちょうど真ん中に隠れている3文字の単語は？' },
      mechanic: { type: 'lateral_choice', illustration: 'book', options: [{ vi: 'A', en: 'P', es: 'B', ja: 'OMA' }, { vi: 'R', en: 'R', es: 'R', ja: 'MAT' }, { vi: 'I', en: 'I', es: 'I', ja: 'ATO' }, { vi: 'L', en: 'L', es: 'L', ja: 'TOM' }], correctIndex: 1 },
      hints: [
        { vi: 'Đếm từ trái qua phải, vị trí thứ 3.', en: 'Count to the 3rd letter of the 5-letter word.', es: 'Mira la 3.ª letra de las 5.', ja: '真ん中の文字をそのまま抜き出してみよう。' },
        { vi: 'A-P-[R]-I-L / T-O-[M-A-T]-O.', en: 'A-P-[R]-I-L!', es: 'A-B-[R]-I-L.', ja: 'TO-[MAT]-O!' },
        { vi: 'Đáp án đúng là lựa chọn thứ 2.', en: 'Choose option 2 ("R").', es: 'Elige la opción 2 ("R").', ja: '2番目の「MAT」を選ぼう！' },
      ],
      explanation: { vi: 'Quan sát kỹ vị trí chính giữa là ra ngay!', en: 'Right at the dead center!', es: '¡Justo en el centro!', ja: '真ん中に隠れていましたね！' },
    },
    {
      id: 42, difficulty: 'easy', category: 'drag',
      title: { vi: 'Sinh nhật vui vẻ', en: 'Light the Cake', es: 'Enciende el pastel', ja: 'ケーキに火を灯そう' },
      prompt: { vi: 'Thắp sáng chiếc bánh sinh nhật bằng ngọn lửa!', en: 'Light up the birthday cake!', es: '¡Enciende la tarta de cumpleaños!', ja: '誕生日のケーキに火をつけよう！' },
      mechanic: { type: 'drag_combine', mode: 'drop_on_target', backdrop: 'room', items: [{ id: 'cake', shape: 'cake', x: 70, y: 62, scale: 1.3 }, { id: 'candle', shape: 'candle', x: 28, y: 62, scale: 1.15 }, { id: 'balloon', shape: 'balloon', x: 30, y: 26, scale: 0.9 }], sourceId: 'candle', targetId: 'cake' },
      hints: [
        { vi: 'Chiếc bánh cần cây nến đang cháy.', en: 'A birthday cake needs a lit candle.', es: 'La tarta necesita la vela encendida.', ja: 'ケーキにはロウソクが必要だよ。' },
        { vi: 'Kéo cây nến bên trái sang chiếc bánh.', en: 'Drag the candle on the left.', es: 'Arrastra la vela de la izquierda.', ja: '左のロウソクをドラッグしよう。' },
        { vi: 'Thả cây nến lên chiếc bánh kem.', en: 'Drop the candle onto the cake.', es: 'Suelta la vela sobre el pastel.', ja: 'ロウソクをケーキの上に乗せよう！' },
      ],
      explanation: { vi: 'Chúc mừng sinh nhật rực rỡ!', en: 'Happy birthday, cake is lit!', es: '¡Feliz cumpleaños!', ja: 'お誕生日おめでとう！' },
    },
    {
      id: 43, difficulty: 'easy', category: 'action',
      title: { vi: 'Sạc đầy pin mặt trời', en: 'Solar Charge', es: 'Carga solar', ja: '太陽チャージ' },
      prompt: { vi: 'Nhấn giữ mặt trời để nạp đầy năng lượng xanh!', en: 'Hold the sun to charge clean solar energy!', es: '¡Mantén pulsado el sol para cargar energía!', ja: '太陽を長押ししてエネルギーを満タンにしよう！' },
      mechanic: { type: 'action_meter', mode: 'hold', targetShape: 'sun', resultShape: 'bulb', requiredValue: 2.0, meterLabel: { vi: 'Pin mặt trời', en: 'Solar Battery', es: 'Batería', ja: 'ソーラー充電' } },
      hints: [
        { vi: 'Giữ liên tục chứ không nhấp nhả.', en: 'Press and hold continuously.', es: 'Mantén pulsado sin soltar.', ja: '離さずに長押ししよう。' },
        { vi: 'Khoảng 2 giây là đầy bình.', en: 'Hold for about 2 seconds.', es: 'Unos 2 segundos bastan.', ja: '約2秒で満タンになるよ。' },
        { vi: 'Giữ đến khi đèn sáng rực.', en: 'Hold until the bar reaches 100%.', es: 'Espera hasta el 100%.', ja: '100%になるまで押し続けよう！' },
      ],
      explanation: { vi: 'Năng lượng mặt trời đã sạc đầy 100%!', en: '100% clean solar power charged!', es: '¡Energía solar al 100%!', ja: 'ソーラーパワー満タン完了！' },
    },
    {
      id: 44, difficulty: 'easy', category: 'lock',
      title: { vi: 'Mật khẩu 4 chân', en: 'Legs in the Barn', es: 'Patas en el granero', ja: '納屋の足の数' },
      prompt: { vi: 'Bạn bước vào phòng có 1 con chó, 2 con mèo và 1 con gà. Tổng cộng trên sàn có bao nhiêu chân (tính cả bạn)?', en: 'You walk into a room with 1 dog, 2 cats, and 1 chicken. How many legs are on the floor (including yours)?', es: 'Entras en una sala con 1 perro, 2 gatos y 1 gallina. ¿Cuántas patas/pies hay en el suelo?', ja: '犬1匹、猫2匹、ニワトリ1羽がいる部屋にあなたが入りました。床にある足は合計何本？' },
      mechanic: { type: 'lock_dial', clueDisplay: '🧑 + 🐶 + 2🐱 + 🐔', correctCode: '16', maxLength: 2 },
      hints: [
        { vi: 'Đừng quên 2 chân của chính BẠN nữa nhé!', en: 'Do not forget YOUR own 2 legs!', es: '¡No olvides TUS propias 2 piernas!', ja: '「あなた」の足2本も忘れないで！' },
        { vi: 'Bạn (2) + Chó (4) + 2 Mèo (8) + Gà (2).', en: 'You (2) + Dog (4) + 2 Cats (8) + Chicken (2).', es: 'Tú (2) + Perro (4) + 2 Gatos (8) + Gallina (2).', ja: 'あなた(2)＋犬(4)＋猫2匹(8)＋ニワトリ(2)。' },
        { vi: '2 + 4 + 8 + 2 = 16.', en: '2 + 4 + 8 + 2 = 16.', es: '2 + 4 + 8 + 2 = 16.', ja: '合計16本です！' },
      ],
      explanation: { vi: 'Người chơi hay quên cộng 2 chân của chính mình!', en: 'Most people forget to count their own 2 legs!', es: '¡Casi todos olvidan contar sus propios 2 pies!', ja: '自分の足2本を数え忘れるのが定番のワナです！' },
    },
    {
      id: 45, difficulty: 'easy', category: 'trick',
      title: { vi: 'Đếm từ 1 đến 3', en: 'Tap 1, 2, 3', es: 'Toca 1, 2, 3', ja: '1・2・3の順番' },
      prompt: { vi: 'Chạm vào Táo, rồi Chuối, rồi Lê theo đúng thứ tự!', en: 'Tap Apple, then Banana, then Pear in exact order!', es: '¡Toca Manzana, luego Plátano y después Pera!', ja: 'リンゴ → バナナ → 洋梨 の順番にタップしよう！' },
      mechanic: {
        type: 'scene_tap',
        objects: [
          { id: 'p', shape: 'pear', x: 25, y: 55, scale: 1.15, isTarget: true, targetOrder: 3 },
          { id: 'a', shape: 'apple', x: 52, y: 55, scale: 1.15, isTarget: true, targetOrder: 1 },
          { id: 'b', shape: 'banana', x: 78, y: 55, scale: 1.15, isTarget: true, targetOrder: 2 },
        ],
      },
      hints: [
        { vi: 'Đọc kỹ thứ tự: Táo trước.', en: 'Check the exact sequence: Apple first.', es: 'Primero la manzana.', ja: '最初はリンゴからだよ。' },
        { vi: 'Táo (giữa) -> Chuối (phải) -> Lê (trái).', en: 'Middle -> Right -> Left.', es: 'Centro -> Derecha -> Izquierda.', ja: '真ん中 → 右 → 左 の順だよ。' },
        { vi: 'Chạm lần lượt: Táo, Chuối, Lê.', en: 'Tap Apple, Banana, Pear.', es: 'Toca Manzana, Plátano, Pera.', ja: 'リンゴ、バナナ、洋梨の順にタップ！' },
      ],
      explanation: { vi: 'Đúng thứ tự là ghi điểm tuyệt đối!', en: 'Spot-on sequential tapping!', es: '¡Orden perfecto!', ja: '順番通りにタップできました！' },
    },
  ];

  // Generate 46..60 cleanly with distinct concepts (mirror clock, cube stack, dragonflies, cake candles, magnets, coins, owls, etc.)
  const specs46to60: Puzzle[] = [
    {
      id: 46, difficulty: 'easy', category: 'visual',
      title: { vi: 'Đồng hồ trong gương', en: 'Mirror Clock', es: 'Reloj en el espejo', ja: '鏡の中の時計' },
      prompt: { vi: 'Đồng hồ này phản chiếu trong gương chỉ 9 giờ. Giờ thật là mấy giờ?', en: 'This clock seen in a mirror shows 9:00. What is the real time (hour)?', es: 'Un reloj visto en un espejo marca las 9:00. ¿Qué hora es en realidad?', ja: '鏡に映った時計が9時を指しています。本当の時刻は何時？' },
      mechanic: { type: 'visual_count', visualKind: 'mirror_clock', variant: 9, correctAnswer: 3, min: 1, max: 12 },
      hints: [
        { vi: 'Gương lật ngược trái thành phải.', en: 'A mirror flips left and right horizontally.', es: 'El espejo invierte izquierda y derecha.', ja: '鏡は左右が反転するよ。' },
        { vi: 'Kim chỉ bên trái (số 9) thực chất đang chỉ sang phải.', en: 'Pointing left (9) means pointing right in reality.', es: 'Apuntar a la izquierda (9) es apuntar a la derecha.', ja: '左(9)を指しているなら実際は右(3)を指しているよ！' },
        { vi: '12 - 9 = 3 giờ. Nhập 3.', en: '12 - 9 = 3 o’clock.', es: '12 - 9 = 3 en punto.', ja: '答えは「3」時！' },
      ],
      explanation: { vi: 'Đối xứng trục dọc biến 9 giờ thành 3 giờ!', en: 'Horizontal reflection turns 9 o’clock into 3 o’clock!', es: 'El reflejo convierte las 9 en las 3.', ja: '左右反転により9時は3時になります！' },
    },
    {
      id: 47, difficulty: 'easy', category: 'drag',
      title: { vi: 'Hút đồng xu rơi', en: 'Magnet Rescue', es: 'Rescate magnético', ja: '磁石でコインを拾おう' },
      prompt: { vi: 'Đồng xu rơi xuống khe hẹp! Hãy dùng nam châm lấy nó lên.', en: 'A coin fell into a crack! Use the magnet to pull it out.', es: '¡La moneda cayó! Usa el imán para recuperarla.', ja: 'コインが隙間に落ちた！磁石を使って取り出そう。' },
      mechanic: { type: 'drag_combine', mode: 'drop_on_target', backdrop: 'room', items: [{ id: 'coin', shape: 'coin', x: 74, y: 66, scale: 1.05 }, { id: 'magnet', shape: 'magnet', x: 24, y: 40, scale: 1.2 }, { id: 'rock', shape: 'rock', x: 48, y: 74, scale: 1.0 }], sourceId: 'magnet', targetId: 'coin' },
      hints: [
        { vi: 'Nam châm hút được kim loại!', en: 'Magnets attract metal coins!', es: '¡Los imanes atraen metal!', ja: '磁石は金属を引き寄せるよ！' },
        { vi: 'Kéo nam châm hình chữ U ở bên trái.', en: 'Grab the U-shaped magnet on the left.', es: 'Toma el imán de la izquierda.', ja: '左のU字磁石をドラッグしよう。' },
        { vi: 'Đưa nam châm lại gần đồng xu vàng.', en: 'Drag the magnet onto the gold coin.', es: 'Arrastra el imán sobre la moneda.', ja: '磁石をコインに重ねよう！' },
      ],
      explanation: { vi: 'Lực từ hút đồng xu lên dễ dàng!', en: 'Magnetic pull retrieved the coin effortlessly!', es: '¡El imán rescató la moneda!', ja: '磁力で簡単に回収できました！' },
    },
    {
      id: 48, difficulty: 'easy', category: 'riddle',
      title: { vi: 'Con đường không người đi', en: 'Wordplay Road', es: 'Calle sin coches', ja: '歩けない道' },
      prompt: { vi: 'Cái gì có cổ nhưng không có đầu?', en: 'What has a neck, yet no head?', es: '¿Qué tiene cuello pero no cabeza?', ja: '首はあるのに頭がないものは何？' },
      mechanic: { type: 'lateral_choice', illustration: 'milk', options: [{ vi: 'Con hươu', en: 'A giraffe', es: 'Una jirafa', ja: 'キリン' }, { vi: 'Cái chai', en: 'A bottle', es: 'Una botella', ja: 'ボトル（瓶）' }, { vi: 'Con rắn', en: 'A snake', es: 'Una serpiente', ja: 'ヘビ' }, { vi: 'Cái gối', en: 'A pillow', es: 'Una almohada', ja: '枕' }], correctIndex: 1 },
      hints: [
        { vi: 'Nó đựng nước hoặc sữa.', en: 'It holds water or milk.', es: 'Guarda agua o leche.', ja: '水や牛乳を入れる容器だよ。' },
        { vi: 'Phần trên thu hẹp lại gọi là cổ...', en: 'We call its narrow top a "...neck".', es: 'Su parte superior se llama cuello de...', ja: '上の細くなっている部分を「〇〇の首」って呼ぶよね。' },
        { vi: 'Đáp án là "Cái chai".', en: 'Choose "A bottle".', es: 'Elige "Una botella".', ja: '「ボトル（瓶）」を選ぼう！' },
      ],
      explanation: { vi: 'Cái chai có cổ chai nhưng không có đầu!', en: 'A bottle has a bottle-neck and no head!', es: '¡La botella tiene cuello pero no cabeza!', ja: '瓶にはネック（首）がありますが頭はありません！' },
    },
    {
      id: 49, difficulty: 'easy', category: 'action',
      title: { vi: 'Rung chuông báo thức', en: 'Ring the Bell', es: 'Toca la campana', ja: 'ベルを鳴らそう' },
      prompt: { vi: 'Lắc chuông 4 lần để gọi mọi người vào lớp!', en: 'Ring the bell 4 times to start class!', es: '¡Toca la campana 4 veces!', ja: 'ベルを4回鳴らして授業を始めよう！' },
      mechanic: { type: 'action_meter', mode: 'multi_tap', targetShape: 'bell', resultShape: 'book', requiredValue: 4, meterLabel: { vi: 'Số hồi chuông', en: 'Rings', es: 'Toques', ja: '回数' } },
      hints: [
        { vi: 'Chạm vào chiếc chuông nhiều lần.', en: 'Tap the golden bell multiple times.', es: 'Toca la campana varias veces.', ja: '金のベルを何回かタップしよう。' },
        { vi: 'Đúng 4 lần chạm là đủ.', en: 'Exactly 4 taps will do it.', es: 'Exactamente 4 toques.', ja: '4回タップすればOK！' },
        { vi: 'Chạm 4 lần vào chuông.', en: 'Tap the bell 4 times.', es: 'Pulsa 4 veces la campana.', ja: 'ベルを4回タップしよう！' },
      ],
      explanation: { vi: 'Keng keng keng keng — giờ học bắt đầu!', en: 'Ring-a-ding! Class is in session!', es: '¡Hora de empezar!', ja: '4回のベルで授業開始です！' },
    },
    {
      id: 50, difficulty: 'easy', category: 'trick',
      title: { vi: 'Đừng chạm bẫy xanh!', en: 'Freeze Challenge', es: 'Quieto ahí', ja: 'じっと我慢' },
      prompt: { vi: 'Chạm vào nút xanh? KHÔNG! Chờ 3 giây để qua màn!', en: 'Tap the green button? NO! Wait 3 seconds without touching!', es: '¿Tocar el botón verde? ¡NO! Espera 3 segundos sin tocar.', ja: '緑のボタンを押す？ダメ！3秒間触らずに待とう！' },
      mechanic: { type: 'scene_tap', waitSeconds: 3, objects: [{ id: 'bg', shape: 'button_green', x: 50, y: 54, scale: 1.45, decoy: true, label: { vi: 'CHẠM TÔI', en: 'TAP ME', es: 'TÓCAME', ja: '押して' } }] },
      hints: [
        { vi: 'Đừng mắc bẫy dòng chữ trên nút bấm!', en: 'Ignore what the button label says!', es: '¡Ignora lo que dice el botón!', ja: 'ボタンの文字に騙されないで！' },
        { vi: 'Chỉ cần ngồi yên 3 giây.', en: 'Wait 3 calm seconds.', es: 'Espera 3 segundos.', ja: '3秒間そのまま待とう。' },
        { vi: 'Không chạm bất cứ nút nào trong 3 giây.', en: 'Do not tap anything for 3 seconds.', es: 'No toques nada por 3 segundos.', ja: '何も押さずに3秒待つとクリア！' },
      ],
      explanation: { vi: 'Đọc kỹ đề bài giúp bạn tránh được cái bẫy rõ ràng này!', en: 'Reading carefully beats impulse tapping!', es: '¡Leer bien evita caer en la trampa!', ja: '落ち着いて読めば引っかかりません！' },
    },
    {
      id: 51, difficulty: 'easy', category: 'visual',
      title: { vi: 'Xếp khối lập phương', en: 'Cube Stack', es: 'Torre de cubos', ja: '積み木は何個？' },
      prompt: { vi: 'Có tất cả bao nhiêu khối vuông (tính cả khối bị che bên dưới)?', en: 'How many cubes are in this stack (including hidden bottom cubes)?', es: '¿Cuántos cubos hay en total (incluyendo los ocultos abajo)?', ja: '隠れている下の段も含めて、立方体は全部で何個？' },
      mechanic: { type: 'visual_count', visualKind: 'cube_stack', variant: 1, correctAnswer: 4, min: 1, max: 20 },
      hints: [
        { vi: 'Khối ở tầng trên phải có khối đỡ ngay bên dưới nó!', en: 'The top cube cannot float in mid-air!', es: '¡El cubo superior no puede flotar en el aire!', ja: '上のブロックの下には支えるブロックがあるはずだよ！' },
        { vi: 'Tầng dưới có 3 khối, tầng trên có 1 khối.', en: '3 cubes on the bottom layer + 1 on top.', es: '3 abajo + 1 arriba.', ja: '下の段に3個、上の段に1個あるよ。' },
        { vi: '3 + 1 = 4 khối.', en: '3 + 1 = 4 cubes.', es: '3 + 1 = 4 cubos.', ja: '3＋1＝4個です！' },
      ],
      explanation: { vi: '1 khối ẩn đỡ lấy khối trên cùng, nên tổng cộng là 4!', en: '1 hidden support cube underneath makes 4 total!', es: '¡El cubo oculto de apoyo suma 4 en total!', ja: '支えになっている隠れた1個を合わせて4個です！' },
    },
    {
      id: 52, difficulty: 'easy', category: 'drag',
      title: { vi: 'Sữa ấm cho mèo', en: 'Milk Time', es: 'Hora de la leche', ja: '猫にミルクを' },
      prompt: { vi: 'Chú mèo con vừa thức dậy và muốn uống sữa!', en: 'The kitten just woke up and wants milk!', es: '¡El gatito despertó y quiere leche!', ja: '子猫が起きてミルクを欲しがっているよ！' },
      mechanic: { type: 'drag_combine', mode: 'drop_on_target', backdrop: 'room', items: [{ id: 'cat', shape: 'cat', x: 72, y: 60, scale: 1.2 }, { id: 'milk', shape: 'milk', x: 26, y: 62, scale: 1.1 }, { id: 'bone', shape: 'bone', x: 48, y: 32, scale: 0.9 }], sourceId: 'milk', targetId: 'cat' },
      hints: [
        { vi: 'Mèo thích sữa chứ không thích xương.', en: 'Kittens drink milk, not bones.', es: 'Los gatitos toman leche.', ja: '子猫が欲しいのはミルクだよ。' },
        { vi: 'Kéo bình sữa ở bên trái.', en: 'Drag the milk bottle on the left.', es: 'Arrastra la leche de la izquierda.', ja: '左のミルクをドラッグしよう。' },
        { vi: 'Thả bình sữa vào chú mèo.', en: 'Drop the milk onto the kitten.', es: 'Suelta la leche sobre el gatito.', ja: 'ミルクを猫のところへ落とそう！' },
      ],
      explanation: { vi: 'Uống sữa xong mèo con vui hẳn!', en: 'Milk time made the kitten purr!', es: '¡Leche deliciosa para el gatito!', ja: 'おいしいミルクで子猫もご機嫌！' },
    },
    {
      id: 53, difficulty: 'easy', category: 'lock',
      title: { vi: 'Con số kỳ lạ', en: 'Easy Addition Trick', es: 'Suma visual', ja: 'リンゴの足し算' },
      prompt: { vi: 'Nếu 1 quả táo = 5 điểm, 1 quả chuối = 3 điểm, vậy 2 táo + 1 chuối = ?', en: 'If Apple = 5 and Banana = 3, what is 2 Apples + 1 Banana?', es: 'Si Manzana = 5 y Plátano = 3, ¿cuánto es 2 Manzanas + 1 Plátano?', ja: 'リンゴ＝5、バナナ＝3 のとき、リンゴ2個＋バナナ1本はいくつ？' },
      mechanic: { type: 'lock_dial', clueDisplay: '🍎+🍎+🍌 = ?', correctCode: '13', maxLength: 3 },
      hints: [
        { vi: 'Thay giá trị từng loại quả vào phép tính.', en: 'Substitute each fruit with its value.', es: 'Sustituye cada fruta por su valor.', ja: 'それぞれの果物を数字に置き換えよう。' },
        { vi: '5 + 5 + 3 = ?', en: '5 + 5 + 3 = ?', es: '5 + 5 + 3 = ?', ja: '5＋5＋3 を計算してみよう。' },
        { vi: 'Đáp án là 13.', en: 'Answer: 13.', es: 'Respuesta: 13.', ja: '答えは「13」！' },
      ],
      explanation: { vi: '5 + 5 + 3 = 13!', en: '5 + 5 + 3 = 13!', es: '¡5 + 5 + 3 = 13!', ja: '5＋5＋3＝13です！' },
    },
    {
      id: 54, difficulty: 'easy', category: 'riddle',
      title: { vi: 'Hộp diêm duy nhất', en: 'Cold Dark Cabin', es: 'Cabaña oscura', ja: '暗い山小屋' },
      prompt: { vi: 'Bạn vào căn phòng tối với 1 que diêm duy nhất. Trong phòng có bếp lò, đèn dầu và nến. Bạn thắp cái gì trước?', en: 'You enter a dark room with one match. There is an oil lamp, a candle, and a wood stove. What do you light first?', es: 'Entras a un cuarto oscuro con un solo fósforo. Hay una lámpara, una vela y una estufa. ¿Qué enciendes primero?', ja: '暗い部屋にマッチが1本だけ。ランプとロウソクとストーブがあります。最初に火をつけるのは？' },
      mechanic: { type: 'lateral_choice', illustration: 'fire', options: [{ vi: 'Đèn dầu', en: 'Oil lamp', es: 'Lámpara', ja: 'ランプ' }, { vi: 'Cây nến', en: 'Candle', es: 'Vela', ja: 'ロウソク' }, { vi: 'Que diêm', en: 'The match', es: 'El fósforo', ja: 'マッチ' }, { vi: 'Bếp lò', en: 'Wood stove', es: 'Estufa', ja: 'ストーブ' }], correctIndex: 2 },
      hints: [
        { vi: 'Làm sao để châm lửa cho những thứ kia?', en: 'How can you ignite any of the others?', es: '¿Con qué prendes fuego a lo demás?', ja: '他のものに火をつけるにはまず何に火が必要？' },
        { vi: 'Bạn phải quẹt cháy que diêm trước tiên!', en: 'You must strike the match before anything else!', es: '¡Primero debes encender el fósforo!', ja: '最初にマッチに火をつけないと始まらないよね！' },
        { vi: 'Chọn "Que diêm".', en: 'Select "The match".', es: 'Elige "El fósforo".', ja: '「マッチ」を選ぼう！' },
      ],
      explanation: { vi: 'Không quẹt que diêm trước thì không thể thắp gì được!', en: 'You always have to light the match first!', es: '¡Siempre debes encender primero el fósforo!', ja: 'まずはマッチに火をつけないと何も点けられません！' },
    },
    {
      id: 55, difficulty: 'easy', category: 'trick',
      title: { vi: 'Tìm trái tim ẩn', en: 'Hidden Heart', es: 'Corazón oculto', ja: '隠れたハート' },
      prompt: { vi: 'Hãy tìm và chạm vào trái tim đang trốn!', en: 'Find and tap the hiding heart!', es: '¡Encuentra y toca el corazón escondido!', ja: '隠れているハートを見つけてタップしよう！' },
      mechanic: {
        type: 'scene_tap',
        objects: [
          { id: 'heart', shape: 'heart', x: 48, y: 55, scale: 1.15, isTarget: true },
          { id: 'umbrella', shape: 'umbrella', x: 48, y: 55, scale: 1.4, draggable: true },
          { id: 'tree', shape: 'tree', x: 22, y: 55, scale: 1.2, decoy: true },
        ],
      },
      hints: [
        { vi: 'Nhìn kỹ phía sau chiếc ô ở giữa.', en: 'Check behind the umbrella in the middle.', es: 'Mira detrás del paraguas del centro.', ja: '真ん中の傘の裏を見てみよう。' },
        { vi: 'Kéo chiếc ô ra chỗ khác.', en: 'Drag the umbrella aside.', es: 'Mueve el paraguas.', ja: '傘を横にドラッグしてどかそう。' },
        { vi: 'Chạm vào trái tim đỏ bên dưới chiếc ô.', en: 'Tap the red heart revealed underneath.', es: 'Toca el corazón rojo descubierto.', ja: '下から出てきた赤いハートをタップしよう！' },
      ],
      explanation: { vi: 'Chiếc ô đã che khuất trái tim ngay chính giữa!', en: 'The umbrella was hiding the heart in plain sight!', es: '¡El paraguas ocultaba el corazón!', ja: '傘の裏にハートが隠れていました！' },
    },
    {
      id: 56, difficulty: 'easy', category: 'visual',
      title: { vi: 'Cầu thang mấy bậc?', en: 'Count the Steps', es: 'Cuenta los escalones', ja: '階段は何段？' },
      prompt: { vi: 'Chiếc cầu thang này có bao nhiêu bậc để bước lên đỉnh?', en: 'How many total steps lead to the top of this staircase?', es: '¿Cuántos escalones suben hasta la cima?', ja: 'この階段の段数は全部で何段？' },
      mechanic: { type: 'visual_count', visualKind: 'stairs_steps', variant: 5, correctAnswer: 5, min: 1, max: 15 },
      hints: [
        { vi: 'Đếm từng mặt bậc ngang từ dưới lên trên.', en: 'Count each horizontal tread from bottom to top.', es: 'Cuenta cada peldaño desde abajo.', ja: '下から上へ水平な段を1つずつ数えよう。' },
        { vi: 'Có 5 bậc rõ ràng đi lên.', en: 'There are 5 clear rising steps.', es: 'Hay 5 escalones claros.', ja: '5段のぼる階段になっているよ。' },
        { vi: 'Nhập 5.', en: 'Enter 5.', es: 'Ingresa 5.', ja: '「5」を入力しよう！' },
      ],
      explanation: { vi: 'Đếm đủ 5 bậc ngang từ chân cầu thang lên đỉnh!', en: '5 crisp steps from ground to top!', es: '¡5 escalones de abajo hacia arriba!', ja: '下から上までちょうど5段あります！' },
    },
    {
      id: 57, difficulty: 'easy', category: 'action',
      title: { vi: 'Đánh thức đồng hồ', en: 'Turn Off Alarm', es: 'Apaga la alarma', ja: '目覚ましを止めよう' },
      prompt: { vi: 'Nhấn nút tắt báo thức 3 lần thật nhanh!', en: 'Tap the alarm clock 3 times to snooze it!', es: '¡Toca el reloj 3 veces para apagar la alarma!', ja: '目覚まし時計を3回タップして止めよう！' },
      mechanic: { type: 'action_meter', mode: 'multi_tap', targetShape: 'clock', resultShape: 'moon', requiredValue: 3, meterLabel: { vi: 'Tắt báo thức', en: 'Snooze', es: 'Posponer', ja: 'スヌーズ' } },
      hints: [
        { vi: 'Chạm liên tiếp vào đồng hồ.', en: 'Tap the clock multiple times.', es: 'Toca el reloj varias veces.', ja: '時計を続けてタップしよう。' },
        { vi: 'Cần đúng 3 lần.', en: '3 taps needed.', es: 'Se necesitan 3 toques.', ja: '3回タップでOKだよ。' },
        { vi: 'Chạm 3 lần rồi nghỉ ngơi thôi!', en: 'Tap 3 times!', es: '¡Toca 3 veces!', ja: '3回タップしてクリア！' },
      ],
      explanation: { vi: 'Yên tĩnh trở lại rồi!', en: 'Peace and quiet restored!', es: '¡Silencio otra vez!', ja: '目覚ましを止めて静かになりました！' },
    },
    {
      id: 58, difficulty: 'easy', category: 'drag',
      title: { vi: 'Cân bằng hộp quà', en: 'Gift Scale', es: 'Balanza de regalos', ja: 'プレゼントの重さ' },
      prompt: { vi: 'Đặt đồ vật lên đĩa phải sao cho tổng bằng đúng 8 kg!', en: 'Balance the right pan to equal 8 kg!', es: '¡Equilibra el platillo derecho a 8 kg!', ja: '右の皿が合計8kgになるように乗せよう！' },
      mechanic: {
        type: 'drag_combine', mode: 'balance_scale', targetBalance: 8,
        items: [
          { id: 'w1', shape: 'book', x: 20, y: 74, weight: 2, label: '2kg' },
          { id: 'w2', shape: 'trophy', x: 40, y: 74, weight: 6, label: '6kg' },
          { id: 'w3', shape: 'rock', x: 60, y: 74, weight: 5, label: '5kg' },
          { id: 'w4', shape: 'apple', x: 80, y: 74, weight: 1, label: '1kg' },
        ],
      },
      hints: [
        { vi: 'Tìm hai vật cộng lại bằng 8.', en: 'Find two items adding to 8.', es: 'Dos objetos que sumen 8.', ja: '足して8になる2つを選ぼう。' },
        { vi: '2 kg + 6 kg = 8 kg.', en: '2 kg + 6 kg = 8 kg.', es: '2 kg + 6 kg = 8 kg.', ja: '2kg＋6kg＝8kg！' },
        { vi: 'Chọn Sách (2kg) và Cúp (6kg) rồi Kiểm tra.', en: 'Select Book (2kg) and Trophy (6kg) then check.', es: 'Elige Libro (2kg) y Trofeo (6kg).', ja: '本(2kg)とトロフィー(6kg)を選んで判定！' },
      ],
      explanation: { vi: '2 + 6 = 8 kg chính xác!', en: '2 + 6 = 8 kg balanced!', es: '¡2 + 6 = 8 kg!', ja: '2kg＋6kg＝8kgで釣り合いました！' },
    },
    {
      id: 59, difficulty: 'easy', category: 'riddle',
      title: { vi: 'Bác tài xế xe buýt', en: 'The Bus Driver', es: 'El conductor del bus', ja: 'バスの運転手' },
      prompt: { vi: 'Bạn lái xe buýt chở 10 người. Trạm 1 xuống 3 lên 4. Trạm 2 xuống 5. Hỏi tài xế tên gì?', en: 'You drive a bus with 10 passengers. Stop 1: 3 get off, 4 get on. Stop 2: 5 get off. Who is the driver?', es: 'Conduces un autobús con 10 personas. Bajan 3, suben 4, luego bajan 5. ¿Quién conduce?', ja: '10人乗ったバスをあなたが運転中。3人降り4人乗り、次に5人降りました。運転手は誰？' },
      mechanic: { type: 'lateral_choice', illustration: 'car', options: [{ vi: 'Ông A', en: 'Mr. Smith', es: 'Sr. Pérez', ja: '田中さん' }, { vi: 'Chính BẠN!', en: 'YOU!', es: '¡TÚ!', ja: 'あなた自身！' }, { vi: '6 người', en: '6 people', es: '6 personas', ja: '6人' }, { vi: 'Không biết', en: 'Unknown', es: 'Desconocido', ja: 'わからない' }], correctIndex: 1 },
      hints: [
        { vi: 'Đừng bận tâm tính số hành khách lên xuống!', en: 'Ignore all the passenger math!', es: '¡Ignora las cuentas de pasajeros!', ja: '乗客の人数計算は全部フェイクだよ！' },
        { vi: 'Đọc chữ đầu tiên của câu hỏi: "BẠN lái xe buýt..."', en: 'Look at the first words: "YOU drive a bus..."', es: 'Mira el inicio: "Conduces un autobús..."', ja: '最初の言葉：「あなたが運転中…」' },
        { vi: 'Chọn "Chính BẠN!".', en: 'Choose "YOU!".', es: 'Elige "¡TÚ!".', ja: '「あなた自身！」を選ぼう！' },
      ],
      explanation: { vi: 'Tài xế chính là bạn ngay từ câu đầu tiên!', en: 'YOU were driving the bus from the very first word!', es: '¡TÚ conducías desde la primera frase!', ja: '問題文の最初から「あなた」が運転していました！' },
    },
    {
      id: 60, difficulty: 'easy', category: 'trick',
      title: { vi: 'Bông hoa duy nhất', en: 'Unique Flower', es: 'Flor única', ja: '特別な花' },
      prompt: { vi: 'Chạm vào tất cả các bông HOA từ trái sang phải!', en: 'Tap every FLOWER from left to right!', es: '¡Toca cada FLOR de izquierda a derecha!', ja: '左から右の順に「花」を全部タップしよう！' },
      mechanic: {
        type: 'scene_tap',
        objects: [
          { id: 'f1', shape: 'flower', x: 22, y: 55, scale: 1.1, isTarget: true, targetOrder: 1 },
          { id: 'leaf', shape: 'leaf', x: 42, y: 55, scale: 1.1, decoy: true },
          { id: 'f2', shape: 'flower', x: 62, y: 55, scale: 1.1, isTarget: true, targetOrder: 2 },
          { id: 'f3', shape: 'flower', x: 82, y: 55, scale: 1.1, isTarget: true, targetOrder: 3 },
        ],
      },
      hints: [
        { vi: 'Cẩn thận chiếc lá xanh nằm xen giữa.', en: 'Watch out for the green leaf mixed in.', es: 'Cuidado con la hoja verde en medio.', ja: '途中に混ざっている緑の葉っぱは花じゃないよ。' },
        { vi: 'Chỉ có 3 bông hoa ở vị trí 1, 3, 4.', en: 'Only tap the 3 flowers, skipping the leaf.', es: 'Toca solo las 3 flores, saltando la hoja.', ja: '葉っぱを飛ばして3つの花だけを左から順に！' },
        { vi: 'Chạm bông hoa trái, rồi bông thứ hai, rồi bông phải.', en: 'Tap left flower, middle-right flower, far-right flower.', es: 'Toca las 3 flores en orden.', ja: '左、中右、右端の3つの花をタップしよう！' },
      ],
      explanation: { vi: 'Hoàn thành xuất sắc chặng Khởi động (60/250 màn)!', en: 'Easy tier complete — 60 warm-up levels mastered!', es: '¡Nivel Fácil completado!', ja: '初級60問クリアおめでとうございます！' },
    },
  ];

  return [...fromSpecs, ...batch36to60, ...specs41to60, ...specs46to60];
}

export const PACK_1_EASY_ALL: Puzzle[] = [
  ...PACK_1_EASY,
  ...EXTRA_EASY,
  ...EASY_BATCH_2,
  ...EASY_SPECS.map((item) => ({ ...item, difficulty: 'easy' as const })),
  ...buildEasyExtra(),
];

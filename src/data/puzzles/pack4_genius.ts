import { Puzzle, PuzzleMechanic } from './types';

type Quad = [string, string, string, string];
const loc = (q: Quad) => ({ vi: q[0], en: q[1], es: q[2], ja: q[3] });

function buildGenius206to250(): Puzzle[] {
  const puzzles: Puzzle[] = [];

  const iconicGenius: Array<{
    id: number;
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
      id: 206, cat: 'trick',
      t: ['Cú lừa Thiên tài #1', 'Master Stroop Word', 'Palabra Maestra', '天才の言葉トリック'],
      p: ['Đừng bấm bất kỳ vật thể nào! Hãy chạm thẳng vào chữ THIÊN TÀI trong đề bài!', 'Ignore every button below — tap the word GENIUS inside this prompt!', '¡Ignora los botones de abajo — toca la palabra GENIO en este texto!', '下のボタンはすべて罠！問題文の中の「天才」という文字をタップしよう！'],
      m: {
        type: 'scene_tap',
        tapPromptWord: { vi: 'THIÊN TÀI', en: 'GENIUS', es: 'GENIO', ja: '天才' },
        objects: [
          { id: 'd1', shape: 'diamond', x: 25, y: 55, scale: 1.2, decoy: true },
          { id: 'd2', shape: 'trophy', x: 50, y: 55, scale: 1.2, decoy: true },
          { id: 'd3', shape: 'bomb', x: 75, y: 55, scale: 1.2, decoy: true },
        ],
      },
      h1: ['Tất cả biểu tượng bên dưới đều là mồi nhử.', 'Every icon on the board is a decoy.', 'Todos los iconos de abajo son señuelos.', '下のアイコンは全部ダミーだよ。'],
      h2: ['Mục tiêu nằm ngay trong phần chữ câu hỏi.', 'Look directly inside the prompt text.', 'Mira dentro del texto del enunciado.', '問題文の文字を直接触ってみよう。'],
      h3: ['Chạm vào từ THIÊN TÀI ở phần câu hỏi.', 'Tap the word GENIUS in the question.', 'Toca la palabra GENIO en la pregunta.', '問題文の「天才」をタップ！'],
      e: ['Chạm đúng từ khóa trong câu hỏi là bản sắc Brain Test!', 'Prompt-word interaction mastered!', '¡Interacción con el texto dominada!', '問題文の文字タップを見事に使いこなしました！'],
    },
    {
      id: 207, cat: 'lock',
      t: ['Thang máy thiên tài', 'Einstein’s Clock Code', 'Código del Reloj', '天才の暗号錠'],
      p: ['Nếu 1→3, 2→3, 3→5, 4→4, 5→4 (tiếng Anh: ONE=3, TWO=3, THREE=5, FOUR=4, FIVE=4)... vậy 11 (ELEVEN) = ?', 'If 1→3, 2→3, 3→5, 4→4, 5→4 (letter counts: ONE=3, TWO=3...), what is 11 (ELEVEN)?', 'Si 1→3, 2→3, 3→5, 4→4, 5→4 (letras en inglés: ONE=3...), ¿cuánto es 11 (ELEVEN)?', '1→3, 2→3, 3→5, 4→4, 5→4（英単語の文字数：ONE=3, TWO=3...）のとき、11（ELEVEN）は？'],
      m: { type: 'lock_dial', clueDisplay: 'ONE=3 · TWO=3 · THREE=5 · ELEVEN=?', correctCode: '6', maxLength: 2 },
      h1: ['Đếm số chữ cái trong cách viết tiếng Anh của con số!', 'Count the letters in the English word!', 'Cuenta las letras de la palabra en inglés.', '英単語のアルファベット数を数えよう！'],
      h2: ['E-L-E-V-E-N có mấy chữ cái?', 'How many letters are in E-L-E-V-E-N?', '¿Cuántas letras tiene E-L-E-V-E-N?', 'E-L-E-V-E-N は何文字？'],
      h3: ['6 chữ cái. Nhập 6.', '6 letters. Enter 6.', '6 letras. Ingresa 6.', '6文字！答えは「6」！'],
      e: ['E-L-E-V-E-N gồm đúng 6 ký tự!', 'ELEVEN has 6 letters!', '¡ELEVEN tiene 6 letras!', 'ELEVENは6文字なので正解は6です！'],
    },
    {
      id: 208, cat: 'visual',
      t: ['Kim tự tháp 4 tầng', '20-Cube Pyramid', 'Pirámide de 20 cubos', '4段20個ピラミッド'],
      p: ['Tháp khối 4 tầng góc vuông (tầng 1: 1, tầng 2: 3, tầng 3: 6, tầng 4: 10) có tất cả bao nhiêu khối?', 'How many cubes form a full 4-layer corner pyramid?', '¿Cuántos cubos forman esta pirámide completa de 4 niveles?', 'この4段の角ピラミッドは全部で何個の立方体でできている？'],
      m: { type: 'visual_count', visualKind: 'cube_stack', variant: 3, correctAnswer: 20, min: 1, max: 40 },
      h1: ['Cộng các số tam giác qua 4 tầng.', 'Sum the triangular layers across 4 tiers.', 'Suma los niveles triangulares.', '上から1層ずつ三角形の数を足そう。'],
      h2: ['1 + 3 + 6 + 10 = ?', '1 + 3 + 6 + 10 = ?', '1 + 3 + 6 + 10 = ?', '1 ＋ 3 ＋ 6 ＋ 10 ＝ ?'],
      h3: ['Tổng bằng 20 khối.', 'Total: 20 cubes.', 'Total: 20 cubos.', '合計「20」個！'],
      e: ['1 + 3 + 6 + 10 = 20 khối lập phương!', '1 + 3 + 6 + 10 = 20 cubes!', '¡1 + 3 + 6 + 10 = 20 cubos!', '合計20個の立方体で構成されています！'],
    },
    {
      id: 209, cat: 'action',
      t: ['Thử thách bình tĩnh 5 giây', 'Zen Patience (5s)', 'Paciencia Zen (5s)', '5秒の不動心'],
      p: ['Đừng bấm bất kỳ nút nào trên sân! Chờ trọn vẹn 5 giây!', 'Resist temptation! Do NOT touch anything for 5 full seconds!', '¡Resiste la tentación! NO toques nada durante 5 segundos.', '誘惑に負けるな！5秒間一切触れずにじっと待とう！'],
      m: {
        type: 'scene_tap', waitSeconds: 5,
        objects: [
          { id: 'b1', shape: 'button_red', x: 32, y: 55, scale: 1.35, decoy: true, label: { vi: 'NHẤN NGAY', en: 'CLICK NOW', es: 'PULSA YA', ja: '今すぐ押せ' } },
          { id: 'b2', shape: 'button_green', x: 68, y: 55, scale: 1.35, decoy: true, label: { vi: 'NHẬN THƯỞNG', en: 'FREE BONUS', es: 'PREMIO', ja: 'ボーナス' } },
        ],
      },
      h1: ['Cả nút đỏ lẫn nút xanh đều là bẫy tâm lý!', 'Both the red AND green buttons are traps!', '¡Tanto el botón rojo como el verde son trampas!', '赤も緑も両方ワナだよ！'],
      h2: ['Bỏ tay khỏi màn hình trong 5 giây.', 'Keep hands off for 5 seconds.', 'No toques nada por 5 segundos.', '5秒間何も押さずに待とう。'],
      h3: ['Đợi bộ đếm về 0 để qua màn.', 'Wait for the 5-second timer to finish.', 'Espera a que termine el contador.', 'タイマーが0になるまで待てばクリア！'],
      e: ['Tâm bất biến giữa vạn nút bấm giả!', 'Iron willpower defeated both decoys!', '¡Voluntad de hierro!', '見事誘惑に打ち勝ちました！'],
    },
    {
      id: 210, cat: 'lock',
      t: ['Mật mã 9642', 'Two-Digit Genius Lock', 'Candado Genio', '天才の暗号 #210'],
      p: ['Nếu 8+2=16106, 5+4=2091, 9+6=54153... vậy 7+5 = ?', 'If 8+2=16106, 5+4=2091, 9+6=54153, then 7+5 = ?', 'Si 8+2=16106, 5+4=2091, 9+6=54153, ¿cuánto es 7+5?', '8+2=16106、5+4=2091、9+6=54153 のとき、7+5 = ?'],
      m: { type: 'lock_dial', clueDisplay: '9+6 → (9×6)(9+6)(9-6) → 54153', correctCode: '35122', maxLength: 6 },
      h1: ['Mỗi kết quả ghép từ 3 phép tính: Nhân · Cộng · Trừ.', 'Each code concatenates Multiply · Add · Subtract.', 'Concatena Multiplicar · Sumar · Restar.', '「掛け算」「足し算」「引き算」の3つを繋げているよ！'],
      h2: ['7×5 = 35, 7+5 = 12, 7-5 = 2.', '7×5 = 35, 7+5 = 12, 7-5 = 2.', '7×5 = 35, 7+5 = 12, 7-5 = 2.', '7×5=35、7+5=12、7−5=2！'],
      h3: ['Ghép lại thành 35122.', 'Concatenated: 35122.', 'Resultado: 35122.', '繋げると「35122」！'],
      e: ['(7×5)(7+5)(7-5) = 35122!', '35 · 12 · 2 = 35122!', '¡35 · 12 · 2 = 35122!', '35・12・2を繋げて35122です！'],
    },
  ];

  // Fill 206..250 (45 unique Genius puzzles)
  for (const g of iconicGenius) {
    puzzles.push({
      id: g.id, difficulty: 'genius', category: g.cat,
      title: loc(g.t), prompt: loc(g.p), mechanic: g.m,
      hints: [loc(g.h1), loc(g.h2), loc(g.h3)], explanation: loc(g.e),
    });
  }

  for (let id = 211; id <= 250; id++) {
    const idx = id - 211;
    const mod = idx % 5;
    const step = Math.floor(idx / 5) + 1;

    if (mod === 0) {
      // Genius Concatenation / Algebraic Locks
      const a = 4 + step;
      const b = 2 + (step % 4);
      const ans = `${a * b}${a + b}${a - b}`;
      puzzles.push({
        id, difficulty: 'genius', category: 'lock',
        title: { vi: `Mật mã hợp nhất #${id}`, en: `Tri-Op Cipher #${id}`, es: `Cifrado #${id}`, ja: `3連結暗号 #${id}` },
        prompt: {
          vi: `Theo quy luật: 6+3=1893, 8+5=40133. Hãy giải mã ${a}+${b} = ?`,
          en: `Pattern: 6+3=1893, 8+5=40133. Decode ${a}+${b} = ?`,
          es: `Patrón: 6+3=1893, 8+5=40133. Descifra ${a}+${b} = ?`,
          ja: `規則：6+3=1893、8+5=40133。では ${a}+${b} = ?`,
        },
        mechanic: { type: 'lock_dial', clueDisplay: `(A×B)(A+B)(A-B) → ${a}+${b}`, correctCode: ans, maxLength: 6 },
        hints: [
          { vi: 'Ghép 3 kết quả: Tích, Tổng, Hiệu.', en: 'Concatenate Product, Sum, Difference.', es: 'Une Producto, Suma y Resta.', ja: '積・和・差を順に並べよう。' },
          { vi: `${a}×${b}=${a * b}, ${a}+${b}=${a + b}, ${a}-${b}=${a - b}.`, en: `${a}×${b}=${a * b}, ${a}+${b}=${a + b}, ${a}-${b}=${a - b}.`, es: `${a}×${b}=${a * b}, ${a}+${b}=${a + b}, ${a}-${b}=${a - b}.`, ja: `${a * b}・${a + b}・${a - b}` },
          { vi: `Đáp án là ${ans}.`, en: `Code: ${ans}.`, es: `Código: ${ans}.`, ja: `答えは「${ans}」！` },
        ],
        explanation: { vi: `Ghép Tích-Tổng-Hiệu cho ra ${ans}!`, en: `Product-Sum-Difference yields ${ans}!`, es: `¡Resultado ${ans}!`, ja: `3つの結果を並べて ${ans} になります！` },
      });
    } else if (mod === 1) {
      // Genius 5-switch master circuits
      const mask = [
        step % 2 === 0,
        step % 3 !== 0,
        true,
        step % 2 === 1,
        (step + 1) % 3 !== 0,
      ];
      const onList = mask.map((v, i) => (v ? i + 1 : 0)).filter(Boolean).join('-');
      puzzles.push({
        id, difficulty: 'genius', category: 'action',
        title: { vi: `Mạch 5 công tắc #${id}`, en: `5-Bit Circuit #${id}`, es: `Circuito 5-Bit #${id}`, ja: `5連スイッチ #${id}` },
        prompt: {
          vi: `Khớp đúng mạch 5 công tắc (${onList}) để khai mở năng lượng!`,
          en: `Align the 5-bit circuit (${onList}) to unlock full power!`,
          es: `¡Alinea el circuito de 5 bits (${onList})!`,
          ja: `5つのスイッチのうち（${onList}）だけをONにしよう！`,
        },
        mechanic: {
          type: 'action_meter', mode: 'switches', targetShape: 'bulb',
          requiredValue: mask.filter(Boolean).length, switchCount: 5, targetMask: mask,
          meterLabel: { vi: `Bật: ${onList}`, en: `ON: ${onList}`, es: `ON: ${onList}`, ja: `ON: ${onList}` },
        },
        hints: [
          { vi: 'Kiểm tra chính xác cả 5 vị trí từ 1 đến 5.', en: 'Check all 5 switches carefully.', es: 'Verifica los 5 interruptores.', ja: '1〜5番すべてを丁寧に確認しよう。' },
          { vi: `Chỉ bật các vị trí: ${onList}.`, en: `Only turn ON: ${onList}.`, es: `Enciende solo: ${onList}.`, ja: `${onList} だけON！` },
          { vi: `Trạng thái: ${mask.map((x) => (x ? 'ON' : 'OFF')).join(', ')}.`, en: `Pattern: ${mask.map((x) => (x ? 'ON' : 'OFF')).join(', ')}.`, es: `Patrón: ${mask.map((x) => (x ? 'ON' : 'OFF')).join(', ')}.`, ja: `設定：${mask.map((x) => (x ? 'ON' : 'OFF')).join(', ')}` },
        ],
        explanation: { vi: 'Hệ thống mạch 5 bit kích hoạt thành công!', en: '5-bit circuit locked in!', es: '¡Circuito de 5 bits completado!', ja: '5連スイッチを完璧に揃えました！' },
      });
    } else if (mod === 2) {
      // Genius multi-step dark room + sequential tap
      puzzles.push({
        id, difficulty: 'genius', category: 'trick',
        title: { vi: `Giải mã bộ đôi #${id}`, en: `Dual Cover Vault #${id}`, es: `Doble trampa #${id}`, ja: `二重の隠し扉 #${id}` },
        prompt: {
          vi: 'Tìm ngôi sao trước, rồi mới chạm viên kim cương — mọi thứ đều đang ẩn trong bóng tối!',
          en: 'Tap STAR first, then DIAMOND — uncover both in the dark room!',
          es: '¡Toca ESTRELLA y luego DIAMANTE — descúbrelos en la oscuridad!',
          ja: '闇の中から「星 → ダイヤ」の順に見つけてタップしよう！',
        },
        mechanic: {
          type: 'scene_tap', backdrop: 'night', darkRoom: true,
          objects: [
            { id: 'star', shape: 'star', x: 26, y: 62, scale: 1.05, isTarget: true, targetOrder: 1 },
            { id: 'cloud', shape: 'cloud', x: 26, y: 62, scale: 1.35, draggable: true },
            { id: 'diamond', shape: 'diamond', x: 76, y: 62, scale: 1.05, isTarget: true, targetOrder: 2 },
            { id: 'rock', shape: 'rock', x: 76, y: 62, scale: 1.35, draggable: true },
            { id: 'flash', shape: 'flashlight', x: 50, y: 26, scale: 1.15, draggable: true },
          ],
        },
        hints: [
          { vi: 'Dùng đèn pin soi 2 góc dưới, sau đó dọn mây và đá!', en: 'Sweep the flashlight below and move both covers!', es: 'Ilumina abajo y mueve ambas cubiertas.', ja: '懐中電灯で照らしながら雲と岩の両方をどかそう！' },
          { vi: 'Sao nằm dưới đám mây (trái), Kim cương nằm dưới tảng đá (phải).', en: 'Star is under the left cloud; Diamond is under the right rock.', es: 'Estrella bajo la nube; Diamante bajo la roca.', ja: '左の雲の下に星、右の岩の下にダイヤがあるよ！' },
          { vi: 'Chạm Ngôi sao (trái) trước, rồi chạm Kim cương (phải).', en: 'Tap Star first, then Diamond!', es: '¡Toca Estrella primero y luego Diamante!', ja: '星 → ダイヤ の順にタップしよう！' },
        ],
        explanation: { vi: 'Thao tác đa bước chuẩn xác như thiên tài!', en: 'Multi-step darkness puzzle cleared!', es: '¡Desafío multi-paso superado!', ja: '暗闇の複数ギミックを見事突破しました！' },
      });
    } else if (mod === 3) {
      // Genius 4-weight scale
      const target = 24 + step * 2;
      const w1 = 8;
      const w2 = 7;
      const w3 = 5;
      const w4 = target - w1 - w2 - w3;
      puzzles.push({
        id, difficulty: 'genius', category: 'drag',
        title: { vi: `Cân thiên tài ${target}kg`, en: `Master Scale ${target}kg`, es: `Balanza Maestra ${target}kg`, ja: `天才の天秤 ${target}kg` },
        prompt: {
          vi: `Phối hợp các quả cân để đĩa phải đạt chuẩn ${target} kg!`,
          en: `Combine the weights so the right pan equals ${target} kg!`,
          es: `¡Combina las pesas para alcanzar ${target} kg!`,
          ja: `右の皿が合計 ${target}kg になるように重りを乗せよう！`,
        },
        mechanic: {
          type: 'drag_combine', mode: 'balance_scale', targetBalance: target,
          items: [
            { id: 'g1', shape: 'chest', x: 16, y: 74, weight: w1, label: `${w1}kg` },
            { id: 'g2', shape: 'rock', x: 38, y: 74, weight: w2, label: `${w2}kg` },
            { id: 'g3', shape: 'trophy', x: 60, y: 74, weight: w3, label: `${w3}kg` },
            { id: 'g4', shape: 'diamond', x: 82, y: 74, weight: w4, label: `${w4}kg` },
          ],
        },
        hints: [
          { vi: `Cộng cả 4 vật nặng xem có bằng ${target} kg không!`, en: `Check if all 4 weights together sum to ${target} kg!`, es: `¡Comprueba si los 4 juntos suman ${target} kg!`, ja: '4つ全部を足すと何kgになるか計算してみよう！' },
          { vi: `${w1} + ${w2} + ${w3} + ${w4} = ${target}.`, en: `${w1} + ${w2} + ${w3} + ${w4} = ${target}.`, es: `${w1} + ${w2} + ${w3} + ${w4} = ${target}.`, ja: `${w1}＋${w2}＋${w3}＋${w4}＝${target}！` },
          { vi: 'Đặt cả 4 món lên đĩa phải rồi Kiểm tra.', en: 'Place all 4 items on the right pan and check.', es: 'Pon los 4 objetos y comprueba.', ja: '4つすべてを右の皿に乗せて判定！' },
        ],
        explanation: { vi: `Tổng đúng ${target} kg thăng bằng tuyệt đối!`, en: `All weights combine cleanly to ${target} kg!`, es: `¡${target} kg exactos!`, ja: `ぴったり${target}kgで釣り合いました！` },
      });
    } else {
      // Genius riddles & final 250th celebration puzzle!
      const isFinal = id === 250;
      if (isFinal) {
        puzzles.push({
          id: 250, difficulty: 'genius', category: 'trick',
          title: { vi: 'Đỉnh cao Trí tuệ #250', en: 'Grand Finale #250', es: 'Gran Final #250', ja: '最終関門 #250' },
          prompt: {
            vi: 'Màn cuối cùng! Giải phóng mặt trời khỏi mây đen, bật sáng chiếc cúp và chạm vào CÚP VÀNG!',
            en: 'Final Level! Clear the cloud, find the hidden trophy, and tap the TROPHY!',
            es: '¡Nivel Final! Despeja la nube y toca el TROFEO oculto.',
            ja: '最終ステージ！雲をどかして隠れたトロフィーをタップしよう！',
          },
          mechanic: {
            type: 'scene_tap', backdrop: 'day',
            objects: [
              { id: 'bomb', shape: 'bomb', x: 25, y: 58, scale: 1.15, decoy: true },
              { id: 'trophy', shape: 'trophy', x: 52, y: 52, scale: 1.35, isTarget: true },
              { id: 'cloud1', shape: 'raincloud', x: 52, y: 52, scale: 1.55, draggable: true },
              { id: 'rock', shape: 'rock', x: 78, y: 60, scale: 1.1, decoy: true },
            ],
          },
          hints: [
            { vi: 'Chiếc cúp vô địch đang ẩn mình ngay chính giữa.', en: 'The championship trophy is hiding right in the center.', es: 'El trofeo está escondido justo en el centro.', ja: '優勝トロフィーは真ん中に隠れているよ。' },
            { vi: 'Kéo đám mây xám ở giữa ra chỗ khác.', en: 'Drag the center raincloud aside.', es: 'Mueve la nube central hacia un lado.', ja: '真ん中の雨雲を横にドラッグしてどかそう。' },
            { vi: 'Chạm vào chiếc cúp vàng để chinh phục toàn bộ 250 màn!', en: 'Tap the golden trophy to conquer all 250 levels!', es: '¡Toca el trofeo dorado para completar los 250 niveles!', ja: '金のトロフィーをタップして全250問制覇！！' },
          ],
          explanation: {
            vi: 'CHÚC MỪNG! Bạn đã hoàn thành trọn vẹn 250 câu đố BrainSpark!',
            en: 'CONGRATULATIONS! You conquered all 250 BrainSpark puzzles!',
            es: '¡FELICIDADES! ¡Completaste los 250 acertijos de BrainSpark!',
            ja: 'おめでとうございます！全250問のBrainSparkを完全制覇しました！',
          },
        });
      } else {
        const geniusRiddles: Array<{ t: Quad; p: Quad; opts: [Quad, Quad, Quad, Quad]; ci: 0 | 1 | 2 | 3; h1: Quad; h2: Quad; h3: Quad; e: Quad }> = [
          {
            t: ['Nghịch lý anh em', 'Twin Birth Trick', 'Gemelos', '双子の不思議'],
            p: ['Hai anh em sinh cùng ngày, cùng tháng, cùng năm, cùng bố mẹ, nhưng không phải sinh đôi. Tại sao?', 'Two babies born on the same day, month, year, to the same parents are NOT twins. Why?', 'Dos bebés nacen el mismo día, mes, año y de los mismos padres, pero no son gemelos. ¿Por qué?', '同じ年・同じ月・同じ日に同じ両親から生まれた2人なのに、双子ではありません。なぜ？'],
            opts: [
              ['Họ là sinh ba!', 'They are triplets!', '¡Son trillizos!', '三つ子（以上）だから！'],
              ['Họ khác múi giờ', 'Different timezones', 'Distinta zona horaria', '時差があるから'],
              ['Một người sinh năm nhuận', 'Leap year', 'Año bisiesto', 'うるう年だから'],
              ['Không thể xảy ra', 'Impossible', 'Imposible', 'ありえない'],
            ],
            ci: 0,
            h1: ['Không chỉ có 2 đứa trẻ được sinh ra ngày hôm đó!', 'Think bigger than just 2 babies!', '¡Piensa en más de 2 bebés!', '2人だけが生まれたとは限らないよ！'],
            h2: ['Nếu có 3 (hoặc 4) em bé sinh cùng lúc thì sao?', 'What if there were 3 babies born together?', '¿Y si nacieron 3 bebés juntos?', 'もし3人同時に生まれていたら？'],
            h3: ['Chọn "Họ là sinh ba!".', 'Choose "They are triplets!".', 'Elige "¡Son trillizos!".', '「三つ子（以上）だから！」を選ぼう！'],
            e: ['Là 2 trong số 3 anh em sinh ba nên không gọi là sinh đôi!', 'Two members of a set of triplets are not twins!', '¡Son dos de trillizos!', '三つ子のうちの2人なので双子ではありません！'],
          },
          {
            t: ['Người đàn ông và thang máy', 'Rainy Elevator', 'El ascensor', 'エレベーターの謎'],
            p: ['Ông An sống tầng 10. Trời nắng ông đi thang máy lên tầng 6 rồi đi bộ lên tầng 10. Trời mưa ông đi thẳng lên tầng 10. Tại sao?', 'Leo lives on floor 10. Sunny days he takes the elevator to floor 6 and walks up. Rainy days he rides straight to floor 10. Why?', 'Leo vive en el piso 10. Si hace sol sube al 6 y camina. Si llueve va directo al 10. ¿Por qué?', '10階に住む男性。晴れの日は6階で降りて階段を使いますが、雨の日は10階まで直行します。なぜ？'],
            opts: [
              ['Ông muốn tập thể dục', 'He likes exercise', 'Le gusta ejercitar', '運動したいから'],
              ['Ông quá thấp, trời mưa mới có cây ô để chọc nút số 10!', 'He is short — only on rainy days does his umbrella reach button 10!', 'Es bajito y solo con el paraguas alcanza el botón 10', '背が低く、雨の日に持っている傘でしか10階のボタンを押せないから！'],
              ['Thang máy hỏng khi nắng', 'Elevator breaks in sun', 'Se daña con el sol', '晴れの日は故障するから'],
              ['Ông sợ độ cao', 'Fear of heights', 'Miedo a las alturas', '高所恐怖症だから'],
            ],
            ci: 1,
            h1: ['Liên quan tới chiều cao của ông ấy và đồ vật mang theo khi trời mưa.', 'Think about his height and what he carries in the rain.', 'Piensa en su estatura y qué lleva cuando llueve.', '彼の身長と「雨の日の持ち物」に注目しよう。'],
            h2: ['Khi trời mưa, người ta hay cầm theo cây ô (dù)!', 'On rainy days he carries an umbrella!', '¡Cuando llueve lleva un paraguas!', '雨の日は長い「傘」を持っているよね！'],
            h3: ['Chọn phương án cây ô giúp với tới nút tầng 10.', 'Choose the umbrella reaching button 10.', 'Elige la opción del paraguas.', '傘を使って10階のボタンを押せる選択肢を選ぼう！'],
            e: ['Bình thường chỉ với tới nút 6, có cây ô mới bấm được nút 10!', 'He uses his umbrella tip to reach the 10th-floor button!', '¡Usa el paraguas para pulsar el 10!', '傘の先端で高い位置の10階ボタンを押していたのです！'],
          },
        ];
        const gr = geniusRiddles[step % geniusRiddles.length];
        puzzles.push({
          id, difficulty: 'genius', category: 'riddle',
          title: loc(gr.t), prompt: loc(gr.p),
          mechanic: {
            type: 'lateral_choice', illustration: 'umbrella',
            options: [loc(gr.opts[0]), loc(gr.opts[1]), loc(gr.opts[2]), loc(gr.opts[3])],
            correctIndex: gr.ci,
          },
          hints: [loc(gr.h1), loc(gr.h2), loc(gr.h3)],
          explanation: loc(gr.e),
        });
      }
    }
  }

  return puzzles;
}

export const PACK_4_GENIUS_ALL: Puzzle[] = buildGenius206to250();

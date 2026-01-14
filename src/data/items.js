// TFT Set 16 アイテムデータ

// 基本アイテム（Components）
export const baseItems = [
  { id: 'bfsword', name: 'B.F.ソード', icon: 'bfsword.png', hiragana: 'びーえふそーど', romaji: 'biefusodo' },
  { id: 'recurvebow', name: 'リカーブ ボウ', icon: 'recurvebow.png', hiragana: 'りかーぶぼう', romaji: 'rikabubou' },
  { id: 'chainvest', name: 'チェイン ベスト', icon: 'chainvest.png', hiragana: 'ちぇいんべすと', romaji: 'cheinbesuto' },
  { id: 'negatroncloak', name: 'ネガトロン クローク', icon: 'negatroncloak.png', hiragana: 'ねがとろんくろーく', romaji: 'negatoronkuroku' },
  { id: 'needlesslylargerod', name: 'ムダニ デカイ ロッド', icon: 'needlesslylargerod.png', hiragana: 'むだにでかいろっど', romaji: 'mudanidekairoddo' },
  { id: 'tear', name: '女神の涙', icon: 'tear.png', hiragana: 'めがみのなみだ', romaji: 'megaminonamida' },
  { id: 'giantsbelt', name: 'ジャイアント ベルト', icon: 'giantsbelt.png', hiragana: 'じゃいあんとべると', romaji: 'jaiantoberuto' },
  { id: 'sparringgloves', name: 'スパーリング グローブ', icon: 'sparringgloves.png', hiragana: 'すぱーりんぐぐろーぶ', romaji: 'suparingugurobu' },
];

// 合成アイテム（1文字コードをキーとして管理、重複なし）
// コード: 0-9, a-z（36個のユニークな組み合わせ）
export const combinedItems = {
  // B.F.ソード + B.F.ソード (0-0)
  '0': { id: 'deathblade', name: 'デスブレード', icon: 'deathblade.png', components: ['bfsword', 'bfsword'], hiragana: 'ですぶれーど', romaji: 'desuburedo' },
  // B.F.ソード + リカーブボウ (0-1)
  '1': { id: 'giantslayer', name: 'ジャイアント スレイヤー', icon: 'giantslayer.png', components: ['bfsword', 'recurvebow'], hiragana: 'じゃいあんとすれいやー', romaji: 'jaiantosureiyaa' },
  // B.F.ソード + チェインベスト (0-2)
  '2': { id: 'edgeofnight', name: 'ナイト エッジ', icon: 'edgeofnight.png', components: ['bfsword', 'chainvest'], hiragana: 'ないとえっじ', romaji: 'naitoejji' },
  // B.F.ソード + ネガトロンクローク (0-3)
  '3': { id: 'bloodthirster', name: 'ブラッドサースター', icon: 'bloodthirster.png', components: ['bfsword', 'negatroncloak'], hiragana: 'ぶらっどさーすたー', romaji: 'buraddosasuta' },
  // B.F.ソード + ムダニデカイロッド (0-4)
  '4': { id: 'hextechgunblade', name: 'ヘクステック ガンブレード', icon: 'hextechgunblade.png', components: ['bfsword', 'needlesslylargerod'], hiragana: 'へくすてっくがんぶれーど', romaji: 'hekusutekkuganburedo' },
  // B.F.ソード + 女神の涙 (0-5)
  '5': { id: 'spearofshojin', name: 'ショウジンの矛', icon: 'spearofshojin.png', components: ['bfsword', 'tear'], hiragana: 'しょうじんのほこ', romaji: 'shoujinnohoko' },
  // B.F.ソード + ジャイアントベルト (0-6)
  '6': { id: 'steraksgage', name: 'ステラックの篭手', icon: 'steraksgage.png', components: ['bfsword', 'giantsbelt'], hiragana: 'すてらっくのこて', romaji: 'suterakkunokote' },
  // B.F.ソード + スパーリンググローブ (0-7)
  '7': { id: 'infinityedge', name: 'インフィニティ エッジ', icon: 'infinityedge.png', components: ['bfsword', 'sparringgloves'], hiragana: 'いんふぃにてぃえっじ', romaji: 'infinitiejji' },
  // リカーブボウ + リカーブボウ (1-1)
  '8': { id: 'redsnifferscopulatorbuff', name: 'レッド バフ', icon: 'redsnifferscopulatorbuff.png', components: ['recurvebow', 'recurvebow'], hiragana: 'れっどばふ', romaji: 'reddobafu' },
  // リカーブボウ + チェインベスト (1-2)
  '9': { id: 'giantsvow', name: '巨人の誓い', icon: 'giantsvow.png', components: ['recurvebow', 'chainvest'], hiragana: 'きょじんのちかい', romaji: 'kyojinnochikai' },
  // リカーブボウ + ネガトロンクローク (1-3)
  'a': { id: 'krakensfury', name: 'クラーケンの怒り', icon: 'runaanshurricane.png', components: ['recurvebow', 'negatroncloak'], hiragana: 'くらーけんのいかり', romaji: 'kurakennoikari' },
  // リカーブボウ + ムダニデカイロッド (1-4)
  'b': { id: 'guinsoosrageblade', name: 'グインソー レイジブレード', icon: 'guinsoosrageblade.png', components: ['recurvebow', 'needlesslylargerod'], hiragana: 'ぐいんそーれいじぶれーど', romaji: 'guinsorejjiburedo' },
  // リカーブボウ + 女神の涙 (1-5)
  'c': { id: 'voidstaff', name: 'ヴォイド スタッフ', icon: 'statikkshiv.png', components: ['recurvebow', 'tear'], hiragana: 'ゔぉいどすたっふ', romaji: 'voidosutaffu' },
  // リカーブボウ + ジャイアントベルト (1-6)
  'd': { id: 'nashtorstooth', name: 'ナッシャー トゥース', icon: 'nashtorstooth.png', components: ['recurvebow', 'giantsbelt'], hiragana: 'なっしゃーとぅーす', romaji: 'nasshatosu' },
  // リカーブボウ + スパーリンググローブ (1-7)
  'e': { id: 'lastwhisper', name: 'ラスト ウィスパー', icon: 'lastwhisper.png', components: ['recurvebow', 'sparringgloves'], hiragana: 'らすとうぃすぱー', romaji: 'rasutouisupa' },
  // チェインベスト + チェインベスト (2-2)
  'f': { id: 'bramble', name: 'ブランブル ベスト', icon: 'bramble.png', components: ['chainvest', 'chainvest'], hiragana: 'ぶらんぶるべすと', romaji: 'buranburubesuto' },
  // チェインベスト + ネガトロンクローク (2-3)
  'g': { id: 'gargoyle', name: 'ガーゴイル ストーンプレート', icon: 'gargoyle.png', components: ['chainvest', 'negatroncloak'], hiragana: 'がーごいるすとーんぷれーと', romaji: 'gagoirusutompureto' },
  // チェインベスト + ムダニデカイロッド (2-4)
  'h': { id: 'crownguard', name: 'クラウンガード', icon: 'crownguard.png', components: ['chainvest', 'needlesslylargerod'], hiragana: 'くらうんがーど', romaji: 'kuraungado' },
  // チェインベスト + 女神の涙 (2-5)
  'i': { id: 'protectorsvow', name: 'プロテクターの誓い', icon: 'protectorsvow.png', components: ['chainvest', 'tear'], hiragana: 'ぷろてくたーのちかい', romaji: 'purotekutanochikai' },
  // チェインベスト + ジャイアントベルト (2-6)
  'j': { id: 'sunfire', name: 'サンファイア ケープ', icon: 'sunfire.png', components: ['chainvest', 'giantsbelt'], hiragana: 'さんふぁいあけーぷ', romaji: 'sanfaiakepu' },
  // チェインベスト + スパーリンググローブ (2-7)
  'k': { id: 'steadfastheart', name: '揺るがぬ心', icon: 'steadfastheart.png', components: ['chainvest', 'sparringgloves'], hiragana: 'ゆるがぬこころ', romaji: 'yuruganukokoro' },
  // ネガトロンクローク + ネガトロンクローク (3-3)
  'l': { id: 'dragonsclaw', name: 'ドラゴン クロウ', icon: 'dragonsclaw.png', components: ['negatroncloak', 'negatroncloak'], hiragana: 'どらごんくろう', romaji: 'doragonkurou' },
  // ネガトロンクローク + ムダニデカイロッド (3-4)
  'm': { id: 'ionicspark', name: 'アイオニック スパーク', icon: 'ionicspark.png', components: ['negatroncloak', 'needlesslylargerod'], hiragana: 'あいおにっくすぱーく', romaji: 'aionikkusupaaku' },
  // ネガトロンクローク + 女神の涙 (3-5)
  'n': { id: 'adaptivehelm', name: 'アダプティブ ヘルム', icon: 'adaptivehelm.png', components: ['negatroncloak', 'tear'], hiragana: 'あだぷてぃぶへるむ', romaji: 'adaputibuherumu' },
  // ネガトロンクローク + ジャイアントベルト (3-6)
  'o': { id: 'evenshroud', name: 'イーブン シュラウド', icon: 'evenshroud.png', components: ['negatroncloak', 'giantsbelt'], hiragana: 'いーぶんしゅらうど', romaji: 'ibunshuuraudo' },
  // ネガトロンクローク + スパーリンググローブ (3-7)
  'p': { id: 'quicksilver', name: 'クイックシルバー', icon: 'quicksilver.png', components: ['negatroncloak', 'sparringgloves'], hiragana: 'くいっくしるばー', romaji: 'kuikkushiruba' },
  // ムダニデカイロッド + ムダニデカイロッド (4-4)
  'q': { id: 'rabadons', name: 'ラバドン デスキャップ', icon: 'rabadons.png', components: ['needlesslylargerod', 'needlesslylargerod'], hiragana: 'らばどんですきゃっぷ', romaji: 'rabadondesukyappu' },
  // ムダニデカイロッド + 女神の涙 (4-5)
  'r': { id: 'archangels', name: 'アークエンジェル スタッフ', icon: 'archangels.png', components: ['needlesslylargerod', 'tear'], hiragana: 'あーくえんじぇるすたっふ', romaji: 'aakuenjerusutaffu' },
  // ムダニデカイロッド + ジャイアントベルト (4-6)
  's': { id: 'morellonomicon', name: 'モレロノミコン', icon: 'morellonomicon.png', components: ['needlesslylargerod', 'giantsbelt'], hiragana: 'もれろのみこん', romaji: 'moreronomikon' },
  // ムダニデカイロッド + スパーリンググローブ (4-7)
  't': { id: 'jeweledgauntlet', name: 'ジュエル ガントレット', icon: 'jeweledgauntlet.png', components: ['needlesslylargerod', 'sparringgloves'], hiragana: 'じゅえるがんとれっと', romaji: 'juerugantoretto' },
  // 女神の涙 + 女神の涙 (5-5)
  'u': { id: 'bluebuff', name: 'ブルー バフ', icon: 'bluebuff.png', components: ['tear', 'tear'], hiragana: 'ぶるーばふ', romaji: 'burubafu' },
  // 女神の涙 + ジャイアントベルト (5-6)
  'v': { id: 'spiritvisage', name: 'スピリット ビサージュ', icon: 'spiritvisage.png', components: ['tear', 'giantsbelt'], hiragana: 'すぴりっとびさーじゅ', romaji: 'supirittobisaju' },
  // 女神の涙 + スパーリンググローブ (5-7)
  'w': { id: 'handofjustice', name: 'ハンド オブ ジャスティス', icon: 'handofjustice.png', components: ['tear', 'sparringgloves'], hiragana: 'はんどおぶじゃすてぃす', romaji: 'handoobujasutisu' },
  // ジャイアントベルト + ジャイアントベルト (6-6)
  'x': { id: 'warmog', name: 'ワーモグ アーマー', icon: 'warmog.png', components: ['giantsbelt', 'giantsbelt'], hiragana: 'わーもぐあーまー', romaji: 'wamoguama' },
  // ジャイアントベルト + スパーリンググローブ (6-7)
  'y': { id: 'strikersflail', name: 'ストライカーフレイル', icon: 'strikersflail.png', components: ['giantsbelt', 'sparringgloves'], hiragana: 'すとらいかーふれいる', romaji: 'sutoraikafureiru' },
  // スパーリンググローブ + スパーリンググローブ (7-7)
  'z': { id: 'thiefsgloves', name: '盗賊のグローブ', icon: 'thiefsgloves.png', components: ['sparringgloves', 'sparringgloves'], hiragana: 'とうぞくのてぶくろ', romaji: 'touzokunotebukuro' },
};

// 全ての合成アイテムのリスト（重複なし）
export const allCombinedItems = Object.values(combinedItems);

// 素材アイテムのペアと1文字コードの対応表
// キー: "baseIndex1-baseIndex2" (baseIndex1 <= baseIndex2 で正規化)
// 値: 1文字コード（0-9, a-z の36文字）
const codeChars = '0123456789abcdefghijklmnopqrstuvwxyz';
export const itemPairCodeMap = {};
export const codeToItemPairMap = {};

let codeIndex = 0;
for (let i = 0; i < baseItems.length; i++) {
  for (let j = i; j < baseItems.length; j++) {
    const pairKey = `${i}-${j}`;
    const code = codeChars[codeIndex];
    itemPairCodeMap[pairKey] = code;
    codeToItemPairMap[code] = pairKey;
    codeIndex++;
  }
}

// 正規化されたペアキーを取得（行と列のインデックスから、常に小さい方を先にしたキーを返す）
export const getNormalizedPairKey = (rowIndex, colIndex) => {
  const minIdx = Math.min(rowIndex, colIndex);
  const maxIdx = Math.max(rowIndex, colIndex);
  return `${minIdx}-${maxIdx}`;
};

// ペアキーから1文字コードを取得
export const getCodeForPair = (rowIndex, colIndex) => {
  const pairKey = getNormalizedPairKey(rowIndex, colIndex);
  return itemPairCodeMap[pairKey];
};

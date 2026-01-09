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

// 合成アイテムマトリックス [row][col] = 合成アイテム
// row: 最初の基本アイテムのインデックス
// col: 2番目の基本アイテムのインデックス
export const combinedItems = {
  // B.F.ソード (0) の組み合わせ
  '0-0': { id: 'deathblade', name: 'デスブレード', icon: 'deathblade.png', components: ['bfsword', 'bfsword'], hiragana: 'ですぶれーど', romaji: 'desuburedo' },
  '0-1': { id: 'giantslayer', name: 'ジャイアント スレイヤー', icon: 'giantslayer.png', components: ['bfsword', 'recurvebow'], hiragana: 'じゃいあんとすれいやー', romaji: 'jaiansutosureiya' },
  '0-2': { id: 'edgeofnight', name: 'ナイト エッジ', icon: 'edgeofnight.png', components: ['bfsword', 'chainvest'], hiragana: 'ないとえっじ', romaji: 'naitoejji' },
  '0-3': { id: 'bloodthirster', name: 'ブラッドサースター', icon: 'bloodthirster.png', components: ['bfsword', 'negatroncloak'], hiragana: 'ぶらっどさーすたー', romaji: 'buraddosasuta' },
  '0-4': { id: 'hextechgunblade', name: 'ヘクステック ガンブレード', icon: 'hextechgunblade.png', components: ['bfsword', 'needlesslylargerod'], hiragana: 'へくすてっくがんぶれーど', romaji: 'hekusutekkuganburedo' },
  '0-5': { id: 'spearofshojin', name: 'ショウジンの矛', icon: 'spearofshojin.png', components: ['bfsword', 'tear'], hiragana: 'しょうじんのほこ', romaji: 'shoujinnohoko' },
  '0-6': { id: 'steraksgage', name: 'ステラックの篭手', icon: 'steraksgage.png', components: ['bfsword', 'giantsbelt'], hiragana: 'すてらっくのこて', romaji: 'suterakkunokote' },
  '0-7': { id: 'infinityedge', name: 'インフィニティ エッジ', icon: 'infinityedge.png', components: ['bfsword', 'sparringgloves'], hiragana: 'いんふぃにてぃえっじ', romaji: 'infinitiejji' },

  // リカーブ ボウ (1) の組み合わせ
  '1-0': { id: 'giantslayer', name: 'ジャイアント スレイヤー', icon: 'giantslayer.png', components: ['recurvebow', 'bfsword'], hiragana: 'じゃいあんとすれいやー', romaji: 'jaiansutosureiya' },
  '1-1': { id: 'redsnifferscopulatorbuff', name: 'レッド バフ', icon: 'redsnifferscopulatorbuff.png', components: ['recurvebow', 'recurvebow'], hiragana: 'れっどばふ', romaji: 'reddobafu' },
  '1-2': { id: 'giantsvow', name: '巨人の誓い', icon: 'giantsvow.png', components: ['recurvebow', 'chainvest'], hiragana: 'きょじんのちかい', romaji: 'kyojinnochikai' },
  '1-3': { id: 'krakensfury', name: 'クラーケンの怒り', icon: 'runaanshurricane.png', components: ['recurvebow', 'negatroncloak'], hiragana: 'くらーけんのいかり', romaji: 'kurakennoikari' },
  '1-4': { id: 'guinsoosrageblade', name: 'グインソー レイジブレード', icon: 'guinsoosrageblade.png', components: ['recurvebow', 'needlesslylargerod'], hiragana: 'ぐいんそーれいじぶれーど', romaji: 'guinsorejjiburedo' },
  '1-5': { id: 'voidstaff', name: 'ヴォイド スタッフ', icon: 'statikkshiv.png', components: ['recurvebow', 'tear'], hiragana: 'ゔぉいどすたっふ', romaji: 'voidosutaffu' },
  '1-6': { id: 'nashtorstooth', name: 'ナッシャー トゥース', icon: 'nashtorstooth.png', components: ['recurvebow', 'giantsbelt'], hiragana: 'なっしゃーとぅーす', romaji: 'nasshatosu' },
  '1-7': { id: 'lastwhisper', name: 'ラスト ウィスパー', icon: 'lastwhisper.png', components: ['recurvebow', 'sparringgloves'], hiragana: 'らすとうぃすぱー', romaji: 'rasutouisupa' },

  // チェイン ベスト (2) の組み合わせ
  '2-0': { id: 'edgeofnight', name: 'ナイト エッジ', icon: 'edgeofnight.png', components: ['chainvest', 'bfsword'], hiragana: 'ないとえっじ', romaji: 'naitoejji' },
  '2-1': { id: 'giantsvow', name: '巨人の誓い', icon: 'giantsvow.png', components: ['chainvest', 'recurvebow'], hiragana: 'きょじんのちかい', romaji: 'kyojinnochikai' },
  '2-2': { id: 'bramble', name: 'ブランブル ベスト', icon: 'bramble.png', components: ['chainvest', 'chainvest'], hiragana: 'ぶらんぶるべすと', romaji: 'buranburubesuto' },
  '2-3': { id: 'gargoyle', name: 'ガーゴイル ストーンプレート', icon: 'gargoyle.png', components: ['chainvest', 'negatroncloak'], hiragana: 'がーごいるすとーんぷれーと', romaji: 'gagoirusutompureto' },
  '2-4': { id: 'crownguard', name: 'クラウンガード', icon: 'crownguard.png', components: ['chainvest', 'needlesslylargerod'], hiragana: 'くらうんがーど', romaji: 'kuraungado' },
  '2-5': { id: 'protectorsvow', name: 'プロテクターの誓い', icon: 'protectorsvow.png', components: ['chainvest', 'tear'], hiragana: 'ぷろてくたーのちかい', romaji: 'purotekutanochikai' },
  '2-6': { id: 'sunfire', name: 'サンファイア ケープ', icon: 'sunfire.png', components: ['chainvest', 'giantsbelt'], hiragana: 'さんふぁいあけーぷ', romaji: 'sanfaiakepu' },
  '2-7': { id: 'steadfastheart', name: '揺るがぬ心', icon: 'steadfastheart.png', components: ['chainvest', 'sparringgloves'], hiragana: 'ゆるがぬこころ', romaji: 'yuruganukokoro' },

  // ネガトロン クローク (3) の組み合わせ
  '3-0': { id: 'bloodthirster', name: 'ブラッドサースター', icon: 'bloodthirster.png', components: ['negatroncloak', 'bfsword'], hiragana: 'ぶらっどさーすたー', romaji: 'buraddosasuta' },
  '3-1': { id: 'krakensfury', name: 'クラーケンの怒り', icon: 'runaanshurricane.png', components: ['negatroncloak', 'recurvebow'], hiragana: 'くらーけんのいかり', romaji: 'kurakennoikari' },
  '3-2': { id: 'gargoyle', name: 'ガーゴイル ストーンプレート', icon: 'gargoyle.png', components: ['negatroncloak', 'chainvest'], hiragana: 'がーごいるすとーんぷれーと', romaji: 'gagoirusutompureto' },
  '3-3': { id: 'dragonsclaw', name: 'ドラゴン クロウ', icon: 'dragonsclaw.png', components: ['negatroncloak', 'negatroncloak'], hiragana: 'どらごんくろう', romaji: 'doragokuro' },
  '3-4': { id: 'ionicspark', name: 'アイオニック スパーク', icon: 'ionicspark.png', components: ['negatroncloak', 'needlesslylargerod'], hiragana: 'いおにあすぱーく', romaji: 'ioniasupark' },
  '3-5': { id: 'adaptivehelm', name: 'アダプティブ ヘルム', icon: 'adaptivehelm.png', components: ['negatroncloak', 'tear'], hiragana: 'あだぷてぃぶへるむ', romaji: 'adaputibuherumu' },
  '3-6': { id: 'evenshroud', name: 'イーブン シュラウド', icon: 'evenshroud.png', components: ['negatroncloak', 'giantsbelt'], hiragana: 'いーぶんしゅらうど', romaji: 'ibunshuuraudo' },
  '3-7': { id: 'quicksilver', name: 'クイックシルバー', icon: 'quicksilver.png', components: ['negatroncloak', 'sparringgloves'], hiragana: 'くいっくしるばー', romaji: 'kuikkushiruba' },

  // ムダニ デカイ ロッド (4) の組み合わせ
  '4-0': { id: 'hextechgunblade', name: 'ヘクステック ガンブレード', icon: 'hextechgunblade.png', components: ['needlesslylargerod', 'bfsword'], hiragana: 'へくすてっくがんぶれーど', romaji: 'hekusutekkuganburedo' },
  '4-1': { id: 'guinsoosrageblade', name: 'グインソー レイジブレード', icon: 'guinsoosrageblade.png', components: ['needlesslylargerod', 'recurvebow'], hiragana: 'ぐいんそーれいじぶれーど', romaji: 'guinsorejjiburedo' },
  '4-2': { id: 'crownguard', name: 'クラウンガード', icon: 'crownguard.png', components: ['needlesslylargerod', 'chainvest'], hiragana: 'くらうんがーど', romaji: 'kuraungado' },
  '4-3': { id: 'ionicspark', name: 'アイオニック スパーク', icon: 'ionicspark.png', components: ['needlesslylargerod', 'negatroncloak'], hiragana: 'いおにあすぱーく', romaji: 'ioniasupark' },
  '4-4': { id: 'rabadons', name: 'ラバドン デスキャップ', icon: 'rabadons.png', components: ['needlesslylargerod', 'needlesslylargerod'], hiragana: 'らばどんですきゃっぷ', romaji: 'rabadondesukyappu' },
  '4-5': { id: 'archangels', name: 'アークエンジェル スタッフ', icon: 'archangels.png', components: ['needlesslylargerod', 'tear'], hiragana: 'だいてんしのつえ', romaji: 'daitenshinotsue' },
  '4-6': { id: 'morellonomicon', name: 'モレロノミコン', icon: 'morellonomicon.png', components: ['needlesslylargerod', 'giantsbelt'], hiragana: 'もれろのみこん', romaji: 'moreronomikon' },
  '4-7': { id: 'jeweledgauntlet', name: 'ジュエル ガントレット', icon: 'jeweledgauntlet.png', components: ['needlesslylargerod', 'sparringgloves'], hiragana: 'じゅえるどがんとれっと', romaji: 'juerudogantoretto' },

  // 女神の涙 (5) の組み合わせ
  '5-0': { id: 'spearofshojin', name: 'ショウジンの矛', icon: 'spearofshojin.png', components: ['tear', 'bfsword'], hiragana: 'しょうじんのほこ', romaji: 'shoujinnohoko' },
  '5-1': { id: 'voidstaff', name: 'ヴォイド スタッフ', icon: 'statikkshiv.png', components: ['tear', 'recurvebow'], hiragana: 'ゔぉいどすたっふ', romaji: 'voidosutaffu' },
  '5-2': { id: 'protectorsvow', name: 'プロテクターの誓い', icon: 'protectorsvow.png', components: ['tear', 'chainvest'], hiragana: 'ぷろてくたーのちかい', romaji: 'purotekutanochikai' },
  '5-3': { id: 'adaptivehelm', name: 'アダプティブ ヘルム', icon: 'adaptivehelm.png', components: ['tear', 'negatroncloak'], hiragana: 'あだぷてぃぶへるむ', romaji: 'adaputibuherumu' },
  '5-4': { id: 'archangels', name: 'アークエンジェル スタッフ', icon: 'archangels.png', components: ['tear', 'needlesslylargerod'], hiragana: 'だいてんしのつえ', romaji: 'daitenshinotsue' },
  '5-5': { id: 'bluebuff', name: 'ブルー バフ', icon: 'bluebuff.png', components: ['tear', 'tear'], hiragana: 'ぶるーばふ', romaji: 'burubafu' },
  '5-6': { id: 'spiritvisage', name: 'スピリット ビサージュ', icon: 'spiritvisage.png', components: ['tear', 'giantsbelt'], hiragana: 'すぴりっとびさーじゅ', romaji: 'supirittobisaju' },
  '5-7': { id: 'handofjustice', name: 'ハンド オブ ジャスティス', icon: 'handofjustice.png', components: ['tear', 'sparringgloves'], hiragana: 'じゃすてぃすはんど', romaji: 'jasutisuhando' },

  // ジャイアント ベルト (6) の組み合わせ
  '6-0': { id: 'steraksgage', name: 'ステラックの篭手', icon: 'steraksgage.png', components: ['giantsbelt', 'bfsword'], hiragana: 'すてらっくのこて', romaji: 'suterakkunokote' },
  '6-1': { id: 'nashtorstooth', name: 'ナッシャー トゥース', icon: 'nashtorstooth.png', components: ['giantsbelt', 'recurvebow'], hiragana: 'なっしゃーとぅーす', romaji: 'nasshatosu' },
  '6-2': { id: 'sunfire', name: 'サンファイア ケープ', icon: 'sunfire.png', components: ['giantsbelt', 'chainvest'], hiragana: 'さんふぁいあけーぷ', romaji: 'sanfaiakepu' },
  '6-3': { id: 'evenshroud', name: 'イーブン シュラウド', icon: 'evenshroud.png', components: ['giantsbelt', 'negatroncloak'], hiragana: 'いーぶんしゅらうど', romaji: 'ibunshuuraudo' },
  '6-4': { id: 'morellonomicon', name: 'モレロノミコン', icon: 'morellonomicon.png', components: ['giantsbelt', 'needlesslylargerod'], hiragana: 'もれろのみこん', romaji: 'moreronomikon' },
  '6-5': { id: 'spiritvisage', name: 'スピリット ビサージュ', icon: 'spiritvisage.png', components: ['giantsbelt', 'tear'], hiragana: 'すぴりっとびさーじゅ', romaji: 'supirittobisaju' },
  '6-6': { id: 'warmog', name: 'ワーモグ アーマー', icon: 'warmog.png', components: ['giantsbelt', 'giantsbelt'], hiragana: 'わーもぐあーまー', romaji: 'wamoguama' },
  '6-7': { id: 'strikersflail', name: 'ストライカーフレイル', icon: 'strikersflail.png', components: ['giantsbelt', 'sparringgloves'], hiragana: 'すとらいかーふれいる', romaji: 'sutoraikafureiru' },

  // スパーリング グローブ (7) の組み合わせ
  '7-0': { id: 'infinityedge', name: 'インフィニティ エッジ', icon: 'infinityedge.png', components: ['sparringgloves', 'bfsword'], hiragana: 'いんふぃにてぃえっじ', romaji: 'infinitiejji' },
  '7-1': { id: 'lastwhisper', name: 'ラスト ウィスパー', icon: 'lastwhisper.png', components: ['sparringgloves', 'recurvebow'], hiragana: 'らすとうぃすぱー', romaji: 'rasutouisupa' },
  '7-2': { id: 'steadfastheart', name: '揺るがぬ心', icon: 'steadfastheart.png', components: ['sparringgloves', 'chainvest'], hiragana: 'ゆるがぬこころ', romaji: 'yuruganukokoro' },
  '7-3': { id: 'quicksilver', name: 'クイックシルバー', icon: 'quicksilver.png', components: ['sparringgloves', 'negatroncloak'], hiragana: 'くいっくしるばー', romaji: 'kuikkushiruba' },
  '7-4': { id: 'jeweledgauntlet', name: 'ジュエル ガントレット', icon: 'jeweledgauntlet.png', components: ['sparringgloves', 'needlesslylargerod'], hiragana: 'じゅえるどがんとれっと', romaji: 'juerudogantoretto' },
  '7-5': { id: 'handofjustice', name: 'ハンド オブ ジャスティス', icon: 'handofjustice.png', components: ['sparringgloves', 'tear'], hiragana: 'じゃすてぃすはんど', romaji: 'jasutisuhando' },
  '7-6': { id: 'strikersflail', name: 'ストライカーフレイル', icon: 'strikersflail.png', components: ['sparringgloves', 'giantsbelt'], hiragana: 'すとらいかーふれいる', romaji: 'sutoraikafureiru' },
  '7-7': { id: 'thiefsgloves', name: '盗賊のグローブ', icon: 'thiefsgloves.png', components: ['sparringgloves', 'sparringgloves'], hiragana: 'とうぞくのてぶくろ', romaji: 'touzokunotebukuro' },
};

// 全ての合成アイテムのリスト（重複なし）
export const allCombinedItems = Object.values(
  Object.values(combinedItems).reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {})
);

// TFT Set 16 アイテムデータ

// 基本アイテム（Components）
export const baseItems = [
  { id: 'bfsword', name: 'B.F.ソード', icon: 'bfsword.png', hiragana: 'びーえふそーど', romaji: 'bfefsword' },
  { id: 'recurvebow', name: 'リカーブ ボウ', icon: 'recurvebow.png', hiragana: 'りかーぶぼう', romaji: 'recurvebow' },
  { id: 'chainvest', name: 'チェイン ベスト', icon: 'chainvest.png', hiragana: 'ちぇいんべすと', romaji: 'chainvest' },
  { id: 'negatroncloak', name: 'ネガトロン クローク', icon: 'negatroncloak.png', hiragana: 'ねがとろんくろーく', romaji: 'negatroncloak' },
  { id: 'needlesslylargerod', name: 'ムダニ デカイ ロッド', icon: 'needlesslylargerod.png', hiragana: 'むだにでかいろっど', romaji: 'mudanidekarod' },
  { id: 'tear', name: '女神の涙', icon: 'tear.png', hiragana: 'めがみのなみだ', romaji: 'megaminonamida' },
  { id: 'giantsbelt', name: 'ジャイアント ベルト', icon: 'giantsbelt.png', hiragana: 'じゃいあんとべると', romaji: 'giantsbelt' },
  { id: 'sparringgloves', name: 'スパーリング グローブ', icon: 'sparringgloves.png', hiragana: 'すぱーりんぐぐろーぶ', romaji: 'sparringgloves' },
];

// 合成アイテムマトリックス [row][col] = 合成アイテム
// row: 最初の基本アイテムのインデックス
// col: 2番目の基本アイテムのインデックス
export const combinedItems = {
  // B.F.ソード (0) の組み合わせ
  '0-0': { id: 'deathblade', name: 'デスブレード', icon: 'deathblade.png', components: ['bfsword', 'bfsword'], hiragana: 'ですぶれーど', romaji: 'deathblade' },
  '0-1': { id: 'giantslayer', name: 'ジャイアントスレイヤー', icon: 'giantslayer.png', components: ['bfsword', 'recurvebow'], hiragana: 'じゃいあんとすれいやー', romaji: 'giantslayer' },
  '0-2': { id: 'edgeofnight', name: 'エッジ オブ ナイト', icon: 'edgeofnight.png', components: ['bfsword', 'chainvest'], hiragana: 'えっじおぶないと', romaji: 'edgeofnight' },
  '0-3': { id: 'bloodthirster', name: 'ブラッドサースター', icon: 'bloodthirster.png', components: ['bfsword', 'negatroncloak'], hiragana: 'ぶらっどさーすたー', romaji: 'bloodthirster' },
  '0-4': { id: 'hextechgunblade', name: 'ヘクステック ガンブレード', icon: 'hextechgunblade.png', components: ['bfsword', 'needlesslylargerod'], hiragana: 'へくすてっくがんぶれーど', romaji: 'hextechgunblade' },
  '0-5': { id: 'spearofshojin', name: 'ショウジンの矛', icon: 'spearofshojin.png', components: ['bfsword', 'tear'], hiragana: 'しょうじんのほこ', romaji: 'shoujinnohoko' },
  '0-6': { id: 'steraksgage', name: 'ステラックの篭手', icon: 'steraksgage.png', components: ['bfsword', 'giantsbelt'], hiragana: 'すてらっくのこて', romaji: 'steraksnokote' },
  '0-7': { id: 'infinityedge', name: 'インフィニティ エッジ', icon: 'infinityedge.png', components: ['bfsword', 'sparringgloves'], hiragana: 'いんふぃにてぃえっじ', romaji: 'infinityedge' },

  // リカーブ ボウ (1) の組み合わせ
  '1-0': { id: 'giantslayer', name: 'ジャイアントスレイヤー', icon: 'giantslayer.png', components: ['recurvebow', 'bfsword'], hiragana: 'じゃいあんとすれいやー', romaji: 'giantslayer' },
  '1-1': { id: 'guinsoosrageblade', name: 'グインソー レイジブレード', icon: 'guinsoosrageblade.png', components: ['recurvebow', 'recurvebow'], hiragana: 'ぐいんそーれいじぶれーど', romaji: 'guinsoosrageblade' },
  '1-2': { id: 'titanichydra', name: 'タイタニック ハイドラ', icon: 'titanichydra.png', components: ['recurvebow', 'chainvest'], hiragana: 'たいたにっくはいどら', romaji: 'titanichydra' },
  '1-3': { id: 'runaanshurricane', name: 'ルナーン ハリケーン', icon: 'runaanshurricane.png', components: ['recurvebow', 'negatroncloak'], hiragana: 'るなーんはりけーん', romaji: 'runaanshurricane' },
  '1-4': { id: 'nashtorstooth', name: 'ナッシャー トゥース', icon: 'nashtorstooth.png', components: ['recurvebow', 'needlesslylargerod'], hiragana: 'なっしゃーとぅーす', romaji: 'nashtorstooth' },
  '1-5': { id: 'statikkshiv', name: 'スタティック シヴ', icon: 'statikkshiv.png', components: ['recurvebow', 'tear'], hiragana: 'すたてぃっくしゔ', romaji: 'statikkshiv' },
  '1-6': { id: 'redsnifferscopulatorbuff', name: 'レッド バフ', icon: 'redsnifferscopulatorbuff.png', components: ['recurvebow', 'giantsbelt'], hiragana: 'れっどばふ', romaji: 'redbuff' },
  '1-7': { id: 'lastwhisper', name: 'ラスト ウィスパー', icon: 'lastwhisper.png', components: ['recurvebow', 'sparringgloves'], hiragana: 'らすとうぃすぱー', romaji: 'lastwhisper' },

  // チェイン ベスト (2) の組み合わせ
  '2-0': { id: 'edgeofnight', name: 'エッジ オブ ナイト', icon: 'edgeofnight.png', components: ['chainvest', 'bfsword'], hiragana: 'えっじおぶないと', romaji: 'edgeofnight' },
  '2-1': { id: 'titanichydra', name: 'タイタニック ハイドラ', icon: 'titanichydra.png', components: ['chainvest', 'recurvebow'], hiragana: 'たいたにっくはいどら', romaji: 'titanichydra' },
  '2-2': { id: 'bramble', name: 'ブランブル ベスト', icon: 'bramble.png', components: ['chainvest', 'chainvest'], hiragana: 'ぶらんぶるべすと', romaji: 'bramblevest' },
  '2-3': { id: 'gargoyle', name: 'ガーゴイル ストーンプレート', icon: 'gargoyle.png', components: ['chainvest', 'negatroncloak'], hiragana: 'がーごいるすとーんぷれーと', romaji: 'gargoylestoneplate' },
  '2-4': { id: 'sunfire', name: 'サンファイア ケープ', icon: 'sunfire.png', components: ['chainvest', 'needlesslylargerod'], hiragana: 'さんふぁいあけーぷ', romaji: 'sunfirecape' },
  '2-5': { id: 'frozenheart', name: 'フローズン ハート', icon: 'frozenheart.png', components: ['chainvest', 'tear'], hiragana: 'ふろーずんはーと', romaji: 'frozenheart' },
  '2-6': { id: 'behemoth', name: 'ビヒーモス', icon: 'behemoth.png', components: ['chainvest', 'giantsbelt'], hiragana: 'びひーもす', romaji: 'behemoth' },
  '2-7': { id: 'shroudofstillness', name: '静寂の帳', icon: 'shroudofstillness.png', components: ['chainvest', 'sparringgloves'], hiragana: 'せいじゃくのとばり', romaji: 'seijakunotobari' },

  // ネガトロン クローク (3) の組み合わせ
  '3-0': { id: 'bloodthirster', name: 'ブラッドサースター', icon: 'bloodthirster.png', components: ['negatroncloak', 'bfsword'], hiragana: 'ぶらっどさーすたー', romaji: 'bloodthirster' },
  '3-1': { id: 'runaanshurricane', name: 'ルナーン ハリケーン', icon: 'runaanshurricane.png', components: ['negatroncloak', 'recurvebow'], hiragana: 'るなーんはりけーん', romaji: 'runaanshurricane' },
  '3-2': { id: 'gargoyle', name: 'ガーゴイル ストーンプレート', icon: 'gargoyle.png', components: ['negatroncloak', 'chainvest'], hiragana: 'がーごいるすとーんぷれーと', romaji: 'gargoylestoneplate' },
  '3-3': { id: 'dragonsclaw', name: 'ドラゴン クロウ', icon: 'dragonsclaw.png', components: ['negatroncloak', 'negatroncloak'], hiragana: 'どらごんくろう', romaji: 'dragonsclaw' },
  '3-4': { id: 'ionicspark', name: 'イオニア スパーク', icon: 'ionicspark.png', components: ['negatroncloak', 'needlesslylargerod'], hiragana: 'いおにあすぱーく', romaji: 'ionicspark' },
  '3-5': { id: 'adaptivehelm', name: 'アダプティブ ヘルム', icon: 'adaptivehelm.png', components: ['negatroncloak', 'tear'], hiragana: 'あだぷてぃぶへるむ', romaji: 'adaptivehelm' },
  '3-6': { id: 'warmog', name: 'ワーモグ アーマー', icon: 'warmog.png', components: ['negatroncloak', 'giantsbelt'], hiragana: 'わーもぐあーまー', romaji: 'warmogarmor' },
  '3-7': { id: 'quicksilver', name: 'クイックシルバー', icon: 'quicksilver.png', components: ['negatroncloak', 'sparringgloves'], hiragana: 'くいっくしるばー', romaji: 'quicksilver' },

  // ムダニ デカイ ロッド (4) の組み合わせ
  '4-0': { id: 'hextechgunblade', name: 'ヘクステック ガンブレード', icon: 'hextechgunblade.png', components: ['needlesslylargerod', 'bfsword'], hiragana: 'へくすてっくがんぶれーど', romaji: 'hextechgunblade' },
  '4-1': { id: 'nashtorstooth', name: 'ナッシャー トゥース', icon: 'nashtorstooth.png', components: ['needlesslylargerod', 'recurvebow'], hiragana: 'なっしゃーとぅーす', romaji: 'nashtorstooth' },
  '4-2': { id: 'sunfire', name: 'サンファイア ケープ', icon: 'sunfire.png', components: ['needlesslylargerod', 'chainvest'], hiragana: 'さんふぁいあけーぷ', romaji: 'sunfirecape' },
  '4-3': { id: 'ionicspark', name: 'イオニア スパーク', icon: 'ionicspark.png', components: ['needlesslylargerod', 'negatroncloak'], hiragana: 'いおにあすぱーく', romaji: 'ionicspark' },
  '4-4': { id: 'rabadons', name: 'ラバドン デスキャップ', icon: 'rabadons.png', components: ['needlesslylargerod', 'needlesslylargerod'], hiragana: 'らばどんですきゃっぷ', romaji: 'rabadonsdeathcap' },
  '4-5': { id: 'archangels', name: '大天使の杖', icon: 'archangels.png', components: ['needlesslylargerod', 'tear'], hiragana: 'だいてんしのつえ', romaji: 'daitenshinotsue' },
  '4-6': { id: 'morellonomicon', name: 'モレロノミコン', icon: 'morellonomicon.png', components: ['needlesslylargerod', 'giantsbelt'], hiragana: 'もれろのみこん', romaji: 'morellonomicon' },
  '4-7': { id: 'jeweledgauntlet', name: 'ジュエルド ガントレット', icon: 'jeweledgauntlet.png', components: ['needlesslylargerod', 'sparringgloves'], hiragana: 'じゅえるどがんとれっと', romaji: 'jeweledgauntlet' },

  // 女神の涙 (5) の組み合わせ
  '5-0': { id: 'spearofshojin', name: 'ショウジンの矛', icon: 'spearofshojin.png', components: ['tear', 'bfsword'], hiragana: 'しょうじんのほこ', romaji: 'shoujinnohoko' },
  '5-1': { id: 'statikkshiv', name: 'スタティック シヴ', icon: 'statikkshiv.png', components: ['tear', 'recurvebow'], hiragana: 'すたてぃっくしゔ', romaji: 'statikkshiv' },
  '5-2': { id: 'frozenheart', name: 'フローズン ハート', icon: 'frozenheart.png', components: ['tear', 'chainvest'], hiragana: 'ふろーずんはーと', romaji: 'frozenheart' },
  '5-3': { id: 'adaptivehelm', name: 'アダプティブ ヘルム', icon: 'adaptivehelm.png', components: ['tear', 'negatroncloak'], hiragana: 'あだぷてぃぶへるむ', romaji: 'adaptivehelm' },
  '5-4': { id: 'archangels', name: '大天使の杖', icon: 'archangels.png', components: ['tear', 'needlesslylargerod'], hiragana: 'だいてんしのつえ', romaji: 'daitenshinotsue' },
  '5-5': { id: 'bluebuff', name: 'ブルー バフ', icon: 'bluebuff.png', components: ['tear', 'tear'], hiragana: 'ぶるーばふ', romaji: 'bluebuff' },
  '5-6': { id: 'redemption', name: 'リデンプション', icon: 'redemption.png', components: ['tear', 'giantsbelt'], hiragana: 'りでんぷしょん', romaji: 'redemption' },
  '5-7': { id: 'handofjustice', name: 'ジャスティス ハンド', icon: 'handofjustice.png', components: ['tear', 'sparringgloves'], hiragana: 'じゃすてぃすはんど', romaji: 'handofjustice' },

  // ジャイアント ベルト (6) の組み合わせ
  '6-0': { id: 'steraksgage', name: 'ステラックの篭手', icon: 'steraksgage.png', components: ['giantsbelt', 'bfsword'], hiragana: 'すてらっくのこて', romaji: 'steraksnokote' },
  '6-1': { id: 'redsnifferscopulatorbuff', name: 'レッド バフ', icon: 'redsnifferscopulatorbuff.png', components: ['giantsbelt', 'recurvebow'], hiragana: 'れっどばふ', romaji: 'redbuff' },
  '6-2': { id: 'behemoth', name: 'ビヒーモス', icon: 'behemoth.png', components: ['giantsbelt', 'chainvest'], hiragana: 'びひーもす', romaji: 'behemoth' },
  '6-3': { id: 'warmog', name: 'ワーモグ アーマー', icon: 'warmog.png', components: ['giantsbelt', 'negatroncloak'], hiragana: 'わーもぐあーまー', romaji: 'warmogarmor' },
  '6-4': { id: 'morellonomicon', name: 'モレロノミコン', icon: 'morellonomicon.png', components: ['giantsbelt', 'needlesslylargerod'], hiragana: 'もれろのみこん', romaji: 'morellonomicon' },
  '6-5': { id: 'redemption', name: 'リデンプション', icon: 'redemption.png', components: ['giantsbelt', 'tear'], hiragana: 'りでんぷしょん', romaji: 'redemption' },
  '6-6': { id: 'colossus', name: 'コロッサス', icon: 'colossus.png', components: ['giantsbelt', 'giantsbelt'], hiragana: 'ころっさす', romaji: 'colossus' },
  '6-7': { id: 'protectorsvow', name: 'プロテクターの誓い', icon: 'protectorsvow.png', components: ['giantsbelt', 'sparringgloves'], hiragana: 'ぷろてくたーのちかい', romaji: 'protectorsnochikai' },

  // スパーリング グローブ (7) の組み合わせ
  '7-0': { id: 'infinityedge', name: 'インフィニティ エッジ', icon: 'infinityedge.png', components: ['sparringgloves', 'bfsword'], hiragana: 'いんふぃにてぃえっじ', romaji: 'infinityedge' },
  '7-1': { id: 'lastwhisper', name: 'ラスト ウィスパー', icon: 'lastwhisper.png', components: ['sparringgloves', 'recurvebow'], hiragana: 'らすとうぃすぱー', romaji: 'lastwhisper' },
  '7-2': { id: 'shroudofstillness', name: '静寂の帳', icon: 'shroudofstillness.png', components: ['sparringgloves', 'chainvest'], hiragana: 'せいじゃくのとばり', romaji: 'seijakunotobari' },
  '7-3': { id: 'quicksilver', name: 'クイックシルバー', icon: 'quicksilver.png', components: ['sparringgloves', 'negatroncloak'], hiragana: 'くいっくしるばー', romaji: 'quicksilver' },
  '7-4': { id: 'jeweledgauntlet', name: 'ジュエルド ガントレット', icon: 'jeweledgauntlet.png', components: ['sparringgloves', 'needlesslylargerod'], hiragana: 'じゅえるどがんとれっと', romaji: 'jeweledgauntlet' },
  '7-5': { id: 'handofjustice', name: 'ジャスティス ハンド', icon: 'handofjustice.png', components: ['sparringgloves', 'tear'], hiragana: 'じゃすてぃすはんど', romaji: 'handofjustice' },
  '7-6': { id: 'protectorsvow', name: 'プロテクターの誓い', icon: 'protectorsvow.png', components: ['sparringgloves', 'giantsbelt'], hiragana: 'ぷろてくたーのちかい', romaji: 'protectorsnochikai' },
  '7-7': { id: 'thiefsgloves', name: '盗賊の手袋', icon: 'thiefsgloves.png', components: ['sparringgloves', 'sparringgloves'], hiragana: 'とうぞくのてぶくろ', romaji: 'touzokunotebukuro' },
};

// 全ての合成アイテムのリスト（重複なし）
export const allCombinedItems = Object.values(
  Object.values(combinedItems).reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {})
);

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
  { id: 'spatula', name: 'へら', icon: 'spatula.png', hiragana: 'へら', romaji: 'hera' },
];

// 合成アイテムマトリックス [row][col] = 合成アイテム
// row: 最初の基本アイテムのインデックス
// col: 2番目の基本アイテムのインデックス
export const combinedItems = {
  // B.F.ソード (0) の組み合わせ
  '0-0': { id: 'deathblade', name: 'デスブレード', components: ['bfsword', 'bfsword'], hiragana: 'ですぶれーど', romaji: 'deathblade' },
  '0-1': { id: 'giantslayer', name: 'ジャイアントスレイヤー', components: ['bfsword', 'recurvebow'], hiragana: 'じゃいあんとすれいやー', romaji: 'giantslayer' },
  '0-2': { id: 'edgeofnight', name: 'エッジ オブ ナイト', components: ['bfsword', 'chainvest'], hiragana: 'えっじおぶないと', romaji: 'edgeofnight' },
  '0-3': { id: 'bloodthirster', name: 'ブラッドサースター', components: ['bfsword', 'negatroncloak'], hiragana: 'ぶらっどさーすたー', romaji: 'bloodthirster' },
  '0-4': { id: 'hextechgunblade', name: 'ヘクステック ガンブレード', components: ['bfsword', 'needlesslylargerod'], hiragana: 'へくすてっくがんぶれーど', romaji: 'hextechgunblade' },
  '0-5': { id: 'spearofshojin', name: 'ショウジンの矛', components: ['bfsword', 'tear'], hiragana: 'しょうじんのほこ', romaji: 'shoujinnohoko' },
  '0-6': { id: 'steraksgage', name: 'ステラックの篭手', components: ['bfsword', 'giantsbelt'], hiragana: 'すてらっくのこて', romaji: 'steraksnokote' },
  '0-7': { id: 'infinityedge', name: 'インフィニティ エッジ', components: ['bfsword', 'sparringgloves'], hiragana: 'いんふぃにてぃえっじ', romaji: 'infinityedge' },
  '0-8': { id: 'slayeremblem', name: 'スレイヤーの紋章', components: ['bfsword', 'spatula'], hiragana: 'すれいやーのもんしょう', romaji: 'slayeremblem' },

  // リカーブ ボウ (1) の組み合わせ
  '1-0': { id: 'giantslayer', name: 'ジャイアントスレイヤー', components: ['recurvebow', 'bfsword'], hiragana: 'じゃいあんとすれいやー', romaji: 'giantslayer' },
  '1-1': { id: 'guinsoosrageblade', name: 'グインソー レイジブレード', components: ['recurvebow', 'recurvebow'], hiragana: 'ぐいんそーれいじぶれーど', romaji: 'guinsoosrageblade' },
  '1-2': { id: 'titanichydra', name: 'タイタニック ハイドラ', components: ['recurvebow', 'chainvest'], hiragana: 'たいたにっくはいどら', romaji: 'titanichydra' },
  '1-3': { id: 'runaanshurricane', name: 'ルナーン ハリケーン', components: ['recurvebow', 'negatroncloak'], hiragana: 'るなーんはりけーん', romaji: 'runaanshurricane' },
  '1-4': { id: 'nashtorstooth', name: 'ナッシャー トゥース', components: ['recurvebow', 'needlesslylargerod'], hiragana: 'なっしゃーとぅーす', romaji: 'nashtorstooth' },
  '1-5': { id: 'statikkshiv', name: 'スタティック シヴ', components: ['recurvebow', 'tear'], hiragana: 'すたてぃっくしゔ', romaji: 'statikkshiv' },
  '1-6': { id: 'redsnifferscopulatorbuff', name: 'レッド バフ', components: ['recurvebow', 'giantsbelt'], hiragana: 'れっどばふ', romaji: 'redbuff' },
  '1-7': { id: 'lastwhisper', name: 'ラスト ウィスパー', components: ['recurvebow', 'sparringgloves'], hiragana: 'らすとうぃすぱー', romaji: 'lastwhisper' },
  '1-8': { id: 'demaciaemblem', name: 'デマーシアの紋章', components: ['recurvebow', 'spatula'], hiragana: 'でまーしあのもんしょう', romaji: 'demaciaemblem' },

  // チェイン ベスト (2) の組み合わせ
  '2-0': { id: 'edgeofnight', name: 'エッジ オブ ナイト', components: ['chainvest', 'bfsword'], hiragana: 'えっじおぶないと', romaji: 'edgeofnight' },
  '2-1': { id: 'titanichydra', name: 'タイタニック ハイドラ', components: ['chainvest', 'recurvebow'], hiragana: 'たいたにっくはいどら', romaji: 'titanichydra' },
  '2-2': { id: 'bramble', name: 'ブランブル ベスト', components: ['chainvest', 'chainvest'], hiragana: 'ぶらんぶるべすと', romaji: 'bramblevest' },
  '2-3': { id: 'gargoyle', name: 'ガーゴイル ストーンプレート', components: ['chainvest', 'negatroncloak'], hiragana: 'がーごいるすとーんぷれーと', romaji: 'gargoylestoneplate' },
  '2-4': { id: 'sunfire', name: 'サンファイア ケープ', components: ['chainvest', 'needlesslylargerod'], hiragana: 'さんふぁいあけーぷ', romaji: 'sunfirecape' },
  '2-5': { id: 'frozenheart', name: 'フローズン ハート', components: ['chainvest', 'tear'], hiragana: 'ふろーずんはーと', romaji: 'frozenheart' },
  '2-6': { id: 'behemoth', name: 'ビヒーモス', components: ['chainvest', 'giantsbelt'], hiragana: 'びひーもす', romaji: 'behemoth' },
  '2-7': { id: 'shroudofstillness', name: '静寂の帳', components: ['chainvest', 'sparringgloves'], hiragana: 'せいじゃくのとばり', romaji: 'seijakunotobari' },
  '2-8': { id: 'freljordemblem', name: 'フレヨルドの紋章', components: ['chainvest', 'spatula'], hiragana: 'ふれよるどのもんしょう', romaji: 'freljordemblem' },

  // ネガトロン クローク (3) の組み合わせ
  '3-0': { id: 'bloodthirster', name: 'ブラッドサースター', components: ['negatroncloak', 'bfsword'], hiragana: 'ぶらっどさーすたー', romaji: 'bloodthirster' },
  '3-1': { id: 'runaanshurricane', name: 'ルナーン ハリケーン', components: ['negatroncloak', 'recurvebow'], hiragana: 'るなーんはりけーん', romaji: 'runaanshurricane' },
  '3-2': { id: 'gargoyle', name: 'ガーゴイル ストーンプレート', components: ['negatroncloak', 'chainvest'], hiragana: 'がーごいるすとーんぷれーと', romaji: 'gargoylestoneplate' },
  '3-3': { id: 'dragonsclaw', name: 'ドラゴン クロウ', components: ['negatroncloak', 'negatroncloak'], hiragana: 'どらごんくろう', romaji: 'dragonsclaw' },
  '3-4': { id: 'ionicspark', name: 'イオニア スパーク', components: ['negatroncloak', 'needlesslylargerod'], hiragana: 'いおにあすぱーく', romaji: 'ionicspark' },
  '3-5': { id: 'adaptivehelm', name: 'アダプティブ ヘルム', components: ['negatroncloak', 'tear'], hiragana: 'あだぷてぃぶへるむ', romaji: 'adaptivehelm' },
  '3-6': { id: 'warmog', name: 'ワーモグ アーマー', components: ['negatroncloak', 'giantsbelt'], hiragana: 'わーもぐあーまー', romaji: 'warmogarmor' },
  '3-7': { id: 'quicksilver', name: 'クイックシルバー', components: ['negatroncloak', 'sparringgloves'], hiragana: 'くいっくしるばー', romaji: 'quicksilver' },
  '3-8': { id: 'ixtalemblem', name: 'イクサタルの紋章', components: ['negatroncloak', 'spatula'], hiragana: 'いくさたるのもんしょう', romaji: 'ixtalemblem' },

  // ムダニ デカイ ロッド (4) の組み合わせ
  '4-0': { id: 'hextechgunblade', name: 'ヘクステック ガンブレード', components: ['needlesslylargerod', 'bfsword'], hiragana: 'へくすてっくがんぶれーど', romaji: 'hextechgunblade' },
  '4-1': { id: 'nashtorstooth', name: 'ナッシャー トゥース', components: ['needlesslylargerod', 'recurvebow'], hiragana: 'なっしゃーとぅーす', romaji: 'nashtorstooth' },
  '4-2': { id: 'sunfire', name: 'サンファイア ケープ', components: ['needlesslylargerod', 'chainvest'], hiragana: 'さんふぁいあけーぷ', romaji: 'sunfirecape' },
  '4-3': { id: 'ionicspark', name: 'イオニア スパーク', components: ['needlesslylargerod', 'negatroncloak'], hiragana: 'いおにあすぱーく', romaji: 'ionicspark' },
  '4-4': { id: 'rabadons', name: 'ラバドン デスキャップ', components: ['needlesslylargerod', 'needlesslylargerod'], hiragana: 'らばどんですきゃっぷ', romaji: 'rabadonsdeathcap' },
  '4-5': { id: 'archangels', name: '大天使の杖', components: ['needlesslylargerod', 'tear'], hiragana: 'だいてんしのつえ', romaji: 'daitenshinotsue' },
  '4-6': { id: 'morellonomicon', name: 'モレロノミコン', components: ['needlesslylargerod', 'giantsbelt'], hiragana: 'もれろのみこん', romaji: 'morellonomicon' },
  '4-7': { id: 'jeweledgauntlet', name: 'ジュエルド ガントレット', components: ['needlesslylargerod', 'sparringgloves'], hiragana: 'じゅえるどがんとれっと', romaji: 'jeweledgauntlet' },
  '4-8': { id: 'noxusemblem', name: 'ノクサスの紋章', components: ['needlesslylargerod', 'spatula'], hiragana: 'のくさすのもんしょう', romaji: 'noxusemblem' },

  // 女神の涙 (5) の組み合わせ
  '5-0': { id: 'spearofshojin', name: 'ショウジンの矛', components: ['tear', 'bfsword'], hiragana: 'しょうじんのほこ', romaji: 'shoujinnohoko' },
  '5-1': { id: 'statikkshiv', name: 'スタティック シヴ', components: ['tear', 'recurvebow'], hiragana: 'すたてぃっくしゔ', romaji: 'statikkshiv' },
  '5-2': { id: 'frozenheart', name: 'フローズン ハート', components: ['tear', 'chainvest'], hiragana: 'ふろーずんはーと', romaji: 'frozenheart' },
  '5-3': { id: 'adaptivehelm', name: 'アダプティブ ヘルム', components: ['tear', 'negatroncloak'], hiragana: 'あだぷてぃぶへるむ', romaji: 'adaptivehelm' },
  '5-4': { id: 'archangels', name: '大天使の杖', components: ['tear', 'needlesslylargerod'], hiragana: 'だいてんしのつえ', romaji: 'daitenshinotsue' },
  '5-5': { id: 'bluebuff', name: 'ブルー バフ', components: ['tear', 'tear'], hiragana: 'ぶるーばふ', romaji: 'bluebuff' },
  '5-6': { id: 'redemption', name: 'リデンプション', components: ['tear', 'giantsbelt'], hiragana: 'りでんぷしょん', romaji: 'redemption' },
  '5-7': { id: 'handofjustice', name: 'ジャスティス ハンド', components: ['tear', 'sparringgloves'], hiragana: 'じゃすてぃすはんど', romaji: 'handofjustice' },
  '5-8': { id: 'piltoveremblem', name: 'ピルトーヴァーの紋章', components: ['tear', 'spatula'], hiragana: 'ぴるとーゔぁーのもんしょう', romaji: 'piltoveremblem' },

  // ジャイアント ベルト (6) の組み合わせ
  '6-0': { id: 'steraksgage', name: 'ステラックの篭手', components: ['giantsbelt', 'bfsword'], hiragana: 'すてらっくのこて', romaji: 'steraksnokote' },
  '6-1': { id: 'redsnifferscopulatorbuff', name: 'レッド バフ', components: ['giantsbelt', 'recurvebow'], hiragana: 'れっどばふ', romaji: 'redbuff' },
  '6-2': { id: 'behemoth', name: 'ビヒーモス', components: ['giantsbelt', 'chainvest'], hiragana: 'びひーもす', romaji: 'behemoth' },
  '6-3': { id: 'warmog', name: 'ワーモグ アーマー', components: ['giantsbelt', 'negatroncloak'], hiragana: 'わーもぐあーまー', romaji: 'warmogarmor' },
  '6-4': { id: 'morellonomicon', name: 'モレロノミコン', components: ['giantsbelt', 'needlesslylargerod'], hiragana: 'もれろのみこん', romaji: 'morellonomicon' },
  '6-5': { id: 'redemption', name: 'リデンプション', components: ['giantsbelt', 'tear'], hiragana: 'りでんぷしょん', romaji: 'redemption' },
  '6-6': { id: 'colossus', name: 'コロッサス', components: ['giantsbelt', 'giantsbelt'], hiragana: 'ころっさす', romaji: 'colossus' },
  '6-7': { id: 'protectorsvow', name: 'プロテクターの誓い', components: ['giantsbelt', 'sparringgloves'], hiragana: 'ぷろてくたーのちかい', romaji: 'protectorsnochikai' },
  '6-8': { id: 'shadowislesemblem', name: 'シャドウ アイルの紋章', components: ['giantsbelt', 'spatula'], hiragana: 'しゃどうあいるのもんしょう', romaji: 'shadowislesemblem' },

  // スパーリング グローブ (7) の組み合わせ
  '7-0': { id: 'infinityedge', name: 'インフィニティ エッジ', components: ['sparringgloves', 'bfsword'], hiragana: 'いんふぃにてぃえっじ', romaji: 'infinityedge' },
  '7-1': { id: 'lastwhisper', name: 'ラスト ウィスパー', components: ['sparringgloves', 'recurvebow'], hiragana: 'らすとうぃすぱー', romaji: 'lastwhisper' },
  '7-2': { id: 'shroudofstillness', name: '静寂の帳', components: ['sparringgloves', 'chainvest'], hiragana: 'せいじゃくのとばり', romaji: 'seijakunotobari' },
  '7-3': { id: 'quicksilver', name: 'クイックシルバー', components: ['sparringgloves', 'negatroncloak'], hiragana: 'くいっくしるばー', romaji: 'quicksilver' },
  '7-4': { id: 'jeweledgauntlet', name: 'ジュエルド ガントレット', components: ['sparringgloves', 'needlesslylargerod'], hiragana: 'じゅえるどがんとれっと', romaji: 'jeweledgauntlet' },
  '7-5': { id: 'handofjustice', name: 'ジャスティス ハンド', components: ['sparringgloves', 'tear'], hiragana: 'じゃすてぃすはんど', romaji: 'handofjustice' },
  '7-6': { id: 'protectorsvow', name: 'プロテクターの誓い', components: ['sparringgloves', 'giantsbelt'], hiragana: 'ぷろてくたーのちかい', romaji: 'protectorsnochikai' },
  '7-7': { id: 'thiefsgloves', name: '盗賊の手袋', components: ['sparringgloves', 'sparringgloves'], hiragana: 'とうぞくのてぶくろ', romaji: 'touzokunotebukuro' },
  '7-8': { id: 'targonemblem', name: 'ターゴンの紋章', components: ['sparringgloves', 'spatula'], hiragana: 'たーごんのもんしょう', romaji: 'targonemblem' },

  // へら (8) の組み合わせ（エンブレム系）
  '8-0': { id: 'slayeremblem', name: 'スレイヤーの紋章', components: ['spatula', 'bfsword'], hiragana: 'すれいやーのもんしょう', romaji: 'slayeremblem' },
  '8-1': { id: 'demaciaemblem', name: 'デマーシアの紋章', components: ['spatula', 'recurvebow'], hiragana: 'でまーしあのもんしょう', romaji: 'demaciaemblem' },
  '8-2': { id: 'freljordemblem', name: 'フレヨルドの紋章', components: ['spatula', 'chainvest'], hiragana: 'ふれよるどのもんしょう', romaji: 'freljordemblem' },
  '8-3': { id: 'ixtalemblem', name: 'イクサタルの紋章', components: ['spatula', 'negatroncloak'], hiragana: 'いくさたるのもんしょう', romaji: 'ixtalemblem' },
  '8-4': { id: 'noxusemblem', name: 'ノクサスの紋章', components: ['spatula', 'needlesslylargerod'], hiragana: 'のくさすのもんしょう', romaji: 'noxusemblem' },
  '8-5': { id: 'piltoveremblem', name: 'ピルトーヴァーの紋章', components: ['spatula', 'tear'], hiragana: 'ぴるとーゔぁーのもんしょう', romaji: 'piltoveremblem' },
  '8-6': { id: 'shadowislesemblem', name: 'シャドウ アイルの紋章', components: ['spatula', 'giantsbelt'], hiragana: 'しゃどうあいるのもんしょう', romaji: 'shadowislesemblem' },
  '8-7': { id: 'targonemblem', name: 'ターゴンの紋章', components: ['spatula', 'sparringgloves'], hiragana: 'たーごんのもんしょう', romaji: 'targonemblem' },
  '8-8': { id: 'tacticiancrown', name: 'タクティシャンの王冠', components: ['spatula', 'spatula'], hiragana: 'たくてぃしゃんのおうかん', romaji: 'tacticianscrown' },
};

// 全ての合成アイテムのリスト（重複なし）
export const allCombinedItems = Object.values(
  Object.values(combinedItems).reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {})
);

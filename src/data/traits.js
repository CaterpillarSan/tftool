// TFT Set 16 特性（トレイト）データ
// アイコンは CommunityDragon CDN から取得

const CDN = 'https://raw.communitydragon.org/latest/game/assets/ux/traiticons';

// 地域トレイト（Region）
export const regionTraits = [
  { id: 'bilgewater', name: 'ビルジウォーター', hiragana: 'びるじうぉーたー', romaji: 'birujiwota', icon: `${CDN}/trait_icon_9_bilgewater.png` },
  { id: 'darkin', name: 'ダーキン', hiragana: 'だーきん', romaji: 'dakin', icon: `${CDN}/trait_icon_16_darkin.tft_set16.png` },
  { id: 'demacia', name: 'デマーシア', hiragana: 'でまーしあ', romaji: 'demashia', icon: `${CDN}/trait_icon_16_demacia.tft_set16.png` },
  { id: 'freljord', name: 'フレヨルド', hiragana: 'ふれよるど', romaji: 'fureyorudo', icon: `${CDN}/trait_icon_16_freljord.tft_set16.png` },
  { id: 'ionia', name: 'アイオニア', hiragana: 'あいおにあ', romaji: 'aionia', icon: `${CDN}/trait_icon_16_ionia.tft_set16.png` },
  { id: 'ixtal', name: 'イシュタル', hiragana: 'いしゅたる', romaji: 'ishutaru', icon: `${CDN}/trait_icon_16_ixtal.tft_set16.png` },
  { id: 'noxus', name: 'ノクサス', hiragana: 'のくさす', romaji: 'nokusasu', icon: `${CDN}/trait_icon_16_noxus.tft_set16.png` },
  { id: 'piltover', name: 'ピルトーヴァー', hiragana: 'ぴるとーゔぁー', romaji: 'pirutova', icon: `${CDN}/trait_icon_16_piltover.tft_set16.png` },
  { id: 'shadowisles', name: 'シャドウアイル', hiragana: 'しゃどうあいる', romaji: 'shadouairu', icon: `${CDN}/trait_icon_16_shadowisles.tft_set16.png` },
  { id: 'shurima', name: 'シュリーマ', hiragana: 'しゅりーま', romaji: 'shurima', icon: `${CDN}/trait_icon_16_shurima.tft_set16.png` },
  { id: 'targon', name: 'ターゴン', hiragana: 'たーごん', romaji: 'tagon', icon: `${CDN}/trait_icon_16_targon.tft_set16.png` },
  { id: 'void', name: 'ヴォイド', hiragana: 'ゔぉいど', romaji: 'voido', icon: `${CDN}/trait_icon_16_void.tft_set16.png` },
  { id: 'yordle', name: 'ヨードル', hiragana: 'よーどる', romaji: 'yodoru', icon: `${CDN}/trait_icon_16_yordle.tft_set16.png` },
  { id: 'zaun', name: 'ゾウン', hiragana: 'ぞうん', romaji: 'zoun', icon: `${CDN}/trait_icon_16_zaun.tft_set16.png` },
];

// クラストレイト（Class）
export const classTraits = [
  { id: 'arcanist', name: 'アルカニスト', hiragana: 'あるかにすと', romaji: 'arukanisuto', icon: `${CDN}/trait_icon_6_arcanist.png` },
  { id: 'bruiser', name: 'ブルーザー', hiragana: 'ぶるーざー', romaji: 'buruzaa', icon: `${CDN}/trait_icon_16_bruiser.tft_set16.png` },
  { id: 'defender', name: 'ディフェンダー', hiragana: 'でぃふぇんだー', romaji: 'difenda', icon: `${CDN}/trait_icon_16_defender.png` },
  { id: 'disruptor', name: 'ディスラプター', hiragana: 'でぃすらぷたー', romaji: 'disuraputa', icon: `${CDN}/trait_icon_16_disruptor.png` },
  { id: 'gunslinger', name: 'ガンスリンガー', hiragana: 'がんすりんがー', romaji: 'gansuringa', icon: `${CDN}/trait_icon_16_gunslinger.tft_set16.png` },
  { id: 'invoker', name: 'インヴォーカー', hiragana: 'いんゔぉーかー', romaji: 'invooka', icon: `${CDN}/trait_icon_16_invoker.png` },
  { id: 'juggernaut', name: 'ジャガーノート', hiragana: 'じゃがーのーと', romaji: 'jaganoto', icon: `${CDN}/trait_icon_16_juggernaut.png` },
  { id: 'longshot', name: 'ロングショット', hiragana: 'ろんぐしょっと', romaji: 'rongushotto', icon: `${CDN}/trait_icon_16_longshot.tft_set16.png` },
  { id: 'quickstriker', name: '韋駄天', hiragana: 'いだてん', romaji: 'idaten', icon: `${CDN}/trait_icon_16_quickstriker.png` },
  { id: 'slayer', name: 'スレイヤー', hiragana: 'すれいやー', romaji: 'sureiyaa', icon: `${CDN}/trait_icon_16_slayer.png` },
  { id: 'vanquisher', name: 'ヴァンキッシャー', hiragana: 'ゔぁんきっしゃー', romaji: 'vankissha', icon: `${CDN}/trait_icon_16_vanquisher.png` },
  { id: 'warden', name: 'ワーデン', hiragana: 'わーでん', romaji: 'waden', icon: `${CDN}/trait_icon_16_warden.tft_set16.png` },
];

// ユニークトレイト（Champion-Specific）
export const uniqueTraits = [
  { id: 'ascendant', name: '超越者', hiragana: 'ちょうえつしゃ', romaji: 'chouetsusha', icon: `${CDN}/trait_icon_12_ascendant.tft_set12.png` },
  { id: 'assimilator', name: 'アシミレーター', hiragana: 'あしみれーたー', romaji: 'ashimireta', icon: `${CDN}/trait_icon_16_assimilator.tft_set16.png` },
  { id: 'blacksmith', name: 'ブラックスミス', hiragana: 'ぶらっくすみす', romaji: 'burakkusumisu', icon: `${CDN}/trait_icon_16_blacksmith.tft_set16.png` },
  { id: 'caretaker', name: 'ケアテイカー', hiragana: 'けあていかー', romaji: 'keateika', icon: `${CDN}/trait_icon_16_caretaker.tft_set16.png` },
  { id: 'chainbreaker', name: 'チェインブレイカー', hiragana: 'ちぇいんぶれいかー', romaji: 'cheinbureika', icon: `${CDN}/trait_icon_16_chainbreaker.tft_set16.png` },
  { id: 'chronokeeper', name: 'クロノキーパー', hiragana: 'くろのきーぱー', romaji: 'kuronokipa', icon: `${CDN}/trait_icon_16_chronokeeper.tft_set16.png` },
  { id: 'darkchild', name: 'ダークチャイルド', hiragana: 'だーくちゃいるど', romaji: 'dakuchairudo', icon: `${CDN}/trait_icon_16_darkchild.tft_set16.png` },
  { id: 'dragonborn', name: 'ドラゴンボーン', hiragana: 'どらごんぼーん', romaji: 'doragonbon', icon: `${CDN}/trait_icon_16_dragonborn.tft_set16.png` },
  { id: 'emperor', name: 'エンペラー', hiragana: 'えんぺらー', romaji: 'enpera', icon: `${CDN}/trait_icon_16_emperor.tft_set16.png` },
  { id: 'eternal', name: 'エターナル', hiragana: 'えたーなる', romaji: 'etanaru', icon: `${CDN}/trait_icon_5_eternal.png` },
  { id: 'glutton', name: 'グラットン', hiragana: 'ぐらっとん', romaji: 'guratton', icon: `${CDN}/trait_icon_16_glutton.tft_set16.png` },
  { id: 'harvester', name: 'ハーベスター', hiragana: 'はーべすたー', romaji: 'habesuta', icon: `${CDN}/trait_icon_16_harvester.tft_set16.png` },
  { id: 'heroic', name: 'ヒロイック', hiragana: 'ひろいっく', romaji: 'hiroikku', icon: `${CDN}/trait_icon_16_heroic.tft_set16.png` },
  { id: 'hexmech', name: 'ヘクスメック', hiragana: 'へくすめっく', romaji: 'hekusumekku', icon: `${CDN}/trait_icon_16_hexmech.tft_set16.png` },
  { id: 'huntress', name: 'ハントレス', hiragana: 'はんとれす', romaji: 'hantoresu', icon: `${CDN}/trait_icon_16_huntress.tft_set16.png` },
  { id: 'immortal', name: 'イモータル', hiragana: 'いもーたる', romaji: 'imotaru', icon: `${CDN}/trait_icon_16_immortal.tft_set16.png` },
  { id: 'riftscourge', name: 'リフトスカージ', hiragana: 'りふとすかーじ', romaji: 'rifutosukaji', icon: `${CDN}/trait_icon_16_riftscourge.png` },
  { id: 'runemage', name: 'ルーンメイジ', hiragana: 'るーんめいじ', romaji: 'runmeiji', icon: `${CDN}/trait_icon_16_runemage.tft_set16.png` },
  { id: 'soulbound', name: 'ソウルバウンド', hiragana: 'そうるばうんど', romaji: 'sourubaundo', icon: `${CDN}/trait_icon_16_soulbound.tft_set16.png` },
  { id: 'starforger', name: 'スターフォージャー', hiragana: 'すたーふぉーじゃー', romaji: 'sutafoja', icon: `${CDN}/trait_icon_16_starforger.tft_set16.png` },
  { id: 'theboss', name: 'ザ・ボス', hiragana: 'ざぼす', romaji: 'zabosu', icon: `${CDN}/trait_icon_4_theboss.png` },
  { id: 'worldender', name: 'ワールドエンダー', hiragana: 'わーるどえんだー', romaji: 'warudoenda', icon: `${CDN}/trait_icon_9_darkin.png` },
];

// チームアップトレイト（Team-Up）
export const teamupTraits = [
  { id: 'chosenwolves', name: '選ばれし狼', hiragana: 'えらばれしおおかみ', romaji: 'erabareshiookami', icon: `${CDN}/teamup_trait_chosenwolves.tft_set16.png` },
  { id: 'dragonguards', name: 'ドラゴンの守護者', hiragana: 'どらごんのしゅごしゃ', romaji: 'doragonnoshugosha', icon: `${CDN}/teamup_trait_uncompromisingwill.tft_set16.png` },
  { id: 'poisonpals', name: 'ポイズンパル', hiragana: 'ぽいずんぱる', romaji: 'poizunparu', icon: `${CDN}/teamup_trait_poisonpals.tft_set16.png` },
  { id: 'sentinelsoflight', name: '光の番人', hiragana: 'ひかりのばんにん', romaji: 'hikarinobannin', icon: `${CDN}/teamup_trait_sentinelsoflight.tft_set16.png` },
  { id: 'timewinders', name: 'タイムワインダー', hiragana: 'たいむわいんだー', romaji: 'taimuwainda', icon: `${CDN}/teamup_trait_timewinders.tft_set16.png` },
];

// 全トレイト
export const allTraits = [...regionTraits, ...classTraits, ...uniqueTraits, ...teamupTraits];

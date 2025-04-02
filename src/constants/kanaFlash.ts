export const HIRAGANA_LIST = ['あ','い','う','え','お',
    'か','き','く','け','こ',
    'さ','し','す','せ','そ',
    'た','ち','つ','て','と',
    'な','に','ぬ','ね','の',
    'は','ひ','ふ','へ','ほ',
    'ま','み','む','め','も',
    'や','','ゆ','','よ',
    'ら','り','る','れ','ろ',
    'わ','','を','','ん'];

export const KATAKANA_LIST = ['ア','イ','ウ','エ','オ',
    'カ','キ','ク','ケ','コ',
    'サ','シ','ス','セ','ソ',
    'タ','チ','ツ','テ','ト',
    'ナ','ニ','ヌ','ネ','ノ',
    'ハ','ヒ','フ','ヘ','ホ',
    'マ','ミ','ム','メ','モ',
    'ヤ','','ユ','','ヨ',
    'ラ','リ','ル','レ','ロ',
    'ワ','','ヲ','','ン'];

export const KANA_ROMAJI_MAP: Record<string, string> = {
    // 히라가나
    あ: 'a', い: 'i', う: 'u', え: 'e', お: 'o',
    か: 'ka', き: 'ki', く: 'ku', け: 'ke', こ: 'ko',
    さ: 'sa', し: 'shi', す: 'su', せ: 'se', そ: 'so',
    た: 'ta', ち: 'chi', つ: 'tsu', て: 'te', と: 'to',
    な: 'na', に: 'ni', ぬ: 'nu', ね: 'ne', の: 'no',
    は: 'ha', ひ: 'hi', ふ: 'fu', へ: 'he', ほ: 'ho',
    ま: 'ma', み: 'mi', む: 'mu', め: 'me', も: 'mo',
    や: 'ya', ゆ: 'yu', よ: 'yo',
    ら: 'ra', り: 'ri', る: 'ru', れ: 're', ろ: 'ro',
    わ: 'wa', を: 'wo', ん: 'n',

    // 가타카나
    ア: 'a', イ: 'i', ウ: 'u', エ: 'e', オ: 'o',
    カ: 'ka', キ: 'ki', ク: 'ku', ケ: 'ke', コ: 'ko',
    サ: 'sa', シ: 'shi', ス: 'su', セ: 'se', ソ: 'so',
    タ: 'ta', チ: 'chi', ツ: 'tsu', テ: 'te', ト: 'to',
    ナ: 'na', ニ: 'ni', ヌ: 'nu', ネ: 'ne', ノ: 'no',
    ハ: 'ha', ヒ: 'hi', フ: 'fu', ヘ: 'he', ホ: 'ho',
    マ: 'ma', ミ: 'mi', ム: 'mu', メ: 'me', モ: 'mo',
    ヤ: 'ya', ユ: 'yu', ヨ: 'yo',
    ラ: 'ra', リ: 'ri', ル: 'ru', レ: 're', ロ: 'ro',
    ワ: 'wa', ヲ: 'wo', ン: 'n'
};

export const HIRAGANA_MODE = 'hiragana';
export const KATAKANA_MODE = 'katakana';
export const MIXED_MODE = 'mixed';
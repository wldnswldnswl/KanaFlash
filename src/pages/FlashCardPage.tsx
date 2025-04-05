import { useEffect, useState } from 'react';
import KanaCard from "../components/KanaCard";
import {
    KATAKANA_LIST,
    HIRAGANA_LIST,
    HIRAGANA_MODE,
    KANA_ROMAJI_MAP,
    KATAKANA_MODE,
} from "../constants/kanaFlash";
import FlashCardControls from "../components/KanaControls";
import { useSearchParams } from 'react-router-dom';

export type KanaWord = {
    kana: string;
    romaji: string;
    showRomaji: boolean;
};

export default function FlashCardPage() {
    const [searchParams] = useSearchParams();
    const mode = searchParams.get("mode");

    const [kanaWord, setKanaWordState] = useState<KanaWord>(() => ({
        kana: "",
        romaji: "",
        showRomaji: false,
    }));

    useEffect(() => {
        setNextKana();
    }, []);

    const setNextKana = () => {
        const nextKana = getRandomKanaByMode(mode);
        setKanaWordState({
            kana: nextKana,
            romaji: KANA_ROMAJI_MAP[nextKana],
            showRomaji: false,
        });
    };

    const getRandomKanaByMode = (mode: string | null) => {
        if (mode === HIRAGANA_MODE) {
            return getRandomKana(HIRAGANA_LIST);
        } else if (mode === KATAKANA_MODE) {
            return getRandomKana(KATAKANA_LIST);
        } else {
            console.warn("Unknown mode:", mode);
            return getRandomKana(HIRAGANA_LIST); // fallback
        }
    };

    const getRandomKana = (kanaList: string[]) => {
        const filtered = kanaList.filter(k => k !== '');
        const index = Math.floor(Math.random() * filtered.length);
        return filtered[index];
    };

    return (
        <div className="box py-8 px-4">
            <div className="header my-2">
                {mode === HIRAGANA_MODE ? '히라가나' : '가타카나'} 학습 모드
            </div>

            <div>
                <KanaCard word={kanaWord} />
                <FlashCardControls
                    onFlip={() =>
                        setKanaWordState(prev => ({ ...prev, showRomaji: !prev.showRomaji }))
                    }
                    onNext={setNextKana}
                />
            </div>
        </div>
    );
}
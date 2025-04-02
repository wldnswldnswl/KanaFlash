import React, { useEffect, useState } from 'react';
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
        <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-100 flex flex-col items-center justify-center px-4 py-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-purple-700">
                {mode === HIRAGANA_MODE ? '히라가나' : '가타카나'} 학습 모드
            </h3>

            <div className="w-full max-w-md flex flex-col items-center gap-6">
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
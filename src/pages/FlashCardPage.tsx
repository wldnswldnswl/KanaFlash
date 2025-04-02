import React, {useEffect, useState} from 'react';
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

export default function FlashCardPage(props) {
    const [searchParams] = useSearchParams();
    const mode = searchParams.get("mode"); // "hiragana" or "katakana"

    const [kanaWord, setKanaWordState] = useState<KanaWord>(() => {
        return {
            kana :"",
            romaji: "",
            showRomaji: false,
        };
    });

    useEffect(() => {
        // initial state
       setNextKana();
    },[]);


    const setNextKana = () => {
        const nextKana = getRandomKanaByMode(mode);
        setKanaWordState({
            kana: nextKana,
            romaji: KANA_ROMAJI_MAP[nextKana],
            showRomaji: false,
        });
    };

    const getRandomKanaByMode = (mode) => {
        let randomKana = "";
        if (HIRAGANA_MODE === mode) {
            randomKana = getRandomKana(HIRAGANA_LIST);
        } else if (KATAKANA_MODE === mode){
            randomKana = getRandomKana(KATAKANA_LIST);
        } else {
            console.log('todo mixed mode');
        }

        return randomKana;
    };

    const getRandomKana = (kanaList) => {
        const filtered = kanaList.filter(k => k !== '');
        const index = Math.floor(Math.random() * filtered.length); // 0 ~ length-1
        return filtered[index];
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-100 flex flex-col items-center justify-center px-4">
        <KanaCard word={kanaWord}/>
        <FlashCardControls
            onFlip={() =>
                setKanaWordState(prev => ({ ...prev, showRomaji: !prev.showRomaji }))
            }
            onNext={setNextKana}
        />
        </div>
    );
}
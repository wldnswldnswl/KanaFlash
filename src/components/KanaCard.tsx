import React from 'react';

type FlashCardProps = {
    word: {
        kana: string;
        romaji: string;
        showRomaji: boolean;
    };
};

export default function KanaCard(props) {

    return (
        <>
            <div className="w-64 h-64 bg-white shadow-xl rounded-2xl flex items-center justify-center text-6xl font-bold text-gray-800">
                {props.word.showRomaji ? props.word.romaji : props.word.kana}
            </div>
        </>
    );
}
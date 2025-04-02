import React from 'react';

type FlashCardProps = {
    word: {
        kana: string;
        romaji: string;
        showRomaji: boolean;
    };
};

export default function KanaCard({ word }: FlashCardProps) {
    return (
        <div className="w-72 h-72 md:w-80 md:h-80 bg-white dark:bg-gray-800 border-4 border-purple-400 rounded-3xl shadow-lg flex items-center justify-center">
            <span className="text-9xl md:text-[10rem] font-extrabold text-gray-800 dark:text-white tracking-wider select-none">
                 {word.showRomaji ? word.romaji : word.kana || "?"}
            </span>
        </div>
    );
}

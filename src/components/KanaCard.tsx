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
        <div className="card">
            <span>
                 {word.showRomaji ? word.romaji : word.kana || "?"}
            </span>
        </div>
    );
}

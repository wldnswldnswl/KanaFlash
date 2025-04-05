import React from 'react';

type FlashCardControlsProps = {
    onFlip: () => void;
    onNext: () => void;
};

export default function FlashCardControls({ onFlip, onNext }: FlashCardControlsProps) {
    return (
        <div className="kana-controls">
            <button
                onClick={onFlip}
                className="main-btn"
            >
                뒤집기
            </button>
            <button
                onClick={onNext}
                className={"main-btn"}
            >
                다음
            </button>
        </div>
    );
}
import React from 'react';

type FlashCardControlsProps = {
    onFlip: () => void;
    onNext: () => void;
};

export default function FlashCardControls({ onFlip, onNext }: FlashCardControlsProps) {
    return (
        <div className="flex gap-4 mt-6">
            <button
                onClick={onFlip}
                className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
            >
                뒤집기
            </button>
            <button
                onClick={onNext}
                className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
            >
                다음
            </button>
        </div>
    );
}

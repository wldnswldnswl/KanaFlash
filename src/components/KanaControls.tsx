import React from 'react';

type FlashCardControlsProps = {
    onFlip: () => void;
    onNext: () => void;
};

export default function FlashCardControls({ onFlip, onNext }: FlashCardControlsProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full max-w-xs justify-center">
            <button
                onClick={onFlip}
                className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-xl text-lg font-semibold hover:bg-blue-600 active:scale-95 transition-all duration-150"
            >
                뒤집기
            </button>
            <button
                onClick={onNext}
                className="flex-1 px-4 py-3 bg-green-500 text-white rounded-xl text-lg font-semibold hover:bg-green-600 active:scale-95 transition-all duration-150"
            >
                다음
            </button>
        </div>
    );
}
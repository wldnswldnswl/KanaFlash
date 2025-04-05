type FlashCardControlsProps = {
    onFlip: () => void;
    onNext: () => void;
};

export default function FlashCardControls({ onFlip, onNext }: FlashCardControlsProps) {
    return (
        <div className="kana-controls">
            <button
                onClick={onFlip}
                className="btn-main"
            >
                뒤집기
            </button>
            <button
                onClick={onNext}
                className="btn-main"
            >
                다음
            </button>
        </div>
    );
}
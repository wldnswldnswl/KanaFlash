import { useNavigate } from "react-router-dom";

export default function MainPage() {
    const navigate = useNavigate();

    const goToHiraganaFlash = () => {
        navigate('/flash?mode=hiragana');
    };

    const goToKatakanaFlash = () => {
        navigate('/flash?mode=katakana');
    };

    return (
        <div className="box">
            <h1>
                KanaFlash ✨
            </h1>

            <div>
                <button
                    onClick={goToHiraganaFlash}
                >
                    히라가나 외우기
                </button>
                <button
                    onClick={goToKatakanaFlash}
                >
                    가타카나 외우기
                </button>
            </div>
        </div>
    );
}

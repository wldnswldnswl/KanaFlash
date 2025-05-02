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
            <div className="header">
                KanaFlash ✨
            </div>

            <div className="content main-menu">
                <button className="btn-main"
                    onClick={goToHiraganaFlash}
                >
                    히라가나 외우기
                </button>
                <button className="btn-main"
                    onClick={goToKatakanaFlash}
                >
                    가타카나 외우기
                </button>
            </div>
        </div>
    );
}

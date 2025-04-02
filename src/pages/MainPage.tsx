import React from 'react';
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
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-pink-100 px-4 py-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-10 text-purple-700 text-center">
                KanaFlash ✨
            </h1>

            <div className="flex flex-col md:flex-row gap-6 w-full max-w-md">
                <button
                    onClick={goToHiraganaFlash}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-4 rounded-xl shadow-lg transition"
                >
                    히라가나 외우기
                </button>
                <button
                    onClick={goToKatakanaFlash}
                    className="w-full bg-green-500 hover:bg-green-600 text-white text-lg font-semibold py-4 rounded-xl shadow-lg transition"
                >
                    가타카나 외우기
                </button>
            </div>
        </div>
    );
}

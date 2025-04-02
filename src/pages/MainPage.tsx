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
      <div className={'selectMode'}>
          <div onClick={goToHiraganaFlash}> 히라가나 외우기</div>
          <div onClick={goToKatakanaFlash}> 가타카나 외우기</div>
      </div>
    );
}
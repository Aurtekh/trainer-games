import React from 'react';

export const AboutGame = ({ active }) => {
  return (
    <div className={`aboutGame ${active === '1' ? 'activePopup' : ''}`}>
      <div className="aboutGame__wrapperHeader">
        <h2 className="aboutGame__header">Найди число</h2>
        <div className="aboutGame__subtitle">Тренажер на внимание</div>
      </div>
      <div className="aboutGame__wrapper">
        <h3>Тренирует:</h3>
        <ul>
          <li className="aboutGame__wrapperList eyeImg-one">
            <div className="aboutGame__textBold">Произвольное внимание</div>
            <div>Научитесь концентрировать внимание только на важном</div>
          </li>
          <li className="aboutGame__wrapperList eyeImg-two">
            <div className="aboutGame__textBold">Концентрацию и переключение внимания</div>
            <div>Позволит не упускать из виду важные детали</div>
          </li>
          <li className="aboutGame__wrapperList eyeImg-three">
            <div className="aboutGame__textBold">Зрительное восприятие</div>
            <div>Сможете быстро находить основные мысли в текстах</div>
          </li>
        </ul>
        <h3>А на практике?</h3>
        <div>
          Прохождение игры благоприятно сказывается на концентрации внимания, которое способствует
          выделению нужной фигуры из фона и удержанию этого объекта, в свою очередь это показывает
          сосредоточение на разных занятиях, выполнение целей и доведение дел до конца.
        </div>
      </div>
    </div>
  );
};

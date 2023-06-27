import React from 'react';
import { Link } from 'react-router-dom';
import { GameField } from '../components/GameField';
import { gameOverContext } from '../App';

export const FindNumber = () => {
  const { isGameOver, setIsGameOver } = React.useContext(gameOverContext);
  console.log(isGameOver);
  const [showToolTipInfo, setShowToolTipInfo] = React.useState(false);
  const [showToolTipSound, setShowToolTipSound] = React.useState(false);
  const [infoPopup, setInfoPopup] = React.useState(false);
  const [volume, setVolume] = React.useState(false);

  const onMouseEnterHandlerInfo = () => {
    setShowToolTipInfo(true);
  };

  const onMouseLeaveHandlerInfo = () => {
    setShowToolTipInfo(false);
  };

  const onMouseEnterHandlerSound = () => {
    setShowToolTipSound(true);
  };

  const onMouseLeaveHandlerSound = () => {
    setShowToolTipSound(false);
  };

  return (
    <>
      <div className="findNumber">
        <div className="findNumber__gameField">
          <GameField volume={volume} infoPopup={infoPopup} />
          {infoPopup && (
            <div className="findNumber__gameInfoPopup" onClick={() => setInfoPopup(false)}>
              <div className="findNumber__gameInfoPopup__text">
                На игровом поле будут появляться таблички с числами, необходимо найти табличку с
                числом, указанным на карточке над игровым полем.
              </div>
              <div className="findNumber__gameInfoPopup__text-bold">
                Нажмите на экран, чтобы продолжить
              </div>
            </div>
          )}
        </div>
        <div className="findNumber__infoWrapper">
          {!isGameOver && (
            <div
              className="findNumber__sound"
              onMouseEnter={onMouseEnterHandlerSound}
              onMouseLeave={onMouseLeaveHandlerSound}
              onClick={() => setVolume(!volume)}>
              {volume && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    className="path1"
                    fill="currentColor"
                    d="M0 10.311v10.667h7.111L16 29.867V1.423l-8.889 8.889H0zm24 5.333c0-3.2-1.778-5.867-4.444-7.111v14.222C22.223 21.511 24 18.844 24 15.644zM19.556 0v3.733c5.156 1.6 8.889 6.222 8.889 11.911s-3.733 10.311-8.889 11.911v3.733c7.111-1.6 12.444-8 12.444-15.644S26.667 1.6 19.556 0z"></path>
                </svg>
              )}
              {!volume && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    className="path1"
                    fill="currentColor"
                    d="M24 16c0-3.2-1.778-5.867-4.444-7.111V12.8L24 17.244V16zm4.444 0c0 1.6-.356 3.2-.889 4.622l2.667 2.667c1.244-2.133 1.778-4.8 1.778-7.467C32 8.178 26.667 1.778 19.556.178v3.733c5.156 1.778 8.889 6.4 8.889 12.089zM2.311 0L0 2.311l8.356 8.356H0v10.667h7.111L16 30.223V18.312l7.644 7.644c-1.244.889-2.489 1.6-4.089 2.133v3.733c2.489-.533 4.622-1.6 6.578-3.2l3.556 3.556L32 29.867l-16-16L2.311 0zM16 1.778l-3.733 3.733L16 9.244V1.777z"></path>
                </svg>
              )}
            </div>
          )}
          {showToolTipSound && (
            <div className="findNumber__sound__tooltip">Включить/выключить звук</div>
          )}
          {!isGameOver && (
            <div
              className="findNumber__info"
              onMouseEnter={onMouseEnterHandlerInfo}
              onMouseLeave={onMouseLeaveHandlerInfo}
              onClick={() => setInfoPopup(!infoPopup)}>
              ?
            </div>
          )}
          {showToolTipInfo && <div className="findNumber__info__tooltip">Правила игры</div>}
        </div>
      </div>
      <button className="button margin" onClick={() => setIsGameOver(false)}>
        <Link to={'/'} className="link">
          Выйти из игры
        </Link>
      </button>
    </>
  );
};

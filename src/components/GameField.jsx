import React from 'react';

export const GameField = ({ volume, infoPopup }) => {
  const [start, setStart] = React.useState(false);
  const [loadingSeconds, setLoadingSeconds] = React.useState(0);
  const [timerActiveLoading, setTimerActiveLoading] = React.useState(false);
  const [lvlGame, setLvlGame] = React.useState(1);
  const [trueNumber, setTrueNumber] = React.useState(0);
  const startGame = () => {
    if (!start) {
      setStart(true);
      setLoadingSeconds(3);
      setTimerActiveLoading(true);
      setTrueNumber(Math.floor(Math.random() * 10));
    }
  };

  React.useEffect(() => {
    //fix 100 on 1000
    if (loadingSeconds > 0 && timerActiveLoading) {
      setTimeout(setLoadingSeconds, 100, loadingSeconds - 1);
    } else {
      setTimerActiveLoading(false);
    }
  }, [loadingSeconds, timerActiveLoading]);

  if (infoPopup) {
    return <></>;
  }

  return (
    <div className="GameField" style={!start ? { cursor: 'pointer' } : {}} onClick={startGame}>
      <div className="GameField__wrapper">
        <div>Найдите указанное число:</div>
        <span>{!timerActiveLoading && start ? trueNumber : 75}</span>
      </div>
      {!start && (
        <>
          <div className="GameField__wrapperGrid">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.3 103.3">
              <path d="M96.3 51.6c-.1-4.4-3.7-7.9-8.1-7.9s-8 3.5-8.1 7.9v-7.9c-.1-4.4-3.7-7.9-8.1-7.9-4.4 0-8 3.5-8.1 7.9v-7.9c-.1-4.4-3.7-7.9-8.1-7.9s-8 3.5-8.1 7.9V7.9c.1-4.4-3.5-7.9-7.9-7.9s-8 3.5-8.1 7.9v49.5L16.2 41.9l-1.1-1.1-.1.1c-1.6-1.1-3.5-1.7-5.5-1.7-2.6 0-5 1-6.8 2.8-3.3 3.3-3.7 8.6-1 12.3l-.1.1 39.7 39.7.1-.1c5.8 5.7 13.8 9.2 22.5 9.2 17.8 0 32.3-14.5 32.3-32.3l.1-19.3z" />
            </svg>
            <div className="GameField__item GameField__item--orange">75</div>
            <div className="GameField__item GameField__item--pink GameField__item--disable">1</div>
            <div className="GameField__item GameField__item--purple GameField__item--disable">
              35
            </div>
            <div className="GameField__item GameField__item--green GameField__item--disable">7</div>
            <div className="GameField__item GameField__item--green GameField__item--disable">
              885
            </div>
            <div className="GameField__item GameField__item--blue GameField__item--disable">40</div>
          </div>
          <div className="GameField__startText">Нажмите на экран, чтобы продолжить</div>
        </>
      )}
      {timerActiveLoading && (
        <div className="GameField__loadingGame">
          <div className="GameField__loadingGame__counter">{Math.round(loadingSeconds)}</div>
        </div>
      )}
      {!timerActiveLoading && start && (
        <>
          <div className="GameField__wrapperGrid">
            <div className="GameField__item GameField__item--orange">75</div>
            <div className="GameField__item GameField__item--pink GameField__item--disable">1</div>
            <div className="GameField__item GameField__item--purple GameField__item--disable">
              35
            </div>
            <div className="GameField__item GameField__item--green GameField__item--disable">7</div>
            <div className="GameField__item GameField__item--green GameField__item--disable">
              885
            </div>
            <div className="GameField__item GameField__item--blue GameField__item--disable">40</div>
          </div>
        </>
      )}
    </div>
  );
};

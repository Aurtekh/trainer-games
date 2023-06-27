import React from 'react';
import { GameOver } from './GameOver';
import useSound from 'use-sound';
import soundClick from '../assets/sound/click.mp3';
import soundStart from '../assets/sound/startGame.mp3';
import cross from '../assets/img/cross.svg';
import mark from '../assets/img/mark.svg';

export const GameField = ({ volume, infoPopup }) => {
  const [start, setStart] = React.useState(false);
  const [loadingSeconds, setLoadingSeconds] = React.useState(0);
  const [timerActiveLoading, setTimerActiveLoading] = React.useState(false);

  const [play] = useSound(soundClick);
  const [playStart] = useSound(soundStart);

  //game variables
  const [trueNumber, setTrueNumber] = React.useState(0);
  const [lvlGame, setLvlGame] = React.useState(1);
  const [score, setScore] = React.useState(0);
  const [bonus, setBonus] = React.useState(1);
  const [timer, setTimer] = React.useState(60);
  const [correctAnswer, setCorrectAnswer] = React.useState(0);
  const [incorrectAnswer, setIncorrectAnswer] = React.useState(0);
  const [isGamePlay, setIsGamePlay] = React.useState(false);
  const [arrNumbers, setArrNumbers] = React.useState([]);
  const [countNum, setCountNum] = React.useState(6);
  const [maxNumber, setMaxNumber] = React.useState(10);
  const [minNumber, setMinNumber] = React.useState(0);
  const [sizeField, setSizeField] = React.useState('');
  const [itemSize, setItemSize] = React.useState('');
  const [colorItem, setColorItem] = React.useState([]);
  const [colorGameFild, setColorGameFild] = React.useState('');
  const [animationItem, setAnimationItem] = React.useState([]);
  const [markActive, setMarkActive] = React.useState('');
  const [crossActive, setCrossActive] = React.useState('');
  const colors = ['--orange', '--pink', '--green', '--purple', '--blue'];
  const animation = ['rotate', 'scale', 'blink'];
  const [moveItem, setMoveItem] = React.useState('come');
  const startGame = () => {
    if (!start) {
      setStart(true);
      setLoadingSeconds(3);
      setTimerActiveLoading(true);
      if (volume) {
        playStart();
      }
    }
  };

  React.useEffect(() => {
    if (loadingSeconds > 0 && timerActiveLoading) {
      setTimeout(setLoadingSeconds, 1000, loadingSeconds - 1);
    } else {
      setTimerActiveLoading(false);
      setIsGamePlay(true);
    }
  }, [loadingSeconds, timerActiveLoading]);

  React.useEffect(() => {
    if (!infoPopup) {
      if (timer > 0 && isGamePlay) {
        setTimeout(setTimer, 1000, timer - 1);
      } else {
        setIsGamePlay(false);
      }
    }
  }, [timer, isGamePlay, infoPopup]);

  React.useEffect(() => {
    const outArray = [];
    const arrColorItem = [];
    const arrAnimationItem = [];
    let i = 0;

    while (i < countNum) {
      const chislo = Math.floor(Math.random() * maxNumber + minNumber);
      if (find(outArray, chislo) === 0) {
        outArray[i] = chislo;
        arrColorItem.push(colors[Math.floor(Math.random() * colors.length + 0)]);
        arrAnimationItem.push(animation[Math.floor(Math.random() * animation.length + 0)]);
        i++;
      }
    }

    function find(array, value) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return 1;
      }
      return 0;
    }

    setTrueNumber(outArray[Math.floor(Math.random() * outArray.length + 0)]);
    setArrNumbers(outArray);

    setColorItem(arrColorItem);
    setAnimationItem(arrAnimationItem);
    setColorGameFild(colors[Math.floor(Math.random() * colors.length + 0)]);
    // eslint-disable-next-line
  }, [score]);

  const settingGame = (value) => {
    switch (lvlGame + value) {
      case 1:
        setCountNum(6);
        setMaxNumber(10);
        setMinNumber(1);
        setSizeField('');
        setItemSize('');
        break;
      case 2:
        setCountNum(6);
        setMaxNumber(100);
        setMinNumber(10);
        setSizeField('');
        setItemSize('');
        break;
      case 3:
        setCountNum(6);
        setMaxNumber(1000);
        setMinNumber(100);
        setSizeField('');
        setItemSize('');
        break;
      case 4:
        setCountNum(12);
        setMaxNumber(1000);
        setMinNumber(100);
        setSizeField('mediumField');
        setItemSize('itemMediumField');
        break;
      case 5:
        setCountNum(12);
        setMaxNumber(1000);
        setMinNumber(100);
        setSizeField('mediumField');
        setItemSize('itemMediumField');
        break;
      case 6:
        setCountNum(16);
        setMaxNumber(1000);
        setMinNumber(100);
        setSizeField('bigField');
        setItemSize('itemBigField');
        break;
      case 7:
        setCountNum(16);
        setMaxNumber(10000);
        setMinNumber(1000);
        setSizeField('bigField');
        setItemSize('itemBigField');
        break;
      case 8:
        setCountNum(25);
        setMaxNumber(10000);
        setMinNumber(1000);
        setSizeField('veryBigField');
        setItemSize('itemVeryBigField');
        break;
      case 9:
        setCountNum(25);
        setMaxNumber(10000);
        setMinNumber(1000);
        setSizeField('veryBigField');
        setItemSize('itemVeryBigField');
        break;
      default:
        setCountNum(6);
        setMaxNumber(10);
        setMinNumber(1);
        setSizeField('');
        setItemSize('');
        break;
    }

    // 1-3 lvl = 6 numbers
    // 4-5 lvl = 12 numbers
    // 6-7 lvl = 16 numbers
    // 8-9 lvl = 25 numbers

    // 1 lvl max = 10
    // 2 lvl max = 100 min = 10
    // 3-6 lvl max = 1000 min = 100
    // 7-9 lvl max = 10000 min = 1000
  };

  const checkAnswer = (event) => {
    if (volume) {
      play();
    }
    if (trueNumber === +event.target.innerHTML) {
      setMarkActive('-active');
    } else {
      setCrossActive('-active');
    }
    setTimeout(setCrossActive, 400, '');
    setTimeout(setMarkActive, 400, '');

    setMoveItem('leave');
    setTimeout(() => {
      if (trueNumber === +event.target.innerHTML) {
        lvlGame < 9 ? setLvlGame(lvlGame + 1) : setLvlGame(lvlGame);
        bonus < 5 ? setBonus(bonus + 1) : setBonus(bonus);
        setScore(3 * lvlGame * bonus + score);
        settingGame(lvlGame < 9 ? 1 : 0);
        setCorrectAnswer(correctAnswer + 1);
      } else {
        lvlGame > 1 ? setLvlGame(lvlGame - 1) : setLvlGame(lvlGame);
        settingGame(lvlGame > 1 ? -1 : 0);
        setScore(1 * lvlGame + score);
        setIncorrectAnswer(incorrectAnswer + 1);
      }
      setMoveItem('come');
    }, 250);
    setTimeout(setMoveItem, 650, '');
  };

  if (infoPopup) {
    return <></>;
  }
  if (timer === 0) {
    return (
      <GameOver score={score} correctAnswer={correctAnswer} incorrectAnswer={incorrectAnswer} />
    );
  }

  return (
    <div
      className={`GameField  GameField${colorGameFild}`}
      style={!start ? { cursor: 'pointer' } : {}}
      onClick={startGame}>
      <div className="GameField__wrapper">
        <div>Найдите указанное число:</div>
        <span className={moveItem}>{!timerActiveLoading && start ? trueNumber : 75}</span>
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
        <div className={`GameField__wrapperGrid ${sizeField}`}>
          <img src={cross} alt="cross" className={`cross cross${crossActive}`} />
          <img src={mark} alt="mark" className={`mark mark${markActive}`} />

          <div className="GameField__gameMenu">
            <div className="GameField__gameMenu__wrapper">
              <div className="GameField__gameMenu__item-text">ВРЕМЯ</div>
              <div className="GameField__gameMenu__item-time">
                00:{timer > 9 ? timer : '0' + timer}
              </div>
            </div>
            <div className="GameField__gameMenu__wrapper">
              <div className="GameField__gameMenu__item-text">УРОВЕНЬ</div>
              <div className="GameField__gameMenu__item-time">{lvlGame}-9</div>
            </div>
            <div className="GameField__gameMenu__wrapper">
              <div className="GameField__gameMenu__item-text">ОЧКИ</div>
              <div className="GameField__gameMenu__item-time">{score || 0}</div>
            </div>
            <div className="GameField__gameMenu__wrapper">
              <div className="GameField__gameMenu__item-text">БОНУС</div>
              <div className="GameField__gameMenu__item-time">x{bonus}</div>
            </div>
          </div>
          {arrNumbers.map((obj, index) => {
            return (
              <div
                className={`GameField__item ${itemSize} GameField__item${colorItem[index]} ${
                  animationItem[index] !== 'rotate' && lvlGame > 2 ? animationItem[index] : ''
                } ${moveItem}`}
                key={index}
                onClick={checkAnswer}>
                <span
                  className={
                    animationItem[index] === 'rotate' && lvlGame > 2 ? animationItem[index] : ''
                  }>
                  {obj}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

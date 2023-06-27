import React from 'react';
import { gameOverContext } from '../App';

export const GameOver = ({ score, correctAnswer, incorrectAnswer }) => {
  const { isGameOver, setIsGameOver } = React.useContext(gameOverContext);
  const time = new Date()
    .toLocaleString('en-US', {
      timeZone: 'Europe/Moscow',
      hour12: false,
    })
    .replace('24:', '00:');

  const results = { score: score, date: time };

  React.useEffect(() => {
    setIsGameOver(true);
    const itemsSaved = JSON.parse(localStorage.getItem('statistics'));
    if (localStorage.getItem('statistics')) {
      let resultArr = itemsSaved.reduce(
        (acc, item) => {
          if (acc.map[item.date]) return acc;

          acc.map[item.date] = true;
          acc.resultArr.push(item);
          return acc;
        },
        {
          map: {},
          resultArr: [],
        },
      ).resultArr;
      resultArr.push(results);
      localStorage.setItem('statistics', JSON.stringify(resultArr));
    } else {
      localStorage.setItem('statistics', JSON.stringify([results]));
    }
  }, []);

  return (
    <div className="gameOver">
      <div className="gameOver__wrapperHeader">
        <h2 className="gameOver__header">Ваши результаты</h2>
      </div>
      <div className="gameOver__resultsWrapper">
        <div className="gameOver__text">Текущий результат:</div>
        <div className="gameOver__result">{score}</div>
        <div className="gameOver__text">Верных ответов:</div>
        <div className="gameOver__result">
          {correctAnswer} из {incorrectAnswer + correctAnswer}
        </div>
        <div className="gameOver__text">Точность ответов:</div>
        <div className="gameOver__result">
          {incorrectAnswer === 0
            ? 100
            : ((correctAnswer / (correctAnswer + incorrectAnswer)) * 100).toFixed(2)}
          %
        </div>
      </div>
      <button className="button">
        <a href={'/number-one-numbers'} className="link">
          Еще раз?
        </a>
      </button>
    </div>
  );
};

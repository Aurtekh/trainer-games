import React from 'react';

export const GameOver = ({ score, correctAnswer, incorrectAnswer }) => {
  const [items, setItems] = React.useState([]);

  const time = new Date()
    .toLocaleString('en-US', {
      timeZone: 'Europe/Moscow',
      hour12: false,
    })
    .replace('24:', '00:');

  // React.useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('statistics'));
  //   if (localStorage.getItem('statistics')) {
  //     if (items && items.length) {
  //       setItems([items, { score: score, data: time }]);
  //     }
  //   } else {
  //     setItems({ score: score, data: time });
  //   }
  // }, []);

  // React.useEffect(() => {
  //   localStorage.setItem('statistics', JSON.stringify(items.push({ score: score, data: time })));
  // }, [items]);

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

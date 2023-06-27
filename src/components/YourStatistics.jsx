import React from 'react';

export const YourStatistics = ({ active }) => {
  const [result, setResult] = React.useState(null);
  const [sortArr, setSortArr] = React.useState(null);
  const [arrLength, setArrLength] = React.useState(null);
  React.useEffect(() => {
    const itemsSaved = JSON.parse(localStorage.getItem('statistics'));
    if (localStorage.getItem('statistics')) {
      setResult(itemsSaved);
    }
  }, []);

  React.useEffect(() => {
    if (result) {
      let resultArr = result.reduce(
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
      if (resultArr.length > 9) {
        setSortArr(resultArr.sort((a, b) => Number(b.score) - Number(a.score)).slice(0, 10));
        setArrLength(resultArr.length);
      } else {
        setSortArr(resultArr.sort((a, b) => Number(b.score) - Number(a.score)));
        setArrLength(resultArr.length);
      }
    }
  }, [result]);

  return (
    <div className={`aboutGame ${active === '2' ? 'activePopup' : ''}`}>
      <div className="gameOver__wrapperHeader">
        <h2 className="gameOver__header">Ваши результаты</h2>
      </div>
      {sortArr ? (
        <div className="yourStatistics">
          <h3>
            Показаны {sortArr.length > 10 ? 10 : sortArr.length} лучших результатов из {arrLength}
          </h3>
          <div className="yourStatistics__wrapper">
            <div className="yourStatistics__info">Номер:</div>
            <div className="yourStatistics__info">Дата:</div>
            <div className="yourStatistics__info">Очки:</div>
          </div>
          {sortArr.map((obj, index) => {
            return (
              <div className="yourStatistics__wrapper" key={index}>
                <div className="yourStatistics__text">#{index + 1}</div>
                <div className="yourStatistics__text">{obj.date}</div>
                <div className="yourStatistics__textScore">{obj.score}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="yourStatistics__noStatistics">
          У вас еще нет результатов, сыграйте хотя бы одну игру
        </div>
      )}
    </div>
  );
};

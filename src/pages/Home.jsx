import React from 'react';
import { AboutGame } from '../components/AboutGame';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [popup, setPopup] = React.useState('0');

  return (
    <div className="home">
      <h1 className="home__header">Найди число</h1>
      <div className="home__menuWrapper">
        <button className="button">
          <Link to={'/number-one-numbers'} className="link">
            Играть
          </Link>
        </button>
        <button className="button" onClick={() => setPopup('1')}>
          Об игре
        </button>
      </div>
      <AboutGame active={popup === '1' ? '1' : '0'} />
      {popup === '1' && <div className="home__shadow" onClick={() => setPopup('0')}></div>}
    </div>
  );
};

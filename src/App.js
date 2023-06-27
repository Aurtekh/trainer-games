import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { FindNumber } from './pages/FindNumber';
import React from 'react';

export const gameOverContext = React.createContext();

export const App = () => {
  const [isGameOver, setIsGameOver] = React.useState(false);

  return (
    <>
      <gameOverContext.Provider value={{ isGameOver, setIsGameOver }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/number-one-numbers" element={<FindNumber />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </gameOverContext.Provider>
    </>
  );
};

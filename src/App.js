import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { FindNumber } from './pages/FindNumber';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/number-one-numbers" element={<FindNumber />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

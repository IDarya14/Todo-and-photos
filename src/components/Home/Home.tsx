import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';

interface IHomeProps {
  children: React.ReactNode;
}

export const Home: React.FC<IHomeProps> = ({ children }) => {
  return (
    <div className="home">
      <div className="home__container">
        <nav className="home__nav">
          <div className="home__item">
            <Link to="/todos">Todos</Link>
          </div>
          <div className="home__item">
            <Link to="/photos">Photos</Link>
          </div>
        </nav>
        {children}
      </div>
    </div>
  );
};

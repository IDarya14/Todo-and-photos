import React from 'react';
import { Link } from 'react-router-dom';
import './home.scss';
import { useLocation } from 'react-router';

export const Home = ({ children }) => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="home">
      <div className="home__container">
        <nav className="home__nav">
          <div className="home__item ">
            <Link
              to="/todos"
              className={`${location.pathname === '/todos' ? '_hover' : ''}`}
            >
              Todos
            </Link>
          </div>
          <div className="home__item">
            <Link
              to="/photos"
              className={`${location.pathname === '/photos' ? '_hover' : ''}`}
            >
              Photos
            </Link>
          </div>
        </nav>
        {children}
      </div>
    </div>
  );
};

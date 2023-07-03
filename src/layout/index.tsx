import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './style.scss';

export const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/restaurants">Restaurants</Link>
            </li>
          </ul>
        </nav>

        <div className="contentWrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
};

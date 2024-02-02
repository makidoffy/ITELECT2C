import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png" alt="neflix_logo" height="60px" />
      </div>
      <div className="navbar__menu">
        <ul>
          <li className="navbar__menu__item">
            <a className="navbar__menu__link" href="#">
              Home
            </a>
          </li>
          <li className="navbar__menu__item">
            <a className="navbar__menu__link" href="#">
              TV Shows
            </a>
          </li>
          <li className="navbar__menu__item">
            <a className="navbar__menu__link" href="#">
              Movies
            </a>
          </li>
          <li className="navbar__menu__item">
            <a className="navbar__menu__link" href="#">
              My List
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
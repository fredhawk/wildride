import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <section className="Header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/register">Sign Up</NavLink>
          </li>
          {/* <li className="nav__item"><NavLink to='/'>Log In</NavLink></li> */}
        </ul>
      </nav>
    </section>
  );
};

export default Header;

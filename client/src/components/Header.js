import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

// If isLoggedIn === true header should show the name of the user and a log out button

// If isLoggedIn === false header shows signup and sign in links

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
          <li className="nav__item">
            <NavLink to="/login">Log In</NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;

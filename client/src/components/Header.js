import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = props => {
  console.log(props);
  if (props.user !== null) {
    return (
      <section className="Header">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav__item">
              {/* This link is going to link to profile */}
              <NavLink to="#">
                {props.user.name}
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/" onClick={() => props.logout()}>
                Log Out
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
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

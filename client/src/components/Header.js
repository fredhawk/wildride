import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <section className=".Header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav__item">
            <Link to="/register">Sign Up</Link>
          </li>
          {/* <li className="nav__item"><Link to='/'>Log In</Link></li> */}
        </ul>
      </nav>
    </section>
  );
};

export default Header;

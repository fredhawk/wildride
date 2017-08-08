import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  render() {
    return (
      <section className="Register">
        <h2 className="Register__title">Register</h2>
        <form action="#" method="POST" className="Register__form">
          <label htmlFor="firstname" className="Register__label">
            First Name
          </label>
          <input type="text" className="Register__input" name="firstname" />
          <label htmlFor="lastname" className="Register__label">
            Last Name
          </label>
          <input type="text" className="Register__input" name="lastname" />
          <label htmlFor="email" className="Register__label">
            Email address
          </label>
          <input type="email" className="Register__input" name="email" />
          <label htmlFor="password" className="Register__label">
            Password
          </label>
          <input type="password" className="Register__input" name="password" />
          <input type="submit" className="Register__button" defaultValue="Sign up" />
        </form>
      </section>
    );
  }
}

export default Register;

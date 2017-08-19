import React, { Component } from 'react';
import axios from 'axios';
import './Register.css';

class Register extends Component {
  onSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordConfirm = e.target.passwordconfirm.value;
    axios.post('http://localhost:3030/register', { name, email, password, passwordConfirm }).then(response => console.log(response)).catch(err => console.error(err));
  }
  render() {
    return (
      <section className="Register">
        <h2 className="Register__title">Register</h2>
        <form onSubmit={e => this.onSubmit(e)} className="Register__form">
          <label htmlFor="name" className="Register__label">
            Name
          </label>
          <input type="text" className="Register__input" name="name" />
          <label htmlFor="email" className="Register__label">
            Email address
          </label>
          <input type="email" className="Register__input" name="email" />
          <label htmlFor="password" className="Register__label">
            Password
          </label>
          <input type="password" className="Register__input" name="password" />
          <label htmlFor="passwordconfirm" className="Register__label">
            Confirm Password
          </label>
          <input type="password" className="Register__input" name="passwordconfirm" />
          <input type="submit" className="Register__button" defaultValue="Sign up" />
        </form>
      </section>
    );
  }
}

export default Register;

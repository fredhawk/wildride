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
    axios
      .post('http://localhost:3030/register', { name, email, password, passwordConfirm })
      .then(response => {
        // call a function that changes the header
        this.props.handleUserInfo(response.data);
        // This should route to profile later
        this.props.forRoute.history.push('/');
      })
      .catch(err => {
        // Something went wrong with the registration
        this.props.history.push('/register');
        console.error(err);
      });
  }
  render() {
    return (
      <section className="Register">
        <h2 className="Register__title">Sign Up</h2>

        <form onSubmit={e => this.onSubmit(e)} className="form Register__form">
          <label htmlFor="name" className="form__label Register__label">
            Name
          </label>
          <input type="text" className="form__input Register__input" name="name" placeholder="Ex. John Doe" required />
          <label htmlFor="email" className="form__label Register__label">
            Email address
          </label>
          <input type="email" className="form__input Register__input" name="email" placeholder="Ex. one@example.com" required />
          <label htmlFor="password" className="form__label Register__label">
            Password
          </label>
          <input type="password" className="form__input Register__input" name="password" placeholder="Please choose a password wisely." required />
          <label htmlFor="passwordconfirm" className="form__label Register__label">
            Confirm Password
          </label>
          <input type="password" className="form__input Register__input" name="passwordconfirm" placeholder="Please confirm your password" required />
          <input type="submit" className="form__button Register__button" defaultValue="Sign up" />
        </form>
      </section>
    );
  }
}

export default Register;

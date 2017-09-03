import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    axios
      .post('/api/login', { email, password })
      .then(response => {
        // call a function that changes the header
        this.props.handleUserInfo(response.data);
        // This should route to profile later
        this.props.forRoute.history.push('/');
      })
      .catch(err => {
        // send person to login screen as login failed.
        this.props.forRoute.history.push('/login');
      });
  }
  render() {
    return (
      <section className="Login">
        <h1 className="Login__title">Login</h1>
        <form className="form Login__form" onSubmit={e => this.handleSubmit(e)}>
          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input type="email" className="form__input" name="email" required />
          <label className="form__label" htmlFor="password">
            Password
          </label>
          <input type="password" className="form__input" name="password" required />
          <input type="submit" className="form__button" defaultValue="Log in" />
        </form>
      </section>
    );
  }
}

export default Login;

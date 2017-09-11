import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  state = {
    login: true
  };
  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    axios
      .post('/api/login', { email, password })
      .then(response => {
        // call a function that changes the header
        this.setState({
          login: true
        });
        this.props.handleUserInfo(response.data);
        // This should route to profile later
        this.props.forRoute.history.push('/profile');
      })
      .catch(err => {
        // send person to login screen as login failed.
        this.setState({
          login: false
        });
        this.props.forRoute.history.push('/login');
      });
  }
  render() {
    return (
      <div>
        <section className="Login">
          <h1 className="Login__title">Login</h1>
          {this.state.login ? '' : 'Wrong email or password. Please try again!'}
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
        <hr />
        <h2>Not a member?</h2>
        <div className="Login__btn">
          <Link to="/register" className="Hero-btn">
            Sign up
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;

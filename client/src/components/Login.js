import React from 'react';
import axios from 'axios';

function handleSubmit(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log({ email, password });
  axios.post('http://localhost:3030/login', { email, password }).then(() => this.props.history.push('/')).catch(err => console.error(err));
}
const Login = () => {
  return (
    <section className="Login">
      <h1 className="Login__title">Login</h1>
      <form className="form Login__form" onSubmit={e => handleSubmit(e)}>
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input type="text" className="form__input" name="email" />
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input type="password" className="form__input" name="password" />
        <input type="submit" className="form__button" defaultValue="Log in" />
      </form>
    </section>
  );
};

export default Login;

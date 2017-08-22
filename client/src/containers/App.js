import React from 'react';
// import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Links from '../components/Links';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Links />
    </div>
  );
};

export default App;

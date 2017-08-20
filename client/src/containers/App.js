import React from 'react';
// import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Links from '../components/Links';
// import { jobs } from '../models/data.json';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       jobs
//     };
//   }

//   render() {
//     return (

//     );
//   }
// }

// export default App;

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

import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Links from './Links';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  toggleLoggedIn() {
    this.setState({
      isLoggedIn: !this.isLoggedIn
    });
  }
  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} />
        <Main toggleLoggedIn={() => this.toggleLoggedIn()} />
        <Links />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Links from './Links';
import Profile from './Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  // Need to write a function that removes userInfo on log out
  handleUserInfo(userInfo) {
    this.setState({
      user: userInfo
    });
  }

  logout() {
    this.setState({
      user: null
    });
  }
  render() {
    return (
      <div className="App">
        <Header user={this.state.user} logout={() => this.logout()} />
        <Main handleUserInfo={info => this.handleUserInfo(info)} />
        <Links /> {*/}
        
      </div>
    );
  }
}

export default App;

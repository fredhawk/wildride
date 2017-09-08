import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import Main from './Main';
import Links from './Links';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    axios
      .get('/api/current_user')
      .then(res => {
        this.setState({
          user: res.data || false
        });
      })
      .catch(err => console.error(err));
  }
  handleUserInfo(userInfo) {
    this.setState({
      user: userInfo
    });
  }

  logout() {
    axios
      .get('/api/logout')
      .then(res => {
        this.setState({
          user: false
        });
      })
      .catch(err => console.error(err));
  }

  // format the date for better readability
  static formatDate(dateString) {
    if (dateString){
    var shortened = dateString.slice(0, 10);
    var dateParts= shortened.split("-");
    return Number(dateParts[2]) + 1 + "." + dateParts[1] + "." + dateParts[0];
    } else return null;
  };
  
  render() {
    return (
      <div className="App">
        <Header user={this.state.user} logout={() => this.logout()} />
        <Main handleUserInfo={info => this.handleUserInfo(info)} user={this.state.user} />
        <Links />
      </div>
    );
  }
}

export default App;

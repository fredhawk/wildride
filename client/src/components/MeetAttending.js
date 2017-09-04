import React, { Component } from 'react';
import axios from 'axios';
import MeetList from './MeetList';

class MeetAttending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meets: null
    };
  }
  componentDidMount() {
    axios
      .get('/api/user/meetup')
      .then(response => {
        this.setState({
          meets: response.data.meetups
        });
      })
      .catch(err => console.error(err));
  }
  render() {
    return <div>{this.state.meets ? <MeetList meets={this.state.meets} /> : `Loading...`}</div>;
  }
}

export default MeetAttending;

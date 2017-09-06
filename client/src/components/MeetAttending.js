import React, { Component } from 'react';
import axios from 'axios';
import MeetList from './MeetList';

class MeetAttending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meets: null,
      created: null
    };
  }
  componentDidMount() {
    axios
      .get('/api/user/meetup')
      .then(response => {
        this.setState({
          meets: response.data.meetups,
          created: response.data.created
        });
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <div>
        <h2>Meetups I am attending</h2>
        {this.state.meets ? <MeetList meets={this.state.meets} /> : `Loading...`}
        <h2>Meetups I created</h2>
        {this.state.created ? <MeetList meets={this.state.created} /> : `Loading...`}
      </div>
    );
  }
}

export default MeetAttending;

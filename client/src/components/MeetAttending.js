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
        // this.setState({
        //   meets: response.data
        // });
        console.log(response);
      })
      .catch(err => console.error(err));
  }
  renderContent() {
    <MeetList meets={this.state.meets} />;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default MeetAttending;

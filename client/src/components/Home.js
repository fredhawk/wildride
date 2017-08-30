import React, { Component } from 'react';
import axios from 'axios';
import Hero from './Hero';
import Featured from './Featured';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meets: null
    };
  }
  componentDidMount() {
    axios
      .get('/meets')
      .then(response => {
        this.setState({
          meets: response.data
        });
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <main>
        <Hero />
        {!this.state.meets ? `Loading...` : <Featured meets={this.state.meets} />}
      </main>
    );
  }
}

export default Home;

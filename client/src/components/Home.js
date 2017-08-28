import React, { Component } from 'react';
import Hero from './Hero';
import Featured from './Featured';
import { meets } from '../models/data.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meets
    };
  }
  render() {
    return (
      <main>
        <Hero />
        <Featured meets={this.state.meets} />
      </main>
    );
  }
}

export default Home;

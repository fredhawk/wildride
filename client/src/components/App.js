import React, { Component } from 'react';
import './App.css';
import Hero from './Hero';
import FeaturedList from '../containers/FeaturedList';
import { jobs } from '../models/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs
    };
  }

  render() {
    return (
      <div className="App">
        <Hero />
        <FeaturedList jobs={this.state.jobs} />
      </div>
    );
  }
}

export default App;

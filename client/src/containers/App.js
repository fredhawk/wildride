import React, { Component } from 'react';
import './App.css';
import Hero from '../components/Hero';
import FeaturedList from '../components/FeaturedList';
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

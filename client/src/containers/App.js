import React, { Component } from 'react';
import './App.css';
import Hero from '../components/Hero';
import FeaturedJobs from '../components/FeaturedJobs';
import ExploreJobs from '../components/ExploreJobs';
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
        <FeaturedJobs jobs={this.state.jobs} />
        <ExploreJobs jobs={this.state.jobs} />
      </div>
    );
  }
}

export default App;

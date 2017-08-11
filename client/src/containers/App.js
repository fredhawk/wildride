import React, { Component } from 'react';
import './App.css';
import Hero from '../components/Hero';
import FeaturedJobs from '../components/FeaturedJobs';
import ExploreJobs from '../containers/ExploreJobs';
import { jobs } from '../models/data.json';
import Links from '../components/Links'

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
        <Links />
      </div>
    );
  }
}

export default App;

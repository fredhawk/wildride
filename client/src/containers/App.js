import React, { Component } from 'react';
import './App.css';
import Hero from '../components/Hero';
import FeaturedJobs from '../components/FeaturedJobs';
import Links from '../components/Links';
import ExploreJobs from './ExploreJobs';
import Register from './Register';
import PostJob from './PostJob';
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
        <Register />
        <Hero />
        <FeaturedJobs jobs={this.state.jobs} />
        <ExploreJobs jobs={this.state.jobs} />
        <Links />
        <PostJob />
      </div>
    );
  }
}

export default App;

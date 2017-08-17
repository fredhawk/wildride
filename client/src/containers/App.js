import React, { Component } from 'react';
import './App.css';
import Hero from '../components/Hero';
import FeaturedJobs from '../components/FeaturedJobs';
import ExploreJobs from '../containers/ExploreJobs';
import Register from './Register';
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
<<<<<<< HEAD
        <Register />
        {/* <Hero /> */}
        {/* <FeaturedJobs jobs={this.state.jobs} /> */}
        {/* <ExploreJobs jobs={this.state.jobs} /> */}
=======
        <Hero />
        <FeaturedJobs jobs={this.state.jobs} />
        <ExploreJobs jobs={this.state.jobs} />
        <Links />
>>>>>>> 89c1816794e0cb29593e51c7bbcac3196969ffd5
      </div>
    );
  }
}

export default App;

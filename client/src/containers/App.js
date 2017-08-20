import React from 'react';
// import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Main from '../components/Main';
import Links from '../components/Links';
<<<<<<< HEAD
import ExploreJobs from './ExploreJobs';
import Register from './Register';
import PostJob from './PostJob';
import { jobs } from '../models/data.json';
import Mission from '../components/Mission';


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
		<Mission />
        <Links />
        <PostJob />
      </div>
	  );
  }
}
=======

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Links />
    </div>
  );
};
>>>>>>> feature/navigation

export default App;

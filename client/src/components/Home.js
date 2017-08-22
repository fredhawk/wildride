// import React from 'react';
import Hero from './Hero';
import FeaturedJobs from './FeaturedJobs';
import { jobs } from '../models/data.json';

import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs
    };
  }
  render() {
    return (
      <main>
        <Hero />
        <FeaturedJobs jobs={this.state.jobs} />
      </main>
    );
  }
}

export default Home;

// const Home = props => {
//   return (

//   );
// };

// export default Home;

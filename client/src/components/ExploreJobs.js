import React from 'react';
import JobList from './JobList';
import './ExploreJobs.css';

const ExploreJobs = props => {
  return (
    <section className=".ExploreJobs">
      <h1 className="ExploreJobs-title">Explore Jobs</h1>
      <div className="ExploreJobs-search">Search</div>
      <JobList jobs={props.jobs} />
    </section>
  );
};

export default ExploreJobs;

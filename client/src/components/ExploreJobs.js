import React from 'react';
import JobList from './JobList';
import './ExploreJobs.css';

const ExploreJobs = props => {
  const matches = props.jobs.length;
  return (
    <section className=".ExploreJobs">
      <h1 className="ExploreJobs-title">Explore Jobs</h1>
      <div className="ExploreJobs-search">Search</div>
      <JobList jobs={props.jobs} />
      <div className="ExploreJobs-matches">
        <span>
          Found {matches} matches
        </span>
      </div>
    </section>
  );
};

export default ExploreJobs;

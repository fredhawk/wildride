import React from 'react';
import JobList from './JobList';
import './FeaturedJobs.css';

const FeaturedJobs = props => {
  const featured = props.jobs.filter((job, index) => index < 6);
  return (
    <section className="FeaturedJobs">
      <h1 className="FeaturedJobs-title">Featured jobs</h1>
      <JobList jobs={featured} />
    </section>
  );
};

export default FeaturedJobs;

import React from 'react';
import JobList from './JobList';
import './FeaturedList.css';

const FeaturedList = props => {
  const featured = props.jobs.filter((job, index) => index < 6);
  return (
    <section className=".FeaturedList">
      <h1 className="FeaturedList-title">Featured jobs</h1>
      <JobList jobs={featured} />
    </section>
  );
};

export default FeaturedList;

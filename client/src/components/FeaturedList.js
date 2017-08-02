import React from 'react';
import FeaturedListItem from '../components/FeaturedListItem';
import './FeaturedList.css';

const FeaturedList = props => {
  return (
    <section className=".FeaturedList">
      <h1 className="FeaturedList-title">Featured jobs</h1>
      <ul className="FeaturedList-list-group">
        {props.jobs.filter((job, index) => index < 6).map(job => <FeaturedListItem featured={job} key={job.id} />)}
      </ul>
    </section>
  );
};

export default FeaturedList;

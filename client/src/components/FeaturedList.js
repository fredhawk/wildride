import React from 'react';
import FeaturedListItem from '../components/FeaturedListItem';
import './Featuredlist.css';

const FeaturedList = props => {
  return (
    <div>
      <h1 className="Featuredlist-title">Featured jobs</h1>
      <ul>
        {props.jobs.map(job => <FeaturedListItem featured={job} key={job.id} />)}
      </ul>
    </div>
  );
};

export default FeaturedList;

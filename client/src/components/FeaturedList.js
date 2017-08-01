import React from 'react';
import FeaturedListItem from '../components/FeaturedListItem';

const FeaturedList = props => {
  return (
    <div>
      <h1 className="Featuredlist-title">Featured jobs</h1>
      <ul>
        {props.jobs.filter((job, index) => index < 6).map(job => <FeaturedListItem featured={job} key={job.id} />)}
      </ul>
    </div>
  );
};

export default FeaturedList;

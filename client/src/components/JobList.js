import React from 'react';
import JobItem from '../components/JobItem';
import './JobList.css';

const JobList = props => {
  return (
    <ul className="JobList-list-group">
      {props.jobs.map(job => <JobItem job={job} key={job.id} />)}
    </ul>
  );
};

export default JobList;

import React from 'react';
import MeetListItem from '../components/MeetListItem';
import './MeetList.css';

const MeetList = props => {
  return <ul className="MeetList-list-group">{props.meets.map(meet => <MeetListItem meet={meet} key={meet._id} />)}</ul>;
};

export default MeetList;

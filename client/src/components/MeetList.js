import React from 'react';
import MeetItem from '../components/MeetItem';
import './MeetList.css';

const MeetList = props => {
  console.log(props.meets);
  return (
    <ul className="MeetList-list-group">
      {props.meets.map(meet => <MeetItem meet={meet} key={meet._id} />)}
    </ul>
  );
};

export default MeetList;

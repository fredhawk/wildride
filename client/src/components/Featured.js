import React from 'react';
import MeetList from './MeetList';
import './Featured.css';

const Featured = props => {
  const featured = props.meets.filter((meet, index) => index < 6);
  return (
    <section className="Featured">
      <h1 className="Featured-title">Featured jobs</h1>
      <MeetList meets={featured} />
    </section>
  );
};

export default Featured;

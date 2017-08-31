import React from 'react';

const Meet = props => {
  console.log(props);
  return (
    <div>
      <p>About: {props.about}</p>
      <p>Location: {props.location}</p>
    </div>
  );
};

export default Meet;

import React from 'react';
import './MeetItem.css';

const MeetItem = props => {
  const { about, location, date, time, food, deadline, save } = props.meet;
  return (
    <div className="MeetItem">
      <picture className="MeetItem__picture">
        <img src="https://unsplash.it/600/400/?random" alt="random" className="MeetItem__img" />
      </picture>
      <div className="MeetItem__content">
        <div className="MeetItem__info">
          <h3 className="MeetItem__about">
            {about}
          </h3>
          <p className="MeetItem__location">
            At {location}
          </p>
          <p className="MeetItem__datetime">
            {date}
          </p>
          <p className="MeetItem__datetime">
            {time}
          </p>
          <p className="MeetItem__datetime">
            Will food be served? {food ? 'Yes' : 'No'}
          </p>
        </div>
        <footer className="MeetItem__footer">
          <div className="MeetItem__footer--apply">
            <span className="MeetItem__footer--days">{deadline} days</span> to reply
          </div>
          <div className="MeetItem__footer--save">
            {save ? `Saved` : `Not Saved`}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MeetItem;

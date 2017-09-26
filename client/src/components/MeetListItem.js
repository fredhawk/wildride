import React from 'react';
import './MeetListItem.css';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

const MeetListItem = props => {
  const { _id, about, location, food, date, food_types } = props.meet;
  const formatedDate = distanceInWordsToNow(date);

  return (
    <div className="MeetListItem">
      <a href={`/meet/${_id}`} className="MeetListItem__link">
        <div className="MeetListItem__content">
          <div className="MeetListItem__info">
            <h3 className="MeetListItem__about">{about}</h3>
            <p className="MeetListItem__location">At {location}</p>
            <p className="MeetListItem__food">Will food be served? {food ? 'Yes' : 'No'}</p>
            <p className="MeetListItem__food">{ food_types[0] ? 'Food: ' : "" } <span className="green_bold"> {food_types[0] ? `${food_types.join(", ")}` : "" } </span></p>
          </div>
          <footer className="MeetListItem__footer">
            <div className="MeetListItem__footer--apply">
              <span className="MeetListItem__footer--days">Meet is in {formatedDate}</span>
            </div>
            <div className="MeetListItem__footer--apply">
              <span>Learn more</span>
            </div>
          </footer>
        </div>
      </a>
    </div>
  );
};

export default MeetListItem;

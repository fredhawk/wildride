import React from 'react';
import './JobItem.css';

const JobItem = props => {
  const { title, location, description, apply, save } = props.job;
  return (
    <div className="JobItem">
      <picture className="JobItem__picture">
        <img src="https://unsplash.it/600/400/?random" alt="random" className="JobItem__img" />
      </picture>
      <div className="JobItem__content">
        <div className="JobItem__info">
          <h3 className="JobItem__title">
            {title}
          </h3>
          <p className="JobItem__location">
            At {location}
          </p>
          <p className="JobItem__description">
            {description}
          </p>
        </div>
        <footer className="JobItem__footer">
          <div className="JobItem__footer--apply">
            <span className="JobItem__footer--days">{apply} days</span> to apply
          </div>
          <div className="JobItem__footer--save">
            {save ? `Saved` : `Not Saved`}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default JobItem;

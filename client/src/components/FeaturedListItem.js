import React from 'react';
import './FeaturedListItem.css';

const FeaturedListItem = props => {
  const { title, location, description, apply, save } = props.featured;
  return (
    <div className="Featured-item">
      <picture className="Featured-item__picture">
        <img src="#" alt="random" className="Featured-item__img" />
      </picture>
      <div className="Featured-item__content">
        <div className="Featured-item__info">
          <h3 className="Featured-item__title">
            {title}
          </h3>
          <p className="Featured-item__location">
            At {location}
          </p>
          <p className="Featured-item__description">
            {description}
          </p>
        </div>
        <footer className="Featured-item__footer">
          <div className="Featured-item__footer--apply">
            <span className="Featured-item__footer--days">{apply} days</span> to apply
          </div>
          <div className="Featured-item__footer--save">
            {save ? `Saved` : `Not Saved`}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FeaturedListItem;

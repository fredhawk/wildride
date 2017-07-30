import React from 'react';

const FeaturedListItem = props => {
  const { title, location, description, apply, save } = props.featured;
  return (
    <div className="Featured-item">
      <img src="#" alt="random" className="Featured-item__img" />
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
        <div className="Featured-item__apply">
          {apply} to apply
        </div>
        <div className="Featured-item__save">
          {save ? `Saved` : `Not Saved`}
        </div>
      </div>
    </div>
  );
};

export default FeaturedListItem;

import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="Hero">
      <div className="Hero-wrapper">
        {/* <div className="Hero-container"> */}
        <h1 className="Hero-title">Meet and get to know other developers.</h1>
        <h2 className="Hero-title__see-world">Learn from each other.</h2>
        <div className="Hero-navigation">
          <Link to="/meet" className="Hero-btn">
            Explore all Meets
          </Link>
          <Link to="/register" className="Hero-btn">
            Join us
          </Link>
        </div>
        <div className="Hero-tagline">Use Wildride to connect with other developers.</div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;

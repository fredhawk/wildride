import React from 'react';

const Hero = () => {
  return (
    <div className="Hero">
      <img src="#" alt="none" className="Hero-img__top" />
      <h1 className="Hero-title">Travel. Work.</h1>
      <h2 className="Hero-title__see-world">See the world</h2>
      <div className="Hero-navigation">
        <a href="#" className="btn Hero-btn-explore">
          Explore all jobs
        </a>
        <a href="#" className="btn Hero-btn-employer">
          Hiring? Start here
        </a>
      </div>
      <div className="Hero-tagline">Use Jobbatical to fin a tech, business or creative job abroad.</div>
      <img src="#" alt="none" className="Hero-img__bottom" />
      <p className="Hero-availability">Currently 48 teams in 27 countries could use your help</p>
    </div>
  );
};

export default Hero;

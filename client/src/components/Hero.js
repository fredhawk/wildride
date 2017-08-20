import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="Hero">
      <div className="Hero-wrapper">
        <div className="Hero-container">
          <h1 className="Hero-title">Travel. Work.</h1>
          <h2 className="Hero-title__see-world">See the world</h2>
          <div className="Hero-navigation">
            {/* <a href="#" className="Hero-btn Hero-btn-explore">
              Explore all jobs
            </a> */}
            <Link to="/findjob" className="Hero-btn Hero-btn-explore">
              Explore all jobs
            </Link>
            <a href="#" className="Hero-btn Hero-btn-employer">
              Hiring ? Start here
            </a>
          </div>
          <div className="Hero-tagline">Use Jobbatical to fin a tech, business or creative job abroad.</div>
        </div>
        <div>
          <p className="Hero-availability">
            Currently <strong> 48 teams </strong> in <strong>27 countries</strong> could use your help
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import './Mission.css';

const Mission = () => {
  return (
    <section className="Mission">
      <div className="Mission-wrapper">
        <div className="Mission-container">
          <h4 className="Mission-title">OUR MISSION</h4>
		  <p className="Mission-statement">At Jobbatical we think beyond borders and help the
		  world work together. Join our journey to build a borderless world where 
		  skills are valued over passports and find out where on planet Earth* your next job should be.</p>
		  <a href="#"><button type="button">Join</button></a>
		  <p className="Mission-appendix">*more planets coming soon</p>
		</div>
      </div>
    </section>
  );
};

export default Mission;

import React from 'react';
import './Links.css';

const Links = () => {
  return (
    <div className="link-section">
      
      <div className="link-list">
		<h4 className="link-title">FOR TALENT</h4>
		<ul>
		<li><a href="#">HOME</a></li>
		<li><a href="#">EXPLORE JOBS</a></li>
		<li><a href="#">JOIN JOBBATICAL</a></li>
		</ul>
      </div>
      <div className="link-list">
		<h4 className="link-title">FOR BUSINESS</h4>
		<ul>
		<li><a href="#">WHAT WE OFFER</a></li>
		<li><a href="#">PRICING</a></li>
		<li><a href="#">CUSTOMERS</a></li>
		</ul>
      </div>
      <div className="link-list">
		<h4 className="link-title">JOBBATICAL</h4>
		<ul>
		<li><a href="#">OUR STORY & PEOPLE</a></li>
		<li><a href="#">SUPPORT</a></li>
		<li><a href="#">JOIN THE TEAM</a></li>
		<li><a href="#">BLOG</a></li>
		</ul>
      </div>
      <div className="link-list">
		<h4 className="link-title">FOLLOW US</h4>
		<ul>
		<li><a href="#">FACEBOOK</a></li>
		<li><a href="#">TWITTER</a></li>
		<li><a href="#">LINKEDIN</a></li>
		<li><a href="#">GOOGLE+</a></li>
		<li><a href="#">INSTAGRAM</a></li>
		</ul>
      </div>
    
    </div>
  );
};

export default Links;

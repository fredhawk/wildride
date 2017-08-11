import React from 'react';
import './Links.css';

const Links = () => {
  return (
    <div className="link-section">
      
      <div className="link-list">
		<strong className="link-title">FOR TALENT</strong>
		<ul>
		<li><a href="#">HOME</a></li>
		<li><a href="#">EXPLORE JOBS</a></li>
		<li><a href="#">JOIN JOBBATICAL</a></li>
		</ul>
      </div>
      <div className="link-list">
		<strong className="link-title">FOR BUSINESS</strong>
		<ul>
		<li><a href="#">WHAT WE OFFER</a></li>
		<li><a href="#">PRICING</a></li>
		<li><a href="#">CUSTOMERS</a></li>
		</ul>
      </div>
      <div className="link-list">
		<strong className="link-title">JOBBATICAL</strong>
		<ul>
		<li><a href="#">OUR STORY & PEOPLE</a></li>
		<li><a href="#">SUPPORT</a></li>
		<li><a href="#">JOIN THE TEAM</a></li>
		<li><a href="#">BLOG</a></li>
		</ul>
      </div>
      <div className="link-list">
		<strong className="link-title">FOLLOW US</strong>
		<ul>
		<li><a href="#">FACEBOOK <i className="fa fa-facebook-official"></i></a></li>
		<li><a href="#">TWITTER <i className="fa fa-twitter-square"></i></a></li>
		<li><a href="#">LINKEDIN <i className="fa fa-linkedin-square"></i></a></li>
		<li><a href="#">GOOGLE+ <i className="fa fa-google-plus-square"></i></a></li>
		<li><a href="#">INSTAGRAM <i className="fa fa-instagram"></i></a></li>
		</ul>
      </div>
    
    </div>
  );
};

export default Links;

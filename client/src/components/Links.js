import React from 'react';
import { NavLink } from 'react-router-dom';
import './Links.css';

const Links = () => {
  return (
    <div className="link-section">
      <div className="link-list">
        <div className="title-wrapper">
          <strong className="link-title">NAVIGATION</strong>
        </div>
        <ul>
          <li>
          <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/meet">EXPLORE MEETUPS</NavLink>
          </li>
          <li>
            <NavLink to="/register">JOIN WILDRIDE</NavLink>
          </li>
        </ul>
      </div>
      <div className="link-list">
        <div className="title-wrapper">
          <strong className="link-title">FOR BUSINESS</strong>
        </div>
        <ul>
          <li>
            <a>WHAT WE OFFER</a>
          </li>
          <li>
            <a>CATEGORIES</a>
          </li>
          <li>
            <a>RECENT</a>
          </li>
        </ul>
      </div>
      <div className="link-list">
        <div className="title-wrapper">
          <strong className="link-title">MEET CHINGUS</strong>
        </div>
        <ul>
          <li>
            <a>OUR STORY & PEOPLE</a>
          </li>
          <li>
            <a>SUPPORT</a>
          </li>
          <li>
            <a>JOIN THE TEAM</a>
          </li>
          <li>
            <a>BLOG</a>
          </li>
        </ul>
      </div>
      <div className="link-list social-media-text">
        <div className="title-wrapper">
          <strong className="link-title">FOLLOW US</strong>
        </div>
        <ul className="social-media-text__list">
          <li>
            <a>
              FACEBOOK <i className="fa fa-facebook-official" />
            </a>
          </li>
          <li>
            <a>
              TWITTER <i className="fa fa-twitter-square" />
            </a>
          </li>
          <li>
            <a>
              LINKEDIN <i className="fa fa-linkedin-square" />
            </a>
          </li>
          <li>
            <a>
              GOOGLE+ <i className="fa fa-google-plus-square" />
            </a>
          </li>
          <li>
            <a>
              INSTAGRAM <i className="fa fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className="link-list social-media-icons">
        <div className="title-wrapper">
          <strong className="link-title">FOLLOW US</strong>
        </div>
        <div className="social-media-icons__list">
          <a>
            <i className="fa fa-facebook-official fa-2x" />
          </a>
          <a>
            <i className="fa fa-twitter-square fa-2x" />
          </a>
          <a>
            <i className="fa fa-linkedin-square fa-2x" />
          </a>
          <a>
            <i className="fa fa-google-plus-square fa-2x" />
          </a>
          <a>
            <i className="fa fa-instagram fa-2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;

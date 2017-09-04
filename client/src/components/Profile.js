import React from 'react';
import MeetAttending from './MeetAttending';
import './Profile.css';

const Profile = props => {
  return (
    <div className="profile-container">
      {/* <h2 id="profile-name">{props.user.name}</h2>
      <div className="profile-info">
        <div className="data-pair">
          <h4>
            e-Mail:<i className="fa fa-pencil-square-o fa-lg" />
          </h4>
          <div className="profile-data">
            <p>{props.user.email}</p>
          </div>
        </div>
        <div className="data-pair">
          <h4>
            Location:<i className="fa fa-pencil-square-o fa-lg" />
          </h4>
          <div className="profile-data">
            <p>{props.user.location}</p>
          </div>
        </div>
        <div className="data-pair">
          <h4>
            Date of Birth:<i className="fa fa-pencil-square-o fa-lg" />
          </h4>
          <div className="profile-data">
            <p>{props.user.birth}</p>
          </div>
        </div>
        <div className="data-pair">
          <h4>
            Description:<i className="fa fa-pencil-square-o fa-lg" />
          </h4>
          <div className="profile-data">
            <p>{props.user.descr}</p>
          </div>
        </div>
        <div className="data-pair">
          <h4>
            Website:<i className="fa fa-pencil-square-o fa-lg" />
          </h4>
          <div className="profile-data">
            <p>{props.user.web}</p>
          </div>
        </div>
      </div> */}
      <MeetAttending />
    </div>
  );
};

export default Profile;

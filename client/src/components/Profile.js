import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MeetAttending from './MeetAttending';
import './Profile.css';

class Profile extends Component {
  render() {
    // formatting the date:
    var birthDate = this.props.user.birth;
    return (
      <div className="profile-container">
        

        <h2 id="profile-name" className="header">{this.props.user.name}</h2>
        <div className="profile-border text">
          <div className="data-pair">
            <h4>e-Mail:</h4>
            <div className="profile-data">
              <p>{this.props.user.email}</p>
            </div>
          </div>
          <div className="data-pair">
            <h4>Location:</h4>
            <div className="profile-data">
              <p>{this.props.user.location}</p>
            </div>
          </div>
          <div className="data-pair">
            <h4>Date of Birth:</h4>
            <div className="profile-data">
              <p>{formatDate(this.props.user.birth)}</p>
            </div>
          </div>
          <div className="data-pair">
            <h4>Description:</h4>
            <div className="profile-data">
              <p>{this.props.user.descr}</p>
            </div>
          </div>
          <div className="data-pair">
            <h4>Website:</h4>
            <div className="profile-data">
              <p>{this.props.user.web}</p>
            </div>
          </div>
        </div>
        <Link to="/profile-form">
          <button onClick={this.toggleForm} className="form__button">
            <i className="fa fa-pencil-square-o fa-lg" /> Edit
          </button>
        </Link>
        <MeetAttending />
      </div>
    );
  }
}

// format the date for better readability
function formatDate(dateString) {
  var shortened = dateString.slice(0, 10);
  var dateParts= shortened.split("-");
  return Number(dateParts[2]) + 1 + "." + dateParts[1] + "." + dateParts[0];
};

export default Profile;

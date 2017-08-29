import React, { Component } from 'react';
import Header from './Header';
import './Profile.css';

const Profile = props => {
    return (
        <div className="profile-container">
            <h2 id="profile-name">Profile Name</h2>
            <div className="profile-info">
                <div className="data-pair">
                    <h4>e-Mail:<i className="fa fa-pencil-square-o fa-lg"></i></h4>
                    <div className="profile-data"><p>example@email.com</p></div>
                </div>
                <div className="data-pair">
                    <h4>Location:<i className="fa fa-pencil-square-o fa-lg"></i></h4>
                    <div className="profile-data"><p>Amsterdam</p></div>
                </div>
                <div className="data-pair">
                    <h4>Date of Birth:<i className="fa fa-pencil-square-o fa-lg"></i></h4>
                    <div className="profile-data"><p>34.04.2012</p></div>
                </div>
                <div className="data-pair">
                    <h4>Description:<i className="fa fa-pencil-square-o fa-lg"></i></h4>
                    <div className="profile-data"><p>I'm a very good example ... lorem ipsum bla bla bla</p></div>
                </div>
                <div className="data-pair">
                    <h4>Website:<i className="fa fa-pencil-square-o fa-lg"></i></h4>
                    <div className="profile-data"><p></p></div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
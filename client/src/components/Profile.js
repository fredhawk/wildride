import React, { Component } from 'react';
import Header from './Header';
import './Profile.css';

const Profile = props => {
    return (
        <div className="profile-container">
            <h2 id="profile-name">Profile Name</h2>
            <div className="profile-info">
                <div className="data-pair">
                    <h4>e-Mail:</h4>
                    <p>example@email.com</p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
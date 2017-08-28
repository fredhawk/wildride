import React, { Component } from 'react';
import Header from './Header';

const Profile = props => {
    return (
        <Header />
        <div class="profile-container">
            <h2 id="profile-name">Profile Name</h2>
            <div class="profile-info">
                <div class="data-pair">
                    <h4>e-Mail</h4>
                    <p>example@email.com</p>
                </div>
            </div>
        </div>
    );
}
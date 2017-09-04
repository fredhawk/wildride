import React, { Component } from 'react';
import Header from './Header';
import './Profile.css';

class Profile extends Component {
    this.displayForm = this.displayForm.bind(this);

    render () {
    return (
        <div className="profile-container">
            <h2 id="profile-name">{this.props.user.name}</h2>
            <div className="profile-info">
                <div className="data-pair">
                    <h4>e-Mail:</h4>
                    <div className="profile-data"><p>{this.props.user.email}</p></div>
                </div>
                <div className="data-pair">
                    <h4>Location:</h4>
                    <div className="profile-data"><p>{this.props.user.location}</p></div>
                </div>
                <div className="data-pair">
                    <h4>Date of Birth:</h4>
                    <div className="profile-data"><p>{this.props.user.birth}</p></div>
                </div>
                <div className="data-pair">
                    <h4>Description:</h4>
                    <div className="profile-data"><p>{this.props.user.descr}</p></div>
                </div>
                <div className="data-pair">
                    <h4>Website:</h4>
                    <div className="profile-data"><p>{this.props.user.web}</p></div>
                </div>
            </div>
            <button onClick={this.displayForm}><i className="fa fa-pencil-square-o fa-lg" /> Edit</button>
        </div>
    );
}
}


export default Profile;

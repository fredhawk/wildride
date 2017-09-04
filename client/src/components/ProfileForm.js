import React, { Component } from 'react';
import MeetAttending from './MeetAttending';
import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user,
            form: false
        };
        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm() {
        this.setState( prevState => ({
            form: !prevState.form
        }));
    }
    render () {
    return (
        <div className="profile-info">
            Form
            <div className="data-pair">
                <h4>e-Mail:</h4>
                <div className="profile-data"><p>{this.state.user.email}</p></div>
            </div>
            <div className="data-pair">
                <h4>Location:</h4>
                <div className="profile-data"><p>{this.state.user.location}</p></div>
            </div>
            <div className="data-pair">
                <h4>Date of Birth:</h4>
                <div className="profile-data"><p>{this.state.user.birth}</p></div>
            </div>
            <div className="data-pair">
                <h4>Description:</h4>
                <div className="profile-data"><p>{this.state.user.descr}</p></div>
            </div>
            <div className="data-pair">
                <h4>Website:</h4>
                <div className="profile-data"><p>{this.state.user.web}</p></div>
            </div>        
  <MeetAttending />
        </div>
    );
}
}

export default Profile;

import React, { Component } from 'react';
import MeetAttending from './MeetAttending';
import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.user
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        console.log("submit");
        this.props.forRoute.history.push('/profile');
    }

    handleChange (e) {
        this.setState({value: e.target.value});
    }

    render () {
    return (
        <div className="profile-form">
            <form onSubmit={this.handleSubmit}>
                <label>
                    E-Mail:
                    <input type="text" value={this.state.user.email} onChange={this.handleChange} />
                </label>
                <label>
                    Location:
                    <input type="text" value={this.state.user.name} onChange={this.handleChange} />
                </label>
                <label>
                    Date of Birth:
                    <input type="text" value={this.state.user.birth} onChange={this.handleChange} />
                </label>
                <label>
                    Description:
                    <input type="text" value={this.state.user.descr} onChange={this.handleChange} />
                </label>
                <label>
                    Website:
                    <input type="text" value={this.state.user.web} onChange={this.handleChange} />
                </label>
                <button type="submit"><i className="fa fa-check fa-lg" />Save</button>
            </form>
        </div>
    );
}
}

export default Profile;

import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      startDate: moment()
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const location = e.target.location.value;
    const birth = e.target.birth.value;
    console.log(birth);
    const descr = e.target.descr.value;
    const web = e.target.web.value;
    axios
      .post('/api/user/update', { email, location, birth, descr, web })
      .then(response => {
        console.log(response);
      })
      .catch(err => console.error(err));

    this.props.forRoute.history.push('/profile');
  }

  handleChange(e) {
    var property = e.target.name;
    var user = this.state.user;
    user[property] = e.target.value;
    this.setState({ user: user });
  }
  handleDateChange(date) {
    console.log(date);
    this.setState({
      startDate: date
    });
  }
  render() {
    return (
      <div className="profile-form">
        <form onSubmit={this.handleSubmit}>
          <label>E-Mail:</label>
          <input type="text" value={this.state.user.email} onChange={this.handleChange} name="email" />
          <label>Location:</label>
          <input type="text" value={this.state.user.location} onChange={this.handleChange} name="location" />
          <label>Date of Birth:</label>
          {/* <input type="date" value={this.state.user.birth} onChange={this.handleChange} name="birth" /> */}
          <DatePicker dateFormat="YYYY/MM/DD" onChange={this.handleDateChange} selected={this.state.startDate} placeholderText="Click to select a date of birth" maxDate={moment()} name="birth" />
          <label>Description:</label>
          <input type="text" value={this.state.user.descr} onChange={this.handleChange} name="descr" />
          <label>Website:</label>
          <input type="text" value={this.state.user.web} onChange={this.handleChange} name="web" />
          <button type="submit">
            <i className="fa fa-check fa-lg" />Save
          </button>
        </form>
      </div>
    );
  }
}

export default Profile;

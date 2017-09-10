import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import App from './App';

import 'react-datepicker/dist/react-datepicker.css';
import './Profile.css';

class Profile extends Component {
  constructor(props) {
    super(props);

    // creating the date for state.startDate: formatting + splitting every part
    let dateArray = App.formatDate(this.props.user.birth).split(".");
    let dateNumbers = dateArray.map( part => Number(part)); // changing type from string to number

    this.state = {
      user: this.props.user,
      startDate: moment().date(dateNumbers[0]).month(dateNumbers[1]-1).year(dateNumbers[2])
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
    const description = e.target.description.value;
    const food = e.target.food.value;
    const web = e.target.website.value;
    axios
      .post('/api/user/update', { email, location, birth, description, food, web })
      .then(response => {
        this.props.forRoute.history.push('/profile');
      })
      .catch(err => console.error(err));
  }

  handleChange(e) {
    var property = e.target.name;
    var user = this.state.user;
    user[property] = e.target.value;
    this.setState({ user: user });
  }
  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }
  render() {
    return (
      <div className="profile-form">
        <h2 id="profile-name" className="header border__bottom">{this.props.user.name}</h2>
        <form onSubmit={this.handleSubmit} className="text">
          <label className="form__label">E-Mail:</label>
          <input type="text" value={this.state.user.email} onChange={this.handleChange} name="email" className="form__input"/>
          <label className="form__label">Location:</label>
          <input type="text" value={this.state.user.location} onChange={this.handleChange} name="location" className="form__input"/>
          <label className="form__label">Date of Birth:</label>
          {/* <input type="date" value={this.state.user.birth} onChange={this.handleChange} name="birth" /> */}
          <DatePicker dateFormat="YYYY/MM/DD" onChange={this.handleDateChange} selected={this.state.startDate} placeholderText="Click to select a date of birth" maxDate={moment()} name="birth" className="form__input"/>
          <label className="form__label">Description:</label>
          <textarea value={this.state.user.description} onChange={this.handleChange} name="description" className="form__input text"></textarea>
          <label className="form__label">Food Preferences:</label>
          <select name="food" value={this.state.user.food ? this.state.user.food : "I eat everything"} onChange={this.handleChange} className="form__input">
            <option value="I eat everything">I eat everything</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Low Carb">Low Carb</option>
            <option value="No dairy">No dairy</option>
          </select>
          <label className="form__label">Website:</label>
          <input type="text" value={this.state.user.website} onChange={this.handleChange} name="website" className="form__input" />
          <button type="submit" className="form__button">
            <i className="fa fa-check fa-lg" />Save
          </button>
        </form>
      </div>
    );
  }
}

export default Profile;

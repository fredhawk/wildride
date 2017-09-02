import React, { Component } from 'react';
import axios from 'axios';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import './PostMeet.css';

class PostMeet extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const about = e.target.about.value;
    const location = e.target.location.value;
    const date = e.target.date.value;
    const food = e.target.food.checked;
    axios
      .post('/api/meet/new', { about, location, date, food })
      .then(response => {
        this.props.history.push('/');
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <section className="PostMeet">
        <h2 className="PostMeet__title">Post a new meet up!</h2>
        <form className="form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="about" className="form__label PostMeet__label">
            Meet is about...
          </label>
          <input type="text" className="form__input PostMeet__input" name="about" placeholder="Data structures" required />
          <label htmlFor="location" className="form__label PostMeet__label">
            Where is the meet?
          </label>
          <input type="text" className="form__input PostMeet__input" name="location" placeholder="Joes bar, Berlin, Germany" required />
          <label htmlFor="date" className=" form__label PostMeet__label">
            When is the meet?
          </label>
          <DayPickerInput placeholder="YYYY-MM-DD" format="YYYY-MM-DD" name="date" />
          <div>
            <label htmlFor="food" className="form__label PostMeet__label">
              Please check if food will be served
            </label>
            <input type="checkbox" className="form__input PostMeet__input--checkbox" name="food" value="true" />
          </div>
          <input type="submit" className="form__button" defaultValue="Set up a meet" />
        </form>
      </section>
    );
  }
}

export default PostMeet;

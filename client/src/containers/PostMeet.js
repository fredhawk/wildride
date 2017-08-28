import React, { Component } from 'react';
import axios from 'axios';
import './PostMeet.css';

class PostMeet extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const about = e.target.about.value;
    const location = e.target.location.value;
    const time = e.target.time.value;
    const food = e.target.food.value;
    const deadline = e.target.deadline.value;
    axios
      .post('http://localhost:3030/postmeet', { about, location, time, food, deadline })
      .then(response => {
        console.log(response);
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
          <input type="text" className="form__input PostMeet__input" name="about" placeholder="Data structures" />
          <label htmlFor="location" className="form__label PostMeet__label">
            Where is the meet?
          </label>
          <input type="text" className="form__input PostMeet__input" name="location" placeholder="Joes bar, Berlin, Germany" />
          <label htmlFor="time" className=" form__label PostMeet__label">
            When is the meet?
          </label>
          <textarea className="form__input PostMeet__input" name="time" placeholder="Sunday 22nd of March at 20.00" />
          <div>
            <label className="form__label">Will there be food served?</label>
            <br />
            <label htmlFor="food" className="form__label PostMeet__label">
              No
            </label>
            <input type="radio" className="form__input PostMeet__input--radio" name="food" value="no" defaultChecked />
            <label htmlFor="food" className="form__label PostMeet__label">
              Yes
            </label>
            <input type="radio" className="form__input PostMeet__input--radio" name="food" value="Yes" />
          </div>
          <label htmlFor="deadline" className="form__label PostMeet__label">
            Application deadline (days)
          </label>
          <input type="number" className="form__input PostMeet__input" name="deadline" />
          <input type="submit" className="form__button" defaultValue="Set up a meet" />
        </form>
      </section>
    );
  }
}

export default PostMeet;

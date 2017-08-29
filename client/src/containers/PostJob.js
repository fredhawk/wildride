import React, { Component } from 'react';
import axios from 'axios';

class PostJob extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const company = e.target.company.value;
    const jobTitle = e.target.jobtitle.value;
    const jobDescription = e.target.jobdescription.value;
    const location = e.target.location.value;
    const applyTime = e.target.applytime.value;
    axios.post('http://localhost:3030/postjob', { company, jobTitle, jobDescription, location, applyTime }).then(() => this.props.history.push('/')).catch(err => console.error(err));
  }
  render() {
    return (
      <section className="PostJob">
        <h2 className="PostJob__title">Post a new job opening!</h2>
        <form className="form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="company" className="form__label PostJob__label">
            Company name
          </label>
          <input type="text" className="form__input PostJob__input" name="company" placeholder="Ex. Fun factory" />
          <label htmlFor="jobtitle" className="form__label PostJob__label">
            Job Title
          </label>
          <input type="text" className="form__input PostJob__input" name="jobtitle" placeholder="Ex. Data Analyst" />
          <label htmlFor="jobdescription" className=" form__label PostJob__label">
            Job Description
          </label>
          <textarea className="form__input PostJob__input" name="jobdescription" placeholder="A description of what the job entails." />
          <label htmlFor="location" className="form__label PostJob__label">
            Location
          </label>
          <input type="text" className="form__input PostJob__input" name="location" placeholder="Ex. Berlin, Germany" />
          <label htmlFor="applytime" className="form__label PostJob__label">
            Application deadline (days)
          </label>
          <input type="number" className="form__input PostJob__input" name="applytime" />
          <input type="submit" className="form__button" defaultValue="Post job" />
        </form>
      </section>
    );
  }
}

export default PostJob;
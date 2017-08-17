import React, { Component } from 'react';

class PostJob extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const company = e.target.company.value;
    const jobTitle = e.target.jobtitle.value;
    const jobDescription = e.target.jobdescription.value;
    const location = e.target.location.value;
    const applyTime = e.target.applytime.value;
    console.log({ company, jobTitle, jobDescription, location, applyTime });
  }
  render() {
    return (
      <section className="PostJob">
        <h2 className="PostJob__title">Post a new job opening!</h2>
        <form className="form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="company" className="PostJob__label">
            Company name
          </label>
          <input type="text" className="PostJob__input" name="company" />
          <label htmlFor="jobtitle" className="PostJob__label">
            Job Title
          </label>
          <input type="text" className="PostJob__input" name="jobtitle" />
          <label htmlFor="jobdescription" className="PostJob__label">
            Job Description
          </label>
          <textarea className="PostJob__input" name="jobdescription" />
          <label htmlFor="location" className="PostJob__label">
            Location
          </label>
          <input type="text" className="PostJob__input" name="location" />
          <label htmlFor="applytime" className="PostJob__label">
            Application deadline (days)
          </label>
          <input type="number" className="PostJob__input" name="applytime" />
          <input type="submit" defaultValue="Post job" />
        </form>
      </section>
    );
  }
}

export default PostJob;

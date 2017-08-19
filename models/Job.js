const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');

const jobsSchema = new Schema({
  company: {
    type: String,
    required: 'The job needs an employer.'
  },
  jobTitle: {
    type: String,
    required: 'The posting needs a jobtitle.'
  },
  jobDescription: {
    type: String,
    required: 'Please describe the job.'
  },
  location: {
    type: String,
    required: 'The job has to have somewhere to work.'
  },
  availability: {
    type: Number
  }
});

module.exports = mongoose.model('Job', jobsSchema);

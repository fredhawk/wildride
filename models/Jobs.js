const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');

const jobsSchema = new Schema({
  title: {
    type: String,
    required: 'The posting needs a jobtitle.'
  },
  companyname: {
    type: String,
    required: 'The job needs an employer.'
  },
  location: {
    type: String,
    required: 'The job has to have somewhere to work.'
  },
  availability: {
    type: Date
  },
  description: {
    type: String,
    required: 'Please describe the job.'
  }
});

module.exports = mongoose.model('Jobs', jobsSchema);

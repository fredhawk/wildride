const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');

const meetSchema = new Schema({
  about: {
    type: String,
    required: 'The meet needs to be about something.'
  },
  location: {
    type: String,
    required: 'The meet needs a location.'
  },
  date: {
    type: Date,
    required: 'Please provide a date for the meet.'
  },
  food: {
    type: Boolean,
    required: 'Please inform if there will be food served.'
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  attendees: {
    type: [mongoose.Schema.ObjectId],
    ref: 'User'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Meet', meetSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid email address'],
    required: 'Please supply an email address'
  },
  firstname: {
    type: String,
    required: 'Please supply a firstname',
    trim: true
  },
  lastname: {
    type: String,
    required: 'Please supply a lastname',
    trim: true
  }
});

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');

const userSchema = new Schema({
  name: {
    type: String,
    required: 'Please supply a name.',
    trim: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid email address'],
    required: 'Please supply an email address'
  },
  password: {
    type: String,
    required: 'Please provide a password.'
  }
});

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const validator = require('validator');
const passportLocalMongoose = require('passport-local-mongoose');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

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
  }
  // meetups: {
  //   type: [mongoose.Schema.ObjectId],
  //   ref: 'Meet'
  // }
});

// userSchema.virtual('meetups', {
//   ref: 'Meet',
//   localField: 'attendees',
//   foreignField: 'attends'
// });
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

userSchema.plugin(passportLocalMongoose, { usernameField: 'email' });
userSchema.plugin(mongodbErrorHandler);

module.exports = mongoose.model('User', userSchema);

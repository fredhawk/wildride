const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.signup = async (req, res, next) => {
  console.log(req.body);
  const user = await new User(req.body).save();
};

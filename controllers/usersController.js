const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.signup = async (req, res, next) => {
  const user = await new User(req.body).save();
  res.json(req.body);
};

exports.login = async (req, res, next) => {
  // need to do authentication here
  console.log(req.body);
};

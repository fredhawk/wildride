const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

// exports.login = async (req, res, next) => {
//   // need to do authentication here
//   console.log(req.body);
//   res.json(req.body);
// };
exports.login = passport.authenticate('local', {
  // failureRedirect: '/login',
  failureFlash: 'Failed login!',
  // successRedirect: '/',
  successFlash: 'You are now logged in!'
});

exports.logout = (req, res) => {
  req.logout();
  res.json({ isLoggedIn: false });
};
exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
    return;
  }
  res.redirect('/login');
};

exports.confirmedPassword = (req, res, next) => {
  if (req.body.password === req.body['passwordConfirm']) {
    next();
    return;
  }
  res.redirect('back');
};

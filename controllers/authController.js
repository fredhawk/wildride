const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.login = (req, res) => {
  passport.authenticate('local')(req, res, () => {
    if (req.user) {
      return res.send(JSON.stringify(req.user));
    }
    return res.send(JSON.stringify({ error: `There was an error logging in.` }));
  });
};

exports.logout = (req, res) => {
  req.logout();
  res.send(req.user);
};
// exports.isLoggedIn = (req, res, next) => {
//   if (req.isAuthenticated()) {
//     next();
//     return;
//   }
//   res.redirect('/login');
// };

exports.confirmedPassword = (req, res, next) => {
  if (req.body.password === req.body['passwordConfirm']) {
    next();
    return;
  }
  res.redirect('back');
};

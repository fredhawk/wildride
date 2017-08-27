const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.login = (req, res) => {
  // console.log(`req`, req);
  // console.log(`res`, res);
  passport.authenticate('local')(req, res, () => {
    // console.log(`err`, err);
    // console.log(`user`, user);
    // console.log(`info`, info);
    // failureRedirect: '/login',
    // failureFlash: 'Failed login!',
    // successRedirect: '/:3000'
    // successFlash: 'You are now logged in!'
    res.json({ isLoggedIn: true });
    // console.log(`req`, req.body);
    // console.log(`res`, res.body);
    // console.log('yay login');
    // res.redirect('/');
  });
};

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

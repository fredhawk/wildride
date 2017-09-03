const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.signup = async (req, res, next) => {
  const user = new User({ email: req.body.email, name: req.body.name });
  const register = promisify(User.register, User);
  await register(user, req.body.password);
  next(); // pass to authController.login
};

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody('name');
  req.checkBody('name', 'You must supply a name!').notEmpty();
  req.checkBody('email', 'That Email is not valid!').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    gmail_remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('password', 'Password Cannot be Blank!').notEmpty();
  req.checkBody('passwordConfirm', 'Confirmed Password cannot be blank!').notEmpty();
  req.checkBody('passwordConfirm', 'Oops! Your passwords do not match').equals(req.body.password);
  const errors = req.validationErrors();
  if (errors) {
    // Stop it from running further
    return;
  }
  next();
};

exports.getUser = async (req, res) => {
  //Get user from the user´part of the database
  const user = await User.find(/*something to identify the user*/);
  // Send back user data
  res.json(user);
};

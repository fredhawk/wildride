const mongoose = require('mongoose');
const User = mongoose.model('User');
const Meet = mongoose.model('Meet');
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

exports.attend = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $push: { meetups: req.params.id }
    },
    {
      new: true
    }
  ).exec();
  const meet = await Meet.findByIdAndUpdate(
    req.params.id,
    {
      $push: { attendees: req.user._id }
    },
    {
      new: true
    }
  ).exec();
  res.send(meet);
};
exports.unattend = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $pull: { meetups: req.params.id }
    },
    {
      new: true
    }
  ).exec();
  const meet = await Meet.findByIdAndUpdate(
    req.params.id,
    {
      $pull: { attendees: req.user._id }
    },
    {
      new: true
    }
  ).exec();
  res.send(meet);
};

exports.getMeetup = async (req, res) => {
  const user = await User.findById(req.user._id)
    .populate('meetups')
    .populate('created');
  res.send(user);
};

exports.getUser = async (req, res) => {
  res.send(req.user);
};

exports.updateProfile = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      email: req.body.email,
      location: req.body.location,
      birth: req.body.birth,
      description: req.body.description,
      website: req.body.web
    },
    {
      new: true
    }
  ).exec();
  res.send(user);
};

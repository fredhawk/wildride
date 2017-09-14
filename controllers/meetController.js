const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Meet = mongoose.model('Meet');
const User = mongoose.model('User');

exports.postMeet = async (req, res) => {
  try {
    req.body.author = req.user._id;
    req.body.attendees = req.user._id;
    const meet = await new Meet(req.body).save();
    const user = User.findByIdAndUpdate(req.user._id, {
      $push: { created: meet._id, meetups: meet.id }
    }).exec();
    res.send(req.body);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getMeets = async (req, res) => {
  try {
    // Get meets from the meet part of the database
    const meets = await Meet.find().sort({ created: 'desc' });
    // Send back the meets to the client
    res.json(meets);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getSingleMeet = async (req, res) => {
  try {
    const meet = await Meet.find({ _id: req.params.id });
    res.send(meet[0]);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.attend = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(400).send(error);
  }
};
exports.unattend = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.validateMeet = (err, req, res, next) => {
  req.sanitizeBody('about');
  req.checkBody('about', 'You must supply a about!').notEmpty();
  req.sanitizeBody('location');
  req.checkBody('location', 'That location is not valid!').notEmpty();
  const errors = req.validationErrors();
  if (errors) {
    return;
  }
  next();
};

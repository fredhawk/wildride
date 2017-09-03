const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Meet = mongoose.model('Meet');

exports.postMeet = async (req, res) => {
  req.body.author = req.user._id;

  req.body.attendees = req.user._id;
  const meet = await new Meet(req.body).save();
  res.json(req.body);
};

exports.getMeets = async (req, res) => {
  // Get meets from the meet part of the database
  const meets = await Meet.find().sort({ created: 'desc' });
  // Send back the meets to the client
  res.json(meets);
};

exports.getSingleMeet = async (req, res) => {
  const meet = await Meet.find({ _id: req.params.id });
  res.send(meet[0]);
};

exports.attend = async (req, res) => {
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

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Meet = mongoose.model('Meet');

exports.postMeet = async (req, res, next) => {
  const meet = await new Meet(req.body).save();
  res.json(req.body);
};

exports.getMeets = async (req, res) => {
  // Get meets from the meet part of the database
  const meets = await Meet.find().sort({ created: 'desc' });
  // Send back the meets to the client
  res.json(meets);
};

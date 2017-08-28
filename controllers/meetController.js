const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Meet = mongoose.model('Meet');

exports.postMeet = async (req, res, next) => {
  const meet = await new Meet(req.body).save();
  res.json(req.body);
};

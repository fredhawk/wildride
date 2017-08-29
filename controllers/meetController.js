const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Meet = mongoose.model('Meet');

exports.postMeet = async (req, res, next) => {
  const meet = await new Meet(req.body).save();
  res.json(req.body);
};

exports.getMeets = async (req, res) => {
  console.log('yay');
  const meets = await Meet.find().sort({ created: 'desc' });
  console.log(`meets`, meets);
  res.json(meets);
};

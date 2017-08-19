const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Job = mongoose.model('Job');

exports.postJob = async (req, res, next) => {
  const job = await new Job(req.body).save();
  res.json(req.body);
};

if (process.env.NODE_ENV === 'production') {
  // Get prod keys
  module.exports = require('./prod.js');
} else {
  // Get dev keys
  module.exports = require('./dev.js');
}

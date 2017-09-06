if (process.env.NODE_EN === 'production') {
  // Get prod keys
  module.exports = './prod.js';
} else {
  // Get dev keys
  module.exports = './dev.js';
}

const path = require('path');

module.exports = {
  // ... Your other Webpack configurations ...

  resolve: {
    fallback: {
      stream: require.resolve('stream-browserify'),
      zlib: require.resolve('browserify-zlib'),
      fs: false, // Add this line to disable the 'fs' module fallback
      buffer: require.resolve('buffer/'),
      util: require.resolve('util/')
    }
  }
};

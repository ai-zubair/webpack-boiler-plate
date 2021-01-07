const path = require('path');

module.exports = (mode) => ({
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});

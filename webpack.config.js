const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@fortawesome/fontawesome-svg-core$': '@fortawesome/fontawesome-svg-core/index.js',
      '@fortawesome/free-solid-svg-icons$': '@fortawesome/free-solid-svg-icons/index.js',
      '@fortawesome/react-fontawesome$': '@fortawesome/react-fontawesome/index.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

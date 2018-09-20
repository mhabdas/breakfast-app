// Konfiguracja Webpack
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'src/frontend/public');
const APP_DIR = path.resolve(__dirname, 'src/frontend/');

module.exports = {
  entry: `${APP_DIR}/app/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3001,
  },
  watch: true,
  module: {
    rules: [{
      test: /\.(js(x))$/,
      exclude: /node_modules/,
      include: APP_DIR,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-2', 'react'],
      },
    }, {
      test: /\.css$/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
        ]
    }],
  },
  resolve: {
    extensions: [' ', '.js', '.jsx'],
  },
};

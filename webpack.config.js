// Konfiguracja Webpack
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src/frontend/');

module.exports = {
  entry: `${APP_DIR}/app/index.jsx`,
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist/',
    filename: 'index_bundle.js',
  },
  devtool: 'source-map',
  // devServer: {
  //   contentBase: 'dist/index_bundle.js',
  // },
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
        { loader: 'style-loader' },
        { loader: 'css-loader' },
      ],
    }],
  },
  resolve: {
    extensions: [' ', '.js', '.jsx'],
  },
};

const path = require('path');
const APP_DIR = path.resolve(__dirname, 'src/');
const HtmlWebPackPlugin = require("html-webpack-plugin");
require('dotenv').config();

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react'],
        },
      }, {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(ttf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            entryPath: `${APP_DIR}/fonts`,
            outputPath: './fonts',
          }
        }
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            entryPath: `${APP_DIR}/img`,
            outputPath: './img',
          }
        }
       ],
      }
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
  ],
  resolve: {
    extensions: [' ', '.js', '.jsx'],
  },
};

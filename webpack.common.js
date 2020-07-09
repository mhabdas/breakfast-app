const path = require('path')
const APP_DIR = path.resolve(__dirname, 'src/')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CnameWebpackPlugin = require('cname-webpack-plugin')
require('dotenv').config()

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: APP_DIR,
        loader: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              entryPath: `${APP_DIR}/fonts`,
              outputPath: './fonts',
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              entryPath: `${APP_DIR}/img`,
              outputPath: './img',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      favicon: './src/img/favicon.ico',
    }),
    new CnameWebpackPlugin({
      domain: 'breakfast-app.com',
    }),
  ],
  resolve: {
    alias: {
      '@components': `${APP_DIR}/components/`,
      '@utils': `${APP_DIR}/utils/`,
      '@constants': `${APP_DIR}/constants/`,
      '@styles': `${APP_DIR}/styles/`,
      '@interfaces': `${APP_DIR}/interfaces/`,
      '@fonts': `${APP_DIR}/fonts/`,
      '@img': `${APP_DIR}/img/`,
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devtool: 'source-map',
}

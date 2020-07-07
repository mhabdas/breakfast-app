const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const { DefinePlugin } = require('webpack')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new DefinePlugin({
      'process.env.DEV_API_KEY': JSON.stringify(process.env.DEV_API_KEY),
      'process.env.DEV_AUTH_DOMAIN': JSON.stringify(process.env.DEV_AUTH_DOMAIN),
      'process.env.DEV_DATABASE_URL': JSON.stringify(process.env.DEV_DATABASE_URL),
      'process.env.DEV_PROJECT_ID': JSON.stringify(process.env.DEV_PROJECT_ID),
      'process.env.DEV_STORAGE_BUCKET': JSON.stringify(process.env.DEV_STORAGE_BUCKET),
      'process.env.DEV_MESSAGING_SENDER_ID': JSON.stringify(process.env.DEV_MESSAGING_SENDER_ID),
      'process.env.DEV_ID': JSON.stringify(process.env.DEV_ID),
    }),
  ],
})

const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.PROD_API_KEY": JSON.stringify(process.env.PROD_API_KEY),
      "process.env.PROD_AUTH_DOMAIN": JSON.stringify(
        process.env.PROD_AUTH_DOMAIN
      ),
      "process.env.PROD_DATABASE_URL": JSON.stringify(
        process.env.PROD_DATABASE_URL
      ),
      "process.env.PROD_PROJECT_ID": JSON.stringify(process.env.PROD_PROJECT_ID),
      "process.env.PROD_STORAGE_BUCKET": JSON.stringify(
        process.env.PROD_STORAGE_BUCKET
      ),
      "process.env.PROD_MESSAGING_SENDER_ID": JSON.stringify(
        process.env.PROD_MESSAGING_SENDER_ID
      ),
      "process.env.PROD_ID": JSON.stringify(process.env.PROD_ID)
    })
  ]
});

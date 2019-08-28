const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    background: "./src/background/index.js",
    content: "./src/content/index.js"
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "src/popup.html",
      },
      {
        from: "src/manifest.json"
      }
    ])
  ],
  devtool: 'inline-source-map'
}
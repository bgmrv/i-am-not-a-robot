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
        from: "src/popup.js",
      },      
      {
        from: "src/manifest.json"
      },
      {
        from: "scenarios/*/*.json"
      },
      {
        from: "dependecias/*.js"
      },
      {
        from: "imagens/*.svg"
      },
      {
        from: "src/settings.html",
      },
      {
        from: "src/settings.js",
      },
      {
        from: "src/info.html",
      },
      {
        from: "src/info.js",
      }
    ])
  ],
  devtool: 'inline-source-map'
}
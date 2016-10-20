var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + "/src",

  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://0.0.0.0:8080",
    "webpack/hot/only-dev-server",
    __dirname + "/src/index"
  ],

  output: {
    path: __dirname + "/dist",
    filename: "birdie.js"
  },

  devServer : {
    contentBase : __dirname + "/public",
    stats: "normal"
  },

  devtool: "source-map",

  resolve: {
    extensions: ["", ".ts", ".tsx", ".js", ".jsx", ".scss"],
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ["ts-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("birdie.css")
  ]
};

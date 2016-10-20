var webpack = require("webpack");

module.exports = {
  context: __dirname + "/src",

  entry: {
    birdie: __dirname + "/src/index"
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },

  devServer : {
    contentBase : __dirname + "/public",
    stats: "normal"
  },

  devtool: "source-map",

  resolve: {
    extensions: ["", ".ts", ".tsx", ".js"],
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ["ts-loader"],
        exclude: /node_modules/
      }
    ]
  },

  plugins: []
};

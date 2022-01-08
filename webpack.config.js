const path = require("path");
module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

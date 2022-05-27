const path = require("path");

const config = {
  entry: "./index.ts",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /(node_modules)/,
        test: /\.(ts|tsx)$/i,
        loader: "babel-loader"
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  plugins: []
};

module.exports = config;

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      { test: /\.s?css/, use: ["style-loader", "css-loader"] },
    ],
  },
  
  mode: process.env.NODE_ENV,

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],

  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
    port: 8080,
    hot: true,
    inline: true,
  }
};

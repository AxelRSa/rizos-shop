const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV || "development";
const path = require("path");

module.exports = {
 mode: mode,
 devtool: false,
 entry: "./src/index.js",
 output: {
  filename: "script.js",
  path: path.resolve(__dirname, mode !== "production" ? "dist" : "build"),
  clean: mode !== "production" ? true : false,
 },
 module: {},
 plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin()],
};

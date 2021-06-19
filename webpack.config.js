const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV || "development";
const path = require("path");

module.exports = {
 mode: mode,
 devtool: "source-map",
 target: mode == "production" ? "browserlist" : "web",
 devServer: { contentBase: "./dist" },
 entry: "./src/index.js",
 output: {
  filename: "script.js",
  path: path.resolve(__dirname, "dist"),
  clean: mode == "production" ? true : false,
 },
 module: {
  rules: [
   { test: /\.pug/, use: ["html-loader", "pug-html-loader"] },
   {
    test: /\.scss$/i,
    use: [
     mode == "production" ? MiniCssExtractPlugin.loader : "style-loader",
     "css-loader",
     mode == "production" ? "postcss-loader" : "sass-loader",
    ],
   },
   {
    test: /\.(jpe?g|png|gif|svg|webp)$/i,
    type: "asset",
    generator: { filename: "media/images/[name][ext]" },
   },
   {
    test: /\.(eot|svg|ttf|woff|woff2)$/i,
    type: "asset",
    generator: { filename: "media/fonts/[name][ext]" },
   },
  ],
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: "./src/index.pug",
   filename: "index.html",
   inject: "body",
  }),
  new MiniCssExtractPlugin({ filename: "styles.css" }),
 ],
};

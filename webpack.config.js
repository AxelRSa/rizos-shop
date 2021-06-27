const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV || "development";
const path = require("path");

module.exports = {
 mode: mode,
 devtool: mode == "production" ? false : "source-map",
 target: mode == "production" ? "browserslist" : "web",
 devServer: { contentBase: "./dist" },
 entry: "./src/index.js",
 output: {
  filename: mode === "production" ? "resource/script.[hash].js" : "resource/script.js",
  path: path.resolve(__dirname, "dist"),
  clean: mode == "production" ? true : false,
 },
 module: {
  rules: [
   { test: /\.pug/, use: ["html-loader", "pug-html-loader"] },
   {
    test: /\.scss$/i,
    use: [
     mode === "production"
      ? { loader: MiniCssExtractPlugin.loader, options: { publicPath: "../" } }
      : "style-loader",
     "css-loader",
     mode === "prodcution" ? "postcss-loader" :
      "sass-loader",
    ],
   },
   {
    test: /\.(jpe?g|png|gif|svg|webp)$/i,
    type: "asset",
    generator: {
     filename: `src/media/images/[name]${mode === "production" ? "[hash]" : ""}[ext]`,
    },
   },
   {
    test: /\.(eot|svg|ttf|woff|woff2)$/i,
    type: "asset",
    generator: { filename: `src/media/fonts/[name]${mode === "production" ? "[hash]" : ""}[ext]`, },
   },
  ],
 },
 plugins: [
  new HtmlWebpackPlugin({
   template: "./src/index.pug",
   filename: "index.html",
   inject: "body",
  }),
  new MiniCssExtractPlugin({ filename: "resource/styles.[hash].css" }),
 ],
};

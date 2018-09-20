const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
     app: [
      path.resolve(__dirname, "src/index.js"),
      path.resolve(__dirname, "src/main.scss"),
     ],
     test: [
      path.resolve(__dirname, "src/tests/index.test.js")
     ]
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.pug/,
          loaders: ['html-loader', 'pug-html-loader']
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.pug"
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
};
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/js/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/index.html", to: "index.html" }
      ]
    }),
  ],
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: 'babel-loader'
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          }
      ]
  },

  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    contentBase: __dirname,
    compress: true,
    publicPath: '/',
    historyApiFallback: true
  },
};

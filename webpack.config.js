const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Songbird",
      template: "./src/index.html",
      icon: "./src/assets/favicon.png"
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "src/assets/favicon.png"),
        to: path.resolve(__dirname, "dist")
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name][hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(wav)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "sounds/[name][hash].[ext]"
            }
          }
        ]
      }
    ]
  }
};

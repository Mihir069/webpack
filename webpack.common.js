const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

export default webPackConfig = (mode) => ({
  entry: "./src/index.js",
  mode,
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        loader: "file-loader",
        options: {
          name: "img/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
});

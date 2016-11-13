const webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
    "./front/main"
  ],
  context: __dirname,
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
  },
  // output: {
  //   publicPath: "/modules/",
  //   path: path.join(__dirname, "../dist-dev/modules"),
  //   filename: "[name].js",
  //   chunkFilename: "[id].chunk.js",
  // },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          "@angularclass/hmr-loader",
          "awesome-typescript-loader",
          "angular2-load-children",
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  }
}

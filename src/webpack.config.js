const webpack = require("webpack");
const { ForkCheckerPlugin, TsConfigPathsPlugin } = require('awesome-typescript-loader');

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
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          "@angularclass/hmr-loader",
          "awesome-typescript-loader",
          "angular2-load-children-loader",
          "angular2-template-loader",
        ]
      },
      {
        test: /\.css$/, 
        loaders: [
          'raw-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [
                  require("postcss-smart-import")(),
                  require("postcss-cssnext")(),
                  require("autoprefixer")(),
                ];
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new TsConfigPathsPlugin(),
    new webpack.ProgressPlugin(),
  ],
  resolve: {
    extensions: ['*', '.ts', '.js', '.json']
  }
}

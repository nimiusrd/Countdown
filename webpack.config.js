const webpack = require('webpack');

module.exports = {
  devServer: {contentBase: './public'},
  entry: './app/index',
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$|\.tag$/
      }
    ],
    preLoaders: [
      {
        exclude: /node_modules/,
        loader: 'riotjs-loader',
        query: {type: 'none'},
        test: /\.tag$/
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  },
  plugins: [
    new webpack.ProvidePlugin(
      {riot: 'riot'}
    )
  ]
};

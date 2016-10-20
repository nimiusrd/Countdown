const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: './'
  },
  entry: './src/main',
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$|\.tag$/
      },
    ],
    preLoaders: [
      {
        exclude: /node_modules/,
        loader: 'riotjs-loader',
        query: {
          type: 'none'
        },
        test: /\.tag$/
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`
  },
  plugins: [
    new webpack.ProvidePlugin(
      {
        riot: 'riot'
      }
    )
  ]
};

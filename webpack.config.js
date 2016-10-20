const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: './dev'
  },
  entry: './src/main',
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.js$|\.tag$/
      },
      {
        exclude: /node_modules/,
        loader: 'exports-loader',
        test: /\.js$|\.tag$/
      }
    ],
    preLoaders: [
      {
        exclude: /node_modules/,
        loader: 'riotjs-loader',
        query: {
          type: 'none'
        },
        test: /\.tag$/
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/app/scripts/`
  },
  plugins: [
    new webpack.ProvidePlugin(
      {
        riot: 'riot'
      }
    )
  ],
  resolve: {
    extensions: [ '', '.js', '.tag' ]
  },
};

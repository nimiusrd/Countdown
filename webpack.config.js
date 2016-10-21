const webpack = require('webpack');

const config = {
  devServer: {contentBase: './dev'},
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
        query: {type: 'none'},
        test: /\.tag$/
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/app/scripts/`
  },
  plugins: [
    new webpack.ProvidePlugin({riot: 'riot'}),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ja/)
  ],
  resolve: {extensions: [ '', '.js', '.tag' ]},
};

// add productino config
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      output: {comments: false}
    })
  );
}

module.exports = config;

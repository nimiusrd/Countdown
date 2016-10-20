const webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
  config.set({
    autoWatch: true,
    basePath: '',
    browsers: [ 'Chromium', 'Chrome' , 'Firefox' ],
    colors: true,
    concurrency: Infinity,
    exclude: [],
    files: [
      {
        pattern: 'test/*.js',
        watched: false
      }
    ],
    frameworks: [ 'mocha' ,'riot' ],
    logLevel: config.LOG_DEBUG,
    port: 9876,
    preprocessors: {
      'test/*.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: ['progress'],
    singleRun: false,
    webpack: Object.assign(
      webpackConfig,
      {
        devtool: 'eval'
      }
    )
  });
};

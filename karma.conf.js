const webpackConfig = require('./webpack.config');

module.exports = (config) => {
  config.set({
    autoWatch: true,
    basePath: '',
    colors: true,
    concurrency: Infinity,
    detectBrowsers: {
      enabled: true,
      postDetection(availableBrowser) {
        const result = availableBrowser;

        if (availableBrowser.includes('IE')) {
          result.push('IE9');
        }
        if (availableBrowser.length > 1 && availableBrowser.includes('PhantomJS')) {
          const i = result.indexOf('PhantomJS');

          if (i !== -1) {
            result.splice(i, 1);
          }
        }

        return result;
      },
      usePhantomJS: false
    },
    exclude: [],
    files: [
      {pattern: 'test/*.html'},
      {pattern: 'test/*.js'},
    ],
    frameworks: [ 'mocha', 'riot', 'detectBrowsers' ],
    logLevel: config.LOG_INFO,
    preprocessors: {
      'test/*.html': ['html2js'],
      'test/*.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: ['mocha'],
    singleRun: true,
    webpack: Object.assign(
      webpackConfig,
      {
        devtool: 'inline-source-map',
        output: {
          filename: 'bundle.test.js',
          publicPath: 'http://localhost:9876/base/test/scripts/'
        },
      }
    ),
  });
};

// eslint-disable-next-line
module.exports = function(wallaby) {
  return {
    files: [
      { pattern: 'src/**/*.js' },
      { pattern: 'src/**/*.test.js', ignore: true },
      // {
      //   pattern: 'node_modules/babel-polyfill/dist/polyfill.js',
      //   instrument: false,
      // },
    ],

    tests: [{ pattern: 'src/**/*.test.js' }],

    env: {
      type: 'node',
      runner: 'node',
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel({ babel: require('babel-core') }),
    },
    testFramework: 'jest',
    debug: true,

    setup(wallaby) {

      // const jestConfig = require('./jest.config.js');
      // jestConfig.globals = { __DEV__: true };
      // wallaby.testFramework.configure(jestConfig);
    },
  };
};

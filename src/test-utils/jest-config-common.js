const jestSetupFileAfterEnv = require.resolve('./setup-after-env.js');
module.exports = {
  rootDir: '../../',
  collectCoverage: true,
  coverageReporters: ['json', 'lcov'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/src/**/*.flow.js',
    '!**/src/test-utils/**',
    '!**/__tests__/*.js',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: [jestSetupFileAfterEnv],
};

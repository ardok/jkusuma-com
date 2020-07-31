const commonConfig = require('./jest-config-common');

module.exports = {
  ...commonConfig,
  testMatch: ['**/__tests__/**/*.browser.js', '**/__tests__/**/*.test.js'],
  setupFiles: ['<rootDir>/src/test-utils/jest-setup.browser.js'],
};

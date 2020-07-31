const commonConfig = require('./jest-config-common');

module.exports = {
  ...commonConfig,
  testMatch: ['**/__tests__/**/*.node.js', '**/__tests__/**/*.test.js'],
  setupFiles: ['<rootDir>/src/test-utils/jest-setup.node.js'],
};

const nextJest = require('next/jest');

// https://github.com/vercel/next.js/issues/8663

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const commonConfig = {
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/jest/jest-setup-after-env.ts'],
  collectCoverage: true,
  coverageReporters: ['json', 'lcov'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '**/src/**/*.tsx',
    '!**/__tests__/**',
    '!**/src/common/types/**',
    '!**/node_modules/**',
  ],
  preset: 'ts-jest',
  globals: {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
    },
  },
};

// Add any custom config to be passed to Jest
const customJestConfig = {
  projects: [
    {
      ...commonConfig,
      displayName: 'browser',
      testEnvironment: 'jest-environment-jsdom',
      testMatch: ['**/__tests__/**/*.(test|browser).(ts|tsx)'],
    },
    {
      ...commonConfig,
      displayName: 'node',
      testEnvironment: 'jest-environment-node',
      testMatch: ['**/__tests__/**/*.(test|node).(ts|tsx)'],
    },
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

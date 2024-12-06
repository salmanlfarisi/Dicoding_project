/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  "testMatch": ["**/?(*.)+(spec|test).[jt]s?(x)"],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: ['fake-indexeddb/auto'],

  // The test environment that will be used for testing
  testEnvironment: './JSDOMEnvironmentPatch.js',

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.[js]sx?$': 'babel-jest',
  },
};

module.exports=config;
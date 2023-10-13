// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const esModules = ['ansi-regex', 'ky', 'ky-universal', 'strip-ansi'].join('|');

module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};
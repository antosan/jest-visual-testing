module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    '^.+\\.css$': 'jest-transform-css',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-file',
  },
  testRegex: '(/__tests__/.*|\\.test)\\.(ts|tsx)$',
  testEnvironment: 'jsdom',
};

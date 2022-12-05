require('dotenv').config()

module.exports = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  setupFiles: ['dotenv/config'],
  setupFilesAfterEnv: ['<rootDir>/.jest/jestSetup.js'],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js',
    '!src/utils.js',
    '!src/styles.js',
    '!src/utils/styledRender/*.js',
    '!src/utils/renderWithRouter/*.js',
    '!src/styles/*.js',
    '!src/**/__tests__/*.js',
    '!src/**/stories/*.js',
    '!src/**/*.stories.(js|mdx)',
    '!src/**/Popper/**',
    '!src/**/DropDownMenu/**',
    '!src/pages/**'
  ],
  coverageReporters: ['lcov', 'text', 'json-summary'],
  modulePaths: ['<rootDir>/src/'],
  testMatch: ['**/__tests__/**/*.test.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'identity-obj-proxy',
    '\\.(css|scss)$': '<rootDir>/.jest/identity-obj-proxy-esm.js'
  }
}

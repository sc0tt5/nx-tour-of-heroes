module.exports = {
  coverageDirectory: './tmp/coverage',
  coverageReporters: ['html'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  passWithNoTests: true,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './tmp/results',
        filename: 'index.html',
        expand: true,
        hideIcon: true,
        pageTitle: 'Results'
      }
    ]
  ],
  resolver: '@nrwl/jest/plugins/resolver',
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  verbose: false,
  projects: '<rootDir>/libs/tour-of-heroes/heroes/feature'
};

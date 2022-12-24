const { getJestProjects } = require('@nrwl/jest');

export default {
  coverageDirectory: './tmp/coverage',
  coverageReporters: ['html', 'text'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  passWithNoTests: true,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './tmp/results',
        filename: 'index.html',
        expand: false,
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
  projects: [...getJestProjects(), '<rootDir>']
};

/* eslint-disable */
export default {
  displayName: 'api',
  globals: {
    'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' }
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../tmp/coverage/libs/api',
  preset: '../../jest.preset.js'
};

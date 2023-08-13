export default {
  displayName: 'api',
  globals: {},
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s?$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }]
  },
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../tmp/coverage/libs/api',
  preset: '../../jest.preset.js'
};

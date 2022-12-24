/* eslint-disable */
export default {
  name: 'shared-theme',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../tmp/coverage/libs/shared/theme',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment'
  ]
};

module.exports = {
  name: 'shared-animations',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../tmp/coverage/libs/shared/animations',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment'
  ]
};

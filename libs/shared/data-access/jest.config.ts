module.exports = {
  name: 'shared-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../tmp/coverage/libs/shared/data-access',
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment'
  ]
};

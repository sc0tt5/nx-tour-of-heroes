module.exports = {
  name: 'demo-one',
  preset: '../../jest.config.js',
  coverageDirectory: '../../tmp/coverage/apps/demo-one',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

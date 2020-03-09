module.exports = {
  name: 'demo-one-feature-page-two',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/demo-one/feature/page-two',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

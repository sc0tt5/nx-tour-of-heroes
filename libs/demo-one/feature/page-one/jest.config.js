module.exports = {
  name: 'demo-one-feature-page-one',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/demo-one/feature/page-one',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

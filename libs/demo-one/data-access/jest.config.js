module.exports = {
  name: 'demo-one-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/demo-one/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

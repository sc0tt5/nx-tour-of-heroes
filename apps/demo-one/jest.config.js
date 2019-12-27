module.exports = {
  name: 'demo-one',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/demo-one',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

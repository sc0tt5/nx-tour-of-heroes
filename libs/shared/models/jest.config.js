module.exports = {
  name: 'shared-models',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/models',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

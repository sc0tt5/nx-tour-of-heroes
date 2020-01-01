module.exports = {
  name: 'shared-animations',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/animations',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

module.exports = {
  name: 'shared-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

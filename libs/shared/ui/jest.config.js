module.exports = {
  name: 'shared-ui',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

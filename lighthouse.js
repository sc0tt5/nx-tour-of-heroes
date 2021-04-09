'use strict';

const perfConfig = {
  extends: 'lighthouse:default',
  settings: {
    output: 'json',
    throttlingMethod: 'devtools',
    onlyCategories: ['performance']
  }
};

module.exports = perfConfig;

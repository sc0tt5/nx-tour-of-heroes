import { Options } from 'chrome-launcher';

import { mobileBudget } from './budget';

export const options: Options = {
  chromeFlags: ['--no-sandbox', '--headless']
};

export const perfConfig = {
  extends: 'lighthouse:default',
  settings: {
    budgets: [mobileBudget],
    emulatedFormFactor: 'mobile',
    onlyCategories: ['performance'],
    output: ['html', 'json']
  }
};

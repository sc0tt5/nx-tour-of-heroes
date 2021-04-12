import { Options } from 'chrome-launcher';

import { mobileBudgets } from './budgets';

export const options: Options = {
  chromeFlags: ['--no-sandbox', '--headless']
};

export const perfConfig = {
  extends: 'lighthouse:default',
  settings: {
    budgets: mobileBudgets,
    emulatedFormFactor: 'mobile',
    onlyCategories: ['performance'],
    output: ['html', 'json']
  }
};

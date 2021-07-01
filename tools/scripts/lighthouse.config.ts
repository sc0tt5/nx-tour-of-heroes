import { Options } from 'chrome-launcher';

import { desktopBudget, mobileBudget } from './budget';

export const options: Options = {
  chromeFlags: ['--no-sandbox', '--headless']
};

export const perfConfigDesktop = {
  extends: 'lighthouse:default',
  settings: {
    budgets: [desktopBudget],
    emulatedFormFactor: 'desktop', // mobile | desktop
    onlyCategories: ['performance'],
    output: ['html', 'json']
    // throttling: { rttMs: 40, throughputKbps: 10 * 1024, cpuSlowdownMultiplier: 1 },
    // throttlingMethod: 'devtools' // provided | devtools | simulated (default)
  }
};

export const perfConfigMobile = {
  extends: 'lighthouse:default',
  settings: {
    budgets: [mobileBudget],
    emulatedFormFactor: 'mobile', // mobile | desktop
    onlyCategories: ['performance'],
    output: ['html', 'json']
    // throttling: { rttMs: 40, throughputKbps: 10 * 1024, cpuSlowdownMultiplier: 1 },
    // throttlingMethod: 'devtools' // provided | devtools | simulated (default)
  }
};

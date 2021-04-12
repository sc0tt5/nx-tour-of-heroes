/** For supported metrics see
 * {@link https://github.com/GoogleChrome/lighthouse/blob/master/docs/performance-budgets.md}
 */

export const mobileBudget = {
  path: '/*',
  options: {},
  timings: [
    // start: lighthouse performance scoring calculator
    {
      metric: 'first-contentful-paint', // FCP
      budget: 2336
    },
    {
      metric: 'speed-index', // SI
      budget: 3387
    },
    {
      metric: 'largest-contentful-paint', // LCP [core web vitals]
      budget: 2500
    },
    {
      metric: 'interactive', // TTI (time to interactive)
      budget: 3785
    },
    {
      metric: 'total-blocking-time', // TBT
      budget: 287
    },
    {
      metric: 'cumulative-layout-shift', // CLS [core web vitals]
      budget: 0.1
    },
    // end: lighthouse performance scoring calculator
    {
      metric: 'max-potential-fid', // FID (first input delay) [core web vitals]
      budget: 100
    }
  ],
  resourceSizes: [
    {
      resourceType: 'total',
      budget: 500
    },
    {
      resourceType: 'script',
      budget: 150
    }
  ],
  resourceCounts: [
    {
      resourceType: 'third-party',
      budget: 5
    }
  ]
};

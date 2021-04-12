export const mobileBudgets = [
  {
    path: '/*',
    options: {},
    timings: [
      {
        metric: 'interactive',
        budget: 5000
      },
      {
        metric: 'first-meaningful-paint',
        budget: 2000
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
  }
];

export const desktopBudgets = [
  {
    path: '/*',
    options: {},
    timings: [
      {
        metric: 'interactive',
        budget: 5000
      },
      {
        metric: 'first-meaningful-paint',
        budget: 2000
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
  }
];

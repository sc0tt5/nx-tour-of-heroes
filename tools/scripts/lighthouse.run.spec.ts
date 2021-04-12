const report = require('../../tmp/lighthouse/mobile.json');

describe('Performance', () => {
  it('should have a performance score within an acceptable threshold', () => {
    expect(report.categories.performance.score).toBeGreaterThanOrEqual(0.9);
  });

  it('should have a FCP of less than 2s', () => {
    expect(report.audits['first-contentful-paint'].numericValue).toBeLessThan(2000);
  });
});

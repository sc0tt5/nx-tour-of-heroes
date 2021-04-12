import { mobileBudget } from './budget';
import { LH } from './lighthouse.types';

const report = require('../../tmp/lighthouse/mobile.json');

// todo: unit tests - run and report

/**
 * Example of budgets from Performance Budgets 101: {@link https://web.dev/performance-budgets-101/}
 * - Our product page must ship less than 170 KB of JavaScript on mobile
 * - Our search page must include less than 2 MB of images on desktop
 * - Our home page must load and get interactive in < 5 s on slow 3G on a Moto G4 phone
 * - Our blog must score > 80 on Lighthouse performance audits
 *
 * Also see Core Web Vitals: {@link https://web.dev/vitals/#core-web-vitals}
 * For each of the above metrics, to ensure you're hitting the recommended target for most of your users,
 * a good threshold to measure is the 75th percentile of page loads, segmented across mobile and desktop devices.
 */

describe('Performance Score', () => {
  it('should have a performance score within an acceptable threshold', () => {
    expect(report.categories.performance.score).toBeGreaterThanOrEqual(0.75);
  });

  // first-contentful-paint
  it('should have a FCP of less than 2.3s', () => {
    const fcpBudget = mobileBudget.timings.find(t => t.metric === LH.PERFORMANCE.FCP).budget;
    expect(report.audits[LH.PERFORMANCE.FCP].numericValue).toBeLessThan(fcpBudget);
  });

  // speed-index
  it('should have a SI of less than 3.4s', () => {
    const siBudget = mobileBudget.timings.find(t => t.metric === LH.PERFORMANCE.SI).budget;
    expect(report.audits[LH.PERFORMANCE.SI].numericValue).toBeLessThan(siBudget);
  });

  // todo: this test fails
  // interactive
  it('should have a TTI of less than 3.8s', () => {
    const ttiBudget = mobileBudget.timings.find(t => t.metric === LH.PERFORMANCE.TTI).budget;
    expect(report.audits[LH.PERFORMANCE.TTI].numericValue).toBeLessThan(ttiBudget);
  });

  // todo: this test fails
  // total-blocking-time
  it('should have a TBT of less than 0.3s', () => {
    const tbtBudget = mobileBudget.timings.find(t => t.metric === LH.PERFORMANCE.TBT).budget;
    expect(report.audits[LH.PERFORMANCE.TBT].numericValue).toBeLessThan(tbtBudget);
  });
});

describe('Core Web Vitals', () => {
  // largest-contentful-paint
  it('should have a LCP less than 2.5s', () => {
    const lcpBudget = mobileBudget.timings.find(t => t.metric === LH.CORE_WEB_VITALS.LCP).budget;
    expect(report.audits[LH.CORE_WEB_VITALS.LCP].numericValue).toBeLessThan(lcpBudget);
  });

  // cumulative-layout-shift
  it('should have a CLS less than 0.1', () => {
    const clsBudget = mobileBudget.timings.find(t => t.metric === LH.CORE_WEB_VITALS.CLS).budget;
    expect(report.audits[LH.CORE_WEB_VITALS.CLS].numericValue).toBeLessThan(clsBudget);
  });

  // todo: this test fails
  // max-potential-fid
  it('should have a FID less than 100ms', () => {
    const fidBudget = mobileBudget.timings.find(t => t.metric === LH.CORE_WEB_VITALS.FID).budget;
    expect(report.audits[LH.CORE_WEB_VITALS.FID].numericValue).toBeLessThan(fidBudget);
  });
});

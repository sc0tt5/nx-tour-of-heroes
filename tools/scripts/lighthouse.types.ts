// todo: lighthouse does not expose types

export namespace LH {
  export const enum PERFORMANCE {
    FCP = 'first-contentful-paint',
    SI = 'speed-index',
    TTI = 'interactive',
    TBT = 'total-blocking-time'
  }
  export const enum CORE_WEB_VITALS {
    LCP = 'largest-contentful-paint',
    CLS = 'cumulative-layout-shift',
    FID = 'max-potential-fid'
  }
}

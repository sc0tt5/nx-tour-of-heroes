import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PageTwoState } from './page-two.reducer';

// feature
const pageTwoFeatureSelector = createFeatureSelector<PageTwoState>('page-two');

export const getPageTwo = createSelector(
  pageTwoFeatureSelector,
  (state: PageTwoState) => state.page
);

export const getPageTwoLoaded = createSelector(
  pageTwoFeatureSelector,
  (state: PageTwoState) => state.loaded
);

export const getPageTwoLoading = createSelector(
  pageTwoFeatureSelector,
  (state: PageTwoState) => state.loading
);

export const pageTwoSelectors = {
  getPageTwo,
  getPageTwoLoaded,
  getPageTwoLoading
};

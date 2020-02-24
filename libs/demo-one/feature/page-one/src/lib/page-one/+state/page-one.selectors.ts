import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PageOneState } from './page-one.reducer';

// feature
const pageOneFeatureSelector = createFeatureSelector<PageOneState>('page-one');

export const getPageOne = createSelector(
  pageOneFeatureSelector,
  (state: PageOneState) => state.page
);

export const getPageOneLoaded = createSelector(
  pageOneFeatureSelector,
  (state: PageOneState) => state.loaded
);

export const getPageOneLoading = createSelector(
  pageOneFeatureSelector,
  (state: PageOneState) => state.loading
);

export const pageOneSelectors = {
  getPageOne,
  getPageOneLoaded,
  getPageOneLoading
};

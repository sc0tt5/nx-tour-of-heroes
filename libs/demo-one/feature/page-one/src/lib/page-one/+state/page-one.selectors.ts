import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PageOneState } from './page-one.reducer';

// feature
const pageOneFeatureSelector = createFeatureSelector<PageOneState>('page-one');

const getPageOne = createSelector(
  pageOneFeatureSelector,
  (state: PageOneState) => state.page
);

const getPageOneLoaded = createSelector(
  pageOneFeatureSelector,
  (state: PageOneState) => state.loaded
);

const getPageOneLoading = createSelector(
  pageOneFeatureSelector,
  (state: PageOneState) => state.loading
);

export const pageOneSelectors = {
  getPageOne,
  getPageOneLoaded,
  getPageOneLoading
};

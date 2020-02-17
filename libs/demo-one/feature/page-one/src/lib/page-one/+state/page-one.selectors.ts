import { createSelector } from '@ngrx/store';
import * as fromFeature from './page-one.reducer';

// page state
export const getPageOneState = createSelector(
  fromFeature.getPageOneState,
  (state: fromFeature.PageOneState) => state
);

export const getPageOneEntities = createSelector(
  getPageOneState,
  fromFeature.getPageOneEntities
);

export const getAllPageOne = createSelector(
  getPageOneEntities,
  entities => Object.keys(entities).map(id => entities[parseInt(id, 10)])
);

export const getPageOneLoaded = createSelector(
  getPageOneState,
  fromFeature.getPageOneLoaded
);

export const getPageOneLoading = createSelector(
  getPageOneState,
  fromFeature.getPageOneLoading
);

export const getPageOne = createSelector(
  getPageOneState,
  fromFeature.getPageOne
);

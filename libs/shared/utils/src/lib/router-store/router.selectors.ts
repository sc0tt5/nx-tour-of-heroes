import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { routerFeatureKey, RouterState, RouterStateUrl } from './router.reducer';

// feature
const routerFeatureSelector = createFeatureSelector<
  RouterState,
  RouterReducerState<RouterStateUrl>
>(routerFeatureKey);

const PARAMS = params => (Object.keys(params).length ? params : undefined);

// selectors
const getRouterState = createSelector(routerFeatureSelector, router => router.state);
const getParams = createSelector(getRouterState, routerState => PARAMS(routerState.params));
const getQueryParams = createSelector(getRouterState, routerState =>
  PARAMS(routerState.queryParams)
);
const getUrl = createSelector(getRouterState, routerState => routerState.url);

// public
export const routerSelectors = {
  getParams,
  getQueryParams,
  getUrl
};

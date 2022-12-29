import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { routerFeatureKey, RouterStateUrl } from './router.reducer';

// feature
const selectRouterFeature = createFeatureSelector<RouterReducerState<RouterStateUrl>>(routerFeatureKey);

const PARAMS = (params: Record<string, string>) => (Object.keys(params).length ? params : undefined);

// selectors
const selectRouterState = createSelector(selectRouterFeature, router => router.state);
const selectParams = createSelector(selectRouterState, routerState => PARAMS(routerState.params));
const selectQueryParams = createSelector(selectRouterState, routerState => PARAMS(routerState.queryParams));
const selectUrl = createSelector(selectRouterState, routerState => routerState.url);

// public
export const routerSelectors = {
  selectParams,
  selectQueryParams,
  selectUrl
};

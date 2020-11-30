import { getSelectors, RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector } from '@ngrx/store';

import { routerFeatureKey, RouterState, RouterStateUrl } from './router.reducer';

// feature
const routerFeatureSelector = createFeatureSelector<
  RouterState,
  RouterReducerState<RouterStateUrl>
>(routerFeatureKey);

// built-in selectors
const {
  selectCurrentRoute, // select the current route
  selectFragment, // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl // select the current url
} = getSelectors(routerFeatureSelector);

export const routerSelectors = {
  selectCurrentRoute,
  selectFragment,
  selectQueryParams,
  selectQueryParam,
  selectRouteParams,
  selectRouteParam,
  selectRouteData,
  selectUrl
};

// custom selectors can also be created
// see: https://ngrx.io/guide/router-store/selectors

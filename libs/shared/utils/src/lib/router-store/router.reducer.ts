// prettier-ignore
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';

import { RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';

export const routerFeatureKey = 'router';

export interface RouterStateUrl {
  params: Params;
  queryParams: Params;
  url: string;
}

export interface RouterState {
  readonly [routerFeatureKey]: RouterReducerState<RouterStateUrl>;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;

    while (state.firstChild) {
      state = state.firstChild;
    }

    const { params } = state;

    return { url, queryParams, params };
  }
}

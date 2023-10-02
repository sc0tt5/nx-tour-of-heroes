import { NavigationExtras } from '@angular/router';

import { createAction, props } from '@ngrx/store';

// router actions
const ROUTER_GO = '[Router] Go';
const ROUTER_BACK = '[Router] Back';
const ROUTER_FORWARD = '[Router] Forward';

// navigate
const go = createAction(
  ROUTER_GO,
  props<{
    path: string[];
    extras?: NavigationExtras;
    query?: object;
  }>()
);
const back = createAction(ROUTER_BACK);
const forward = createAction(ROUTER_FORWARD);

export const routerActions = {
  go,
  back,
  forward
};

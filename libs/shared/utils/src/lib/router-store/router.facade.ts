import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Store } from '@ngrx/store';

import { routerActions } from './router.actions';
import { RouterState } from './router.reducer';
import { routerSelectors } from './router.selectors';

@Injectable({ providedIn: 'root' })
export class RouterFacade {
  params$ = this.store.select(routerSelectors.getParams);

  constructor(private store: Store<RouterState>) {}

  goBack(): void {
    this.store.dispatch(routerActions.back());
  }

  goForward(): void {
    this.store.dispatch(routerActions.forward());
  }

  goTo(path: any[], query?: object, extras?: NavigationExtras): void {
    this.store.dispatch(routerActions.go({ path, query, extras }));
  }
}

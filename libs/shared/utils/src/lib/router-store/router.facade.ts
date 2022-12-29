import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';

import { Store } from '@ngrx/store';

import { routerActions } from './router.actions';
import { routerSelectors } from './router.selectors';

@Injectable({ providedIn: 'root' })
export class RouterFacade {
  params$ = this.store.select(routerSelectors.selectParams);
  url$ = this.store.select(routerSelectors.selectUrl);

  constructor(private store: Store) {}

  goBack(): void {
    this.store.dispatch(routerActions.back());
  }

  goForward(): void {
    this.store.dispatch(routerActions.forward());
  }

  goTo(path: string[], query?: object, extras?: NavigationExtras): void {
    this.store.dispatch(routerActions.go({ path, query, extras }));
  }
}

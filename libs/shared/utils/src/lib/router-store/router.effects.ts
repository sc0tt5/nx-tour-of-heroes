import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { routerActions } from './router.actions';

@Injectable()
export class RouterEffects {
  constructor(private action$: Actions, private location: Location, private router: Router) {}

  navigate$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(routerActions.go),
        // map(action => action.to),
        tap(({ path, query: queryParams, extras }) =>
          this.router.navigate(path, { queryParams, ...extras })
        )
      ),
    { dispatch: false }
  );

  navigateBack$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(routerActions.back),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  navigateForward$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(routerActions.forward),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );
}

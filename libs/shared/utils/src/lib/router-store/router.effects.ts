import { Location } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { routerActions } from './router.actions';

@Injectable()
export class RouterEffects {
  private readonly actions$ = inject(Actions);
  private readonly location = inject(Location);
  private readonly router = inject(Router);

  private readonly navigate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.go),
        // map(action => action.to),
        tap(({ path, query: queryParams, extras }) => {
          this.router.navigate(path, { queryParams, ...extras });
        })
      ),
    { dispatch: false }
  );

  private readonly navigateBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.back),
        tap(() => this.location.back())
      ),
    { dispatch: false }
  );

  private readonly navigateForward$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(routerActions.forward),
        tap(() => this.location.forward())
      ),
    { dispatch: false }
  );
}

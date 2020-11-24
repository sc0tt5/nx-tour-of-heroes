import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NGXLogger } from 'ngx-logger';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { HeroesService } from '@nx-demo/tour-of-heroes/heroes/data-access';

import * as HeroListAction from './hero-list.actions';

@Injectable()
export class HeroListEffects {
  constructor(
    private actions$: Actions,
    private heroesService: HeroesService,
    private log: NGXLogger
  ) {}

  loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroListAction.loadHeroes),
      switchMap(() =>
        this.heroesService.list().pipe(
          map(heroes => HeroListAction.loadHeroesSuccess({ heroes })),
          catchError(error => {
            this.log.error(error);
            return of(HeroListAction.loadHeroesFail(error));
          })
        )
      )
    )
  );
}

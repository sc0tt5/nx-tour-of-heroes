import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NGXLogger } from 'ngx-logger';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { HeroesService } from '../services/heroes.service';
import * as HeroesAction from './heroes.actions';

@Injectable()
export class HeroesEffects {
  constructor(
    private actions$: Actions,
    private log: NGXLogger,
    private heroesService: HeroesService
  ) {}

  loadPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroesAction.loadHeroes),
      concatMap(() =>
        this.heroesService.read().pipe(
          map(heroes => HeroesAction.loadHeroesSuccess({ heroes })),
          catchError(error => {
            this.log.error(error);
            return of(HeroesAction.loadHeroesFail(error));
          })
        )
      )
    )
  );
}

// TODO: unit test

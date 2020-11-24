import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NGXLogger } from 'ngx-logger';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { HeroesService } from '@nx-demo/tour-of-heroes/heroes/data-access';

import { heroDetailActions } from './hero-detail.actions';

@Injectable()
export class HeroDetailEffects {
  constructor(
    private actions$: Actions,
    private heroesService: HeroesService,
    private log: NGXLogger
  ) {}

  loadHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroDetailActions.loadHero),
      switchMap(action => {
        return this.heroesService.read({}, action.id.toString()).pipe(
          map(hero => heroDetailActions.loadHeroSuccess({ hero })),
          catchError(error => {
            this.log.error(error);
            return of(heroDetailActions.loadHeroFail(error));
          })
        );
      })
    )
  );
}

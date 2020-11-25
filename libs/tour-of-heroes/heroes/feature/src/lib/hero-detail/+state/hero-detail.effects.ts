import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { NGXLogger } from 'ngx-logger';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Hero } from '@nx-demo/shared/models';
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
      switchMap(action =>
        this.heroesService.read({}, action.id.toString()).pipe(
          map(hero => heroDetailActions.loadHeroSuccess({ hero })),
          catchError(error => {
            this.log.error(error);
            return of(heroDetailActions.loadHeroFail(error));
          })
        )
      )
    )
  );

  removeHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroDetailActions.removeHero),
      switchMap(action =>
        this.heroesService.delete(action.id).pipe(
          map(id => heroDetailActions.removeHeroSuccess({ id })),
          catchError(error => {
            this.log.error(error);
            return of(heroDetailActions.removeHeroFail(error));
          })
        )
      )
    )
  );

  updateHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroDetailActions.updateHero),
      switchMap(action =>
        this.heroesService.update(action.hero).pipe(
          map(hero => ({ id: hero.id, changes: hero })), // todo: two maps?
          map((hero: Update<Hero>) => heroDetailActions.updateHeroSuccess({ hero })),
          catchError(error => {
            this.log.error(error);
            return of(heroDetailActions.updateHeroFail(error));
          })
        )
      )
    )
  );
}

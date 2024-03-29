import { Injectable, inject } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { NGXLogger } from 'ngx-logger';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Hero } from '@nx-toh/shared/models';
import { routerActions } from '@nx-toh/shared/utils';

import { HeroesService } from '../../services/heroes.service';

import { heroDetailActions } from './detail.actions';

@Injectable()
export class HeroDetailEffects {
  private readonly actions$ = inject(Actions);
  private readonly heroesService = inject(HeroesService);
  private readonly log = inject(NGXLogger);

  private readonly createHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroDetailActions.createHero),
      switchMap(action =>
        this.heroesService.create(action.hero).pipe(
          map(hero => ({ id: hero.id, changes: hero })),
          map((hero: Update<Hero>) => heroDetailActions.createHeroSuccess({ hero })),
          catchError(error => {
            this.log.error(error);
            return of(heroDetailActions.createHeroFail({ error }));
          })
        )
      )
    )
  );

  private readonly goBack$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroDetailActions.createHeroSuccess, heroDetailActions.updateHeroSuccess),
      switchMap(() => [heroDetailActions.resetSelectedHeroId(), routerActions.back()])
    )
  );

  private readonly loadHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroDetailActions.loadHero),
      switchMap(action =>
        this.heroesService.read({}, action.id.toString()).pipe(
          map(hero => heroDetailActions.loadHeroSuccess({ hero })),
          catchError(error => {
            this.log.error(error);
            return of(heroDetailActions.loadHeroFail({ error }));
          })
        )
      )
    )
  );

  private readonly selectHeroId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroDetailActions.selectHeroId),
      map(action => heroDetailActions.loadHero({ id: action.id }))
    )
  );

  private readonly updateHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroDetailActions.updateHero),
      switchMap(action =>
        this.heroesService.update(action.hero).pipe(
          map(hero => ({ id: hero.id, changes: hero })),
          map((hero: Update<Hero>) => heroDetailActions.updateHeroSuccess({ hero })),
          catchError(error => {
            this.log.error(error);
            return of(heroDetailActions.updateHeroFail({ error }));
          })
        )
      )
    )
  );
}

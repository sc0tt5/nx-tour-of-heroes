import { Injectable, inject } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NGXLogger } from 'ngx-logger';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { routerActions } from '@nx-toh/shared/utils';

import { HeroesService } from '../../services/heroes.service';

import { heroListActions } from './list.actions';

@Injectable()
export class HeroListEffects {
  private readonly actions$ = inject(Actions);
  private readonly heroesService = inject(HeroesService);
  private readonly log = inject(NGXLogger);

  private readonly loadHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroListActions.loadHeroes),
      switchMap(() =>
        this.heroesService.list().pipe(
          map(heroes => heroListActions.loadHeroesSuccess({ heroes })),
          catchError(error => {
            this.log.error(error);
            return of(heroListActions.loadHeroesFail({ error }));
          })
        )
      )
    )
  );

  private readonly removeHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroListActions.removeHero),
      switchMap(action =>
        this.heroesService.delete<number>(action.id).pipe(
          map(id => heroListActions.removeHeroSuccess({ id })),
          catchError(error => {
            this.log.error(error);
            return of(heroListActions.removeHeroFail({ error }));
          })
        )
      )
    )
  );

  private readonly selectHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroListActions.selectHero),
      map(action => routerActions.go({ path: ['/hero', action.id.toString()] }))
    )
  );
}

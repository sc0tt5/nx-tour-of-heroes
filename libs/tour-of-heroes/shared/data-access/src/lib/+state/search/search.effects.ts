import { Injectable, inject } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NGXLogger } from 'ngx-logger';
import { of } from 'rxjs';
// prettier-ignore
import { catchError, debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

import { routerActions } from '@nx-toh/shared/utils';

import { HeroesService } from '../../services/heroes.service';

import { heroSearchActions } from './search.actions';

@Injectable()
export class HeroSearchEffects {
  private readonly actions$ = inject(Actions);
  private readonly heroesService = inject(HeroesService);
  private readonly log = inject(NGXLogger);

  private readonly searchHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroSearchActions.searchHeroes),
      debounceTime(300), // wait 300ms after each keystroke
      distinctUntilChanged(), // ignore if same
      filter(action => !!action.name), // only call api if not empty
      map(({ name }) => name),
      switchMap(name =>
        this.heroesService.list({ name }).pipe(
          map(heroes => heroSearchActions.searchHeroesSuccess({ heroes })),
          catchError((error: unknown) => {
            this.log.error(error);
            return of(heroSearchActions.searchHeroesFail({ error }));
          })
        )
      )
    )
  );

  private readonly selectHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroSearchActions.selectHero),
      switchMap(action => [
        heroSearchActions.resetSearchTerm(),
        routerActions.go({ path: ['/hero', action.id.toString()] })
      ])
    )
  );
}

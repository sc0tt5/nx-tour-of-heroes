import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NGXLogger } from 'ngx-logger';
import { of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
  tap
} from 'rxjs/operators';

import { routerActions } from '@nx-toh/shared/utils';
import { HeroesService } from '@nx-toh/tour-of-heroes/heroes/data-access';

import { heroSearchActions } from './hero-search.actions';

@Injectable()
export class HeroSearchEffects {
  constructor(
    private actions$: Actions,
    private heroesService: HeroesService,
    private log: NGXLogger
  ) {}

  searchHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroSearchActions.searchHeroes),
      // debounceTime(300), // wait 300ms after each keystroke
      // distinctUntilChanged(), // ignore if same
      map(({ name }) => name),
      switchMap(name =>
        this.heroesService.list({ name }).pipe(
          map(heroes => heroSearchActions.searchHeroesSuccess({ heroes })),
          catchError(error => {
            this.log.error(error);
            return of(heroSearchActions.searchHeroesFail(error));
          })
        )
      )
    )
  );

  selectHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(heroSearchActions.selectHero),
      map(action => routerActions.go({ path: ['/heroes', action.id] }))
    )
  );
}

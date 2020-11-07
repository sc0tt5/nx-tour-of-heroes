import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NGXLogger } from 'ngx-logger';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import { PageOneService } from '../page-one.service';
import * as PageOneAction from './page-one.actions';

@Injectable()
export class PageOneEffects {
  constructor(
    private actions$: Actions,
    private log: NGXLogger,
    private pageService: PageOneService
  ) {}

  loadPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PageOneAction.loadPageOne),
      concatMap(payload =>
        this.pageService.read({ page: payload.param }).pipe(
          map(page => PageOneAction.loadPageOneSuccess({ page })),
          catchError(error => {
            this.log.error(error);
            return of(PageOneAction.loadPageOneFail(error));
          })
        )
      )
    )
  );
}

// TODO: unit test

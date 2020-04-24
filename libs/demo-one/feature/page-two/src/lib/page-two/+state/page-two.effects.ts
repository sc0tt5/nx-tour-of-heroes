import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { PageTwoService } from '../page-two.service';
import * as PageTwoAction from './page-two.actions';

@Injectable()
export class PageTwoEffects {
  constructor(private actions$: Actions, private pageService: PageTwoService) {}

  loadPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PageTwoAction.loadPageTwo),
      concatMap(payload =>
        this.pageService.read({ page: payload.param }).pipe(
          map(page => PageTwoAction.loadPageTwoSuccess({ page })),
          catchError(error => of(PageTwoAction.loadPageTwoFail(error)))
        )
      )
    )
  );
}

// TODO: unit test

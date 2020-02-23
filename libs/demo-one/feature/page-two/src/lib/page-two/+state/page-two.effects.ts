import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PageService } from '@nx-demo/demo-one/data-access';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import * as PageTwoAction from './page-two.actions';

@Injectable()
export class PageTwoEffects {
  constructor(private actions$: Actions, private pageService: PageService) {}

  loadPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PageTwoAction.loadPageTwo),
      concatMap(payload =>
        this.pageService.getPage(payload.param).pipe(
          map(page => PageTwoAction.loadPageTwoSuccess({ page })),
          catchError(error => of(PageTwoAction.loadPageTwoFail(error)))
        )
      )
    )
  );
}

// TODO: unit test

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PageService } from '@nx-demo/demo-one/data-access';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as PageOneAction from './page-one.actions';

@Injectable()
export class PageOneEffects {
  constructor(
    private actions$: Actions,
    private pageService: PageService,
    private route: ActivatedRouteSnapshot
  ) {}

  loadPage$ = createEffect(() => {
    const param = this.route.data.state;

    return this.actions$.pipe(
      ofType(PageOneAction.loadPageOne),
      switchMap(() =>
        this.pageService.getPage(param).pipe(
          map(page => PageOneAction.loadPageOneSuccess({ page })),
          catchError(error => of(PageOneAction.loadPageOneFail(error)))
        )
      )
    );
  });
}

// TODO: unit test

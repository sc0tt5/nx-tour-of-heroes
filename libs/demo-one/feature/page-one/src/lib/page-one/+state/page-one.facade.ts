import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Page } from '@nx-demo/shared/models';
import * as PageOneActions from './page-one.actions';
import { PageOneState } from './page-one.reducer';
import { getPageOne } from './page-one.selectors';

@Injectable()
export class PageFacade {
  page$ = this.store.select(getPageOne);

  constructor(private store: Store<PageOneState>) {}

  loadPage() {
    this.store.dispatch(PageOneActions.loadPageOne());
  }
}

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as PageOneActions from './page-one.actions';
import { PageOneState } from './page-one.reducer';
import { pageOneSelectors } from './page-one.selectors';

@Injectable()
export class PageOneFacade {
  page$ = this.store.select(pageOneSelectors.getPageOne);
  pageLoaded$ = this.store.select(pageOneSelectors.getPageOneLoaded);

  constructor(private store: Store<PageOneState>) {}

  loadPage(param: string) {
    this.store.dispatch(PageOneActions.loadPageOne({ param }));
  }

  initializePageOne() {
    this.store.dispatch(PageOneActions.initializePageOne());
  }
}

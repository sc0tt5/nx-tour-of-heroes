import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PageTwoActions from './page-two.actions';
import { PageTwoState } from './page-two.reducer';
import { pageTwoSelectors } from './page-two.selectors';

@Injectable()
export class PageTwoFacade {
  page$ = this.store.select(pageTwoSelectors.getPageTwo);
  pageLoaded$ = this.store.select(pageTwoSelectors.getPageTwoLoaded);

  constructor(private store: Store<PageTwoState>) {}

  loadPage(param: string) {
    this.store.dispatch(PageTwoActions.loadPageTwo({ param }));
  }

  initializePageTwo() {
    this.store.dispatch(PageTwoActions.initializePageTwo());
  }
}

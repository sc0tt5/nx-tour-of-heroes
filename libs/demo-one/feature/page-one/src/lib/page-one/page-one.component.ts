import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PageOne } from '@nx-demo/shared/models';

import { PageOneFacade } from './+state/page-one.facade';

@Component({
  templateUrl: './page-one.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageOneComponent implements OnInit, OnDestroy {
  page$: Observable<PageOne>;
  pageLoaded$: Observable<boolean>;

  constructor(private facade: PageOneFacade) {}

  ngOnInit() {
    this.page$ = this.facade.page$;
    this.pageLoaded$ = this.facade.pageLoaded$;
  }

  ngOnDestroy() {
    this.facade.initializePageOne();
  }
}

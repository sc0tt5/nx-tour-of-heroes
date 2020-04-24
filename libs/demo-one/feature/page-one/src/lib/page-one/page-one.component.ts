import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { PageOne } from '@nx-demo/shared/models';
import { Observable, Subject } from 'rxjs';
import { PageOneFacade } from './+state/page-one.facade';

@Component({
  templateUrl: './page-one.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageOneComponent implements OnInit, OnDestroy {
  page$: Observable<PageOne>;

  constructor(private facade: PageOneFacade) {}

  ngOnInit() {
    this.page$ = this.facade.page$;
  }

  ngOnDestroy() {
    this.facade.initializePageOne();
  }
}

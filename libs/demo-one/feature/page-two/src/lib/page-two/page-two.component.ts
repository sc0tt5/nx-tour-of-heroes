import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { PageTwo } from '@nx-demo/shared/models';
import { Observable, Subject } from 'rxjs';
import { PageTwoFacade } from './+state/page-two.facade';

@Component({
  templateUrl: './page-two.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTwoComponent implements OnInit, OnDestroy {
  page$: Observable<PageTwo>;

  constructor(private facade: PageTwoFacade) {}

  ngOnInit() {
    this.page$ = this.facade.page$;
  }

  ngOnDestroy() {
    this.facade.initializePageTwo();
  }
}

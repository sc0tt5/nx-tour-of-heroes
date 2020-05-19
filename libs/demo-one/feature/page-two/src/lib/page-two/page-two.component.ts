import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { PageTwo } from '@nx-demo/shared/models';
import { Observable } from 'rxjs';
import { PageTwoFacade } from './+state/page-two.facade';

@Component({
  templateUrl: './page-two.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTwoComponent implements OnInit, OnDestroy {
  page$: Observable<PageTwo>;
  pageLoaded$: Observable<boolean>;

  constructor(private facade: PageTwoFacade) {}

  ngOnInit() {
    this.page$ = this.facade.page$;
    this.pageLoaded$ = this.facade.pageLoaded$;
  }

  ngOnDestroy() {
    this.facade.initializePageTwo();
  }
}

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Page } from '@nx-demo/shared/models';
import { Observable, Subject } from 'rxjs';
import { PageTwoFacade } from './+state/page-two.facade';
import { PageTwoState } from './+state/page-two.reducer';

@Component({
  selector: 'nx-demo-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTwoComponent implements OnInit, OnDestroy {
  page$: Observable<Page>;
  private unsubscribe$ = new Subject<void>();

  constructor(private facade: PageTwoFacade, private store: Store<PageTwoState>) {}

  ngOnInit() {
    this.page$ = this.facade.page$;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.facade.initializePageTwo();
  }
}

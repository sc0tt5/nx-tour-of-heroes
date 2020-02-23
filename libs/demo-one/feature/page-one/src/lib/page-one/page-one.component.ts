import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Page } from '@nx-demo/shared/models';
import { Observable, Subject } from 'rxjs';
import { PageFacade } from './+state/page-one.facade';
import { PageOneState } from './+state/page-one.reducer';

@Component({
  selector: 'nx-demo-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageOneComponent implements OnInit, OnDestroy {
  page$: Observable<Page>;
  unsubscribe$ = new Subject<void>();

  constructor(private facade: PageFacade, private store: Store<PageOneState>) {}

  ngOnInit() {
    this.page$ = this.facade.page$;
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.facade.initializePageOne();
  }
}

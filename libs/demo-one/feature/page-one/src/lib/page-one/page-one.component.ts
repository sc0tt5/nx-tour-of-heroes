import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Page } from '@nx-demo/shared/models';
import { Observable, Subject } from 'rxjs';
import { PageFacade } from './+state/page-one.facade';

@Component({
  selector: 'nx-demo-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageOneComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();
  page$: Observable<Page>;

  constructor(private facade: PageFacade) {}

  ngOnInit() {
    this.page$ = this.facade.page$;
  }
}

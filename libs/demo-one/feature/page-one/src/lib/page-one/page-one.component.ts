import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Page } from '@nx-demo/shared/models';
import { Subject } from 'rxjs';

@Component({
  selector: 'nx-demo-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageOneComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  page: Page;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // from page resolver
    this.route.data.subscribe((data: Data) => {
      this.page = data.page;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

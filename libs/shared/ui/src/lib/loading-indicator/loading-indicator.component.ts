import { transition, trigger, useAnimation } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import {
  routerTransitionLoadingEnd,
  routerTransitionLoadingStart
} from '@nx-demo/shared/animations';
import { Subject } from 'rxjs';
import { LoaderService } from './loader.service';

@Component({
  selector: 'nx-demo-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss'],
  encapsulation: ViewEncapsulation.None, // required to update accordion shared styles
  animations: [
    trigger('loadingIndicator', [
      transition(':enter', [useAnimation(routerTransitionLoadingStart)]),
      transition(':leave', [useAnimation(routerTransitionLoadingEnd)])
    ])
  ]
})
export class LoadingIndicatorComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  loading: boolean;

  constructor(private loaderService: LoaderService, private router: Router) {}

  ngOnInit() {
    // subscribe to loader/interceptor
    this.loaderService.isLoading.subscribe(loading => {
      if (loading) {
        this.loading = loading;
      } else {
        setTimeout(() => {
          this.loading = loading;
        }, 500); // dealy to kind of simulate api call (just for demo)
      }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { ShellService } from './shell.service';

@Component({
  selector: 'nx-demo-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private router: Router, private shellService: ShellService) {}

  ngOnInit(): void {
    this.subscribeToRouterEvents();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private subscribeToRouterEvents(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof ActivationEnd || event instanceof NavigationEnd),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(event => {
        if (event instanceof ActivationEnd && event.snapshot.routeConfig.data) {
          if (event.snapshot.routeConfig.data.title) {
            this.shellService.setPageTitle(event);
            this.shellService.setCanonicalURL();
          }
        }
      });
  }
}

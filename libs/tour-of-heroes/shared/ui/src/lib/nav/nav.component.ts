import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RouterFacade, RouterStoreModule } from '@nx-toh/shared/utils';

import { NAV } from './nav.constants';
import { NavigationItem } from './nav.interface';

@Component({
  standalone: true,
  imports: [AsyncPipe, NgClass, NgFor, RouterStoreModule],
  selector: 'shrd-ui-toh-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent {
  navigationItems: NavigationItem[] = [NAV.HERO_SEARCH, NAV.HERO_LIST, NAV.HERO_NEW];
  url$ = this.facade.url$;

  constructor(private readonly facade: RouterFacade) {}

  navigate(event: Event, navigationItem: NavigationItem) {
    event.preventDefault();
    this.facade.goTo(navigationItem.path);
  }

  // todo: issue-44 -- show current for hero/*
}

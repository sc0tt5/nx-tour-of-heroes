import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RouterFacade } from '@nx-toh/shared/utils';

import { NAV } from './heroes-nav.constants';
import { NavigationItem } from './heroes-nav.interface';

@Component({
  selector: 'shrd-ui-toh-nav',
  templateUrl: './heroes-nav.component.html',
  styleUrls: ['./heroes-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesNavComponent {
  navigationItems: NavigationItem[] = [NAV.HERO_SEARCH, NAV.HERO_LIST, NAV.HERO_NEW];
  url$ = this.facade.url$;

  constructor(private facade: RouterFacade) {}

  navigate(event: Event, navigationItem: NavigationItem) {
    event.preventDefault();
    this.facade.goTo(navigationItem.path);
  }

  // todo: issue-44 -- show current for hero/*
}

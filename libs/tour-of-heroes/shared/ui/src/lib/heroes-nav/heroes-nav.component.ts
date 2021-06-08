import { Component } from '@angular/core';

import { RouterFacade } from '@nx-toh/shared/utils';

@Component({
  selector: 'shrd-ui-toh-nav',
  templateUrl: './heroes-nav.component.html',
  styleUrls: ['./heroes-nav.component.scss']
})
export class HeroesNavComponent {
  HERO_LIST = '/heroes';
  HERO_NEW = '/hero/new';
  HERO_SEARCH = '/heroes/search';

  currentRoute: string;
  url$ = this.facade.url$;

  constructor(private facade: RouterFacade) {}

  goToHeroSearch(): void {
    this.currentRoute = this.HERO_SEARCH;
    this.goTo();
  }

  goToHeroList(): void {
    this.currentRoute = this.HERO_LIST;
    this.goTo();
  }

  goToHeroNew(): void {
    this.currentRoute = this.HERO_NEW;
    this.goTo();
  }

  // todo: scenario for hero detail

  private goTo(): void {
    this.facade.goTo([this.currentRoute]);
  }
}

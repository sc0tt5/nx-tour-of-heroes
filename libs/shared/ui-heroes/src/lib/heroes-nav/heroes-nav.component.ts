import { Component } from '@angular/core';

import { RouterFacade } from '@nx-toh/shared/utils';

@Component({
  selector: 'shrd-ui-toh-nav',
  templateUrl: './heroes-nav.component.html',
  styleUrls: ['./heroes-nav.component.scss']
})
export class HeroesNavComponent {
  HERO_LIST = ['heroes'];
  HERO_NEW = ['heroes', 'new'];
  HERO_SEARCH = ['heroes', 'search'];

  currentRoute: string[] = [];

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

  private goTo(): void {
    this.facade.goTo(this.currentRoute);
  }
}

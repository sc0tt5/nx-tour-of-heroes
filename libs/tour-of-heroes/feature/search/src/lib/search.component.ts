import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '@nx-toh/shared/models';
import { HeroSearchFacade } from '@nx-toh/tour-of-heroes/shared/data-access';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSearchComponent implements OnInit, OnDestroy {
  heroes$: Observable<Hero[]>;
  heroesLoaded$: Observable<boolean>;
  searchBoxValue = '';

  constructor(private facade: HeroSearchFacade) {}

  ngOnInit() {
    this.heroes$ = this.facade.heroes$;
    this.heroesLoaded$ = this.facade.heroesLoaded$;
  }

  ngOnDestroy(): void {
    this.facade.resetSearchTerm();
  }

  clearSearch(): void {
    this.searchBoxValue = '';
    this.facade.resetSearchTerm();
  }

  search(): void {
    this.facade.searchHeroes(this.searchBoxValue);
  }

  select(hero: Hero): void {
    this.facade.selectHero(hero.id);
  }

  trackByHero(index: number, hero: Hero): number {
    return hero.id;
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '@nx-toh/shared/models';

import { HeroSearchFacade } from '../hero-search/+state/hero-search.facade';

@Component({
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  heroesLoaded$: Observable<boolean>;

  constructor(private facade: HeroSearchFacade) {}

  ngOnInit() {
    // todo: add filtered property to each hero in store and new selector for filtered results
    this.heroes$ = this.facade.heroes$;
    this.heroesLoaded$ = this.facade.heroesLoaded$;
  }

  search(name: string): void {
    this.facade.searchHeroes(name);
  }

  select(hero: Hero): void {
    this.facade.selectHero(hero.id);
  }

  trackByHero(index: number, hero: Hero): number {
    return hero.id;
  }
}

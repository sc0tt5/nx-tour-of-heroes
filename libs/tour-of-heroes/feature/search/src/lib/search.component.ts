import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '@nx-toh/shared/models';

import { HeroSearchFacade } from './+state/search.facade';

@Component({
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroSearchComponent implements OnInit, OnDestroy {
  heroes$: Observable<Hero[]>;
  heroesLoaded$: Observable<boolean>;

  constructor(private facade: HeroSearchFacade) {}

  ngOnInit() {
    console.log('HeroSearchComponent > ngOnInit');
    this.heroes$ = this.facade.heroes$;
    this.heroesLoaded$ = this.facade.heroesLoaded$;
  }

  ngOnDestroy(): void {
    this.facade.resetSearchTerm();
  }

  search(name: string): void {
    // todo: problem here is search term not updating...
    console.log('[A] search term:::', name);
    this.facade.searchHeroes(name);
  }

  select(hero: Hero): void {
    this.facade.selectHero(hero.id);
  }

  trackByHero(index: number, hero: Hero): number {
    return hero.id;
  }
}

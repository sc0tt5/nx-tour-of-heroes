import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { heroesSelectors, HeroesState } from '@nx-toh/tour-of-heroes/shared/data-access';

import { heroSearchActions } from './search.actions';
import { heroSearchSelectors } from './search.selectors';

@Injectable({ providedIn: 'root' })
export class HeroSearchFacade {
  heroes$ = this.store.select(heroSearchSelectors.getFilteredHeroes);
  heroesLoaded$ = this.store.select(heroesSelectors.getHeroesLoaded);

  constructor(private store: Store<HeroesState>) {}

  resetSearchTerm(): void {
    this.store.dispatch(heroSearchActions.resetSearchTerm());
  }

  searchHeroes(name: string): void {
    console.log('[B] search term:::', name); // todo: never leaves B ...
    this.store.dispatch(heroSearchActions.searchHeroes({ name }));
  }

  selectHero(id: number): void {
    this.store.dispatch(heroSearchActions.selectHero({ id }));
  }
}

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { heroesSelectors } from '../heroes.selectors';
import { HeroesState } from '../heroes.state';
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
    this.store.dispatch(heroSearchActions.searchHeroes({ name }));
  }

  selectHero(id: number): void {
    this.store.dispatch(heroSearchActions.selectHero({ id }));
  }
}

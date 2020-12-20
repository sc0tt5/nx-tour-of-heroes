import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { HeroesState } from '../../+state/heroes.state';
import { heroListSelectors } from '../../hero-list/+state/hero-list.selectors';
import { heroSearchActions } from './hero-search.actions';

@Injectable({ providedIn: 'root' })
export class HeroSearchFacade {
  heroes$ = this.store.select(heroListSelectors.getHeroes);
  heroesLoaded$ = this.store.select(heroListSelectors.getHeroesLoaded);

  constructor(private store: Store<HeroesState>) {}

  searchHeroes(name: string): void {
    this.store.dispatch(heroSearchActions.searchHeroes({ name }));
  }

  selectHero(id: number): void {
    this.store.dispatch(heroSearchActions.selectHero({ id }));
  }
}

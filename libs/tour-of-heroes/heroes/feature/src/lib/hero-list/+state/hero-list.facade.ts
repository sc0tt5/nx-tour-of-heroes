import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { heroListActions } from './hero-list.actions';
import { HeroListState } from './hero-list.reducer';
import { heroListSelectors } from './hero-list.selectors';

@Injectable({ providedIn: 'root' })
export class HeroListFacade {
  heroes$ = this.store.select(heroListSelectors.getHeroes);
  heroesLoaded$ = this.store.select(heroListSelectors.getHeroesLoaded);

  constructor(private store: Store<HeroListState>) {}

  loadHeroes(): void {
    this.store.dispatch(heroListActions.loadHeroes());
  }

  removeHero(id: number): void {
    this.store.dispatch(heroListActions.removeHero({ id }));
  }

  selectHero(id: number): void {
    this.store.dispatch(heroListActions.selectHero({ id }));
  }
}

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { heroesSelectors, HeroesState } from '@nx-toh/tour-of-heroes/shared/data-access';

import { heroListActions } from './list.actions';

@Injectable({ providedIn: 'root' })
export class HeroListFacade {
  heroes$ = this.store.select(heroesSelectors.getHeroes);
  heroesLoaded$ = this.store.select(heroesSelectors.getHeroesLoaded);

  constructor(private store: Store<HeroesState>) {}

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

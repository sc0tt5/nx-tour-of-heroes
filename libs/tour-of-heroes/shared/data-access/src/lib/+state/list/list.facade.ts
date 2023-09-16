import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { heroesSelectors } from '../heroes.selectors';

import { heroListActions } from './list.actions';

@Injectable({ providedIn: 'root' })
export class HeroListFacade {
  heroes$ = this.store.select(heroesSelectors.selectHeroes);
  heroesLoaded$ = this.store.select(heroesSelectors.selectHeroesLoaded);

  constructor(private readonly store: Store) {}

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

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as HeroesActions from './hero-list.actions';
import { HeroesState } from './hero-list.reducer';
import { heroListSelectors } from './hero-list.selectors';

@Injectable({ providedIn: 'root' })
export class HeroListFacade {
  heroes$ = this.store.select(heroListSelectors.getHeroes);
  heroesLoaded$ = this.store.select(heroListSelectors.getHeroesLoaded);

  constructor(private store: Store<HeroesState>) {}

  loadHeroes(): void {
    this.store.dispatch(HeroesActions.loadHeroes());
  }
}

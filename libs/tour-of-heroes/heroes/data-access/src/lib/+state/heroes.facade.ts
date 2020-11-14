import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as HeroesActions from './heroes.actions';
import { HeroesState } from './heroes.reducer';
import { heroesSelectors } from './heroes.selectors';

@Injectable()
export class HeroesFacade {
  heroes$ = this.store.select(heroesSelectors.getHeroes);
  heroesLoaded$ = this.store.select(heroesSelectors.getHeroesLoaded);

  constructor(private store: Store<HeroesState>) {}

  loadHeroes(param: string) {
    this.store.dispatch(HeroesActions.loadHeroes({ param }));
  }

  initializeHeroes() {
    this.store.dispatch(HeroesActions.initializeHeroes());
  }
}

import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Hero } from '@nx-toh/shared/models';
import { routerActions } from '@nx-toh/shared/utils';

import { heroesSelectors } from '../../+state/heroes.selectors';
import { HeroesState } from '../../+state/heroes.state';
import { heroDetailActions } from './hero-detail.actions';
import { heroDetailSelectors } from './hero-detail.selectors';

@Injectable({ providedIn: 'root' })
export class HeroDetailFacade {
  hero$ = this.store.select(heroDetailSelectors.getSelectedHero);
  heroLoaded$ = this.store.select(heroesSelectors.getHeroesLoaded);

  constructor(private store: Store<HeroesState>) {}

  goBack(): void {
    this.store.dispatch(routerActions.back());
  }

  loadHero(id: number): void {
    this.store.dispatch(heroDetailActions.loadHero({ id }));
  }

  resetHeroState(): void {
    this.store.dispatch(heroDetailActions.resetSelectedHeroId());
  }

  saveHero(hero: Hero): void {
    this.store.dispatch(heroDetailActions.createHero({ hero }));
  }

  updateHero(hero: Hero): void {
    this.store.dispatch(heroDetailActions.updateHero({ hero }));
  }
}

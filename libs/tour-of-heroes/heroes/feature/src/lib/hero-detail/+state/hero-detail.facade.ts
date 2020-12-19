import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Hero } from '@nx-toh/shared/models';
import { routerActions } from '@nx-toh/shared/utils';

import { heroDetailActions } from './hero-detail.actions';
import { HeroDetailState } from './hero-detail.reducer';
import { heroDetailSelectors } from './hero-detail.selectors';

@Injectable({ providedIn: 'root' })
export class HeroDetailFacade {
  hero$ = this.store.select(heroDetailSelectors.getSelectedHero);
  heroLoaded$ = this.store.select(heroDetailSelectors.getHeroLoaded);

  constructor(private store: Store<HeroDetailState>) {}

  goBack(): void {
    this.store.dispatch(routerActions.back());
  }

  loadHero(id: number): void {
    this.store.dispatch(heroDetailActions.loadHero({ id }));
  }

  resetHeroState(): void {
    this.store.dispatch(heroDetailActions.resetHeroState());
  }

  saveHero(hero: Hero): void {
    this.store.dispatch(heroDetailActions.createHero({ hero }));
  }

  updateHero(hero: Hero): void {
    this.store.dispatch(heroDetailActions.updateHero({ hero }));
  }
}

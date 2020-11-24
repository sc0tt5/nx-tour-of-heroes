import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { heroDetailActions } from './hero-detail.actions';
import { HeroDetailState } from './hero-detail.reducer';
import { heroDetailSelectors } from './hero-detail.selectors';

@Injectable({ providedIn: 'root' })
export class HeroDetailFacade {
  hero$ = this.store.select(heroDetailSelectors.getSelectedHero);
  heroLoaded$ = this.store.select(heroDetailSelectors.getHeroLoaded);

  constructor(private store: Store<HeroDetailState>) {}

  loadHero(id: number): void {
    this.store.dispatch(heroDetailActions.loadHero({ id }));
  }

  resetHeroState(): void {
    this.store.dispatch(heroDetailActions.resetHeroState());
  }

  selectHeroId(id: number): void {
    this.store.dispatch(heroDetailActions.selectHeroId({ id }));
  }
}

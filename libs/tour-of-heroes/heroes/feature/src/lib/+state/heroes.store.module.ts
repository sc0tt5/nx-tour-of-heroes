import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HeroDetailEffects } from '../hero-detail/+state/hero-detail.effects';
import { HeroDetailFacade } from '../hero-detail/+state/hero-detail.facade';
import { HeroListEffects } from '../hero-list/+state/hero-list.effects';
import { HeroListFacade } from '../hero-list/+state/hero-list.facade';
import { HeroSearchEffects } from '../hero-search/+state/hero-search.effects';
import { HeroSearchFacade } from './../hero-search/+state/hero-search.facade';
import { heroesReducer } from './heroes.reducer';
import { heroesFeatureKey, heroesInitialState } from './heroes.state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(heroesFeatureKey, heroesReducer, {
      initialState: heroesInitialState
    }),
    EffectsModule.forFeature([HeroDetailEffects, HeroListEffects, HeroSearchEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [HeroDetailFacade, HeroListFacade, HeroSearchFacade]
})
export class HeroesStoreModule {}

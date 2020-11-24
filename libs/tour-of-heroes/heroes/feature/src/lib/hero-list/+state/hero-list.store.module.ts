import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HeroListEffects } from './hero-list.effects';
import { HeroListFacade } from './hero-list.facade';
import { heroListFeatureKey, heroListInitialState, heroListReducer } from './hero-list.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(heroListFeatureKey, heroListReducer, {
      initialState: heroListInitialState
    }),
    EffectsModule.forFeature([HeroListEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [HeroListFacade]
})
export class HeroListStoreModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { heroesFeatureKey, heroesInitialState } from '@nx-toh/tour-of-heroes/shared/data-access';

import { HeroListEffects } from './list.effects';
import { HeroListFacade } from './list.facade';
import { heroListReducer } from './list.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(heroesFeatureKey, heroListReducer),
    EffectsModule.forFeature([HeroListEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [HeroListFacade]
})
export class HeroListStoreModule {}

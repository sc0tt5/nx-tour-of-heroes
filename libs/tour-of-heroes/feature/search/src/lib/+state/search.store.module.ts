import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { heroesFeatureKey, heroesInitialState } from '@nx-toh/tour-of-heroes/shared/data-access';

import { HeroSearchEffects } from './search.effects';
import { HeroSearchFacade } from './search.facade';
import { heroSearchReducer } from './search.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(heroesFeatureKey, heroSearchReducer),
    EffectsModule.forFeature([HeroSearchEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [HeroSearchFacade]
})
export class HeroSearchStoreModule {}

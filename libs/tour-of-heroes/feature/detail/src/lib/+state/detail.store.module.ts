import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { heroesFeatureKey, heroesInitialState } from '@nx-toh/tour-of-heroes/shared/data-access';

import { HeroDetailEffects } from './detail.effects';
import { HeroDetailFacade } from './detail.facade';
import { heroDetailReducer } from './detail.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(heroesFeatureKey, heroDetailReducer),
    EffectsModule.forFeature([HeroDetailEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [HeroDetailFacade]
})
export class HeroDetailStoreModule {}

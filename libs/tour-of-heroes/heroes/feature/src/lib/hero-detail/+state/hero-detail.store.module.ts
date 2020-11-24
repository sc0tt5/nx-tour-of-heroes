import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HeroDetailEffects } from './hero-detail.effects';
import { HeroDetailFacade } from './hero-detail.facade';
import { heroDetailFeatureKey, initialState, reducer } from './hero-detail.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(heroDetailFeatureKey, reducer, { initialState }),
    EffectsModule.forFeature([HeroDetailEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [HeroDetailFacade]
})
export class HeroDetailStoreModule {}

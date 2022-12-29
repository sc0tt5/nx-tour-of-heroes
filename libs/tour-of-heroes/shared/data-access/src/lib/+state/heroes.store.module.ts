import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HeroDetailEffects } from './detail/detail.effects';
import { heroesReducer } from './heroes.reducer';
import { heroesFeatureKey, heroesInitialState } from './heroes.state';
import { HeroListEffects } from './list/list.effects';
import { HeroSearchEffects } from './search/search.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(heroesFeatureKey, heroesReducer, { initialState: heroesInitialState }),
    EffectsModule.forFeature([HeroDetailEffects, HeroListEffects, HeroSearchEffects])
  ],
  exports: [StoreModule, EffectsModule]
})
export class HeroesStoreModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HeroDetailEffects } from './detail/detail.effects';
import { HeroDetailFacade } from './detail/detail.facade';
import { heroesReducer } from './heroes.reducer';
import { heroesFeatureKey } from './heroes.state';
import { HeroListEffects } from './list/list.effects';
import { HeroListFacade } from './list/list.facade';
import { HeroSearchEffects } from './search/search.effects';
import { HeroSearchFacade } from './search/search.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(heroesFeatureKey, heroesReducer),
    EffectsModule.forFeature([HeroDetailEffects, HeroListEffects, HeroSearchEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [HeroDetailFacade, HeroListFacade, HeroSearchFacade]
})
export class HeroesStoreModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { HeroesEffects } from './heroes.effects';
import { HeroesFacade } from './heroes.facade';
import { heroesReducer, initialState } from './heroes.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('heroes', heroesReducer, { initialState }),
    EffectsModule.forFeature([HeroesEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [HeroesFacade]
})
export class HeroesStoreModule {}

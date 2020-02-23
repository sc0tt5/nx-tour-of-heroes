import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PageOneEffects } from './page-one.effects';
import { PageOneFacade } from './page-one.facade';
import { initialState, pageOneReducer } from './page-one.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('page-one', pageOneReducer, { initialState }),
    EffectsModule.forFeature([PageOneEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [PageOneFacade]
})
export class PageOneStoreModule {}

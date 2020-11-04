import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PageTwoEffects } from './page-two.effects';
import { PageTwoFacade } from './page-two.facade';
import { initialState, pageTwoReducer } from './page-two.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('page-two', pageTwoReducer, { initialState }),
    EffectsModule.forFeature([PageTwoEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [PageTwoFacade]
})
export class PageTwoStoreModule {}

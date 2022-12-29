import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
// prettier-ignore
import { routerReducer, RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { RouterEffects } from './router.effects';
import { CustomSerializer, routerFeatureKey } from './router.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(routerFeatureKey, routerReducer),
    EffectsModule.forFeature([RouterEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  exports: [StoreModule, EffectsModule],
  providers: [EffectsModule, [{ provide: RouterStateSerializer, useClass: CustomSerializer }]]
})
export class RouterStoreModule {}

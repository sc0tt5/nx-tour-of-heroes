import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { ContentLoaderModule } from '@nx-toh/shared/ui';
import { HeroesService } from '@nx-toh/tour-of-heroes/shared/data-access';
import { HeroesCardModule } from '@nx-toh/tour-of-heroes/shared/ui';

import { HeroListEffects } from './+state/list.effects';
import { HeroListStoreModule } from './+state/list.store.module';
import { HeroListComponent } from './list.component';
import { HeroListResolver } from './list.resolver';

const ROUTES: Routes = [
  {
    path: '',
    component: HeroListComponent,
    resolve: { HeroListResolver }
  }
];

@NgModule({
  imports: [
    CommonModule,
    ContentLoaderModule,
    HeroesCardModule,
    EffectsModule.forFeature([HeroListEffects]),
    RouterModule.forChild(ROUTES),
    HeroListStoreModule
  ],
  declarations: [HeroListComponent],
  providers: [HeroListResolver, HeroesService]
})
export class HeroListModule {}

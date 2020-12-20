import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ContentLoaderModule, LoadingIndicatorModule } from '@nx-toh/shared/ui-core';
import { HeroesCardModule, HeroesEditorModule } from '@nx-toh/shared/ui-heroes';
import { RouterStoreModule } from '@nx-toh/shared/utils';

// import { HeroDetailStoreModule } from './hero-detail/+state/hero-detail.store.module';
import { HeroesStoreModule } from './+state/heroes.store.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetailResolver } from './hero-detail/hero-detail.resolver';
// import { HeroListStoreModule } from './hero-list/+state/hero-list.store.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroListResolver } from './hero-list/hero-list.resolver';

const ROUTES: Routes = [
  {
    path: '',
    component: HeroListComponent,
    resolve: { HeroListResolver }
  },
  {
    path: 'new',
    component: HeroDetailComponent
  },
  {
    path: ':id',
    component: HeroDetailComponent,
    resolve: { HeroDetailResolver }
  }
];

@NgModule({
  imports: [
    CommonModule,
    ContentLoaderModule,
    FormsModule,
    HeroesStoreModule,
    // HeroListStoreModule,
    RouterStoreModule,
    HeroesCardModule,
    HeroesEditorModule,
    LoadingIndicatorModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [HeroListComponent, HeroDetailComponent]
})
export class HeroesFeatureModule {}

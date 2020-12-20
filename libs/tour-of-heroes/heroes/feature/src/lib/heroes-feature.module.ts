import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ContentLoaderModule, LoadingIndicatorModule } from '@nx-toh/shared/ui-core';
import { HeroesCardModule, HeroesEditorModule } from '@nx-toh/shared/ui-heroes';
import { RouterStoreModule } from '@nx-toh/shared/utils';

import { HeroesStoreModule } from './+state/heroes.store.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetailResolver } from './hero-detail/hero-detail.resolver';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroListResolver } from './hero-list/hero-list.resolver';
import { HeroSearchComponent } from './hero-search/hero-search.component';

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
    path: 'search',
    component: HeroSearchComponent
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
    RouterStoreModule,
    HeroesCardModule,
    HeroesEditorModule,
    LoadingIndicatorModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [HeroDetailComponent, HeroListComponent, HeroSearchComponent]
})
export class HeroesFeatureModule {}

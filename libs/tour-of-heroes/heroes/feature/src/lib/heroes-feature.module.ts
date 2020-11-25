import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// prettier-ignore
import { CardContentModule, CardFooterModule, HeroesEditorModule, HeroesModalModule } from '@nx-demo/shared/ui';

import { HeroDetailStoreModule } from './hero-detail/+state/hero-detail.store.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroDetailResolver } from './hero-detail/hero-detail.resolver';
import { HeroListStoreModule } from './hero-list/+state/hero-list.store.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroListResolver } from './hero-list/hero-list.resolver';

const ROUTES: Routes = [
  {
    path: '',
    component: HeroListComponent,
    resolve: { HeroListResolver }
  },
  {
    path: ':id',
    component: HeroDetailComponent,
    resolve: { HeroDetailResolver }
  }
];

@NgModule({
  imports: [
    CardContentModule,
    CardFooterModule,
    CommonModule,
    FormsModule,
    HeroDetailStoreModule,
    HeroListStoreModule,
    HeroesEditorModule,
    HeroesModalModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [HeroListComponent, HeroDetailComponent]
})
export class HeroesFeatureModule {}
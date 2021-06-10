import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouterStoreModule } from '@nx-toh/shared/utils';

const ROUTES: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  {
    path: 'hero',
    loadChildren: () =>
      import('@nx-toh/tour-of-heroes/feature/detail').then(m => m.HeroDetailModule)
  },
  {
    path: 'heroes/search',
    loadChildren: () =>
      import('@nx-toh/tour-of-heroes/feature/search').then(m => m.HeroSearchModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import('@nx-toh/tour-of-heroes/feature/list').then(m => m.HeroListModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled'
    }),
    RouterStoreModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

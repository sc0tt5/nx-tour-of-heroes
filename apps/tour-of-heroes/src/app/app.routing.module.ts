import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  {
    path: 'heroes',
    loadChildren: () =>
      import('@nx-toh/tour-of-heroes/heroes/feature').then(m => m.HeroesFeatureModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, // not good for slower/3G connections
      initialNavigation: 'enabled' // will become enabledBlocking in ng11
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

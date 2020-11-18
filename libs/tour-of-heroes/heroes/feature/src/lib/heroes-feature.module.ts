import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  HeroesResolver,
  HeroesService,
  HeroesStoreModule
} from '@nx-demo/tour-of-heroes/heroes/data-access';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroShellComponent } from './hero-shell/hero-shell.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HeroShellComponent,
    resolve: { HeroesResolver }
  }
  // todo: adjust routes to allow for hero/:id
];

@NgModule({
  imports: [CommonModule, FontAwesomeModule, HeroesStoreModule, RouterModule.forChild(ROUTES)],
  declarations: [HeroListComponent, HeroDetailComponent, HeroShellComponent],
  providers: [HeroesResolver, HeroesService]
})
export class HeroesFeatureModule {}

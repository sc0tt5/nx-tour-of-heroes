import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent } from './detail.component';
import { HeroDetailGuard } from './detail.guard';

const ROUTES: Routes = [
  { path: '', redirectTo: 'new', pathMatch: 'full' },
  {
    path: 'new',
    component: HeroDetailComponent
  },
  {
    path: ':id',
    component: HeroDetailComponent,
    canActivate: [HeroDetailGuard]
  }
];

@NgModule({
  imports: [CommonModule, HeroDetailComponent, RouterModule.forChild(ROUTES)]
})
export class HeroDetailModule {}

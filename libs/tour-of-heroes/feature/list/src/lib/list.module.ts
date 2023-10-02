import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './list.component';
import { heroListGuard } from './list.guard';

const ROUTES: Routes = [
  {
    path: '',
    component: HeroListComponent,
    canActivate: [heroListGuard]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), HeroListComponent]
})
export class HeroListModule {}

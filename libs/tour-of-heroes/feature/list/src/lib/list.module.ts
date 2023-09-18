import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from './list.component';
import { HeroListGuard } from './list.guard';

const ROUTES: Routes = [
  {
    path: '',
    component: HeroListComponent,
    canActivate: [HeroListGuard]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), HeroListComponent]
})
export class HeroListModule {}

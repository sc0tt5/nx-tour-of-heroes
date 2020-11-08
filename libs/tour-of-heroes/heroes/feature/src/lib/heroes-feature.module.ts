import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesListComponent } from './heroes-list/heroes-list.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesListComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HeroesListComponent]
})
export class HeroesFeatureModule {}

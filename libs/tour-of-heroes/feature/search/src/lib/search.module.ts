import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesService } from '@nx-toh/tour-of-heroes/shared/data-access';
import { HeroesCardModule } from '@nx-toh/tour-of-heroes/shared/ui';

import { HeroSearchComponent } from './search.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HeroSearchComponent
  }
];

@NgModule({
  imports: [CommonModule, HeroesCardModule, RouterModule.forChild(ROUTES)],
  declarations: [HeroSearchComponent],
  providers: [HeroesService]
})
export class HeroSearchModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SvgIconModule } from '@nx-toh/shared/ui';
import { CardModule } from '@nx-toh/tour-of-heroes/shared/ui';

import { HeroSearchComponent } from './search.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HeroSearchComponent
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, CardModule, RouterModule.forChild(ROUTES), SvgIconModule],
  declarations: [HeroSearchComponent]
})
export class HeroSearchModule {}

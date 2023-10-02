import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HeroSearchComponent } from './search.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HeroSearchComponent
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(ROUTES), HeroSearchComponent]
})
export class HeroSearchModule {}

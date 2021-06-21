import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CloseModule, SearchModule } from '@carbon/icons-angular';

import { CardModule } from '@nx-toh/tour-of-heroes/shared/ui';

import { HeroSearchComponent } from './search.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HeroSearchComponent
  }
];

@NgModule({
  imports: [
    CloseModule,
    CommonModule,
    FormsModule,
    CardModule,
    RouterModule.forChild(ROUTES),
    SearchModule
  ],
  declarations: [HeroSearchComponent]
})
export class HeroSearchModule {}

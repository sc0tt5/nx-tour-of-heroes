import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentLoaderModule, ModalModule } from '@nx-toh/shared/ui';
import { CardModule } from '@nx-toh/tour-of-heroes/shared/ui';

import { HeroListComponent } from './list.component';
import { HeroListResolver } from './list.resolver';

const ROUTES: Routes = [
  {
    path: '',
    component: HeroListComponent,
    resolve: { HeroListResolver }
  }
];

@NgModule({
  imports: [
    CommonModule,
    ContentLoaderModule,
    CardModule,
    ModalModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [HeroListComponent]
})
export class HeroListModule {}

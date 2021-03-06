import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentLoaderModule, ModalModule } from '@nx-toh/shared/ui';
import { EditorModule } from '@nx-toh/tour-of-heroes/shared/ui';

import { HeroDetailComponent } from './detail.component';
import { HeroDetailResolver } from './detail.resolver';

const ROUTES: Routes = [
  { path: '', redirectTo: 'new', pathMatch: 'full' },
  {
    path: 'new',
    component: HeroDetailComponent
  },
  {
    path: ':id',
    component: HeroDetailComponent,
    resolve: { HeroDetailResolver }
  }
];

@NgModule({
  imports: [
    CommonModule,
    ContentLoaderModule,
    EditorModule,
    ModalModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [HeroDetailComponent]
})
export class HeroDetailModule {}

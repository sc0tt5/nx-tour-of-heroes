import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentLoaderModule } from '@nx-toh/shared/ui';
import { HeroesService } from '@nx-toh/tour-of-heroes/shared/data-access';
import { HeroesEditorModule } from '@nx-toh/tour-of-heroes/shared/ui';

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
  imports: [CommonModule, ContentLoaderModule, HeroesEditorModule, RouterModule.forChild(ROUTES)],
  declarations: [HeroDetailComponent],
  providers: [HeroDetailResolver, HeroesService]
})
export class HeroDetailModule {}

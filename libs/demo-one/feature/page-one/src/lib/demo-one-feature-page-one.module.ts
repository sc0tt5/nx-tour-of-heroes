import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';

export const ROUTES: Routes = [{ path: '', pathMatch: 'full', component: PageOneComponent }];

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(ROUTES)],
  declarations: [PageOneComponent]
})
export class DemoOneFeaturePageOneModule {}

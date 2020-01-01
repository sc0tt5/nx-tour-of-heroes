import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageResolver } from '@nx-demo/demo-one/data-access';
import { AccordionModule, DemoContentModule } from '@nx-demo/shared/ui';
import { PageOneComponent } from './page-one/page-one.component';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PageOneComponent,
    data: { state: 'page-one' },
    resolve: { page: PageResolver } // get data first }
  }
];

@NgModule({
  imports: [AccordionModule, CommonModule, DemoContentModule, RouterModule.forChild(ROUTES)],
  declarations: [PageOneComponent]
})
export class DemoOneFeaturePageOneModule {}

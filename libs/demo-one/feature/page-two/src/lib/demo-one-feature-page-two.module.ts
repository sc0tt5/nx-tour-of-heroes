import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageResolver } from '@nx-demo/demo-one/data-access';
import { AccordionModule, DemoContentModule } from '@nx-demo/shared/ui';
import { PageTwoComponent } from './page-two/page-two.component';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PageTwoComponent,
    data: { state: 'page-two' },
    resolve: { page: PageResolver } // get data first
  }
];

@NgModule({
  imports: [AccordionModule, CommonModule, DemoContentModule, RouterModule.forChild(ROUTES)],
  declarations: [PageTwoComponent]
})
export class DemoOneFeaturePageTwoModule {}

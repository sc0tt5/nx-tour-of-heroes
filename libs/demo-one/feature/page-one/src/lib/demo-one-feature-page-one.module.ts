import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionModule, DemoContentModule } from '@nx-demo/shared/ui';
import { PageOneStoreModule } from './page-one/+state/page-one-store.module';
import { PageOneResolverService } from './page-one/page-one-resolver.service';
import { PageOneComponent } from './page-one/page-one.component';
import { PageOneService } from './page-one/page-one.service';

export const ROUTES: Routes = [
  {
    path: '',
    component: PageOneComponent,
    data: { title: 'Page One' },
    resolve: { PageOneResolverService }
  }
];

@NgModule({
  imports: [
    AccordionModule,
    CommonModule,
    DemoContentModule,
    RouterModule.forChild(ROUTES),
    PageOneStoreModule
  ],
  declarations: [PageOneComponent],
  providers: [PageOneResolverService, PageOneService]
})
export class DemoOneFeaturePageOneModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionModule, DemoContentModule } from '@nx-demo/shared/ui';
import { PageOneStoreModule } from './page-one/+state/page-one-store.module';
import { PageResolverService } from './page-one/page-one-resolver.service';
import { PageOneComponent } from './page-one/page-one.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PageOneComponent,
    data: { title: 'Page One' },
    resolve: { PageResolverService }
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
  providers: [PageResolverService]
})
export class DemoOneFeaturePageOneModule {}

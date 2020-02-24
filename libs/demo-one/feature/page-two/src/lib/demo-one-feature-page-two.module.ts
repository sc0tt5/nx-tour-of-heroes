import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionModule, DemoContentModule } from '@nx-demo/shared/ui';
import { PageTwoStoreModule } from './page-two/+state/page-two-store.module';
import { PageTwoResolverService } from './page-two/page-two-resolver.service';
import { PageTwoComponent } from './page-two/page-two.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PageTwoComponent,
    data: { title: 'Page Two' },
    resolve: { page: PageTwoResolverService }
  }
];

@NgModule({
  imports: [
    AccordionModule,
    CommonModule,
    DemoContentModule,
    RouterModule.forChild(ROUTES),
    PageTwoStoreModule
  ],
  declarations: [PageTwoComponent],
  providers: [PageTwoResolverService]
})
export class DemoOneFeaturePageTwoModule {}

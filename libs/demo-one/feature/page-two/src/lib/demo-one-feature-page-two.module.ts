import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccordionModule, ContentLoaderModule } from '@nx-toh/shared/ui-core';

import { PageTwoStoreModule } from './page-two/+state/page-two-store.module';
import { PageTwoResolverService } from './page-two/page-two-resolver.service';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageTwoService } from './page-two/page-two.service';

export const ROUTES: Routes = [
  {
    path: '',
    component: PageTwoComponent,
    data: { title: 'Page Two' },
    resolve: { PageTwoResolverService }
  }
];

@NgModule({
  imports: [
    AccordionModule,
    CommonModule,
    ContentLoaderModule,
    RouterModule.forChild(ROUTES),
    PageTwoStoreModule
  ],
  declarations: [PageTwoComponent],
  providers: [PageTwoResolverService, PageTwoService]
})
export class DemoOneFeaturePageTwoModule {}

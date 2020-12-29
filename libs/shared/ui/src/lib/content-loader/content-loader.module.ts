import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoadingIndicatorModule } from './../loading-indicator/loading-indicator.module';
import { ContentLoaderComponent } from './content-loader.component';

@NgModule({
  imports: [CommonModule, LoadingIndicatorModule],
  declarations: [ContentLoaderComponent],
  exports: [ContentLoaderComponent]
})
export class ContentLoaderModule {}

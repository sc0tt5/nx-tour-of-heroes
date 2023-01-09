import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContentLoaderComponent } from './content-loader.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContentLoaderComponent],
  exports: [ContentLoaderComponent]
})
export class ContentLoaderModule {}

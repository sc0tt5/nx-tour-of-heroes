import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoadingIndicatorModule } from './../loading-indicator/loading-indicator.module';
import { DemoContentComponent } from './demo-content.component';

@NgModule({
  imports: [CommonModule, LoadingIndicatorModule],
  declarations: [DemoContentComponent],
  exports: [DemoContentComponent]
})
export class DemoContentModule {}

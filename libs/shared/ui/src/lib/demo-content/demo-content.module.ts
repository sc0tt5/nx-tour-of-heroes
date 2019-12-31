import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoContentComponent } from './demo-content.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DemoContentComponent],
  exports: [DemoContentComponent]
})
export class DemoContentModule {}

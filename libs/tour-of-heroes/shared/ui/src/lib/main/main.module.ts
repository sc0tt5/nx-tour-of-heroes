import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule {}

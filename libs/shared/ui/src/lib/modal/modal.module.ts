import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SvgIconModule } from '../svg-icon/svg-icon.module';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, SvgIconModule],
  exports: [ModalComponent]
})
export class ModalModule {}

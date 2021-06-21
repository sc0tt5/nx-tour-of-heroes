import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DynamicReactiveFormModule } from '@nx-toh/shared/ui';

import { EditorComponent } from './editor.component';

@NgModule({
  declarations: [EditorComponent],
  imports: [CommonModule, DynamicReactiveFormModule],
  exports: [EditorComponent]
})
export class EditorModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DynamicReactiveFormModule } from '@nx-toh/shared/ui';

import { HeroesEditorComponent } from './heroes-editor.component';

@NgModule({
  declarations: [HeroesEditorComponent],
  imports: [CommonModule, DynamicReactiveFormModule],
  exports: [HeroesEditorComponent]
})
export class HeroesEditorModule {}

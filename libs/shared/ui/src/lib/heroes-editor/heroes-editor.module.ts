import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DynamicReactiveFormModule } from '../form/dynamic-reactive-form.module';
import { HeroesEditorComponent } from './heroes-editor.component';

@NgModule({
  declarations: [HeroesEditorComponent],
  imports: [CommonModule, DynamicReactiveFormModule],
  exports: [HeroesEditorComponent]
})
export class HeroesEditorModule {}

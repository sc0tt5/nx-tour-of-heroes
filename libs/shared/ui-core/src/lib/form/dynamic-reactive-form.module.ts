import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFieldComponent } from './dynamic-field/dynamic-field.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [DynamicFieldComponent, DynamicFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicFormComponent]
})
export class DynamicReactiveFormModule {}

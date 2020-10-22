import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicReactiveFormModule } from '../form/dynamic-reactive-form.module';
import { AccordionOneComponent } from './accordion-one/accordion-one.component';
import { AccordionTwoComponent } from './accordion-two/accordion-two.component';
import { AccordionComponent } from './accordion.component';

@NgModule({
  imports: [CommonModule, DynamicReactiveFormModule],
  declarations: [AccordionComponent, AccordionOneComponent, AccordionTwoComponent],
  exports: [AccordionComponent, AccordionOneComponent, AccordionTwoComponent]
})
export class AccordionModule {}

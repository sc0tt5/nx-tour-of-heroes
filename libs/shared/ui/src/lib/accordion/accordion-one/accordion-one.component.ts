import { Component, EventEmitter, forwardRef, Input } from '@angular/core';
import { ACCORDION_ITEM, AccordionItem } from '../accordion.model';

@Component({
  selector: 'nx-demo-accordion-one',
  templateUrl: './accordion-one.component.html',
  styleUrls: ['./accordion-one.component.scss'],
  providers: [{ provide: ACCORDION_ITEM, useExisting: forwardRef(() => AccordionOneComponent) }]
})
export class AccordionOneComponent implements AccordionItem {
  @Input() item: any;
  isOpen: boolean;
  itemToggled = new EventEmitter<number>();
}

import { Component, EventEmitter, forwardRef, Input } from '@angular/core';
import { AccordionItem, ACCORDION_ITEM } from '../accordion.model';

@Component({
  selector: 'app-accordion-one',
  templateUrl: './accordion-one.component.html',
  styleUrls: ['./accordion-one.component.scss'],
  providers: [{ provide: ACCORDION_ITEM, useExisting: forwardRef(() => AccordionOneComponent) }]
})
export class AccordionOneComponent implements AccordionItem {
  @Input() item: any;
  isOpen: boolean;
  itemToggled = new EventEmitter<number>();
}

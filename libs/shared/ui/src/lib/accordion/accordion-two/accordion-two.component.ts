import { Component, EventEmitter, forwardRef, Input } from '@angular/core';
import { AccordionItem, ACCORDION_ITEM } from '../accordion.model';

@Component({
  selector: 'app-accordion-two',
  templateUrl: './accordion-two.component.html',
  styleUrls: ['./accordion-two.component.scss'],
  providers: [{ provide: ACCORDION_ITEM, useExisting: forwardRef(() => AccordionTwoComponent) }]
})
export class AccordionTwoComponent implements AccordionItem {
  @Input() item: any;
  isOpen: boolean;
  itemToggled = new EventEmitter<number>();
}

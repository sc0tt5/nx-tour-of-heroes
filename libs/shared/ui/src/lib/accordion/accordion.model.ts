import { EventEmitter, InjectionToken } from '@angular/core';

// context
export interface AccordionWrapper {
  items: AccordionItem[];
}

// strategy
export interface AccordionItem {
  itemToggled: EventEmitter<number>;
  isOpen: boolean;
  item: any;
}

export const ACCORDION_ITEM = new InjectionToken<AccordionItem>('AccordionItem');

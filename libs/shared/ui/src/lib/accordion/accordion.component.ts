import { AfterContentInit, Component, ContentChildren, ViewEncapsulation } from '@angular/core';
import { trackEvent } from '@nx-demo/shared/utils';
import { ACCORDION_ITEM, AccordionItem, AccordionWrapper } from './accordion.model';

@Component({
  selector: 'nx-demo-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  encapsulation: ViewEncapsulation.None // required to update accordion shared styles
})
export class AccordionComponent implements AfterContentInit, AccordionWrapper {
  private activeIndex: number;
  @ContentChildren(ACCORDION_ITEM as any) items: AccordionItem[];

  ngAfterContentInit(): void {
    this.items.forEach((item: AccordionItem, index) => {
      item.itemToggled.subscribe(() => this.itemToggledHandler(index));
    });
  }

  itemToggledHandler(i: number) {
    this.activeIndex = this.activeIndex === i ? null : i;
    this.items.forEach((item: AccordionItem, index) => {
      item.isOpen = index === this.activeIndex;
      if (index === this.activeIndex) {
        // ga event tracking - action, category, label
        trackEvent('click', 'Accordion', `Accordion - ${item.item.header}`);
      }
    });
  }
}

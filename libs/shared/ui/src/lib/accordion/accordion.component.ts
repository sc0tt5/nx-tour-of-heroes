// ref: https://stackblitz.com/edit/github-madr3a?file=src%2Fapp%2Faccordion%2Faccordion-item2%2Faccordion-item2.component.ts
import { AfterContentInit, Component, ContentChildren, ViewEncapsulation } from '@angular/core';
import { AccordionItem, AccordionWrapper, ACCORDION_ITEM } from './accordion.model';

@Component({
  selector: 'app-accordion',
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

  // TODO: unit test itemToggledHandler
  itemToggledHandler(i: number) {
    this.activeIndex = this.activeIndex === i ? null : i;
    this.items.forEach((item: AccordionItem, index) => {
      item.isOpen = index === this.activeIndex;
    });
  }
}

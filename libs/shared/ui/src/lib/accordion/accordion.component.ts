import { AfterContentInit, Component, ContentChildren, ViewEncapsulation } from '@angular/core';
import { AnalyticsService } from '@nx-demo/shared/utils';
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

  constructor(private analyticsService: AnalyticsService) {}

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
        const dataLayerEvent = {
          action: 'click',
          category: 'Accordion',
          label: `Accordion - ${item.item.header}`
        };
        this.analyticsService.trackEvent(dataLayerEvent);
      }
    });
  }
}

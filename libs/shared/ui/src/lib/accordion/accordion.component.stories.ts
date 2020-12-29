import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { ContentType } from '@nx-toh/shared/models';

import { AccordionModule } from './accordion.module';

const accordionItems = [
  { header: 'header 1', content: { type: ContentType.STRING, body: 'content 1' } },
  { header: 'header 2', content: { type: ContentType.STRING, body: 'content 2' } },
  { header: 'header 3', content: { type: ContentType.STRING, body: 'content 3' } }
];

export const stories = storiesOf('Accordion Component', module)
  .addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      imports: [AccordionModule]
    })
  );

stories.add('Accordion One', () => ({
  props: { accordionItems },
  template: `
    <shrd-ui-accordion>
      <shrd-ui-accordion-one
        *ngFor="let item of accordionItems"
        [item]="item"
      ></shrd-ui-accordion-one>
    </shrd-ui-accordion>
      `
}));

stories.add('Accordion Two', () => ({
  props: { accordionItems },
  template: `
    <shrd-ui-accordion>
      <shrd-ui-accordion-two
        *ngFor="let item of accordionItems"
        [item]="item"
      ></shrd-ui-accordion-two>
    </shrd-ui-accordion>
      `
}));

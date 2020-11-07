import { withKnobs } from '@storybook/addon-knobs';
import { moduleMetadata, storiesOf } from '@storybook/angular';

import { ContentType } from '@nx-demo/shared/models';

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
    <nx-demo-accordion>
      <nx-demo-accordion-one
        *ngFor="let item of accordionItems"
        [item]="item"
      ></nx-demo-accordion-one>
    </nx-demo-accordion>
      `
}));

stories.add('Accordion Two', () => ({
  props: { accordionItems },
  template: `
    <nx-demo-accordion>
      <nx-demo-accordion-two
        *ngFor="let item of accordionItems"
        [item]="item"
      ></nx-demo-accordion-two>
    </nx-demo-accordion>
      `
}));

import { moduleMetadata, storiesOf } from '@storybook/angular';

import { DemoContentModule } from './demo-content.module';

export const stories = storiesOf('Demo Content', module).addDecorator(
  moduleMetadata({
    imports: [DemoContentModule]
  })
);

stories.add('Demo Content', () => ({
  template: `
    <nx-demo-demo-content [pageLoaded]="true">
      <h1>Demo Content Storybook Example</h1>
    </nx-demo-demo-content>
  `
}));

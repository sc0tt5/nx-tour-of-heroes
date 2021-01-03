import { moduleMetadata, storiesOf } from '@storybook/angular';

import { LoadingIndicatorModule } from './loading-indicator.module';

export const stories = storiesOf('Loading Indicator', module).addDecorator(
  moduleMetadata({
    imports: [LoadingIndicatorModule]
  })
);

// todo: fix this
stories.add('Loading Indicator', () => ({
  template: `
    <shrd-ui-loading-indicator [pageLoaded]="false"></shrd-ui-loading-indicator>
  `
}));

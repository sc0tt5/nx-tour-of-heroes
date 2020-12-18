import { moduleMetadata, storiesOf } from '@storybook/angular';

import { ContentLoaderModule } from './content-loader.module';

export const stories = storiesOf('Content Loader', module).addDecorator(
  moduleMetadata({
    imports: [ContentLoaderModule]
  })
);

stories.add('Content Loader', () => ({
  template: `
    <shrd-ui-content-loader [pageLoaded]="true">
      <h1>Demo Content Storybook Example</h1>
    </shrd-ui-content-loader>
  `
}));

import { moduleMetadata, storiesOf } from '@storybook/angular';

import { FieldType } from '@nx-demo/shared/models';

import { DynamicReactiveFormModule } from '../dynamic-reactive-form.module';

const fieldset = [
  {
    name: 'firstName',
    type: FieldType.TEXTFIELD,
    placeholder: 'First Name',
    value: 'Bill',
    required: true
  },
  {
    name: 'lastName',
    type: FieldType.TEXTFIELD,
    placeholder: 'Last Name',
    value: 'Gates',
    required: true
  }
];

export const stories = storiesOf('Dynamic Reactive Form', module).addDecorator(
  moduleMetadata({
    imports: [DynamicReactiveFormModule]
  })
);

stories.add('Dynamic Reactive Form', () => ({
  props: { fieldset },
  template: `
    <nx-demo-form [fieldset]="fieldset"></nx-demo-form>
  `
}));

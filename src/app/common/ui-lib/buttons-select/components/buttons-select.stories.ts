import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IonicModule } from '@ionic/angular';

import { action } from '@storybook/addon-actions';
import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';

// Models
import { content } from '@meditation/models/meditation.model';

// Components
import { ButtonsSelectComponent } from '@buttons-select/components/buttons-select.component';

export default {
  component: ButtonsSelectComponent,
  title: 'UI Library/Buttons Select',
  decorators: [
    moduleMetadata({
      declarations: [ButtonsSelectComponent],
      imports: [CommonModule, FlexLayoutModule, IonicModule.forRoot()],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div style="display: flex; justify-content: center">${story}</div>`,
    ),
  ],
} as Meta;

const template: Story<ButtonsSelectComponent> = (args) => ({
  props: args,
});

export const buttonsSelect = template.bind({});

buttonsSelect.args = {
  valueChange: action('value changed'),
  options: [content.media, content.text],
  value: [content.media],
};

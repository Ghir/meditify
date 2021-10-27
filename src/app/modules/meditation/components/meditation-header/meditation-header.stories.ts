import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IonicModule } from '@ionic/angular';

import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';

// Components
import { MeditationHeaderComponent } from '@meditation/components/meditation-header/meditation-header.component';

// Mocks
import { categoryMock } from '@meditation/mocks/category.mock';

export default {
  component: MeditationHeaderComponent,
  title: 'Meditation/Meditation Header',
  decorators: [
    moduleMetadata({
      declarations: [MeditationHeaderComponent],
      imports: [CommonModule, FlexLayoutModule, IonicModule.forRoot()],
    }),
    componentWrapperDecorator(
      (story) => `<div style="background: #f9eedb">${story}</div>`,
    ),
  ],
} as Meta;

const template: Story<MeditationHeaderComponent> = (args) => ({
  props: args,
});

export const meditationHeader = template.bind({});

meditationHeader.args = {
  category: categoryMock,
};

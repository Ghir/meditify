import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IonicModule } from '@ionic/angular';

import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

// Components
import { MeditationItemComponent } from '@meditation/components/meditation-item/meditation-item.component';

// Mocks
import { meditationMock } from '@meditation/mocks/meditation.mock';

export default {
  component: MeditationItemComponent,
  title: 'Meditation/Meditation Item',
  decorators: [
    moduleMetadata({
      declarations: [MeditationItemComponent],
      imports: [CommonModule, FlexLayoutModule, IonicModule.forRoot()],
    }),
  ],
} as Meta;

const template: Story<MeditationItemComponent> = (args) => ({
  props: args,
});

export const MeditationItem = template.bind({});

MeditationItem.args = {
  meditation: meditationMock,
  selected: action('selected'),
};

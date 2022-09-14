import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IonicModule } from '@ionic/angular';

import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

// Components
import { TimerModalComponent } from '@timer/components/timer-modal/timer-modal.component';

export default {
  component: TimerModalComponent,
  title: 'Timer/ Timer Modal',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FlexLayoutModule, IonicModule.forRoot()],
    }),
  ],
} as Meta;

const template: Story<TimerModalComponent> = (args) => ({
  props: args,
});

export const TimerModal = template.bind({});

TimerModal.args = {
  duration: 120,
  finish: action('finish session'),
  discard: action('discard session'),
};

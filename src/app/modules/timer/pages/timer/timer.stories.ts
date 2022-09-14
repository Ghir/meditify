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

// Components
import { TimerComponent } from '@timer/pages/timer/timer.component';
import { TimerDurationComponent } from '@timer/components/timer-duration/timer-duration.component';

export default {
  component: TimerComponent,
  title: 'Timer/ Timer',
  decorators: [
    moduleMetadata({
      declarations: [TimerComponent, TimerDurationComponent],
      imports: [CommonModule, FlexLayoutModule, IonicModule.forRoot()],
    }),
    componentWrapperDecorator(
      (story) => `<div style="height: 650px">${story}</div>`,
    ),
  ],
} as Meta;

const template: Story<TimerComponent> = (args) => ({
  props: args,
});

export const Timer = template.bind({});

Timer.args = {
  onDurationChange: action('duration changed'),
  presentModal: action('open modal'),
};

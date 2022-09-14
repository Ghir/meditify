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
import { TimerDurationComponent } from '@timer/components/timer-duration/timer-duration.component';

export default {
  component: TimerDurationComponent,
  title: 'Timer/ Timer Duration',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FlexLayoutModule, IonicModule.forRoot()],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div fxLayout="column" fxLayoutAlign="center center">${story}</div>`,
    ),
  ],
} as Meta;

const template: Story<TimerDurationComponent> = (args) => ({
  props: args,
});

export const TimerDuration = template.bind({});

TimerDuration.args = {
  durationChange: action('duration changed'),
};

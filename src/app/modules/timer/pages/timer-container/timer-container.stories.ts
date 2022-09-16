import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IonicModule } from '@ionic/angular';

import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { action } from '@storybook/addon-actions';

// Components
import { TimerContainerComponent } from '@timer/pages/timer-container/timer-container.component';

// Modules
import { ButtonsSelectModule } from '@buttons-select/buttons-select.module';

// Models
import { timer } from '@timer/models/timer.model';

export default {
  component: TimerContainerComponent,
  title: 'Timer/ Timer Container',
  argTypes: {
    menuSelection: {
      defaultValue: [timer.timer],
      control: {
        type: 'array',
      },
    },
    timerMenu: {
      defaultValue: [timer.timer, timer.stats],
      control: {
        type: 'array',
      },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [TimerContainerComponent],
      imports: [
        CommonModule,
        FlexLayoutModule,
        IonicModule.forRoot(),
        ButtonsSelectModule,
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div style="height: calc(100vh - 56px)">${story}</div>`,
    ),
  ],
} as Meta;

const template: Story<TimerContainerComponent> = (args) => ({
  props: args,
});

export const TimerContainer = template.bind({});

TimerContainer.args = {
  onMenuSelectionChange: action('page changed'),
};

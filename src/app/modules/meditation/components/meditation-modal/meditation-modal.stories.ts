import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IonicModule, ModalController } from '@ionic/angular';

import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';

// Components
import { TextContentComponent } from '@meditation/components/text-content/text-content.component';
import { MediaContentComponent } from '@meditation/components/media-content/media-content.component';
import { MeditationModalComponent } from '@meditation/components/meditation-modal/meditation-modal.component';

// Modules
import { ButtonsSelectModule } from '@buttons-select/buttons-select.module';

// Services
import { AudioService } from '@meditation/services/audio.service';
import { AudioStateService } from '@meditation/services/audio-state.service';

// Mocks
import { meditationMock } from '@meditation/mocks/meditation.mock';

// Models
import { content } from '@meditation/models/meditation.model';

export default {
  component: MeditationModalComponent,
  title: 'Meditation/Meditation Modal',
  argTypes: {
    mediaSelection: {
      defaultValue: [content.media],
      control: {
        type: 'array',
      },
    },
    mediaOptions: {
      defaultValue: [content.media, content.text],
      control: {
        type: 'array',
      },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [
        MeditationModalComponent,
        MediaContentComponent,
        TextContentComponent,
      ],
      imports: [
        CommonModule,
        FlexLayoutModule,
        IonicModule.forRoot(),
        ButtonsSelectModule,
      ],
      providers: [ModalController, AudioStateService, AudioService],
    }),
    componentWrapperDecorator(
      (story) => `<div style="height: 600px">${story}</div>`,
    ),
  ],
} as Meta;

const template: Story<MeditationModalComponent> = (args) => ({
  props: args,
});

export const MeditationModal = template.bind({});
MeditationModal.args = {
  meditation: meditationMock,
};

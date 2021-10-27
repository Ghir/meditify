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
import { MediaContentComponent } from '@meditation/components/meditation-modal/media-content/media-content.component';

// Mocks
import { meditationMock } from '@meditation/mocks/meditation.mock';
import { INITIAL_MEDIA_STATE } from '@meditation/constants/media.constants';

export default {
  component: MediaContentComponent,
  title: 'Meditation/Media Content',
  decorators: [
    moduleMetadata({
      declarations: [MediaContentComponent],
      imports: [CommonModule, FlexLayoutModule, IonicModule.forRoot()],
    }),
    componentWrapperDecorator(
      (story) => `<div style="height: 750px">${story}</div>`,
    ),
  ],
} as Meta;

const template: Story<MediaContentComponent> = (args) => ({
  props: args,
});

export const mediaContent = template.bind({});

mediaContent.args = {
  meditation: meditationMock,
  seekbarValue: 0,
  media: INITIAL_MEDIA_STATE,
  playAudio() {
    this.media.playing = true;
  },
  pauseAudio() {
    this.media.playing = false;
  },
  seekEnd: action('seek end,'),
};

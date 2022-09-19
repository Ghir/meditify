import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { provideMockStore } from '@ngrx/store/testing';

import { IonicModule, ModalController } from '@ionic/angular';

import { BehaviorSubject } from 'rxjs';

import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';

// Components
import { MeditationsComponent } from '@meditation/pages/meditations/meditations.component';
import { MeditationHeaderComponent } from '@meditation/components/meditation-header/meditation-header.component';
import { MeditationItemComponent } from '@meditation/components/meditation-item/meditation-item.component';

// Modules
import { ButtonsSelectModule } from '@buttons-select/buttons-select.module';

// Mocks
import { meditationMock } from '@meditation/mocks/meditation.mock';
import { categoryMock } from '@meditation/mocks/category.mock';

// Models
import { content } from '@meditation/models/meditation.model';

export default {
  component: MeditationsComponent,
  title: 'Meditation/Meditations',
  argTypes: {
    $mediaSelection: {
      table: {
        disable: true,
      },
      defaultValue: new BehaviorSubject([]),
      control: {
        type: 'object',
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
        MeditationsComponent,
        MeditationItemComponent,
        MeditationHeaderComponent,
      ],
      imports: [
        CommonModule,
        FlexLayoutModule,
        IonicModule.forRoot(),
        ButtonsSelectModule,
      ],
      providers: [
        ModalController,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { queryParams: { categoryId: 'focus' } } },
        },
        provideMockStore({
          initialState: {
            meditation: {
              meditation: {
                categories: [categoryMock],
                meditations: [meditationMock],
              },
            },
          },
        }),
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div style="height: 400px">${story}</div>`,
    ),
  ],
} as Meta;

const template: Story<MeditationsComponent> = (args) => ({
  props: args,
});

export const Meditations = template.bind({});

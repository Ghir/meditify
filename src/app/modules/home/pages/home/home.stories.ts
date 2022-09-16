import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { provideMockStore } from '@ngrx/store/testing';

import { IonicModule } from '@ionic/angular';

import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';

// Components
import { HomeComponent } from '@home/pages/home/home.component';

export default {
  component: HomeComponent,
  title: 'Home/ Home',
  decorators: [
    moduleMetadata({
      imports: [CommonModule, FlexLayoutModule, IonicModule.forRoot()],
      providers: [
        provideMockStore({
          initialState: {
            home: {
              home: {
                quote:
                  'Believe in your infinite potential. Your only limitations are those you set upon yourself.',
              },
            },
          },
        }),
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div style="height: calc(100vh - 56px)">${story}</div>`,
    ),
  ],
} as Meta;

const template: Story<HomeComponent> = (args) => ({
  props: args,
});

export const Home = template.bind({});
Home.parameters = {
  layout: 'fullscreen',
  controls: { hideNoControlsWarning: true },
};

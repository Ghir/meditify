import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IonicModule } from '@ionic/angular';

import { provideMockStore } from '@ngrx/store/testing';

import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';

// Components
import { CategoryCardComponent } from '@meditation/components/category-card/category-card.component';
import { CategoriesComponent } from '@meditation/pages/categories/categories.component';

// Mocks
import { categoryMock } from '@meditation/mocks/category.mock';

export default {
  component: CategoriesComponent,
  title: 'Meditation/Categories',
  decorators: [
    moduleMetadata({
      declarations: [CategoriesComponent, CategoryCardComponent],
      imports: [CommonModule, FlexLayoutModule, IonicModule.forRoot()],
      providers: [
        provideMockStore({
          initialState: {
            meditation: {
              meditation: {
                categories: [categoryMock, categoryMock],
              },
            },
          },
        }),
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div style="height: 650px">${story}</div>`,
    ),
  ],
} as Meta;

const template: Story<CategoriesComponent> = (args) => ({
  props: args,
});

export const categories = template.bind({});

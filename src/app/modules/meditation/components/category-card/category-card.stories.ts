import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IonicModule } from '@ionic/angular';

import {
  componentWrapperDecorator,
  Meta,
  moduleMetadata,
  Story,
} from '@storybook/angular';

// Components
import { CategoryCardComponent } from '@meditation/components/category-card/category-card.component';

// Mocks
import { categoryMock } from '@meditation/mocks/category.mock';

export default {
  component: CategoryCardComponent,
  title: 'Meditation/Category Card',
  decorators: [
    moduleMetadata({
      declarations: [CategoryCardComponent],
      imports: [CommonModule, FlexLayoutModule, IonicModule.forRoot()],
    }),
    componentWrapperDecorator(
      (story) => `<div style="--ion-card-background: #f9eedb">${story}</div>`,
    ),
  ],
} as Meta;

const template: Story<CategoryCardComponent> = (args) => ({
  props: args,
});

export const CategoryCard = template.bind({});

CategoryCard.args = {
  category: categoryMock,
};

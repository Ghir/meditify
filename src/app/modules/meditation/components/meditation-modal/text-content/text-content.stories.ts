import { Meta, Story } from '@storybook/angular';

// Components
import { TextContentComponent } from '@meditation/components/meditation-modal/text-content/text-content.component';

export default {
  component: TextContentComponent,
  title: 'Meditation/Text Content',
} as Meta;

const template: Story<TextContentComponent> = (args) => ({
  props: args,
});

export const textContent = template.bind({});

textContent.args = {
  text: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo
  r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, s
    unt in culpa qui officia deserunt mollit anim id est laborum.
  `,
};

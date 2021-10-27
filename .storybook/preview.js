import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

const customViewports = {
  iPhoneX: {
    name: 'IPhone X',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  viewport: {
    viewports: customViewports,
    defaultViewport: 'iPhoneX',
  },
};

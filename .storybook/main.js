module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.ts'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions/register',
    'storybook-addon-angular-router',
  ],
  core: {
    builder: 'webpack5',
  },
};

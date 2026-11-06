/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx)'],
  addons: ['@storybook/addon-toolbars'],
  staticDirs: ['../public'],
  framework: { name: '@storybook/react-vite', options: {} },
};
export default config;

const {
  mergeConfig
} = require('vite');

module.exports = {
  stories: ['../src/app/**/*.stories.mdx', '../src/app/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  async viteFinal(config, {
    configType
  }) {
    return mergeConfig(config, {
      
    });
  },
  framework: {
    name: '@storybook/web-components-vite',
    options: {
                      builder: {
                        viteConfigPath: 'apps/wv1/vite.config.ts',
                      },
                      }
  }
};

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
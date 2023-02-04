const path = require('path');
const {
  loadConfigFromFile,
  mergeConfig
} = require('vite');

const config = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": {
    name: "@storybook/vue3-vite",
    options: {}
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: (await import('../vite.config.js')).default.resolve,
      plugins: []
    });
  },
  docs: {
    autodocs: true
  }
};
export default config;

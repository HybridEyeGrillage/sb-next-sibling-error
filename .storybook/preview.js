import { setup } from '@storybook/vue3';
import { useArgs } from '@storybook/client-api';
import { createRouter, createWebHashHistory } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


library.add(fas, far);

setup((app) => {
  app.component('font-awesome-icon', FontAwesomeIcon);
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        'Tokens',
        ['Foundations', 'Typography', 'Assets'],
        'Atomic Design',
        ['Atoms', 'Molecules', 'Organisms'],
      ],
    },
  },
};

export const decorators = [
  (story) => {
    return { components: { story }, template: '<div id="teleport-system"></div><story />'};
  },
  (story, context) => {
    const [_, updateArgs] = useArgs();
    return story({ ...context, updateArgs});
  }
];

// All stories expect a theme arg
// export const argTypes = { theme: { control: 'select', options: ['light', 'dark'] } };

// The default value of the theme arg to all stories
// export const args = { theme: 'light' };

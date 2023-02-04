import TokenIcon from './TokenIcon.vue';
import { iconSolid } from '@/components/Token-Icon/helper/index.js';

export default {
  title: 'Atomic Design/Tokens/TokenIcon',
  component: { TokenIcon },
};

export const Icon = {
  render: (args) => ({
    components: { TokenIcon },
    template: `<TokenIcon v-bind="args"/>`,
    setup() {
      return { args };
    },
  }),
  args: {
    icon: 'anchor',
  },
  argTypes: {
    icon: {
      description: 'Displays an icon by name',
      options: iconSolid,
      control: { type: 'select' },
    },
  },
};

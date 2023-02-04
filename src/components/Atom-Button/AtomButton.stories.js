import AtomButton from './AtomButton.vue';
import { iconSolid } from '@/components/Token-Icon/helper/index.js';

export default {
  title: 'Atomic Design/Atoms/AtomButton',
  component: AtomButton,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'lg'],
      control: { type: 'select' },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'neutral'],
      control: { type: 'inline-radio' },
    },
    icon: {
      options: iconSolid,
      control: { type: 'select' },
    },
    iconStyle: {
      options: ['solid', 'regular'],
      control: { type: 'inline-radio' },
    },
    iconPosition: {
      options: ['left', 'right'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = {
  render: (args) => ({
    components: { AtomButton },
    setup() {
      return { args };
    },
    template: `<AtomButton v-bind="args" />`,
  }),
  args: {
    id: 'default-button',
    text: 'Default Button',
    variant: 'primary',
    iconPosition: 'left',
    icon: 'anchor',
    size: 'xs',
    expand: false,
    outline: false,
    circle: false,
    disabled: false,
    rounded: false,
    iconStyle: 'solid',
  },
};

export const SecondaryButton = {
  args: {
    ...Default.args,
    variant: 'secondary',
    // icon: 'bullhorn',
    iconPosition: 'right',
    size: 'sm',
    iconStyle: 'solid',
  },
  render: (args) => ({
    components: { AtomButton },
    setup() {
      return { args };
    },
    template: `<AtomButton v-bind="args" />`,
  }),
};

export const TertiaryButton = {
  args: {
    ...Default.args,
    variant: 'tertiary',
    // icon: 'user',
    size: 'lg',
    iconStyle: 'regular',
  },
  render: (args) => ({
    components: { AtomButton },
    setup() {
      return { args };
    },
    template: `<AtomButton v-bind="args" />`,
  }),
};

export const OutlineButton = {
  args: {
    ...Default.args,
    size: 'lg',
    outline: true,
  },
  render: (args) => ({
    components: { AtomButton },
    setup() {
      return { args };
    },
    template: `<AtomButton v-bind="args" />`,
  }),
};

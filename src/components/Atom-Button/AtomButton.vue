<script setup>
import { defineAsyncComponent, computed } from 'vue';
import { isDefined } from '@vueuse/core';

const TokenIcon = defineAsyncComponent(() =>
  import('@/components/Token-Icon/TokenIcon.vue')
);

const props = defineProps({
  /** Unique button id */
  id: {
    type: String,
  },
  /** Turn the button into a round circle (for icons) */
  circle: {
    type: Boolean,
    default: false,
  },
  /** Disabled state for the button */
  disabled: {
    type: Boolean,
    default: false,
  },
  /** Expands the button to 100% of the width avaiable */
  expand: {
    type: Boolean,
    default: false,
  },
  /** FontAwesome (Free) font-family.
   * Adds an icon to the button */
  icon: {
    type: String,
  },
  /**
   * Position of the icon
   * @values left, right
   */
  iconPosition: {
    type: String,
    default: 'left',
  },
  /**
   * FontAwesome (Free) font-family (regular* or solid).
   * *Regular has <200 icons, so solid is default.
   * @values solid, regular
   */
  iconStyle: {
    type: String,
    required: false,
    default: 'solid',
  },
  /** Turns the button into a 'ghost' button with a simple outline. * */
  outline: {
    type: Boolean,
    default: false,
  },
  /** Adds rounded edges to the button. */
  rounded: {
    type: Boolean,
    required: false,
    default: false,
  },
  /**
   * Size of the button (xs, sm, xl)
   * @values xs, sm, xl
   */
  size: {
    type: String,
    default: 'lg',
  },
  /** Text contents of the button */
  text: {
    type: String,
  },
  /**
   * The color style for the button
   * @values primary, secondary, tertiary, neutral
   */
  variant: {
    type: String,
    default: 'primary',
  },
});

const showIcon = computed(() => isDefined(props.icon));
const iconOnly = computed(
  () => !isDefined(props.text) && isDefined(props.icon)
);
const iconAlignment = computed(() =>
  isDefined(props.iconPosition) ? `icon-${props.iconPosition}` : 'icon'
);
</script>

<template>
  <button :id="id" type="button" :class="[
    'atom-button',
    {
      circle: circle,
      disabled: disabled,
      expand: expand,
      outline: outline,
      rounded: rounded,
    },
    iconAlignment,
    size,
    variant,
  ]">
    <TokenIcon v-if="showIcon" :icon-style="iconStyle" :icon="icon" :size="size" />
    <label v-if="!iconOnly" :for="id" class="button-label"> {{ text }} </label>
  </button>
</template>

<style lang="scss" scoped>
@import './AtomButton.scss';
</style>

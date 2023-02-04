<script setup>
  import { computed } from 'vue';
  import { isDefined } from '@vueuse/core';

  const props = defineProps({
    icon: {
      type: String,
      required: true,
      default: '',
    },
    inverse: {
      type: Boolean,
      required: false,
    },
    iconStyle: {
      type: String,
      required: false,
      default: 'solid',
    },
    size: {
      type: String,
      required: false,
      default: 'lg', // "xs", "sm", "lg", "1x", "10x"
    },
    border: {
      type: Boolean,
      required: false,
      default: false,
    },
  });
  const icon = computed(() => {
    let iconArray = '';
    if (isDefined(props.iconStyle)) {
      iconArray += `fa-${props.iconStyle} `;
    }
    if (isDefined(props.icon)) {
      iconArray += `fa-${props.icon} `;
    }
    if (props.border) {
      iconArray += `fa-border `;
    }
    if (props.inverse) {
      iconArray += `fa-inverse `;
    }
    return iconArray;
  });
</script>

<template>
  <font-awesome-icon class="fa-icon" :icon="icon" :size="size" />
</template>
<style lang="scss" scoped>
  .fa-icon {
    width: auto;
  }
</style>

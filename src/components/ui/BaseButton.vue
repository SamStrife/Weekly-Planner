<template>
  <ui-button raised :icon="icon" color="#ffff">
    <slot></slot>
  </ui-button>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    icon: {
      type: String,
      required: null,
      default: null,
    },
  },
};
</script>

<style scoped></style>

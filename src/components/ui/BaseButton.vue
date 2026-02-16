<template>
  <button class="base-button" :type="type ?? 'button'">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit' | 'reset'
}>()
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;

.base-button {
  background-color: $primary-color;
  color: $color-white;
  border: none;
  border-radius: $border-radius-small;
  padding: 6px $padding-small;
  font-weight: $font-weight-medium;
  cursor: pointer;
  letter-spacing: $letter-spacing-small;
}

.base-button:hover {
  background-color: $primary-color-hover;
}
</style>

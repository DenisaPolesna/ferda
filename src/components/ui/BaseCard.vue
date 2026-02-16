<template>
  <div class="base-card">
    <div v-if="title" class="base-card__header">{{ title }}</div>
    <div class="base-card__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.base-card {
  border: 1px solid $light-gray-color;
  border-radius: $border-radius-small;
  width: 100%;
}

.base-card__header {
  background-color: $light-gray-color-2;
  font-weight: $font-weight-medium;
  font-size: $font-size-small;
  @include card-padding;
  border-bottom: 1px solid $light-gray-color;
}

.base-card__content {
  @include card-padding;
}
</style>

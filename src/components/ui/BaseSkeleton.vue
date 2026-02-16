<template>
  <span
    class="base-skeleton"
    :class="{ 'base-skeleton--circle': circle }"
    :style="skeletonStyle"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    width?: string | number
    height?: string | number
    circle?: boolean
  }>(),
  {
    width: '100%',
    height: '1em',
    circle: false,
  },
)

const skeletonStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
}))
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;

.base-skeleton {
  display: inline-block;
  background: linear-gradient(
    90deg,
    $light-gray-color 25%,
    $light-gray-color-2 50%,
    $light-gray-color 75%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
  border-radius: $border-radius-small;
  vertical-align: middle;
}

.base-skeleton--circle {
  border-radius: $border-radius-full;
}

@keyframes skeleton-shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>

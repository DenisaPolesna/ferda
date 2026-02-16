<template>
  <label class="base-toggle">
    <input
      type="checkbox"
      class="base-toggle__input"
      :checked="modelValue"
      :aria-label="ariaLabel"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span class="base-toggle__slider"></span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean
  ariaLabel?: string
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;

.base-toggle {
  position: relative;
  display: inline-block;
  width: 42px;
  height: 24px;
}

.base-toggle__input {
  opacity: 0;
  width: 0;
  height: 0;
}

.base-toggle__slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: $gray-color;
  border-radius: $border-radius-medium;
  transition: $transition-medium;
}

.base-toggle__slider::before {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  left: 3px;
  bottom: 3px;
  background-color: $color-white;
  border-radius: $border-radius-full;
  transition: $transition-medium;
}

.base-toggle__input:checked + .base-toggle__slider {
  background-color: $primary-color;
}

.base-toggle__input:checked + .base-toggle__slider::before {
  transform: translateX(18px);
}
</style>

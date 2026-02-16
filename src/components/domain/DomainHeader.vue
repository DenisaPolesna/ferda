<template>
  <div class="domain-header">
    <h1 class="domain-header__title">{{ domainName }}</h1>
    <div class="domain-header__verbose">
      <BaseToggle
        :model-value="verbose"
        @update:model-value="$emit('update:verbose', $event)"
        :aria-label="$t('labels.verboseView')"
      />
      <span class="domain-header__toggle-text">{{ $t('labels.verboseView') }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseToggle from '@/components/ui/BaseToggle.vue'

defineProps<{
  domainName: string
  verbose: boolean
}>()

defineEmits<{
  'update:verbose': [value: boolean]
}>()
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.domain-header {
  @include flex-col;
  gap: $spacing-medium;
}

.domain-header__title {
  font-size: $font-size-large;
  font-weight: $font-weight-bold;
}

.domain-header__verbose {
  @include flex-center;
  gap: $spacing-small;
}

.domain-header__toggle-text {
  font-size: $font-size-small;
  color: $dark-gray-color;
}
</style>

<template>
  <div class="domain-detail-skeleton">
    <div v-if="showHeader" class="domain-detail-skeleton__header">
      <BaseSkeleton class="domain-detail-skeleton__title" height="2rem" width="280px" />
      <div class="domain-detail-skeleton__verbose">
        <BaseSkeleton :width="44" :height="24" class="domain-detail-skeleton__toggle" />
        <BaseSkeleton width="90px" height="1rem" />
      </div>
    </div>

    <div class="domain-detail-skeleton__layout">
      <div class="domain-detail-skeleton__main">
        <div v-for="i in 3" :key="i" class="domain-detail-skeleton__card">
          <BaseSkeleton class="domain-detail-skeleton__card-header" height="2.5rem" />
          <div class="domain-detail-skeleton__card-content">
            <BaseSkeleton v-for="j in i === 1 ? 2 : 4" :key="j" height="1.25rem" />
          </div>
        </div>
      </div>

      <aside class="domain-detail-skeleton__aside">
        <div v-for="i in 3" :key="i" class="domain-detail-skeleton__card">
          <BaseSkeleton class="domain-detail-skeleton__card-header" height="2.5rem" />
          <div class="domain-detail-skeleton__card-content">
            <BaseSkeleton v-for="j in 3" :key="j" height="1.25rem" />
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseSkeleton from '@/components/ui/BaseSkeleton.vue'

withDefaults(
  defineProps<{
    showHeader?: boolean
  }>(),
  { showHeader: true },
)
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.domain-detail-skeleton {
  @include flex-col;
  gap: $spacing-medium;
}

.domain-detail-skeleton__header {
  @include flex-col;
  gap: $spacing-medium;
}

.domain-detail-skeleton__verbose {
  @include flex-center;
  gap: $spacing-small;
}

.domain-detail-skeleton__toggle {
  border-radius: $border-radius-medium;
}

.domain-detail-skeleton__layout {
  @include flex-col;
  gap: $spacing-medium;
  align-items: flex-start;

  @include desktop {
    flex-direction: row;
  }
}

.domain-detail-skeleton__main {
  @include flex-col;
  gap: $spacing-medium;
  flex: 1;
  width: 100%;
}

.domain-detail-skeleton__aside {
  @include flex-col;
  gap: $spacing-medium;
  width: 100%;

  @include desktop {
    width: $side-panel-width;
  }
}

.domain-detail-skeleton__card {
  border: 1px solid $light-gray-color;
  border-radius: $border-radius-small;
  overflow: hidden;
}

.domain-detail-skeleton__card .base-skeleton {
  display: block;
  width: 100%;
  border-radius: 0;
}

.domain-detail-skeleton__card-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-small;
  padding: $padding-xsmall $padding-small;
}
</style>

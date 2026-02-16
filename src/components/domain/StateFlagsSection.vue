<template>
  <BaseCard :title="$t('labels.stateFlags')">
    <div class="state-flags-section__grid">
      <div
        v-for="column in flagColumns"
        :key="column.map((f) => f.name).join('-') || flagColumns.indexOf(column)"
        class="state-flags-section__column"
      >
        <div
          v-for="flag in column"
          :key="flag.name"
          :class="[
            'state-flags-section__flag',
            flag.active
              ? 'state-flags-section__flag--active'
              : 'state-flags-section__flag--inactive',
          ]"
        >
          <i
            :class="[
              'pi',
              'state-flags-section__flag-icon',
              flag.active ? 'pi-check-circle' : 'pi-times-circle',
            ]"
            aria-hidden="true"
          ></i>
          <span>{{ flag.description }}</span>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { StateFlags, StateFlag } from '@/types/domain'
import BaseCard from '@/components/ui/BaseCard.vue'

const props = defineProps<{
  stateFlags: StateFlags
  verbose: boolean
}>()

const COLUMN_COUNT = 3

const flagColumns = computed<StateFlag[][]>(() => {
  const flags = props.verbose
    ? props.stateFlags.flags
    : props.stateFlags.flags.filter((f) => f.active)

  const size = Math.ceil(flags.length / COLUMN_COUNT)
  const columns: StateFlag[][] = []
  for (let i = 0; i < COLUMN_COUNT; i++) {
    columns.push(flags.slice(i * size, (i + 1) * size))
  }
  return columns
})
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.state-flags-section__grid {
  display: grid;
  gap: $spacing-medium;
  font-size: $font-size-small;
  grid-template-columns: 1fr;

  @include mobile {
    grid-template-columns: repeat(2, 1fr);
  }
  @include tablet {
    grid-template-columns: repeat(3, 1fr);
  }
}

.state-flags-section__column {
  @include flex-col;
  gap: $spacing-medium;
}

.state-flags-section__flag--active {
  color: $success-color;
}

.state-flags-section__flag--inactive {
  color: $error-color;
}

.state-flags-section__flag-icon {
  margin-right: $spacing-xsmall;
  font-size: $font-size-xsmall;
}
</style>

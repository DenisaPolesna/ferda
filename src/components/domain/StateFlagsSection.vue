<template>
  <BaseCard :title="$t('labels.stateFlags')">
    <div
      class="state-flags-section__grid"
      :class="{ 'state-flags-section__grid--verbose': verbose }"
    >
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

/** Fallback when API has no groups */
const FALLBACK_COLUMNS: string[][] = [
  [
    'serverBlocked',
    'serverDeleteProhibited',
    'serverRegistrantChangeProhibited',
    'serverRenewProhibited',
    'serverTransferProhibited',
    'deleteCandidate',
    'serverUpdateProhibited',
  ],
  ['serverInzoneManual', 'serverOutzoneManual'],
  [
    'expired',
    'notValidated',
    'nssetMissing',
    'expirationWarning',
    'unguarded',
    'outzoneUnguarded',
    'outzoneUnguardedWarning',
    'outzone',
    'validationWarning2',
    'validationWarning1',
    'deleteWarning',
  ],
]

const flagColumns = computed<StateFlag[][]>(() => {
  const flags = props.verbose
    ? [...props.stateFlags.flags]
    : props.stateFlags.flags.filter((f) => f.active)

  if (!props.verbose) {
    flags.sort((a, b) => a.description.localeCompare(b.description))
    return [flags]
  }

  const flagsByName = new Map(flags.map((f) => [f.name, f]))
  const columnOrders =
    props.stateFlags.groups.length > 0
      ? props.stateFlags.groups
      : FALLBACK_COLUMNS

  const columns: StateFlag[][] = columnOrders.map(() => [])
  const assigned = new Set<string>()

  for (let i = 0; i < columnOrders.length; i++) {
    const col = columns[i]
    if (!col) continue
    for (const name of columnOrders[i] ?? []) {
      const flag = flagsByName.get(name)
      if (flag) {
        col.push(flag)
        assigned.add(name)
      }
    }
  }

  const remaining = flags.filter((f) => !assigned.has(f.name))
  remaining.sort((a, b) => a.description.localeCompare(b.description))
  if (remaining.length > 0) {
    columns.push(remaining)
  }

  for (const col of columns) {
    col.sort((a, b) => a.description.localeCompare(b.description))
  }

  const filtered = columns.filter((col) => col.length > 0)
  return filtered.length > 0 ? filtered : [flags]
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
  row-gap: 40px;

  &--verbose {
    @include mobile {
      grid-template-columns: repeat(2, 1fr);
    }
    @include tablet {
      grid-template-columns: repeat(3, 1fr);
    }
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

<template>
  <div class="domain-main-panel">
    <AuthInfoRow :domain-expires-at="domainExpiresAt" />
    <EventsSection :events="domainEvents" />
    <StateFlagsSection :state-flags="domainStateFlags" :verbose="verbose" />
  </div>
</template>

<script setup lang="ts">
import type { Events, StateFlags } from '@/types/domain'
import EventsSection from './EventsSection.vue'
import StateFlagsSection from './StateFlagsSection.vue'
import AuthInfoRow from './AuthInfoRow.vue'

defineProps<{
  domainEvents: Events
  domainStateFlags: StateFlags
  domainExpiresAt: string
  verbose: boolean
}>()
</script>

<style scoped lang="scss">
@use '@/scss/mixins' as *;
@use '@/scss/variables' as *;

.domain-main-panel {
  @include flex-col;
  gap: $spacing-medium;
  flex: 1;
  width: 100%;
}
</style>

<template>
  <div class="domain-view">
    <DomainHeader
      :domain-name="domain.fqdn"
      :verbose="verbose"
      @update:verbose="$emit('update:verbose', $event)"
    />

    <Suspense>
      <div class="domain-view__layout">
        <DomainMainPanel
          :domain-events="domain.events"
          :domain-state-flags="domain.state_flags"
          :domain-expires-at="domain.expires_at"
          :verbose="verbose"
        />
        <DomainAsidePanel :domain="domain" :verbose="verbose" />
      </div>
      <template #fallback>
        <DomainDetailSkeleton :show-header="false" class="domain-view__skeleton" />
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import type { DomainDetail } from '@/types/domain'
import DomainDetailSkeleton from '@/components/domain/DomainDetailSkeleton.vue'
import DomainHeader from '@/components/domain/DomainHeader.vue'

const DomainMainPanel = defineAsyncComponent(
  () => import('@/components/domain/DomainMainPanel.vue'),
)
const DomainAsidePanel = defineAsyncComponent(
  () => import('@/components/domain/DomainAsidePanel.vue'),
)

defineProps<{
  domain: DomainDetail
  verbose: boolean
}>()

defineEmits<{
  'update:verbose': [value: boolean]
}>()
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.domain-view {
  @include flex-col;
  gap: $spacing-medium;
}

.domain-view__layout {
  @include flex-col;
  gap: $spacing-medium;
  align-items: flex-start;

  @include desktop {
    flex-direction: row;
  }
}
</style>

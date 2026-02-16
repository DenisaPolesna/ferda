<template>
  <BaseCard :title="$t('labels.events')">
    <div class="events-grid">
      <template v-for="event in eventRows" :key="event.label">
        <div class="event-label">{{ event.label }}:</div>
        <div class="event-date">{{ event.timestamp ? formatDate(event.timestamp) : '' }}</div>
        <div class="event-label" v-if="event.timestamp">{{ $t('labels.registrar') }}</div>
        <div class="event-label" v-else></div>
        <div class="event-registrar-value">
          <a v-if="event.registrar" :href="`#${event.registrar}`">
            {{ event.registrar }}
          </a>
        </div>
      </template>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import { formatDate } from '@/utils/formatDate'
import type { Events } from '@/types/domain'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<{
  events: Events
}>()

const { t } = useI18n()

interface EventRow {
  label: string
  timestamp: string | null
  registrar: string | null
}

const eventRows = computed<EventRow[]>(() => [
  {
    label: t('labels.createDate'),
    timestamp: props.events.registered?.timestamp ?? null,
    registrar: props.events.registered?.registrar_handle ?? null,
  },
  {
    label: t('labels.updateDate'),
    timestamp: props.events.updated?.timestamp ?? null,
    registrar: props.events.updated?.registrar_handle ?? null,
  },
  {
    label: t('labels.transferDate'),
    timestamp: props.events.transferred?.timestamp ?? null,
    registrar: props.events.transferred?.registrar_handle ?? null,
  },
  {
    label: t('labels.deleteDate'),
    timestamp: props.events.unregistered?.timestamp ?? null,
    registrar: props.events.unregistered?.registrar_handle ?? null,
  },
])
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.events-grid {
  display: grid;
  grid-template-columns: 100px auto;
  gap: $spacing-medium;
  font-size: $font-size-small;

  @include mobile {
    grid-template-columns: 100px auto 90px auto;
  }

  @include desktop {
    grid-template-columns: 100px auto auto auto;
  }
}

.event-label {
  font-weight: $font-weight-medium;
}
</style>

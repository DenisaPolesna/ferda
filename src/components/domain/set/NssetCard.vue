<template>
  <BaseCard :title="$t('labels.nsset')">
    <table class="nsset-card__table">
      <tbody>
        <tr class="nsset-card__row">
          <td class="nsset-card__label nsset-card__cell">{{ $t('labels.handle') }}</td>
          <td class="nsset-card__cell">
            <a :href="`#${nsset.handle}`">{{ nsset.handle }}</a>
          </td>
        </tr>
        <tr class="nsset-card__row">
          <td class="nsset-card__label nsset-card__cell">{{ $t('labels.registrar') }}</td>
          <td class="nsset-card__cell">
            <a :href="`#${nsset.registrar}`">{{ nsset.registrar }}</a>
          </td>
        </tr>
        <tr class="nsset-card__row">
          <td class="nsset-card__label nsset-card__cell">{{ $t('labels.dns') }}</td>
          <td class="nsset-card__dns-list nsset-card__cell">
            <div v-for="dns in nsset.dns" :key="dns.name">
              {{ dns.name }} ({{ dns.ip_address }})
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import type { NsSet } from '@/types/domain'

defineProps<{
  nsset: NsSet
}>()
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.nsset-card__table {
  @include table-spacing('nsset-card');
}

.nsset-card__label {
  @include table-label;
}

.nsset-card__dns-list {
  word-break: break-all;
  color: $dark-gray-color;
}
</style>

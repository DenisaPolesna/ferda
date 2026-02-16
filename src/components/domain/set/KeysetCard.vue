<template>
  <BaseCard :title="$t('labels.keyset')">
    <table class="keyset-card__table">
      <tbody>
        <tr class="keyset-card__row">
          <td class="keyset-card__label keyset-card__cell">{{ $t('labels.handle') }}</td>
          <td class="keyset-card__cell">
            <a :href="`#${keyset.handle}`">{{ keyset.handle }}</a>
          </td>
        </tr>
        <tr class="keyset-card__row">
          <td class="keyset-card__label keyset-card__cell">{{ $t('labels.registrar') }}</td>
          <td class="keyset-card__cell">
            <a :href="`#${keyset.registrar}`">{{ keyset.registrar }}</a>
          </td>
        </tr>
        <tr class="keyset-card__row">
          <td class="keyset-card__label keyset-card__cell">{{ $t('labels.dnsKeys') }}</td>
          <td class="keyset-card__dns-keys keyset-card__cell">
            <div v-for="dnsKey in keyset.dns_keys" :key="dnsKey" class="keyset-card__dns-key">
              {{ dnsKey }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import type { KeySet } from '@/types/domain'

defineProps<{
  keyset: KeySet
}>()
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.keyset-card__table {
  @include table-spacing('keyset-card');
}

.keyset-card__label {
  @include table-label;
}

.keyset-card__dns-keys {
  @include flex-col;
  gap: $spacing-small;
}

.keyset-card__dns-key {
  word-break: break-all;
  color: $dark-gray-color;
}
</style>

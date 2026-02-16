<template>
  <BaseCard :title="$t('labels.adminContacts')">
    <table class="contact-list-card__table">
      <tbody>
        <tr
          v-for="contact in contacts"
          :key="contact.handle"
          v-memo="[contact.handle, contact.name]"
          class="contact-list-card__row"
        >
          <td class="contact-list-card__label contact-list-card__cell">{{ contact.name }}:</td>
          <td class="contact-list-card__cell">
            <a :href="`#${contact.handle}`">{{ contact.handle }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </BaseCard>
</template>

<script setup lang="ts">
import type { Contact } from '@/types/domain'
import BaseCard from '@/components/ui/BaseCard.vue'

defineProps<{
  contacts: Contact[]
}>()
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.contact-list-card__table {
  @include table-spacing('contact-list-card');
}

.contact-list-card__label {
  @include table-label;
}
</style>

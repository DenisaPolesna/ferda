<template>
  <BaseCard :title="title">
    <table class="contact-card__table">
      <tbody>
        <tr class="contact-card__row">
          <td class="contact-card__label contact-card__cell">{{ $t('labels.handle') }}</td>
          <td class="contact-card__cell">
            <a class="contact-card__link" :href="`#${contact.handle}`">{{ contact.handle }}</a>
          </td>
        </tr>
        <tr class="contact-card__row">
          <td class="contact-card__label contact-card__cell">
            <i
              :class="['pi', 'contact-card__icon', ...publishIcon(contact.publish.organization)]"
              aria-hidden="true"
            ></i>
            {{ $t('labels.organization') }}
          </td>
          <td class="contact-card__organization contact-card__cell">{{ contact.organization }}</td>
        </tr>
        <tr class="contact-card__row">
          <td class="contact-card__label contact-card__cell">
            <i
              :class="['pi', 'contact-card__icon', ...publishIcon(contact.publish.name)]"
              aria-hidden="true"
            ></i>
            {{ $t('labels.name') }}
          </td>
          <td class="contact-card__name contact-card__cell">{{ contact.name }}</td>
        </tr>
      </tbody>
    </table>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import type { Contact } from '@/types/domain'

defineProps<{
  title: string
  contact: Contact
}>()

function publishIcon(published: boolean): string[] {
  return [
    published ? 'pi-eye' : 'pi-eye-slash',
    published ? 'contact-card__icon--published' : 'contact-card__icon--hidden',
  ]
}
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.contact-card__table {
  @include table-spacing('contact-card');
}

.contact-card__label {
  @include table-label;
}

.contact-card__row:first-child .contact-card__label {
  padding-left: calc(#{$font-size-small} + 8px);
}

.contact-card__link {
  color: $link-color;
}

.contact-card__icon {
  font-size: $font-size-small;
  margin-right: 4px;
}

.contact-card__icon--published {
  color: $success-color;
}

.contact-card__icon--hidden {
  color: $error-color;
}

.contact-card__organization,
.contact-card__name {
  color: $dark-gray-color;
}
</style>

<template>
  <aside class="domain-aside-panel">
    <ContactCard :title="$t('labels.owner')" :contact="domain.owner" />

    <template v-if="verbose">
      <ContactCard
        v-for="contact in domain.administrative_contacts"
        :key="contact.handle"
        v-memo="[contact.handle, verbose]"
        :title="$t('labels.adminContact')"
        :contact="contact"
      />
    </template>

    <ContactListCard v-else :contacts="domain.administrative_contacts" />
    <NssetCard :nsset="domain.nsset" />
    <KeysetCard :keyset="domain.keyset" />
  </aside>
</template>

<script setup lang="ts">
import ContactListCard from '@/components/domain/contact/ContactListCard.vue'
import NssetCard from '@/components/domain/set/NssetCard.vue'
import KeysetCard from '@/components/domain/set/KeysetCard.vue'
import type { DomainDetail } from '@/types/domain'
import ContactCard from '@/components/domain/contact/ContactCard.vue'

defineProps<{
  domain: DomainDetail
  verbose: boolean
}>()
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.domain-aside-panel {
  @include flex-col;
  gap: $spacing-medium;
  width: 100%;

  @include desktop {
    width: $side-panel-width;
  }
}
</style>

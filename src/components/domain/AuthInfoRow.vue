<template>
  <BaseCard>
    <div class="auth-info-row">
      <div class="auth-info-row__container">
        <span class="auth-info-row__label">{{ $t('labels.authInfo') }}</span>
        <BaseButton v-if="!revealed" @click="reveal" :aria-label="$t('aria.showAuthInfo')">{{
          $t('labels.show')
        }}</BaseButton>

        <template v-else>
          <div class="auth-info-row__secret-container">
            <BaseButton @click="reveal" :aria-label="$t('aria.hideAuthInfo')">{{
              $t('labels.hide')
            }}</BaseButton>
            <span class="auth-info-row__secret">{{ secret }}</span>
          </div>
        </template>
      </div>
      <div class="auth-info-row__container">
        <span class="auth-info-row__label">{{ $t('labels.expiresAt') }}</span>
        <span>{{ formatDate(domainExpiresAt) }}</span>
      </div>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import { MOCK_AUTH_SECRET } from '@/mocks/auth'
import { formatDate } from '@/utils/formatDate'
import { ref } from 'vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

defineProps<{
  domainExpiresAt: string
}>()

const secret = MOCK_AUTH_SECRET
const revealed = ref(false)

function reveal(): void {
  revealed.value = !revealed.value
}
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.auth-info-row {
  @include flex-col;
  gap: $spacing-medium;
  font-size: $font-size-small;
}

.auth-info-row__container {
  @include flex-center;
  gap: $spacing-medium;
}

.auth-info-row__label {
  font-weight: $font-weight-medium;
  min-width: $label-min-width;
}

.auth-info-row__secret-container {
  @include flex-center;
  gap: $spacing-small;
}

.auth-info-row__secret {
  font-family: monospace;
}
</style>

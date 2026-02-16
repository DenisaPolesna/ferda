<template>
  <div class="app">
    <AppHeader />

    <div class="app__body">
      <AppSidebar />

      <main class="app__main-content">
        <DomainViewAsync v-if="domain" :domain="domain" v-model:verbose="verbose" />

        <div v-else-if="error" class="app__error">{{ error }}</div>
        <DomainDetailSkeleton v-else class="app__skeleton" />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import AppHeader from './components/layout/header/AppHeader.vue'
import AppSidebar from './components/layout/AppSidebar.vue'

import DomainDetailSkeleton from './components/domain/DomainDetailSkeleton.vue'
import { useDomainDetail } from './composables/useDomainDetail'

const DomainViewAsync = defineAsyncComponent(() => import('./views/DomainView.vue'))

const { domain, error } = useDomainDetail()
const verbose = ref<boolean>(false)
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.app {
  min-height: 100vh;
  @include flex-col;
}

.app__body {
  @include flex-col;
  flex: 1;

  @include tablet {
    flex-direction: row;
  }
}

.app__main-content {
  flex: 1;
  padding: $padding-medium $padding-large;
  min-width: 0;
  @include flex-col;
  gap: $spacing-medium;
}

.app__error {
  font-size: $font-size-base;
  padding: $padding-section 0;
  color: $error-color;
}
</style>

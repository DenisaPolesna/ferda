<template>
  <aside class="app-sidebar" :aria-label="$t('aria.mainNav')">
    <div class="app-sidebar__section-title">{{ $t('nav.applications') }}</div>
    <nav :aria-label="$t('aria.applications')">
      <ul class="app-sidebar__nav">
        <li class="app-sidebar__item app-sidebar__item--active">
          <i class="pi pi-globe" aria-hidden="true"></i>
          <span class="app-sidebar__item-text">{{ $t('nav.registry') }}</span>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import 'primeicons/primeicons.css'
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.app-sidebar {
  width: 100%;
  background: $light-gray-color-2;
  border-right: 1px solid $light-gray-color;

  @include tablet {
    flex-shrink: 0;
    width: $sidebar-width;
    min-height: calc(100vh - #{$header-height});
  }
}

.app-sidebar__section-title {
  font-size: $font-size-small;
  color: $dark-gray-color;
  font-weight: $font-weight-medium;
  padding: $padding-small;
  letter-spacing: $letter-spacing-small;
}

.app-sidebar__nav {
  list-style: none;
  padding: 0;
  margin: 0;
}

.app-sidebar__item {
  display: flex;
  align-items: center;
  gap: $spacing-medium;
  padding: $padding-xsmall $padding-small;
  cursor: pointer;
  font-size: $font-size-small;
  color: $text-color;
}

.app-sidebar__item--active {
  background-color: $selected-color;
  font-weight: $font-weight-medium;
}
</style>

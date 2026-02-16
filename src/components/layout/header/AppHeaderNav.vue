<template>
  <div class="app-header-nav">
    <button class="app-header-nav__trigger" :aria-label="$t('nav.menu')">&#9776;</button>
    <span class="app-header-nav__title">{{ $t('nav.title') }}</span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use '@/scss/variables' as *;

.app-header-nav {
  display: flex;
  align-items: center;
  gap: $padding-small;
}

.app-header-nav__trigger {
  background: none;
  border: none;
  color: $color-white;
  cursor: pointer;
  font-size: $font-size-large;
  padding: $spacing-xsmall;
}

.app-header-nav__title {
  font-size: $font-size-medium;
  font-weight: $font-weight-medium;
}
</style>

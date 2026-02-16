<template>
  <header class="app-header">
    <AppHeaderNav />
    <AppHeaderUser />
  </header>
</template>

<script setup lang="ts">
import AppHeaderUser from './AppHeaderUser.vue'
import AppHeaderNav from './AppHeaderNav.vue'
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.app-header {
  background-color: $primary-color;
  color: $color-white;
  height: $header-height;
  @include flex-center;
  justify-content: space-between;
  padding: 0 $padding-small;
  position: sticky;
  top: 0;
  z-index: $z-index-header;
}
</style>

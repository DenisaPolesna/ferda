<template>
  <div class="app-header-user">
    <button
      class="app-header-user__trigger"
      @click="toggleMenu"
      :aria-label="$t('user.menu')"
      :aria-expanded="menuOpen"
      aria-haspopup="menu"
      :aria-controls="menuOpen ? 'user-menu' : undefined"
    >
      <i class="pi pi-user" aria-hidden="true"></i>
      <span class="app-header-user__name">{{ user.name.toUpperCase() }}</span>
    </button>
    <div v-if="menuOpen" id="user-menu" class="app-header-user__menu" role="menu">
      <div class="app-header-user__menu-profile">
        <i class="pi pi-user"></i>
        <div class="app-header-user__menu-info">
          <div class="app-header-user__menu-name">{{ user.name }}</div>
          <div class="app-header-user__menu-role">{{ user.role }}</div>
        </div>
      </div>
      <div class="app-header-user__menu-divider"></div>
      <button class="app-header-user__menu-item" role="menuitem" :aria-label="$t('aria.logout')">
        <i class="pi pi-sign-out" aria-hidden="true"></i>
        {{ $t('user.logout') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import 'primeicons/primeicons.css'
import { MOCK_USER_NAME, MOCK_USER_ROLE } from '@/mocks/auth'

const user = { name: MOCK_USER_NAME, role: MOCK_USER_ROLE }
const menuOpen = ref(false)

function toggleMenu(): void {
  menuOpen.value = !menuOpen.value
}

function handleClickOutside(event: MouseEvent): void {
  const el = document.querySelector('.app-header-user')
  if (el && !el.contains(event.target as Node)) {
    menuOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onUnmounted(() => document.removeEventListener('click', handleClickOutside))
</script>

<style scoped lang="scss">
@use '@/scss/variables' as *;
@use '@/scss/mixins' as *;

.app-header-user {
  position: relative;
}

.app-header-user__trigger {
  background: none;
  border: none;
  color: $color-white;
  cursor: pointer;
  @include flex-center;
  gap: $spacing-small;
  font-size: $font-size-small;
  font-weight: $font-weight-medium;
  letter-spacing: $letter-spacing-small;
  padding: $padding-xsmall $padding-small;
}

.app-header-user__menu {
  position: absolute;
  right: 0;
  top: calc(100% + #{$dropdown-offset});
  background: $color-white;
  color: $text-color;
  border-radius: $border-radius-small;
  box-shadow: $dropdown-shadow;
  min-width: $dropdown-min-width;
  z-index: $z-index-dropdown;
  overflow: hidden;
}

.app-header-user__menu-profile {
  @include flex-center;
  gap: $spacing-medium;
  padding: $padding-small;
}

.app-header-user__menu-avatar {
  font-size: $font-size-large;
  color: $dark-gray-color;
  line-height: 1;
}

.app-header-user__menu-info {
  @include flex-col;
  gap: $spacing-small;
}

.app-header-user__menu-name {
  font-weight: $font-weight-medium;
  font-size: $font-size-small;
  color: $text-color;
}

.app-header-user__menu-role {
  font-size: $font-size-small;
  color: $dark-gray-color;
}

.app-header-user__menu-divider {
  height: 1px;
  background: $light-gray-color;
}

.app-header-user__menu-item {
  @include flex-center;
  gap: $spacing-small;
  width: 100%;
  padding: $padding-medium $padding-small;
  background: none;
  border: none;
  cursor: pointer;
  font-size: $font-size-small;
  color: $text-color;
  text-align: left;
}

.app-header-user__menu-item:hover {
  background-color: $light-gray-color-2;
}

.app-header-user__menu-item-icon {
  font-size: $font-size-base;
  color: $dark-gray-color;
}
</style>

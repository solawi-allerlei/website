<script lang="ts" setup>
import logo from '@/assets/images/logo.webp'
import DotsHamburgerMenu from './generic/DotsHamburgerMenu.vue'
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="header-wrapper">
    <div class="container_header">
      <div class="logo-text-group">
        <img class="logo" :src="logo" alt="Solawi Allerlei Logo" />
        <RouterLink to="/" class="header-text nav-link">Solawi Allerlei</RouterLink>
      </div>
      <DotsHamburgerMenu/>
    </div>
  </header>
</template>

<style scoped>
.header-wrapper {
  position: sticky;
  top: 0;
  width: 100%;
  background: var(--color-highlight-background);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.container_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  max-width: 100%;
  padding: 0.5rem 1rem;
}

.logo {
  min-width: 80px;
  max-width: 100px;
  height: auto;
}

.header-text {
  font-size: 25pt;
}

.logo-text-group {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.nav-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease;
  white-space: nowrap;
}

.nav-link:hover {
  background-color: #f0f0f0;
}

@media (max-width: 640px) {
  .container_header {
    gap: 12px;
    padding: 0.5rem 0.75rem;
  }

  .logo {
    min-width: 56px;
    max-width: 64px;
  }

  .header-text {
    font-size: clamp(1.1rem, 5vw, 1.5rem);
  }

  .logo-text-group {
    gap: 8px;
    flex: 1;
  }

  .nav-link {
    padding: 0.25rem 0.4rem;
  }
}
</style>

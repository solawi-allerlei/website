<script lang="ts" setup>
import logo from '@/assets/images/logo.webp'
import DotsHamburgerMenu from './generic/DotsHamburgerMenu.vue'
</script>

<template>
  <header class="header-wrapper">
    <div class="container_header">
      <img class="logo" :src="logo" alt="Solawi Allerlei Logo" />
      <span class="header-text">Solawi Allerlei</span>
      <DotsHamburgerMenu />
    </div>
  </header>
</template>

<style scoped>
.header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #DBEFF8;
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
  max-width: 1200px;
  width: 100%;
  padding: 0.5rem 1rem;
}

.logo {
  min-width: 80px;
  max-width: 100px;
  height: auto;
}

.header-text {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
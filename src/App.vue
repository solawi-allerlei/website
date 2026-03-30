<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div id="app">
    <Header />
    <div class="app-content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-content {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
</style>

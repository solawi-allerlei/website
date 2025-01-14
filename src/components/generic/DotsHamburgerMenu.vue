<script lang="ts" setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="hamburger-container container_header_item">
    <button
      @click="toggleMenu"
      class="hamburger-button"
      :aria-expanded="isMenuOpen"
      aria-controls="main-menu"
      aria-label="Menü öffnen"
      type="button"
    >
      <svg
        class="dots"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <circle cx="10" cy="16" r="2.5"></circle>
        <circle cx="16" cy="16" r="2.5"></circle>
        <circle cx="22" cy="16" r="2.5"></circle>
      </svg>
    </button>
    <nav v-if="isMenuOpen" id="main-menu" class="menu" aria-label="Hauptmenü">
      <RouterLink to="/" @click="toggleMenu" class="menu-item"
        >Startseite</RouterLink>
      <RouterLink to="/solawi" @click="toggleMenu" class="menu-item"
        >Was ist Solawi?</RouterLink>
      <RouterLink to="/organisation" @click="toggleMenu" class="menu-item"
        >Wer ist die Allerlei?</RouterLink>
      <RouterLink to="/participate" @click="toggleMenu" class="menu-item"
        >Mitmachen!</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.hamburger-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.container_header_item {
  align-self: center;
}

.hamburger-button {
  --btn-size: 32px;
  --dot-color: #000;

  display: inline-grid;
  place-items: center;
  width: var(--btn-size);
  height: var(--btn-size);
  padding: 0;
  border: none;
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--dot-color);
}
.hamburger-button:hover {
  background-color: #ddd;
}
.hamburger-button:focus-visible {
  outline: 1px solid #1d4ed8;
  outline-offset: 2px;
}

.dots {
  display: block;
}
.dots circle {
  fill: currentColor;
}

.menu {
  position: absolute;
  top: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  background-color: #fff;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.menu-item {
  text-decoration: none;
  font-size: 20px;
  color: #000;
  opacity: 0;
  transform: translateY(-5px);
  animation: fadeIn 0.2s ease-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

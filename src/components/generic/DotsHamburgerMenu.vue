<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { RouterLink } from "vue-router";

const containerRef = ref<HTMLElement | null>(null);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleDocumentClick = (event: MouseEvent) => {
  if (!isMenuOpen.value || !containerRef.value) {
    return;
  }

  const target = event.target;

  if (target instanceof Node && !containerRef.value.contains(target)) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick);
  document.body.style.overflow = "";
});

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});
</script>

<template>
  <div ref="containerRef" class="hamburger-container container_header_item">
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
      <button
        class="menu-close"
        type="button"
        aria-label="Menü schließen"
        @click="toggleMenu"
      >
        <span aria-hidden="true">×</span>
      </button>
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
  align-items: stretch;
  gap: 0.75rem;
  min-width: 272px;
  background-color: #fff;
  padding: 1rem 1.25rem 1.25rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  z-index: 10;
}

.menu-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 999px;
  background: transparent;
  color: #000;
  cursor: pointer;
  font-family: 'AmiamieRound', sans-serif;
  font-size: 2rem;
  line-height: 1;
}

.menu-item {
  display: block;
  width: 100%;
  text-decoration: none;
  font-size: 20px;
  color: #000;
  text-align: left;
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

@media (max-width: 640px) {
  .menu {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 72px;
    justify-content: center;
    gap: 1rem;
    padding: 2rem 1.5rem;
    background: rgba(255, 255, 255, 0.96);
    backdrop-filter: blur(6px);
    box-shadow: none;
    z-index: 1100;
  }

  .menu-item {
    font-size: clamp(1.75rem, 8vw, 2.4rem);
    text-align: center;
  }

  .menu-close {
    position: fixed;
    top: 18px;
    right: 12px;
  }
}
</style>

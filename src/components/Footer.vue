<script setup lang="ts">
import Menu, { type MenuLink } from './generic/Menu.vue';

const menuLinks: MenuLink[] = [
  { type: "internal", label: "Datenschutz", to: "/dataprotection" },
  { type: "internal", label: "Impressum", to: "/impress" },
  { type: "external", label: "Mastodon", href: "https://mastodon.social/@allerleisolawileipzig" },
  { type: "external", label: "Kontakt", href: "mailto:info.allerlei@posteo.de" },
]
</script>

<template>
  <footer class="footer">
    <Menu :links="menuLinks" />
  </footer>
</template>

<style scoped>
.footer {
  font-family: 'Amiamie', sans-serif;
  font-weight: 300;
  font-style: italic;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  color: black;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
</style>

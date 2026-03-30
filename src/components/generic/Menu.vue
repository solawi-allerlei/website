<template>
  <nav class="menu">
    <ul>
      <li v-for="link in links" :key="link.label">
        <RouterLink v-if="link.type === 'internal'" :to="link.to">
          {{ link.label }}
        </RouterLink>

        <a
          v-else-if="link.type === 'external'"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer">
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from "vue-router"

type InternalLink = {
  type: "internal"
  label: string
  to: string
}

type ExternalLink = {
  type: "external"
  label: string
  href: string
}

export type MenuLink = InternalLink | ExternalLink

const props = defineProps<{
  links: MenuLink[]
}>()
</script>

<style scoped>
.menu {
  width: 100%;
  max-width: 100%;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
  max-width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.menu li {
  min-width: 0;
}

.menu a,
.menu :deep(a.router-link-active) {
  text-decoration: none;
  color: black;
  font-weight: 600;
  display: inline-block;
  max-width: 100%;
}

@media (max-width: 640px) {
  .menu ul {
    gap: 0.5rem 1rem;
  }

  .menu a,
  .menu :deep(a.router-link-active) {
    font-size: 0.95rem;
  }
}

</style>

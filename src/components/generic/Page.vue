<script setup lang="ts">

export interface PageProps {
  title: string
  content: string
  urlPath: string
}

defineProps<PageProps>()
</script>

<template>
  <div class="page">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<style scoped>
.page {
  text-align: center;
  padding: 3rem;
}
</style>

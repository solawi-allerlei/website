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
    <h1 class="headline">{{ title }}</h1>
    <p>{{ content }}</p>
  </div>
</template>

<style scoped>
.headline {
  font-size: 25pt;
  font-family: 'AmiamieRound', sans-serif;
  font-weight: 400;
}
.page {
  padding-top: 120px;
  padding-bottom: 60px;
  text-align: center;
}
</style>

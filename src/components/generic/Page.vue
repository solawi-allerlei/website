<script setup lang="ts">
export interface PageProps {
  title: string
  content: string[]
  urlPath: string
}

defineProps<PageProps>()
</script>

<template>
  <div class="page">
    <h1 class="headline">{{ title }}</h1>

    <p
      v-for="(paragraph, index) in content"
      :key="index"
      class="content"
    >
      {{ paragraph }}
    </p>
  </div>
</template>

<style scoped>
.page {
  max-width: clamp(320px, 90vw, 720px);
  margin-left: auto;
  margin-right: auto;
  padding: 20px 16px 60px;
  text-align: left;
}

.headline {
  font-size: 25pt;
  font-family: 'AmiamieRound', sans-serif;
  font-weight: 400;
  margin-bottom: 24px;
}

.content {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.2em;
}
</style>
<script setup lang="ts">
import { RouterLink } from 'vue-router';

export interface TeaserProps {
  title: string
  teaserText: string
  pageUrl: string
}

defineProps<TeaserProps>()
</script>

<template>
  <div class="teaser">
    <h3>{{title}}</h3>
    <p>{{teaserText}} <RouterLink :to="pageUrl">weiterlesen</RouterLink></p>
    
  </div>
</template>

<style scoped>
.teaser {
  text-align: center;
  padding: 3rem;
}
</style>

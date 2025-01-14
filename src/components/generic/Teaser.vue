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
    <h3 class="teaser_title">{{title}}</h3>
    <p class="teaser_text">{{teaserText}}</p>
    <RouterLink :to="pageUrl" class="teaser_link">Weiterlesen</RouterLink>
  </div>
</template>

<style scoped>
.teaser {
  flex-wrap: wrap;
  display: flex;
  align-content: space-between;
  padding: 3rem;
}
.teaser_title{
  display: inline-block;
  background-color: var(--color-highlight-background);
  font-size: 25pt;
  font-family: 'AmiamieRound', sans-serif;
  font-weight: 400;
}
.teaser_text{
  font-size: 20pt;
  font-family: 'AmiamieRound', sans-serif;
  font-weight: 400;
}
.teaser_link{
  background-color: var(--color-link-background);
  border-radius: 30px;
  padding: 0.4em;
  color: black;
  text-decoration: none;
  font-size: 20pt;
  font-family: 'AmiamieRound', sans-serif;
  font-weight: 400;
}
.teaser_link a:hover {
  text-decoration: underline;
}
</style>

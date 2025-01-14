<script setup lang="ts">
import Teaser from './generic/Teaser.vue'
const props = {
  title: 'Wer ist die Allerlei?',
  teaserText: 'Der Verein und die Gärtnerei stellen sich vor. So organisieren wir uns, bewirtschaften unseren Boden, wachsen wir ...',
  pageUrl: '/organisation'
}
</script>

<template>
  <Teaser v-bind="props"></Teaser>
</template>

<style scoped>
</style>

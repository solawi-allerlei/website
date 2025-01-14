<script setup lang="ts">
import Teaser from './generic/Teaser.vue'
const props = {
  title: 'Mitmachen!',
  teaserText: 'So funktioniert\'s! Alles erklärt zu Mitgliedschaft, Gemüseanteil und Mitarbeit ...',
  pageUrl: '/participate'
}
</script>

<template>
  <Teaser v-bind="props"></Teaser>
</template>

<style scoped>
</style>

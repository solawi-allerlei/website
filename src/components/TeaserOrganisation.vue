<script setup lang="ts">
import Teaser from './generic/Teaser.vue'
const props = {
  title: 'Wer ist die Allerlei?',
  teaserText: 'Wir sind eine kleine solidarische Landwirtschaft (Solawi) und pachten seit 2015 als eingetragener Verein einen halben Hektar Land auf dem Gelände einer ehemaligen Gärtnerei in Leipzig Dölitz.',
  pageUrl: '/organisation'
}
</script>

<template>
  <Teaser v-bind="props"></Teaser>
</template>

<style scoped>
</style>

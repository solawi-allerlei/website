<script setup lang="ts">
import Teaser from './generic/Teaser.vue'
const props = {
  title: 'Mitmachen!',
  teaserText: 'Du möchtest Teil unserer Allerlei-Gemeinschaft werden und unser leckeres und abwechslungsreiches Gemüse beziehen? Hier findest du alles was du wissen musst.',
  pageUrl: '/participate'
}
</script>

<template>
  <Teaser v-bind="props"></Teaser>
</template>

<style scoped>
</style>

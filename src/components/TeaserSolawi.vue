<script setup lang="ts">
import Teaser from './generic/Teaser.vue'
import type { TeaserProps } from './generic/Teaser.vue';

const props: TeaserProps = {
  title: 'Was ist Solawi?',
  teaserText: 'Hier erklären wir dir wofür Solawi steht und was das bedeutet ...',
  pageUrl: '/solawi'
}
</script>

<template>
  <Teaser v-bind="props"></Teaser>
</template>

<style scoped>
</style>

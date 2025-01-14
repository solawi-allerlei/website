<script setup lang="ts">
import Teaser from './generic/Teaser.vue'
import type { TeaserProps } from './generic/Teaser.vue';

const props: TeaserProps = {
  title: 'Was ist Solawi?',
  teaserText: 'Solawi steht für solidarische Landwirtschaft. Wir wollen gemeinsam dafür sorgen, dass unsere Lebensmittel fair, ökologisch und zu auskömmlichen Preisen hergestellt und angeboten werden können.',
  pageUrl: '/solawi'
}
</script>

<template>
  <Teaser v-bind="props"></Teaser>
</template>

<style scoped>
</style>

<script setup lang="ts">
import Page from '../generic/Page.vue'
import type { PageProps } from '../generic/Page.vue';

const page: PageProps = {
  title: 'Datenschutz',
  urlPath: '/website/dataprotection',
  content: ['TBD']
}
</script>

<template>
  <Page v-bind="page"></Page>
</template>

<style scoped>
</style>

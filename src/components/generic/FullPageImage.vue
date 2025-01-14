<template>
  <img class="fullwidth-image" :src="src" alt="background" />
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
}>()
</script>

<style scoped>
.fullwidth-image {
  display: block;
  width: 100%;
  height: auto;
}
</style>
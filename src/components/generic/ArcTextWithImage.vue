<template>
  <div class="arc-with-image">
    <img :src="image" :alt="title" class="the-image" ref="imgEl" />

    <svg
      v-if="imgWidth > 0"
      class="arc-text"
      :viewBox="`0 0 ${imgWidth} ${arcHeight}`"
      :width="imgWidth"
      :height="arcHeight"
    >
      <defs>
        <path
          :id="pathId"
          :d="arcPath"
          fill="none"
        />
      </defs>
      <text :font-size="fontSize" font-weight="700" fill="#111827" text-anchor="middle">
        <textPath :href="`#${pathId}`" startOffset="50%">
          {{ title }}
        </textPath>
      </text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const props = defineProps<{
  title: string
  image: string
}>()

const imgEl = ref<HTMLImageElement | null>(null)
const imgWidth = ref(0)
const arcHeight = 120 // Höhe des Bogens
const fontSize = 32

onMounted(() => {
  if (imgEl.value) {
    imgWidth.value = imgEl.value.naturalWidth || imgEl.value.width
  }
})

const arcPath = computed(() => {
  const r = imgWidth.value / 2
  const y = arcHeight
  return `M 0,${y} A ${r},${r} 0 0 0 ${imgWidth.value},${y}`
})

const pathId = `arc-path-${Math.random().toString(36).slice(2)}`
</script>

<style scoped>
.arc-with-image {
  position: relative;
  display: inline-block;
}

.the-image {
  display: block;
  height: auto;
}

.arc-text {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 2;
}
</style>
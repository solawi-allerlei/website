<template>
  <div class="logo-wrapper">
    <div class="logo">
      <svg
        :width="size"
        :height="size"
        viewBox="00 0 300 200"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        :aria-label="title"
      >
        <defs>
          <clipPath :id="clipId">
            <circle :cx="cx" :cy="50" :r="textRadius" />
          </clipPath>

          <path
            :id="pathId"
            :d="textPathD"
            fill="none"
            stroke="none"
          />
        </defs>

        <circle :cx="cx" :cy="cy" :r="imgRadius" :fill="circleColor" />

        <text
          :font-size="textSize"
          :font-weight="textWeight"
          text-anchor="middle"
          :fill="textColor"
        >
          <textPath
            :href="`#${pathId}`"
            :xlink:href="`#${pathId}`"
            startOffset="50%"
          >
            {{ title }}
          </textPath>
        </text>
        <image
          :href="image"
          :xlink:href="image"
          :x="cx - imgRadius"
          :y="10"
          :width="imgRadius * 2"
          :height="imgRadius * 2"
          preserveAspectRatio="xMidYMid slice"
          :clip-path="`url(#${clipId})`"
        />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    title: string
    image: string
    size?: number
    radius?: number
    circleColor?: string
    textColor?: string
    textSize?: number | string
    textWeight?: number | string
    textRadius?: number
  }>(),
  {
    size: 390,
    radius: 60,
    circleColor: '#ffffff',
    textColor: '#111827',
    textSize: 50,
    textWeight: 600,
    textRadius: 110
  }
)

const cx = 150
const cy = 100

const imgRadius = computed(() => Number(props.radius))

const textPathD = computed(() => {
  const r = Number(props.textRadius)
  return `M ${cx},${cy + r}
          a ${r},${r} 0 1,1 0,${-2 * r}
          a ${r},${r} 0 1,1 0,${2 * r}`
})

const pathId = `circle-path-${Math.random().toString(36).slice(2)}`
const clipId = `circle-clip-${Math.random().toString(36).slice(2)}`
</script>

<style scoped>
svg {
  font-family: 'AmiamieRound', sans-serif;
  font-weight: 600;
  margin-top: 50px;
  margin-bottom: -100px;
}
.logo-circle {
  display: block;
}
.logo-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
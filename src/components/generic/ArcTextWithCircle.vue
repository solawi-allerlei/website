<template>
  <div class="dots">
    <div class="dot">
      <svg
        :width="size"
        :height="size"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="100"
          cy="100"
          :r="radius/2"
          :fill="circleColor"
        />
        <path
          :id="pathId"
          :d="textPathD"
          fill="none"
          stroke="none"
        />
        <text
          :font-size="textSize"
          :font-weight="textWeight"
          text-anchor="middle"
          :fill="textColor"
        >
          <textPath
            :href="`#${pathId}`"
            startOffset="50%"
          >
            {{ title }}
          </textPath>
        </text>
      </svg>
      <ul class="list-clean">
        <li v-for="(point, i) in bulletPoints" :key="i">{{ point }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  title: string
  bulletPoints?: string[]
  size?: number
  radius?: number
  circleColor?: string
  textColor?: string
  textSize?: number | string
  textWeight?: number | string
}

const props = withDefaults(defineProps<Props>(), {
  bulletPoints: () => [],
  size: 260,
  radius: 60,
  circleColor: '#e6f2fa',
  textColor: '#111827',
  textSize: 30,
  textWeight: 600
})

const textPathD = computed(() => {
  const r = props.radius
  const cx = 100
  const cy = 100
  return `M ${cx},${cy + r}
          a ${r},${r} 0 1,1 0,${-2 * r}
          a ${r},${r} 0 1,1 0,${2 * r}`
})

const pathId = `circle-path-${Math.random().toString(36).slice(2)}`
</script>

<style scoped>
svg {
  font-family: 'AmiamieRound', sans-serif;
  font-weight: 400;
  margin-bottom: -70px;
}
.dots {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.dot {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.list-clean {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
  text-align: center;
}
.list-clean li {
    font-size: 1.5rem;
}
</style>
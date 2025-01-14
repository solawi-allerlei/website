<template>
  <div
    class="circle-text"
    :style="wrapperStyle"
    role="img"
    :aria-label="accessibleText"
  >
    <svg
      class="circle-text__svg"
      viewBox="0 0 100 100"
      aria-hidden="true"
    >
      <circle
        cx="50"
        cy="50"
        r="50"
        :fill="backgroundColor"
      />
      <text
        x="50"
        :y="firstLineY"
        text-anchor="middle"
        dominant-baseline="middle"
        :fill="textColor"
        :font-size="fontSize"
        :font-weight="fontWeight"
      >
        <tspan
          v-for="(line, index) in lines"
          :key="`${index}-${line}`"
          x="50"
          :dy="index === 0 ? 0 : lineHeightEm + 'em'"
        >
          {{ line }}
        </tspan>
      </text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const VIEWBOX_SIZE = 100
const VIEWBOX_RADIUS = VIEWBOX_SIZE / 2
const MIN_FONT_SIZE = 3.8
const MAX_FONT_SIZE = 11.5
const DEFAULT_LINE_HEIGHT = 1.18
const FONT_WIDTH_FACTOR = 0.52

const props = withDefaults(
  defineProps<{
    text: string
    size: number
    backgroundColor?: string
    textColor?: string
    padding?: number
  }>(),
  {
    backgroundColor: '#e6f2fa',
    textColor: '#111827',
    padding: 28
  }
)

const normalizedRawText = computed(() =>
  String(props.text)
    .replace(/\\n/g, '\n')
    .replace(/\r\n/g, '\n')
    .trim()
)

const lines = computed(() => {
  const splitLines = normalizedRawText.value
    .split('\n')
    .map((line) => line.replace(/\s+/g, ' ').trim())
    .filter(Boolean)

  return splitLines.length > 0 ? splitLines : ['']
})

const accessibleText = computed(() => lines.value.join(' '))

const innerPadding = computed(() => (props.padding / props.size) * VIEWBOX_SIZE)
const innerRadius = computed(() =>
  Math.max(8, VIEWBOX_RADIUS - innerPadding.value)
)

function measureLineUnits(line: string) {
  return Array.from(line).reduce((sum, char) => {
    if (char === ' ') {
      return sum + 0.35
    }

    if ('ilIjtfr'.includes(char)) {
      return sum + 0.45
    }

    if ('mwMWÄÖÜäöü'.includes(char)) {
      return sum + 0.95
    }

    return sum + 0.68
  }, 0)
}

function fitsIntoCircle(fontSizeCandidate: number) {
  const totalHeight =
    fontSizeCandidate * (1 + (lines.value.length - 1) * DEFAULT_LINE_HEIGHT)

  if (totalHeight > innerRadius.value * 2) {
    return false
  }

  const centerY = VIEWBOX_RADIUS
  const firstBaseline = centerY - totalHeight / 2 + fontSizeCandidate / 2

  return lines.value.every((line, index) => {
    const lineCenterY =
      firstBaseline + index * fontSizeCandidate * DEFAULT_LINE_HEIGHT
    const offsetFromCenter = Math.abs(lineCenterY - centerY)
    const halfChord = Math.sqrt(
      Math.max(0, innerRadius.value ** 2 - offsetFromCenter ** 2)
    )
    const availableWidth = halfChord * 2
    const estimatedLineWidth =
      measureLineUnits(line) * fontSizeCandidate * FONT_WIDTH_FACTOR

    return estimatedLineWidth <= availableWidth
  })
}

const fontSize = computed(() => {
  for (let size = MAX_FONT_SIZE; size >= MIN_FONT_SIZE; size -= 0.1) {
    if (fitsIntoCircle(size)) {
      return Number(size.toFixed(1))
    }
  }

  return MIN_FONT_SIZE
})

const lineHeightEm = DEFAULT_LINE_HEIGHT

const totalTextHeight = computed(
  () => fontSize.value * (1 + (lines.value.length - 1) * DEFAULT_LINE_HEIGHT)
)

const firstLineY = computed(() =>
  Number((VIEWBOX_RADIUS - totalTextHeight.value / 2 + fontSize.value / 2).toFixed(2))
)

const fontWeight = 400

const wrapperStyle = computed(() => ({
  '--circle-size': `${props.size}px`,
  '--circle-max-size': `${Math.round(props.size * 1.35)}px`
}))
</script>

<style scoped>
.circle-text {
  display: inline-flex;
  vertical-align: top;
  width: clamp(
    min(100%, calc(var(--circle-size) * 0.82)),
    min(100%, calc(var(--circle-size) + 6vw)),
    min(100%, var(--circle-max-size))
  );
  aspect-ratio: 1 / 1;
}

.circle-text__svg {
  width: 100%;
  height: 100%;
  display: block;
  font-family: 'AmiamieRound', sans-serif;
}
</style>

<script setup lang="ts">
import Page from '../generic/Page.vue'
import FullPageImage from '../generic/FullPageImage.vue'
import type { PageProps } from '../generic/Page.vue';
import courgette from '@/assets/images/courgette.webp'

const page: PageProps = {
  title: 'SoLaWi steht für …',
  urlPath: '/website/solawi',
  content: [
  `… solidarische Landwirtschaft bezeichnet einen Zusammenschluss von Produzent*innen von landwirt- schaftlichen Erzeugnissen und Verbraucher*innen. Das Gemüse kommt direkt vom Acker an die Verbraucher*innen ohne Zwischen- märkte oder andern Abhängigkeiten von Markt und Staat. Es werden alle Kosten und Risiken gemein-schaftlich getragen und alle Erzeugnisse unter den Mitgliedern aufgeteilt. Es gibt kein Interesse an Profit oder andere Marktabhängigkeiten. Somit kann selbstbestimmt, ökologisch und nachhaltig Gemüse angebaut werden. Den Gärtner*innen werden Löhne unabhängig der Erzeugnisse garantiert, die nicht von Umweltfaktoren abhängig sind.`,
  `Die Verbraucher*innen untereinander verstehen sich als solidarische Gemeinschaft, die sich alle Kosten teilt. Die finanzielle Beteiligung richtet sich nach der persönlichen Situation, jeder soll teilhaben können.`,
  `Eine Mitgliedschaft umfasst in der Regel ein Kalenderjahr, da auf Jahresebene kalkuliert wird.`
  ]
}
</script>

<template>
  <FullPageImage :src="courgette" />
  <Page v-bind="page"></Page>
</template>

<style scoped>
</style>

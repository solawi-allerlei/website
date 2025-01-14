<script setup lang="ts">
import ArcTextWithCircle from './generic/ArcTextWithCircle.vue'
</script>

<template>

  <div>
    <h1 class="title_main"></h1>
    <h2>Frisches Gemüse direkt aus Leipzig-Süd. Wir haben noch freie Anteile!</h2>
  </div>

<ArcTextWithCircle
  title="Gemüse"
  :bulletPoints="[
    'frisch, regional',
    'saisonal, nachhaltig',
    'direkt vom Acker'
  ]"
/>

<ArcTextWithCircle
  title="Anbau"
  :bulletPoints="[
    'ökologisch in Handarbeit',
    'vielfältige Sorten',
    'ressourcenschonend'
  ]"
/>

<ArcTextWithCircle
  title="Verein"
  :bulletPoints="[
    'Ackern & Aktionen',
    'Gemeinsam Essen',
    'Mitmachen & Lernen'
  ]"
/>

<ArcTextWithCircle
  title="Gemeinschaft"
  :bulletPoints="[
    'Mitbestimmung',
    'Gestaltung',
    'Selbstorganisation'
  ]"
/>
</template>

<style scoped>
</style>

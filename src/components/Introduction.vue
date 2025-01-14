<script setup lang="ts">
import ArcTextWithCircle from './generic/ArcTextWithCircle.vue'
</script>

<template>
  <div class="introduction_container">
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
  </div>
</template>

<style scoped>
.introduction_container{
  display:flex;
  flex-direction: column;
}

@media (min-width: 769px) {
  .introduction_container {
    flex-direction: row;
  }
}
</style>

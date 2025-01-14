<script setup lang="ts">
import Page from '../generic/Page.vue'
import FullPageImage from '../generic/FullPageImage.vue'
import type { PageProps } from '../generic/Page.vue';
import allerlei from '@/assets/images/allerlei.webp'


const page: PageProps = {
  title: 'Allerlei ist …',
  urlPath: '/website/solawi',
  content: [
  `… Wir sind eine kleine Solawi und pachten seit 2015 als eingetragener Verein ? Hektar Land auf dem Gelände einer ehemaligen Gärtnerei in Leipzig Dölitz. Wir sind mit aktuell 20 Ernteanteilen die kleinste Solawi in Leipzig und bieten deshalb unseren Mitgliedern viel Raum für Mitgestaltung und eigene Ideen.`,
  `Wir bauen im Freiland, im Folientunnel und in einigen Hochbeeten an.Dabei liegt unser Fokus darauf eine nachhaltige Grundlage und ein gesundes Ökosystem für den Anbau von Gemüse zu schaffen. Hierzu bearbeiten wir den Boden wenig und schonend und betreiben Humusaufbau. Wir haben Gründüngungsflächen auf dem Acker, wodurch wir Transfermulch zum Düngen haben. Außerdem leben auf unserem Grundstück viele nützliche, wichtige Insekten. Durch Heckenstrukturen und Blühwiesen schaffen wir Lebensräume für diese und tragen somit zu Biodiversität und Artenschutz bei. Wir benutzen fast ausschließlich samenfeste und teilweise alte, unbekannte Gemüsesorten.`,
  `Unsere Abholstation befindet sich direkt auf dem Acker, sodass beim Abholen noch ein bisschen geholfen, gequatscht oder einfach im Grünen entspannt werden kann.`,
  `Wir legen großen Wert auf Mitbestimmung unserer Mitglieder. Sei es beid er Auswahl der Gemüsesorten, der Umsetzung von Projekten oder der Anschaffung von Gartengerät – jeder darf sich einbringen, mitdiskutieren und mithelfen und unsere Solawi mitgestalten.`,
  `Wir versuchen mit dieser solidarischen Praxis ein Stück weit eine Welt zu gestalten, wie wir sie uns wünschen. In der wir gemeinschaftlich, ohne die Umwelt oder unsere Mitmenschen auszubeuten, Lebensmittel produzieren und konsumieren können.`
  ]
}
</script>


<template>
  <FullPageImage :src="allerlei" />
  <Page v-bind="page"></Page>
</template>

<style scoped>
</style>

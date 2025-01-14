<script setup lang="ts">
import Page from '../generic/Page.vue'
import type { PageProps } from '../generic/Page.vue';

const page: PageProps = {
  title: 'Wer ist die Allerlei?',
  urlPath: '/website/organisation',
  content: `Wir, der Allerlei - Solidarische Landwirtschaft Leipzig e.V., sind eine kleine solidarische Landwirtschaft (Solawi) und pachten seit 2015 als eingetragener Verein einen halben Hektar Land auf dem Gelände einer ehemaligen Gärtnerei in Leipzig Dölitz. Auf unserer Fläche baut unser GärtnerInnen-Team, angeleitet durch unsere angestellte Gärtnerin, eine vielfältige Mischung von saisonalem Gemüse für unsere Gemüsekiste an. Dabei ackern wir nach ökologischen Prinzipien. Wir sind mit aktuell rund 20 Ernteanteilen die kleinste Solawi in Leipzig und bieten deshalb unseren Mitgliedern viel Raum für Mitgestaltung und eigene Ideen. Wir versuchen mit dieser solidarischen Praxis eine uns wünschenswerte Welt zu gestalten: eine, in der wir gemeinschaftlich, ohne die Umwelt oder unsere Mitmenschen auszubeuten, Lebensmittel produzieren und konsumieren können.

Simple und umweltschonende Anbaumethoden
Wir bauen in Handarbeit und fast ganzjährig im Freiland, im Folientunnel und in einigen Hochbeeten an. Dabei liegt unser Fokus darauf eine nachhaltige Grundlage und ein gesundes Ökosystem für den Gemüseanbau zu schaffen. Hierzu bearbeiten wir den Boden wenig und schonend und betreiben Humusaufbau. Wir haben Gründüngungsflächen auf dem Acker und bauen damit unseren eigenen Mulch zum Düngen an. Außerdem leben auf unserem Grundstück viele verschiedene Insekten. Durch Heckenstrukturen und Blühwiesen schaffen wir Lebensräume für diese und tragen somit zu Biodiversität und Artenschutz bei. Wir benutzen fast ausschließlich samenfeste und teilweise alte, unbekannte Gemüsesorten. 

Abholung direkt vor Ort - jede Woche ganz nah am Gemüse
Unsere Verteilstation befindet sich direkt auf dem Acker im Leipziger Süden, sodass beim Abholen der Gemüsekiste noch ein bisschen die Hände in die Erde gesteckt, gequatscht oder einfach im Grünen entspannt werden kann – fast wie in einem eigenen Garten. Auch für Kinder findet sich immer ein Platz zum Spielen und Erleben. Wir freuen uns, wenn der Acker nicht nur ein Ort fürs Gemüse ist, sondern auch für die Menschen. Daher haben wir eine Sitzecke geschaffen und wollen zeitnah eine Draußenküche aufbauen.

Eine kleine feine Gruppe Menschen
Wir legen großen Wert auf Mitbestimmung unserer Mitglieder. Sei es bei der Auswahl der Gemüsesorten, der Umsetzung von Projekten oder der Anschaffung von Gartengerät – jeder darf sich einbringen, mitdiskutieren und mithelfen und unsere Solawi mitgestalten. Zudem führen wir nahezu alle administrativen Arbeiten im Ehrenamt aus und bieten daher auch viel Raum für Menschen, die für eine konkrete Aufgabe Verantwortung übernehmen und sich ausprobieren möchten. Hiervon sollte sich jedoch niemand unter Druck gesetzt fühlen: Jede und jeder kann sich genau so viel beteiligen, wie er oder sie möchte. 

+ Gemüseanbauplan

+ politisches Statement?
Wir respektieren und schätzen jeden Menschen in seiner Einzigartigkeit – bei uns sind alle herzlich Willkommen. Wie beim Gemüseanbau sind wir überzeugt, dass Vielfalt uns und unsere Gesellschaft bereichert und stärkt. Unser Acker ist ein diskriminierungsfreier Raum und wir möchten mit allen Mitgliedern eine Atmosphäre schaffen, in der sich jeder und jede aufgehoben fühlen kann. 

Du willst Teil unserer Gemüse-Gemeinschaft werden? Hier kannst du Mitglied werden!`
}
</script>

<template>
  <Page v-bind="page"></Page>
</template>

<style scoped>
</style>

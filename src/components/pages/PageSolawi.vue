<script setup lang="ts">
import Page from '../generic/Page.vue'
import type { PageProps } from '../generic/Page.vue';

const page: PageProps = {
  title: 'Was ist Solawi?',
  urlPath: '/website/solawi',
  content: `Solawi steht für solidarische Landwirtschaft. Wir wollen gemeinsam dafür sorgen, dass unsere Lebensmittel fair, ökologisch und zu auskömmlichen Preisen hergestellt und angeboten werden können. Dies erreichen wir, indem wir uns als Erzeuger und Verbraucher zusammenschließen, ohne Zwischenhändler und Märkte, und zusammen alle finanziellen Risiken des Nahrungsmittelanbaus tragen.

Anbau nach ökologischen Grundsätzen & Schonung von Boden und Umwelt
Solawis engagieren sich insbesondere für den Schutz von Natur und Umwelt und erzeugen möglichst schonend Lebensmittel – ohne den Boden auszulaugen, das Grundwasser zu belasten oder umliegende Ökosysteme zu beschädigen. Wir fördern die Artenvielfalt nicht nur im Anbau vielfältiger Obst- und Gemüsesorten sondern auch durch die aktive Unterstützung der lokalen Flora & Fauna. Jetzige und zukünftige Generationen sollen von unserem Boden ernten können, weshalb wir ihn wertschätzen und pflegen.

Saisonaler Anbau, kurze Lieferwege und leckere Ernte
Der Anbau der Lebensmittel erfolgt in unmittelbarer räumlicher Nähe zu den Verbrauchern, sodass Lieferwege auf ein Minimum reduziert werden. Daraus ergibt sich auch, dass nur das angebaut und an die Verbraucher abgegeben wird, was zum jeweiligen Zeitpunkt in unseren Breiten wachsen kann. Folglich ist nicht jedes Lebensmittel jederzeit verfügbar, dafür sind die Erzeugnisse umso geschmacksintensiver, da sie reif geerntet werden können.

Gemeinsame Verantwortung, gemeinsamer Gewinn
Solawis sind ein Zusammenschluss aus Erzeugern und Verbrauchern, die gemeinschaftlich alle Risiken und Gewinne der Lebensmittelproduktion tragen. Dass bedeutet, dass die Verbraucher die Kosten des Anbaus vollumfänglich übernehmen: Saatgut, Ackerpacht, Löhne und Versicherungen werden summiert und durch die Mitgliedsbeiträge der Mitglieder getragen. Dafür erhalten sie anteilig alle Lebensmittel, die in der Solawi erzeugt werden. So können sich die LandwirtInnen auf den Anbau konzentrieren und müssen auch vor schlechteren Jahren keine Angst haben.

Zusammen Lernen & einen Lernort für andere schaffen
Solawis bieten die Möglichkeit, direkt und nahbar zu erleben, woher die eigenen Lebensmittel stammen, wie und wann sie wachsen und welche Bedingungen sie zum Gedeihen brauchen. Damit sind Solawis auch Lernorte, Orte des Austauschs und Zusammenkommens und bieten allen Interessierten wertvolle Einblicke in eine nachhaltige und solidarische Art des Wirtschaftens.

Wie wir als Solawi Allerlei Leipzig dies ganz konkret bei uns umsetzen, erfährst du hier: Wer ist die Allerlei.`
}
</script>

<template>
  <Page v-bind="page"></Page>
</template>

<style scoped>
</style>

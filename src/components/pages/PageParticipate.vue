<script setup lang="ts">
import type { PageProps } from '../generic/Page.vue';
import ArcTextWithCircle from '../generic/ArcTextWithCircle.vue'
import beans from '@/assets/images/beans-cropped.webp'
import beansRotate from '@/assets/images/beans-cropped-rotate.webp'
import participate from '@/assets/images/participate.webp'
import FullPageImage from '../generic/FullPageImage.vue'

const page: PageProps = {
  title: 'Mitmachen',
  urlPath: '/website/participate',
  content: []
}
</script>

<template>
  <FullPageImage :src="participate" />
  <div class="page">
    <h1 class="headline">{{ page.title }}</h1>
    <div class="image_container_beans">
      <img :src="beansRotate" />
    </div>
    <h2>So funktioniert's:</h2>
    <div class="content">
      <div>
        <ArcTextWithCircle title="Mitgliedschaft"/>
        <p>Du wirst Mitglied in unserem Verein. Das bedeutet du entscheidest und gestaltest mit.</p>
      </div>
      <div>
        <ArcTextWithCircle title="Gemüse"/>
        <p>Von April/Mai bis Ende November gibt es jede Woche dienstags Ernte. In den Wintermonaten ernten wir seltener (ca. alle 2-3 Wochen). Du holst das Gemüse direkt auf dem Acker ab.</p>
      </div>
      <div>
        <ArcTextWithCircle title="Gemüsemenge"/>
        <span>Tabelle Erntejahr</span>
        <p>Ein Anteil versorgt 2-3 Erwachsene. Im Sommer ernten wir mehr Gemüse und im Winter weniger. Wir vergeben aber auch halbe Anteile.</p>
      </div>
      <div>
        <ArcTextWithCircle title="Beitrag"/>
        <p>Du zahlst monatlich eine selbst gewählte Summe, um die Kosten des Vereins gemeinsam zu decken (Saatgut, Geräte, Strom/Wasser, Löhne für die Gärtner etc.). Ein ganzer Anteil kostet zurzeit durchschnittlich 110 €.</p>
      </div>
      <div>
        <ArcTextWithCircle title="Mitgärtnern"/>
        <p>Du kannst soviel mithelfen wie du Lust hast. Bei uns gibt es keine Pflichtarbeitsstunden. Wir bauen auf unsere Solidarität. Die Allerlei ist dabei ein Lernort für Alle.</p>
      </div>
      <div>
        <ArcTextWithCircle title="Ackertag"/>
        <p>Wir treffen uns jeden letzten Samstag im Monat zum gemeinsamen Ackern, Plenum und Essen.</p>
      </div>
      <div>
        <ArcTextWithCircle title="Selbstorganisation"/>
        <p>Du kannst dich mit eigenen Ideen einbringen, Projekte verwirklichen, mitbestimmen. Selbstorganisierung bedeutet auch, dass wir die ehrenamtliche Hilfe vieler Mitglieder brauchen, damit die Allerlei funktioniert.</p>
      </div>
      <div class="image_container_beans">
        <img :src="beans" />
      </div>
      <div>
        <p>Du möchtest einen Gemüseanteil bei der Solawi Allerlei?</p>
        <p>Schreib uns eine Email an:</p>
        <p>info.allerlei(at)posteo.de</p>
        <span>Mitgliedsantrag</span>
        <span>Darlehen + SEPA</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page {
  max-width: clamp(320px, 90vw, 720px);
  margin-left: auto;
  margin-right: auto;
  padding: 20px 16px 60px;
  text-align: left;
}

.headline {
  font-size: 25pt;
  font-family: 'AmiamieRound', sans-serif;
  font-weight: 400;
  margin-bottom: 24px;
}

.content {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.2em;
}

.image_container_beans {
  display: flex;
  justify-content: center;
  margin: 20px;
  img {
    max-height: 25vh;
    width: auto;
    display: block;
  }
}

</style>
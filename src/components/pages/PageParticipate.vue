<script setup lang="ts">
import Page from '../generic/Page.vue'
import type { PageProps } from '../generic/Page.vue';

const page: PageProps = {
  title: 'Mitmachen',
  urlPath: '/website/participate',
  content: `Du möchtest einen Gemüseanteil bei der Allerlei? Dann schreib uns bitte eine E-Mail an info.allerlei(at)posteo.de Wir melden uns dann bald mit allen Infos und dem Mitgliedsantrag bei dir, klären deine Fragen und sobald du uns die Unterlagen ausgefüllt zurückgesendet hast, kann´s auch schon losgehen!
CTA - Mail schreiben

So funktioniert´s: 
Mitgliedschaft
Du wirst Mitglied in unserem Verein „Allerlei - Solidarische Landwirtschaft Leipzig e.V.“. Das bedeutet du kannst entscheiden und mitgestalten. In unseren monatlichen Plena kannst du Wünsche und Ideen mit den anderen teilen und gemeinsam darüber diskutieren und abstimmen. Eine Mitgliedschaft bedeutet, dass du dich mindestens ein Gartenjahr bei uns verpflichtest.

Gemüse & Abholung
Von April/Mai bis Ende November gibt es jede Woche dienstags eine abwechslungsreiche Ernte in Form einer Gemüsekiste. In den Wintermonaten ernten wir ca. alle 2-3 Wochen. Du holst das Gemüse zwischen 14 und 18 Uhr direkt auf dem Acker im Leipziger Süden (Leipzig Dölitz) ab. Wenn du mal nicht abholen kannst, finden wir dafür immer eine Lösung.

Gemüsemenge
Du kannst wählen ob du einen ganzen oder einen halben Gemüseanteil von uns beziehen möchtest. Ein ganzer Anteil versorgt im Jahresdurchschnitt den Gemüsebedarf von ungefähr 3-4 Erwachsenen. Im Sommer ernten wir sehr viel Gemüse und im Winter weniger. Wir bieten im Jahresverlauf jede Menge verschiedene Gemüsesorten.

Beitrag
Du zahlst monatlich eine selbst gewählte Summe, um die Kosten des Vereins gemeinsam zu decken (Saatgut, Geräte, Strom/Wasser, Löhne für die Gärtner etc.). Ein ganzer Anteil kostet zurzeit durchschnittlich 110 €. Da wir solidarisch wirtschaften, zahlt wer kann und mag mehr, wer nicht kann weniger.

Darlehen
Zu Beginn deiner Mitgliedschaft gewährst du uns ein einmaliges Darlehen, das du am Ende zurückerhältst. Damit schaffen wir uns einen kleinen finanziellen Puffer, falls größere Ausgaben notwendig werden und sichern unsere saisonal schwankenden Ausgaben, die größtenteils zu Jahresbeginn anfallen (bspw. für Saatgut).

Mitgärtnern
Du kannst so viel mithelfen wie du Lust hast. In der Saison ist immer jemand auf dem Acker, sodass du auch nach Feierabend zum Runterkommen eine Runde Pflanzen pflegen kommen kannst. Aber keine Angst: bei uns gibt es keine Pflichtarbeitsstunden – wenn du keine Zeit hast mitzuhelfen, ist das vollkommen in Ordnung.

Lernen
Wir wollen nicht nur Gemüse produzieren, sondern verstehen uns auch als Lernort: wie sieht eigentlich ein Rosenkohl aus, was ist Mangold, wann wächst welches Gemüse und wie viel Arbeit machen die Kulturen? Zudem könnt ihr erfahren, wie gelebte Gemeinschaft funktioniert. In verschiedenen Veranstaltungen geben wir unser Wissen auch an externe Interessierte weiter.

Ackertag
Für größere Projekte wie z.B. den Bau eines Folientunnels gibt es einen gemeinsamen Ackertag. Dafür treffen wir uns jeden letzten Samstag im Monat zum gemeinsamen Gärtnern. Im Anschluss halten wir unser Plenum ab und verspeisen das ein oder andere Gemüse.

Selbstorganisation
Du kannst dich mit eigenen Ideen einbringen, Projekte verwirklichen, mitbestimmen. Alle Entscheidungen im Verein treffen wir mittels Konsent. Selbstorganisierung bedeutet auch, dass wir die ehrenamtliche Hilfe vieler Mitglieder brauchen, damit die Allerlei funktioniert. 

Unterstützung
Wenn du vielleicht kein Gemüse beziehen, aber trotzdem unsere Idee unterstützen möchtest, kannst du uns gern entweder durch deine Mitarbeit oder eine Spende fördern. Wende dich dafür gern per Mail an uns und wir besprechen, was du tun könntest.


-------------------------------

FAQ?  nein. Ich habe versucht die Fragen oben zu beantworten. Ggf. sollten wir ein „Willkommen bei der Allerlei-Infoblatt“ erstellen, ich denke das macht mehr Sinn als alles auf der Website zu schreiben.

Gibt es eine Kündigungsfrist?
Kann ich Geld an den Verein spenden?
Wie kommuniziert ihr untereinander?
Wie werden Entscheidungen getroffen?
Was wenn ich meinen Anteil mal nicht abholen kann?
Was wenn ich keine Zeit habe mich zu engagieren? Kann ich auch nur wegen des Gemüses kommen?


---------------------------
Verlinkungen zu Kooperationspartnern und am besten Links zu uns zurück

----------------------------
`
}
</script>

<template>
  <Page v-bind="page"></Page>
</template>

<style scoped>
</style>

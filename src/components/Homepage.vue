<script setup lang="ts">
import Introduction from "./Introduction.vue";
import TeaserSolawi from "./TeaserSolawi.vue";
import TeaserParticipate from "./TeaserParticipate.vue";
import TeaserOrganisation from "./TeaserOrganisation.vue";
import FullPageImage from './generic/FullPageImage.vue'
import tomatoes from '@/assets/images/tomatoes.webp'
import tunnel from '@/assets/images/tunnel.webp'
import ants from '@/assets/images/ants.webp'
import brusselsSprouts from '@/assets/images/ants.webp'
import members from '@/assets/images/members.webp'
import beans from '@/assets/images/beans.webp'
import plants from '@/assets/images/plants.webp'
import worm from '@/assets/images/worm.webp'
import location from '@/assets/images/location.webp'
import logo from '@/assets/images/logo.webp'
import ArcTextWithImage from './generic/ArcTextWithImage.vue'
</script>

<template>
  <main class="content">
  <ArcTextWithImage
    title="Solawi Allerlei"
  :image=logo
/>

<FullPageImage :src="tomatoes" />
<Introduction></Introduction>
<FullPageImage :src="ants" />
<FullPageImage :src="tunnel" />
<TeaserSolawi></TeaserSolawi>
<TeaserOrganisation></TeaserOrganisation>
<TeaserParticipate></TeaserParticipate>

<FullPageImage :src="brusselsSprouts" /> // use rosenkohl^^
<FullPageImage :src="members" />

// testimonials1

<FullPageImage :src="beans" />
// testimonials2
// testimonials3
<FullPageImage :src="plants" />
Du willst dabei sein?
Oder bist neugierig?
Wir zeigen dir gerne unseren Acker!
Besuche uns gerne! Schreib uns
einfach eine Mail bei Fragen und/oder
wenn du vorbei kommen möchtest.
Wenn du Mitglied werden möchtest
schicken wir dir den Vertrag zu.
Jeden letzen Samstag im Monat ist
unser Ackertag von 11-13 Uhr mit
anschließendem Plenum von
13-14:30 Uhr auf dem Acker.

Hier findest du uns:
<FullPageImage :src="location" />
<FullPageImage :src="worm" />
</main>
</template>

<style scoped>
.content {
  flex: 1;
  padding-bottom: 60px;
}
</style>
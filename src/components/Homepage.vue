<script setup lang="ts">
import Introduction from "./Introduction.vue";
import TeaserSolawi from "./TeaserSolawi.vue";
import TeaserParticipate from "./TeaserParticipate.vue";
import TeaserOrganisation from "./TeaserOrganisation.vue";
import FullPageImage from './generic/FullPageImage.vue'
import tomatoes from '@/assets/images/tomatoes.webp'
import tunnel from '@/assets/images/tunnel.webp'
import ants from '@/assets/images/ants.webp'
import brusselsSprouts from '@/assets/images/brussels-sprout.webp'
import members from '@/assets/images/members.webp'
import beans from '@/assets/images/beans.webp'
import plants from '@/assets/images/plants.webp'
import worm from '@/assets/images/worm.webp'
import location from '@/assets/images/location.webp'
import logo from '@/assets/images/logo.webp'
import ArcTextWithImage from './generic/ArcTextWithImage.vue'
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="content">
    <ArcTextWithImage
      title="Solawi Allerlei"
    :image=logo
  />
  <FullPageImage :src="tomatoes" />
  <h2 class="paragraph_title">Frisches Gemüse direkt aus Leipzig-Süd. Wir haben noch freie Anteile!</h2>
  <div class="cta_container"><RouterLink to="/participate" class="cta">Anteil sichern</RouterLink></div>
  <Introduction></Introduction>
  <div class="image_container_ants">
    <img :src="ants" />
  </div>
  <FullPageImage :src="tunnel" />
  <div class="teaser_container">
    <TeaserSolawi></TeaserSolawi>
    <TeaserOrganisation></TeaserOrganisation>
    <TeaserParticipate></TeaserParticipate>
  </div>
  <div class="image_container_brussels_sprouts">
    <img :src="brusselsSprouts" />
  </div>
  <FullPageImage :src="members" />

  // testimonials1
  <div class="image_container_beans">
    <img :src="beans" />
  </div>
  // testimonials2
  // testimonials3
  <FullPageImage :src="plants" />
  <div class="paragraph_title">Du willst dabei sein?<br/>Oder bist neugierig?</div>
  <p class="paragraph_body">
  Wir zeigen dir gerne unseren Acker!
  Besuche uns gerne! Schreib uns
  einfach eine Mail bei Fragen und/oder
  wenn du vorbei kommen möchtest.
  Wenn du Mitglied werden möchtest
  schicken wir dir den Vertrag zu.
  </p>
  <p class="paragraph_body">
  Jeden letzen Samstag im Monat ist
  unser Ackertag von 11-13 Uhr mit
  anschließendem Plenum von
  13-14:30 Uhr auf dem Acker.
  </p>

  <div class="paragraph_title">Hier findest du uns:</div>
  <FullPageImage :src="location" />
    <div class="image_container_worm">
    <img :src="worm" />
  </div>
</main>
</template>

<style scoped>
.content {
  padding-top: 20px;
  flex: 1;
  padding-bottom: 60px;
}
.cta_container{
  display: flex;
  justify-content: center;
}
.cta{
  background-color: var(--color-link-background);
  border-radius: 30px;
  padding: 0.4em;
  font-size: 25pt;
  font-family: 'AmiamieRound', sans-serif;
  font-weight: 400;
  color: black;
  text-decoration: none;
}
.teaser_container{
  display:flex;
  flex-direction: column;
}

@media (min-width: 769px) {
  .teaser_container {
    flex-direction: row;
  }
}

.paragraph_title{
  margin: 20px;
  text-align: center;
  font-size: 19pt;
  font-family: 'AmiamieRound', sans-serif;
  font-weight: 400;
}
.paragraph_body{
  margin: 20px;
  text-align: center;
  font-size: 16pt;
  font-family: 'AmiamieRound', sans-serif;
  font-weight: 400;
}

.image_container_ants {
  display: flex;
  justify-content: flex-end;
  margin: 20px;
  img {
    max-height: 10vh;
    width: auto;
    transform: translate(-20px, 10px);
    display: block;
  }
}
.image_container_brussels_sprouts {
  display: flex;
  justify-content: center;
  margin: 20px;
  img {
    max-height: 20vh;
    width: auto;
    display: block;
  }
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
.image_container_worm {
  display: flex;
  justify-content: center;
  margin: 20px;
  img {
    max-height: 14vh;
    width: auto;
    display: block;
  }
}
</style>
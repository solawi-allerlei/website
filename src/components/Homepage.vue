<script setup lang="ts">
import Introduction from "./Introduction.vue";
import TeaserSolawi from "./TeaserSolawi.vue";
import TeaserParticipate from "./TeaserParticipate.vue";
import TeaserOrganisation from "./TeaserOrganisation.vue";
import FullPageImage from "./generic/FullPageImage.vue";
import tomatoes from "@/assets/images/tomatoes.webp";
import tunnel from "@/assets/images/tunnel.webp";
import ants from "@/assets/images/ants.webp";
import brusselsSprouts from "@/assets/images/brussels-sprout.webp";
import members from "@/assets/images/members.webp";
import beans from "@/assets/images/beans-cropped.webp";
import plants from "@/assets/images/plants.webp";
import worm from "@/assets/images/worm.webp";
import location from "@/assets/images/location.webp";
import logo from "@/assets/images/logo.webp";
import ArcTextWithImage from "./generic/ArcTextWithImage.vue";
import CircleWithText from "./generic/CircleWithText.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="content">
    <ArcTextWithImage title="Solawi Allerlei" :image="logo" />
    <FullPageImage :src="tomatoes" />
    <h2 class="paragraph_title">
      Frisches Gemüse direkt aus Leipzig-Süd. Wir haben noch freie Anteile!
    </h2>
    <div class="cta_container">
      <RouterLink to="/participate" class="cta">Anteil sichern</RouterLink>
    </div>
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
    <div class="paragraph_title">Das sagen wir Mitglieder:</div>
    <div class="circle_row circle_row_center">
      <CircleWithText
        :size="360"
        text="„Ich bin schon seit\n 7 Jahren Mitglied und liebe\n das Gemüse, es schmeckt einfach\n richtig gut, kein Vergleich zum\n Bioladen. Ich bin dankbar, jede Woche\n eine kleine Auszeit vom Konsum und\n Großstadttreiben genießen zu können in\n dem ich Gemüse auf dem Acker abholen\n kann. Es ist ein befriedigendes Gefühl eine\n gute Sache zu unterstützen, auch wenn ich\n selbst nicht viel Zeit habe zu helfen. Es\n tut gut ein Stück Solidarität zu leben\n und keinen Konzernen oder\n einzelnen Personen zu ihrer\n Rendite zu verhelfen.“"
      />
    </div>
    <div class="image_container_beans">
      <img :src="beans" />
    </div>
    <div class="circle_row">
      <CircleWithText
        :size="260"
        text="„Ich bin schon\n seit 7 Jahren Mitglied\n und liebe das Gemüse,\n es schmeckt einfach\n richtig gut, kein Vergleich\n zum Bioladen. Ich bin\n dankbar, jede Woche\n eine kleine Auszeit\n vom Alltag.“\n"
      />
    </div>
    <div class="circle_row circle_row_right">
      <CircleWithText
        :size="330"
        text="„Ich bin sehr froh\n über die freundliche\n Gemüse Allerlei Solawi in guter\n Erreichbarkeit mit der Tram 11\n gefunden zu haben. Hier verbringe\n ich gern meine Freizeit und helfe auf\n dem Acker und drumherum mit, den\n Ort schön zu gestalten. Es ist toll, dass\n auch Kinder hier willkommen sind,\n spielen, etwas zum Gärtnern lernen\n können! Das angebaute Gemüse\n ist super lecker und gute\n Qualität.“\n"
      />
    </div>
    <FullPageImage :src="plants" />
    <div class="paragraph_title">
      Du willst dabei sein?<br />Oder bist neugierig?
    </div>
    <p class="paragraph_body">
      Wir zeigen dir gerne unseren Acker! Besuche uns gerne! Schreib uns einfach
      eine Mail bei Fragen und/oder wenn du vorbei kommen möchtest. Wenn du
      Mitglied werden möchtest schicken wir dir den Vertrag zu.
    </p>
    <p class="paragraph_body">
      Jeden letzen Samstag im Monat ist unser Ackertag von 11-13 Uhr mit
      anschließendem Plenum von 13-14:30 Uhr auf dem Acker.
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
.cta_container {
  display: flex;
  justify-content: center;
}
.cta {
  background-color: var(--color-link-background);
  border-radius: 30px;
  padding: 0.4em;
  font-size: 25pt;
  font-family: "AmiamieRound", sans-serif;
  font-weight: 400;
  color: black;
  text-decoration: none;
}
.teaser_container {
  display: flex;
  flex-direction: column;
}

@media (min-width: 769px) {
  .teaser_container {
    flex-direction: row;
  }
}

.paragraph_title {
  margin: 20px;
  text-align: center;
  font-size: 19pt;
  font-family: "AmiamieRound", sans-serif;
  font-weight: 400;
}
.paragraph_body {
  margin: 20px;
  text-align: center;
  font-size: 16pt;
  font-family: "AmiamieRound", sans-serif;
  font-weight: 400;
}
.circle_row {
  display: flex;
  justify-content: flex-start;
  margin: 20px 0;
  padding: 0 20px;
  box-sizing: border-box;
}
.circle_row_center {
  justify-content: center;
}
.circle_row_right {
  justify-content: flex-end;
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

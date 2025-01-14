<script setup lang="ts">
import Page from '../generic/Page.vue'
import type { PageProps } from '../generic/Page.vue';

const page: PageProps = {
  title: 'Impressum',
  urlPath: '/website/impress',
  content: []
}
</script>

<template>
  <Page v-bind="page"></Page>
  <div class="impress">
    <p>Allerlei - Solidarische Landwirtschaft <span class="impress_no-break">Leipzig e.V.</span></p>
    <p>Floraweg 18</p>
    <p>04279 Leipzig Dölitz-Dösen</p>
    <p>Inhaltlich Verantwortliche gemäß § 18 Abs. 2 MStV:
        Allerlei - Solidarische Landwirtschaft Leipzig e.V.
        vertreten durch Marie-Louise Heddrich und Nick Horter
    </p>
    <p>Fragen und Feedback:<a href="mailto:info.allerlei@posteo.de">info.allerlei@posteo.de</a></p>
    <p>Unser <a href="https://solawiallerlei.wordpress.com/">Blog</a>.</p>
  </div>
</template>

<style scoped>
.impress{
  text-align: center;
  font-family: 'Amiamie', sans-serif;
  font-weight: 300;
  font-style: italic;
  font-size: 16pt;
}
</style>

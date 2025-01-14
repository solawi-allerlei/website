import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/components/Homepage.vue'
import PageSolawi from '@/components/pages/PageSolawi.vue'
import PageParticipate from '@/components/pages/PageParticipate.vue'
import PageOrganisation from '@/components/pages/PageOrganisation.vue'
import PageImpress from '@/components/pages/PageImpress.vue'
import PageDataProtection from '@/components/pages/PageDataProtection.vue'

const routes = [
  { path: '/', component: Homepage },
  { path: '/solawi', component: PageSolawi },
  { path: '/participate', component: PageParticipate },
  { path: '/organisation', component: PageOrganisation },
  { path: '/impress', component: PageImpress },
  { path: '/dataprotection', component: PageDataProtection }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
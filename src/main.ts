import '@/assets/styles/main.css'
import '@/assets/styles/font.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

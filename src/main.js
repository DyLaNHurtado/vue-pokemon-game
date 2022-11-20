import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './css/styles.css'

import HomePage from '@/pages/HomePage'
import ModePage from '@/pages/ModePage'
import PokemonPage from '@/pages/PokemonPage'

const routes = [
  { path: '/', component: HomePage },
  { path: '/mode', component: ModePage },
  { path: '/game', component: PokemonPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

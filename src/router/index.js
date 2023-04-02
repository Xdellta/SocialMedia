import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Social from '../views/Social.vue'
import Videos from '../views/Videos.vue'
import Settings from '../views/Settings.vue'
import UserProfil from '../views/UserProfil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Społeczność',
      name: 'social',
      component: Social
    },
    {
      path: '/Filmy',
      name: 'videos',
      component: Videos
    },
    {
      path: '/Ustawienia',
      name: 'settings',
      component: Settings
    },
    {
      path: '/Profil/:ID',
      name: 'userProfil',
      component: UserProfil
    }
  ]
})

export default router

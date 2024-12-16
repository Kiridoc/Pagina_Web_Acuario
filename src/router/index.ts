import { createRouter, createWebHistory } from 'vue-router'
import landingView from '../views/landingView.vue'
import adminView from '../views/adminView.vue'
import preguntaView from '../views/preguntaView.vue'
import loginView from '../views/loginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',  // Ruta por defecto
      name: 'landing',
      component: landingView
    },
    {
      path: '/landingView',
      name: 'landingView',
      component: landingView
    },
    {
      path: '/adminView',
      name: 'adminView',
      component: adminView
    },
    {
      path: '/preguntaView',
      name: 'preguntaView',
      component: preguntaView
    },
    {
      path: '/loginView',
      name: 'loginView',
      component: loginView
    }
  ],
})

export default router

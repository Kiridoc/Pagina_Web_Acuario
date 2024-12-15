import { createRouter, createWebHistory } from 'vue-router'
import landingView from '../views/landingView.vue'
import adminView from '../views/adminView.vue'

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
    }
  ],
})

export default router

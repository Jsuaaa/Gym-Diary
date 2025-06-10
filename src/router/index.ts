import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/Dashboard-View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: DashboardView,
    },
  ],
})

export default router

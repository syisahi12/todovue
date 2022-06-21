import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    // path: '/', redirect: '/landing',
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../views/History.vue')
  },
  {
    path: '/landing',
    name: 'landing',
    component: () => import('../views/Landing.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/house-design',
      name: 'house-design',
      component: HomePage,
    },
    {
      path: '/inclusion-list',
      name: 'inclusion-list',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: HomePage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: HomePage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80,
      }
    }
    if (to.path === '/house-design') {
      return { el: '#house-design', behavior: 'smooth', top: 80 }
    }
    if (to.path === '/inclusion-list') {
      return { el: '#inclusion-list', behavior: 'smooth', top: 80 }
    }
    if (to.path === '/about') {
      return { el: '#about', behavior: 'smooth', top: 80 }
    }
    if (to.path === '/contact') {
      return { el: '#contact', behavior: 'smooth', top: 80 }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router

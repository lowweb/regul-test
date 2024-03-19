import { createRouter, createWebHistory } from 'vue-router'
import GoodsAndServ from '../views/GoodsAndServ.vue'
import ErrorPage from '../views/ErrorPage.vue'
import AgentsInfo from '../views/AgentsInfo.vue'
import AboutCompany from '../views/AboutCompany.vue'
import LoginPage from '../views/LoginPage.vue'
import { useAuthStore } from '@/stores/authStore'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GoodsAndServ
    },
    {
      path: '/agents',
      name: 'agents',
      component: AgentsInfo,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
        guest: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutCompany
    },
    {
      path: '/:pathMatch(.*)',
      name: 'error',
      component: ErrorPage
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth) {
    if (!auth.user) {
      return next({ name: 'login' })
    }
  } else if (to.meta.guest) {
    if (await auth.user) {
      return next({ name: 'agents' })
    }
  }
  next()
})

export default router

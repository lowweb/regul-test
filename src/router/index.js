import { createRouter, createWebHistory } from 'vue-router'
import GoodsAndServ from '../views/GoodsAndServ.vue'
import ErrorPage from '../views/ErrorPage.vue'
import AgentsInfo from '../views/AgentsInfo.vue'
import AboutCompany from '../views/AboutCompany.vue'

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
      component: AgentsInfo
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

export default router

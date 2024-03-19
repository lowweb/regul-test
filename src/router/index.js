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
      component: AgentsInfo
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
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

// router.beforeEach(async (to) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login']
//   const authRequired = !publicPages.includes(to.path)
//   const auth = useAuthStore()

//   if (authRequired && !auth.user) {
//     auth.returnUrl = to.fullPath
//     return '/login'
//   }
// })

router.beforeEach((to, from, next) => {
  console.log(to.path)
  const authPages = ['/agents']
  const authRequired = authPages.includes(to.path)
  const auth = useAuthStore()
  console.log(auth.user)
  if (authRequired && !auth.user) next({ name: 'login' })
  else next()
})

export default router

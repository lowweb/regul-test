import { defineStore } from 'pinia'
import { fetchWrapper } from '../helpers/fetchWrapper'
import router from '../router'

const baseUrl = `${import.meta.env.VITE_API_URL}/users`

export const useAuthStore = defineStore('authStore', () => {
  let user = JSON.parse(localStorage.getItem('user'))
  const returnUrl = null

  const login = async (username, password) => {
    const data = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password })
    // update pinia state
    user = data
    localStorage.setItem('user', JSON.stringify(data))
    router.push(returnUrl || '/')
  }
  const logout = () => {
    user = null
    localStorage.removeItem('user')
    router.push('/')
    // router.go('/')
  }

  return {
    user,
    returnUrl,
    login,
    logout
  }
})

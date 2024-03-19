import { defineStore } from 'pinia'
import { fetchWrapper } from '../helpers/fetchWrapper'

const baseUrl = `${import.meta.env.VITE_API_URL}/users`

export const useAuthStore = defineStore('authStore', () => {
  let user = JSON.parse(localStorage.getItem('user'))
  const returnUrl = null

  const login = async (username, password) => {
    const userF = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password })

    localStorage.setItem('user', JSON.stringify(userF))
    console.log(this.router)
    this.router.push('/')
  }
  const logout = () => {
    this.user = null
    localStorage.removeItem('user')
    this.router.push('/login')
  }

  return {
    user,
    returnUrl,
    login,
    logout
  }
})

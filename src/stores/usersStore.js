import { defineStore } from 'pinia'
import { fetchWrapper } from '../helpers/fetchWrapper'
import { ref } from 'vue'

const baseUrl = `${import.meta.env.VITE_API_URL}/users`

export const useUsersStore = defineStore('usersStore', () => {
  const users = ref({})
  const getAll = async () => {
    this.users = { loading: true }
    fetchWrapper
      .get(baseUrl)
      .then((users) => (this.users = users))
      .catch((error) => (this.users = { error }))
  }

  return {
    users,
    getAll
  }
})

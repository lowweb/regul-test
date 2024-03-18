import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoaderStore = defineStore('loaderStore', () => {
  const loaderActive = ref()

  const setLoaderActive = (status) => {
    loaderActive.value = status
  }

  return {
    loaderActive,
    setLoaderActive
  }
})

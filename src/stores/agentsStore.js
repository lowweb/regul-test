import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAgentsStore = defineStore('agentsStore', () => {
  const agents = ref([])

  const getAgents = async () => {
    try {
      const res = await fetch('api/agents')
      const data = await res.json()
      agents.value = data
    } catch (err) {
      console.log(err)
    }
  }

  return {
    agents,
    getAgents
  }
})

<script setup>
import { onBeforeMount } from 'vue'
import BAgentsWrap from '@/components/blocks/BAgentsWrap.vue'
import BAgent from '@/components/blocks/BAgent.vue'
import ULoader from '@/components/ui/ULoader.vue'
import { useAgentsStore } from '@/stores/agentsStore'
import { useLoaderStore } from '@/stores/loaderStore'
const agentsStore = useAgentsStore()
const loaderStore = useLoaderStore()

onBeforeMount(async () => {
  loaderStore.setLoaderActive(true)
  await agentsStore.getAgents()
  loaderStore.setLoaderActive(false)
})
</script>

<template>
  <BAgentsWrap>
    <ULoader v-if="loaderStore.loaderActive" />
    <BAgent
      v-for="agent in agentsStore.agents"
      :key="agent.id"
      :name="agent.fullName"
      :img="agent.img"
      :reviews="agent.reviews"
      :rating="agent.rating"
      :doc-check-status="agent.docCheckStatus"
      :info="agent.info"
      v-if="!loaderStore.loaderActive"
    />
  </BAgentsWrap>
</template>

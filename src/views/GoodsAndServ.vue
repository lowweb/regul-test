<script setup>
import { onBeforeMount } from 'vue'
import BCard from '../components/blocks/BCard.vue'
import BGoodsWrap from '@/components/blocks/BGoodsWrap.vue'
import BFilters from '../components/blocks/BFilters.vue'
import ULoader from '@/components/ui/ULoader.vue'
import { useGoodsStore } from '@/stores/goodsStore'
import { useLoaderStore } from '@/stores/loaderStore'
const goodsStore = useGoodsStore()
const loaderStore = useLoaderStore()

onBeforeMount(async () => {
  loaderStore.setLoaderActive(true)
  await goodsStore.getGoods()
  loaderStore.setLoaderActive(false)
})
</script>

<template>
  <BFilters />
  <ULoader v-if="loaderStore.loaderActive" />
  <BGoodsWrap>
    <BCard
      v-if="!loaderStore.loaderActive"
      v-for="item in goodsStore.goods"
      :key="item.id"
      :name="item.name"
      :date-status="item.dateStatus"
      :reviews="item.reviews"
      :price="item.price"
      :status="item.status"
      :img="item.img"
    />
  </BGoodsWrap>
</template>

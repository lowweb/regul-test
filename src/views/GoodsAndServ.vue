<script setup>
import BCard from '../components/blocks/BCard.vue'
import BGoodsWrap from '@/components/blocks/BGoodsWrap.vue'
import BFilters from '../components/blocks/BFilters.vue'
import ULoader from '@/components/ui/ULoader.vue'
import { useGoodsStore } from '@/stores/goodsStore'
const goodsStore = useGoodsStore()
goodsStore.getGoods()
</script>

<template>
  <BFilters />
  <ULoader v-if="goodsStore.goodsLoading" />
  <BGoodsWrap>
    <BCard
      v-if="!goodsStore.goodsLoading"
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

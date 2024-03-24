import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGoodsStore = defineStore('goodsStore', () => {
  const goods = ref([])
  const goodsLoading = ref(false)

  const getGoods = async () => {
    try {
      goodsLoading.value = true
      const res = await fetch('api/goods')
      const data = await res.json()
      goods.value = data
      goodsLoading.value = false
    } catch (err) {
      console.log(err)
    }
  }

  return {
    goods,
    goodsLoading,
    getGoods
  }
})

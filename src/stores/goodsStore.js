import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGoodsStore = defineStore('goodsStore', () => {
  const goods = ref([])

  const getGoods = async () => {
    try {
      const res = await fetch('api/goods')
      const data = await res.json()
      goods.value = data
    } catch (err) {
      console.log(err)
    }
  }

  return {
    goods,
    getGoods
  }
})

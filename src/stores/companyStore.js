import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCompanyStore = defineStore('companyStore', () => {
  const companyMainInfo = ref({})
  const companyRatingReview = ref({})

  const getCompanyMainInfo = async () => {
    try {
      const res = await fetch('api/company-main-info')
      const data = await res.json()
      companyMainInfo.value = data
    } catch (err) {
      console.log(err)
    }
  }

  const getCompanyRatingReview = async () => {
    try {
      const res = await fetch('api/company-rating-review')
      const data = await res.json()
      companyRatingReview.value = data
    } catch (err) {
      console.log(err)
    }
  }

  return {
    companyMainInfo,
    companyRatingReview,
    getCompanyMainInfo,
    getCompanyRatingReview
  }
})

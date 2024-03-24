import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCompanyStore = defineStore('companyStore', () => {
  const companyMainInfo = ref({})
  const companyRatingReview = ref({})
  const companyAbout = ref({})
  const headerInfoLoading = ref(false)
  const companyAboutLoading = ref(false)

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

  const getHeaderInfo = async () => {
    try {
      headerInfoLoading.value = true
      await getCompanyMainInfo()
      await getCompanyRatingReview()
      headerInfoLoading.value = false
    } catch (err) {
      console.log(err)
    }
  }
  const getCompanyAbout = async () => {
    try {
      companyAboutLoading.value = true
      const res = await fetch('api/company-about')
      const data = await res.json()
      companyAbout.value = data
      companyAboutLoading.value = false
    } catch (err) {
      console.log(err)
    }
  }

  return {
    companyMainInfo,
    companyRatingReview,
    companyAbout,
    headerInfoLoading,
    companyAboutLoading,
    getCompanyMainInfo,
    getCompanyRatingReview,
    getCompanyAbout,
    getHeaderInfo
  }
})

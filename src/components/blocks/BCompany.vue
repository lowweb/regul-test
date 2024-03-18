<script setup>
import { onBeforeMount } from 'vue'
import BAddInfo from './BAddInfo.vue'
import { useCompanyStore } from '@/stores/companyStore'
const companyStore = useCompanyStore()

onBeforeMount(() => {
  companyStore.getCompanyMainInfo()
  companyStore.getCompanyRatingReview()
})
</script>

<template>
  <div class="company">
    <img src="@/assets/img/img-company-logo.png" alt="logo" class="company__logo" />
    <h5 class="company__name">{{ companyStore.companyMainInfo.name }}</h5>
    <BAddInfo
      :doc-check-status="companyStore.companyRatingReview.docCheckStatus"
      :rating="companyStore.companyRatingReview.rating"
      :reviews="companyStore.companyRatingReview.review"
      class="company__add"
    />
  </div>
</template>

<style lang="scss">
.company {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__logo {
    margin-bottom: 24px;
  }

  &__name {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;
    color: var(--color-light-black);
    margin-bottom: 12px;
  }

  &__add {
    margin-bottom: 24px;
  }
}
</style>

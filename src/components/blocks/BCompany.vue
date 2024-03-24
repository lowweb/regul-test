<script setup>
import { computed } from 'vue'
import BAddInfo from './BAddInfo.vue'
import getImageUrl from '@/utils/getImgUrl'
import { useCompanyStore } from '@/stores/companyStore'
const companyStore = useCompanyStore()

const imgUrl = computed(() => getImageUrl('../assets/img/', companyStore.companyMainInfo.logo))
</script>

<template>
  <div class="company">
    <v-skeleton-loader
      :loading="companyStore.headerInfoLoading"
      width="300"
      type="image, heading, list-item"
    >
      <v-responsive>
        <img :src="imgUrl" alt="logo" class="company__logo" style="width: 120px; height: 120px" />

        <h5 class="company__name">
          {{ companyStore.companyMainInfo.name }}
        </h5>
        <BAddInfo
          :doc-check-status="companyStore.companyRatingReview.docCheckStatus"
          :rating="companyStore.companyRatingReview.rating"
          :reviews="companyStore.companyRatingReview.review"
          class="company__add"
        />
      </v-responsive>
    </v-skeleton-loader>
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

  & .v-skeleton-loader__image {
    max-width: 120px;
    max-height: 120px;
    margin: 0 auto;
    margin-bottom: 24px;
    border-radius: 10px;
  }

  & .v-skeleton-loader__heading {
    margin: 0;
    margin-bottom: 12px;
    height: 28px;
  }
  & .v-skeleton-loader__list-item {
    margin: 0;
    margin-bottom: 24px;
    height: 20px;
  }
  & .v-responsive__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>

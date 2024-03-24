<script setup>
import { onBeforeMount } from 'vue'
import UMap from '../ui/UMap.vue'
import BCompany from '../blocks/BCompany.vue'
import { useCompanyStore } from '../../stores/companyStore'
const companyStore = useCompanyStore()
onBeforeMount(async () => {
  companyStore.getCompanyAbout()
})
</script>

<template>
  <div class="company-info">
    <input type="text" />
    <BCompany class="company-info__header" />
    <div class="company-info__block">
      <span class="company-info__title">О компании</span>
      <v-skeleton-loader
        :loading="companyStore.companyAboutLoading"
        width="560"
        type="list-item-three-line"
      >
        <v-responsive>
          <span class="company-info__desc">{{ companyStore.companyAbout.about }} </span>
        </v-responsive>
      </v-skeleton-loader>
    </div>

    <div class="company-info__block company-info__time">
      <span class="company-info__title">Режим работы</span>
      <v-skeleton-loader :loading="companyStore.companyAboutLoading" width="560" type="list-item">
        <v-responsive>
          <span class="company-info__desc">{{ companyStore.companyAbout.time }}</span>
        </v-responsive>
      </v-skeleton-loader>
    </div>

    <div class="company-info__location">
      <div class="company-info__adress">
        <span class="company-info__title">Местоположение</span>
        <v-skeleton-loader
          :loading="companyStore.companyAboutLoading"
          width="560"
          type="list-item-two-line"
        >
          <v-responsive>
            <span class="company-info__desc">{{ companyStore.companyAbout.addres }}</span>
          </v-responsive>
        </v-skeleton-loader>
      </div>
      <UMap class="company-info__map" />
    </div>
  </div>
</template>
<style lang="scss">
.company-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 560px;

  &__header {
    display: none;
    @media screen and (max-width: 933px) {
      display: flex;
    }
  }
  &__title {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 24px;
    line-height: 117%;
    color: var(--color-light-black);
  }
  &__desc {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 17px;
    line-height: 165%;
    color: var(--color-light-black);
  }

  &__block {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 8px;
    @media screen and (max-width: 630px) {
      padding: 16px;
    }
  }

  &__time {
    background: var(--color-dark-grey2);
    opacity: 0.3;
    border-radius: 16px;
  }

  &__location {
    display: flex;

    @media screen and (max-width: 630px) {
      flex-direction: column;
    }
  }
  &__adress {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 8px;
    flex: 1;
    & > .company-info__desc {
      color: var(--color-green);
    }
    @media screen and (max-width: 630px) {
      padding: 16px;
      order: 2;
    }
  }
  &__map {
    border-radius: 8px 16px 16px 0;
    flex: 1 1 auto;
    max-width: 200px;

    @media screen and (max-width: 630px) {
      order: 1;
      height: 96px;
      max-width: 100%;
    }
  }
  & .v-skeleton-loader {
    background-color: inherit;
  }
}

.mapdiv {
  border-radius: 8px 16px 16px 0;
  @media screen and (max-width: 630px) {
    border-radius: 20px 20px 0 0;
  }
}
</style>

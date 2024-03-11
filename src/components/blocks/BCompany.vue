<script setup>
import BAddInfo from './BAddInfo.vue'
import UButton from '../ui/UButton.vue'
</script>

<template>
  <div class="company">
    <img src="@/assets/img/img-company-logo.png" alt="logo" class="company__logo" />
    <h5 class="company__name">Наследие</h5>
    <BAddInfo :doc-check-status="true" :rating="4.7" :reviews="19" class="company__add" />
    <UButton size="large" color="--color-green">
      <template #textButton> Показать номер телефона </template>
    </UButton>
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

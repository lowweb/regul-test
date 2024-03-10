<script setup>
import BNav from './BNav.vue'
import BHeaderCompany from './BHeaderCompany.vue'
import BMenu from '../blocks/BMenu.vue'
import UButton from '../ui/UButton.vue'
</script>

<template>
  <header class="header">
    <div class="header__nav nav">
      <BNav />
    </div>
    <BHeaderCompany class="header__company" />
    <BMenu class="header__menu">
      <UButton>
        <template #textButton>Товары и услуги</template>
      </UButton>
      <UButton>
        <template #textButton> Агенты</template>
      </UButton>
      <UButton>
        <template #textButton>О Компании</template>
      </UButton>
    </BMenu>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid var(--color-light-grey2);
  &__company {
    margin-bottom: 32px;
  }
  &__menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 32px;
  }
}
</style>

<script setup>
import BNav from './BNav.vue'
import BCompany from './BCompany.vue'
import BMenu from '../blocks/BMenu.vue'
</script>

<template>
  <header class="header">
    <div class="header__nav nav">
      <BNav />
    </div>
    <BCompany class="header__company" />

    <BMenu class="header__menu"> </BMenu>
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
    @media screen and (max-width: 933px) {
      display: none;
    }
  }
  &__menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 32px;

    @media screen and (max-width: 933px) {
      margin-bottom: 0;
      padding: 8px 16px;
      overflow-x: scroll;
      justify-content: flex-start;
    }
  }
}
</style>

<script setup>
import BNavUser from './BNavUser.vue'
import InlineSvg from 'vue-inline-svg'
import UCart from '../ui/UCart.vue'
import UHam from '../ui/UHam.vue'
</script>

<template>
  <UHam class="nav__menu" />
  <div class="nav__title">Annoncé</div>
  <div class="nav__content">
    <button class="nav__btn">
      <inline-svg src="../../src/assets/icn/icn-all-category.svg" class="nav__btn-icn" />
      Все категории
    </button>
    <a href="#" class="nav__location">
      <inline-svg src="../../src/assets/icn/icn-location.svg" class="nav__btn-icn" />
      Ростов-на-Дону
    </a>
    <span class="nav__sep"></span>
    <a href="#" class="nav__new-announc">Разместить объявление</a>
    <BNavUser class="nav__user" />
  </div>
  <UCart class="nav__cart" />
</template>

<style lang="scss">
.nav {
  display: flex;
  height: 64px;
  background: var(--color-beige);
  align-items: center;
  padding: 8px 32px 8px 40px;

  @media screen and (max-width: 933px) {
    padding: 16px;
  }
  &__menu {
    display: none;
    @media screen and (max-width: 933px) {
      display: block;
    }
  }

  &__cart {
    display: none;
    @media screen and (max-width: 933px) {
      display: flex;
      align-items: center;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    flex: 1 0 auto;

    @media screen and (max-width: 933px) {
      display: none;
    }
  }
  &__title {
    font-family: var(--second-family);
    font-weight: 600;
    font-size: 28px;
    line-height: 100%;
    color: #000;
    margin-right: 37px;
    line-height: 100%;

    @media screen and (max-width: 933px) {
      margin-right: 50px;
      margin-left: auto;
    }
  }

  &__btn {
    border-radius: 40px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    border: none;
    background-color: var(--color-grey);
    cursor: pointer;

    &-icn {
      margin-right: 4px;
    }
  }

  &__location {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 4px;
    font-weight: 400;
    font-size: 15px;
    line-height: 160%;
    color: var(--color-light-black);
    margin-left: auto;
    padding: 0 6px;
  }

  &__sep {
    width: 1px;
    height: 32px;
    background: #ccc;
    margin: 0 24px;
  }

  &__new-announc {
    font-weight: 500;
    font-size: 15px;
    line-height: 160%;
    text-decoration: none;
    color: var(--color-green);
    padding: 0 12px;
  }
  &__user {
    margin-left: 24px;
  }
}
</style>

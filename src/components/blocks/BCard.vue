<script setup>
import UButton from '../ui/UButton.vue'
import UChips from '../ui/UChips.vue'
</script>
<template>
  <div class="card">
    <img src="@/assets/img/img-piano.png" alt="piano" class="card__img" />
    <div class="card__price">450 500</div>
    <div class="card__description">Сlavia Nord Grand сценическое цифровое пианино</div>
    <div class="card__footer">
      Обьявление продвигается
      <slot name="cardFooter"></slot>
    </div>
    <span class="card__info">
      <UChips chipsImg="icn-reviews.svg" chipsValue="255" />
      <UChips chipsImg="icn-calendar.svg" chipsValue="2 дня" />
      <UButton size="small" color="--color-dark-grey2" :hasBorder="true">
        <template #textButton>Действия</template>
      </UButton>
    </span>
  </div>
</template>
<style lang="scss">
.card {
  position: relative;
  font-family: var(--font-family);
  color: var(--color-light-black);

  &__img {
    border-radius: 20px;
    max-width: 100%;
  }

  &__price {
    font-weight: 500;
    font-size: 17px;
    margin-bottom: 12px;
    @media screen and (max-width: 933px) {
      margin-bottom: 4px;
    }
  }

  &__description {
    font-weight: 500;
    font-size: 15px;
    margin-bottom: 9px;
    @media screen and (max-width: 933px) {
      margin-bottom: 13px;
    }
  }

  &__info {
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    gap: 8px;
    width: 100%;
    padding: 8px;

    @media screen and (max-width: 340px) {
      flex-direction: column;
      align-items: flex-start;
    }

    & > button {
      display: none;
      margin-left: auto;

      @media screen and (max-width: 933px) {
        display: block;
      }

      @media screen and (max-width: 340px) {
        margin-left: 0;
      }
    }
  }
}
</style>

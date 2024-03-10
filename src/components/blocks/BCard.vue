<script setup>
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
      <UChips chipsImg="icn-reviews.svg" :chipsValue="255" />
      <UChips chipsImg="icn-calendar.svg" chipsValue="2 дня" />
    </span>
  </div>
</template>
<style lang="scss">
.card {
  position: relative;
  &__info {
    position: absolute;
    top: 8px;
    left: 8px;
    display: flex;
    gap: 8px;
  }
}
</style>

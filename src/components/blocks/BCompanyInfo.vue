<script setup>
import UMap from '../ui/UMap.vue'
import BCompany from '../blocks/BCompany.vue'
</script>

<template>
  <div class="company-info">
    <BCompany class="company-info__header" />
    <div class="company-info__block">
      <span class="company-info__title">О компании</span>
      <span class="company-info__desc"
        >Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в любимую работу.
        Работаем с профессиональной техникой.
      </span>
    </div>

    <div class="company-info__block company-info__time">
      <span class="company-info__title">Режим работы</span>
      <span class="company-info__desc">Сегодня с 8:00 до 23:00</span>
    </div>

    <div class="company-info__location">
      <div class="company-info__adress">
        <span class="company-info__title">Местоположение</span>
        <span class="company-info__desc">Ростов на Дону, Воронежская ул., 42А корп. 1</span>
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
}

.mapdiv {
  border-radius: 8px 16px 16px 0;
  @media screen and (max-width: 630px) {
    border-radius: 20px 20px 0 0;
  }
}
</style>

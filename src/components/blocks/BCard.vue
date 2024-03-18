<script setup>
import { computed } from 'vue'
import UButton from '../ui/UButton.vue'
import UChips from '../ui/UChips.vue'
import getImageUrl from '@/utils/getImgUrl'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  dateStatus: {
    type: String,
    required: true
  },
  reviews: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})
const imgUrl = computed(() => getImageUrl('../assets/img/', props.img))
</script>
<template>
  <div class="card">
    <img :src="imgUrl" alt="img" class="card__img" />
    <!-- <div class="card__body"> -->
    <div class="card__price">{{ price }}</div>
    <div class="card__description">{{ name }}</div>
    <div class="card__footer">
      <div v-if="status === 'pulling'" class="card__footer--pulling">Обьявление продвигается</div>
      <div v-if="status === 'pull'" class="card__footer--pull">
        Увеличьте количество просмотров
        <UButton size="small" color="--color-green">
          <template #textButton>Продвигать</template>
        </UButton>
      </div>
      <div v-if="status === 'hide'" class="card__footer--hide">Объявление скрыто</div>
    </div>
    <!-- </div> -->

    <span class="card__info">
      <UChips chipsImg="icn-reviews.svg" :chipsValue="reviews.toString()" />
      <UChips chipsImg="icn-calendar.svg" :chipsValue="dateStatus" />
      <UButton size="small" color="--color-dark-grey2" :hasBorder="true">
        <template #textButton>Действия</template>
      </UButton>
    </span>
  </div>
</template>
<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: var(--font-family);
  color: var(--color-light-black);

  &__body {
    padding-top: 16px;
  }
  &__img {
    border-radius: 20px;
    max-width: 100%;
    margin-bottom: 16px;
    object-fit: cover;
    height: 322px;
    @media screen and (max-width: 933px) {
      height: 328px;
    }
  }

  &__price {
    font-weight: 500;
    font-size: 17px;
    line-height: 118%;
    margin-bottom: 12px;
    @media screen and (max-width: 933px) {
      margin-bottom: 4px;
    }
  }

  &__description {
    font-weight: 500;
    font-weight: 500;
    font-size: 15px;
    line-height: 160%;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--color-grey);
    @media screen and (max-width: 933px) {
      padding-bottom: 12px;
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

  &__footer {
    &--pulling {
      color: var(--color-green);
      font-weight: 400;
      font-size: 15px;
      line-height: 133%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 18px 0;
    }
    &--pull {
      font-weight: 400;
      font-size: 13px;
      display: flex;
      justify-content: space-between;
      gap: 5px;
      align-items: center;
      padding: 12px 4px 4px 4px;
      color: var(--color-dark-grey);
      @media screen and (max-width: 933px) {
        padding: 12px 4px 4px 4px;
      }
    }

    &--hide {
      color: var(--color-red);
      font-weight: 400;
      font-size: 15px;
      line-height: 133%;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 18px 0;
    }
  }
}
</style>

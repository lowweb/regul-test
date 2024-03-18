<script setup>
import { computed } from 'vue'
import getImageUrl from '@/utils/getImgUrl'
import BAddInfo from './BAddInfo.vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  reviews: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  docCheckStatus: {
    type: Boolean,
    required: true
  },
  info: {
    type: String,
    required: true
  }
})

const imgUrl = computed(() => getImageUrl('../assets/img/', props.img))
</script>

<template>
  <div class="agent">
    <img :src="imgUrl" alt="img" class="agent__img" />
    <span class="agent__name"> {{ name }}</span>
    <BAddInfo
      :doc-check-status="docCheckStatus"
      :rating="rating"
      :reviews="reviews"
      class="agent__add"
    />
    <span class="agent__info">{{ info }}</span>
  </div>
</template>
<style lang="scss">
.agent {
  border-radius: 20px;
  padding: 20px;
  background: var(--color-dark-grey2);
  max-width: 560px;
  display: grid;
  grid-template-areas:
    'pic name'
    'pic addinfo'
    'pic desc';

  @media screen and (max-width: 630px) {
    border-radius: 16px;
    grid-template-areas:
      'pic name'
      'pic addinfo'
      'desc desc';
    grid-template-columns: max-content 1fr;
    padding: 20px;
  }

  &__name {
    grid-area: name;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 24px;
    color: var(--color-light-black);
    margin-bottom: 4px;
    @media screen and (max-width: 630px) {
      font-weight: 600;
      font-size: 20px;
      margin-bottom: 0;
    }
  }
  &__img {
    grid-area: pic;
    border-radius: 20px;
    margin-right: 20px;
    @media screen and (max-width: 630px) {
      width: 48px;
      border-radius: 16px;
      margin-right: 12px;
    }
  }
  &__add {
    grid-area: addinfo;
    margin-bottom: 12px;
    @media screen and (max-width: 630px) {
      margin-bottom: 8px;
    }
  }

  &__info {
    grid-area: desc;
    @media screen and (max-width: 630px) {
      font-weight: 400;
      font-size: 15px;
    }
  }
}
</style>

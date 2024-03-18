<script setup>
import { computed } from 'vue'
const props = defineProps({
  docCheckStatus: {
    type: Boolean,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  reviews: {
    type: Number,
    required: true
  }
})

const reviewsText = computed(() =>
  props.reviews < 5 ? `${props.reviews} отзыва` : `${props.reviews} отзывов`
)
</script>

<template>
  <div class="addinfo">
    <div
      class="addinfo__doc"
      :class="{ 'addinfo__doc--wrong': !docCheckStatus }"
      :data-checkstatus="docCheckStatus"
    ></div>
    <span class="addinfo__dot" />
    <div class="addinfo__rating">{{ rating }}</div>
    <span class="addinfo__dot" />
    <div class="addinfo__reviews">{{ reviewsText }}</div>
  </div>
</template>

<style lang="scss">
.addinfo {
  display: flex;
  align-items: center;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  line-height: 133%;
  max-height: 20px;
  color: var(--color-light-black);

  &__dot {
    display: flex;
    &::after {
      content: '';
      background-image: url('@/assets/icn/icn-dot.svg');
      background-position: center;
      width: 9px;
      height: 20px;
      margin: 0 4px;
    }
  }
  &__doc {
    display: flex;
    align-items: center;

    &[data-checkstatus='true'] {
      &::after {
        content: 'Документы проверенны';
        display: inline-flex;

        @media screen and (max-width: 933px) {
          content: 'Проверенны';
        }
        @media screen and (max-width: 630px) {
          content: '';
        }
      }
    }

    &[data-checkstatus='false'] {
      &::after {
        content: 'Документы не проверенны';
        @media screen and (max-width: 933px) {
          content: 'Не проверенны';
        }
        @media screen and (max-width: 630px) {
          content: '';
        }
      }
    }
    &::before {
      content: '';
      background-image: url('@/assets/icn/icn-doccheck.svg');
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
    &--wrong {
      &::before {
        background-image: url('@/assets/icn/icn-doccheck-wrong.svg');
      }
    }
  }

  &__rating {
    display: flex;
    align-items: center;
    &::before {
      content: '';
      background-image: url('@/assets/icn/icn-rating.svg');
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
  }
}
</style>

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

const docStatusText = computed(() =>
  props.docCheckStatus ? 'Документы проверенны' : 'Документы не проверенны'
)
const reviewsText = computed(() =>
  props.reviews < 5 ? `${props.reviews} отзыва` : `${props.reviews} отзывов`
)
</script>

<template>
  <div class="addinfo">
    <div class="addinfo__doc" :class="{ 'addinfo__doc--wrong': !docCheckStatus }">
      <span>{{ docStatusText }}</span>
    </div>
    <div class="addinfo__rating">{{ rating }}</div>
    <div class="addinfo__reviews">{{ reviewsText }}</div>
  </div>
</template>

<style lang="scss">
.addinfo {
  display: flex;
  align-items: center;
  &__doc {
    display: flex;
    align-items: center;
    &::before {
      content: '';
      background-image: url('@/assets/icn/icn-doccheck.svg');
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
    &::after {
      content: '';
      background-image: url('@/assets/icn/icn-dot.svg');
      background-position: center;
      width: 9px;
      height: 20px;
      margin: 0 4px;
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
    &::after {
      content: '';
      background-image: url('@/assets/icn/icn-dot.svg');
      background-position: center;
      width: 9px;
      height: 20px;
      margin: 0 4px;
    }
  }

  &__reviews {
  }
}
</style>

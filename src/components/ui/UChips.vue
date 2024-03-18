<script setup>
import { computed } from 'vue'
import getImageUrl from '@/utils/getImgUrl'
const props = defineProps({
  chipsImg: {
    type: String
  },
  chipsValue: {
    type: String,
    required: true
  }
})
const imgUrl = computed(() => getImageUrl('../assets/icn/', props.chipsImg))
</script>
<template>
  <div class="chips">
    <img :src="imgUrl" alt="views" class="chips__img" />
    <div class="chips__value">{{ chipsValue }}</div>
  </div>
</template>

<style lang="scss">
.chips {
  border-radius: 12px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  background: rgba(27, 29, 34, 0.6);
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 13px;
  line-height: 154%;
  color: var(--color-dark-grey2);

  &__img {
    margin-right: 9px;
  }
}
</style>

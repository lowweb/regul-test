<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'med'
  }
})
</script>

<template>
  <button class="button" :class="{ 'button--large': size === 'large' }">
    <slot name="textButton"></slot>
    <slot name="count"></slot>
  </button>
</template>

<style lang="scss">
.button {
  border: 1px solid var(--color-grey);
  border-radius: 12px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 15px;
  line-height: 160%;
  text-align: center;
  color: var(--color-light-black);
  background-color: var(--color-grey);
  padding: 8px 12px;

  &--active {
    border: 1px solid var(--color-dark-grey);
  }
  &--large {
    color: var(--color-white);
    padding: 16px 20px;
    background-color: var(--color-green);
  }
}
</style>

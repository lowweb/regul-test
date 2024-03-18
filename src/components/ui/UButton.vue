<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'med'
  },
  color: {
    type: String,
    default: '--color-grey'
  },
  hasBorder: {
    type: Boolean,
    default: false
  },
  value: {
    type: Number
  }
})
const backgroundColor = `var(${props.color})`
</script>

<template>
  <button
    class="button"
    :class="{
      'button--large': size === 'large',
      'button--border': hasBorder,
      'button--small': size === 'small',
      'button--green': color === '--color-green'
    }"
  >
    <slot name="textButton"></slot>
    <p class="button__value" v-if="Number(value)">
      {{ value }}
    </p>
  </button>
</template>

<style lang="scss">
.button {
  border-radius: 12px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 15px;
  line-height: 160%;
  text-align: center;
  color: var(--color-light-black);
  background-color: v-bind(backgroundColor);
  padding: 7px 11px;
  text-wrap: nowrap;
  display: inline-flex;
  justify-content: center;
  border: 1px solid v-bind(backgroundColor);

  &__value {
    margin-left: 4px;
    color: var(--color-dark-grey);
  }

  &--green {
    color: var(--color-dark-grey2);
  }
  &--large {
    padding: 15px 19px;
  }
  &--small {
    padding: 7px 11px;
  }

  &--border {
    border: 1px solid var(--color-grey);
  }
}
</style>

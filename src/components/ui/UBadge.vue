<script setup>
const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div class="badge">
    <slot></slot>
    <span class="badge__body">
      {{ value }}
    </span>
  </div>
</template>

<style lang="scss">
.badge {
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  &__body {
    position: absolute;
    top: -4px;
    right: -4px;
    background-color: var(--color-green);
    min-width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--third-family);
    font-weight: 600;
    font-size: 11px;
    line-height: 109%;
    color: var(--color-dark-grey2);
    border: 1px solid #fff;
    border-radius: 20px;
    padding: 0px 2px;
  }
}
</style>

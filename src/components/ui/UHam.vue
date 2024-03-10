<script setup>
import { ref } from 'vue'
const isActive = ref(false)
</script>
<template>
  <div
    class="ham"
    :class="{ 'ham--active': isActive }"
    id="menu-btn"
    title="Menu"
    @click="isActive = !isActive"
  >
    <div class="ham-bar ham-bar--one"></div>
    <div class="ham-bar ham-bar--two"></div>
    <div class="ham-bar ham-bar--three"></div>
  </div>
</template>

<style lang="scss">
.ham {
  cursor: pointer;
  display: block;

  &-bar {
    width: 20px;
    height: 2px;
    background-color: var(--color-light-black);
    margin: 4px 0;
    transition: 0.3s;
  }

  &--active &-bar--one {
    transform: rotate(-45deg) translate(-4px, 4px);
  }
  &--active &-bar--two {
    opacity: 0;
  }
  &--active &-bar--three {
    transform: rotate(45deg) translate(-4px, -4px);
  }
}
</style>

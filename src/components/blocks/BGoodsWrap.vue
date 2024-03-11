<script setup></script>
<template>
  <div class="goods-wrap">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.goods-wrap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  row-gap: 48px;
  column-gap: 32px;
  padding: 32px 40px 73px 40px;

  @media screen and (max-width: 933px) {
    padding: 8px 16px;
    grid-template-columns: 1fr;
    row-gap: 24px;
    margin: 0 auto;
  }
}
</style>

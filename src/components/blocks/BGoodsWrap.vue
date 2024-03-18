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
  row-gap: 56px;
  column-gap: 24px;
  padding: 8px 40px 81px 40px;
  flex: 1 1 auto;

  @media screen and (max-width: 933px) {
    padding: 8px 16px 8px 16px;
    grid-template-columns: 1fr;
    row-gap: 24px;
    margin: 0 auto;
  }
}
</style>

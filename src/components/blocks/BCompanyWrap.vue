<script setup></script>

<template>
  <div class="company-wrap">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.company-wrap {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 33px 32px 64px 32px;
  flex: 1 1 auto;

  @media screen and (max-width: 630px) {
    gap: 8px;
    padding: 24px 0px 48px 0px;
  }
}
</style>

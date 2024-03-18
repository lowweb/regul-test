<script setup></script>

<template>
  <div class="agents-wrap">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.agents-wrap {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 12px;
  padding: 32px 32px 64px 32px;
  flex: 1 1 auto;

  @media screen and (max-width: 630px) {
    gap: 8px;
    padding: 24px 0px 48px 0px;
  }
}
</style>

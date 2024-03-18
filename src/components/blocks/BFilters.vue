<script setup>
import USelect from '../../components/ui/USelect.vue'
import USelectTwo from '../../components/ui/USelectTwo.vue'
</script>
<template>
  <div class="filters">
    <USelect></USelect>
  </div>
</template>
<style lang="scss">
.filters {
  padding: 24px 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > .multiselect {
    max-width: 438px;
  }
}
</style>

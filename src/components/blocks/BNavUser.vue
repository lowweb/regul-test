<script setup>
import UHam from '../ui/UHam.vue'
</script>
<template>
  <div class="user-info">
    <UHam class="user-info__ham" />
    <v-avatar color="surface-variant">
      <v-img src="/user.png" alt="user-img" />
    </v-avatar>
  </div>
</template>

<style lang="scss">
.user-info {
  display: flex;
  gap: 8px;
  align-items: center;
  border-radius: 24px;
  padding: 4px 4px 4px 12px;
  background-color: var(--color-grey);
}
</style>

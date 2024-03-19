<script setup>
import UButton from '../ui/UButton.vue'
import { useAuthStore } from '@/stores/authStore'
const authStore = useAuthStore()
</script>
<template>
  <div class="menu">
    <router-link to="/">
      <UButton>
        <template #textButton>Товары и услуги</template>
      </UButton>
    </router-link>

    <router-link to="/agents">
      <UButton :value="5">
        <template #textButton> Агенты</template>
      </UButton>
    </router-link>

    <router-link to="/about">
      <UButton>
        <template #textButton>О Компании</template>
      </UButton>
    </router-link>

    <UButton v-show="authStore.user" @click="authStore.logout()">
      <template #textButton> Выйти</template>
    </UButton>
  </div>
</template>
<style lang="scss">
.menu {
  display: flex;
  align-items: center;
}

.router-link-active .button {
  border: 1px solid var(--color-light-black);
}
</style>

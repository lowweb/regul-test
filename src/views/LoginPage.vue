<script setup>
import { useAuthStore } from '@/stores/authStore'

function onSubmit(values) {
  const authStore = useAuthStore()
  const { username, password } = values
  return authStore.login(username, password).catch((error) => console.log(error))
}
</script>
<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <v-form fast-fail @submit.prevent="onSubmit">
        <v-text-field label="User Name"></v-text-field>

        <v-text-field label="password"></v-text-field>
        <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

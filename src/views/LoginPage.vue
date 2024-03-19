<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
const formData = ref({ username: '', password: '' })
const isError = false
function onSubmit() {
  const authStore = useAuthStore()
  return authStore
    .login(formData.value.username, formData.value.password)
    .catch((error) => console.log(error))
}
</script>
<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <v-form fast-fail @submit.prevent="onSubmit">
        <v-text-field v-model="formData.username" label="User Name"></v-text-field>
        <v-text-field v-model="formData.password" label="password"></v-text-field>
        <v-btn type="submit" color="primary" block class="mt-2">Войти</v-btn>
      </v-form>
    </v-sheet>

    <v-alert
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"
      title="Alert title"
      type="info"
      variant="tonal"
    ></v-alert>
  </div>
</template>

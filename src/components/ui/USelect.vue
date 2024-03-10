<script setup>
import Multiselect from '@vueform/multiselect'
</script>

<template>
  <Multiselect
    v-model="value"
    mode="multiple"
    :close-on-select="false"
    :groups="true"
    :options="[
      {
        label: 'DC',
        options: ['Batman', 'Robin', 'Joker']
      },
      {
        label: 'Marvel',
        options: ['Spiderman', 'Iron Man', 'Captain America']
      }
    ]"
  />
</template>
<style src="@vueform/multiselect/themes/default.css"></style>

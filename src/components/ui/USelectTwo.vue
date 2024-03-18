<script setup>
import { ref } from 'vue'
// import VueMultiselect from 'vue-multiselect'
const selected = ref([])
const options = ref([
  {
    language: 'Javascript',
    libs: [
      { name: 'Vue.js', category: 'Front-end' },
      { name: 'Adonis', category: 'Backend' }
    ]
  },
  {
    language: 'Ruby',
    libs: [
      { name: 'Rails', category: 'Backend' },
      { name: 'Sinatra', category: 'Backend' }
    ]
  },
  {
    language: 'Other',
    libs: [
      { name: 'Laravel', category: 'Backend' },
      { name: 'Phoenix', category: 'Backend' }
    ]
  }
])
</script>
<template>
  <VueMultiselect
    v-model="selected"
    :options="options"
    :multiple="true"
    :close-on-select="false"
    :clear-on-select="false"
    group-values="libs"
    group-label="language"
    :group-select="true"
    placeholder="Выберите значение"
    label="name"
    track-by="name"
    :preselect-first="true"
  ></VueMultiselect>
</template>

<!-- <style src="vue-multiselect/dist/vue-multiselect.css"></style> -->
<style lang="scss">
.multiselect__tags {
  border-radius: 12px;
  background-color: var(--color-light-grey);
  // padding: 16px 40px 16px 16px;
  border: 1px solid #dbdbdb;
  font-size: 15px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 15px;
  color: var(--color-light-black);
}

.multiselect__placeholder {
  margin-bottom: 0;
  padding-top: 0;
}
</style>

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
        label: 'Категория 1',
        options: ['Товар 1', 'Товар 2', 'Товар 3']
      },
      {
        label: 'Категория 2',
        options: ['Товар 1', 'Товар 2', 'Товар 3']
      }
    ]"
  />
</template>
<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss">
:root {
  --ms-font-size: 15px;
  --ms-bg: var(--color-light-grey);
  --ms-border-color: #dbdbdb;
  --ms-radius: 12px;
  --ms-border-color-active: #dbdbdb;
  --ms-border-width-active: 0px;
  --ms-dropdown-bg: var(--color-light-grey);
  --ms-dropdown-border-color: #d1d5db;
  --ms-dropdown-border-width: 1px;
  --ms-dropdown-radius: 12px;
}

.multiselect-wrapper {
  height: 54px;
}
.multiselect.is-active {
  border: solid 1px #dbdbdb;
  box-shadow: none;
  border-bottom: 0px;
}
.multiselect-dropdown {
  border-top: none;
}
.multiselect-group-label {
  background-color: inherit;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 13px;
  color: #6b6b6b;
  padding: 24px 20px 8px 20px;
}
.multiselect-group-label.is-pointed {
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 13px;
  color: #6b6b6b;
  background-color: inherit;
}
.multiselect-option {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  color: #0f0f0f;
  padding: 12px 20px;
}
</style>

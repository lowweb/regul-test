<script setup>
import BHeader from '@/components/blocks/BHeader.vue'
import BFooter from './components/blocks/BFooter.vue'
</script>

<template>
  <main class="page__main">
    <BHeader />
    <RouterView></RouterView>
    <BFooter />
  </main>
</template>

<style scoped lang="scss"></style>

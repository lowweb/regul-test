<script setup>
import BCompanyWrap from '@/components/blocks/BCompanyWrap.vue'
import BCompanyInfo from '@/components/blocks/BCompanyInfo.vue'
</script>

<template>
  <BCompanyWrap>
    <KeepAlive>
      <BCompanyInfo />
    </KeepAlive>
  </BCompanyWrap>
</template>

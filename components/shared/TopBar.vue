<template>
  <div class="sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10">
    <AppContainer class="flex items-center justify-between">
      <AppCategories />
      <SortPopup />
    </AppContainer>
  </div>
</template>

<script setup lang="ts">
import { AppCategories, AppContainer, SortPopup } from '@/components/shared'
</script>

<style lang="scss" scoped></style>

<template>
  <div class="sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10">
    <AppContainer class="flex items-center justify-between">
      <AppCategories :items="categories" />
      <SortPopup />
    </AppContainer>
  </div>
</template>

<script setup lang="ts">
import type { Category } from '@prisma/client'

import { AppCategories, AppContainer, SortPopup } from '@/components/shared'

interface Props {
  categories: Category[]
}

defineProps<Props>()
</script>

<style lang="scss" scoped></style>

<template>
  <ChooseProductModal v-if="data" :product="data" />
</template>

<script setup lang="ts">
import type { Product } from '@prisma/client'

import { ChooseProductModal } from '@/components/shared'

const parentRoute = useParentRoute()

const id = computed(() => Number.parseInt(parentRoute.params.id as string) || 1)

const { data } = await useFetch<Product>(`/api/products/product/${id.value}`)

if (!data.value) {
  await navigateTo({ path: '/404' })
}
</script>

<style scoped></style>

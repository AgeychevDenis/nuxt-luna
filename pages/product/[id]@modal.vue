<template>
  <ChooseProductModal v-if="data" :product="data" />
</template>

<script setup lang="ts">
import { ChooseProductModal } from '@/components/shared'

import type { ProductWithRelation } from '@/@types/prisma'

const parentRoute = useParentRoute()

const id = computed(() => Number.parseInt(parentRoute.params.id as string) || 1)

const { data } = await useFetch<ProductWithRelation>(`/api/products/product/${id.value}`)

if (!data.value) {
  await navigateTo({ path: '/404' })
}
</script>

<style scoped></style>

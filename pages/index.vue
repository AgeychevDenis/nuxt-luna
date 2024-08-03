<template>
  <AppContainer class="mt-10">
    <AppTitle text="Все пиццы" size="lg" class="font-extrabold" />
  </AppContainer>
  <TopBar :categories="categoriesTopBar" />

  <AppContainer class="mt-10 pb-14">
    <div class="flex gap-[60px]">
      <div class="w-[250px]">
        <AppFilters />
      </div>
      <div class="flex-1">
        <div class="flex flex-col gap-16">
          <template v-for="category in data" :key="category.id">
            <ProductsGroupList
              v-if="category.products.length > 0"
              :title="category.name"
              :categoryId="category.id"
              :items="category.products"
            />
          </template>
        </div>
      </div>
    </div>
  </AppContainer>
</template>

<script setup lang="ts">
import type { Category, Product } from '@prisma/client'

import { AppContainer, AppFilters, AppTitle, ProductsGroupList, TopBar } from '@/components/shared'

interface Categories extends Category {
  products: Product[]
}

const { data } = await useFetch<Categories[]>('/api/categories')

const categoriesTopBar = computed(() => data.value?.filter((category) => category.products.length > 0) || [])
</script>

<style scoped></style>

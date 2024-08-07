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
  <PlusModalPage name="modal" />
</template>

<script setup lang="ts">
import type { Category } from '@prisma/client'
import axios from 'axios'

import { AppContainer, AppFilters, AppTitle, ProductsGroupList, TopBar } from '@/components/shared'

import type { GetSearchParams, ProductWithRelation } from '@/@types/prisma'

interface Categories extends Category {
  products: ProductWithRelation[]
}

const route = useRoute()
const data = ref<Categories[]>([])

const categoriesTopBar = computed(() => data.value.filter((category) => category.products.length > 0) || [])
const hasUrlParameters = computed(() => route.fullPath.includes('?'))

if (!hasUrlParameters.value) {
  data.value = (await useFetch<Categories[]>('/api/categories/')).data.value || []
}

const fetchCategories = async (query: GetSearchParams) => {
  const { data: dataServer } = await axios.get<Categories[]>('/api/categories/', {
    params: query,
  })
  data.value = dataServer
}

watch(hasUrlParameters, () => {
  fetchCategories(route.query)
})
</script>

<style scoped></style>

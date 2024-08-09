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
import { useDebounceFn } from '@vueuse/core'
import axios from 'axios'

import { AppContainer, AppFilters, AppTitle, ProductsGroupList, TopBar } from '@/components/shared'

import type { GetSearchParams, ProductWithRelation } from '@/@types/prisma'

interface Categories extends Category {
  products: ProductWithRelation[]
}

const route = useRoute()
const data = ref<Categories[]>([])

const params = computed(() => ({
  sizesIds: useFilters().sizesIds,
  pizzaTypesIds: useFilters().pizzaTypesIds,
  ingredientsIds: useFilters().ingredientsIds,
  price: useFilters().price,
}))

const categoriesTopBar = computed(() => data.value.filter((category) => category.products.length > 0))

const hasUrlParameters = computed(() => route.fullPath === '/')

const fetchCategories = async (query: GetSearchParams) => {
  try {
    const { data: dataServer } = await axios.get<Categories[]>('/api/categories/', { params: query })
    data.value = dataServer
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}

const debouncedFetchCategories = useDebounceFn(() => {
  fetchCategories(route.query as GetSearchParams)
}, 300)

watch(params, () => {
  debouncedFetchCategories()
})

data.value = (await useFetch<Categories[]>('/api/categories/')).data.value || []
</script>

<style scoped></style>

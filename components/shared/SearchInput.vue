<template>
  <div v-if="isFocused" class="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"></div>

  <div ref="target" class="flex rounded-2xl flex-1 justify-between relative h-11 z-30">
    <Search class="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
    <input
      v-model="searchQuery"
      type="text"
      class="rounded-2xl outline-none w-full bg-gray-100 pl-11"
      placeholder="Найти товар..."
      @click="isFocused = true"
    />

    <div
      v-if="products.length > 0"
      class="absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30"
      :class="{ '!visible opacity-100 !top-12': isFocused }"
      @click="onClickItem"
    >
      <NuxtLink
        v-for="product in products"
        :key="product.id"
        :to="`/product/${product.id}`"
        class="flex items-center gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer"
      >
        <img class="rounded-sm h-8 w-8" :src="product.imageUrl" :alt="product.name" />
        <div class="">{{ product.name }}</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@prisma/client'
import { onClickOutside, useDebounceFn } from '@vueuse/core'
import { Search } from 'lucide-vue-next'

import { Api } from '@/services/api-client'

const target = ref(null)
const isFocused = ref(false)
const searchQuery = ref('')
const products = ref<Product[]>([])

onClickOutside(target, () => (isFocused.value = false))

const onClickItem = () => {
  isFocused.value = false
  products.value = []
  searchQuery.value = ''
}

const debouncedSearch = useDebounceFn(async (newVal: string) => {
  try {
    products.value = await Api.products.search(newVal)
  } catch (error) {
    console.error(error)
  }
}, 300)

watch(searchQuery, (newVal: string) => debouncedSearch(newVal))
</script>

<style scoped></style>

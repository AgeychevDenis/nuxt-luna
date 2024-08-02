<template>
  <div ref="root">
    <AppTitle :id="title" :text="title" size="md" class="font-extrabold mb-5" />

    <div :class="['grid grid-cols-3 gap-[50px]', listClassName]">
      <ProductCard
        v-for="product in items"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :image-url="product.imageUrl"
        :price="product.items[0].price"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppTitle, ProductCard } from '@/components/shared'

import { useCategoryStore } from '@/stores/CategoryStore'

interface Props {
  title: string
  items: any[]
  categoryId: number
  listClassName?: string
}

const props = defineProps<Props>()
const store = useCategoryStore()

const root = ref(null)

useIntersectionObserver(root, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    store.setActiveId(props.categoryId)
  }
})
</script>

<style scoped></style>

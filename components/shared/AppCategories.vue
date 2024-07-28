<template>
  <div class="inline-flex gap-1 bg-gray-50 p-1 rounded-2xl">
    <a
      v-for="(item, idx) in cars"
      :key="item.title"
      :class="['flex items-center font-bold h-11 rounded-2xl px-5', activeClass(idx)]"
      :href="`/#${item.title}`"
    >
      <Button class="hover:bg-transparent" variant="ghost">
        {{ item.title }}
      </Button>
    </a>
  </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/CategoryStore.ts'

const store = useCategoryStore()

const cars = [
  { id: 1, title: 'Пиццы' },
  { id: 2, title: 'Комбо' },
  { id: 3, title: 'Закуски' },
  { id: 4, title: 'Коктейли' },
  { id: 5, title: 'Кофе' },
  { id: 6, title: 'Напитки' },
  { id: 7, title: 'Десерты' },
]

const activeIndex = computed(() => store.activeId)

const activeClass = (idx: number) => {
  return idx + 1 === activeIndex.value ? 'bg-white shadow-md shadow-gray-200 text-primary' : ''
}
</script>

<style scoped></style>

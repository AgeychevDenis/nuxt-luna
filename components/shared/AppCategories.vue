<template>
  <div class="inline-flex gap-1 bg-gray-50 p-1 rounded-2xl">
    <a
      v-for="(item, idx) in items"
      :key="item.id"
      :class="['flex items-center font-bold h-11 rounded-2xl px-5', activeClass(idx)]"
      :href="`/#${item.name}`"
    >
      <Button class="hover:bg-transparent" variant="ghost">
        {{ item.name }}
      </Button>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Category } from '@prisma/client'

import { useCategoryStore } from '@/stores/CategoryStore'

interface Props {
  items: Category[]
}

defineProps<Props>()

const store = useCategoryStore()

const activeIndex = computed(() => store.activeId)

const activeClass = (idx: number) => {
  return idx + 1 === activeIndex.value ? 'bg-white shadow-md shadow-gray-200 text-primary' : ''
}
</script>

<style scoped></style>

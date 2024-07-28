<template>
  <div>
    <p class="font-bold mb-3">{{ title }}</p>
    <div class="mb-5" v-if="isShowAll">
      <Input class="bg-gray-50 border-none" v-model="searchValue" :placeholder="searchInputPlaceholder" />
    </div>

    <div class="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
      <FilterCheckbox
        v-for="(item, index) in list"
        :key="index"
        :text="item.text"
        :value="item.value"
        :checked="false"
        :onCheckedChange="() => console.log(item)"
      />
    </div>

    <div class="border-t border-t-neutral-100 mt-4">
      <Button @click="isShowAll = !isShowAll" class="text-primary mt-3" variant="secondary">{{ textBtn }}</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { FilterCheckbox } from '@/components/shared'

import type { FilterCheckboxProps } from './FilterCheckbox.vue'

type Item = FilterCheckboxProps

interface Props {
  title: string
  items: Item[]
  defaultItems: Item[]
  limit?: number
  searchInputPlaceholder?: string
  onChange?: (value: string[]) => void
}

const props = withDefaults(defineProps<Props>(), {
  limit: 5,
  searchInputPlaceholder: 'Поиск...',
})

const isShowAll = ref(false)
const searchValue = ref('')

const textBtn = computed(() => (isShowAll.value ? 'Скрыть' : '+ Показать все'))

const list = computed(() => {
  return isShowAll.value
    ? props.items.filter((item) => item.text.toLocaleLowerCase().includes(searchValue.value.toLocaleLowerCase()))
    : props.defaultItems.slice(0, props.limit)
})
</script>

<style scoped></style>

<template>
  <div>
    <AppTitle text="Фильтрация" size="sm" class="mb-5 font-bold" />

    <!-- Верхние чекбоксы -->
    <div class="flex flex-col gap-4">
      <FilterCheckbox text="Можно собирать" value="1" id="terms2" />
      <FilterCheckbox text="Новинки" value="2" />
    </div>

    <!-- Фильтр цен -->
    <div class="mt-10 pb-7">
      <p class="font-bold mb-3">Цена от и до:</p>
      <div class="flex gap-3 mb-5">
        <Input type="number" placeholder="0" :min="0" :max="30000" />
        <Input type="number" placeholder="1000" :min="100" :max="1000" />
      </div>

      <RangeSlider :min="0" :max="1000" />

      <CheckboxFiltersGroup
        title="Ингредиенты"
        :limit="6"
        :items="items"
        :default-items="items"
        :is-loading="isLoading"
        class="mt-5"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppTitle, CheckboxFiltersGroup, FilterCheckbox, RangeSlider } from '@/components/shared'

import { useFilterIngredients } from '@/composables/useFilterIngredients'

interface Items {
  value: string
  text: string
}

const items = ref<Items[]>([])
const isLoading = ref(false)

onMounted(async () => {
  isLoading.value = true

  const { ingredients } = await useFilterIngredients()

  items.value = ingredients?.map((item) => ({ value: String(item.id), text: String(item.name) }))

  isLoading.value = false
})
</script>

<style scoped></style>

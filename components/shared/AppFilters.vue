<template>
  <div>
    <AppTitle text="Фильтрация" size="sm" class="mb-5 font-bold" />

    <!-- Верхние чекбоксы -->
    <CheckboxFiltersGroup
      name="pizzaTypes"
      className="mb-5"
      title="Тип теста"
      :is-loading="false"
      :items="[
        { text: 'Тонкое', value: '1' },
        { text: 'Традиционное', value: '2' },
      ]"
      :on-click-checkbox="(id: string) => useToggleItemsIds(id, pizzaTypesIds)"
      :selected-ids="pizzaTypesIds"
    />

    <CheckboxFiltersGroup
      title="Размеры"
      name="sizes"
      class="mb-5"
      :items="[
        { text: '20 см', value: '20' },
        { text: '30 см', value: '30' },
        { text: '40 см', value: '40' },
      ]"
      :is-loading="false"
      :on-click-checkbox="(id: string) => useToggleItemsIds(id, sizesIds)"
      :selected-ids="sizesIds"
    />

    <!-- Фильтр цен -->
    <div class="mt-10 pb-7">
      <p class="font-bold mb-3">Цена от и до:</p>
      <div class="flex gap-3 mb-5">
        <Input type="number" placeholder="0" min="0" max="1000" v-model.number="price.priceFrom" />
        <Input type="number" placeholder="1000" min="100" max="1000" v-model.number="price.priceTo" />
      </div>

      <RangeSlider :min="0" :max="1000" v-model="price" :step="10" @value-change="updatePriceFromSlider" />

      <CheckboxFiltersGroup
        title="Ингредиенты"
        name="ingredients"
        :limit="6"
        :items="items"
        :default-items="items"
        :is-loading="isLoading"
        class="mt-5"
        :on-click-checkbox="(id: string) => useToggleItemsIds(id, ingredientsIds)"
        :selected-ids="ingredientsIds"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppTitle, CheckboxFiltersGroup, RangeSlider } from '@/components/shared'

import type { PriceProps } from '@/composables/useQueryFilters'

interface Items {
  value: string
  text: string
}

const { sizesIds, pizzaTypesIds, ingredientsIds, price, updatePriceFromSlider } = useFilters()

const items = ref<Items[]>([])
const isLoading = ref(false)

watch(
  price,
  (newVal: PriceProps) => {
    if (!newVal.priceFrom) {
      price.value.priceFrom = 0
    }

    if (!newVal.priceTo) {
      price.value.priceTo = 1000
    }
  },
  { deep: true }
)

useQueryFilters({
  price,
  ingredientsIds,
  sizesIds,
  pizzaTypesIds,
})

onMounted(async () => {
  isLoading.value = true

  const { ingredients } = await useIngredientsFilters()

  items.value = ingredients?.map((item) => ({ value: String(item.id), text: String(item.name) }))

  isLoading.value = false
})
</script>

<style scoped></style>

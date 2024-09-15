<template>
  <div>
    <AppTitle text="Фильтрация" size="sm" class="mb-5 font-bold" />

    <!-- Верхние чекбоксы -->
    <CheckboxFiltersGroup
      name="pizzaTypes"
      className="mb-5"
      title="Пол"
      :is-loading="false"
      :items="[
        { text: 'Женский', value: '1' },
        { text: 'Мужской', value: '2' },
      ]"
      :on-click-checkbox="(id: string) => useToggleItemsIds(id, pizzaTypesIds)"
      :selected-ids="pizzaTypesIds"
    />

    <CheckboxFiltersGroup
      title="Доступные объемы"
      name="sizes"
      class="mb-5"
      :items="[
        { text: '30 мг', value: '20' },
        { text: '50 мг', value: '30' },
        { text: '100 мг', value: '40' },
      ]"
      :is-loading="false"
      :on-click-checkbox="(id: string) => useToggleItemsIds(id, sizesIds)"
      :selected-ids="sizesIds"
    />

    <!-- Фильтр цен -->
    <div class="mt-10 pb-7">
      <p class="font-bold mb-3">Цена от и до:</p>
      <div class="flex gap-3 mb-5">
        <Input type="number" placeholder="0" min="0" max="50000" v-model.number="price.priceFrom" />
        <Input type="number" placeholder="50000" min="100" max="50000" v-model.number="price.priceTo" />
      </div>

      <RangeSlider :min="0" :max="50000" v-model="price" :step="10" @value-change="updatePriceFromSlider" />
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
      price.value.priceTo = 50000
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

<template>
  <div>
    <AppTitle text="Фильтрация" size="sm" class="mb-5 font-bold" />

    <!-- Верхние чекбоксы -->
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
      :on-click-checkbox="(id) => toggleItemsIds(id, sizesIds)"
      :selected-ids="sizesIds"
    />

    <CheckboxFiltersGroup
      name="pizzaTypes"
      className="mb-5"
      title="Тип теста"
      :is-loading="false"
      :items="[
        { text: 'Тонкое', value: '1' },
        { text: 'Традиционное', value: '2' },
      ]"
      :on-click-checkbox="(id) => toggleItemsIds(id, pizzaTypesIds)"
      :selected-ids="pizzaTypesIds"
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
        :on-click-checkbox="(id) => toggleItemsIds(id, ingredientsIds)"
        :selected-ids="ingredientsIds"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import qs from 'qs'
import type { LocationQueryValue } from 'vue-router'

import { AppTitle, CheckboxFiltersGroup, RangeSlider } from '@/components/shared'

import { useFilterIngredients } from '@/composables/useFilterIngredients'

interface Items {
  value: string
  text: string
}

interface PriceProps {
  priceFrom: number
  priceTo: number
}

const router = useRouter()
const query = useRoute().query

const items = ref<Items[]>([])
const isLoading = ref(false)
const price = ref<PriceProps>({
  priceFrom: Number(query.priceFrom) || 0,
  priceTo: Number(query.priceTo) || 0,
})

const processQuery = (queryField: LocationQueryValue | LocationQueryValue[] | undefined) => {
  if (Array.isArray(queryField)) {
    return new Set<string>()
  }
  return new Set<string>(queryField?.split(',') || [])
}

const sizesIds = ref(processQuery(query.sizes))
const pizzaTypesIds = ref(processQuery(query.pizzaTypes))
const ingredientsIds = ref(processQuery(query.ingredients))

const updatePriceFromSlider = (newValues: number[]) => {
  price.value.priceFrom = newValues[0]
  price.value.priceTo = newValues[1]
}

const toggleItemsIds = (item: string, items: Set<string>) => {
  if (items.has(item)) {
    items.delete(item)
  } else {
    items.add(item)
  }
}

watch(
  price,
  (newVal) => {
    if (!newVal.priceFrom) {
      price.value.priceFrom = 0
    }

    if (!newVal.priceTo) {
      price.value.priceTo = 1000
    }
  },
  { deep: true }
)

watch(
  [price, ingredientsIds, sizesIds, pizzaTypesIds],
  () => {
    const filters = {
      ...price.value,
      pizzaTypes: Array.from(pizzaTypesIds.value),
      sizes: Array.from(sizesIds.value),
      ingredients: Array.from(ingredientsIds.value),
    }

    const query = qs.stringify(filters, {
      arrayFormat: 'comma',
    })

    router.push(`?${query}`)
  },
  { deep: true }
)

onMounted(async () => {
  isLoading.value = true

  const { ingredients } = await useFilterIngredients()

  items.value = ingredients?.map((item) => ({ value: String(item.id), text: String(item.name) }))

  isLoading.value = false
})
</script>

<style scoped></style>

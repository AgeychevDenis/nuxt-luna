<template>
  <div class="flex flex-1">
    <ProductImage :image-url="imageUrl" :size="size" />

    <div class="w-[490px] bg-[#f7f6f5] p-7">
      <AppTitle :text="name" size="md" class="font-extrabold mb-1" />

      <p class="text-gray-400 mb-4">{{ textDetails }}</p>

      <GroupVariants
        :items="availablePizzaSizes"
        :value="String(size)"
        :on-click="(value) => (size = Number(value) as PizzaSize)"
        class="mb-2"
      />

      <GroupVariants
        :items="pizzaTypes"
        :value="String(type)"
        :on-click="(value) => (type = Number(value) as PizzaType)"
        class="mb-3"
      />

      <div class="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mb-8">
        <div class="grid grid-cols-3 gap-3">
          <AppIngredient
            v-for="ingredient in ingredients"
            :key="ingredient.id"
            :name="ingredient.name"
            :image-url="ingredient.imageUrl"
            :price="ingredient.price"
            :active="selectedIngredients.has(String(ingredient.id))"
            :on-click="() => useToggleItemsIds(String(ingredient.id), selectedIngredients)"
          />
        </div>
      </div>

      <Button @click="handleOnClick" class="h-[55px] px-10 text-base rounded-[18px] w-full">
        Добавить в корзину за {{ totalPrice }} ₽
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ingredient, ProductItem } from '@prisma/client'

import { AppIngredient, AppTitle, GroupVariants, ProductImage } from '@/components/shared'

import { mapPizzType, pizzaSizes, pizzaTypes } from '@/constants/pizza'
import type { PizzaSize, PizzaType } from '@/constants/pizza'

interface Props {
  imageUrl: string
  name: string
  ingredients: Ingredient[]
  items: ProductItem[]
  onClickAddCart?: VoidFunction
}

const props = defineProps<Props>()

const size = ref<PizzaSize>(20)
const type = ref<PizzaType>(1)

const textDetails = computed(() => `${size.value} см, ${mapPizzType[type.value]} пицца`)

const selectedIngredients = ref(new Set<string>([]))

const totalPrice = computed(() => {
  const totalIngredientsPrice = props.ingredients
    .filter((ingredient) => selectedIngredients.value.has(String(ingredient.id)))
    .reduce((acc, ingredient) => acc + ingredient.price, 0)

  const pizzaPrice = props.items.find((item) => item.pizzaType === type.value && item.size === size.value)?.price || 0

  return totalIngredientsPrice + pizzaPrice
})

const availablePizzaSizes = computed(() => {
  const filteredPizza = props.items.filter((item) => item.pizzaType === type.value)

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizza.some((pizza) => Number(pizza.size) === Number(item.value)),
  }))
})

const handleOnClick = () => {
  props.onClickAddCart?.()
}

watch(type, () => {
  const isAvailableSize = availablePizzaSizes.value.find((item) => Number(item.value) === size.value && !item.disabled)
  const availableSizes = availablePizzaSizes.value.find((item) => !item.disabled)

  if (!isAvailableSize && availableSizes) {
    size.value = Number(availableSizes.value) as PizzaSize
  }
})
</script>

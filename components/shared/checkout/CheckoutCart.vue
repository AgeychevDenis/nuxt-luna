<template>
  <WhiteBlock title="1. Корзина">
    <div class="flex flex-col gap-5">
      <CheckoutItemSkeleton v-if="store.loading" v-for="i in 4" :key="i" class="w-full h-11" />

      <div v-else v-for="item in data" :key="item.id">
        <CheckoutItem
          :id="item.id"
          :image-url="item.imageUrl"
          :details="getCartItemDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize)"
          :name="item.name"
          :price="item.price"
          :quantity="item.quantity"
          :on-click-count-button="(type: 'plus' | 'minus') => onClickCountButton(item.id, item.quantity, type)"
          :on-click-remove="() => store.removeCartItem(item.id)"
          :disabled="store.loading"
        />
      </div>
    </div>
  </WhiteBlock>
</template>

<script setup lang="ts">
import { CheckoutItem, CheckoutItemSkeleton, WhiteBlock } from '@/components/shared'

import type { PizzaSize, PizzaType } from '@/constants/pizza'
import type { CartStateItem } from '@/lib/getCartDetails'
import { getCartItemDetails } from '@/lib/getCartItemDetails'
import { CartStore } from '@/stores/CartStore'

interface Props {
  data: CartStateItem[]
  onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => Promise<void>
}

defineProps<Props>()

const store = CartStore()
</script>

<style scoped></style>

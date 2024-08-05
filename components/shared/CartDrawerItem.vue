<template>
  <div class="flex bg-white p-5 gap-6">
    <CartItemDetailsImage :src="imageUrl" />

    <div class="flex-1">
      <CartItemInfo :name="name" :details="details" />

      <hr class="my-3" />

      <div class="flex items-center justify-between">
        <CountButton :on-click="() => console.log(2)" :value="quantity" />

        <div class="flex items-center gap-3">
          <CartItemDetailsPrice :value="price" />
          <Trash2Icon @click="() => console.log(id)" class="text-gray-400 cursor-pointer hover:text-gray-600" :size="16" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Trash2Icon } from 'lucide-vue-next'

import { CountButton } from '@/components/shared'
import {
  CartItemDetailsImage,
  CartItemDetailsPrice,
  CartItemInfo,
  type CartItemProps,
} from '@/components/shared/cart-item-details'

defineProps<CartItemProps>()
</script>

<style scoped></style>

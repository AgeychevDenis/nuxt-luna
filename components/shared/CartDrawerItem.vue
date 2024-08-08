<template>
  <div class="flex bg-white p-5 gap-6" :class="{ 'opacity-50 pointer-events-none': disabled }">
    <CartItemDetailsImage :src="imageUrl" />

    <div class="flex-1">
      <CartItemInfo :name="name" :details="details" />

      <hr class="my-3" />

      <div class="flex items-center justify-between">
        <CountButton :on-click="onClickCountButton" :value="quantity" />

        <div class="flex items-center gap-3">
          <CartItemDetailsPrice :value="price" />
          <Trash2Icon @click="onClickRemove" class="text-gray-400 cursor-pointer hover:text-gray-600" :size="16" />
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

interface Props extends CartItemProps {
  onClickCountButton: (type: 'plus' | 'minus') => void
  onClickRemove?: () => void
  disabled: boolean
}

defineProps<Props>()
</script>

<style scoped></style>

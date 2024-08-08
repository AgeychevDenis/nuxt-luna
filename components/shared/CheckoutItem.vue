<template>
  <div class="flex items-center justify-between" :class="{ 'opacity-50 pointer-events-none': disabled }">
    <div class="flex items-center gap-5 flex-1">
      <CartItemDetailsImage :src="imageUrl" />
      <CartItemInfo :name="name" :details="details" />
    </div>

    <CartItemDetailsPrice :value="price" />

    <div class="flex items-center gap-5 ml-20">
      <CountButton @click="onClickCountButton" :value="quantity" />
      <button @click="onClickRemove">
        <X class="text-gray-400 cursor-pointer hover:text-gray-600" :size="20" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'

import { CountButton } from '@/components/shared'
import { CartItemDetailsImage, CartItemDetailsPrice, CartItemInfo } from '@/components/shared/cart-item-details'
import type { CartItemProps } from '@/components/shared/cart-item-details/CartItemDetails.types'

import type { CountButtonProps } from './CountButton.vue'

interface Props extends CartItemProps {
  onClickRemove: () => void
  onClickCountButton: CountButtonProps['onClick']
  details: string
  disabled: boolean
}

defineProps<Props>()
</script>

<style scoped></style>

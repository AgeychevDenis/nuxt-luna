<template>
  <div class="flex flex-1">
    <div className="flex items-center justify-center flex-1 relative w-full">
      <img :src="imageUrl" :alt="name" className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]" />
    </div>

    <div class="w-[490px] bg-[#f7f6f5] p-7">
      <AppTitle :text="name" size="md" class="font-extrabold mb-1" />

      <p class="text-gray-400 mb-6">{{ textDetaills }}</p>

      <Button class="h-[55px] px-10 text-base rounded-[18px] w-full">Добавить в корзину за {{ totalPrice }} ₽</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppTitle } from '@/components/shared'

interface Props {
  imageUrl: string
  name: string
  items?: any
  onClickAdd?: VoidFunction
}

defineProps<Props>()

const textDetaills = '30 см, традиционна тесто 30'
const totalPrice = 90
</script>

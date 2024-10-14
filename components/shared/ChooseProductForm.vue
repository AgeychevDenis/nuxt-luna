<template>
  <div class="flex flex-1">
    <div className="flex items-center justify-center relative w-full">
      <img :src="imageUrl" :alt="name" className="relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]" />
    </div>

    <div class="w-[490px] bg-[#f7f6f5] p-7 flex flex-col justify-between">
      <AppTitle :text="name" size="md" class="font-extrabold mb-1" />

      <Button
        @click="() => onSubmit?.()"
        :loading="loading"
        :disabled="loading"
        class="h-[55px] px-10 text-base rounded-[18px] w-full"
      >
        Добавить в корзину за {{ currency(price) }} ₽
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AppTitle } from '@/components/shared'

import { currency } from '@/helpers'

interface Props {
  imageUrl: string
  name: string
  items?: any
  price: number
  loading: boolean
  onSubmit: () => void
}

defineProps<Props>()
</script>

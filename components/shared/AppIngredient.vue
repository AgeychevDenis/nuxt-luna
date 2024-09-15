<template>
  <div
    @click="onClick"
    class="flex items-center flex-col justify-between p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white"
    :class="{ 'outline outline-1 outline-primary': active }"
  >
    <CircleCheck v-if="active" class="absolute top-2 right-2 text-primary" />
    <div class="mb-1">
      <img class="rounded-md mb-1 mx-auto" :src="imageUrl" width="110" height="110" />
      <span class="block text-xs">{{ name }}</span>
    </div>

    <span class="font-bold">{{ currency(price) }} ₽</span>
  </div>
</template>

<script setup lang="ts">
import { CircleCheck } from 'lucide-vue-next'

import { currency } from '@/helpers'

interface Props {
  imageUrl: string
  name: string
  price: number
  active?: boolean
  onClick?: () => void
}

defineProps<Props>()
</script>

<style scoped></style>

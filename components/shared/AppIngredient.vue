<template>
  <div
    @click="onClick"
    class="flex items-center flex-col justify-between p-1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white"
    :class="{ 'outline outline-1 outline-primary': active }"
  >
    <CircleCheck v-if="active" class="absolute top-2 right-2 text-primary" />
    <div>
      <img :src="imageUrl" width="110" height="110" />
      <span class="block text-xs mb-1">{{ name }}</span>
    </div>

    <span class="font-bold">{{ price }} ₽</span>
  </div>
</template>

<script setup lang="ts">
import { CircleCheck } from 'lucide-vue-next'

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

<template>
  <div>
    <NuxtLink>
      <div class="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
        <img class="w-[215px] h-[215px]" :src="imageUrl" :alt="name" />
      </div>

      <AppTitle :text="name" size="sm" class="mb-1 mt-3 font-bold" />

      <p class="text-sm text-gray-400">
        Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус
        альфредо, чеснок
      </p>

      <div class="flex justify-between items-center mt-4">
        <span class="text-[20px]">
          от
          <b>{{ price }} ₽</b>
        </span>

        <Button variant="secondary" class="text-base font-bold">
          <Plus class="w-5 h-5 mr-1" />
          Добавить
        </Button>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Plus } from 'lucide-vue-next'

import { AppTitle } from '@/components/shared'

interface Props {
  id: number
  name: string
  price: number
  imageUrl: string
}

defineProps<Props>()
</script>

<style scoped></style>

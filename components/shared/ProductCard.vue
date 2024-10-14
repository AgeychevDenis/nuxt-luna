<template>
  <div>
    <PlusModalLink :to="getProductPath(id)">
      <div class="flex justify-center p-6 bg-white border-[1px] border-[#ddebff] rounded-lg h-[260px]">
        <img class="w-[215px] h-[215px]" :src="imageUrl" :alt="name" />
      </div>

      <AppTitle :text="name" size="sm" class="mb-1 mt-3 font-bold" />

      <div class="flex justify-between items-center mt-4">
        <span class="text-[20px]">
          от
          <b>{{ currency(price) }} ₽</b>
        </span>

        <Button variant="secondary" class="text-base font-bold">
          <Plus class="w-5 h-5 mr-1" />
          Добавить
        </Button>
      </div>
    </PlusModalLink>
  </div>
</template>

<script setup lang="ts">
import type { Ingredient } from '@prisma/client'
import { Plus } from 'lucide-vue-next'

import { AppTitle } from '@/components/shared'

import { currency } from '@/helpers'

interface Props {
  id: number
  name: string
  price: number
  imageUrl: string
  ingredients: Ingredient[]
}

const getProductPath = (id: number) => `/product/${id}`

defineProps<Props>()
</script>

<style scoped></style>

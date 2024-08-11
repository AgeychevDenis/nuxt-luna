<template>
  <div class="flex items-center justify-between w-[840px] gap-12">
    <div class="flex flex-col">
      <div class="w-[445px]">
        <AppTitle size="lg" :text="title" class="font-extrabold" />
        <p class="text-gray-400 text-lg">{{ text }}</p>
      </div>

      <div class="flex gap-5 mt-11">
        <NuxtLink to="/">
          <Button variant="outline" class="gap-2">
            <ArrowLeft />
            На главную
          </Button>
        </NuxtLink>
        <a href="">
          <Button variant="outline" class="text-gray-500 border-gray-400 hover:bg-gray-50">Обновить</Button>
        </a>
      </div>
    </div>

    <img :src="imageUrl" :alt="title" :width="300" />
  </div>
</template>

<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next'

import { AppTitle } from '@/components/shared'

interface Props {
  title: string
  text: string
  class?: string
  imageUrl?: string
}

defineProps<Props>()
</script>

<style scoped></style>

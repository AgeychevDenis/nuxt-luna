<template>
  <div class="bg-white rounded-3xl">
    <div v-if="title" class="flex items-center justify-between p-5 px-7 border-b border-gray-50">
      <AppTitle :text="title" size="sm" class="font-bold" />
      <slot name="title"></slot>
    </div>

    <div :class="['px-5 py-4', contentClassName]"><slot /></div>
  </div>
</template>

<script setup lang="ts">
import { AppTitle } from '@/components/shared'

interface Props {
  contentClassName?: string
  title?: string
}

defineProps<Props>()
</script>

<style scoped></style>

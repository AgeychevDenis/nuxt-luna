<template>
  <div class="inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer">
    <ArrowUpDown class="w-4 h-4" />
    <b>Сортировка:</b>

    <b class="text-primary">популярное</b>
  </div>
</template>

<script setup lang="ts">
import { ArrowUpDown } from 'lucide-vue-next'
</script>

<style scoped></style>

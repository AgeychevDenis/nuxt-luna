<template>
  <div class="flex items-center justify-center flex-1 relative w-full">
    <img
      :src="imageUrl"
      alt="Logo"
      class="relative left-2 top-2 transition-all z-10 duration-300"
      :class="[
        { 'w-[300px] h-[300px]': size === 20 },
        { 'w-[400px] h-[400px]': size === 30 },
        { 'w-[500px] h-[500px]': size === 40 },
      ]"
    />

    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]"
    />
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  imageUrl: string
  size: number
}

defineProps<Props>()
</script>

<style scoped></style>

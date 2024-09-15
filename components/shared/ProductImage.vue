<template>
  <div class="flex items-center justify-center flex-1 relative w-full">
    <img :src="imageUrl" alt="Logo" class="relative left-2 top-2 transition-all z-10 duration-300 w-[500px] h-[500px]" />
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

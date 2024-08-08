<template>
  <div class="flex my-4">
    <span class="flex flex-1 text-lg text-neutral-500">
      <slot />
      <div class="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
    </span>

    <span class="font-bold text-lg">{{ value }} ₽</span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  value: number
}

defineProps<Props>()
</script>

<style scoped></style>

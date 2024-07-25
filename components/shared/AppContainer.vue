<template>
  <div class="mx-auto max-w-[1280px]" :class="className"><slot /></div>
</template>

<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>

<style scoped></style>

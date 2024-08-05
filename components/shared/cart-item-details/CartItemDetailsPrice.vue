<template>
  <h2 class="font-bold">{{ value }} ₽</h2>
</template>

<script setup lang="ts">
interface Props {
  value: number
}

defineProps<Props>()
</script>

<style scoped></style>

<template>
  <h2 class="font-bold">{{ currency(value) }} ₽</h2>
</template>

<script setup lang="ts">
import { currency } from '@/helpers'

interface Props {
  value: number
}

defineProps<Props>()
</script>

<style scoped></style>

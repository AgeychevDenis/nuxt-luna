<template>
  <div class="inline-flex items-center justify-between gap-3">
    <CountIconButton @click="() => onClick?.('minus')" :disabled="value === 1" :size="size" type="minus" />

    <b :class="[size === 'sm' ? 'text-sm' : 'text-md']">{{ value }}</b>

    <CountIconButton @click="() => onClick?.('plus')" :size="size" type="plus" />
  </div>
</template>

<script setup lang="ts">
import { CountIconButton } from '@/components/shared'

export interface CountButtonProps {
  value?: number
  size?: 'sm' | 'lg'
  onClick?: (type: 'plus' | 'minus') => void
}

defineProps<CountButtonProps>()
</script>

<style scoped></style>

<template>
  <Button
    variant="outline"
    :disabled="disabled"
    @click="onClick"
    class="w-10 p-0 hover:bg-primary hover:text-white disabled:bg-white disabled:border-gray-400 disabled:text-gray-400"
  >
    <Plus v-if="type === 'plus'" :class="[size === 'sm' ? 'h-4' : 'h-5']" />

    <Minus v-else :class="[size === 'sm' ? 'h-4' : 'h-5']" />
  </Button>
</template>

<script setup lang="ts">
import { Minus, Plus } from 'lucide-vue-next'

import type { CountButtonProps } from './CountButton.vue'

interface IconButtonProps {
  size?: CountButtonProps['size']
  disabled?: boolean
  type?: 'plus' | 'minus'
  onClick?: () => void
}

defineProps<IconButtonProps>()
</script>

<style scoped></style>

<script setup lang="ts">
import { type ButtonVariants, buttonVariants } from '.'
import { Loader2 } from 'lucide-vue-next'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

import { cn } from '@/lib/utils'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  loading: false,
})
</script>

<template>
  <Primitive :as="as" :as-child="asChild" class="flex gap-2" :class="cn(buttonVariants({ variant, size }), props.class)">
    <Loader2 v-if="loading" class="w-5 h-5 animate-spin" />
    <slot v-else />
  </Primitive>
</template>

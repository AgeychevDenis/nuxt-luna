<template>
  <CartDrawer>
    <Button :loading="store.loading" :disabled="store.loading" class="group relative" :class="{ 'w-[135px]': store.loading }">
      <b>{{ store.totalAmount }} ₽</b>
      <span class="h-full w-[1px] bg-white/30 mx-3" />
      <div class="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
        <ShoppingCart class="h-4 w-4 relative" :strokeWidth="2" />
        <b>{{ store.items.length }}</b>
      </div>
      <ArrowRight
        :size="20"
        class="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
      />
    </Button>
  </CartDrawer>
</template>

<script setup lang="ts">
import { ArrowRight, ShoppingCart } from 'lucide-vue-next'

import { CartDrawer } from '@/components/shared'

import { CartStore } from '@/stores/CartStore'

const store = CartStore()

onMounted(async () => {
  await store.fetchCartItems()
})
</script>

<style scoped></style>

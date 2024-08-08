<template>
  <div>
    <AppHeader :has-search="false" :has-cart="false" class="bg-[#F4F1EE]" />
    <main class="min-h-screen bg-[#F4F1EE]">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { AppHeader } from '@/components/shared'

useHead({
  title: 'Nuxt Pizza | Корзина',
})
</script>

<style scoped></style>

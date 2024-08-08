<template>
  <div>
    <AppHeader />
    <main class="min-h-screen">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/shared/AppHeader.vue'

useHead({
  title: 'Nuxt Pizza | Главная',
})
</script>

<style scoped></style>

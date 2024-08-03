<template>
  <div>
    <AppHeader />
    <main class="min-h-screen">
      <slot />
    </main>
    <PlusModalPage name="modal" />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/shared/AppHeader.vue'
</script>

<style scoped></style>

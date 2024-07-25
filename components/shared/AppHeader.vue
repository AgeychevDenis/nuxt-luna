<template>
  <header class="border border-b">
    <AppContainer :className="'flex items-center justify-between py-8'">
      <div>
        <Image></Image>
      </div>
    </AppContainer>
  </header>
</template>

<script setup lang="ts">
import AppContainer from '@/components/shared/AppContainer.vue'
</script>

<style scoped></style>

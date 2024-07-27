<template>
  <AppContainer class="mt-10">
    <AppTitle text="Все пиццы" size="lg" class="font-extrabold" />
  </AppContainer>
  <TopBar />

  <AppContainer class="mt-10 pb-14">
    <div class="flex gap-[60px]">
      <div class="w-[250px]"><AppFilters /></div>
      <div class="flex-1">
        <div class="flex flex-col gap-16">Список товаров</div>
      </div>
    </div>
  </AppContainer>
</template>

<script setup lang="ts">
import { AppContainer, AppFilters, AppTitle, TopBar } from '@/components/shared'
</script>

<style scoped></style>

<template>
  <header class="border border-b">
    <AppContainer class="flex items-center justify-between py-8">
      <NuxtLink to="/" class="flex items-center gap-4">
        <img src="/logo.png" width="35px" height="35px" alt="logo" />
        <div>
          <h1 class="text-2xl uppercase font-black">Nuxt Pizza</h1>
          <p class="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
        </div>
      </NuxtLink>

      <div class="mx-10 flex-1">
        <SearchInput />
      </div>

      <div class="flex items-center gap-3">
        <Button variant="outline" class="flex items-center gap-1">
          <User :size="16" />
          Войти
        </Button>

        <div>
          <Button class="group relative">
            <b>520 ₽</b>
            <span class="h-full w-[1px] bg-white/30 mx-3" />
            <div class="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
              <ShoppingCart class="h-4 w-4 relative" :strokeWidth="2" />
              <b>3</b>
            </div>
            <ArrowRight
              :size="20"
              class="absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
            />
          </Button>
        </div>
      </div>
    </AppContainer>
  </header>
</template>

<script setup lang="ts">
import { ArrowRight, ShoppingCart, User } from 'lucide-vue-next'

import { AppContainer, SearchInput } from '@/components/shared'
</script>

<style scoped></style>
